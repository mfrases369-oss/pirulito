document.addEventListener("DOMContentLoaded", () => {
  function e() {
    const e = new URLSearchParams(window.location.search),
      t = e.get("b4f");
    if (t) localStorage.setItem("b4f", t);
    else {
      const t = localStorage.getItem("b4f");
      t &&
        !e.has("b4f") &&
        (e.set("b4f", t),
        window.history.replaceState(
          {},
          "",
          `${window.location.pathname}?${e}`,
        ));
    }
  }
  function t() {
    const e = new URLSearchParams(window.location.search);
    "" !== e.toString() &&
      document.querySelectorAll("a[href]").forEach((t) => {
        const r = new URL(t.href, window.location.origin);
        r.origin === window.location.origin &&
          e.forEach((e, o) => {
            r.searchParams.has(o) || r.searchParams.set(o, e);
          }),
          (t.href = r.toString());
      });
  }
  e(), t();
});
