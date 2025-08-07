// Воркер для раздачи статических файлов VitePress из каталога `src/.vitepress/dist`
// Используется нативная привязка статических ассетов Cloudflare Workers через binding `ASSETS`

export default {
  /**
   * Обработчик запросов воркера
   * - Пытается отдать статический файл из `ASSETS`
   * - Если файл не найден, пробует вернуть `404.html` со статусом 404
   */
  async fetch(request, env) {
    // Отдаём статические файлы из привязки ассетов
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse && assetResponse.status !== 404) {
      return assetResponse;
    }

    // Файл не найден — пробуем вернуть статическую страницу 404
    const url = new URL(request.url);
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
