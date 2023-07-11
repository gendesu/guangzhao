function julixian(x,y,k,b) {
    return (Math.abs(-k*x+y-b))/Math.sqrt(-k*-k+1)
}

function julixiandian(x,y,x0,y0,k,b){
    //计算距离线最近点到原点的距离
    let l = julixian(x,y,k,b)
    let xiexian = Math.sqrt(((x0-x)*(x0-x))+(y0-y)*(y0-y))  
    // if(xiexian<l){
    //     console.log(l,xiexian)
    // }
    return Math.sqrt((xiexian*xiexian)-(l*l))
}

function zaixianshang(x,y,x0,y0,k,b){
    let juli= juliyuandian(x,y,x0,y0)
    let l = juli/15
    return Math.abs(parseInt(Math.abs(k*x+b))-parseInt(y))<l
}

function juliyuandian(x,y,x0,y0){
    return Math.sqrt((x0-x)*(x0-x)+(y0-y)*(y0-y))
}



export function guangliang(x,y,x0,y0,x1,y1,guanglidumax,xuejian){
    let k= (x0-x1)/(y0-y1)
    let b =(y0-k*x0)
    x=parseInt(x)
    y=parseInt(y)
    x0=parseInt(x0)
    y0=parseInt(y0)
    x1=parseInt(x1)
    y1=parseInt(y1)
    //设置在光柱上的削减与不在光柱的削减
    let guanglidu = []//距离线，距离原点
    let xuejianhou
    let juli= juliyuandian(x,y,x0,y0)
    let l = juli/0.5
    let ran= Math.random()
    ran = ran>0.8?ran+1:1.5
    if( zaixianshang(x,y,x0,y0,k,b)){
        guanglidu[0]=julixian(x,y,k,b);
        guanglidu[1]=juliyuandian(x,y,x0,y0)
        xuejianhou = guanglidumax - guanglidu[1]*xuejian*ran
    }else{
        guanglidu[0]=julixian(x,y,k,b)
        guanglidu[1]=julixiandian(x,y,x0,y0,k,b)-l
        guanglidu[1]<0?guanglidu[1]=0:guanglidu[1];
        xuejianhou = guanglidumax - guanglidu[1]*xuejian*ran - guanglidu[0]*xuejian*15*ran
    }
    if(xuejianhou<=0){
        xuejianhou=0
    }


    // if(xuejian2!=0){
    //     console.log(guanglidu)
    // }
    return xuejianhou
}

