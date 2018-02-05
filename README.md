# Saf javascript Draggable Module

```js

    draggable(".btn", {
        dropItem: "body", dragover: function (event, ui) {
        },css:{
            cssText : "background-color:red"
        },dropType :"after"
    });

```
1. dropItem: dropItem, <small style="color:#777">// sürüklenecek itemin classı, idsi veya başka bir adı</small><br>
2. dropOver: dropOver<small style="color:#777">// sürüklenecek itemin üstündeyken yapılacak olay</small><br>
3. drop: drop,<small style="color:#777">// sürüklenme işleminden sonra yapılacak olay</small><br>
4. dropType: dropType,<small style="color:#777"> // sürükleme tipi (append,prepend,after,before)</small><br>
5. drag: drag,<small style="color:#777"> // öntanımlı olay tanımlayıcısı</small><br>
6. dragStart: dragStart,<small style="color:#777">// sürükleme başlangıcı olay tanımlayıcısı</small><br>
7. dragLeave: dragLeave,<small style="color:#777">// sürüklenen elemanın yuvadan ayrıldığı andaki olay tanımlayıcısı</small><br>
8. dragEnter: dragEnter,<small style="color:#777">// sürükleme işlemi sonu olay tanımlayıcısı</small><br>
9. dragEnd: dragEnd,<small style="color:#777">// sürükleme işlemi sonu olay tanımlayıcısı</small><br>
10. appendTo: appendTo,<small style="color:#777">// sadece sürüklenen iteme bırak(true) veya ekranda gezdir (default: false)</small><br>
11. css: css,<small style="color:#777">// css özelliği tanımla</small><br>
12. opacity: opacity,<small style="color:#777">// opacity değeri belirle</small><br>
13. delay: delay,<small style="color:#777">// gecikme ekle</small><br>
14. zIndex: zIndex,<small style="color:#777">// öncelik tanımla </small><br>
15. cssText: cssText,<small style="color:#777">// yada normal css şeklinde css yazın örnek(color:red;width:400px...)</small><br>

<h4 style='color:#FF0074'>Örnek kullanım şeması </h4>
<p>Kullanımı oldukça basit bir şema olarak aşağıdan öğrenebilirsiniz.Bir sonraki başlıkla örneği deneyebilirsiniz. </p>

```js

    draggable("sürüklenecek item ", {
        dropItem: "bırakılma alanı",
        dropType: "after",
        dropOver: (event, ui) => {
            /*    işlemlerinden sonraki kodlar    */
        },
        drop: (event, ui) => {
            /*işlemlerinden sonraki kodlar    */
        },
        drag: (event, ui) => {
            /*işlemlerinden sonraki kodlar    */
        },
        dragStart: (event, ui) => {
            /*   işlemlerinden sonraki kodlar    */
        },
        dragLeave: (event, ui) => {
            /*   işlemlerinden sonraki kodlar    */
        },
        dragEnter: (event, ui) => {
            /*   işlemlerinden sonraki kodlar    */
        },
        dragEnd: (event, ui) => {
            /*  işlemlerinden sonraki kodlar  */
        },
        css: {
            opacity: "0.7",
            cssText: "color:blue;box-shadow:0 0 10px 0 gray;",
            delay: 1000,
            zIndex: 1000
        }
    });

```

<h4 style='color:#00C5FF'>Örnek </h4>


```js

    draggable("li", {
        dropItem: "ul",
        dropType: "after",
        dropOver: (event, ui) => {
            console.log("dropOver");
        },
        drop: (event, ui) => {
            console.log("drop");
        },
        drag: (event, ui) => {
            console.log("drag");
        },
        dragStart: (event, ui) => {
            console.log("dragStart");
        },
        dragLeave: (event, ui) => {
            console.log("dragLeave");
        },
        dragEnter: (event, ui) => {
            console.log("dragEnter");
        },
        dragEnd: (event, ui) => {
            console.log("dragEnd");
        },
        css: {
            opacity: "0.7",
            cssText: "color:blue;box-shadow:0 0 10px 0 gray;",
            delay: 1000,
            zIndex: 1000
        }
    });

```
<a href="https://codepen.io/by-Meftunca/pen/jZqeVR">Örnek için tıklayınız...</a>

# Uyarı
<p>Proje Gelişim aşamasındadır...</p>
