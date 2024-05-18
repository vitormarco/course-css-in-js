SHOES.map(i => `
    <a class="shoe-card" href="/slug/${i.slug}">
        <article class="shoe-card__card">
            <figure class="shoe-card__card__img">
                <img src="./public/assets/img/${i.imageSrc.replace("/assets", "")}" alt="">
            </figure>
            <span class="shoe-card__card__spacer"></span>
            <div class="shoe-card__card__row">
                <h3 class="shoe-card__card__row__title">${i.name}</h3>
                <span class="shoe-card__card__row__price">&#36 ${i.price/100}</span>
            </div>
            <div class="shoe-card__card__row">
                <p class="shoe-card__card__row__colors">${i.numOfColors} ${i.numOfColors > 1 ? "Colors" : "Color"}</p>
            </div>
        </article>
    </a>
`)