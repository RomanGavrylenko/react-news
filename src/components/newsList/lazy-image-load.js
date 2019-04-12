export function isVisible(elem) {
  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

export function showVisible() {
  let imgs = document.querySelectorAll('img');

  for(let img of imgs){
    let realsrc = img.getAttribute('data-src');
    if (!realsrc) continue;

    if (isVisible(img)) {
      img.src = realsrc;
      img.dataset.src = '';
    }
  }
}

