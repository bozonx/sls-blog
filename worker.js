// Воркер для раздачи статических файлов VitePress из каталога `src/.vitepress/dist`
// Используется нативная привязка статических ассетов Cloudflare Workers через binding `ASSETS`

export default {
  /**
   * Обработчик запросов воркера
   * - Пытается отдать статический файл из `ASSETS`
   * - Если файл не найден, пробует вернуть `404.html` со статусом 404
   * - Корректирует заголовки для XML файлов для правильной кодировки
   */
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Отдаём статические файлы из привязки ассетов
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse && assetResponse.status !== 404) {
      // Проверяем, является ли файл XML/RSS
      if (
        pathname.endsWith(".rss") ||
        pathname.endsWith(".xml") ||
        pathname.endsWith(".atom")
      ) {
        // Создаём новые заголовки с явным указанием кодировки UTF-8
        const headers = new Headers(assetResponse.headers);

        // Всегда устанавливаем правильный Content-Type для XML файлов
        if (pathname.endsWith(".rss")) {
          headers.set("content-type", "application/rss+xml; charset=utf-8");
        } else if (pathname.endsWith(".xml")) {
          headers.set("content-type", "application/xml; charset=utf-8");
        } else if (pathname.endsWith(".atom")) {
          headers.set("content-type", "application/atom+xml; charset=utf-8");
        }

        // Возвращаем ответ с исправленными заголовками
        return new Response(assetResponse.body, {
          status: assetResponse.status,
          headers: headers,
        });
      }

      return assetResponse;
    }

    // Файл не найден — пробуем вернуть статическую страницу 404
    const notFoundRequest = new Request(new URL("/404.html", url.origin), {
      headers: request.headers,
      method: "GET",
    });

    const notFoundResponse = await env.ASSETS.fetch(notFoundRequest);
    if (notFoundResponse && notFoundResponse.status === 200) {
      // Возвращаем содержимое 404.html, но со статусом 404
      return new Response(notFoundResponse.body, {
        status: 404,
        headers: notFoundResponse.headers,
      });
    }

    return new Response("Not found", { status: 404 });
  },
};
