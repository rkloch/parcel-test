const img = document.createElement('img');
document.body.append(img);

const imgURL = new URL('./media/images.png', import.meta.url);
img.src = imgURL.href;