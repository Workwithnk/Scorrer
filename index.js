const dataURL = "https://www.scorebat.com/video-api/v1/";

const singleData = document.getElementById("dataContainer");

const fetchData = async () => {
  let responce = await fetch(dataURL);
  let result = await responce.json();
  let allData = "";
  result.forEach((element) => {
    let html = `<div class="singleData">
                  <div class="videoData">
                    ${element.embed}
                  </div>
                   <div class="thumbData">
                      <img src="${element.thumbnail}" alt="logo" />
                      <span>${element.title}</span>
                   </div>
                </div>`;
    allData += html;
  });
  singleData.innerHTML = allData;
};
fetchData();
