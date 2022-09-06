const areaData = `
  新疆维吾尔自治区： 166 万平方公里
  西藏自治区： 122.84 万平方公里
  内蒙古自治区： 118.3 万平方公里
  青海省： 72.1 万平方公里
  四川省： 48.6 万平方公里
  黑龙江省： 47.3 万平方公里
  甘肃省： 45.37 万平方公里
  云南省： 39 万平方公里
  广西壮族自治区： 23.67 万平方公里
  湖南省： 21.18 万平方公里
  陕西省： 20.58 万平方公里
  河北省： 18.88 万平方公里
  吉林省： 18.74 万平方公里
  湖北省： 18.59 万平方公里
  广东省： 17.97 万平方公里
  贵州省： 17.6 万平方公里
  河南省： 16.7 万平方公里
  江西省： 16.69 万平方公里
  山东省： 15.8 万平方公里
  山西省： 15.67 万平方公里
  辽宁省： 14.8 万平方公里
  安徽省： 14 万平方公里
  福建省： 12.4 万平方公里
  江苏省： 10.72 万平方公里
  浙江省： 10.55 万平方公里
  重庆市： 8.2 万平方公里
  宁夏回族自治区： 6.64 万平方公里
  台湾省： 3.6 万平方公里
  海南省： 3.54 万平方公里
  北京市： 1.64 万平方公里
  天津市： 1.19 万平方公里
  上海市： 0.63 平方公里
  香港特别行政区： 0.11 平方公里
  澳门特别行政区： 0.0032 平方公里`


/* 提取成  {name , value }[] */
export interface areaInter {
  name: string,
  value: number
}

let data: areaInter[] = [];

{
  let match1 = areaData.match(/\S+?[省|市|区]/g)!,
    match2 = areaData.match(/(\d|\.)+/g)!,
    len = match1.length

  for (let i = 0; i < len; i++) {
    data.push({
      name: match1[i],
      value: Number(match2[i])
    })
  }
}



export default data