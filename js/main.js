! function () {
  var duration = 50
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setTimeout(function run(){
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }

  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 50
        break
      case 'normal':
        duration = 30
        break
      case 'fast':
        duration = 5
        break
    }
  })

  let code = `/*
  *先准备皮卡丘的脸
  */
  .preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFDC2B;
  }
  
  .pikachu-face {
    width: 100%;
    height: 165px;
    position: relative;
  }
  
  .pikachu-face :not(:last-child){
    z-index: 1;
  }
  
  /*
  *画个皮卡丘的鼻子
  */
  .nose {
    width: 0px;
    height: 0px;
    border: 11px solid;
    border-radius: 11px;
    border-color: black transparent transparent transparent;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }
  
  /*
  *画个眼睛
  */
  .eye {
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    border-radius: 50%;
    border: 2px solid #000000;
    position: absolute;
  }
  
  .eye::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    position: absolute;
    border: 2px black solid;
    left: 6px;
    top: -1px;
  }
  
  /*
  *这是左眼
  */
  .eye.left {
    left: 50%;
    transform: translateX(-130px);
  }
  
  /*
  *这个是右眼
  */
  .eye.right {
    right: 50%;
    transform: translateX(130px);
  }
  
  /*
  *画两个腮红
  */
  .blusher {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px black solid;
    border-radius: 50%;
    position: absolute;
    top: 85px;
  }
  
  .blusher.left {
    right: 50%;
    margin-right: 116px;
  }
  
  .blusher.right {
    left: 50%;
    margin-left: 116px;
  }
  
  /*
  *这是皮卡丘的上嘴唇
  */
  .upperLip {
    width: 80px;
    height: 20px;
    border: 2px black solid;
    position: absolute;
    top: 52px;
    background: #FFDC2B;
  }
  
  .upperLip.left {
    right: 50%;
    border-bottom-left-radius: 30px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-15deg);
  }
  
  .upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    transform: rotate(15deg);
  }
  
  /*
  *这是皮卡丘嘴巴的下面
  */
  .lowerLip-wrapper {
    position: absolute;
    left: 50%;
    margin-left: -115px;
    width: 230px;
    height: 145px;
    bottom: -40px;
    overflow: hidden;
  }
  
  /*
  *这是他的舌头
  */
  .lowerLip {
    position: absolute;
    width: 230px;
    height: 5000px;
    background: #A71412;
    border: 2px black solid;
    border-radius: 200px/1500px;
    bottom: 0;
    overflow: hidden;
  }
  
  .lowerLip::after {
    content: '';
    width: 120px;
    height: 120px;
    background: #FC4A62;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -60px;
    border-radius: 60px;
  }
  
  /*
  *好了，皮卡丘画完了哟
  *谢谢观看
  */`
 
  writeCode('',code)
}.call()