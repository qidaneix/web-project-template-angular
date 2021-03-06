var temp = require('./app');

temp.factory('locations', [
    function () {
        var locations = {
            "provinces": [
                "所有",
                "北京市",
                "天津市",
                "上海市",
                "重庆市",
                "河北省",
                "山西省",
                "内蒙古省",
                "辽宁省",
                "吉林省",
                "黑龙江省",
                "江苏省",
                "浙江省",
                "安徽省",
                "福建省",
                "江西省",
                "山东省",
                "河南省",
                "湖北省",
                "湖南省",
                "广东省",
                "广西省",
                "海南省",
                "四川省",
                "贵州省",
                "云南省",
                "西藏省",
                "陕西省",
                "甘肃省",
                "青海省",
                "宁夏省",
                "新疆省",
                "台湾",
                "香港",
                "澳门"
            ],
            "cities": [{
                    "province": "所有",
                    "city": "所有"
                },
                {
                    "province": "北京市",
                    "city": "所有"
                },
                {
                    "province": "北京市",
                    "city": "东城区"
                },
                {
                    "province": "北京市",
                    "city": "西城区"
                },
                {
                    "province": "北京市",
                    "city": "崇文区"
                },
                {
                    "province": "北京市",
                    "city": "宣武区"
                },
                {
                    "province": "北京市",
                    "city": "朝阳区"
                },
                {
                    "province": "北京市",
                    "city": "丰台区"
                },
                {
                    "province": "北京市",
                    "city": "石景山区"
                },
                {
                    "province": "北京市",
                    "city": "海淀区"
                },
                {
                    "province": "北京市",
                    "city": "门头沟区"
                },
                {
                    "province": "北京市",
                    "city": "房山区"
                },
                {
                    "province": "北京市",
                    "city": "通州区"
                },
                {
                    "province": "北京市",
                    "city": "顺义区"
                },
                {
                    "province": "北京市",
                    "city": "昌平区"
                },
                {
                    "province": "北京市",
                    "city": "大兴区"
                },
                {
                    "province": "北京市",
                    "city": "平谷区"
                },
                {
                    "province": "北京市",
                    "city": "怀柔区"
                },
                {
                    "province": "北京市",
                    "city": "密云县"
                },
                {
                    "province": "北京市",
                    "city": "延庆县"
                },
                {
                    "province": "天津市",
                    "city": "所有"
                },
                {
                    "province": "天津市",
                    "city": "和平区"
                },
                {
                    "province": "天津市",
                    "city": "河东区"
                },
                {
                    "province": "天津市",
                    "city": "河西区"
                },
                {
                    "province": "天津市",
                    "city": "南开区"
                },
                {
                    "province": "天津市",
                    "city": "河北区"
                },
                {
                    "province": "天津市",
                    "city": "红桥区"
                },
                {
                    "province": "天津市",
                    "city": "塘沽区"
                },
                {
                    "province": "天津市",
                    "city": "汉沽区"
                },
                {
                    "province": "天津市",
                    "city": "大港区"
                },
                {
                    "province": "天津市",
                    "city": "东丽区"
                },
                {
                    "province": "天津市",
                    "city": "西青区"
                },
                {
                    "province": "天津市",
                    "city": "津南区"
                },
                {
                    "province": "天津市",
                    "city": "北辰区"
                },
                {
                    "province": "天津市",
                    "city": "武清区"
                },
                {
                    "province": "天津市",
                    "city": "宝坻区"
                },
                {
                    "province": "天津市",
                    "city": "宁河县"
                },
                {
                    "province": "天津市",
                    "city": "静海县"
                },
                {
                    "province": "天津市",
                    "city": "蓟县"
                },
                {
                    "province": "上海市",
                    "city": "所有"
                },
                {
                    "province": "上海市",
                    "city": "黄浦区"
                },
                {
                    "province": "上海市",
                    "city": "卢湾区"
                },
                {
                    "province": "上海市",
                    "city": "徐汇区"
                },
                {
                    "province": "上海市",
                    "city": "长宁区"
                },
                {
                    "province": "上海市",
                    "city": "静安区"
                },
                {
                    "province": "上海市",
                    "city": "普陀区"
                },
                {
                    "province": "上海市",
                    "city": "闸北区"
                },
                {
                    "province": "上海市",
                    "city": "虹口区"
                },
                {
                    "province": "上海市",
                    "city": "杨浦区"
                },
                {
                    "province": "上海市",
                    "city": "宝山区"
                },
                {
                    "province": "上海市",
                    "city": "闵行区"
                },
                {
                    "province": "上海市",
                    "city": "嘉定区"
                },
                {
                    "province": "上海市",
                    "city": "松江区"
                },
                {
                    "province": "上海市",
                    "city": "金山区"
                },
                {
                    "province": "上海市",
                    "city": "青浦区"
                },
                {
                    "province": "上海市",
                    "city": "南汇区"
                },
                {
                    "province": "上海市",
                    "city": "奉贤区"
                },
                {
                    "province": "上海市",
                    "city": "浦东新区"
                },
                {
                    "province": "上海市",
                    "city": "崇明县"
                },
                {
                    "province": "重庆市",
                    "city": "所有"
                },
                {
                    "province": "重庆市",
                    "city": "渝中区"
                },
                {
                    "province": "重庆市",
                    "city": "大渡口区"
                },
                {
                    "province": "重庆市",
                    "city": "江北区"
                },
                {
                    "province": "重庆市",
                    "city": "南岸区"
                },
                {
                    "province": "重庆市",
                    "city": "北碚区"
                },
                {
                    "province": "重庆市",
                    "city": "渝北区"
                },
                {
                    "province": "重庆市",
                    "city": "巴南区"
                },
                {
                    "province": "重庆市",
                    "city": "长寿区"
                },
                {
                    "province": "重庆市",
                    "city": "双桥区"
                },
                {
                    "province": "重庆市",
                    "city": "沙坪坝区"
                },
                {
                    "province": "重庆市",
                    "city": "万盛区"
                },
                {
                    "province": "重庆市",
                    "city": "万州区"
                },
                {
                    "province": "重庆市",
                    "city": "涪陵区"
                },
                {
                    "province": "重庆市",
                    "city": "黔江区"
                },
                {
                    "province": "重庆市",
                    "city": "永川区"
                },
                {
                    "province": "重庆市",
                    "city": "合川区"
                },
                {
                    "province": "重庆市",
                    "city": "江津区"
                },
                {
                    "province": "重庆市",
                    "city": "九龙坡区"
                },
                {
                    "province": "重庆市",
                    "city": "南川区"
                },
                {
                    "province": "重庆市",
                    "city": "綦江县"
                },
                {
                    "province": "重庆市",
                    "city": "潼南县"
                },
                {
                    "province": "重庆市",
                    "city": "荣昌县"
                },
                {
                    "province": "重庆市",
                    "city": "璧山县"
                },
                {
                    "province": "重庆市",
                    "city": "大足县"
                },
                {
                    "province": "重庆市",
                    "city": "铜梁县"
                },
                {
                    "province": "重庆市",
                    "city": "梁平县"
                },
                {
                    "province": "重庆市",
                    "city": "开县"
                },
                {
                    "province": "重庆市",
                    "city": "忠县"
                },
                {
                    "province": "重庆市",
                    "city": "城口县"
                },
                {
                    "province": "重庆市",
                    "city": "垫江县"
                },
                {
                    "province": "重庆市",
                    "city": "武隆县"
                },
                {
                    "province": "重庆市",
                    "city": "丰都县"
                },
                {
                    "province": "重庆市",
                    "city": "奉节县"
                },
                {
                    "province": "重庆市",
                    "city": "云阳县"
                },
                {
                    "province": "重庆市",
                    "city": "巫溪县"
                },
                {
                    "province": "重庆市",
                    "city": "巫山县"
                },
                {
                    "province": "重庆市",
                    "city": "石柱土家族自治县"
                },
                {
                    "province": "重庆市",
                    "city": "秀山土家族苗族自治县"
                },
                {
                    "province": "重庆市",
                    "city": "酉阳土家族苗族自治县"
                },
                {
                    "province": "重庆市",
                    "city": "彭水苗族土家族自治县"
                },
                {
                    "province": "河北省",
                    "city": "所有"
                },
                {
                    "province": "河北省",
                    "city": "石家庄市"
                },
                {
                    "province": "河北省",
                    "city": "唐山市"
                },
                {
                    "province": "河北省",
                    "city": "秦皇岛市"
                },
                {
                    "province": "河北省",
                    "city": "邯郸市"
                },
                {
                    "province": "河北省",
                    "city": "邢台市"
                },
                {
                    "province": "河北省",
                    "city": "保定市"
                },
                {
                    "province": "河北省",
                    "city": "张家口市"
                },
                {
                    "province": "河北省",
                    "city": "承德市"
                },
                {
                    "province": "河北省",
                    "city": "沧州市"
                },
                {
                    "province": "河北省",
                    "city": "廊坊市"
                },
                {
                    "province": "河北省",
                    "city": "衡水市"
                },
                {
                    "province": "山西省",
                    "city": "所有"
                },
                {
                    "province": "山西省",
                    "city": "太原市"
                },
                {
                    "province": "山西省",
                    "city": "大同市"
                },
                {
                    "province": "山西省",
                    "city": "阳泉市"
                },
                {
                    "province": "山西省",
                    "city": "长治市"
                },
                {
                    "province": "山西省",
                    "city": "晋城市"
                },
                {
                    "province": "山西省",
                    "city": "朔州市"
                },
                {
                    "province": "山西省",
                    "city": "忻州市"
                },
                {
                    "province": "山西省",
                    "city": "吕梁市"
                },
                {
                    "province": "山西省",
                    "city": "晋中市"
                },
                {
                    "province": "山西省",
                    "city": "临汾市"
                },
                {
                    "province": "山西省",
                    "city": "运城市"
                },
                {
                    "province": "内蒙古省",
                    "city": "所有"
                },
                {
                    "province": "内蒙古省",
                    "city": "呼和浩特市"
                },
                {
                    "province": "内蒙古省",
                    "city": "包头市"
                },
                {
                    "province": "内蒙古省",
                    "city": "乌海市"
                },
                {
                    "province": "内蒙古省",
                    "city": "赤峰市"
                },
                {
                    "province": "内蒙古省",
                    "city": "呼伦贝尔市"
                },
                {
                    "province": "内蒙古省",
                    "city": "兴安盟"
                },
                {
                    "province": "内蒙古省",
                    "city": "通辽市"
                },
                {
                    "province": "内蒙古省",
                    "city": "锡林郭勒盟"
                },
                {
                    "province": "内蒙古省",
                    "city": "乌兰察布盟"
                },
                {
                    "province": "内蒙古省",
                    "city": "伊克昭盟"
                },
                {
                    "province": "内蒙古省",
                    "city": "巴彦淖尔盟"
                },
                {
                    "province": "内蒙古省",
                    "city": "阿拉善盟"
                },
                {
                    "province": "辽宁省",
                    "city": "所有"
                },
                {
                    "province": "辽宁省",
                    "city": "沈阳市"
                },
                {
                    "province": "辽宁省",
                    "city": "大连市"
                },
                {
                    "province": "辽宁省",
                    "city": "鞍山市"
                },
                {
                    "province": "辽宁省",
                    "city": "抚顺市"
                },
                {
                    "province": "辽宁省",
                    "city": "本溪市"
                },
                {
                    "province": "辽宁省",
                    "city": "丹东市"
                },
                {
                    "province": "辽宁省",
                    "city": "锦州市"
                },
                {
                    "province": "辽宁省",
                    "city": "营口市"
                },
                {
                    "province": "辽宁省",
                    "city": "阜新市"
                },
                {
                    "province": "辽宁省",
                    "city": "辽阳市"
                },
                {
                    "province": "辽宁省",
                    "city": "盘锦市"
                },
                {
                    "province": "辽宁省",
                    "city": "铁岭市"
                },
                {
                    "province": "辽宁省",
                    "city": "朝阳市"
                },
                {
                    "province": "辽宁省",
                    "city": "葫芦岛市"
                },
                {
                    "province": "吉林省",
                    "city": "所有"
                },
                {
                    "province": "吉林省",
                    "city": "长春市"
                },
                {
                    "province": "吉林省",
                    "city": "吉林市"
                },
                {
                    "province": "吉林省",
                    "city": "四平市"
                },
                {
                    "province": "吉林省",
                    "city": "辽源市"
                },
                {
                    "province": "吉林省",
                    "city": "通化市"
                },
                {
                    "province": "吉林省",
                    "city": "白山市"
                },
                {
                    "province": "吉林省",
                    "city": "松原市"
                },
                {
                    "province": "吉林省",
                    "city": "白城市"
                },
                {
                    "province": "吉林省",
                    "city": "延边朝鲜族自治州"
                },
                {
                    "province": "黑龙江省",
                    "city": "所有"
                },
                {
                    "province": "黑龙江省",
                    "city": "哈尔滨市"
                },
                {
                    "province": "黑龙江省",
                    "city": "齐齐哈尔市"
                },
                {
                    "province": "黑龙江省",
                    "city": "鹤岗市"
                },
                {
                    "province": "黑龙江省",
                    "city": "双鸭山市"
                },
                {
                    "province": "黑龙江省",
                    "city": "鸡西市"
                },
                {
                    "province": "黑龙江省",
                    "city": "大庆市"
                },
                {
                    "province": "黑龙江省",
                    "city": "伊春市"
                },
                {
                    "province": "黑龙江省",
                    "city": "牡丹江市"
                },
                {
                    "province": "黑龙江省",
                    "city": "佳木斯市"
                },
                {
                    "province": "黑龙江省",
                    "city": "七台河市"
                },
                {
                    "province": "黑龙江省",
                    "city": "黑河市"
                },
                {
                    "province": "黑龙江省",
                    "city": "绥化市"
                },
                {
                    "province": "黑龙江省",
                    "city": "大兴安岭地区"
                },
                {
                    "province": "江苏省",
                    "city": "所有"
                },
                {
                    "province": "江苏省",
                    "city": "南京市"
                },
                {
                    "province": "江苏省",
                    "city": "苏州市"
                },
                {
                    "province": "江苏省",
                    "city": "无锡市"
                },
                {
                    "province": "江苏省",
                    "city": "常州市"
                },
                {
                    "province": "江苏省",
                    "city": "镇江市"
                },
                {
                    "province": "江苏省",
                    "city": "南通市"
                },
                {
                    "province": "江苏省",
                    "city": "泰州市"
                },
                {
                    "province": "江苏省",
                    "city": "扬州市"
                },
                {
                    "province": "江苏省",
                    "city": "盐城市"
                },
                {
                    "province": "江苏省",
                    "city": "连云港市"
                },
                {
                    "province": "江苏省",
                    "city": "徐州市"
                },
                {
                    "province": "江苏省",
                    "city": "淮安市"
                },
                {
                    "province": "江苏省",
                    "city": "宿迁市"
                },
                {
                    "province": "浙江省",
                    "city": "所有"
                },
                {
                    "province": "浙江省",
                    "city": "杭州市"
                },
                {
                    "province": "浙江省",
                    "city": "宁波市"
                },
                {
                    "province": "浙江省",
                    "city": "温州市"
                },
                {
                    "province": "浙江省",
                    "city": "嘉兴市"
                },
                {
                    "province": "浙江省",
                    "city": "湖州市"
                },
                {
                    "province": "浙江省",
                    "city": "绍兴市"
                },
                {
                    "province": "浙江省",
                    "city": "金华市"
                },
                {
                    "province": "浙江省",
                    "city": "衢州市"
                },
                {
                    "province": "浙江省",
                    "city": "舟山市"
                },
                {
                    "province": "浙江省",
                    "city": "台州市"
                },
                {
                    "province": "浙江省",
                    "city": "丽水市"
                },
                {
                    "province": "安徽省",
                    "city": "所有"
                },
                {
                    "province": "安徽省",
                    "city": "合肥市"
                },
                {
                    "province": "安徽省",
                    "city": "芜湖市"
                },
                {
                    "province": "安徽省",
                    "city": "蚌埠市"
                },
                {
                    "province": "安徽省",
                    "city": "淮南市"
                },
                {
                    "province": "安徽省",
                    "city": "马鞍山市"
                },
                {
                    "province": "安徽省",
                    "city": "淮北市"
                },
                {
                    "province": "安徽省",
                    "city": "铜陵市"
                },
                {
                    "province": "安徽省",
                    "city": "安庆市"
                },
                {
                    "province": "安徽省",
                    "city": "黄山市"
                },
                {
                    "province": "安徽省",
                    "city": "滁州市"
                },
                {
                    "province": "安徽省",
                    "city": "阜阳市"
                },
                {
                    "province": "安徽省",
                    "city": "宿州市"
                },
                {
                    "province": "安徽省",
                    "city": "巢湖市"
                },
                {
                    "province": "安徽省",
                    "city": "六安市"
                },
                {
                    "province": "安徽省",
                    "city": "亳州市"
                },
                {
                    "province": "安徽省",
                    "city": "池州市"
                },
                {
                    "province": "安徽省",
                    "city": "宣城市"
                },
                {
                    "province": "福建省",
                    "city": "所有"
                },
                {
                    "province": "福建省",
                    "city": "福州市"
                },
                {
                    "province": "福建省",
                    "city": "厦门市"
                },
                {
                    "province": "福建省",
                    "city": "莆田市"
                },
                {
                    "province": "福建省",
                    "city": "三明市"
                },
                {
                    "province": "福建省",
                    "city": "泉州市"
                },
                {
                    "province": "福建省",
                    "city": "漳州市"
                },
                {
                    "province": "福建省",
                    "city": "南平市"
                },
                {
                    "province": "福建省",
                    "city": "龙岩市"
                },
                {
                    "province": "福建省",
                    "city": "宁德市"
                },
                {
                    "province": "江西省",
                    "city": "所有"
                },
                {
                    "province": "江西省",
                    "city": "南昌市"
                },
                {
                    "province": "江西省",
                    "city": "景德镇市"
                },
                {
                    "province": "江西省",
                    "city": "萍乡市"
                },
                {
                    "province": "江西省",
                    "city": "九江市"
                },
                {
                    "province": "江西省",
                    "city": "新余市"
                },
                {
                    "province": "江西省",
                    "city": "鹰潭市"
                },
                {
                    "province": "江西省",
                    "city": "赣州市"
                },
                {
                    "province": "江西省",
                    "city": "吉安市"
                },
                {
                    "province": "江西省",
                    "city": "宜春市"
                },
                {
                    "province": "江西省",
                    "city": "抚州市"
                },
                {
                    "province": "江西省",
                    "city": "上饶市"
                },
                {
                    "province": "山东省",
                    "city": "所有"
                },
                {
                    "province": "山东省",
                    "city": "济南市"
                },
                {
                    "province": "山东省",
                    "city": "青岛市"
                },
                {
                    "province": "山东省",
                    "city": "淄博市"
                },
                {
                    "province": "山东省",
                    "city": "枣庄市"
                },
                {
                    "province": "山东省",
                    "city": "东营市"
                },
                {
                    "province": "山东省",
                    "city": "烟台市"
                },
                {
                    "province": "山东省",
                    "city": "潍坊市"
                },
                {
                    "province": "山东省",
                    "city": "济宁市"
                },
                {
                    "province": "山东省",
                    "city": "泰安市"
                },
                {
                    "province": "山东省",
                    "city": "威海市"
                },
                {
                    "province": "山东省",
                    "city": "日照市"
                },
                {
                    "province": "山东省",
                    "city": "莱芜市"
                },
                {
                    "province": "山东省",
                    "city": "临沂市"
                },
                {
                    "province": "山东省",
                    "city": "德州市"
                },
                {
                    "province": "山东省",
                    "city": "聊城市"
                },
                {
                    "province": "山东省",
                    "city": "滨州市"
                },
                {
                    "province": "山东省",
                    "city": "菏泽市"
                },
                {
                    "province": "河南省",
                    "city": "所有"
                },
                {
                    "province": "河南省",
                    "city": "郑州市"
                },
                {
                    "province": "河南省",
                    "city": "开封市"
                },
                {
                    "province": "河南省",
                    "city": "洛阳市"
                },
                {
                    "province": "河南省",
                    "city": "平顶山市"
                },
                {
                    "province": "河南省",
                    "city": "安阳市"
                },
                {
                    "province": "河南省",
                    "city": "鹤壁市"
                },
                {
                    "province": "河南省",
                    "city": "新乡市"
                },
                {
                    "province": "河南省",
                    "city": "焦作市"
                },
                {
                    "province": "河南省",
                    "city": "濮阳市"
                },
                {
                    "province": "河南省",
                    "city": "许昌市"
                },
                {
                    "province": "河南省",
                    "city": "漯河市"
                },
                {
                    "province": "河南省",
                    "city": "三门峡市"
                },
                {
                    "province": "河南省",
                    "city": "南阳市"
                },
                {
                    "province": "河南省",
                    "city": "商丘市"
                },
                {
                    "province": "河南省",
                    "city": "信阳市"
                },
                {
                    "province": "河南省",
                    "city": "周口市"
                },
                {
                    "province": "河南省",
                    "city": "驻马店市"
                },
                {
                    "province": "河南省",
                    "city": "焦作市"
                },
                {
                    "province": "湖北省",
                    "city": "所有"
                },
                {
                    "province": "湖北省",
                    "city": "武汉市"
                },
                {
                    "province": "湖北省",
                    "city": "黄石市"
                },
                {
                    "province": "湖北省",
                    "city": "十堰市"
                },
                {
                    "province": "湖北省",
                    "city": "荆州市"
                },
                {
                    "province": "湖北省",
                    "city": "宜昌市"
                },
                {
                    "province": "湖北省",
                    "city": "襄樊市"
                },
                {
                    "province": "湖北省",
                    "city": "鄂州市"
                },
                {
                    "province": "湖北省",
                    "city": "荆门市"
                },
                {
                    "province": "湖北省",
                    "city": "孝感市"
                },
                {
                    "province": "湖北省",
                    "city": "黄冈市"
                },
                {
                    "province": "湖北省",
                    "city": "咸宁市"
                },
                {
                    "province": "湖北省",
                    "city": "随州市"
                },
                {
                    "province": "湖北省",
                    "city": "恩施土家族苗族自治州"
                },
                {
                    "province": "湖北省",
                    "city": "仙桃市"
                },
                {
                    "province": "湖北省",
                    "city": "天门市"
                },
                {
                    "province": "湖北省",
                    "city": "潜江市"
                },
                {
                    "province": "湖北省",
                    "city": "神农架林区"
                },
                {
                    "province": "湖南省",
                    "city": "所有"
                },
                {
                    "province": "湖南省",
                    "city": "长沙市"
                },
                {
                    "province": "湖南省",
                    "city": "株洲市"
                },
                {
                    "province": "湖南省",
                    "city": "湘潭市"
                },
                {
                    "province": "湖南省",
                    "city": "衡阳市"
                },
                {
                    "province": "湖南省",
                    "city": "邵阳市"
                },
                {
                    "province": "湖南省",
                    "city": "岳阳市"
                },
                {
                    "province": "湖南省",
                    "city": "常德市"
                },
                {
                    "province": "湖南省",
                    "city": "张家界市"
                },
                {
                    "province": "湖南省",
                    "city": "益阳市"
                },
                {
                    "province": "湖南省",
                    "city": "郴州市"
                },
                {
                    "province": "湖南省",
                    "city": "永州市"
                },
                {
                    "province": "湖南省",
                    "city": "怀化市"
                },
                {
                    "province": "湖南省",
                    "city": "娄底市"
                },
                {
                    "province": "湖南省",
                    "city": "湘西土家族苗族自治州"
                },
                {
                    "province": "广东省",
                    "city": "所有"
                },
                {
                    "province": "广东省",
                    "city": "广州市"
                },
                {
                    "province": "广东省",
                    "city": "深圳市"
                },
                {
                    "province": "广东省",
                    "city": "东莞市"
                },
                {
                    "province": "广东省",
                    "city": "中山市"
                },
                {
                    "province": "广东省",
                    "city": "潮州市"
                },
                {
                    "province": "广东省",
                    "city": "揭阳市"
                },
                {
                    "province": "广东省",
                    "city": "云浮市"
                },
                {
                    "province": "广东省",
                    "city": "珠海市"
                },
                {
                    "province": "广东省",
                    "city": "汕头市"
                },
                {
                    "province": "广东省",
                    "city": "韶关市"
                },
                {
                    "province": "广东省",
                    "city": "佛山市"
                },
                {
                    "province": "广东省",
                    "city": "江门市"
                },
                {
                    "province": "广东省",
                    "city": "湛江市"
                },
                {
                    "province": "广东省",
                    "city": "茂名市"
                },
                {
                    "province": "广东省",
                    "city": "肇庆市"
                },
                {
                    "province": "广东省",
                    "city": "惠州市"
                },
                {
                    "province": "广东省",
                    "city": "梅州市"
                },
                {
                    "province": "广东省",
                    "city": "汕尾市"
                },
                {
                    "province": "广东省",
                    "city": "河源市"
                },
                {
                    "province": "广东省",
                    "city": "阳江市"
                },
                {
                    "province": "广东省",
                    "city": "清远市"
                },
                {
                    "province": "广西省",
                    "city": "所有"
                },
                {
                    "province": "广西省",
                    "city": "南宁市"
                },
                {
                    "province": "广西省",
                    "city": "柳州市"
                },
                {
                    "province": "广西省",
                    "city": "桂林市"
                },
                {
                    "province": "广西省",
                    "city": "梧州市"
                },
                {
                    "province": "广西省",
                    "city": "北海市"
                },
                {
                    "province": "广西省",
                    "city": "防城港市"
                },
                {
                    "province": "广西省",
                    "city": "钦州市"
                },
                {
                    "province": "广西省",
                    "city": "贵港市"
                },
                {
                    "province": "广西省",
                    "city": "玉林市"
                },
                {
                    "province": "广西省",
                    "city": "百色市"
                },
                {
                    "province": "广西省",
                    "city": "贺州市"
                },
                {
                    "province": "广西省",
                    "city": "河池市"
                },
                {
                    "province": "广西省",
                    "city": "来宾市"
                },
                {
                    "province": "广西省",
                    "city": "崇左市"
                },
                {
                    "province": "海南省",
                    "city": "所有"
                },
                {
                    "province": "海南省",
                    "city": "海口市"
                },
                {
                    "province": "海南省",
                    "city": "三亚市"
                },
                {
                    "province": "海南省",
                    "city": "五指山市"
                },
                {
                    "province": "海南省",
                    "city": "琼海市"
                },
                {
                    "province": "海南省",
                    "city": "儋州市"
                },
                {
                    "province": "海南省",
                    "city": "文昌市"
                },
                {
                    "province": "海南省",
                    "city": "万宁市"
                },
                {
                    "province": "海南省",
                    "city": "东方市"
                },
                {
                    "province": "海南省",
                    "city": "澄迈县"
                },
                {
                    "province": "海南省",
                    "city": "定安县"
                },
                {
                    "province": "海南省",
                    "city": "屯昌县"
                },
                {
                    "province": "海南省",
                    "city": "临高县"
                },
                {
                    "province": "海南省",
                    "city": "白沙黎族自治县"
                },
                {
                    "province": "海南省",
                    "city": "昌江黎族自治县"
                },
                {
                    "province": "海南省",
                    "city": "乐东黎族自治县"
                },
                {
                    "province": "海南省",
                    "city": "陵水黎族自治县"
                },
                {
                    "province": "海南省",
                    "city": "保亭黎族苗族自治县"
                },
                {
                    "province": "海南省",
                    "city": "琼中黎族苗族自治县"
                },
                {
                    "province": "四川省",
                    "city": "所有"
                },
                {
                    "province": "四川省",
                    "city": "成都市"
                },
                {
                    "province": "四川省",
                    "city": "自贡市"
                },
                {
                    "province": "四川省",
                    "city": "攀枝花市"
                },
                {
                    "province": "四川省",
                    "city": "泸州市"
                },
                {
                    "province": "四川省",
                    "city": "德阳市"
                },
                {
                    "province": "四川省",
                    "city": "绵阳市"
                },
                {
                    "province": "四川省",
                    "city": "广元市"
                },
                {
                    "province": "四川省",
                    "city": "遂宁市"
                },
                {
                    "province": "四川省",
                    "city": "内江市"
                },
                {
                    "province": "四川省",
                    "city": "乐山市"
                },
                {
                    "province": "四川省",
                    "city": "南充市"
                },
                {
                    "province": "四川省",
                    "city": "眉山市"
                },
                {
                    "province": "四川省",
                    "city": "宜宾市"
                },
                {
                    "province": "四川省",
                    "city": "广安市"
                },
                {
                    "province": "四川省",
                    "city": "达州市"
                },
                {
                    "province": "四川省",
                    "city": "雅安市"
                },
                {
                    "province": "四川省",
                    "city": "巴中市"
                },
                {
                    "province": "四川省",
                    "city": "资阳市"
                },
                {
                    "province": "四川省",
                    "city": "阿坝藏族羌族自治州"
                },
                {
                    "province": "四川省",
                    "city": "甘孜藏族自治州"
                },
                {
                    "province": "四川省",
                    "city": "凉山彝族自治州"
                },
                {
                    "province": "贵州省",
                    "city": "所有"
                },
                {
                    "province": "贵州省",
                    "city": "贵阳市"
                },
                {
                    "province": "贵州省",
                    "city": "六盘水市"
                },
                {
                    "province": "贵州省",
                    "city": "遵义市"
                },
                {
                    "province": "贵州省",
                    "city": "安顺市"
                },
                {
                    "province": "贵州省",
                    "city": "铜仁地区"
                },
                {
                    "province": "贵州省",
                    "city": "毕节地区"
                },
                {
                    "province": "贵州省",
                    "city": "黔西南布依族苗族自治州"
                },
                {
                    "province": "贵州省",
                    "city": "黔东南苗族侗族自治州"
                },
                {
                    "province": "贵州省",
                    "city": "黔南布依族苗族自治州"
                },
                {
                    "province": "云南省",
                    "city": "所有"
                },
                {
                    "province": "云南省",
                    "city": "昆明市"
                },
                {
                    "province": "云南省",
                    "city": "曲靖市"
                },
                {
                    "province": "云南省",
                    "city": "玉溪市"
                },
                {
                    "province": "云南省",
                    "city": "保山市"
                },
                {
                    "province": "云南省",
                    "city": "昭通市"
                },
                {
                    "province": "云南省",
                    "city": "丽江市"
                },
                {
                    "province": "云南省",
                    "city": "普洱市"
                },
                {
                    "province": "云南省",
                    "city": "临沧市"
                },
                {
                    "province": "云南省",
                    "city": "德宏傣族景颇族自治州"
                },
                {
                    "province": "云南省",
                    "city": "怒江傈僳族自治州"
                },
                {
                    "province": "云南省",
                    "city": "迪庆藏族自治州"
                },
                {
                    "province": "云南省",
                    "city": "大理白族自治州"
                },
                {
                    "province": "云南省",
                    "city": "楚雄彝族自治州"
                },
                {
                    "province": "云南省",
                    "city": "红河哈尼族彝族自治州"
                },
                {
                    "province": "云南省",
                    "city": "文山壮族苗族自治州"
                },
                {
                    "province": "云南省",
                    "city": "西双版纳傣族自治州"
                },
                {
                    "province": "西藏省",
                    "city": "所有"
                },
                {
                    "province": "西藏省",
                    "city": "拉萨市"
                },
                {
                    "province": "西藏省",
                    "city": "那曲地区"
                },
                {
                    "province": "西藏省",
                    "city": "昌都地区"
                },
                {
                    "province": "西藏省",
                    "city": "林芝地区"
                },
                {
                    "province": "西藏省",
                    "city": "山南地区"
                },
                {
                    "province": "西藏省",
                    "city": "日喀则地区"
                },
                {
                    "province": "西藏省",
                    "city": "阿里地区"
                },
                {
                    "province": "陕西省",
                    "city": "所有"
                },
                {
                    "province": "陕西省",
                    "city": "西安市"
                },
                {
                    "province": "陕西省",
                    "city": "铜川市"
                },
                {
                    "province": "陕西省",
                    "city": "宝鸡市"
                },
                {
                    "province": "陕西省",
                    "city": "咸阳市"
                },
                {
                    "province": "陕西省",
                    "city": "渭南市"
                },
                {
                    "province": "陕西省",
                    "city": "延安市"
                },
                {
                    "province": "陕西省",
                    "city": "汉中市"
                },
                {
                    "province": "陕西省",
                    "city": "榆林市"
                },
                {
                    "province": "陕西省",
                    "city": "安康市"
                },
                {
                    "province": "陕西省",
                    "city": "商洛市"
                },
                {
                    "province": "甘肃省",
                    "city": "所有"
                },
                {
                    "province": "甘肃省",
                    "city": "兰州市"
                },
                {
                    "province": "甘肃省",
                    "city": "嘉峪关市"
                },
                {
                    "province": "甘肃省",
                    "city": "金昌市"
                },
                {
                    "province": "甘肃省",
                    "city": "白银市"
                },
                {
                    "province": "甘肃省",
                    "city": "天水市"
                },
                {
                    "province": "甘肃省",
                    "city": "武威市"
                },
                {
                    "province": "甘肃省",
                    "city": "酒泉市"
                },
                {
                    "province": "甘肃省",
                    "city": "张掖市"
                },
                {
                    "province": "甘肃省",
                    "city": "庆阳市"
                },
                {
                    "province": "甘肃省",
                    "city": "平凉市"
                },
                {
                    "province": "甘肃省",
                    "city": "定西市"
                },
                {
                    "province": "甘肃省",
                    "city": "陇南市"
                },
                {
                    "province": "甘肃省",
                    "city": "临夏回族自治州"
                },
                {
                    "province": "甘肃省",
                    "city": "甘南藏族自治州"
                },
                {
                    "province": "青海省",
                    "city": "所有"
                },
                {
                    "province": "青海省",
                    "city": "西宁市"
                },
                {
                    "province": "青海省",
                    "city": "海东地区"
                },
                {
                    "province": "青海省",
                    "city": "海北藏族自治州"
                },
                {
                    "province": "青海省",
                    "city": "海南藏族自治州"
                },
                {
                    "province": "青海省",
                    "city": "黄南藏族自治州"
                },
                {
                    "province": "青海省",
                    "city": "果洛藏族自治州"
                },
                {
                    "province": "青海省",
                    "city": "玉树藏族自治州"
                },
                {
                    "province": "青海省",
                    "city": "海西蒙古族藏族自治州"
                },
                {
                    "province": "宁夏省",
                    "city": "所有"
                },
                {
                    "province": "宁夏省",
                    "city": "银川市"
                },
                {
                    "province": "宁夏省",
                    "city": "石嘴山市"
                },
                {
                    "province": "宁夏省",
                    "city": "吴忠市"
                },
                {
                    "province": "宁夏省",
                    "city": "固原市"
                },
                {
                    "province": "宁夏省",
                    "city": "中卫市"
                },
                {
                    "province": "新疆省",
                    "city": "所有"
                },
                {
                    "province": "新疆省",
                    "city": "乌鲁木齐市"
                },
                {
                    "province": "新疆省",
                    "city": "克拉玛依"
                },
                {
                    "province": "新疆省",
                    "city": "吐鲁番地区"
                },
                {
                    "province": "新疆省",
                    "city": "哈密地区"
                },
                {
                    "province": "新疆省",
                    "city": "和田地区"
                },
                {
                    "province": "新疆省",
                    "city": "阿克苏地区"
                },
                {
                    "province": "新疆省",
                    "city": "喀什地区"
                },
                {
                    "province": "新疆省",
                    "city": "克孜勒苏柯尔克孜自治州"
                },
                {
                    "province": "新疆省",
                    "city": "巴音郭楞蒙古自治州"
                },
                {
                    "province": "新疆省",
                    "city": "昌吉回族自治州"
                },
                {
                    "province": "新疆省",
                    "city": "博尔塔拉蒙古自治州"
                },
                {
                    "province": "新疆省",
                    "city": "石河子市"
                },
                {
                    "province": "新疆省",
                    "city": "阿拉尔市"
                },
                {
                    "province": "新疆省",
                    "city": "图木舒克市"
                },
                {
                    "province": "新疆省",
                    "city": "五家渠市"
                },
                {
                    "province": "新疆省",
                    "city": "伊犁哈萨克自治州"
                },
                {
                    "province": "台湾",
                    "city": "所有"
                },
                {
                    "province": "台湾",
                    "city": "台北市"
                },
                {
                    "province": "台湾",
                    "city": "新北市"
                },
                {
                    "province": "台湾",
                    "city": "桃园市"
                },
                {
                    "province": "台湾",
                    "city": "台中市"
                },
                {
                    "province": "台湾",
                    "city": "台南市"
                },
                {
                    "province": "台湾",
                    "city": "高雄市"
                },
                {
                    "province": "台湾",
                    "city": "基隆市"
                },
                {
                    "province": "台湾",
                    "city": "新竹市"
                },
                {
                    "province": "台湾",
                    "city": "嘉义市"
                },
                {
                    "province": "台湾",
                    "city": "新竹县"
                },
                {
                    "province": "台湾",
                    "city": "苗栗县"
                },
                {
                    "province": "台湾",
                    "city": "彰化县"
                },
                {
                    "province": "台湾",
                    "city": "南投县"
                },
                {
                    "province": "台湾",
                    "city": "云林县"
                },
                {
                    "province": "台湾",
                    "city": "嘉义县"
                },
                {
                    "province": "台湾",
                    "city": "屏东县"
                },
                {
                    "province": "台湾",
                    "city": "宜兰县"
                },
                {
                    "province": "台湾",
                    "city": "花莲县"
                },
                {
                    "province": "台湾",
                    "city": "台东县"
                },
                {
                    "province": "台湾",
                    "city": "澎湖县"
                },
                {
                    "province": "香港",
                    "city": "所有"
                },
                {
                    "province": "澳门",
                    "city": "所有"
                }
            ]
        };
        return locations;
    }
]);
