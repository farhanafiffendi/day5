let blogs = []


function addBlog(event) {

    event.preventDefault()

    let name = document.getElementById('input-project').value
    let start = document.getElementById('input-start-date').value
    let end = document.getElementById('input-end-date').value
    let description = document.getElementById('input-description').value
    let image = document.getElementById('input-blog-image').files

    let node = document.getElementById('input-node').checked
    let html = document.getElementById('input-html').checked
    let react = document.getElementById('input-react').checked
    let javascript = document.getElementById('input-javascript').checked

    if(node){
        node = document.getElementById('input-node').value
    } else {
        node = ''
    }

    if(react){
        react = document.getElementById('input-react').value
    } else {
        react = ''
    }

    if(javascript){
        javascript = document.getElementById('input-javascript').value
    } else {
        javascript = ''
    }

    if(html){
        html = document.getElementById('input-html').value
    } else {
        html = ''
    }


    image = URL.createObjectURL(image[0])

    let blog = {
        name: name,
        description: description,
        node: node,
        react: react,
        javascript: javascript,
        html: html,
        start: start,
        end: end,
        author: 'Farhan Afiffendi',
        image: image,
    }

        blogs.push(blog)
        console.log(blogs);

renderBlog()
}

let firstBlog =
`           
           <div class="blog-list-item">
                <div class="blog-image">
                    <img src="https://media.istockphoto.com/photos/smart-female-it-programer-working-on-desktop-computer-in-data-center-picture-id1194430803"
                        alt="" />
                </div>
                <div class="blog-content">
                    <h1>
                        <a style="font-size: 18px;" href="blog-detail.html" target="_blank">Dumbways Mobile App 2022
                        </a>
                    </h1>
                    <p class="teks">Durasi: 2 hari</p>
                    <i class="fa-brands fa-node-js" style="font-size: 30px;"></i>
                    <i class="fa-brands fa-react" style="font-size: 30px;"></i>
                    <i class="fa-brands fa-html5" style="font-size: 30px;"></i>
                    <p style="font-size: 12px;">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quod cum commodi reprehenderit
                        molestias ad corporis, aperiam temporibus perspiciatis quisquam.
                    </p>
                    <div class="btn-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-post">Delete</button>
                    </div>
                </div>
            </div>

            <div class="blog-list-item">
                <div class="blog-image">
                    <img src="https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/dev_technosys_android_app_developer.png"
                        alt="" />
                </div>
                <div class="blog-content">
                    <h1>
                        <a style="font-size: 18px;" href="blog-detail.html" target="_blank">Dumbways Mobile App 2022
                        </a>
                    </h1>
                    <p class="teks">Durasi: 2 hari</p>
                    <i class="fa-brands fa-node-js" style="font-size: 30px;"></i>
                    <i class="fa-brands fa-react" style="font-size: 30px;"></i>
                    <i class="fa-brands fa-html5" style="font-size: 30px;"></i>
                    <p style="font-size: 12px;">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ut tenetur impedit provident
                        doloremque sit cumque voluptatem nobis quo inventore?
                    </p>
                    <div class="btn-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-post">Delete</button>
                    </div>
                </div>
            </div>

            <div class="blog-list-item">
                <div class="blog-image">
                    <img src="http://www.ellocentlabs.com/wp-content/uploads/2021/03/Mobile-App-Development-Services.png"
                        alt="" />
                </div>
                <div class="blog-content">
                    <h1>
                        <a style="font-size: 18px;" href="blog-detail.html" target="_blank">Dumbways Mobile App 2022
                        </a>
                    </h1>
                    <p class="teks">Durasi: 2 hari</p>
                    <i class="fa-brands fa-node-js" style="font-size: 30px;"></i>
                    <i class="fa-brands fa-react" style="font-size: 30px;"></i>
                    <i class="fa-brands fa-html5" style="font-size: 30px;"></i>
                    <p style="font-size: 12px;">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nisi ex, recusandae in nesciunt
                        sequi quidem ipsa sed quasi perspiciatis.
                    </p>
                    <div class="btn-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-post">Delete</button>
                    </div>
                </div>
            </div>

`

function renderBlog() {

    document.getElementById('contents').innerHTML = firstBlog

    for (let dataBlog = 0; dataBlog < blogs.length; dataBlog++) {

        document.getElementById('contents').innerHTML +=
        `
            <div class="blog-list-item">
                <div class="blog-image">
                    <img src=${blogs[dataBlog].image} alt="" />
                </div>
                <div class="blog-content">
                    <h1>
                        <a href="blog-detail.html" target="_blank">
                        ${blogs[dataBlog].name}</a>
                         <p class="teks">Durasi: ${getDate(blogs[dataBlog].start, blogs[dataBlog].end)}</p> 
                    </h1>
                    <div class="detail-blog-content">
                    </div>
                    <i class="${blogs[dataBlog].node}" style="font-size: 30px;"></i>
                    <i class="${blogs[dataBlog].javascript}" style="font-size: 30px;"></i>
                    <i class="${blogs[dataBlog].react}" style="font-size: 30px;"></i>
                    <i class="${blogs[dataBlog].html}" style="font-size: 30px;"></i>
                    <p>
                    ${blogs[dataBlog].description}
                    </p>
                    <div class="btn-group" style= "margin-top: 20px;">
                    <button class="btn-edit">Edit</button>
                    <button class="btn-post">Delete</button>
                </div>
            </div>
        `
    }

}

function getDate(start, end) {


    let startDate = new Date(start);
    let endDate = new Date(end);
    let hasil = endDate - startDate;
    let milisecond = 1000;
    let second = 3600;
    let hours = 24;
    let day = Math.floor(hasil / (milisecond * second * hours));
    let month = Math.floor(day / 30);


    if (day <= 30) {
        return `${day} hari`;
    } else if (day > 30 ) {
        return `${month} bulan`;
    }
}

