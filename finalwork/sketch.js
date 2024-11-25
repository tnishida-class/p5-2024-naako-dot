// 最終課題を制作しよう

let balls;

function setup(){
  
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(200);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(b.color);//ballに色をつける
    noStroke();
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;

  if(b.x<0||b.x>width){b.vx=-1*b.vx;}//画面の端につくと跳ね返る関数
  if(b.y<0||b.y>height){b.vy=-1*b.vy;}
  }
}

function mouseDragged(){//マウスをドラッグした時に実行される関数
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const randomSize=random(10,100);//10~100のrandomな大きさに
    const randomColor=color(random(255),random(255),random(255));//randomなカラーを設定
    const b = { x: mouseX, y: mouseY, size: randomSize,color:randomColor, vx: dx, vy: dy };
    balls.push(b);//作成したボールを配列bに追加
  }
}

function windowResized(){//windows sizeが変更されるときに実行
  resizeCanvas(windowWidth, windowHeight);
}
