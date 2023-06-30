export const author = 'Dilraj Pabla';

export const currentYear = new Date().getFullYear();

export const restBase = 'https://dillyp.com/portfolio/wp-json/wp/v2';

//for the featured images
export const featuredImage = ( featuredImageObject ) => {
    let imgWidth = featuredImageObject.media_details.sizes.full.width;
    let imgHeight = featuredImageObject.media_details.sizes.full.height;
    let imgURL = featuredImageObject.source_url;
    let img = `<img src="${imgURL}" 
        width="${imgWidth}"
        height="${imgHeight}"
        alt="${featuredImageObject.alt_text}"
        srcset="${imgURL} ${imgWidth}w,
        ${featuredImageObject.media_details.sizes.large ? featuredImageObject.media_details.sizes.large.source_url + ' 1024w,' : ''}
        ${featuredImageObject.media_details.sizes.medium_large ? featuredImageObject.media_details.sizes.medium_large.source_url + ' 768w,' : ''}
        ${featuredImageObject.media_details.sizes.medium ? featuredImageObject.media_details.sizes.medium.source_url + ' 300w' : ''}"
        sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    return {__html: img}
};

//for acf image gallery field
export const acfImageHTML = ( data ) => {
    let imgURL = data.url;
    let imgWidth = data.width;
    let imgHeight = data.height;
    let imgAlt = data.alt;
    
    let img = `<img src="${imgURL}" 
        width="${imgWidth}"
        height="${imgHeight}"
        alt="${imgAlt}"
        srcset="${imgURL} ${imgWidth}w,
          ${data.sizes.large ? data.sizes.large + ' 1024w,' : ''}
          ${data.sizes.medium_large ? data.sizes.medium_large + ' 768w,' : ''}
          ${data.sizes.medium ? data.sizes.medium + ' 300w' : ''}"
        sizes="(max-width: ${imgWidth}px) 100vw, ${imgWidth}px">`;
    
    return {__html: img};
}