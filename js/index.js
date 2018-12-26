/**
 * 轮播图效果实现
 */
 $(()=>{
     let i = 1;
     function task(){
         i++;
         if(i>3){
             i=1
         }
         let $banner = $(".banner img");
         $banner.attr({src:`image/banner${i}.jpg`})
     }
      setInterval(task,3000);
 });

/**
 *轮播图效果实现2
  */
$(()=>{
    let i=1;
   function task1(){
    i++;
    if(i>4){
        i=1
    }
    let $new1 = $(".news .new1 img");
    let $new2 = $(".news .new2 img");
    let $new3 = $(".news .new3 img");
    let $new4 = $(".news .new4 img");
    $new1.attr({src:`image/s${i}.jpg`});
    $new2.attr({src:`image/s${i+1}.jpg`});
    $new3.attr({src:`image/s${i+2}.jpg`});
    $new4.attr({src:`image/s${i+3}.jpg`});
   }
   setInterval(task1,3000)
});
