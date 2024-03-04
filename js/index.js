// click all checkbox table

function clickAllCkb(){
    let checkboxes = document.getElementsByName('ckb');

        if(document.querySelector("#ckb_head").checked == true)
        {
            // Lặp và thiết lập checked
            for (let i = 0; i < checkboxes.length; i++){
                checkboxes[i].checked = true;
            }
        }
        else
        {
            // Lặp và thiết lập checked
            for (let i = 0; i < checkboxes.length; i++){
                checkboxes[i].checked = false;
            }
        }
}

// display detail product
function displayDetailProduct(){
    let checkDisplay = document.getElementById("detailProduct").style.display;

    if(checkDisplay == ''){
        document.getElementById("detailProduct").style.display = "block";
    }
    if(checkDisplay == "block"){
        document.getElementById("detailProduct").style.display = "";
    }
}

// save detail product
function SaveDetailProduct(){
    // save data

    //close dialog form
    displayDetailProduct();
}

// change type display
function changeDisplay(){
    let nuclear = document.getElementById("nuclear").style.marginLeft;

    if(nuclear==""){
        document.getElementById("nuclear").style.marginLeft = "50px";
        document.getElementById("style-grid").style.display = "none";
        document.getElementById("style-detail").style.display = "block";
    }
    else{
        document.getElementById("nuclear").style.marginLeft = "";
        document.getElementById("style-grid").style.display = "flex";
        document.getElementById("style-detail").style.display = "none";
    }
}

// change style
function changeStyle(){

}

// checked create bill
function changeCreateBillDate(){
    let ipDate = document.getElementById("inputdate").checked;

    if(ipDate == true){
        document.getElementById("inputdate").checked = true;
        document.getElementById("inputmonth").checked = false;
        document.getElementById("inputyear").checked = false;
        console.log("true");
    }
}

function changeCreateBillMonth(){
    let ipMonth = document.getElementById("inputmonth").checked;

    if(ipMonth == true){
        document.getElementById("inputmonth").checked = true;
        document.getElementById("inputdate").checked = false;
        document.getElementById("inputyear").checked = false;
        console.log("true");
    }
}

function changeCreateBillYear(){
    let ipYear = document.getElementById("inputyear").checked;

    if(ipYear == true){
        document.getElementById("inputyear").checked = true;
        document.getElementById("inputdate").checked = false;
        document.getElementById("inputmonth").checked = false;
        console.log("true");
    }
}

// multi choice with shift key
function multiChoice_Shift(){
    let indexStart;
}

// function getData(){
//     // get data from xml
//     // const axios = require('axios');

//     // Thông tin cần thiết
//     const githubUsername = 'IL-vin9220';
//     const githubRepo = 'Web-ChiTieuHangNgay';
//     const filePath = 'Web-ChiTieuHangNgay/irregular.xml';
//     const accessToken = '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'; // Cần token quyền truy cập để sửa đổi

//     // URL của tập tin XML trên GitHub
//     const xmlFileUrl = `https://raw.githubusercontent.com/${githubUsername}/${githubRepo}/main/${filePath}`;

//     // Dữ liệu XML mới bạn muốn cập nhật
//     // const newXmlData = `
//     // <root>
//     // <item>
//     //     <title>New Title</title>
//     //     <description>New Description</description>
//     // </item>
//     // </root>
//     // `;

//     // Cấu hình axios để gửi yêu cầu PUT
//     const config = {
//     headers: {
//         'Authorization': `token ${accessToken}`,
//         'Content-Type': 'text/xml'
//     }
//     };

//     // Gửi yêu cầu PUT để cập nhật nội dung của tập tin XML trên GitHub
//     axios.put(xmlFileUrl, newXmlData, config)
//     .then(response => {
//         console.log('File updated successfully:', response.data);
//     })
//     .catch(error => {
//         console.error('Error updating file:', error.response.data);
//     });

// }

// function funcTest(){
//     const githubUsername = 'IL-vin9220';
//     const githubRepo = 'Web-ChiTieuHangNgay';
//     const filePath = 'irregular.xml';
//     const accessToken = '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'; // Cần token quyền truy cập để sửa đổi

//     // URL của tập tin XML trên GitHub
//     // const xmlFileUrl = `https://raw.githubusercontent.com/${githubUsername}/${githubRepo}/main/${filePath}`;
//     const xmlFileUrl = `https://github.com/IL-vin9220/Web-ChiTieuHangNgay/master/irregular.xml`;

//     // Sử dụng Fetch API để tải xuống nội dung của file XML
//     fetch(xmlFileUrl)
//     .then(response => response.text())
//     .then(xmlText => {
//         // Sử dụng DOMParser để phân tích nội dung XML thành một DOM Document
//         var parser = new DOMParser();
//         var xmlDoc = parser.parseFromString(xmlText, 'text/xml');

//         // Xử lý dữ liệu XML ở đây, ví dụ:
//         var items = xmlDoc.getElementsByTagName('item');
//         for (var i = 0; i < items.length; i++) {
//         var item = items[i];
//         var title = item.getElementsByTagName('title')[0].textContent;
//         var description = item.getElementsByTagName('description')[0].textContent;
//         console.log('Title: ' + title + ', Description: ' + description);
//         }
//     })
//     .catch(error => {
//         console.error('Fetch error:', error);
//     });

// }

function GetDataFromClient(){
    let record = {};
    let proName = document.getElementById("inputProductName").value;
    let proCost = document.getElementById("inputProductCost").value;
    let time = document.getElementById("inputTime");
    let proTime = time.options[time.selectedIndex].text;
    let proDate = document.getElementById("inputDate").value;
    let placeBuy = document.getElementById("inputPlaceBuy").value;
    let note = document.getElementById("inputNote").value;

    record.name = proName;
    record.cost = proCost;
    record.time = proTime;
    record.date = proDate;
    record.place = placeBuy;
    record.note = note;
    console.log(record);

    return record;
}

// set value input default
function CancelInputData(){
    document.getElementById("inputProductName").value = "";
    document.getElementById("inputProductCost").value = "";
    let time = document.getElementById("inputTime");
    time.options[time.selectedIndex='0'].text;
    document.getElementById("inputDate").value = "";
    document.getElementById("inputPlaceBuy").value = "";
    document.getElementById("inputNote").value = "";
}

function ReadJsonData(){
    const githubUsername = 'IL-vin9220';
    const githubRepo = 'Web-ChiTieuHangNgay';
    // const filePath = 'irregular.xml';
    const accessToken = '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'; // Cần token quyền truy cập để sửa đổi
    // URL của file JSON trên GitHub
    var jsonFileUrl = 'https://raw.githubusercontent.com/IL-vin9220/Web-ChiTieuHangNgay/master/data.json';

    // Sử dụng Fetch API để tải xuống nội dung của file JSON
    fetch(jsonFileUrl)
    .then(response => response.json())
    .then(jsonData => {
        // Xử lý dữ liệu JSON ở đây
        console.log(jsonData);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

}

function WriteJsonData(){
    const githubUsername = 'IL-vin9220';
    const githubRepo = 'Web-ChiTieuHangNgay';
    const filePath = 'data.json';
    const accessToken = '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'; // Cần token quyền truy cập để sửa đổi

    const jsonFileUrl = `https://api.github.com/repos/${githubUsername}/${githubRepo}/contents/${filePath}`;

    // Dữ liệu JSON mới bạn muốn cập nhật
    const newJsonData = {
    "key": "value"
    };

    // Cấu hình Fetch API để gửi yêu cầu PUT hoặc PATCH
    const config = {
    method: 'PUT', // hoặc 'PATCH'
    headers: {
        'Authorization': `token ${accessToken}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        message: 'Update JSON data',
        content: btoa(JSON.stringify(newJsonData)), // Encode dữ liệu JSON thành base64
        sha: 'current_sha_of_the_file' // Cần cung cấp sha của file hiện tại để GitHub biết làm thế nào để cập nhật file
    })
    };

    // Gửi yêu cầu PUT hoặc PATCH để cập nhật nội dung của tệp JSON trên GitHub
    fetch(jsonFileUrl, config)
    .then(response => response.json())
    .then(data => {
        console.log('File updated successfully:', data);
    })
    .catch(error => {
        console.error('Error updating file:', error);
    });

}