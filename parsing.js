
import DomParser from "dom-parser";
var parser = new DomParser();


const getLink = async (url) => {
  try {
    if(url.length > 100){
   
      throw(err)
     }
  } catch (err) {
    return 'error'
  }
   

  const response = await fetch(url);
  const body = await response.text();

  const parsed = parsing(body);
  return parsed;
};
// virus ,ssl https!== , 100 char, 
//

const parsing = async (body) => {
  const doc = parser.parseFromString(body, "text/html");
 
  const metaTitle = "og:title";
  const metaDescription = "og:description";
  const metaImage = "og:image";

  let titleValue = null;

  let descriptionValue = null;

  let imageValue = null;

  const metaTags = doc.getElementsByTagName("meta");
  metaTags.forEach((metaTag) => {
    const property = metaTag.getAttribute("property");
    const content = metaTag.getAttribute("content");

    if (property) {
      if (property === metaTitle && content) {
        titleValue = content;
      }
      if (property === metaDescription && content) {
        descriptionValue = content;
      }

      if (property === metaImage && content) {
        imageValue = content;
      }
    }
  });
  const metadata = {};

  metadata["title"] = titleValue;
  metadata["description"] = descriptionValue;
  metadata["image"] = imageValue;


  return metadata;
};



export default getLink;