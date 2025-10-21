javascript:(function() {
    const blocks = document.querySelectorAll('[class^="Markdown_markdownContainer"] > div :is(p, ul > li, ol > li, h1, h2, h3, h4)');
    const rtlRegex = /[\u0600-\u06FF\u0750-\u077F]/;

    blocks.forEach(p => {
        if (!p.hasAttribute('data-checked')) {
            if (rtlRegex.test(p.innerText)) {
                p.style.direction = 'rtl';
                p.style.textAlign = 'right';
            }
            p.setAttribute('data-checked', 'true');
        }
    });
})();
