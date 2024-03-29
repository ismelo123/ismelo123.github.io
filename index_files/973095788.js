/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={1284:function(n,t,e){var i;!function(r,o){"use strict";var u="function",a="undefined",c="object",s="string",f="model",l="name",d="type",h="vendor",v="version",p="architecture",g="console",m="mobile",y="tablet",b="smarttv",_="wearable",w="embedded",E="Amazon",I="Apple",T="ASUS",S="BlackBerry",A="Firefox",k="Google",x="Huawei",R="LG",N="Microsoft",D="Motorola",C="Opera",O="Samsung",P="Sharp",M="Sony",L="Xiaomi",F="Zebra",j="Facebook",U=function(n){for(var t={},e=0;e<n.length;e++)t[n[e].toUpperCase()]=n[e];return t},V=function(n,t){return typeof n===s&&-1!==z(t).indexOf(z(n))},z=function(n){return n.toLowerCase()},q=function(n,t){if(typeof n===s)return n=n.replace(/^\s\s*/,""),typeof t===a?n:n.substring(0,350)},B=function(n,t){for(var e,i,r,a,s,f,l=0;l<t.length&&!s;){var d=t[l],h=t[l+1];for(e=i=0;e<d.length&&!s&&d[e];)if(s=d[e++].exec(n))for(r=0;r<h.length;r++)f=s[++i],typeof(a=h[r])===c&&a.length>0?2===a.length?typeof a[1]==u?this[a[0]]=a[1].call(this,f):this[a[0]]=a[1]:3===a.length?typeof a[1]!==u||a[1].exec&&a[1].test?this[a[0]]=f?f.replace(a[1],a[2]):o:this[a[0]]=f?a[1].call(this,f,a[2]):o:4===a.length&&(this[a[0]]=f?a[3].call(this,f.replace(a[1],a[2])):o):this[a]=f||o;l+=2}},G=function(n,t){for(var e in t)if(typeof t[e]===c&&t[e].length>0){for(var i=0;i<t[e].length;i++)if(V(t[e][i],n))return"?"===e?o:e}else if(V(t[e],n))return"?"===e?o:e;return n},H={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},$={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[v,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[v,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,v],[/opios[\/ ]+([\w\.]+)/i],[v,[l,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[v,[l,C]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,v],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[v,[l,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[v,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[v,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[v,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[v,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[v,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure Browser"],v],[/\bfocus\/([\w\.]+)/i],[v,[l,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[v,[l,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[v,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[v,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[v,[l,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[v,[l,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[v,[l,A]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 Browser"]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 Browser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],v],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,v],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,j],v],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,v],[/\bgsa\/([\w\.]+) .*safari\//i],[v,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[v,[l,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,"Chrome WebView"],v],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[v,[l,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,v],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[v,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[v,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[v,G,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,v],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],v],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[v,[l,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[l,v],[/(cobalt)\/([\w\.]+)/i],[l,[v,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,z]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",z]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[f,[h,O],[d,y]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[f,[h,O],[d,m]],[/\((ip(?:hone|od)[\w ]*);/i],[f,[h,I],[d,m]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[f,[h,I],[d,y]],[/(macintosh);/i],[f,[h,I]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[f,[h,P],[d,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[f,[h,x],[d,y]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[f,[h,x],[d,m]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[f,/_/g," "],[h,L],[d,m]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[f,/_/g," "],[h,L],[d,y]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[f,[h,"OPPO"],[d,m]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[f,[h,"Vivo"],[d,m]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[f,[h,"Realme"],[d,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[f,[h,D],[d,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[f,[h,D],[d,y]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[f,[h,R],[d,y]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[f,[h,R],[d,m]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[f,[h,"Lenovo"],[d,y]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[f,/_/g," "],[h,"Nokia"],[d,m]],[/(pixel c)\b/i],[f,[h,k],[d,y]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[f,[h,k],[d,m]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[f,[h,M],[d,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[f,"Xperia Tablet"],[h,M],[d,y]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[f,[h,"OnePlus"],[d,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[f,[h,E],[d,y]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[f,/(.+)/g,"Fire Phone $1"],[h,E],[d,m]],[/(playbook);[-\w\),; ]+(rim)/i],[f,h,[d,y]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[f,[h,S],[d,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[f,[h,T],[d,y]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[f,[h,T],[d,m]],[/(nexus 9)/i],[f,[h,"HTC"],[d,y]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[h,[f,/_/g," "],[d,m]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[f,[h,"Acer"],[d,y]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[f,[h,"Meizu"],[d,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[h,f,[d,m]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,f,[d,y]],[/(surface duo)/i],[f,[h,N],[d,y]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[f,[h,"Fairphone"],[d,m]],[/(u304aa)/i],[f,[h,"AT&T"],[d,m]],[/\bsie-(\w*)/i],[f,[h,"Siemens"],[d,m]],[/\b(rct\w+) b/i],[f,[h,"RCA"],[d,y]],[/\b(venue[\d ]{2,7}) b/i],[f,[h,"Dell"],[d,y]],[/\b(q(?:mv|ta)\w+) b/i],[f,[h,"Verizon"],[d,y]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[f,[h,"Barnes & Noble"],[d,y]],[/\b(tm\d{3}\w+) b/i],[f,[h,"NuVision"],[d,y]],[/\b(k88) b/i],[f,[h,"ZTE"],[d,y]],[/\b(nx\d{3}j) b/i],[f,[h,"ZTE"],[d,m]],[/\b(gen\d{3}) b.+49h/i],[f,[h,"Swiss"],[d,m]],[/\b(zur\d{3}) b/i],[f,[h,"Swiss"],[d,y]],[/\b((zeki)?tb.*\b) b/i],[f,[h,"Zeki"],[d,y]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],f,[d,y]],[/\b(ns-?\w{0,9}) b/i],[f,[h,"Insignia"],[d,y]],[/\b((nxa|next)-?\w{0,9}) b/i],[f,[h,"NextBook"],[d,y]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],f,[d,m]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],f,[d,m]],[/\b(ph-1) /i],[f,[h,"Essential"],[d,m]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[f,[h,"Envizen"],[d,y]],[/\b(trio[-\w\. ]+) b/i],[f,[h,"MachSpeed"],[d,y]],[/\btu_(1491) b/i],[f,[h,"Rotor"],[d,y]],[/(shield[\w ]+) b/i],[f,[h,"Nvidia"],[d,y]],[/(sprint) (\w+)/i],[h,f,[d,m]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[h,N],[d,m]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[f,[h,F],[d,y]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[f,[h,F],[d,m]],[/smart-tv.+(samsung)/i],[h,[d,b]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[h,O],[d,b]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,R],[d,b]],[/(apple) ?tv/i],[h,[f,"Apple TV"],[d,b]],[/crkey/i],[[f,"Chromecast"],[h,k],[d,b]],[/droid.+aft(\w)( bui|\))/i],[f,[h,E],[d,b]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[f,[h,P],[d,b]],[/(bravia[\w ]+)( bui|\))/i],[f,[h,M],[d,b]],[/(mitv-\w{5}) bui/i],[f,[h,L],[d,b]],[/Hbbtv.*(technisat) (.*);/i],[h,f,[d,b]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[h,q],[f,q],[d,b]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,b]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,f,[d,g]],[/droid.+; (shield) bui/i],[f,[h,"Nvidia"],[d,g]],[/(playstation [345portablevi]+)/i],[f,[h,M],[d,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[f,[h,N],[d,g]],[/((pebble))app/i],[h,f,[d,_]],[/droid.+; (glass) \d/i],[f,[h,k],[d,_]],[/droid.+; (wt63?0{2,3})\)/i],[f,[h,F],[d,_]],[/(quest( 2| pro)?)/i],[f,[h,j],[d,_]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[d,w]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[f,[d,m]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[f,[d,y]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,y]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,m]],[/(android[-\w\. ]{0,9});.+buil/i],[f,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[v,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[v,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,v],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[v,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,v],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[v,G,H]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[v,G,H]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[v,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[v,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[v,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,v],[/\(bb(10);/i],[v,[l,S]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[v,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[v,[l,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[v,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[v,[l,"Chromecast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[l,"Chromium OS"],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,v],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],v],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,v]]},W=function(n,t){if(typeof n===c&&(t=n,n=o),!(this instanceof W))return new W(n,t).getResult();var e=n||(typeof r!==a&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),i=typeof r!==a&&r.navigator&&r.navigator.userAgentData?r.navigator.userAgentData:o,u=t?function(n,t){var e={};for(var i in n)t[i]&&t[i].length%2==0?e[i]=t[i].concat(n[i]):e[i]=n[i];return e}($,t):$;return this.getBrowser=function(){var n,t={};return t.name=o,t.version=o,B.call(t,e,u.browser),t.major=typeof(n=t.version)===s?n.replace(/[^\d\.]/g,"").split(".")[0]:o,t},this.getCPU=function(){var n={};return n.architecture=o,B.call(n,e,u.cpu),n},this.getDevice=function(){var n={};return n.vendor=o,n.model=o,n.type=o,B.call(n,e,u.device),!n.type&&i&&i.mobile&&(n.type=m),n},this.getEngine=function(){var n={};return n.name=o,n.version=o,B.call(n,e,u.engine),n},this.getOS=function(){var n={};return n.name=o,n.version=o,B.call(n,e,u.os),!n.name&&i&&"Unknown"!=i.platform&&(n.name=i.platform.replace(/chrome/i,"Chromium").replace(/mac/i,"Mac ")),n},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(n){return e=typeof n===s&&n.length>350?q(n,350):n,this},this.setUA(e),this};W.VERSION="0.7.33",W.BROWSER=U([l,v,"major"]),W.CPU=U([p]),W.DEVICE=U([f,h,d,g,m,b,y,_,w]),W.ENGINE=W.OS=U([l,v]),typeof t!==a?(n.exports&&(t=n.exports=W),t.UAParser=W):e.amdO?(i=function(){return W}.call(t,e,t,n))===o||(n.exports=i):typeof r!==a&&(r.UAParser=W)}("object"==typeof window?window:this)},3491:function(n,t,e){var i=e(2047)(),r=e(6417);n.exports=function(n,t){function e(t){if(!(this instanceof e))return new e(t);try{throw new Error(t)}catch(o){o.name=n,this.stack=o.stack}i&&this.stack&&(this.stack=r(this.stack,n,t)),this.message=t||"",this.name=n}return e.prototype=new(t||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+n+": "+this.message+"]":"["+n+"]"},e.prototype.name=n,e}},6417:function(n){"use strict";n.exports=function(n,t,e){var i=t;return e&&(i+=": "+e),n=i+n.slice(n.indexOf("\n"))}},2047:function(n){"use strict";n.exports=function(){var n=new Error("yep");return!!n.stack&&"Error: yep\n"===n.stack.substr(0,11)}},44:function(n,t,e){n.exports=function(){"use strict";function n(n){return"function"==typeof n||"object"==typeof n&&null!==n}function t(n){return"function"==typeof n}undefined;var i=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},r=0,o=undefined,u=undefined,a=function(n,t){_[r]=n,_[r+1]=t,2===(r+=2)&&(u?u(w):I())};function c(n){u=n}function s(n){a=n}var f="undefined"!=typeof window?window:undefined,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,h="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),v="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(w)}}function g(){return void 0!==o?function(){o(w)}:b()}function m(){var n=0,t=new d(w),e=document.createTextNode("");return t.observe(e,{characterData:!0}),function(){e.data=n=++n%2}}function y(){var n=new MessageChannel;return n.port1.onmessage=w,function(){return n.port2.postMessage(0)}}function b(){var n=setTimeout;return function(){return n(w,1)}}var _=new Array(1e3);function w(){for(var n=0;n<r;n+=2)(0,_[n])(_[n+1]),_[n]=undefined,_[n+1]=undefined;r=0}function E(){try{undefined;var n=e(7339);return o=n.runOnLoop||n.runOnContext,g()}catch(t){return b()}}var I=undefined;function T(n,t){var e=arguments,i=this,r=new this.constructor(k);r[A]===undefined&&Q(r);var o,u=i._state;return u?(o=e[u-1],a((function(){return Y(u,r,o,i._result)}))):B(i,r,n,t),r}function S(n){var t=this;if(n&&"object"==typeof n&&n.constructor===t)return n;var e=new t(k);return U(e,n),e}I=h?p():d?m():v?y():f===undefined?E():b();var A=Math.random().toString(36).substring(16);function k(){}var x=void 0,R=1,N=2,D=new H;function C(){return new TypeError("You cannot resolve a promise with itself")}function O(){return new TypeError("A promises callback cannot return that same promise.")}function P(n){try{return n.then}catch(t){return D.error=t,D}}function M(n,t,e,i){try{n.call(t,e,i)}catch(r){return r}}function L(n,t,e){a((function(n){var i=!1,r=M(e,t,(function(e){i||(i=!0,t!==e?U(n,e):z(n,e))}),(function(t){i||(i=!0,q(n,t))}),"Settle: "+(n._label||" unknown promise"));!i&&r&&(i=!0,q(n,r))}),n)}function F(n,t){t._state===R?z(n,t._result):t._state===N?q(n,t._result):B(t,undefined,(function(t){return U(n,t)}),(function(t){return q(n,t)}))}function j(n,e,i){e.constructor===n.constructor&&i===T&&e.constructor.resolve===S?F(n,e):i===D?(q(n,D.error),D.error=null):i===undefined?z(n,e):t(i)?L(n,e,i):z(n,e)}function U(t,e){t===e?q(t,C()):n(e)?j(t,e,P(e)):z(t,e)}function V(n){n._onerror&&n._onerror(n._result),G(n)}function z(n,t){n._state===x&&(n._result=t,n._state=R,0!==n._subscribers.length&&a(G,n))}function q(n,t){n._state===x&&(n._state=N,n._result=t,a(V,n))}function B(n,t,e,i){var r=n._subscribers,o=r.length;n._onerror=null,r[o]=t,r[o+R]=e,r[o+N]=i,0===o&&n._state&&a(G,n)}function G(n){var t=n._subscribers,e=n._state;if(0!==t.length){for(var i=undefined,r=undefined,o=n._result,u=0;u<t.length;u+=3)i=t[u],r=t[u+e],i?Y(e,i,r,o):r(o);n._subscribers.length=0}}function H(){this.error=null}var $=new H;function W(n,t){try{return n(t)}catch(e){return $.error=e,$}}function Y(n,e,i,r){var o=t(i),u=undefined,a=undefined,c=undefined,s=undefined;if(o){if((u=W(i,r))===$?(s=!0,a=u.error,u.error=null):c=!0,e===u)return void q(e,O())}else u=r,c=!0;e._state!==x||(o&&c?U(e,u):s?q(e,a):n===R?z(e,u):n===N&&q(e,u))}function K(n,t){try{t((function(t){U(n,t)}),(function(t){q(n,t)}))}catch(e){q(n,e)}}var X=0;function J(){return X++}function Q(n){n[A]=X++,n._state=undefined,n._result=undefined,n._subscribers=[]}function Z(n,t){this._instanceConstructor=n,this.promise=new n(k),this.promise[A]||Q(this.promise),i(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?z(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&z(this.promise,this._result))):q(this.promise,nn())}function nn(){return new Error("Array Methods must be provided an Array")}function tn(n){return new Z(this,n).promise}function en(n){var t=this;return i(n)?new t((function(e,i){for(var r=n.length,o=0;o<r;o++)t.resolve(n[o]).then(e,i)})):new t((function(n,t){return t(new TypeError("You must pass an array to race."))}))}function rn(n){var t=new this(k);return q(t,n),t}function on(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function un(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function an(n){this[A]=J(),this._result=this._state=undefined,this._subscribers=[],k!==n&&("function"!=typeof n&&on(),this instanceof an?K(this,n):un())}function cn(){var n=undefined;if("undefined"!=typeof e.g)n=e.g;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(r){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=n.Promise;if(t){var i=null;try{i=Object.prototype.toString.call(t.resolve())}catch(r){}if("[object Promise]"===i&&!t.cast)return}n.Promise=an}return Z.prototype._enumerate=function(){for(var n=this.length,t=this._input,e=0;this._state===x&&e<n;e++)this._eachEntry(t[e],e)},Z.prototype._eachEntry=function(n,t){var e=this._instanceConstructor,i=e.resolve;if(i===S){var r=P(n);if(r===T&&n._state!==x)this._settledAt(n._state,t,n._result);else if("function"!=typeof r)this._remaining--,this._result[t]=n;else if(e===an){var o=new e(k);j(o,n,r),this._willSettleAt(o,t)}else this._willSettleAt(new e((function(t){return t(n)})),t)}else this._willSettleAt(i(n),t)},Z.prototype._settledAt=function(n,t,e){var i=this.promise;i._state===x&&(this._remaining--,n===N?q(i,e):this._result[t]=e),0===this._remaining&&z(i,this._result)},Z.prototype._willSettleAt=function(n,t){var e=this;B(n,undefined,(function(n){return e._settledAt(R,t,n)}),(function(n){return e._settledAt(N,t,n)}))},an.all=tn,an.race=en,an.resolve=S,an.reject=rn,an._setScheduler=c,an._setAsap=s,an._asap=a,an.prototype={constructor:an,then:T,"catch":function(n){return this.then(null,n)}},an.polyfill=cn,an.Promise=an,an}()},2624:function(n){"use strict";n.exports=function(n){var t,e={};if(!(n instanceof Object)||Array.isArray(n))throw new Error("keyMirror(...): Argument must be an object.");for(t in n)n.hasOwnProperty(t)&&(e[t]=t);return e}},6855:function(n){"use strict";n.exports=function(n,t,e,i){Object.defineProperty(n,t,{get:function(){var n=e.call(this);return Object.defineProperty(this,t,{value:n,enumerable:!!i,writable:!0}),n},set:function(n){return Object.defineProperty(this,t,{value:n,enumerable:!!i,writable:!0}),n},enumerable:!!i,configurable:!0})}},7190:function(n){"use strict";var t=Element.prototype,e=t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;n.exports=function(n,t){if(e)return e.call(n,t);for(var i=n.parentNode.querySelectorAll(t),r=0;r<i.length;r++)if(i[r]==n)return!0;return!1}},7446:function(n){!function(){function t(n,t){var e,i,r,o,u,a,c,s;for(e=3&n.length,i=n.length-e,r=t,u=3432918353,a=461845907,s=0;s<i;)c=255&n.charCodeAt(s)|(255&n.charCodeAt(++s))<<8|(255&n.charCodeAt(++s))<<16|(255&n.charCodeAt(++s))<<24,++s,r=27492+(65535&(o=5*(65535&(r=(r^=c=(65535&(c=(c=(65535&c)*u+(((c>>>16)*u&65535)<<16)&4294967295)<<15|c>>>17))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,e){case 3:c^=(255&n.charCodeAt(s+2))<<16;case 2:c^=(255&n.charCodeAt(s+1))<<8;case 1:r^=c=(65535&(c=(c=(65535&(c^=255&n.charCodeAt(s)))*u+(((c>>>16)*u&65535)<<16)&4294967295)<<15|c>>>17))*a+(((c>>>16)*a&65535)<<16)&4294967295}return r^=n.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=t;e.v2=function(n,t){for(var e,i=n.length,r=t^i,o=0;i>=4;)e=1540483477*(65535&(e=255&n.charCodeAt(o)|(255&n.charCodeAt(++o))<<8|(255&n.charCodeAt(++o))<<16|(255&n.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&n.charCodeAt(o+2))<<16;case 2:r^=(255&n.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&n.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=t,n.exports=e}()},6861:function(n,t,e){n=e.nmd(n),function(){var i,r="Expected a function",o="__lodash_hash_undefined__",u=9007199254740991,a="[object Arguments]",c="[object Array]",s="[object Boolean]",f="[object Date]",l="[object Error]",d="[object Function]",h="[object GeneratorFunction]",v="[object Map]",p="[object Number]",g="[object Object]",m="[object RegExp]",y="[object Set]",b="[object String]",_="[object Symbol]",w="[object WeakMap]",E="[object ArrayBuffer]",I="[object Float32Array]",T="[object Float64Array]",S="[object Int8Array]",A="[object Int16Array]",k="[object Int32Array]",x="[object Uint8Array]",R="[object Uint8ClampedArray]",N="[object Uint16Array]",D="[object Uint32Array]",C=/[&<>"'`]/g,O=RegExp(C.source),P=/\w*$/,M=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,F={};F[I]=F[T]=F[S]=F[A]=F[k]=F[x]=F[R]=F[N]=F[D]=!0,F[a]=F[c]=F[E]=F[s]=F[f]=F[l]=F[d]=F[v]=F[p]=F[g]=F[m]=F[y]=F[b]=F[w]=!1;var j={};j[a]=j[c]=j[E]=j[s]=j[f]=j[I]=j[T]=j[S]=j[A]=j[k]=j[v]=j[p]=j[g]=j[m]=j[y]=j[b]=j[_]=j[x]=j[R]=j[N]=j[D]=!0,j[l]=j[d]=j[w]=!1;var U={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},V={"function":!0,object:!0},z=V[typeof t]&&t&&!t.nodeType?t:i,q=V.object&&n&&!n.nodeType?n:i,B=q&&q.exports===z?z:i,G=on(z&&q&&"object"==typeof e.g&&e.g),H=on(V[typeof self]&&self),$=on(V[typeof window]&&window),W=on(V[typeof this]&&this),Y=G||$!==(W&&W.window)&&$||H||W||Function("return this")();function K(n,t){return n.set(t[0],t[1]),n}function X(n,t){return n.add(t),n}function J(n,t){return nn(It(n),Te)}function Q(n,t){return!!n.length&&en(n,t,0)>-1}function Z(n,t,e){for(var i=-1,r=n.length;++i<r;)if(e(t,n[i]))return!0;return!1}function nn(n,t){for(var e=-1,i=t.length,r=n.length;++e<i;)n[r+e]=t[e];return n}function tn(n,t,e){for(var r=-1,o=n.length;++r<o;){var u=n[r],a=t(u);if(null!=a&&(c===i?a==a:e(a,c)))var c=a,s=u}return s}function en(n,t,e){if(t!=t)return function(n,t,e){var i=n.length,r=t+(e?0:-1);for(;e?r--:++r<i;){var o=n[r];if(o!=o)return r}return-1}(n,e);for(var i=e-1,r=n.length;++i<r;)if(n[i]===t)return i;return-1}function rn(n,t,e,i,r){return r(n,(function(n,r,o){e=i?(i=!1,n):t(e,n,r,o)})),e}function on(n){return n&&n.Object===Object?n:null}function un(n){return U[n]}function an(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=!!(n+"")}catch(e){}return t}function cn(n,t){return n="number"==typeof n||L.test(n)?+n:-1,t=null==t?u:t,n>-1&&n%1==0&&n<t}var sn=Array.prototype,fn=Object.prototype,ln=Function.prototype.toString,dn=fn.hasOwnProperty,hn=0,vn=ln.call(Object),pn=fn.toString,gn=Y._,mn=RegExp("^"+ln.call(dn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),yn=Y.Reflect,bn=Y.Symbol,_n=Y.Uint8Array,wn=yn?yn.enumerate:i,En=Object.getPrototypeOf,In=Object.getOwnPropertySymbols,Tn=Object.create,Sn=fn.propertyIsEnumerable,An=sn.splice,kn=Y.isFinite,xn=Object.keys,Rn=Math.max,Nn=Ct(Y,"Map"),Dn=Ct(Y,"Set"),Cn=Ct(Y,"WeakMap"),On=Ct(Object,"create"),Pn=Nn?ln.call(Nn):"",Mn=Dn?ln.call(Dn):"",Ln=Cn?ln.call(Cn):"",Fn=bn?bn.prototype:i,jn=Fn?Fn.valueOf:i;function Un(n){if(ae(n)&&!Zt(n)){if(n instanceof Vn)return n;if(dn.call(n,"__wrapped__"))return function(n){var t=new Vn(n.u,n.l);return t.m=It(n.m),t}(n)}return new Vn(n)}function Vn(n,t){this.u=n,this.m=[],this.l=!!t}function zn(){}function qn(n,t){return On?n[t]!==i:dn.call(n,t)}function Bn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}function Gn(n){var t=-1,e=n?n.length:0;for(this.I=new Bn;++t<e;)this.push(n[t])}function Hn(n,t){var e=n.I;if(Lt(t)){var i=e.I;return("string"==typeof t?i.string:i.hash)[t]===o}return e.has(t)}function $n(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}function Wn(n,t){var e=Xn(n,t);return!(e<0)&&(e==n.length-1?n.pop():An.call(n,e,1),!0)}function Yn(n,t){var e=Xn(n,t);return e<0?i:n[e][1]}function Kn(n,t){return Xn(n,t)>-1}function Xn(n,t){for(var e=n.length;e--;)if(Xt(n[e][0],t))return e;return-1}function Jn(n,t,e){var i=Xn(n,t);i<0?n.push([t,e]):n[i][1]=e}function Qn(n,t,e,r){return n===i||Xt(n,fn[e])&&!dn.call(r,e)?t:n}function Zn(n,t,e){(e!==i&&!Xt(n[t],e)||"number"==typeof t&&e===i&&!(t in n))&&(n[t]=e)}function nt(n,t,e){var r=n[t];dn.call(n,t)&&Xt(r,e)&&(e!==i||t in n)||(n[t]=e)}function tt(n){return"function"==typeof n?n:Se}function et(n,t,e,r,o,u,c){var l;if(r&&(l=u?r(n,o,u,c):r(n)),l!==i)return l;if(!ue(n))return n;var w=Zt(n);if(w){if(l=function(n){var t=n.length,e=n.constructor(t);t&&"string"==typeof n[0]&&dn.call(n,"index")&&(e.index=n.index,e.input=n.input);return e}(n),!t)return It(n)}else{var C=Pt(n),O=C==d||C==h;if(ie(n))return function(n,t){if(t)return n.slice();var e=new n.constructor(n.length);return n.copy(e),e}(n,t);if(C==g||C==a||O&&!u){if(an(n))return u?n:{};if(l=function(n){return"function"!=typeof n.constructor||Ft(n)?{}:it(En(n))}(O?{}:n),!t)return l=function(n,t){return n&&At(t,be(t),n)}(l,n),e?xt(n,l):l}else{if(!j[C])return u?n:{};l=function(n,t,e){var i=n.constructor;switch(t){case E:return St(n);case s:case f:return new i(+n);case I:case T:case S:case A:case k:case x:case R:case N:case D:return function(n,t){var e=t?St(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}(n,e);case v:return function(n){return Bt(function(n){var t=-1,e=Array(n.size);return n.forEach((function(n,i){e[++t]=[i,n]})),e}(n),K,new n.constructor)}(n);case p:case b:return new i(n);case m:return function(n){var t=new n.constructor(n.source,P.exec(n));return t.lastIndex=n.lastIndex,t}(n);case y:return Bt(function(n){var t=-1,e=Array(n.size);return n.forEach((function(n){e[++t]=n})),e}(o=n),X,new o.constructor);case _:return r=n,jn?Object(jn.call(r)):{}}var r;var o}(n,C,t)}}c||(c=new $n);var M=c.get(n);return M||(c.set(n,l),(w?at:lt)(n,(function(i,o){nt(l,o,et(i,t,e,r,o,n,c))})),e&&!w?xt(n,l):l)}function it(n){return ue(n)?Tn(n):{}}function rt(n,t,e){if("function"!=typeof n)throw new TypeError(r);return setTimeout((function(){n.apply(i,e)}),t)}var ot,ut,at=(ot=lt,function(n,t){if(null==n)return n;if(!ne(n))return ot(n,t);for(var e=n.length,i=ut?e:-1,r=Object(n);(ut?i--:++i<e)&&!1!==t(r[i],i,r););return n});function ct(n,t){var e=[];return at(n,(function(n,i,r){t(n,i,r)&&e.push(n)})),e}function st(n,t,e,i){i||(i=[]);for(var r=-1,o=n.length;++r<o;){var u=n[r];t>0&&te(u)&&(e||Zt(u)||Qt(u))?t>1?st(u,t-1,e,i):nn(i,u):e||(i[i.length]=u)}return i}var ft=function(n){return function(t,e,i){for(var r=-1,o=Object(t),u=i(t),a=u.length;a--;){var c=u[n?a:++r];if(!1===e(o[c],c,o))break}return t}}();function lt(n,t){return n&&ft(n,t,be)}function dt(n,t){return ct(t,(function(t){return re(n[t])}))}function ht(n,t,e,r,o){return n===t||(null==n||null==t||!ue(n)&&!ae(t)?n!=n&&t!=t:function(n,t,e,r,o,u){var d=Zt(n),h=Zt(t),v=c,y=c;d||(v=(v=pn.call(n))==a?g:v);h||(y=(y=pn.call(t))==a?g:y);var _=v==g&&!an(n),w=y==g&&!an(t),E=v==y;u||(u=[]);var I=zt(u,(function(t){return t[0]===n}));if(I&&I[1])return I[1]==t;if(u.push([n,t]),E&&!_){var T=d||fe(n)?function(n,t,e,r,o,u){var a=-1,c=2&o,s=1&o,f=n.length,l=t.length;if(f!=l&&!(c&&l>f))return!1;var d=!0;for(;++a<f;){var h,v=n[a],p=t[a];if(h!==i){if(h)continue;d=!1;break}if(s){if(!Tt(t,(function(n){return v===n||e(v,n,r,o,u)}))){d=!1;break}}else if(v!==p&&!e(v,p,r,o,u)){d=!1;break}}return d}(n,t,e,r,o,u):function(n,t,e,i,r,o,u){switch(e){case s:case f:return+n==+t;case l:return n.name==t.name&&n.message==t.message;case p:return n!=+n?t!=+t:n==+t;case m:case b:return n==t+""}return!1}(n,t,v);return u.pop(),T}if(!(2&o)){var S=_&&dn.call(n,"__wrapped__"),A=w&&dn.call(t,"__wrapped__");if(S||A){T=e(S?n.value():n,A?t.value():t,r,o,u);return u.pop(),T}}if(!E)return!1;T=function(n,t,e,r,o,u){var a=2&o,c=be(n),s=c.length,f=be(t).length;if(s!=f&&!a)return!1;var l=s;for(;l--;){var d=c[l];if(!(a?d in t:dn.call(t,d)))return!1}var h=!0,v=a;for(;++l<s;){var p,g=n[d=c[l]],m=t[d];if(!(p===i?g===m||e(g,m,r,o,u):p)){h=!1;break}v||(v="constructor"==d)}if(h&&!v){var y=n.constructor,b=t.constructor;y==b||!("constructor"in n)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return h}(n,t,e,r,o,u);return u.pop(),T}(n,t,ht,e,r,o))}function vt(n){var t=typeof n;return"function"==t?n:null==n?Se:("object"==t?mt:wt)(n)}function pt(n){n=null==n?n:Object(n);var t=[];for(var e in n)t.push(e);return t}function gt(n,t){var e=-1,i=ne(n)?Array(n.length):[];return at(n,(function(n,r,o){i[++e]=t(n,r,o)})),i}function mt(n){var t=be(n);return function(e){var r=t.length;if(null==e)return!r;for(e=Object(e);r--;){var o=t[r];if(!(o in e)||!ht(n[o],e[o],i,3))return!1}return!0}}function yt(n,t,e,r,o){if(n!==t){var u=Zt(t)||fe(t)?i:_e(t);at(u||t,(function(a,c){if(u&&(a=t[c=a]),ue(a))o||(o=new $n),function(n,t,e,r,o,u,a){var c=n[e],s=t[e],f=a.get(s);if(f)return void Zn(n,e,f);var l=u?u(c,s,e+"",n,t,a):i,d=l===i;d&&(l=s,Zt(s)||fe(s)?Zt(c)?l=c:te(c)?l=It(c):(d=!1,l=et(s,!u)):function(n){if(!ae(n)||pn.call(n)!=g||an(n))return!1;var t=En(n);if(null===t)return!0;var e=t.constructor;return"function"==typeof e&&e instanceof e&&ln.call(e)==vn}(s)||Qt(s)?Qt(c)?l=At(h=c,_e(h)):!ue(c)||r&&re(c)?(d=!1,l=et(s,!u)):l=c:d=!1);var h;a.set(s,l),d&&o(l,s,r,u,a);a["delete"](s),Zn(n,e,l)}(n,t,c,e,yt,r,o);else{var s=r?r(n[c],a,c+"",n,t,o):i;s===i&&(s=a),Zn(n,c,s)}}))}}function bt(n,t){return n=Object(n),Bt(t,(function(t,e){return e in n&&(t[e]=n[e]),t}),{})}function _t(n,t){var e={};return function(n,t){null==n||ft(n,t,_e)}(n,(function(n,i){t(n,i)&&(e[i]=n)})),e}function wt(n){return function(t){return null==t?i:t[n]}}function Et(n,t,e){var i=-1,r=n.length;t<0&&(t=-t>r?0:r+t),(e=e>r?r:e)<0&&(e+=r),r=t>e?0:e-t>>>0,t>>>=0;for(var o=Array(r);++i<r;)o[i]=n[i+t];return o}function It(n){return Et(n,0,n.length)}function Tt(n,t){var e;return at(n,(function(n,i,r){return!(e=t(n,i,r))})),!!e}function St(n){var t=new n.constructor(n.byteLength);return new _n(t).set(new _n(n)),t}wn&&!Sn.call({valueOf:1},"valueOf")&&(pt=function(n){return function(n){for(var t,e=[];!(t=n.next()).done;)e.push(t.value);return e}(wn(n))});var At=kt;function kt(n,t,e,i){e||(e={});for(var r=-1,o=t.length;++r<o;){var u=t[r];nt(e,u,i?i(e[u],n[u],u,e,n):n[u])}return e}function xt(n,t){return At(n,Ot(n),t)}function Rt(n){return Kt((function(t,e){var r=-1,o=e.length,u=o>1?e[o-1]:i;for(u="function"==typeof u?(o--,u):i,t=Object(t);++r<o;){var a=e[r];a&&n(t,a,r,u)}return t}))}function Nt(n,t,e,i){if("function"!=typeof n)throw new TypeError(r);var o=1&t,u=function(n){return function(){var t=arguments,e=it(n.prototype),i=n.apply(e,t);return ue(i)?i:e}}(n);return function a(){for(var t=-1,r=arguments.length,c=-1,s=i.length,f=Array(s+r),l=this&&this!==Y&&this instanceof a?u:n;++c<s;)f[c]=i[c];for(;r--;)f[c++]=arguments[++t];return l.apply(o?e:this,f)}}var Dt=wt("length");function Ct(n,t){var e=n[t];return function(n){if(null==n)return!1;if(re(n))return mn.test(ln.call(n));return ae(n)&&(an(n)?mn:M).test(n)}(e)?e:i}var Ot=In||function(){return[]};function Pt(n){return pn.call(n)}function Mt(n){var t=n?n.length:i;return oe(t)&&(Zt(n)||se(n)||Qt(n))?function(n,t){for(var e=-1,i=Array(n);++e<n;)i[e]=t(e);return i}(t,String):null}function Lt(n){var t=typeof n;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=n||null==n}function Ft(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||fn)}(Nn&&Pt(new Nn)!=v||Dn&&Pt(new Dn)!=y||Cn&&Pt(new Cn)!=w)&&(Pt=function(n){var t=pn.call(n),e=t==g?n.constructor:null,i="function"==typeof e?ln.call(e):"";if(i)switch(i){case Pn:return v;case Mn:return y;case Ln:return w}return t});var jt=Kt((function(n,t){return Zt(n)||(n=null==n?[]:[Object(n)]),t=st(t,1),J(n)}));function Ut(n){return n?n[0]:i}function Vt(n){var t=Un(n);return t.l=!0,t}function zt(n,t){return function(n,t,e,i){var r;return e(n,(function(n,e,o){if(t(n,e,o))return r=i?e:n,!1})),r}(n,vt(t),at)}function qt(n,t){return at(n,tt(t))}function Bt(n,t,e){return rn(n,vt(t),e,arguments.length<3,at)}function Gt(n,t){var e;if("function"!=typeof t)throw new TypeError(r);return n=de(n),function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=i),e}}var Ht=Kt((function(n,t,e){return Nt(n,33,t,e)})),$t=Kt((function(n,t){return rt(n,1,t)})),Wt=Kt((function(n,t,e){return rt(n,he(t)||0,e)}));var Yt=Kt((function(n,t){return Nt(n,32,i,t)}));function Kt(n,t){if("function"!=typeof n)throw new TypeError(r);return t=Rn(t===i?n.length-1:de(t),0),function(){for(var e=arguments,i=-1,r=Rn(e.length-t,0),o=Array(r);++i<r;)o[i]=e[t+i];var u=Array(t+1);for(i=-1;++i<t;)u[i]=e[i];return u[t]=o,n.apply(this,u)}}function Xt(n,t){return n===t||n!=n&&t!=t}function Jt(n,t){return n>t}function Qt(n){return te(n)&&dn.call(n,"callee")&&(!Sn.call(n,"callee")||pn.call(n)==a)}var Zt=Array.isArray;function ne(n){return null!=n&&oe(Dt(n))&&!re(n)}function te(n){return ae(n)&&ne(n)}var ee,ie=(ee=!1,function(){return ee});function re(n){var t=ue(n)?pn.call(n):"";return t==d||t==h}function oe(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=u}function ue(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ae(n){return!!n&&"object"==typeof n}function ce(n){return"number"==typeof n||ae(n)&&pn.call(n)==p}function se(n){return"string"==typeof n||!Zt(n)&&ae(n)&&pn.call(n)==b}function fe(n){return ae(n)&&oe(n.length)&&!!F[pn.call(n)]}function le(n,t){return n<t}var de=Number,he=Number;function ve(n){return"string"==typeof n?n:null==n?"":n+""}var pe=Rt((function(n,t){At(t,be(t),n)})),ge=Rt((function(n,t){At(t,_e(t),n)})),me=Rt((function(n,t,e,i){kt(t,_e(t),n,i)}));var ye=Kt((function(n){return n.push(i,Qn),me.apply(i,n)}));function be(n){var t=Ft(n);if(!t&&!ne(n))return function(n){return xn(Object(n))}(n);var e=Mt(n),i=!!e,r=e||[],o=r.length;for(var u in n)!dn.call(n,u)||i&&("length"==u||cn(u,o))||t&&"constructor"==u||r.push(u);return r}function _e(n){for(var t=-1,e=Ft(n),i=pt(n),r=i.length,o=Mt(n),u=!!o,a=o||[],c=a.length;++t<r;){var s=i[t];u&&("length"==s||cn(s,c))||"constructor"==s&&(e||!dn.call(n,s))||a.push(s)}return a}var we=Rt((function(n,t,e){yt(n,t,e)})),Ee=Kt((function(n,t){return null==n?{}:(t=gt(st(t,1),String),bt(n,function(n,t,e,i){var r,o=-1,u=Q,a=!0,c=n.length,s=[],f=t.length;if(!c)return s;e&&(t=gt(t,(r=e,function(n){return r(n)}))),i?(u=Z,a=!1):t.length>=200&&(u=Hn,a=!1,t=new Gn(t));n:for(;++o<c;){var l=n[o],d=e?e(l):l;if(a&&d==d){for(var h=f;h--;)if(t[h]===d)continue n;s.push(l)}else u(t,d,i)||s.push(l)}return s}(_e(n),t)))}));var Ie=Kt((function(n,t){return null==n?{}:bt(n,st(t,1))}));function Te(n){return n?function(n,t){return gt(t,(function(t){return n[t]}))}(n,be(n)):[]}function Se(n){return n}var Ae,ke=vt;function xe(n,t,e){var i=be(t),r=dt(t,i);null!=e||ue(t)&&(r.length||!i.length)||(e=t,t=n,n=this,r=dt(t,be(t)));var o=!ue(e)||!("chain"in e)||e.chain,u=re(n);return at(r,(function(e){var i=t[e];n[e]=i,u&&(n.prototype[e]=function(){var t=this.l;if(o||t){var e=n(this.u),r=e.m=It(this.m);return r.push({func:i,args:arguments,thisArg:n}),e.l=t,e}return i.apply(n,nn([this.value()],arguments))})})),n}Vn.prototype=it(Un.prototype),Vn.prototype.constructor=Vn,zn.prototype=On?On(null):fn,Bn.prototype.clear=function(){this.I={hash:new zn,map:Nn?new Nn:[],string:new zn}},Bn.prototype["delete"]=function(n){var t=this.I;return Lt(n)?function(n,t){return qn(n,t)&&delete n[t]}("string"==typeof n?t.string:t.hash,n):Nn?t.map["delete"](n):Wn(t.map,n)},Bn.prototype.get=function(n){var t=this.I;return Lt(n)?function(n,t){if(On){var e=n[t];return e===o?i:e}return dn.call(n,t)?n[t]:i}("string"==typeof n?t.string:t.hash,n):Nn?t.map.get(n):Yn(t.map,n)},Bn.prototype.has=function(n){var t=this.I;return Lt(n)?qn("string"==typeof n?t.string:t.hash,n):Nn?t.map.has(n):Kn(t.map,n)},Bn.prototype.set=function(n,t){var e=this.I;return Lt(n)?function(n,t,e){n[t]=On&&e===i?o:e}("string"==typeof n?e.string:e.hash,n,t):Nn?e.map.set(n,t):Jn(e.map,n,t),this},Gn.prototype.push=function(n){var t=this.I;if(Lt(n)){var e=t.I;("string"==typeof n?e.string:e.hash)[n]=o}else t.set(n,o)},$n.prototype.clear=function(){this.I={array:[],map:null}},$n.prototype["delete"]=function(n){var t=this.I,e=t.array;return e?Wn(e,n):t.map["delete"](n)},$n.prototype.get=function(n){var t=this.I,e=t.array;return e?Yn(e,n):t.map.get(n)},$n.prototype.has=function(n){var t=this.I,e=t.array;return e?Kn(e,n):t.map.has(n)},$n.prototype.set=function(n,t){var e=this.I,i=e.array;i&&(i.length<199?Jn(i,n,t):(e.array=null,e.map=new Bn(i)));var r=e.map;return r&&r.set(n,t),this},Un.assign=pe,Un.assignIn=ge,Un.before=Gt,Un.bind=Ht,Un.chain=Vt,Un.compact=function(n){return ct(n,Boolean)},Un.concat=jt,Un.create=function(n,t){var e=it(n);return t?pe(e,t):e},Un.defaults=ye,Un.defer=$t,Un.delay=Wt,Un.filter=function(n,t){return ct(n,vt(t))},Un.flatten=function(n){return(n?n.length:0)?st(n,1):[]},Un.flattenDeep=function(n){return(n?n.length:0)?st(n,Infinity):[]},Un.iteratee=ke,Un.keys=be,Un.map=function(n,t){return gt(n,vt(t))},Un.mapValues=function(n,t){var e={};return t=vt(t),lt(n,(function(n,i,r){e[i]=t(n,i,r)})),e},Un.matches=function(n){return mt(pe({},n))},Un.merge=we,Un.mixin=xe,Un.negate=function(n){if("function"!=typeof n)throw new TypeError(r);return function(){return!n.apply(this,arguments)}},Un.omit=Ee,Un.omitBy=function(n,t){return t=vt(t),_t(n,(function(n,e){return!t(n,e)}))},Un.once=function(n){return Gt(2,n)},Un.partial=Yt,Un.pick=Ie,Un.pickBy=function(n,t){return null==n?{}:_t(n,vt(t))},Un.slice=function(n,t,e){var r=n?n.length:0;return t=null==t?0:+t,e=e===i?r:+e,r?Et(n,t,e):[]},Un.sortBy=function(n,t){var e=0;return t=vt(t),gt(gt(n,(function(n,i,r){return{value:n,index:e++,criteria:t(n,i,r)}})).sort((function(n,t){return function(n,t){if(n!==t){var e=null===n,r=n===i,o=n==n,u=null===t,a=t===i,c=t==t;if(n>t&&!u||!o||e&&!a&&c||r&&c)return 1;if(n<t&&!e||!c||u&&!r&&o||a&&o)return-1}return 0}(n.criteria,t.criteria)||n.index-t.index})),wt("value"))},Un.tap=function(n,t){return t(n),n},Un.thru=function(n,t){return t(n)},Un.toArray=function(n){return ne(n)?n.length?It(n):[]:Te(n)},Un.values=Te,Un.extend=ge,xe(Un,Un),Un.clone=function(n){return ue(n)?Zt(n)?It(n):At(n,be(n)):n},Un.cloneDeep=function(n){return et(n,!0,!0)},Un.escape=function(n){return(n=ve(n))&&O.test(n)?n.replace(C,un):n},Un.every=function(n,t,e){return function(n,t){var e=!0;return at(n,(function(n,i,r){return e=!!t(n,i,r)})),e}(n,vt(t=e?i:t))},Un.find=zt,Un.findIndex=function(n,t){return n&&n.length?function(n,t,e){for(var i=n.length,r=e?i:-1;e?r--:++r<i;)if(t(n[r],r,n))return r;return-1}(n,vt(t)):-1},Un.forEach=qt,Un.forOwn=function(n,t){return n&&lt(n,tt(t))},Un.has=function(n,t){return null!=n&&dn.call(n,t)},Un.head=Ut,Un.identity=Se,Un.includes=function(n,t,e,i){n=ne(n)?n:Te(n),e=e&&!i?de(e):0;var r=n.length;return e<0&&(e=Rn(r+e,0)),se(n)?e<=r&&n.indexOf(t,e)>-1:!!r&&en(n,t,e)>-1},Un.indexOf=function(n,t,e){for(var i=n?n.length:0,r=((e="number"==typeof e?e<0?Rn(i+e,0):e:0)||0)-1,o=t==t;++r<i;){var u=n[r];if(o?u===t:u!=u)return r}return-1},Un.isArguments=Qt,Un.isArray=Zt,Un.isBoolean=function(n){return!0===n||!1===n||ae(n)&&pn.call(n)==s},Un.isDate=function(n){return ae(n)&&pn.call(n)==f},Un.isEmpty=function(n){if(ne(n)&&(Zt(n)||se(n)||re(n.splice)||Qt(n)))return!n.length;for(var t in n)if(dn.call(n,t))return!1;return!0},Un.isEqual=function(n,t){return ht(n,t)},Un.isFinite=function(n){return"number"==typeof n&&kn(n)},Un.isFunction=re,Un.isNaN=function(n){return ce(n)&&n!=+n},Un.isNull=function(n){return null===n},Un.isNumber=ce,Un.isObject=ue,Un.isRegExp=function(n){return ue(n)&&pn.call(n)==m},Un.isString=se,Un.isUndefined=function(n){return n===i},Un.last=function(n){var t=n?n.length:0;return t?n[t-1]:i},Un.max=function(n){return n&&n.length?tn(n,Se,Jt):i},Un.min=function(n){return n&&n.length?tn(n,Se,le):i},Un.noConflict=function(){return Y._===this&&(Y._=gn),this},Un.noop=function(){},Un.reduce=Bt,Un.result=function(n,t,e){var r=null==n?i:n[t];return r===i&&(r=e),re(r)?r.call(n):r},Un.size=function(n){return null==n?0:(n=ne(n)?n:be(n)).length},Un.some=function(n,t,e){return Tt(n,vt(t=e?i:t))},Un.uniqueId=function(n){var t=++hn;return ve(n)+t},Un.each=qt,Un.first=Ut,xe(Un,(Ae={},lt(Un,(function(n,t){dn.call(Un.prototype,t)||(Ae[t]=n)})),Ae),{chain:!1}),Un.VERSION="4.6.1",at(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:sn)[n],e=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(n);Un.prototype[n]=function(){var n=arguments;return i&&!this.l?t.apply(this.value(),n):this[e]((function(e){return t.apply(e,n)}))}})),Un.prototype.toJSON=Un.prototype.valueOf=Un.prototype.value=function(){return n=this.u,Bt(this.m,(function(n,t){return t.func.apply(t.thisArg,nn([n],t.args))}),n);var n},($||H||{})._=Un,z&&q&&(B&&((q.exports=Un)._=Un),z._=Un)}.call(this)},9576:function(n,t,e){n.exports=e(6861)._.noConflict()},7751:function(n,t,e){var i=e(7446).v3,r=Math.pow(2,32),o=function(n,t){return(i(n,t)>>>0)/r};n.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(n,t){var e=i(n,t);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(n,t,e){return Math.floor(o(n,t)*e)},hashToReal:o,toByteString:function(n){var t=String.fromCharCode;return n.replace(/[\S\s]/gi,(function(n){n=n.charCodeAt(0);var e=t(255&n);return n>255&&(e=t(n>>>8&255)+e),n>65535&&(e=t(n>>>16)+e),e}))}}},1243:function(n,t){t.generate=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},2438:function(n,t,e){var i=e(9576),r=e(4041).get("stores/audience_data"),o=e(4658),u=e(7356),a=e(3552),c=e(4955);function s(n){var t=["type","selector","attributes","value"],e=i.extend({},n);return e.changeSet=i.map(n.changeSet,(function(n){return i.pick(c.dereferenceChangeId(n),t)})),e}t.emitLayerDecided=function(n){var t=n.decisionTicket?n.decisionTicket.audienceIds:[],e=i.map(t,(function(n){return{id:n,name:r.get(n).name}})),a={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:i.extend(n,{audiences:e})},s=c.translateLayerEventToCampaignEvent(a);o.emit(a),o.emit(s)},t.emitViewActivated=function(n){var t={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:n},e=c.translateViewActivatedToPageActivated(t);o.emit(t),o.emit(e)},t.emitViewsActivated=function(n){var t={type:u.TYPES.LIFECYCLE,name:"viewsActivated",data:n};o.emit(t)},t.emitPageDeactivated=function(n){var t={type:u.TYPES.LIFECYCLE,name:"pageDeactivated",data:n};o.emit(t)},t.emitActivateEvent=function(){o.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){o.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var n={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(n)},t.emitOriginsSyncedEvent=function(){var n={type:u.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(n)},t.emitActionAppliedEvent=function(n){var t={type:n.type,campaignId:n.layerId,pageId:n.pageId,experimentId:n.experimentId,variationId:n.variationId};a.defineProperty(t,"changes",(function(){return s(n).changeSet}),"actionAppliedEvent");var e={type:u.TYPES.ACTION,name:"applied",data:t};o.emit(e)},t.emitActionsForDecisionAppliedEvent=function(n,t){var e={decision:n};a.defineProperty(e,"actions",(function(){return i.map(t,s)}),"appliedAllForDecisionEvent");var r={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(r)},t.emitSendEvents=function(){var n={type:u.TYPES.ANALYTICS,name:"sendEvents"};o.emit(n)},t.emitHoldEvents=function(){var n={type:u.TYPES.ANALYTICS,name:"holdEvents"};o.emit(n)}},963:function(n,t,e){var i=e(9576),r=e(9978),o=e(3552),u=e(4955),a=e(2119),c=e(74);function s(n,t,e,r){var o=n.getLayerState(r),u=t.get(r),c=e.get();if(!o||!u)return c?{layer:{name:c.layerName,id:c.layerId,policy:c.layerPolicy,integrationStringVersion:c.integrationStringVersion},experiment:{name:c.experimentName,id:c.experimentId},variation:{name:c.variationName,id:c.variationId},isLayerHoldback:!1}:null;if(a.isSingleExperimentPolicy(u.policy)&&o.decision.isLayerHoldback)return null;var s,f,l=o.decision.experimentId,d=o.decision.variationId;return l&&d&&(s=i.find(u.experiments,{id:l}))&&(f=i.find(s.variations,{id:d}))?{layer:{name:u.name,id:u.id,policy:u.policy,integrationStringVersion:u.integrationStringVersion},experiment:{name:s.name,id:s.id},variation:{name:f.name,id:f.id},isLayerHoldback:o.decision.isLayerHoldback}:null}function f(n,t,e,r,o,u){var s=[],f=n.getLayerStates();u.onlySingleExperiments&&(f=i.filter(f,(function(n){var e=t.get(n.layerId);return e&&a.isSingleExperimentPolicy(e.policy)})));var l=i.map(f,(function(n){var t=!!n.decision.variationId,e=n.decisionActivationId&&n.decisionActivationId===r.getActivationId(),o=c.getExperimentAndVariation(),u=o?o.variationId:null,a=t&&n.decision.variationId===u;return i.extend(n,{isActive:t&&e||a,visitorRedirected:a})})),d=o?i.filter(l,o):l;return i.each(d,(function(n){var r=function(n,t,e,r){var o,u,a=n.layerId,c=t.get(a)||{},s=i.map(c.experiments,(function(n){return i.pick(n,["id","name"])}));if(!r&&c.decisionMetadata&&c.decisionMetadata.offerConsistency)return;var f={id:a,campaignName:c.name||null,experiment:null,allExperiments:s,variation:null,reason:n.decision.reason,isActive:!!n.isActive,visitorRedirected:n.visitorRedirected,isInCampaignHoldback:n.decision.isLayerHoldback};n.decision&&n.decision.experimentId&&(o=i.find(c.experiments,{id:n.decision.experimentId})),o&&(f.experiment=i.pick(o,["id","name","campaignName"])),o&&n.decision.variationId&&(u=i.find(o.variations,{id:n.decision.variationId})),u&&(f.variation=i.pick(u,["id","name"]));var l=i.map(n.decisionTicket.audienceIds,(function(n){return i.pick(e.get(n),["id","name"])}));return f.audiences=l,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(f.pageId=n.pageId),f}(n,t,e,u.includeOfferConsistency);r&&s.push(r)})),s}t.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(n,t,e,r,a,c,s,f,l){var d={},h={},v={},p={audiences:n.getAudiencesMap(),events:e.getEventsMap(),campaigns:d,pages:a.getPagesMap(),experiments:h,variations:v,projectId:l.getProjectId(),snippetId:l.getSnippetId(),accountId:l.getAccountId(),dcpServiceId:l.getDCPServiceId(),revision:l.getRevision(),clientName:t.getClientName(),clientVersion:t.getClientVersion()},g=u.dereferenceChangeId;return i.each(r.getAll(),(function(n){o.defineProperty(d,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"changes",(function(){return i.map(n.changes,g)}),"campaign"),o.defineProperty(t,"experiments",(function(){return i.map(n.experiments,(function(n){return h[n.id]}))}),"campaign"),t}),"campaignMap","byId"),i.each(n.experiments,(function(n){o.defineProperty(h,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"changes",(function(){return i.map(n.changes,g)}),"experiment"),o.defineProperty(t,"variations",(function(){return i.map(n.variations,(function(n){return v[n.id]}))}),"experiment"),t}),"experimentMap","byId"),i.each(n.variations,(function(n){o.defineProperty(v,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"actions",(function(){return i.map(n.actions,(function(n){return i.extend({},n,{changes:i.map(n.changes,g)})}))}),"variation"),t}),"variationMap","byId")}))}))})),p.groups=c.getGroupsMap(),p}],t.visitor=["stores/visitor",function(n){return i.cloneDeep(n.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(n){return{randomId:n.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(n,t,e,o,u,l,d){return{getCampaignStates:function(r){var o={},u=f(e,t,n,l,r,{includeOfferConsistency:!1});return i.each(u,(function(n){o[n.id]=n})),o},getExperimentStates:function(r){var o=f(e,t,n,l,r,{includeOfferConsistency:!1,onlySingleExperiments:!0}),u=["audiences","variation","reason","visitorRedirected","isActive"];return i.reduce(o,(function(n,t){var e=t.allExperiments[0];return n[e.id]=i.extend({},i.pick(t,u),{id:e.id,experimentName:e.name,isInExperimentHoldback:t.isInCampaignHoldback}),n}),{})},getCampaignStateLists:function(r){var o={},u=f(e,t,n,l,r,{includeOfferConsistency:!0});return i.each(u,(function(n){var t=n.id;o[t]||(o[t]=[]),o[t].push(n)})),o},getPageStates:function(n){var t=u.getAll(),e=i.reduce(t,(function(n,t){var e=o.get(t.id);return n[t.id]=i.extend({},i.pick(e,["id","name","apiName","category","staticConditions","tags"]),i.pick(t,["isActive","metadata"])),n[t.id].isActive=!!n[t.id].isActive,n}),{});return n?i.pickBy(e,n):e},isGlobalHoldback:function(){return l.isGlobalHoldback()},getActivationId:function(){return l.getActivationId()},getVariationMap:function(){var n=e.getLayerStates(),r={};return i.each(n,(function(n){var e=t.get(n.layerId);if(n.decision&&n.decision.experimentId&&(r[n.decision.experimentId]={id:n.decision.variationId,name:null,index:null},e)){var o=i.find(e.experiments,{id:n.decision.experimentId});if(o&&n.decision.variationId)var u=i.find(o.variations,{id:n.decision.variationId}),a=i.findIndex(o.variations,{id:n.decision.variationId});u&&(r[n.decision.experimentId]={id:n.decision.variationId,name:u.name,index:a})}})),r},getActiveExperimentIds:function(){var n={};return i.each(this.getCampaignStateLists({isActive:!0}),(function(t){i.each(t,(function(t){n[t.experiment.id]=!0}))})),i.keys(n)},getRedirectInfo:function(){var n=c.getExperimentAndVariation();return n&&(n.referrer=c.getReferrer()),n},getDecisionString:function(n){if(!n)throw new Error("Must pass a config to getDecisionString");n=i.extend({maxLength:255,shouldCleanString:!1},n);var o=s(e,t,d,n.campaignId);return o?r.generateAnalyticsString(o.layer,o.experiment,o.variation,o.isLayerHoldback,n.maxLength,n.shouldCleanString):null},getDecisionObject:function(n){if(!n)throw new Error("Must pass a config to getDecisionObject");n=i.extend({maxLength:255,shouldCleanString:!1},n);var o=s(e,t,d,n.campaignId);if(!o)return null;var u=r.formatNamesAndIdsForAnalytics(o.layer,o.experiment,o.variation,n.shouldCleanString),c=i.mapValues(u.names,(function(t,e){return r.combineAndTruncateIdAndName(t,u.idStrings[e],n.maxLength)})),f={experiment:c.experiment,variation:c.variation};return a.isSingleExperimentPolicy(o.layer.policy)||i.extend(f,{campaign:c.layer,holdback:o.isLayerHoldback}),f}}}],t.utils=e(9280).create(),t.jquery=["env/jquery",function(n){return n}],t.event_emitter=e(9799)},6072:function(n,t,e){var i=e(2678),r=e(2188),o="optimizelyDataApi";t.registerFunction=function(n,t){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[n]||(e[n]=t)},t.unregisterFunction=function(n){var t=r.getGlobal(o);t&&t[n]&&(t[n]=function(){i.log('Ignoring attempt to call "'+o+"."+n+'" which has been unregistered.')})},t.getFunction=function(n){return r.getGlobal(o)[n]}},7431:function(n,t,e){var i=e(9576),r=e(2678),o=e(963),u=e(4041),a=u.get("stores/plugins"),c=e(2805),s=e(8964),f=e(4797),l=[e(4692),e(7509),e(5830)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];t.push=function(n,t){var e,o,u,a;if(!i.isArray(n)&&i.isObject(n))a=i.isUndefined(n.version)?1:n.version,e=n.type,u=[n];else if(i.isArray(n))a=0,e=n[0],u=n.slice(1);else{if(!i.isString(n))return r.warn("API / Ignoring non-array/object/string argument:",n),!1;a=0,e=n,u=[]}if(l[a]&&(o=l[a][e]),t&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,u),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+a+") with arguments:",u),!1;r.log('API / Executing: "'+e,'" with arguments:',u);try{o.apply(null,u),f.dispatch(c.RECORD_API_USAGE,{methodName:a?"v"+a+"."+e:e})}catch(s){r.error(s)}return!0},t.get=function(n){r.log('API / Getting module: "'+n+'"');var t=o[n];if(t?i.isArray(t)&&(t=u.evaluate(t)):t=a.getPlugin(s.PluginTypes.apiModules,n),t)return f.dispatch(c.RECORD_API_USAGE,{methodName:"get."+n}),t;r.warn('Module "'+n+'" not found.')}},3552:function(n,t,e){var i=e(6855),r=e(2805),o=e(4797),u=e(2678);t.defineProperty=function(n,t,e,a,c){i(n,t,(function(){var n=["prop",a,c||t].join(".");return u.debug('Evaluating getter: "'+n+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:n}),e()}),!0)}},4692:function(n,t,e){var i=e(9576),r=e(7509);function o(n){var t,e={};if(n)if(u(n))t=Number(n);else{if("object"!=typeof n)throw new Error("tracker: Revenue argument "+n+"not a number.");if("revenue"in(e=i.extend({},n))){if(!u(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");t=Number(e.revenue),delete e.revenue}}return i.isUndefined(t)||(e.revenue=t),e}function u(n){return i.isNumber(n)||i.isString(n)&&Number(n)==n}t.activateGeoDelayedExperiments=function(n,t){t||(t=n.lists?"odds":"cdn3"),r.dataFromSource({data:n,source:t})},t.activateSiteCatalyst=function(n){n&&n.sVariable&&r.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:n.sVariable}})},t.bucketVisitor=function(n,t){if(n&&t){var e={experimentId:String(n)};t>256?e.variationId=String(t):e.variationIndex=String(t),r.bucketVisitor(e)}},t.bucketUser=t.bucketVisitor,t.disable=function(n){r.disable({scope:n})},t.log=function(n){i.isUndefined(n)&&(n=!0),r.log({level:n?"INFO":"OFF"})},t.optOut=function(n){i.isUndefined(n)&&(n=!0),r.optOut({isOptOut:n})},t.setCookieDomain=function(n){r.cookieDomain({cookieDomain:n})},t.setCookieExpiration=function(n){r.cookieExpiration({cookieExpirationDays:n})},t.setDimensionValue=function(n,t){var e={};e[n]=t,r.user({attributes:e})},t.setUserId=function(n){r.user({userId:n})},t.storeThirdPartyData=function(n,t){r.dataFromSource({source:n,data:t})},t.trackEvent=function(n,t){r.event({eventName:n,tags:o(t)})}},4955:function(n,t,e){var i=e(9576),r=e(4041),o=e(3694),u=e(3552),a=r.get("stores/change_data");t.translateDecisionToCampaignDecision=function(n){return c(i.cloneDeep(n),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(n){var e={};return u.defineProperty(e,"campaign",(function(){return function(n){var e=i.cloneDeep(n);return e.changes&&(e.changes=i.map(e.changes,t.dereferenceChangeId)),e.experiments&&i.each(e.experiments,(function(n){n.changes&&(n.changes=i.map(n.changes,t.dereferenceChangeId)),n.variations&&i.each(n.variations,(function(n){n.actions&&i.each(n.actions,(function(n){n.changes&&(n.changes=i.map(n.changes,t.dereferenceChangeId))}))}))})),e}(n.data.layer)}),"campaignEvent"),e.decisionTicket=n.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(n.data.decision),e.audiences=n.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},t.translateViewActivatedToPageActivated=function(n){return{type:"lifecycle",name:"pageActivated",data:{page:n.data.view}}},t.dereferenceChangeId=function(n){var t=a.getChange(n);return t?o.safeReference(t):n};var c=function(n,t){var e=i.omit(n,i.keys(t));return i.each(t,(function(t,i){e[t]=n[i]})),e}},9280:function(n,t,e){var i=e(8398).Promise,r=e(3791).t,o=e(8207).poll,u=e(5354).b,a=e(5346).A;t.create=function(){return{observeSelector:r,poll:o,Promise:i,waitForElement:u,waitUntil:a}}},6726:function(n){n.exports={DEFAULT_INTERVAL:20}},3791:function(n,t,e){var i=e(9576),r=(e(2805),e(4041)),o=r.get("stores/directive"),u=e(6954),a=(e(7174),e(8964),e(4797),e(1243).generate),c=e(8207),s=e(2188),f=(r.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),l={},d=function(n){d=function(){if(!o.shouldObserveChangesIndefinitely())return function(n){var t=c.poll(i.partial(v,n));l[n].cancelObservation=function(){t(),delete l[n]}};var n,t=function(){this.disconnect(),i.each(i.keys(l),v),this.observe(r,e)},e={attributes:!0,childList:!0,subtree:!0,characterData:!0},r=u.getDocumentElement();return n=new MutationObserver(t),function(t){var o=l[t];n.observe(r,e),o.cancelObservation=function(){delete l[t],i.isEmpty(l)&&n.disconnect()}}}(),d(n)};function h(n){var t=l[n];t&&t.cancelObservation&&t.cancelObservation()}function v(n){if(l[n]){if(function(n){var t=n.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-n.startTime>t)return!0;return!1}(l[n]))return 0===l[n].matchedCount&&i.isFunction(l[n].options.onTimeout)&&l[n].options.onTimeout(),void h(n);var t=u.querySelectorAll(l[n].selector);t.length&&(i.each(t,(function(t){t.T&&t.T[n]||l[n].callbackQueue.push(t)})),function(n){for(;l[n]&&l[n].callbackQueue.length;){var t=l[n].callbackQueue.shift();if(p(t,n),l[n].matchedCount=l[n].matchedCount+1,l[n].callback(t),l[n]&&l[n].options.once)return void h(n)}}(n))}}function p(n,t){n.T||(n.T={}),n.T[t]=!0}t.t=function(n,t,e){if(!function(n){try{u.querySelector(n)}catch(t){return!1}return!0}(n))throw new Error("observeSelector expects a valid css selector as its first argument");if(!i.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(e&&(!i.isObject(e)||i.isFunction(e)))throw new Error("observeSelector expects an object as its third argument");var r=a();return e=i.assign({},f,e||{}),l[r]={callback:t,callbackQueue:[],matchedCount:0,options:e,selector:n,startTime:Date.now()},d(r),s.setTimeout(i.bind(v,null,r),0),i.partial(h,r)}},8207:function(n,t,e){var i=e(9576),r=(e(2805),e(4041)),o=(e(8964),e(4797),e(1243).generate),u=e(2188),a=e(6726).DEFAULT_INTERVAL,c=(r.get("stores/rum"),{});function s(n){c[n]&&i.each(c[n].callbacks,(function(n){n.call(null)}))}function f(n,t){c[t]&&c[t].callbacks[n]&&(delete c[t].callbacks[n],i.some(c[t].callbacks)||(clearInterval(c[t].id),delete c[t]))}t.poll=function(n,t){i.isNumber(t)||(t=a),c[t]||(c[t]={callbacks:{},id:u.setInterval(i.partial(s,t),t)});var e=o();return c[t].callbacks[e]=n,i.partial(f,e,t)},t.cancelAll=function(){i.each(c,(function(n,t){clearInterval(n.id),delete c[t]}))}},5354:function(n,t,e){var i=e(8398).Promise,r=e(3791).t;t.b=function(n){return new i((function(t,e){r(n,t,{once:!0})}))}},5346:function(n,t,e){var i=e(8398).Promise,r=e(8207).poll;t.A=function(n){return new i((function(t,e){if(n())t();else var i=r((function(){n()&&(i(),t())}))}))}},7509:function(n,t,e){var i=e(9576),r=e(2805),o=e(7431),u=e(963),a=e(8955),c=e(8964),s=e(9126),f=e(2438),l=e(3113),d=e(6639).U,h=e(3792),v=e(4819),p=(e(6708),e(2474)),g=e(4658),m=e(4797),y=e(2676),b=e(4604),_=e(2678),w=e(2376),E=(e(6928),e(9840)),I=e(1685),T=e(4041),S=T.get("stores/dimension_data"),A=T.get("stores/view"),k=T.get("stores/view_data"),x=T.get("stores/visitor_id"),R=T.get("stores/layer_data"),N=T.get("stores/directive"),D=!1,C=t.ApiListenerError=d("ApiListenerError");t.event=function(n){var t;switch(n.eventType){case"click":t=function(n){var t;return n.eventData&&(t=p.create(n.eventData.id,n.eventData.apiName,"click",n.eventData)),function(){var n=s.trackClickEvent(t);n?_.log("API / Tracking click event:",n):_.log("API / Not tracking click event:",n)}}(n);break;case"decision":t=function(n){var t=n.eventData,e=b.createLayerState(t.layerId,t.experimentId,t.variationId,t.isLayerHoldback),i=b.createSingle(t.layerId,t.experimentId,t.variationId);return function(){b.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),_.log("API / Tracking decision event:",e),s.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(n);break;case"pageview":t=function(n){var t=E.create(n.eventData.id,n.eventData.apiName),e=E.createState(t.id);return function(){var n=s.trackViewActivation(t,e);n?_.log("API / Tracking pageview event:",n):_.log("API / Not tracking pageview event:",n)}}(n);break;default:t=function(n){var t;return n.eventId&&(t=p.create(n.eventId,n.eventName,"custom")),E.updateAllViewTags(),function(){s.trackCustomEvent(n.eventName,n.tags,t)?_.log("API / Tracking custom event:",n.eventName,n.tags):_.log("API / Not tracking custom event:",n.eventName)}}(n)}x.getBucketingId()?t():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:t})},t.clientMetadata=function(n){D},t.priorRedirectString=function(n){},t.microsnippetError=function(n){},t.rum=function(n){m.dispatch(r.SET_RUM_DATA,n.eventData)},t.initialViewStates=function(n){var t=i.map(n.states,(function(n,t){return{id:t,isActive:n}}));E.registerViews(t)},t.page=function(n){var t=k.getByApiName(n.pageName);if(!t)throw new Error('Unknown page "'+n.pageName+'"');var e=!n.hasOwnProperty("isActive")||n.isActive,i=function(){e?E.activateViaAPI(t,n.tags):(E.deactivate(t),_.log("API / Deactivated Page",E.description(t)))};x.getBucketingId()?i():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(n){E.setGlobalTags(n.tags)},t.user=function(n){_.log("API / Setting visitor custom attributes:",n.attributes),i.each(n.attributes,(function(n,t){var e,i,r=t,o=S.getById(t)||S.getByApiName(t);o&&(r=o.id,e=o.apiName,i=o.segmentId||o.id);var u={id:i,value:n};e&&(u.name=e),O(r,u,!0)}))};var O=function(n,t,e){var i=[{key:e?["custom",n]:[n],value:t,metadata:{lastModified:h.now()}}],o=function(){m.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};x.getBucketingId()?o():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};t.optOut=function(n){var t=!n.hasOwnProperty("isOptOut")||n.isOptOut;v.setOptOut(t)},t.cookieExpiration=function(n){var t=n.cookieExpirationDays;t<90&&(_.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",90,", setting to minimum."),t=90),_.log("API / Setting cookie age to",t,"days."),m.dispatch(r.SET_COOKIE_AGE,86400*t)},t.extendCookieLifetime=function(n){n=i.extend({isEnabled:!0},n),_.log("API / Setting cookie automatic lifetime extension to",n.isEnabled),m.dispatch(r.SET_COOKIE_AUTO_REFRESH,n.isEnabled)},t.cookieDomain=function(n){_.log("API / Setting cookie domain to",n.cookieDomain),m.dispatch(r.SET_COOKIE_DOMAIN,n.cookieDomain)},t.disable=function(n){if(n.scope){if("tracking"!==n.scope)throw new Error('Unknown "scope" for disable: '+n.scope);_.log("API / Disabling tracking"),m.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else _.log("API / Disabling everything"),m.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(n){var t=n.level,e=n.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(e)&&(e=""),_.setLogMatcher(e),_.setLogLevel(t)},t.registerModule=function(n){var t="custom/"+n.moduleName;if(u[t]||o.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');w.registerApiModule(t,n.module)},t.dataFromSource=function(n){var t=n.source;l.makeAsyncRequest(t),l.resolveRequest(t,n.data)},t.addListener=function(n){if(!i.isFunction(n.handler))throw new Error("A handler function must be supplied");(n=i.omit(n,"type")).publicOnly=!0,n.emitErrors=!0;var t=n.handler;n.handler=function(n){try{return t(n)}catch(e){throw new C(e)}},g.on(n)},t.removeListener=function(n){if(!n.token)throw new Error("Must supply a token to removeListener");g.off(n.token)},t.load=function(n){n.data=i.extend({},n.data),a.normalizeClientData(n.data),m.dispatch(r.DATA_LOADED,{data:n.data})},t.integrationSettings=function(n){if(!n.id)throw new Error("id is required");if(!n.settings)throw new Error("settings is required");m.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},n.settings,{id:n.id}))},t.bucketVisitor=function(n){if(!n.variationId&&i.isUndefined(n.variationIndex)||n.variationId&&n.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!n.experimentId)throw new Error("An experimentId is required.");var t,e,r=n.campaignId;if(r){if(!(t=R.get(r)))throw new Error("Could not find layer "+r)}else if(!(r=(t=R.getLayerByExperimentId(n.experimentId)).id))throw new Error("Could not find layer for experiment "+n.experimentId);if(!(e=i.find(t.experiments,{id:n.experimentId})))throw new Error("Could not find experiment "+n.experimentId+" in layer "+r);var o=n.variationId;if(i.isUndefined(n.variationIndex)){if(!i.find(e.variations,{id:o}))throw new Error("Cound not find variation "+o+" in experiment "+n.experimentId)}else if(!(o=e.variations[n.variationIndex].id))throw new Error("Could not find variation at index "+n.variationIndex+" in experiment "+n.experimentId);I.updateVariationIdMap(r,n.experimentId,o),x.getBucketingId()&&I.persistVariationIdMap()},t.waitForOriginSync=function(n){if(!i.isArray(n.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+y.stringify(n.canonicalOrigins));i.each(n.canonicalOrigins,(function(n){if(!i.isString(n))throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===n?"undefined":(t=n)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t));var t})),m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:n.canonicalOrigins})},t.disableCrossOrigin=function(){_.log("API / cross origin tracking is DISABLED"),m.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){N.shouldActivate()?(i.forEach(A.getActiveViewStates(),(function(n){E.deactivate(k.get(n.id))})),m.dispatch(r.RESET_VIEW_STATES),f.emitActivateEvent()):_.debug("Not activating.")},t.sendEvents=function(){f.emitSendEvents()},t.holdEvents=function(){f.emitHoldEvents()}},5830:function(){},8821:function(n,t,e){var i=e(9576),r=e(6639).U,o=t.ActivationCodeError=r("ActivationCodeError"),u=t.ProjectJSError=r("ProjectJSError"),a=e(9289),c=e(2805),s=e(9126),f=e(2438),l=e(6621),d=e(7989),h=e(8955),v=e(3792),p=e(3378),g=e(4041),m=e(4819),y=e(6954),b=e(8964),_=e(4658),w=e(7356),E=e(9404),I=e(4797),T=e(1722),S=e(4604),A=e(4243).mM,k=e(2678),x=e(1645),R=e(9e3),N=e(2376),D=e(7984),C=e(8398).Promise,O=e(1705),P=e(6928),M=(e(9418),e(7246)),L=e(9840),F=e(1685),j=e(2188),U=(g=e(4041)).get("stores/session"),V=g.get("stores/audience_data"),z=g.get("stores/action_data"),q=g.get("stores/cleanup"),B=g.get("stores/directive"),G=g.get("stores/global"),H=g.get("stores/group_data"),$=g.get("stores/layer_data"),W=g.get("stores/layer"),Y=g.get("stores/pending_events"),K=g.get("stores/plugins"),X=g.get("stores/rum"),J=g.get("stores/visitor"),Q=g.get("stores/view_data"),Z=g.get("stores/view"),nn=g.get("stores/visitor_id"),tn=g.get("stores/visitor_bucketing"),en=g.get("stores/xdomain"),rn=e(7431),on=e(6708),un=e(8562),an=t;function cn(n){on.handleError(n.data.error,n.data.metadata)}function sn(n,t){I.dispatch(c.SET_RUM_DATA,{data:{extras:{xdAttempt:n,xdError:t?t.toString():void 0}}})}function fn(n,t,e){n=n||[];var r=K.getAllPlugins(b.PluginTypes.visitorProfileProviders),o=G.getGlobalHoldbackThreshold(),u=J.getVisitorProfile();F.populateLazyVisitorData(r,u);var a=nn.getBucketingId();if(!a)throw new Error("bucketingId not set");var c,s=J.getVisitorProfile();t&&(c=tn.getVariationIdMap()[t.id]);var f={bucketingId:a,visitorProfile:s,audiences:n,globalHoldback:o,preferredVariationMap:c,layer:t};return t&&e&&p.isPageIdRelevant(t)?i.map(e,(function(n){return p.createTicket(i.extend({},f,{pageId:n}))})):[p.createTicket(f)]}function ln(n,e,r,o){try{var u=function(n){return{bucketingId:nn.getBucketingId(),preferredLayerId:tn.getPreferredLayerMap()[n.id]}}(o),a=p.decideGroup(o,u);if(a.reason)return k.debug("Not activating Group",T.description(o),"; reason:",a.reason),X.getSampleRum()&&I.dispatch(c.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),C.resolve();var s=$.get(a.layerId);if(!s)return k.debug("Visitor was bucketed into a Campaign ("+a.layerId+") which is not in this snippet"),C.resolve();var f=i.filter(s.pageIds,i.partial(i.includes,r));return i.isEmpty(f)?(k.debug("Not activating Group",T.description(o),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),C.resolve()):(X.getSampleRum()&&I.dispatch(c.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),t.decideAndExecuteLayerASAP(n,e,f,s))}catch(l){return k.error("Error getting decision for Group",T.description(o),"; ",l),C.reject(l)}}function dn(n,t){var e={};return i.each(n,(function(n){i.isArray(n)?i.extend(e,dn(n,t)):i.isObject(n)&&t[n.type]&&(e[n.type]=!0)})),e}function hn(n){var t=[];return i.each(n,(function(n){t.push(n.name,n)})),t}function vn(n){var t=q.getCleanupFns(n);if(t.length>0){for(;t.length>0;)t.shift()();I.dispatch(c.CLEAR_CLEANUP_FN,{lifecycle:n})}}t.initialize=function(n){return this.initGlobalStore(n.clientData),this.initializePlugins(n.plugins)},t.initGlobalStore=function(n){h.normalizeClientData(n),_.on({filter:{type:"error"},handler:cn}),I.dispatch(c.DATA_LOADED,{data:n}),k.log("Initialized with DATA:",n)},t.initializePlugins=function(n){if(i.isArray(window.optimizely)&&(window.optimizely=i.filter(window.optimizely,(function(n){var t=!0;return!rn.push(n,t)}))),m.setOptOut(B.shouldOptOut()),!B.isDisabled()&&!B.shouldOptOut()){un.queueBeacons(),y.isReady()?I.dispatch(c.SET_DOMCONTENTLOADED):y.addReadyHandler((function(){I.dispatch(c.SET_DOMCONTENTLOADED)})),R.time("projectJS");var e=G.getProjectJS();if(i.isFunction(e))try{E.apply(e)}catch(a){k.error("Error while executing projectJS: ",a),d.emitError(new u(a))}R.timeEnd("projectJS"),i.each(n||[],(function(n){try{n(N)}catch(a){d.emitInternalError(a)}})),i.each(G.getPlugins()||[],(function(n){try{E.apply(n,[N])}catch(a){d.emitError(a)}})),P.load();var r=_.on({filter:{type:"lifecycle",name:"activated"},handler:function(){J.observe(F.persistVisitorProfile),W.observe(F.persistLayerStates),U.observe(F.persistSessionState),Y.observe(x.persistPendingEvents),tn.observe(F.persistVisitorBucketingStore),_.off(r)}});_.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),_.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var o=x.getPendingEvents();if(o&&(I.dispatch(c.LOAD_PENDING_EVENTS,{events:o}),x.retryPendingEvents(o)),_.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),f.emitInitializedEvent(),!B.shouldActivate())return C.resolve();return function(){!1;var n=null;i.isNumber(n)&&0===$.getCount()?(k.log("Activating after delay of",n,"ms because no Experiments are running"),I.dispatch(c.SET_RUM_DATA,{data:{activateDfd:!0}}),j.setTimeout(f.emitActivateEvent,n)):f.emitActivateEvent()}(),C.all([])}k.log("Controller / Is disabled")},t.activate=function(){try{var n=[];k.log("Activated client"),vn(b.Lifecycle.preActivate);var t=v.now();I.dispatch(c.ACTIVATE,{activationId:String(t),activationTimestamp:t});var e=Q.getAll();L.registerViews(e),F.setId(F.getOrGenerateId()),n.push(s.trackPostRedirectDecisionEvent()),I.dispatch(c.MERGE_VARIATION_ID_MAP,{variationIdMap:F.getVariationIdMap()}),I.dispatch(c.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:F.getPreferredLayerMap()}),vn(b.Lifecycle.postVisitorProfileLoad),n.push((h=K.getAllPlugins(b.PluginTypes.visitorProfileProviders),g=J.getVisitorProfile(),F.populateEagerVisitorData(h,g)).then((function(){k.log("Populated visitor profile")})));var r=fn(),o=p.decideGlobal(r);k.log("Made global decision",r,"->",o),I.dispatch(c.RECORD_GLOBAL_DECISION,o);var u=s.trackClientActivation();u?k.log("Tracked activation event",u):k.log("Not tracking activation event");var a=an.setUpViewActivation(e),l=[];return i.each(a,(function(n){l=l.concat(L.activateMultiple([n]))})),vn(b.Lifecycle.postViewsActivated),vn(b.Lifecycle.postActivate),f.emitActivatedEvent(),C.all(n).then((function(){_.emit({type:w.TYPES.LIFECYCLE,name:"activateDeferredDone"}),k.log("All immediate effects of activation resolved")}),d.emitError)}catch(m){return d.emitError(m),C.reject(m)}var h,g},an.setUpViewActivation=function(n){var t=[];return i.each(n,(function(n){i.isBoolean(Z.getViewState(n.id).isActive)&&L.isActivationTypeImmediate(n.activationType)?k.debug("Skipping page: already evaluated, presumably at the edge",L.description(n)):L.shouldTriggerImmediately(n.activationType)?t.push(n):n.activationType===b.ViewActivationTypes.callback?(k.debug("Setting up conditional activation for Page",L.description(n)),an.activateViewOnCallback(n)):n.activationType===b.ViewActivationTypes.polling?(k.debug("Setting up polling activation for Page",L.description(n)),D.pollFor(i.partial(E.apply,n.activationCode),null,i.partial(M.isTimedOut,v.now())).then((function(){L.activateMultiple([n])}))["catch"]((function(t){k.warn("Failed to activate view ",n,t)}))):n.activationType!==b.ViewActivationTypes.manual&&d.emitError(new Error("Unknown view activationType: "+n.activationType))})),t},an.activateViewOnCallback=function(n){var t={pageId:n.id};Object.defineProperty(t,"isActive",{get:function(){return Z.isViewActive(n.id)}});try{E.apply(n.activationCode,[function(t){var e=i.extend({},t,{pageName:n.apiName,type:"page"});rn.push(e)},t])}catch(r){var e=new o("("+r.toString()+") in activationCode for "+L.description(n));d.emitError(e,{originalError:r,userError:!0})}},t.onViewsActivated=function(n){var e,r=n.data.views,o=i.map(r,"id");try{if(!nn.getBucketingId())throw new Error("View activated with no visitorId set");var u=function(n){var e=$.getAllByPageIds(n),r=B.getForceVariationIds(),o=B.getForceAudienceIds(),u=!i.isEmpty(r);u&&k.log("Force variations are in use. Disabling mutual exclusivity.");var a=u?{individual:e}:i.reduce(e,(function(n,t){return t.groupId?n.groups[t.groupId]||(n.groups[t.groupId]=H.get(t.groupId)):n.individual.push(t),n}),{groups:{},individual:[]});k.log("Deciding Campaigns/Experiments for Page(s)",n);var c=i.map(a.groups,T.description).join(", ");k.log("Groups:",c);var s=i.map(a.individual,S.description).join(", ");k.log("Campaigns/Experiments not in Groups (by Campaign id):",s);var f=i.map(a.groups,i.partial(ln,r,o,n))||[],l=i.map(a.individual,(function(e){var u=i.filter(e.pageIds,i.partial(i.includes,n));return t.decideAndExecuteLayerASAP(r,o,u,e)})),d=f.concat(l);return C.all(d).then((function(t){var e=i.filter(t,(function(n){return!!n}));return k.log("All Campaigns/Experiments for Page(s) (by Campaign id)",n,"resolved:",i.map(e,S.description).join(", ")),e}))}(o)["catch"](d.emitError);return e=C.all(i.map(r,(function(n){var t=function(){L.parseViewTags(n);var t=s.trackViewActivation(n);t?k.log("Tracked activation for Page",L.description(n),t):k.log("Not Tracking activation for Page",L.description(n))};return y.isReady()?C.resolve(t()):D.pollFor(y.isReady,1e3).then(t)}))),C.all([u,e])}catch(a){d.emitError(a)}},t.onPageDeactivated=function(n){var t=n.data.page,e=z.getAllActionIdsByPageId(t.id);i.each(e,(function(n){var e=z.getActionState(n);e&&(i.each(e,(function(n,e){if(n.cancel)try{n.cancel(),k.debug("Controller / Canceled change",e,"observation due to deactivation of page:",t)}catch(i){k.error("Controller / Error canceling change",e,"observation upon deactivation of page.",i)}if(t.undoOnDeactivation&&n.undo)try{n.undo(),k.debug("Controller / Undid change",e,"due to deactivation of page:",t)}catch(r){k.error("Controller / Error undoing change upon deactivation of page.",r)}})),I.dispatch(c.REMOVE_ACTION_STATE,{actionId:n}),k.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,n))}))},t.initializeApi=function(){var n={push:rn.push};n.get=rn.get;var t=window.optimizely;i.isArray(t)&&i.each(t,(function(t){n.push(t)})),n.data={note:"Obsolete, use optimizely.get('data') instead"},n.state={},window.optimizely=n},t.persistItemsWithId=function(n){return i.each(n,(function(n,t){F.checkKeyForVisitorId(t)&&A.setItem(t,n)})),n},t.initializeXDomainStorage=function(){var n=e(7581),r=!!F.getCurrentId(),o=!!r&&F.hasSomeData();r?o?k.log("xd / Existing visitor; has data on this origin"):k.log("xd / Existing visitor; new to this origin"):k.log("xd / New visitor");var u=G.getAccountId(),a="https://__SUBDOMAIN__cdn.optimizely.com".replace("__SUBDOMAIN__","a"+u+"."),s="/client_storage/a"+u+".html";n.subscribe((function(n,t){F.checkKeyForVisitorId(n)&&A.setItem(n,t)}));var l=n.fetchAll().then((function(t){if(!nn.getVisitorIdLocator()){var e=en.getCanonicalOrigins();if(e){var i=n.getXDomainUserId(t,e);i&&(k.log("Syncing cross-origin visitor randomId:",i),F.maybePersistVisitorId({randomId:i}))}}return F.deleteOldForeignData(),t})).then(t.persistItemsWithId).then((function(n){if(F.loadForeignData(),r&&!o){var t=!i.isEmpty(n);k.debug("xd / Loaded foreign data? ",t),sn(t)}k.log("Loaded visitor data from foreign origins"),f.emitOriginsSyncedEvent()}),(function(n){throw r&&!o&&(k.debug("xd / Failed to load foreign data:",n),sn(!1,n)),n}));return C.all([n.load(a,s)["catch"]((function(n){throw k.debug("xd / Failed to load iframe:",n),r&&!o&&sn(!1,n),n})),l["catch"]((function(n){k.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",n.message),k.debug("xd / Enqueuing sync to happen after visitorId set."),I.dispatch(c.ADD_CLEANUP_FN,{lifecycle:b.Lifecycle.postVisitorProfileLoad,cleanupFn:f.emitOriginsSyncedEvent})}))])},t.decideAndExecuteLayerASAP=function(n,e,r,o){return new C((function(u,d){try{!function(n,t,e,r,o){if(t.length||e.length)return void o(fn([],void 0,r));var u=S.relatedAudienceIds(n),a=i.reduce(u,(function(n,t){var e=V.get(t);return!e||n.push(e),n}),[]),s=K.getAllPlugins(b.PluginTypes.audienceMatchers);if(X.getSampleRum()){var f={};if(i.each(a,(function(n){i.extend(f,dn(n.conditions,s))})),!i.isEmpty(f)){var d=i.keys(f);I.dispatch(c.RECORD_AUDIENCE_USAGE,{audienceTypes:d,layerId:n.id})}}!function(n,t,e,r){var o=i.reduce(n,(function(n,e){return i.extend(n,l.requiredAudienceFieldsForConditions(e.conditions,t))}),{}),u=i.reduce(o,(function(n,t){if(i.isUndefined(F.getAttribute(t))){var e=F.getPendingAttributeValue(t);i.isUndefined(e)||n.push(e)}return n}),[]);if(0===u.length)return r();var a=[].concat(n),c=O.firstToResolve(i.map(u,(function(n){return C.resolve(n).then((function(){var n=J.getVisitorProfile();if(a=i.filter(a,(function(e){return i.isUndefined(l.isInAudience(n,e,t))})),!i.isEmpty(a))throw new Error("At least one audience is still pending")}))})));C.race([c,new C((function(n,t){j.setTimeout(t,e)}))]).then((function(){k.log("Activating Campaign after pending Audiences resolved",n),r()}),(function(){k.log("Activating Campaign after timeout on Audiences",n),r()}))}(a,s,S.getActivationTimeout(n),(function(){var t=fn(a,n,r);i.map(t,(function(t){!function(n,t,e){var r=i.map(n.audienceIds,i.bind(V.get,V)),o=i.filter(t,(function(t){return!i.includes(n.audienceIds,t.id)}));k.log("When deciding Campaign",S.description(e),"visitor is in audiences:",hn(r),"and not in audiences:",hn(o))}(t,a,n)})),o(t)}))}(o,n,e,r,(function(l){i.each(l,(function(u){var l=u.pageId?[u.pageId]:r;k.debug("Deciding layer: ",o,"with decisionTicket: ",u,"and actionViewIds: ",l),function(n,e,r,o,u){var l=S.description(n);k.log("Activating Campaign",l,"on Page(s)",o),r.length&&(k.log("Applying force audienceIds:",r,"to Campaign",l),(u=i.cloneDeep(u)).audienceIds=r);var d=t.decideLayer(n,u,e),h=!(!e.length&&!r.length),v=t.getActionsForDecision(n,d,h),g=function(n,t){return i.filter(n,(function(n){return i.isUndefined(n.pageId)||i.includes(t,n.pageId)}))}(v.actions,o);if(v.maybeExecute&&function(n,t,e,r){var o=S.description(t);k.log("Preparing actions",n,"for Campaign",o,"on Page(s)",r),i.forEach(n,a.prepareAction)}(g,n,0,o),i.forEach(o,(function(){s.trackDecisionEvent(d,u)})),f.emitLayerDecided({layer:n,decisionTicket:u,decision:d}),d.error)throw d.error;if(X.getSampleRum()){I.dispatch(c.RECORD_LAYER_POLICY_USAGE,{policy:n.policy,layerId:n.id});var m=function(n){var t={};return i.each(n,(function(n){i.each(n.changeSet,(function(n){t[n.type]||(t[n.type]=!0)}))})),t}(v.actions);I.dispatch(c.RECORD_CHANGE_TYPE_USAGE,{changeTypes:i.keys(m),layerId:n.id}),i.isEmpty(n.integrationSettings)||I.dispatch(c.RECORD_INTEGRATION_USAGE,{integrations:S.getIntegrationTypes(n),layerId:n.id})}if(!p.isInCohort(d))return void k.log("Not activating Campaign: "+S.description(n)+"; not in the cohort because:",d.reason);v.maybeExecute&&function(n,t,e,r){var o=S.description(t);k.log("Executing actions",n,"for Campaign",o,"on Page(s)",r),C.all(i.map(n,(function(n){return a.executePreparedAction(n).then(i.partial(f.emitActionAppliedEvent,n))}))).then((function(){k.log("All page actions for",e,"applied:",n),f.emitActionsForDecisionAppliedEvent(e,n)}))["catch"]((function(n){k.warn("Error evaluating page actions for decision",e,"because:",n)}))}(g,n,d,o)}(o,n,e,l,u)})),u(o)}))}catch(h){k.error("Error getting decision for Campaign: "+S.description(o),h),d(h)}}))},t.decideLayer=function(n,t,e){var i;var r=S.description(n);i=e.length?p.getDummyLayerDecision(n,e):p.decideLayer(n,t),k.log("Recording decision for Campaign",r,t,"->",i),S.recordLayerDecision(n.id,t,i),i.variationId&&i.experimentId&&F.updateVariationIdMap(n.id,i.experimentId,i.variationId),n.groupId&&F.updatePreferredLayerMap(n.groupId,n.id);return i},t.getActionsForDecision=function(n,t,e){var i=S.description(n),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(z.getLayerActions(t.layerId)||[],z.getExperimentActions(t.experimentId)||[],z.getExperimentVariationActions(t.experimentId,t.variationId)||[]),!e&&G.isGlobalHoldback())return k.log(r,i,"(visitor is in global holdback)"),o;if(t.isLayerHoldback)return k.log(r,i,"(visitor is in layer holdback)"),o;if(!t.experimentId||!t.variationId)return k.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,k.log("Got Actions for Campaign:",i,o.actions),o}},2174:function(n,t,e){var i=e(44).Promise,r=e(3792),o=e(4041).get("stores/plugins"),u=e(8964),a=e(2678);t.create=function(n,t,e){var c={identifier:n.id,action:t,startTime:e||r.now()};try{var s=o.getPlugin(u.PluginTypes.changeAppliers,n.type);if(!s)throw new Error("Unrecognized change type "+n.type);return new s(n,c)}catch(f){return a.error("Change applier was never properly constructed:",f),{apply:function(){return i.reject(f)}}}}},8235:function(n){n.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},4611:function(n,t,e){var i=e(9576),r=e(8235).CHANGE_DATA_KEY;function o(n,t){return[n,t].join("_")}t.getData=function(n,t,e){var i=o(t,e);return n[r]&&n[r][i]?n[r][i]:null},t.hasData=function(n){return Boolean(n&&n[r]&&!i.isEmpty(n[r]))},t.removeData=function(n,t,e){n[r]&&delete n[r][o(t,e)]},t.setData=function(n,t,e,i){if("object"!=typeof i)throw new Error("setData expects an object");n[r]||(n[r]={}),n[r][o(t,e)]=i}},5557:function(n,t,e){var i=e(2624);n.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},9289:function(n,t,e){var i=e(9576),r=e(2805),o=e(7989),u=e(3113),a=e(6639).U,c=e(3792),s=e(4041),f=e(4797),l=e(2678),d=e(8398).Promise,h=e(5554),v=s.get("stores/global"),p=s.get("stores/action_data"),g=s.get("stores/change_data"),m=s.get("stores/session"),y=e(2174);e(7246).initialize();var b=a("ActionError");function _(n,t,e){if(p.getActionState(t.id)){var o=p.getChangeApplier(n.id,t.id);if(i.isUndefined(o)){var u={changeId:n.id,actionId:t.id,changeApplier:y.create(n,t,e)};f.dispatch(r.SET_CHANGE_APPLIER,u)}else l.warn("Action / Attempted to prepare a change which is already being applied: ",n)}else l.warn("Action / Attempted to prepare change for inactive action: ",t)}function w(n,t,e,r){if(!i.includes(r,t)){if(!n[String(t)]){var a=g.getChange(t);if(!a){var s="Change with id "+t+" is absent";return r.length&&(s+=" but listed as a dependency for "+r[r.length-1]),void l.warn(s)}n[String(t)]=new d((function(s){var f=i.map(a.dependencies||[],(function(i){return w(n,i,e,r.concat([t]))}));if(a.src){var v="change_"+a.src,m=u.makeAsyncRequest(v,(function(){return h.addScriptAsync("https://cdn.optimizely.com/public/973095788/data"+a.src,(function(){u.resolveRequest(v)}))})).then((function(){var n=g.getChange(a.id);n||o.emitError(new b("Failed to load async change from src: "+a.src)),_(n,e,c.now())}));f.push(m)}d.all(f).then((function(){var n=c.now(),i=p.getChangeApplier(t,e.id);return i?(l.debug("Action / Applying change:",a),i.apply().then((function(t){t?l.log(t):l.debug("Action / Applied change for the first time in "+(c.now()-n)+"ms:",a),s()}))):(l.debug("Action / Not applying change ",t," - No changeApplier found."),void s())}))["catch"]((function(n){l.error("Action / Failed to apply change:",a,n),s()}))}))}return n[String(t)]}l.error("Change with id "+t+" has circular dependencies: "+r.concat(t))}t.prepareAction=function(n){l.debug("Action / Preparing:",n),f.dispatch(r.ACTION_EXECUTED,{actionId:n.id,sessionId:m.getSessionId(),layerId:n.layerId,pageId:n.pageId,timestamp:c.now(),activationId:v.getActivationId()});var t=c.now();i.forEach(n.changeSet,(function(e){var o=i.isObject(e)?e.id:e,u=g.getChange(o);u||(f.dispatch(r.ADD_CHANGE,e),u=g.getChange(e.id)),u.src||_(u,n,t)}))},t.executePreparedAction=function(n){l.debug("Action / Executing:",n);var t={},e=i.map(n.changeSet,(function(e){var r=i.isObject(e)?e.id:e;return w(t,r,n,[])}));return d.all(e).then((function(){l.debug("changes for action id="+n.id+" applied")}))}},7246:function(n,t,e){var i=e(8235),r=e(4041).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(t.domReadyTime=Date.now())}t.domReadyTime=null,t.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},t.isTimedOut=function(n){var e=Date.now();if(!t.domReadyTime||!n)return!1;var o=Math.max(n,t.domReadyTime);return r.isEditor()&&(o=t.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},9126:function(n,t,e){var i=e(9576),r=e(2805),o=e(7989),u=e(5434),a=e(3792),c=e(5172),s=e(4041),f=e(6954),l=e(8964),d=e(1852),h=(e(4658),e(7356),e(1372)),v=e(4797),p=e(4604),g=e(2678),m=(e(9e3),e(8398).Promise),y=e(74),b=e(6928),_=(e(9418),e(9612)),w=e(1243),E=s.get("stores/client_metadata"),I=s.get("stores/global"),T=s.get("stores/session"),S=s.get("stores/view"),A=s.get("stores/plugins"),k=s.get("stores/layer"),x=s.get("stores/layer_data"),R=s.get("stores/observed_redirect"),N=s.get("stores/pending_redirect"),D=s.get("stores/visitor"),C=s.get("stores/directive"),O=s.get("stores/event_data"),P=s.get("stores/visitor_id");function M(n,t){return i.extend({},n,{isLayerHoldback:t,isGlobalHoldback:!1,clientName:i.isNull(n.clientName)?c.NAME:n.clientName,integrationStringVersion:i.isNull(n.integrationStringVersion)?1:n.integrationStringVersion,anonymizeIP:i.isNull(I.getAnonymizeIP())?void 0:I.getAnonymizeIP(),activationId:I.getActivationId(),decisionTicketAudienceIds:[],sessionId:T.getSessionId(),activeViewStates:[],userFeatures:j(D.getVisitorProfile()),layerStates:k.getLayerStatesForAnalytics()})}function L(n){var t=y.getReferrer()||f.getReferrer();return{eventId:w.generate(),timestamp:a.now(),revision:I.getRevision(),clientName:E.getClientName(),clientVersion:E.getClientVersion(),projectId:I.getProjectId(),accountId:I.getAccountId(),activationId:I.getActivationId(),sessionId:T.getSessionId(),isGlobalHoldback:I.isGlobalHoldback(),namespace:I.getNamespace(),referrer:t,visitorId:P.getRandomId(),activeViewStates:n.activeViewStates,layerStates:n.layerStates,userFeatures:j(n.visitorProfile)}}function F(n){var t,e;return n.pageId?(t=n.pageId,(e=S.getViewState(t))&&e.isActive?e.metadata:{}):{}}function j(n){var t=A.getAllPlugins(l.PluginTypes.visitorProfileProviders),e=i.filter(t,{shouldTrack:!0}),r={id:null,type:null,name:"",value:null,shouldIndex:!0};return i.reduce(e,(function(t,e){try{var o=e.provides,u=n[o],a=[];if(!i.isUndefined(u)){i.isObject(u)?a=i.map(u,(function(n,t){var e=i.isObject(n)?n:{value:n};return i.extend({},{type:o,name:t},e)})):a.push({type:o,value:u});var c=i(a).map((function(n){return i.pick(i.extend({},r,n),i.keys(r))})).filter((function(n){return!!n.value})).value();t=t.concat(c)}}catch(s){g.warn("Error evaluating userFeature against visitorProfile:",s)}return t}),[])}function U(n,t,e){var r=function(n,t){var e=[];return i.each(A.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(i,r){if(i[n]&&(!t||!i[t]))try{e.push({name:r,hookFn:s.evaluate(i[n])})}catch(o){g.error(o)}})),e}(n,e);g.debug("Found "+r.length+" analytics integrations defining a "+n+" hook"),g.debug("Calling each with data: ",t),i.each(r,(function(n){try{g.debug("Calling plugin: "+n.name),n.hookFn(t),g.debug("Called plugin: "+n.name)}catch(e){g.error(e)}}))}function V(n,t,e){var r=function(n,t){0;var e=[];return i.each(A.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(r,o){i.includes(t,r[n])&&e.push({name:o,hookFn:r.trackLayerDecision})})),e}(n,t);g.debug("Found "+r.length+" analytics integrations  defining a trackLayerDecision "+n+" timing of "+t.join("|")),g.debug("Calling each with data: ",e),i.each(r,(function(n){try{g.debug("Calling plugin: "+n.name),n.hookFn(e),g.debug("Called plugin: "+n.name)}catch(t){g.error(t)}}))}t.trackClientActivation=function(){if(C.shouldSendTrackingData()){var n,t=(n=L({activeViewStates:[],visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()}),i.extend(n,{eventTags:{}}));return U("onClientActivation",t),t}},t.trackCustomEvent=function(n,t,e){t=t||{},e||(e=O.getByApiName(n));var r=function(n,t,e){var r=L({activeViewStates:S.getActiveViewStates(),visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()}),o=e&&e.pageId?F(e):S.getActiveViewTags(),u=i.extend({},o,t),a=e&&e.category?e.category:d.OTHER;return i.extend(r,{eventEntityId:e&&e.id,eventApiName:n,eventCategory:a,eventTags:u})}(n,t,e),a={name:n,type:h.CUSTOM,category:r.eventCategory,tags:i.omit(r.eventTags,"revenue")};if(i.isUndefined(t.revenue)||(a.revenue=t.revenue),o.emitAnalyticsEvent({name:e?e.name||e.apiName:n,apiName:e?e.apiName:void 0,type:h.CUSTOM,tags:i.omit(r.eventTags,"revenue"),category:r.eventCategory,metrics:a.revenue?{revenue:a.revenue}:{}},!C.shouldSendTrackingData()),C.shouldSendTrackingData())return u.addEvent(a),U("onCustomEvent",r),r},t.trackDecisionEvent=function(n,t,e){e||(e=x.get(n.layerId));var o=w.generate();v.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:n.layerId,pageId:t.pageId,decisionId:o});var u=function(n,t,e,r){var o=null,u=null,c=null;if(t.experimentId){var s=i.find(r.experiments,{id:t.experimentId});if(s&&(o=s.name||null,c=s.integrationSettings,t.variationId)){var l=i.find(s.variations,{id:t.variationId});l&&(u=l.name||null)}}var d=y.getReferrer()||f.getReferrer();return{sessionId:T.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:P.getRandomId(),decisionId:n,activationId:I.getActivationId(),namespace:I.getNamespace(),timestamp:a.now(),pageId:e.pageId||null,variationId:t.variationId,variationName:u,experimentId:t.experimentId,experimentName:o,layerId:t.layerId,layerName:r.name,layerPolicy:r.policy,accountId:I.getAccountId(),projectId:I.getProjectId(),revision:String(I.getRevision()),clientName:E.getClientName(),clientVersion:E.getClientVersion(),referrer:d,integrationStringVersion:r.integrationStringVersion||1,integrationSettings:i.extend({},r.integrationSettings,c)}}(o,n,t,e),c=N.isExpectingRedirect(),s=N.getLayerId(),l=p.description(e);if(c&&s===e.id&&(b.persist(u,"COOKIE"),g.log("Relaying decision for redirect Campaign",l)),C.shouldSendTrackingData()){var d=M(u,n.isLayerHoldback);if(c&&s===e.id){var h=_.TrackLayerDecisionTimingFlags.preRedirectPolicy;d.timing=h,V(h,[_.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],d),g.log("Called trackLayerDecision for redirect Campaign",l,d)}else{h=_.TrackLayerDecisionTimingFlags.nonRedirectPolicy;d.timing=h,V(h,[_.NonRedirectPolicies.TRACK_IMMEDIATELY],d),g.log("Called trackLayerDecision for non-redirect Campaign",l,d)}}else g.log("Analytics / Not tracking decision for Campaign",p.description(e))},t.trackPostRedirectDecisionEvent=function(){if(!C.shouldSendTrackingData()||R.hasTracked())return m.resolve();var n=R.get();if(!n)return m.resolve();var t=M(n,!1),e=_.TrackLayerDecisionTimingFlags.postRedirectPolicy;return t.timing=e,V(e,[_.PostRedirectPolicies.TRACK_IMMEDIATELY],t),V(_.TrackLayerDecisionTimingFlags.postRedirectPolicy,[_.PostRedirectPolicies.TRACK_AFTER_SYNC],t),v.dispatch(r.REGISTER_TRACKED_REDIRECT_DATA),m.resolve()},t.trackClickEvent=function(n){var t=function(n){var t=L({activeViewStates:S.getActiveViewStates(),visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()}),e=n.config&&n.config.selector?n.config.selector:n.eventFilter.selector,r=n.apiName,o=n.category||d.OTHER,u=n.id,a=F(n);return i.extend(t,{eventApiName:r,eventCategory:o,eventEntityId:u,eventTags:a,pageId:n.pageId,selector:e})}(n),e={name:n.apiName,type:n.eventType,category:t.eventCategory,tags:t.eventTags};if(o.emitAnalyticsEvent({name:n.name||n.apiName,apiName:n?n.apiName:void 0,type:n.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!C.shouldSendTrackingData()),C.shouldSendTrackingData())return u.addEvent(e),U("onClickEvent",t),t},t.trackViewActivation=function(n,t){if(t||(t=S.getViewState(n.id)),t.isActive){var e=function(n,t){var e=L({activeViewStates:S.getActiveViewStates(),visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()});return i.extend(e,{pageId:n.id,pageApiName:n.apiName,viewCategory:n.category,eventTags:t.metadata})}(n,t);if(o.emitAnalyticsEvent({name:n.name||e.pageApiName,apiName:e.pageApiName,type:h.PAGEVIEW,category:e.viewCategory,tags:e.eventTags,metrics:{}},!C.shouldSendTrackingData()),C.shouldSendTrackingData())return u.addEvent({name:e.pageApiName,type:h.PAGEVIEW,category:e.viewCategory,tags:e.eventTags}),v.dispatch(r.TRACK_VIEW_ACTIVATED_EVENT,{pageId:n.id,eventData:e}),U("onPageActivated",e),e}else g.debug("Inactive view passed to `trackViewActivation`")}},6928:function(n,t,e){var i=e(9576),r=e(2805),o=e(8718),u=e(7989),a=e(4041),c=e(8964),s=e(4797),f=e(2678),l=e(9612),d=a.get("stores/plugins"),h=".",v=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(n){return i.map(n,encodeURIComponent).join(",")},encodeValueString:i.identity,decodeValueString:i.identity,valueFromValueString:function(n){return i.map(n.split(","),o.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(n,t){var e=null;if(n){var r=d.getPlugin(c.PluginTypes.analyticsTrackers,t);if(r&&i.isFunction(r.serializeSettings))try{e=r.serializeSettings(n)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",t,o)}}return e},valueFromValueString:function(n,t){var e=null,r=d.getPlugin(c.PluginTypes.analyticsTrackers,t);if(r&&i.isFunction(r.deserializeSettings))try{e=r.deserializeSettings(n)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",t,o)}return e},isNullable:!0}],p={},g={};i.forEach(v,(function(n){p[n.name]=n,g[n.relayName]=n})),t.persist=function(n,t){t===l.RedirectRelayMedia.COOKIE?function(n){try{var t=function(n){var t=[],e=i.reduce(n,(function(n,e,r){var o=p[r];return o?(o.isMulti?i.forEach(e,(function(t,e){t=o.valueToValueString?o.valueToValueString(t,e):String(t),i.isNull(t)||(t=(o.encodeValueString||encodeURIComponent)(t),n.push(encodeURIComponent(o.relayName+h+e)+"="+t))})):i.isNull(e)||(e=(o.valueToValueString||String)(e),e=(o.encodeValueString||encodeURIComponent)(e),n.push(o.relayName+"="+e)),n):(t.push(r),n)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields: "+t);return e.sort(),e.join("&")}(n)}catch(e){return f.error("Relay / Error computing redirect relay cookie: ",e),void u.emitError(e)}f.debug("Relay / Setting redirect relay cookie:",t);try{o.set(c.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(r){f.error("Relay / Failed to set redirect relay cookie",r),u.emitError(r)}}(n):f.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(n){if(n||(n=function(){var n=o.get(c.COOKIES.REDIRECT,!1);if(n)return f.log("Relay / Found redirect cookie:",n),n}()),n){var t=function(n){var t={},e=n.split("&");return i.forEach(e,(function(n){var e=n.split("=");if(2===e.length){var r=o.safeDecodeURIComponent(e[0]),a=g[r];if(a||(a=i.find(v,(function(n){return n.isMulti&&0===r.indexOf(n.relayName+h)})))){var c=e[1];try{if(a.isMulti){t[a.name]=t[a.name]||{};var s=r.substring(a.relayName.length+h.length);c=(a.decodeValueString||o.safeDecodeURIComponent)(c),c=(a.valueFromValueString||i.identity)(c,s),t[a.name][s]=c}else c=(a.decodeValueString||o.safeDecodeURIComponent)(c),c=(a.valueFromValueString||i.identity)(c),t[a.name]=c}catch(l){return f.warn("Relay / Skipping segment due to decode or parse error:",n,l),void u.emitError(l)}}else f.warn("Relay / Skipping segment with unknown field identifier:",n,r)}else f.warn("Relay / Skipping invalid segment:",n)})),t}(n);if(t){var e=[];if(i.forEach(v,(function(n){(i.isNull(t[n.name])||i.isUndefined(t[n.name]))&&(n.isNullable?t[n.name]=null:(delete t[n.name],e.push(n.name)))})),!e.length)return s.dispatch(r.LOAD_REDIRECT_DATA,t),s.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var n,e;e=(n=t).pageId||void 0,s.dispatch(r.RECORD_LAYER_DECISION,{layerId:n.layerId,decision:{layerId:n.layerId,experimentId:n.experimentId,variationId:n.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:n.decisionTicketAudienceIds,bucketingId:n.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:n.activationId},sessionId:n.sessionId,activationId:n.activationId,timestamp:n.timestamp,revision:n.revision,namespace:n.namespace,pageId:e}),s.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:n.layerId,pageId:e,decisionId:n.decisionId}),s.dispatch(r.ACTION_EXECUTED,{sessionId:n.sessionId,layerId:n.layerId,pageId:n.pageId,timestamp:n.timestamp,activationId:n.activationId})}}),t;f.error("Relay / Observed redirect data with missing fields:",e)}}}},7989:function(n,t,e){var i=e(4658);t.emitError=function(n,t,e){i.emit({type:"error",name:n.name||"Error",data:{error:n,metadata:t}},e||!1,!0)},t.emitInternalError=function(n,e){t.emitError(n,e,!0)},t.emitAnalyticsEvent=function(n,t){var e={type:"analytics",name:"trackEvent",data:n};i.emit(e,t)}},6621:function(n,t,e){var i=e(9576),r=e(6227),o=e(9196),u=e(2678),a=e(1685);function c(n,t){var e="function"==typeof n?n(t):n;return"string"==typeof e&&(e=[e]),i.isArray(e)?e:(u.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function s(n){return n.name?n.name+" ("+n.id+")":n.id}t.isInAudience=function(n,t,e){var a,f=function(n,t){return function(e){var r=e.type,a=t[r];if(!a)throw new Error("Audience / No matcher found for type="+r);if(a.fieldsNeeded)for(var s=c(a.fieldsNeeded,e),f=0;f<s.length;f++){var l=s[f],d=o.getFieldValue(n,l);if(i.isUndefined(d))return void u.debug("Audience / Required field",l,"for type",r,"has no value")}u.debug("Matching condition:",e,"to values:",n);var h=a.match(n,e);if(!i.isUndefined(h))return!!h}}(n,e);u.groupCollapsed("Checking audience",t.name,t.id,t),u.debug("Visitor Profile:",n);try{var l=r.evaluate(t.conditions,f)}catch(d){a=d,l=!1}return u.groupEnd(),a&&u.error("Audience / Error evaluating audience",s(t),":",a),u.log("Is "+(l?"in":"NOT in")+" audience:",s(t)),l},t.requiredAudienceFieldsForConditions=function f(n,t){var e={};return i.each(n,(function(n){if(i.isArray(n))i.extend(e,f(n,t));else if(i.isObject(n)){var r=t[n.type];if(r){var o=c(r.fieldsNeeded,n);i.each(o,(function(n){e[a.serializeFieldKey(n)]=n}))}}})),e}},2657:function(n,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}},5093:function(n,t,e){var i=e(9576),r=e(2657),o=e(9196).getFieldValue,u=e(7751);function a(n,t,e,o,u){this[r.FIELDS.NAME]=n,this[r.FIELDS.TYPE]=t,i.isString(e)&&e.trim().length>0&&(this[r.FIELDS.CATEGORY]=e),o&&i.keys(o).length>0&&(this[r.FIELDS.OPTIONS]=o),i.isUndefined(u)||(this[r.FIELDS.REVENUE]=u)}function c(n,t,e,o){this.eventBase=n,this[r.FIELDS.TIME]=t,i.isUndefined(e)||(this[r.FIELDS.SESSION_ID]=e),i.isUndefined(o)||(this[r.FIELDS.SESSION_INDEX]=o)}t.x=a,a.prototype.digest=function(){var n=function(n,t){return encodeURIComponent(n)+"="+encodeURIComponent(t)},t=[];if(t.push(n(r.FIELDS.NAME,this[r.FIELDS.NAME])),t.push(n(r.FIELDS.TYPE,this[r.FIELDS.TYPE])),this[r.FIELDS.CATEGORY]&&t.push(n(r.FIELDS.CATEGORY,this[r.FIELDS.CATEGORY])),this[r.FIELDS.REVENUE]&&t.push(n(r.FIELDS.REVENUE,this[r.FIELDS.REVENUE])),!this[r.FIELDS.OPTIONS])return t.join("&");var e=this[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(e),(function(n){return e.hasOwnProperty(n)}));o=o.sort();for(var u=0;u<o.length;u++)t.push(n(o[u],e[o[u]]));return t.join("&")},a.prototype.hash=function(){return this.hash_||(this.hash_=u.hashToHex(u.toByteString(this.digest()),u.Seed.BEHAVIOR_EVENT)),this.hash_},a.prototype.setHash=function(n){this.hash_=n},a.prototype.reHash=function(){this.hash_=null,this.hash()},a.prototype.equals=function(n){if(this.hash()!==n.hash()||this[r.FIELDS.NAME]!==n[r.FIELDS.NAME]||this[r.FIELDS.TYPE]!==n[r.FIELDS.TYPE]||this[r.FIELDS.CATEGORY]!==n[r.FIELDS.CATEGORY]||this[r.FIELDS.REVENUE]!==n[r.FIELDS.REVENUE])return!1;var t=this[r.FIELDS.OPTIONS]||{},e=n[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(t),(function(n){return t.hasOwnProperty(n)})),u=i.filter(i.keys(e),(function(n){return e.hasOwnProperty(n)}));if(o.length!==u.length)return!1;for(var a=0;a<o.length;a++){var c=o[a];if(!e.hasOwnProperty(c)||t[c]!==e[c])return!1}return!0},a.prototype.getValueOrDefault=function(n,t){var e=o(this,n);return i.isUndefined(e)?t:e},a.prototype.setFieldValue=function(n,t){n!==r.FIELDS.NAME&&n!==r.FIELDS.TYPE&&n!==r.FIELDS.CATEGORY&&n!==r.FIELDS.REVENUE&&n!==r.FIELDS.OPTIONS||(this[n]=t,this.reHash())},t.j=c,c.prototype.getValueOrDefault=function(n,t){if(0===n.length)return this;var e={};e[r.FIELDS.TIME]=this[r.FIELDS.TIME],e[r.FIELDS.SESSION_ID]=this[r.FIELDS.SESSION_ID],e[r.FIELDS.SESSION_INDEX]=this[r.FIELDS.SESSION_INDEX];var u=o(e,n);return i.isUndefined(u)?this.eventBase.getValueOrDefault(n,t):u},c.prototype.setFieldValue=function(n,t){n===r.FIELDS.TIME||n===r.FIELDS.SESSION_ID||n===r.FIELDS.SESSION_INDEX?this[n]=t:this.eventBase.setFieldValue(n,t)};var s={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};c.prototype.readableEvent=function(){var n,t,e=function(n){return i.isString(n)?'"'+n+'"':n},o=this,u=[];i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.SESSION_ID],(function(r){n=s[r],t=o.getValueOrDefault([r]),i.isUndefined(t)||u.push(n+": "+e(t))}));var a=[];if(n=s[r.FIELDS.OPTIONS],t=o.getValueOrDefault([r.FIELDS.OPTIONS]),i.isUndefined(t)||(i.each(t,(function(n,t){a.push(t+": "+String(e(n)))})),u.push(n+": {\n\t\t"+a.join(",\n\t\t")+"\n\t}")),t=o.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(t)&&(t=e(new Date(t).toString())),!i.isUndefined(t)){u.push("timestamp: "+t)}return"{\n\t"+u.join(",\n\t")+"\n}"},c.prototype.toObject=function(n){var t,e,o={},u=this;i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.OPTIONS,r.FIELDS.SESSION_INDEX],(function(n){t=s[n],e=u.getValueOrDefault([n],n===r.FIELDS.OPTIONS?{}:void 0),i.isUndefined(e)||(o[t]=e)}));var a=s[r.FIELDS.OPTIONS],c=s[r.FIELDS.REVENUE];if(n&&n.revenueAsTag&&o[c]&&(o[a]=o[a]||{},o[a][c]=o[c],delete o[c]),e=u.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(e))if(n&&n.timeAsTimestamp){o.timestamp=new Date(e)}else{o.time=e}return o}},5434:function(n,t,e){var i=e(9314);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.getEventCount=i.getEventCount},2289:function(n,t,e){var i=e(5093).j,r=e(3792),o=e(2657),u=e(5093).x;t.CURRENT_SESSION_INDEX=0;var a=18e5;function c(n,e){var i;i=t.isInSameSession(n,e)?n.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function s(n,e,i){var r,u=n.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=t.isInSameSession(e,n)?u:i?u+1:u-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}t.isInSameSession=function(n,t){var e=n.getValueOrDefault([o.FIELDS.TIME],0),i=t.getValueOrDefault([o.FIELDS.TIME],0);return Math.abs(e-i)<a},t.updateSessionId=function(n,t){if(n){var e=n.getValueOrDefault([o.FIELDS.TIME]),r=n.getValueOrDefault([o.FIELDS.SESSION_ID]),a=t.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?a-36e5:e,r="number"!=typeof r?e:r,c(n=new i(new u("",""),e,r),t)}else t.setFieldValue(o.FIELDS.SESSION_ID,t.getValueOrDefault([o.FIELDS.TIME]))},t.updateSessionIndex=function(n,t){if(n){var e=n.getValueOrDefault([o.FIELDS.TIME]),r=n.getValueOrDefault([o.FIELDS.SESSION_INDEX]),a=t.getValueOrDefault([o.FIELDS.TIME]),c=n.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?a-36e5:e,r="number"!=typeof r?0:r,c="number"!=typeof c?e:c,s(n=new i(new u("",""),e,c,r),t,!1)}else t.setFieldValue(o.FIELDS.SESSION_INDEX,0)},t.sessionize=function(n){var e=n.length;if(0!==e){n[0].setFieldValue(o.FIELDS.SESSION_ID,n[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)c(n[i-1],n[i]);var u=t.CURRENT_SESSION_INDEX,f=n[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>a&&(u+=1),n[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,u);for(i=e-1;i>0;i--)s(n[i],n[i-1],!0)}},t.reindexIfNecessary=function(n,t,e){var i=function(n){for(var t=0;t<n.length;t++){var e=n[t].getValueOrDefault([o.FIELDS.SESSION_INDEX]);n[t].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===n.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(t),i(e))},t.sessionSortPredicate=function(n,t){return n[o.FIELDS.TIME]-t[o.FIELDS.TIME]},t.applyMigrations=function(n){return!1}},9314:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),u=e(1852),a=e(4797),c=e(2678),s=e(1685),f=t,l=e(5093).j,d=e(2657),h=e(5093).x,v=e(2289),p=e(4041),g=p.get("stores/visitor_events"),m=p.get("stores/visitor_events_manager"),y={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"};function b(n){a.dispatch(r.SET_VISITOR_EVENTS,n)}function _(n){a.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:n})}function w(n){a.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:n})}function E(n){a.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:n})}function I(){return g.getEvents()}function T(){return m.getBaseMap()}function S(){return m.getEventQueue()}function A(){return m.getLastEvent()}function k(){var n=I().concat(S()),t=!1;return n.length>1e3&&(n=n.slice(-1e3),t=!0),b(n),w([]),t}t.initialize=function(n,t){if(!m.getInitialized()){f.S(n,t);var e=I();e.length>0&&E(e[e.length-1]);var i=S();i.length>0&&E(i[i.length-1]),a.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},t.addEvent=function(n){c.debug("Behavior store: adding event",n);var t=f.k(n);E(t),w(S().concat(t)),v.reindexIfNecessary(A(),I(),S()),f.R(S())},t.getEvents=function(){return S().length>0&&(k()&&v.sessionize(I()),f.N(I()),f.R(S())),I()},t.getEventCount=function(){return S().length+I().length},f.S=function(n,t){f.D(n,t)&&(f.N(I()),f.R(S())),v.sessionize(I())},f.D=function(n,t){if(0===n.length&&0===t.length)return b([]),w([]),!1;var e=!1,i=n[0]||t[0];return y.EVENTBASE in i?(b(f.C(n)),w(f.C(t))):(e=!0,b(f.O(n)),w(f.O(t))),S().length>0&&(k(),e=!0),b(f._updateBaseMapAndMaybeDedupe(I())),f._migrateEventBasesAndUpdateStore()&&(e=!0),e},f.O=function(n){for(var t=[],e=0;e<n.length;e++){var i=n[e],r=f.P(i);t[e]=new l(r,i[d.FIELDS.TIME])}return t},f._migrateEventBasesAndUpdateStore=function(){var n=!1,t=f.M();return v.applyMigrations(t)&&(n=!0,_({}),b(f._updateBaseMapAndMaybeDedupe(I())),w(f._updateBaseMapAndMaybeDedupe(S()))),n},f.L=function(){return o.now()},f.k=function(n){var t,e=n.name,i=n.type||"default",r=n.category||u.OTHER,o=n.tags||{};n.revenue&&(t=n.revenue);var a=new h(e,i,r,o,t);a=f.F(a);var c=f.L(),s=new l(a,c,-1);return v.updateSessionId(A(),s),v.updateSessionIndex(A(),s),s},f._updateBaseMapAndMaybeDedupe=function(n){for(var t=0;t<n.length;t++)n[t].eventBase=f.F(n[t].eventBase);return n},f.N=function(n){var t=f.V(n);s.persistBehaviorEvents(t)},f.R=function(n){var t=f.V(n);s.persistBehaviorEventQueue(t)},f.q=function(){var n;m.getCleared()||(b([]),w([]),f.N(I()),f.R(S()),_({}),E(null),n=!0,a.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:n}))},f.F=function(n){var t=n.hash(),e=T(),r=e[t];if(i.isUndefined(r))return e[t]=[n],_(e),n;for(var o=0;o<r.length;o++)if(n.equals(r[o]))return r[o];return r.push(n),_(e),n},f.M=function(){var n=[],t=T();for(var e in t)!t.hasOwnProperty(e)||(n=n.concat(t[e]));return n},f.V=function(n){for(var t=function(n){var t={};t[d.FIELDS.NAME]=n.getValueOrDefault([d.FIELDS.NAME]),t[d.FIELDS.TYPE]=n.getValueOrDefault([d.FIELDS.TYPE]);var e=n.getValueOrDefault([d.FIELDS.CATEGORY]);i.isUndefined(e)||(t[d.FIELDS.CATEGORY]=e);var r=n.getValueOrDefault([d.FIELDS.REVENUE]);i.isUndefined(r)||(t[d.FIELDS.REVENUE]=r);var o=n.getValueOrDefault([d.FIELDS.OPTIONS]);return i.isUndefined(o)||(t[d.FIELDS.OPTIONS]=o),t},e=y,r=[],o="_idx_",u=0;u<n.length;u++){var a,c,s=n[u],f=s.eventBase;if(f.hasOwnProperty(o)){a=r[f._idx_];var l=s[d.FIELDS.TIME]-(a[e.TIMEBASE]||0);(c={})[e.DELTA]=l,c[e.INDEX]=u,a[e.TIMESTAMPS].push(c)}else(a={})[e.EVENTBASE]=t(s),a[e.HASH]=f.hash(),a[e.TIMEBASE]=s[d.FIELDS.TIME],(c={})[e.DELTA]=0,c[e.INDEX]=u,a[e.TIMESTAMPS]=[c],r.push(a),f._idx_=r.length-1}for(u=0;u<n.length;u++)delete n[u].eventBase._idx_;return r},f.P=function(n,t){var e=new h(n[d.FIELDS.NAME],n[d.FIELDS.TYPE],n[d.FIELDS.CATEGORY],n[d.FIELDS.OPTIONS],n[d.FIELDS.REVENUE]);return i.isUndefined(t)||e.setHash(t),e},f.C=function(n){for(var t=y,e=[],i=0;i<n.length;i++)for(var r=n[i],o=f.P(r[t.EVENTBASE],r[t.HASH]),u=r[t.TIMEBASE],a=r[t.TIMESTAMPS],c=0;c<a.length;c++){var s=a[c],d=new l(o,u+s[t.DELTA]);e[s[t.INDEX]]=d}return e},t.deserialize=function(n){return f.C(n)},t.mergeAllEvents=function(n){var t=[].concat.apply([],n);return t.sort(v.sessionSortPredicate),v.sessionize(t),t}},2805:function(n,t,e){var i=e(2624);n.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},8964:function(n,t,e){var i=e(9576),r=e(2624);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},t.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=r({blockTime:null}),t.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=r({XMLHttpRequest:null}),t.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.AllStorageKeys=i.assign({},t.StorageKeys,t.VisitorStorageKeys),t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},t.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"}},1852:function(n){n.exports={OTHER:"other"}},7356:function(n,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},1372:function(n){n.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},9612:function(n,t,e){var i=e(2624);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})},151:function(n,t,e){var i=e(7751),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(n,t,e){return i.hashToInt(n+t,e,r)},t.isHoldback=function(n,e){return t.bucketingNumber(n,e.id,i.Seed.IGNORING)<(e.holdback||0)},t.chooseWeightedCandidate=function(n,e,r){for(var o=t.bucketingNumber(n,e,i.Seed.BUCKETING),u=0;u<r.length;u++)if(r[u].endOfRange>o)return r[u].entityId;throw new Error("Unable to choose candidate")}},6183:function(n,t,e){var i=e(9576),r=e(2805),o=e(151),u=e(6227),a=e(7065).E,c=e(4797),s=e(2678);t.isValidExperiment=function(n,t){var e,r=i.partial(i.includes,n);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,n),e=!t.audienceIds||u.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",e),e},t.selectVariation=function(n,t,e,u,f){if(!n.variations||0===n.variations.length)throw new a('No variations in selected experiment "'+n.id+'"');if(!n.weightDistributions&&n.variations.length>1)throw new a('On selected experiment "'+n.id+'", weightDistributions must be defined if # variations > 1');var l;if(n.bucketingStrategy&&"impression"===n.bucketingStrategy)if(1===n.variations.length)l=n.variations[0].id;else{var d=u;l=o.chooseWeightedCandidate(e+d,n.id,n.weightDistributions)}else if(l=1===n.variations.length?n.variations[0].id:o.chooseWeightedCandidate(e,n.id,n.weightDistributions),f&&f[n.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",n.id);var h=f[n.id];if(!i.find(n.variations,{id:h}))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:n.id}),s.debug("Decision / Preferred variation:",h,"not found on experiment:",n.id,". Visitor not bucketed."),null;h!==l&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:n.id}),l=h)}var v=i.find(n.variations,{id:l});if(v)return s.debug("Decision / Selected variation:",v),v;throw new a('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(n,t){var e=i.find(n.experiments,{id:t});if(e)return e;throw new a("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(n,t){return s.debug("Decision / Checking variation:",n,"for actions on pageId:",t),!!i.find(n.actions,(function(n){return n.pageId===t&&!i.isEmpty(n.changes)}))}},7065:function(n,t){function e(n){this.message=n}e.prototype=new Error,t.E=e},3378:function(n,t,e){var i=e(9576),r=e(2805),o=e(7989),u=e(6621),a=e(151),c=e(6183),s=e(7065).E,f=e(4041),l=e(8964),d=e(4797),h=e(1722),v=e(4604),p=e(2678),g=e(2119),m=f.get("stores/plugins"),y=f.get("stores/global"),b=f.get("stores/layer_data");function _(n){var t=m.getPlugin(l.PluginTypes.deciders,n);if(i.isEmpty(t))throw new Error("No deciders found for policy: "+n);return t}t.isPageIdRelevant=function(n){if(!n)return!1;var t=_(n.policy);return i.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(n):!0===t.includePageIdInDecisionTicket},t.createTicket=function(n){var t,e,r,o=i.pick(n,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return i.extend(o,{audienceIds:(t=n.visitorProfile,e=n.audiences,r=m.getAllPlugins(l.PluginTypes.audienceMatchers),i.reduce(e,(function(n,e){return u.isInAudience(t,e,r)&&n.push(e.id),n}),[])),activationId:y.getActivationId()}),o},t.decideGlobal=function(n){return{isGlobalHoldback:a.isHoldback(n.bucketingId,{id:null,holdback:n.globalHoldback})}},t.decideGroup=function(n,t){p.debug("Decision / Deciding layer for group: ",h.description(n));var e,o,u=t.preferredLayerId,c=!!u;try{(e=a.chooseWeightedCandidate(t.bucketingId,n.id,n.weightDistributions))&&"None"!==e||(o='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(l){o="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(c&&(p.debug("Decision / Using preferredLayerMap to select layer for group:",h.description(n)),u!==e&&(d.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:n.id}),e=u)),o)return{layerId:null,reason:o};if(!i.find(n.weightDistributions,{entityId:e})){var f="Visitor was"+(c?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!c)throw new s(f);return{layerId:null,reason:f}}return{layerId:e}},t.decideLayer=function(n,t){var e,r;p.debug("Deciding: ",n,t);var u,f,l=_(n.policy),d={layerId:n.id,experimentId:null,variationId:null,isLayerHoldback:a.isHoldback(t.bucketingId,n)};if(i.isEmpty(n.experiments))throw new s("No experiments in layer.");try{if(l.decideLayer){p.debug("Decision / Using decider's custom decideLayer.");var h=l.decideLayer(n,t);e=h.experiment,r=h.variation}else p.debug("Decision / Using default decideLayer behavior."),e=l.selectExperiment(n,t.audienceIds,t.bucketingId),r=c.selectVariation(e,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(v){u=v,(null!=(f=s)&&"undefined"!=typeof Symbol&&f[Symbol.hasInstance]?f[Symbol.hasInstance](u):u instanceof f)?d.reason=v.message:d.error=v}return d.experimentId=e?e.id:null,d.variationId=r?r.id:null,d.error&&(d.error.name="DecisionEngineError",o.emitError(d.error)),d},t.getDummyLayerDecision=function(n,t){var e,i=function(n,t){for(var e=0;e<n.experiments.length;e++)for(var i=0;i<n.experiments[e].variations.length;i++)if(t.indexOf(n.experiments[e].variations[i].id)>-1)return{experimentId:n.experiments[e].id,variationId:n.experiments[e].variations[i].id};return null}(n,t);return i?(p.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(n)),e={layerId:n.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(p.log("No variation matches ids:",t,"in Campaign",v.description(n)),e={layerId:n.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),e},t.isInCohort=function(n){if(!n.experimentId||!n.variationId)return!1;var t=b.get(n.layerId);return!(g.isSingleExperimentPolicy(t.policy)&&n.isLayerHoldback)}},4041:function(n,t,e){var i=e(9576),r=e(5179),o=e(4797),u=e(1361),a=r.create(),c={action_data:e(2034),async_request:e(3685),audience_data:e(6330),change_data:e(5065),cleanup:e(1390),client_metadata:e(3642),cookie_options:e(9381),event_data:e(9610),event_emitter:e(1592),dimension_data:e(4253),directive:e(4710),global:e(1312),history:e(6662),integration_settings:e(9935),layer:e(1037),layer_data:e(8336),log:e(8842),observed_redirect:e(8648),pending_events:e(9990),performance:e(1053),plugins:e(4808),provider_status:e(6743),pending_redirect:e(9441),rum:e(1349),sandbox:e(8654),session:e(2043),tracker_optimizely:e(3697),ua_data:e(2604),view:e(6963),view_data:e(1522),visitor:e(9984),visitor_attribute_entity:e(4375),visitor_events:e(5847),visitor_events_manager:e(9721),visitor_id:e(7022),visitor_bucketing:e(1217),xdomain:e(5417)};c.group_data=e(3881),o.registerStores(c),i.forOwn(c,(function(n,t){a.register("stores/"+t,o.getStore(t))})),a.register("core/plugins/matchers/key_value",u),n.exports=a},4819:function(n,t,e){var i=e(9576),r=e(2805),o=e(7989),u=e(8718),a=e(6639).U,c=e(8964),s=e(4797),f=e(2678),l=t.JSONParseError=a("JSONParseError"),d=e(4005),h=e(2676),v=e(2188),p="optimizely_show_preview",g="optimizely_disable",m="optimizely_editor",y="optimizely_p13n",b="optimizely_x_audiences",_="optimizely_x",w="optimizely_show_preview",E="optimizely_opt_out",I="optimizely_token",T="optimizely_force_tracking";t.populateDirectiveData=function(){var n,t,e,a,S,A,k,x;!function(){var n="OFF",t=d.getQueryParamValue("optimizely_log");if(t){var e=t.split(":");""!==e[0]&&(n=String(e[0]).toUpperCase()),void 0!==e[1]&&f.setLogMatch(e[1])}f.setLogLevel(n)}(),function(){var n=v.getUserAgent()||"";if(!i.isString(n))return void f.warn("Directive / userAgent not a string");n=n.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],e=function(t){if(i.includes(n,t))return f.warn("Directive / Matches bot:",t),!0};i.some(t,e)&&(f.log("Directive / Disabling tracking"),s.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),n=Boolean(i.result(window.optimizely,"initialized")),s.dispatch(r.LOAD_DIRECTIVE,{alreadyInitialized:n}),s.dispatch(r.LOAD_DIRECTIVE,{mutationObserverAPISupported:v.isMutationObserverAPISupported()}),function(){var n=u.get(c.COOKIES.OPT_OUT),t=d.getQueryParamValue(E),e="You have successfully opted out of Optimizely for this domain.",i="You are NOT opted out of Optimizely for this domain.";if("true"===t||"false"===t){var o="true"===t;s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:o}),v.alert(o?e:i)}else n&&s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:"true"===n})}(),function(){var n=!1,t=[p,g];t.push(m);for(var e=0;e<t.length;e++)if("true"===d.getQueryParamValue(t[e])){f.warn("Directive / Not activating because "+t[e]+" is set."),n=!0;break}s.dispatch(r.LOAD_DIRECTIVE,{disabled:n})}(),s.dispatch(r.LOAD_DIRECTIVE,{isEditor:!1}),s.dispatch(r.LOAD_DIRECTIVE,{isPreview:!1}),(t=d.getQueryParamValue(w))&&f.log("Directive / Is legacy preview mode"),s.dispatch(r.LOAD_DIRECTIVE,{isLegacyPreview:!!t}),s.dispatch(r.LOAD_DIRECTIVE,{isSlave:!1}),e=v.getGlobal("optlyDesktop"),(a=!(!e||i.isUndefined(e.p13nInner)))&&f.log("Directive / Is running in desktop app editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInDesktopApp:a}),(S="true"===d.getQueryParamValue(y))&&f.log("Directive / Is running in editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInV2Editor:S}),A=u.get(c.COOKIES.TOKEN)||null,k=d.getQueryParamValue(I)||A,s.dispatch(r.LOAD_DIRECTIVE,{projectToken:k}),function(){var n=u.get(c.COOKIES.PREVIEW),t=[],e=d.getQueryParamValue(b);if(e)t=u.safeDecodeURIComponent(e).split(",");else if(n)try{t=h.parse(n).forceAudienceIds}catch(v){var i=new l("Failed to parse previewCookie in registerForceAudienceIds: "+n),a={originalMessage:v.message,userError:!0};o.emitError(i,a)}t.length&&(f.log("Directive / Force Audience IDs:",t),s.dispatch(r.LOAD_DIRECTIVE,{forceAudienceIds:t}))}(),function(){var n=u.get(c.COOKIES.PREVIEW),t=[],e=d.getQueryParamValue(_);if(e)t=u.safeDecodeURIComponent(e).split(",");else if(n)try{t=h.parse(n).forceVariationIds}catch(v){var i=new l("Failed to parse previewCookie in registerForceVariationIds: "+n),a={originalMessage:v.message,userError:!0};o.emitError(i,a)}t.length&&(f.log("Directive / Force Variation IDs:",t),s.dispatch(r.LOAD_DIRECTIVE,{forceVariationIds:t}))}(),(x=d.getQueryParamValue(T))&&s.dispatch(r.LOAD_DIRECTIVE,{forceTracking:x})};t.setOptOut=function(n){n?(f.warn("Directive / Opting out"),u.set(c.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):u.remove(c.COOKIES.OPT_OUT),s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:n})}},3792:function(n,t){t.now=function(){return+new Date}},5172:function(n,t){t.VERSION="0.188.1",t.NAME="js"},6954:function(n,t,e){var i=e(4041).get("stores/global");e(5133);t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(n){document.cookie=n},t.querySelector=function(n){return document.querySelector(n)},t.querySelectorAll=function(n){return document.querySelectorAll(n)},t.parseUri=function(n){var e=t.createElement("a");return e.href=n,e},t.childrenOf=function(n){return Array.prototype.slice.call(n.querySelectorAll("*"))},t.createElement=function(n){return document.createElement(n)},t.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(n){return document.addEventListener("DOMContentLoaded",n),function(){t.removeReadyHandler(n)}},t.removeReadyHandler=function(n){return function(){document.removeEventListener("DOMContentLoaded",n)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(n){if("loading"!==t.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(n)},t.appendToHead=function(n){return t.appendTo(document.head,n)},t.appendTo=function(n,t){n.appendChild(t)},t.addEventListener=function(n,t,e){return document.addEventListener(n,t,e),function(){document.removeEventListener(n,t,e)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(n){for(var t=n.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}},4243:function(n,t,e){var i,r,o="optimizely_data",u=e(6639).U,a=e(147),c=e(2188),s=u("StorageError");try{r=c.getGlobal("localStorage")}catch(f){throw new s("Unable to read localStorage: "+f.toString())}if(!r)throw new s("localStorage is undefined");i=a.create(r,o),t.mM=i},7174:function(n,t){t.create=function(n){return new MutationObserver(n)},t.observe=function(n,t,e){n.observe(t,e)}},7170:function(n,t,e){var i=e(8398).Promise,r=e(2188);t.estimateStorage=function(){var n=r.getGlobal("navigator");try{return n.storage.estimate()}catch(t){return i.resolve({usage:null,quota:null})}}},9e3:function(n,t,e){var i=e(2805),r=e(6639).U,o=e(3792),u=e(4797),a=e(2188),c=e(4041).get("stores/rum"),s="optimizely:",f=t.Error=r("PerformanceError");function l(){return a.getGlobal("performance")}t.time=function(n){if(c.getSampleRum()){var t=l();if(t&&t.mark){var e=s+n;t.clearMarks(e+"Begin"),t.mark(e+"Begin")}}},t.timeEnd=function(n){if(c.getSampleRum()){var t=l();if(t&&t.mark){var e=s+n,r=t.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+n);t.clearMarks(e+"End"),t.mark(e+"End");var o=n+"Time",a=t.getEntriesByName(e+"End")[0].startTime-r[0].startTime;u.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*a)/1e3}})}}},t.setMark=function(n,t,e){if(c.getSampleRum()){var r=l();if(r&&r.mark){var o=s+n;r.mark(o),u.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:n,data:{startTime:Math.round(1e3*t)/1e3,duration:Math.round(1e3*e)/1e3}})}}},t.now=function(){var n=l();return n?n.now():o.now()}},2188:function(n,t,e){var i=e(9576),r=e(2678);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(n){window.location.replace(n)},t.setGlobal=function(n,t){window[n]=t},t.getGlobal=function(n){return window[n]},t.getGlobalByPath=function(n){for(var t=n.split("."),e=window;t.length;)try{e=e[t.shift()]}catch(i){throw r.error("Attempted to access nonexistent property. Path ",n),new Error("Attempted to access nonexistent property. Path "+n)}return e},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(n){alert(n)},t.setTimeout=function(n,t){return setTimeout((function(){try{n()}catch(t){r.warn("Deferred function threw error:",t)}}),t)},t.setInterval=function(n,t){return setInterval((function(){try{n()}catch(t){r.warn("Polling function threw error:",t)}}),t)}},2474:function(n,t,e){var i=e(9576);t.create=function(n,t,e,r){return i.extend({category:"other"},r,{id:n,apiName:t,eventType:e})}},4658:function(n,t,e){var i=e(9576),r=e(1243),o=e(2805),u=e(7989),a=e(4041),c=e(4797),s=e(2678),f=a.get("stores/event_emitter");t.on=function(n){return n.token||(n.token=r.generate()),c.dispatch(o.ADD_EMITTER_HANDLER,n),n.token},t.off=function(n){c.dispatch(o.REMOVE_EMITTER_HANDLER,{token:n})},t.emit=function(n,t,e){var r=f.getHandlers(n,t);i.each(r,(function(i){try{i.handler.call({$di:a},n)}catch(r){!e&&i.emitErrors?(s.error("Error in handler for event:",n,r),u.emitError(r,null,t)):s.warn("Suppressed error in handler for event:",n,r)}}))}},9799:function(n,t,e){var i=e(4658);t.on=function(n){return n.publicOnly=!0,i.on(n)},t.off=i.off,t.emit=function(n){i.emit(n)}},9404:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(3491),di=__webpack_require__(4041),Logger=__webpack_require__(2678),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(n,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return n.apply(void 0,t)}catch(e){throw Logger.warn("Error applying function",n,"with args:",t,e),new ExecError(e)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}},4797:function(n,t,e){var i=e(8394);n.exports=i.create()},1722:function(n,t,e){var i=e(9576);t.description=function(n){var t=!!n.name?'"'+n.name+'" ':"",e=function(n){return i.map(n.weightDistributions,"entityId")}(n).join(", ");return t+"(id "+n.id+", campaigns: "+e+")"}},4604:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),u=e(4041),a=e(4797),c=u.get("stores/global"),s=u.get("stores/session");t.recordLayerDecision=function(n,t,e){return a.dispatch(r.RECORD_LAYER_DECISION,{layerId:n,decision:e,decisionTicket:t,sessionId:s.getSessionId(),activationId:c.getActivationId(),timestamp:o.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:t.pageId}),e},t.relatedAudienceIds=function(n){var t={},e=["and","or","not"];return i.each(n.experiments,(function(n){i.each(i.flattenDeep(n.audienceIds),(function(n){i.includes(e,n)||(t[n]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(n){var t=n.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:2e3},t.description=function(n){return(n.name?'"'+n.name+'" ':"")+"("+n.id+")"},t.createSingle=function(n,t,e){return{id:n,policy:"single_experiment",holdback:0,experiments:[{id:t||"",variations:[{id:e||"",actions:[]}],audienceIds:[]}],integrationStringVersion:1}},t.createLayerState=function(n,t,e,i){return void 0===i&&(i=!1),{layerId:n,decision:{layerId:n,experimentId:t,variationId:e,isLayerHoldback:i||!1},decisionTicket:{audienceIds:[]}}},t.getIntegrationTypes=function(n){return i.keys(i.reduce(i.keys(n.integrationSettings),(function(n,t){return i.isNaN(Number(t))||(t="custom"),n[t]=1,n}),{}))}},4364:function(n,t,e){var i=e(9576);t.y=function(n,t){if(!t)return 0;for(var e=t.toString().split("."),r=n.toString().split("."),o=0;o<e.length;o++){if(i.isUndefined(r[o]))return-1;if(isNaN(Number(r[o]))){if(r[o]!==e[o])return-1}else{if(Number(r[o])<Number(e[o]))return-1;if(Number(r[o])>Number(e[o]))return 1}}return 0}},6227:function(n,t,e){var i=e(9576),r=e(2676),o=e(2678),u="or",a="not";var c={};function s(n,t){var e;if(i.isArray(n)){var a,s;n[0]in c?(a=n[0],s=n.slice(1)):(a=u,s=n),o.groupCollapsed('Condition / Applying operator "'+a+'" with args',r.stringify(s));try{e=c[a](s,t),o.debug("Condition / Result:",e)}finally{o.groupEnd()}return e}return e=t(n),o.debug("Condition / Evaluated:",r.stringify(n),":",e),e}c["and"]=function(n,t){for(var e,r,o=0;o<n.length;o++){if(!1===(e=s(n[o],t)))return!1;i.isUndefined(e)&&(r=!0)}if(!r)return!0},c[u]=function(n,t){for(var e,r=!1,o=0;o<n.length;o++){if(!0===(e=s(n[o],t)))return!0;i.isUndefined(e)&&(r=!0)}if(!r)return!1},c[a]=function(n,t){if(1!==n.length)return!1;var e=s(n[0],t);return i.isUndefined(e)?void 0:!e},n.exports={evaluate:s}},7051:function(n,t,e){var i=e(9576),r=e(1284);function o(n){if((n=(n||"").toLowerCase())in c)return n;var t=i.keys(c);return i.find(t,(function(t){var e=c[t];return i.includes(e,n)}))||"unknown"}function u(n,t,e){return t||("unknown"===n?"unknown":e?"mobile":"desktop_laptop")}t.parseUA=function(n){var t=new r(n),e=t.getBrowser(),i=t.getOS(),c=t.getDevice(),f=(i.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=a(c.type,l,f);return{browser:{id:o(e.name),version:e.version},platform:{name:f,version:i.version},device:{model:s[c.model]||"unknown",type:u(l,c.type,d),isMobile:d}}};var a=function(n,t,e){if(i.includes(["mobile","tablet"],n)||i.includes(["opera mini"],t))return!0;return!!i.includes(["android","blackberry","ios","windows phone"],e)},c={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},s={iPhone:"iphone",iPad:"ipad"}},5179:function(n,t,e){var i=e(9576);function r(){this.B={}}r.prototype.register=function(n,t){if(1!==arguments.length){if(this.B[n])throw new Error("Module already registered for: "+n);this.B[n]=t}else{var e=this;i.each(n,(function(n,t){e.register(t,n)}))}},r.prototype.get=function(n){return this.B[n]},r.prototype.getModuleKeys=function(){var n=this.B;return i.keys(n)},r.prototype.evaluate=function(n){var t=n.length,e=n.slice(0,t-1),r=n[t-1];if("function"!=typeof r)throw new Error("Evaluate must take a function as last element in array");var o=i.map(e,i.bind(this.get,this));return r.apply(null,o)},r.prototype.reset=function(){this.B={}},n.exports={create:function(){return new r}}},4811:function(n,t,e){var i=e(9576);function r(n,t,e){this.H=n,this.W=t,this.Y=0,this.K=!1,this.X={},i.extend(this,e),this.J={},this.initialize&&this.initialize()}r.prototype.Z=function(n,t){var e=this.X[n];e&&"function"==typeof e&&e.call(this,t,n)},r.prototype.nn=function(){return i.cloneDeep(this.J)},r.prototype.on=function(n,t){this.X[n]=i.bind(t,this)},r.prototype.observe=function(n){return this.W.tn(this.H,n)},r.prototype.emitChange=function(){this.K=!0,this.Y++},r.prototype.hasChanges=function(){return this.K},r.prototype.resetChange=function(){this.K=!1},r.prototype.getStateId=function(){return this.Y},r.prototype.en=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},n.exports=r},8394:function(n,t,e){var i=e(9576),r=e(4811);function o(n){n=n||{},this.rn={},this.un={},this.an=0,this.cn=[],this.sn=[]}function u(n,t){return function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}}o.prototype.registerStores=function(n){i.forOwn(n,i.bind((function(n,t){this.rn[t]=new r(t,this,n)}),this))},o.prototype.getStore=function(n){return this.rn[n]},o.prototype.dispatch=function(n,t){this.dispatchId++,i.each(this.cn,i.bind((function(e){e.call(this,n,t)}),this)),i.forOwn(this.rn,(function(e){e.Z(n,t)})),i.each(this.sn,i.bind((function(e){e.call(this,n,t)}),this)),i.forOwn(this.rn,i.bind((function(n,t){n.hasChanges()&&this.un[t]&&(n.resetChange(),i.each(this.un[t],(function(t){t(n)})))}),this))},o.prototype.reset=function(){this.un={},i.forOwn(this.rn,(function(n,t){n.en()}))},o.prototype.getState=function(){var n={};return i.forOwn(this.rn,(function(t,e){n[e]=t.nn()})),n},o.prototype.onPreAction=function(n){var t=this.cn;return t.push(n),u(t,n)},o.prototype.onPostAction=function(n){var t=this.sn;return t.push(n),u(t,n)},o.prototype.tn=function(n,t){return this.un[n]||(this.un[n]=[]),this.un[n].push(t),u(this.un[n],t)},n.exports={create:function(n){return new o(n)}}},2676:function(n,t,e){var i=e(9576);function r(n){var t,e,r=[Array.prototype],o=[];i.each(r,(function(n){i.isUndefined(n.toJSON)||(o.push(n.toJSON),delete n.toJSON)}));try{t=n()}catch(u){e=u}finally{i.each(o,(function(n,t){r[t].toJSON=n}))}if(e)throw e;return t}t.stringify=function(){return r(i.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse},6061:function(n,t,e){var i=e(9576);t.hasMatch=function(n,t,e){var r=!i.isUndefined(e)&&null!==e,o=!i.isUndefined(n)&&null!==n;switch(t||(o?"exact":"exists")){case"exists":return r;case"exact":return r&&String(e)===n;case"substring":return r&&String(e).indexOf(n)>-1;case"regex":try{return!(!o||!r)&&new RegExp(n).test(String(e))}catch(f){}return!1;case"range":var u=n.split(":"),a=parseFloat(u[0]),c=parseFloat(u[1]),s=parseFloat(e);return s>=a&&s<=c;default:return!1}}},8398:function(n,t,e){n.exports=e(44)},147:function(n,t,e){var i=e(9576),r=e(2678);function o(n,t){this.ln=n,this.dn=t}o.prototype.hn=function(n){return[this.dn,n].join("$$")},o.prototype.vn=function(n){return n.replace(this.dn+"$$","")},o.prototype.setItem=function(n,t){try{this.ln.setItem(this.hn(n),t)}catch(e){r.warn("Failed to save",n,"to localStorage:",e)}},o.prototype.removeItem=function(n){this.ln.removeItem(this.hn(n))},o.prototype.getItem=function(n){var t=null;try{t=this.ln.getItem(this.hn(n))}catch(e){}return t},o.prototype.keys=function(){var n=i.keys(this.ln);return i.map(i.filter(n,i.bind((function(n){return i.includes(n,this.dn)}),this)),i.bind(this.vn,this))},o.prototype.allKeys=function(){return i.keys(this.ln)},o.prototype.allValues=function(){return i.values(this.ln)},n.exports={create:function(n,t){return new o(n,t)},mockStorage:{keys:function(){},getItem:function(n){},removeItem:function(n){},setItem:function(n,t){}}}},9328:function(n,t,e){var i=e(6954),r=e(4658),o=e(7174);t.createDOMChangedObserver=function(){var n=i.getDocumentElement(),t={type:"viewTrigger",name:"DOMChanged"},e=o.create((function(){r.emit(t,!0)}));o.observe(e,n,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}},1645:function(n,t,e){var i=e(9576),r=e(7989),o=e(8964),u=e(2676),a=e(4243).mM,c=e(2678),s=e(3455),f=e(4041).get("stores/pending_events"),l=o.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var n=f.getEventsString();a.setItem(l,n)}catch(t){c.warn("PendingEvents / Unable to set localStorage key, error was: ",t),r.emitInternalError(t)}},t.getPendingEvents=function(){try{return u.parse(a.getItem(l))}catch(n){return null}},t.retryPendingEvents=function(n){i.forOwn(n,(function(n,t){s.retryableRequest(n.data,t,n.retryCount)})),i.isEmpty(n)||c.log("Retried pending events: ",n)}},2376:function(n,t,e){var i=e(9576),r=e(2805),o=e(4041),u=e(8964),a=e(4658),c=e(4797);t.registerApiModule=function(n,t){i.isArray(t)&&(t=o.evaluate(t)),c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.apiModules,name:n,plugin:t})},t.registerDependency=function(n,t){o.get(n)||o.register(n,t)},t.registerVisitorProfileProvider=function(n){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.visitorProfileProviders,name:n.provides,plugin:n})},t.registerViewProvider=function(n){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.viewProviders,name:n.provides,plugin:n})},t.registerAudienceMatcher=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.audienceMatchers,name:n,plugin:t})},t.registerViewMatcher=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.viewMatchers,name:n,plugin:t})},t.registerAnalyticsTracker=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.analyticsTrackers,name:n,plugin:t})},t.registerViewTagLocator=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.viewTagLocators,name:n,plugin:t})},t.registerAudiencePlugin=function(n){n.dependencies&&i.each(n.dependencies,(function(n,e){t.registerDependency(e,n)}));var e,r,u="vendor."+n.vendor;e=i.isString(n.provider)?o.get(n.provider)(n.vendor):i.isFunction(n.provider)?n.provider(n.vendor):i.cloneDeep(n.provider),t.registerVisitorProfileProvider(i.extend(e,{provides:u})),r=i.isString(n.matcher)?o.get(n.matcher):n.matcher;var a={fieldsNeeded:[u],match:function(n,t){return r(n[u],t)}};t.registerAudienceMatcher(u,a)},t.registerWidget=function(n){return i.isArray(n)&&(n=o.evaluate(n)),{showToken:a.on({filter:{type:"showWidget",name:n.widgetId},handler:n.showFn}),hideToken:a.on({filter:{type:"hideWidget",name:n.widgetId},handler:n.hideFn})}},t.registerChangeApplier=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.changeAppliers,name:n,plugin:t})},t.registerDecider=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.deciders,name:n,plugin:t})},t.registerEventImplementation=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.eventImplementations,name:n,plugin:t})},t.registerViewTrigger=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.viewTriggers,name:n,plugin:t})}},9978:function(n,t,e){var i=e(9576),r=e(4041),o=":",u="holdback",a="treatment",c="",s=e(2678),f=e(2119);function l(n){return n.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}t.formatNamesAndIdsForAnalytics=function(n,t,e,o){var u={layer:n.name||c,experiment:t.name||c,variation:e.name||c};o&&(u=i.mapValues(u,l));var a,s=!n.integrationStringVersion||1===n.integrationStringVersion;if(u.experiment===c&&s)if(a=t.audienceIds,!i.isEmpty(a)&&i.includes(["and","or","not"],a[0]))u.experiment="Exp";else{var f=r.get("stores/audience_data");u.experiment=function(n,t){return i.isEmpty(t)?"everyone_else":i.reduce(t,(function(t,e){var i=n.get(e);return i?t+l(i.name?i.name:i.id)+",":t}),"").slice(0,-1)}(f,t.audienceIds)}return{names:u,idStrings:{layer:"("+l(n.id)+")",experiment:"("+l(t.id)+")",variation:"("+l(e.id)+")"}}},t.combineAndTruncateIdAndName=function(n,t,e){var i=e-t.length;if(i<0&&(s.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),n=c),n===c)return t;if(n.length>i){var r=Math.min(n.length,i);return(n=n.substring(0,r))+t}return n+" "+t},t.generateAnalyticsString=function(n,e,r,c,s,l){return n.integrationStringVersion&&2===n.integrationStringVersion?function(n,e,r,a,c,s){if(f.isSingleExperimentPolicy(n.policy)&&a)return;var l=!f.isSingleExperimentPolicy(n.policy)&&a,d=t.formatNamesAndIdsForAnalytics(n,e,r,s),h=[d.names.experiment,d.names.variation],v=[d.idStrings.experiment,d.idStrings.variation];f.isSingleExperimentPolicy(n.policy)||(h.unshift(d.names.layer),v.unshift(d.idStrings.layer));var p=i.reduce(v,(function(n,t){return n+t.length}),0),g=h.length-1+(l?1:0),m=p+g*o.length;if(l&&(m+=u.length),m>c)throw new Error("The analytics string size is too low to send the entity IDs.");for(var y=c-m,b=h.length,_=[],w=h.length-1;w>=0;w--){var E=h[w],I=Math.min(E.length,Math.floor(y/b));y-=I,b--,_.unshift(E.substring(0,I))}var T=i.map(_,(function(n,t){return n+v[t]}));return l&&T.push(u),T.join(o)}(n,e,r,c,s,l):function(n,e,r,c,s,l){var d=c?u:a,h=3*o.length,v=t.formatNamesAndIdsForAnalytics(n,e,r,l),p=v.names,g=v.idStrings,m=i.reduce(g,(function(n,t){return n+t.length}),0);if(m+h+d.length>s)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var y=s-m-h-d.length,b={};b.variation=Math.min(p.variation.length,Math.floor(y/3)),y-=b.variation,b.experiment=Math.min(p.experiment.length,Math.floor(y/2)),y-=b.experiment,b.layer=y;var _={};i.each(p,(function(n,t){_[t]=n.substring(0,b[t])}));var w=[];return f.isSingleExperimentPolicy(n.policy)||w.push(_.layer+g.layer),(w=w.concat([_.experiment+g.experiment,_.variation+g.variation,d])).join(o)}(n,e,r,c,s,l)}},859:function(n,t,e){var i=e(9576);n.exports=function(n,t){n=function(n){var t=n.split("?");if(t[1]){var e=t[1].split("#"),r=e[0],u=e[1],a=r.split("&"),c=[];return i.each(a,(function(n){0!==n.indexOf(o)&&c.push(n)})),t[1]="",c.length>0&&(t[1]="?"+c.join("&")),u&&(t[1]+="#"+u),t.join("")}return n}(n);var e=t.value;switch(t.match){case"exact":return(n=c(n))===c(e);case"regex":try{return Boolean(n.match(e))}catch(r){}return!1;case"simple":return(n=a(n))===(e=a(e));case"substring":return n=c(n,!0),e=c(e,!0),-1!==n.indexOf(e);default:return!1}};var r=["www."],o="optimizely_",u=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function a(n){return c(function(n){var t=n.indexOf("?");return-1!==t&&(n=n.substring(0,t)),-1!==(t=n.indexOf("#"))&&(n=n.substring(0,t)),n}(n))}function c(n,t){n=(n=n.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var e=u.slice(0);t||(e=e.concat(r));for(var i=e.length,o=0;o<i;o++){var a=e[o],c=new RegExp("^"+a);n=n.replace(c,"")}return n}},1361:function(n,t,e){var i=e(9576),r=e(9196).getFieldValue,o=e(6061);n.exports=function(n,t){var e=r(n,t.name.split("."));return i.isArray(e)?i.some(e,i.partial(o.hasMatch,t.value,t.match)):o.hasMatch(t.value,t.match,e)}},6217:function(n,t,e){var i=e(3113),r=e(5554),o="cdn3";t.getIP=function(){return i.makeAsyncRequest(o,u).then((function(n){return n.ip}))},t.getIPDerivedGeolocation=function(){return i.makeAsyncRequest(o,u).then((function(n){return n.location}))};function u(){r.addScriptAsync("//cdn3.optimizely.com/js/geo4.js")}},2034:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694),u=e(2678);n.exports={initialize:function(){this.J={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.pn),this.on(r.ACTION_EXECUTED,this.gn),this.on(r.SET_CHANGE_APPLIER,this.mn),this.on(r.REMOVE_ACTION_STATE,this.yn)},pn:function(n){var t=this;i.isEmpty(n.data.layers)||(i.each(n.data.layers,(function(n){var e;if(n.changes){var r="layerId:"+n.id;e={id:r,layerId:n.id,changeSet:n.changes,type:"layer"},o.deepFreeze(e),t.J.actions[r]=e}i.each(n.experiments,(function(r){if(r.changes){var u="experimentId:"+r.id;e={id:u,layerId:n.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},o.deepFreeze(e),t.J.actions[u]=e}i.each(r.variations,(function(u){i.each(u.actions,(function(i){var a=i.pageId||i.viewId,c=r.id+":"+u.id+":"+a;e={id:c,layerId:n.id,experimentId:r.id,variationId:u.id,pageId:a,changeSet:i.changes,type:"variation"},o.deepFreeze(e),t.J.actions[c]=e}))}))}))})),this.emitChange())},gn:function(n){var t=n.actionId;i.isUndefined(t)||this.J.actionState[t]||(this.J.actionState[t]={})},mn:function(n){var t=n.actionId,e=n.changeId;this.J.actionState[t]?this.J.actionState[t][e]=n.changeApplier:u.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},yn:function(n){delete this.J.actionState[n.actionId]},get:function(n){return o.safeReference(this.J.actions[n])},getActionState:function(n){return o.safeReference(this.J.actionState[n])},getByChangeId:function(n){return i.find(this.J.actions,{changeSet:[{id:n}]})},getAllActionIdsByPageId:function(n){return i.map(i.filter(this.J.actions,{pageId:n}),"id")},getChangeApplier:function(n,t){var e=this.J.actionState[t];if(e)return e[n]},getExperimentVariationActions:function(n,t){return o.safeReference(i.filter(this.J.actions,{experimentId:n,variationId:t}))},getLayerActions:function(n){return o.safeReference(i.filter(this.J.actions,{id:"layerId:"+n}))},getExperimentActions:function(n){return o.safeReference(i.filter(this.J.actions,{id:"experimentId:"+n}))},getAll:function(){return o.safeReference(i.values(this.J.actions))}}},3685:function(n,t,e){var i=e(2805);n.exports={initialize:function(){this.J={},this.on(i.REGISTER_ASYNC_DEFERRED,this.bn),this.on(i.RESOLVE_DEFERRED,this._n),this.on(i.REJECT_DEFERRED,this.wn)},getRequest:function(n){return this.J[n]},getPromise:function(n){var t=this.getRequest(n);if(t)return t.promise},bn:function(n){this.J[n.source]={promise:n.promise,resolver:n.resolver,rejecter:n.rejecter}},_n:function(n){var t=this.getRequest(n.source);if(!t)throw new Error("No request registered for source: "+n.source);t.resolver(n.resolveWith)},wn:function(n){var t=this.getRequest(n.source);if(!t)throw new Error("No request registered for source: "+n.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+n.source);t.rejecter(n.rejectWith)}}},6330:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);function u(n,t){return t||(t={}),n?(i.each(n,(function(n){if(!i.isString(n)){if(i.isObject(n)){var e=n.type,r=n.name||"_";t[e]||(t[e]={}),t[e][r]=!0}i.isArray(n)&&u(n,t)}})),t):t}n.exports={initialize:function(){this.J={audiences:{},featuresNeeded:{}},this.on(r.DATA_LOADED,this.pn)},pn:function(n){i.isEmpty(n.data.audiences)||(i.each(n.data.audiences,i.bind((function(n){o.deepFreeze(n),i.merge(this.J.featuresNeeded,u(n.conditions)),this.J.audiences[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.J.audiences))},getFeaturesNeeded:function(n){return o.safeReference(this.J.featuresNeeded[n]||{})},getAudiencesMap:function(){return o.safeReference(this.J.audiences)},get:function(n){return o.safeReference(this.J.audiences[n])},getAudienceName:function(n){return i.find(i.values(this.J.audiences),{id:n}).name||"Aud "+n}}},5065:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.J={},this.on(r.ADD_CHANGE,this.En),this.on(r.DATA_LOADED,this.pn)},getChange:function(n){return this.J[n]},pn:function(n){i.isEmpty(n.data.changes)||i.each(n.data.changes,i.bind(this.En,this))},En:function(n){o.deepFreeze(n),this.J[n.id]=n,this.emitChange()}}},1390:function(n,t,e){var i=e(9576),r=e(2805),o=e(8964);n.exports={initialize:function(){this.J={},i.each(o.Lifecycle,i.bind((function(n){this.J[n]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.In),this.on(r.CLEAR_CLEANUP_FN,this.Tn)},getCleanupFns:function(n){return i.cloneDeep(this.J[n])},In:function(n){this.J[n.lifecycle].push(n.cleanupFn),this.emitChange()},Tn:function(n){var t=this.J[n.lifecycle];if(n.cleanupFn){var e=t.indexOf(n.cleanupFn);e>-1&&(t.splice(e,1),this.emitChange())}else this.J[n.lifecycle]=[],this.emitChange()}}},3642:function(n,t,e){var i=e(2805),r=e(5172);n.exports={initialize:function(){this.J={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.Sn),this.on(i.SET_CLIENT_VERSION,this.An)},getClientName:function(){return this.J.name},getClientVersion:function(){return this.J.version},Sn:function(n){n&&(this.J.name=n),this.emitChange()},An:function(n){n&&(this.J.version=n),this.emitChange()}}},9381:function(n,t,e){var i=e(2805);n.exports={initialize:function(){this.J={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.kn),this.on(i.SET_COOKIE_AGE,this.xn),this.on(i.SET_COOKIE_AUTO_REFRESH,this.Rn)},getCurrentDomain:function(){return this.J.currentDomain},getDefaultAgeInSeconds:function(){return this.J.defaultAgeSeconds},getAutoRefresh:function(){return this.J.autoRefresh},kn:function(n){this.J.currentDomain=n,this.emitChange()},xn:function(n){this.J.defaultAgeSeconds=n,this.emitChange()},Rn:function(n){this.J.autoRefresh=n,this.emitChange()}}},4253:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.pn)},pn:function(n){i.isEmpty(n.data.dimensions)||(i.each(n.data.dimensions,i.bind((function(n){o.deepFreeze(n),this.J[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.J))},getById:function(n){return o.safeReference(this.J[n])},getByApiName:function(n){return o.safeReference(i.find(i.values(this.J),{apiName:n}))}}},4710:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.J={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.Nn)},getAll:function(){return i.cloneDeep(this.J)},conflictInObservingChanges:function(){return!this.J.mutationObserverAPISupported},isDisabled:function(){return this.J.disabled},isEditor:function(){return this.J.isEditor},clientHasAlreadyInitialized:function(){return this.J.alreadyInitialized},getForceAudienceIds:function(){return this.J.forceAudienceIds},getForceVariationIds:function(){return this.J.forceVariationIds},getPreviewLayerIds:function(){return this.J.previewLayerIds},getProjectToken:function(){return this.J.projectToken},getForceTracking:function(){return this.J.forceTracking},shouldActivate:function(){return!this.J.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.J.isPreview},shouldBootstrapDataForEditor:function(){return this.J.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.J.isPreview||this.J.isLegacyPreview||!this.getProjectToken()||this.J.isEditor)},shouldBailForDesktopApp:function(){return!this.J.isEditor&&this.J.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.J.isSlave&&!this.J.isEditor&&this.J.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.J.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.J.shouldOptOut},shouldSendTrackingData:function(){return!this.J.trackingDisabled&&(!!this.J.forceTracking||!this.J.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.J.isSlave},isRunningInDesktopApp:function(){return this.J.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.J.isRunningInV2Editor},Nn:function(n){i.extend(this.J,n),this.emitChange()}}},9610:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.pn)},getAll:function(){return o.safeReference(i.values(this.J))},getEventsMap:function(){return o.safeReference(this.J)},get:function(n){return o.safeReference(this.J[n])},getByApiName:function(n){return o.safeReference(i.find(i.values(this.J),{apiName:n}))},getByPageId:function(n){return o.safeReference(i.filter(this.J,{pageId:n}))},pn:function(n){i.isEmpty(n.data.events)||(i.each(n.data.events,i.bind((function(n){n.pageId||(n.pageId=n.viewId),o.deepFreeze(n),this.J[n.id]=n}),this)),this.emitChange())}}},1592:function(n,t,e){var i=e(9576),r=e(2805);function o(n){var t=[];return n&&i.isObject(n)?(n.type&&t.push(n.type),t.push("|"),n.type&&n.name&&t.push(n.name),t.join("")):"|"}n.exports={initialize:function(){this.J={handlers:{}},this.on(r.ADD_EMITTER_HANDLER,this.Dn),this.on(r.REMOVE_EMITTER_HANDLER,this.Cn)},getHandlers:function(n,t){var e=[null,{type:n.type},{type:n.type,name:n.name}],r=[];return i.each(e,i.bind((function(n){var t=o(n),e=this.J.handlers[t];e&&(r=r.concat(e))}),this)),t&&(r=i.filter(r,(function(n){return!n.publicOnly}))),r},Dn:function(n){var t=o(n.filter);this.J.handlers[t]||(this.J.handlers[t]=[]),this.J.handlers[t].push({handler:n.handler,token:n.token,publicOnly:!!n.publicOnly,emitErrors:!!n.emitErrors}),this.emitChange()},Cn:function(n){var t=!1,e=n.token;i.forOwn(this.J.handlers,i.bind((function(n,r){var o=i.filter(n,(function(n){return n.token!==e}));o.length!==n.length&&(t=!0,this.J.handlers[r]=o)}),this)),t&&this.emitChange()}}},1312:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.J={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.On),this.on(r.ACTIVATE,this.Pn),this.on(r.RECORD_GLOBAL_DECISION,this.Mn),this.on(r.SET_DOMCONTENTLOADED,this.Ln)},getRevision:function(){return this.J.revision},getGlobalHoldbackThreshold:function(){return this.J.holdback},getProjectId:function(){return this.J.projectId},getSnippetId:function(){return this.J.snippetId},getAccountId:function(){return this.J.accountId},getNamespace:function(){return this.J.namespace},getActivationId:function(){return this.J.activationId},getActivationTimestamp:function(){return this.J.activationTimestamp},getAnonymizeIP:function(){return this.J.anonymizeIP},isGlobalHoldback:function(){return!!this.J.isGlobalHoldback},getListTargetingKeys:function(){return this.J.listTargetingKeys.slice()},getDCPServiceId:function(){return this.J.dcpServiceId},getDCPKeyfieldLocators:function(){return this.J.dcpKeyfieldLocators},getRecommenderServices:function(){return this.J.recommenderServices},getProjectJS:function(){return this.J.projectJS},getPlugins:function(){return this.J.plugins},getExperimental:function(){return o.safeReference(this.J.experimental)},domContentLoadedHasFired:function(){return this.J.domContentLoaded},Pn:function(n){this.J.activationId=n.activationId,this.J.activationTimestamp=n.activationTimestamp,this.J.isGlobalHoldback=null},Mn:function(n){var t=n.isGlobalHoldback;if(null!==this.J.isGlobalHoldback&&this.J.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.J.isGlobalHoldback=t,this.emitChange()},On:function(n){var t=i.pick(n.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){i.extend(this.J,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},t),this.emitChange()}},Ln:function(){this.J.domContentLoaded=!0,this.emitChange()}}},3881:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.pn)},pn:function(n){i.isEmpty(n.data.groups)||(i.each(n.data.groups,i.bind((function(n){o.deepFreeze(n),this.J[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.J))},getGroupsMap:function(){return o.safeReference(this.J)},get:function(n){return o.safeReference(this.J[n])}}},6662:function(n,t,e){var i=e(9576),r=e(2805),o=e(2188);n.exports={initialize:function(){this.J={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.Fn),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.jn)},getOriginalPushState:function(){return this.J.originalPushState},getOriginalReplaceState:function(){return this.J.originalReplaceState},Fn:function(){this.J.originalPushState||(this.J.originalPushState=i.bind(o.getGlobal("history").pushState,o.getGlobal("history")))},jn:function(){this.J.originalReplaceState||(this.J.originalReplaceState=i.bind(o.getGlobal("history").replaceState,o.getGlobal("history")))}}},9935:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.pn),this.on(r.SET_INTEGRATION_SETTINGS,this.Un)},pn:function(n){i.isEmpty(n.data.integrationSettings)||(i.each(n.data.integrationSettings,i.bind((function(n){this.J[n.id]=n}),this)),this.emitChange())},Un:function(n){var t=this.J[n.id];t?i.extend(t,n):this.J[n.id]=n},getAll:function(){return i.cloneDeep(i.values(this.J))},get:function(n){return i.cloneDeep(this.J[n])},getReference:function(n){return this.J[n]}}},1037:function(n,t,e){var i=e(9576),r=e(2805),o=e(2678),u="*";n.exports={initialize:function(){this.J={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.Vn),this.on(r.RECORD_LAYER_DECISION,this.zn),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.qn)},getLayerState:function(n,t){if(this.J[n]){var e=this.J[n];if(i.keys(e).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(e,{pageId:t})):i.cloneDeep(e["*"])}},getLayerStates:function(n){var t=[];for(var e in this.J)i.forEach(this.J[e],(function(e){(i.isUndefined(n)||e.namespace===n)&&t.push(i.cloneDeep(e))}));return t},getLayerStatesForAnalytics:function(){var n=[];for(var t in this.J)i.forEach(this.J[t],(function(t){n.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return n},Vn:function(n){n.merge||(this.J={}),i.each(n.layerStates,i.bind((function(n){var t=n.layerId;n.pageId||(n.pageId=n.viewId);var e=n.pageId||u,r=this.J[t];if(i.isUndefined(r))this.J[t]={},this.J[t][e]=n;else{var o=r[e];(!o||n.decisionTimestamp>(o.decisionTimestamp||0))&&(this.J[t][e]=n)}}),this)),this.emitChange()},zn:function(n){var t={layerId:n.layerId,revision:n.revision,namespace:n.namespace,pageId:n.pageId,decisionTicket:n.decisionTicket,decision:n.decision,decisionActivationId:n.activationId,decisionTimestamp:n.timestamp,decisionEventId:null},e=this.J[n.layerId]||{};n.pageId?(delete e["*"],e[n.pageId]=t):(e={})["*"]=t,this.J[n.layerId]=e,this.emitChange()},qn:function(n){var t=n.layerId,e=n.pageId||u;this.J[t]?this.J[t][e]?(this.J[t][e].decisionEventId=n.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",t)}}},8336:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694),u=e(2119);n.exports={initialize:function(){this.J={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.pn)},pn:function(n){if(!i.isEmpty(n.data.layers)){var t=this;i.each(n.data.layers,(function(n){i.each(n.experiments,(function(e){n.pageIds||(n.pageIds=n.viewIds),e.campaignName||u.isSingleExperimentPolicy(n.policy)?u.isSingleExperimentPolicy(n.policy)&&n.groupId&&(e.groupId=n.groupId):e.campaignName=n.name,i.each(e.variations,(function(n){i.each(n.actions,(function(n){n.pageId||(n.pageId=n.viewId)})),t.J.variations[n.id]=n})),t.J.experiments[e.id]=e})),o.deepFreeze(n),t.J.layers[n.id]=n})),this.emitChange()}},getAll:function(){return o.safeReference(i.values(this.J.layers))},getCampaignsMap:function(){return o.safeReference(this.J.layers)},getExperimentsMap:function(){return o.safeReference(this.J.experiments)},getVariationsMap:function(){return o.safeReference(this.J.variations)},getCount:function(){return i.keys(this.J.layers).length},getAllByPageIds:function(n){return o.safeReference(i.filter(this.J.layers,(function(t){return i.some(n,i.partial(i.includes,t.pageIds))})))},get:function(n){return o.safeReference(this.J.layers[n])},getLayerByExperimentId:function(n){var t=i.find(this.J.layers,(function(t){return i.find(t.experiments,{id:n})}));return o.safeReference(t)},getExperimentByVariationId:function(n){var t;return i.some(this.J.layers,(function(e){return i.some(e.experiments,(function(e){return i.find(e.variations,{id:n})&&(t=e),t})),t})),o.safeReference(t)}}},8842:function(n,t,e){var i=e(2805);n.exports={initialize:function(){this.J={logs:[]},this.on(i.LOG,this.Bn)},getLogs:function(){return this.J.logs},Bn:function(n){this.J.logs.push(n),this.emitChange()},nn:function(){return this.J.logs.slice()}}},8648:function(n,t,e){var i=e(2805),r=e(3694);n.exports={initialize:function(){this.J={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Gn),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Hn)},get:function(){return r.safeReference(this.J.data)},hasTracked:function(){return this.J.hasTracked},Gn:function(n){r.deepFreeze(n),this.J.data=n,this.J.hasTracked=!1,this.emitChange()},Hn:function(){this.J.hasTracked=!0}}},9990:function(n,t,e){var i=e(9576),r=e(2805),o=e(2676);n.exports={initialize:function(){this.J={},this.on(r.SET_PENDING_EVENT,this.$n),this.on(r.REMOVE_PENDING_EVENT,this.Wn),this.on(r.LOAD_PENDING_EVENTS,this.Yn)},getEvents:function(){return this.J},getEventsString:function(){return o.stringify(this.J)},$n:function(n){i.keys(this.J).length>=1e3&&this.Kn();var t=n.id,e=n.retryCount;this.J[t]&&this.J[t].retryCount===e||(this.J[t]={id:t,timeStamp:n.timeStamp,data:n.data,retryCount:e},this.emitChange())},Wn:function(n){delete this.J[n.id],this.emitChange()},Yn:function(n){this.J=n.events,this.Kn(),this.emitChange()},Kn:function(){for(var n=i.sortBy(this.J,"timeStamp"),t=0;t<=n.length-1e3;t++)delete this.J[n[t].id];this.emitChange()}}},9441:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.J={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.Gn)},isExpectingRedirect:function(){return i.isString(this.J.layerId)},getLayerId:function(){return this.J.layerId},Gn:function(n){this.isExpectingRedirect()||(this.J.layerId=n.layerId,this.emitChange())}}},1053:function(n,t,e){var i=e(9576),r=e(2805),o=e(8964);n.exports={initialize:function(){this.J={},this.J[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Xn)},Xn:function(n){i.isUndefined(this.J[o.PerformanceData.performance_marks][n.name])&&(this.J[o.PerformanceData.performance_marks][n.name]=[]),this.J[o.PerformanceData.performance_marks][n.name].push(n.data),this.emitChange()},getMarks:function(){return i.mapValues(this.J[o.PerformanceData.performance_marks],(function(n){return i.map(n,(function(n){return[n.startTime,n.duration]}))}))},getDurationsFor:function(n){return i.reduce(n,i.bind((function(n,t){var e=this.J[o.PerformanceData.performance_marks][t];return e&&(n[t]=Math.round(i.reduce(e,(function(n,t){return n+t.duration}),0))),n}),this),{})}}},4808:function(n,t,e){var i=e(9576),r=e(2805),o=e(8964),u=e(2678);n.exports={initialize:function(){this.J=i.mapValues(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Jn)},Jn:function(n){var t=n.type,e=n.name,i=n.plugin;if(!t||!e)throw new Error("Missing information needed to register plugins: "+t+":"+e);if(!this.J[t])throw new Error("Invalid plugin type specified: "+t);this.J[t][e]=i,u.debug("Plugin Store: Registering Plugin :",n)},getAllPlugins:function(n){if(!n)return this.J;if(this.J[n])return this.J[n];throw new Error("Invalid plugin type: "+n)},getPlugin:function(n,t){if(!t||!n)throw new Error("Missing plugin parameters");return this.getAllPlugins(n)[t]||null}}},6743:function(n,t,e){var i=e(9576),r=e(2805),o=e(9196);n.exports={initialize:function(){this.J={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.Qn)},getPendingAttributeValue:function(n){return n=i.isArray(n)?n.concat("pending"):[n,"pending"],o.getFieldValue(this.J,n)},Qn:function(n){o.setFieldValue(this.J,n.key,{pending:n.pending}),this.emitChange()}}},1349:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.J={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.Zn),this.on(r.RECORD_API_USAGE,this.nt),this.on(r.INITIALIZE_CHANGE_METRICS,this.tt),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.et),this.on(r.RECORD_AUDIENCE_USAGE,this.it),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.rt),this.on(r.RECORD_CHANGE_OVERHEATED,this.ot),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.ut),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.ct),this.on(r.RECORD_INTEGRATION_USAGE,this.st),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.ft),this.on(r.RECORD_LAYER_POLICY_USAGE,this.dt),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.ht),this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.vt),this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE,this.yt),this.on(r.RECORD_VISITOR_ID_ERROR,this.bt),this.on(r.RECORD_STICKY_BUCKETING_FEATURE,this._t)},Zn:function(n){i.merge(this.J,n),this.emitChange()},nt:function(n){this.J.apis[n.methodName]||(this.J.apis[n.methodName]=0),this.J.apis[n.methodName]++,this.emitChange()},tt:function(){i.isUndefined(this.J.data.extras.changeMacrotaskRate)&&(this.J.data.extras.changeMacrotaskRate=0),i.isUndefined(this.J.data.extras.numOverheatedChanges)&&(this.J.data.extras.numOverheatedChanges=0)},rt:function(n){i.isUndefined(this.J.data.extras.changeMacrotaskRate)&&(this.J.data.extras.changeMacrotaskRate=0),n.changeMacrotaskRate>this.J.data.extras.changeMacrotaskRate&&(this.J.data.extras.changeMacrotaskRate=n.changeMacrotaskRate),this.emitChange()},ot:function(){i.isUndefined(this.J.data.extras.numOverheatedChanges)&&(this.J.data.extras.numOverheatedChanges=0),this.J.data.extras.numOverheatedChanges++,this.emitChange()},ct:function(n){this.J.DOMObservation[n.counterName]||(this.J.DOMObservation[n.counterName]=0),this.J.DOMObservation[n.counterName]++,this.emitChange()},wt:function(n,t,e){i.isUndefined(this.J.featuresNeeded[n])&&(this.J.featuresNeeded[n]={});var r=this.J.featuresNeeded[n];i.each(t,(function(n){r[n]||(r[n]={}),r[n][e]||(r[n][e]=!0)}))},st:function(n){this.wt("integrations",n.integrations,n.layerId)},ut:function(n){this.wt("changeTypes",n.changeTypes,n.layerId)},et:function(n){this.wt("activationTypes",[n.activationType],n.entityId),this.emitChange()},ht:function(n){this.wt("viewFeatures",n.featuresUsed,n.entityId),this.emitChange()},ft:function(n){this.wt("layerFeatures",[n.feature],n.entityId),this.emitChange()},dt:function(n){this.wt("policy",[n.policy],n.layerId),this.emitChange()},it:function(n){this.wt("audiences",n.audienceTypes,n.layerId),this.emitChange()},vt:function(n){this.J.data.extras.viewsInitiallyActivatedCount=n.viewsInitiallyActivatedCount,this.emitChange()},yt:function(n){this.wt("visitorIdLocatorType",[n.visitorIdLocatorType],n.entityId),this.emitChange()},bt:function(n){this.J.data.extras.errorCustomVisitorId=n.isError,this.emitChange()},_t:function(n){this.wt("stickyBucketing",[n.feature],n.id)},getSampleRum:function(){return this.J.inRumSample},getRumId:function(){return this.J.id},getRumHost:function(){return this.J.RumHost},getApiData:function(){return this.J.apis},getDOMObservationData:function(){return this.J.DOMObservation},getRumData:function(){return i.cloneDeep(this.J.data)},getScriptSrc:function(){return this.J.src},getFeaturesNeededData:function(){var n=this.J.featuresNeeded,t={};return i.forOwn(n,(function(n,e){var r=i.keys(n);i.isEmpty(r)||(t[e]={}),i.forEach(r,(function(r){t[e][r]=i.keys(n[r]).length}))})),t}}},8654:function(n,t,e){var i=e(2805);n.exports={initialize:function(){this.J={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.Et)},Et:function(n){if(!n.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.J.natives=n.sandboxedFunctions,this.J.initialized=!0,this.emitChange()},getAll:function(){return this.J.natives},get:function(n){if(!n)throw new Error("Missing name parameter");return this.J.natives[n]||null},isInitialized:function(){return this.J.initialized}}},2043:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),u=e(1243);n.exports={initialize:function(){this.J={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.It),this.on(r.LOAD_SESSION_STATE,this.Tt)},getState:function(){return i.cloneDeep(this.J)},getSessionId:function(){return this.J.sessionId},Tt:function(n){this.J.sessionId=n.sessionId,this.J.lastSessionTimestamp=n.lastSessionTimestamp,this.emitChange()},It:function(){var n=o.now(),t=this.J.lastSessionTimestamp;(!this.J.sessionId||n-t>18e5)&&(this.J.sessionId=u.generate()),this.J.lastSessionTimestamp=n,this.emitChange()}}},3697:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.St(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.At),this.on(r.REGISTER_PREVIOUS_BATCH,this.kt),this.on(r.REGISTER_TRACKER_VISITOR,this.xt),this.on(r.REGISTER_TRACKER_EVENT,this.Rt),this.on(r.REGISTER_TRACKER_DECISION,this.Nt),this.on(r.RESET_TRACKER_EVENTS,this.Dt),this.on(r.RESET_TRACKER_STORE,this.St),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.Ct),this.on(r.SET_TRACKER_POLLING,this.Ot),this.on(r.SET_TRACKER_BATCHING,this.Pt),this.on(r.SET_TRACKER_SEND_EVENTS,this.Mt),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Lt),this.on(r.SET_TRACKER_DIRTY,this.Ft),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.jt)},getPersistableState:function(){return this.J.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.J.data,decisions:this.J.decisions,decisionEvents:this.J.decisionEvents,previousBatches:this.J.previousBatches}:{}:null},Lt:function(n){i.isEmpty(this.J.data)||i.isEmpty(n.data)||(this.At(),this.J.previousBatches.push(this.getEventBatch())),this.J.data=n.data||{},this.J.decisions=n.decisions||[],this.J.decisionEvents=n.decisionEvents||[],i.isEmpty(this.J.previousBatches)||i.isEmpty(n.previousBatches)?this.J.previousBatches=n.previousBatches||[]:this.J.previousBatches=this.J.previousBatches.concat(n.previousBatches),this.emitChange()},Ft:function(n){this.J.isDirty=n,this.emitChange()},Rt:function(n){var t=this.Ut();(i.isEmpty(t.snapshots)||!i.isEmpty(this.J.decisionEvents))&&this.Vt(),this.zt().events.push(n.event),this.J.decisions=n.decisions,this.Ft(!0)},Nt:function(n){this.J.decisionEvents.push(n.decisionEvent),this.J.decisions=n.decisions,this.Ft(!0)},xt:function(n){i.isEmpty(this.J.data)?this.J.data=n.data:this.At(),this.J.data.visitors.push(n.visitor),this.J.decisions=n.decisions,this.J.decisionEvents=[],this.Ft(!0)},kt:function(n){this.J.previousBatches.push(n),this.Ft(!0)},St:function(){this.J={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Dt:function(){var n=this.Ut();this.J.data.visitors=[n],n.snapshots=[],this.Ft(!0)},Ct:function(){this.J.previousBatches=[],this.Ft(!0)},Ot:function(n){this.J.polling=n,this.emitChange()},Pt:function(n){this.J.shouldBatch=n,this.emitChange()},Mt:function(n){this.J.canSend=n,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.J.data)},getPreviousBatches:function(){return i.cloneDeep(this.J.previousBatches)},qt:function(){return this.J.decisionEvents.slice()},Bt:function(){this.J.decisionEvents=[]},Gt:function(){return this.J.decisions.slice()},isPolling:function(){return this.J.polling},shouldBatch:function(){return this.J.shouldBatch},zt:function(){return i.last(this.Ut().snapshots)},Ut:function(){return i.last(this.J.data.visitors)},Vt:function(){var n=this.qt();this.Ut().snapshots.push({decisions:this.Gt(),events:n}),this.Bt(),this.Ft(!0)},At:function(){this.J.decisionEvents.length>0&&this.Vt()},hasEventsToSend:function(){if(!i.isEmpty(this.J.decisionEvents))return!0;if(!i.isEmpty(this.J.data)&&i.some(this.J.data.visitors||[],(function(n){return n.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.J.previousBatches)},canSend:function(){return this.J.canSend},jt:function(n){var t=this.Ut();t&&(t.attributes=n.attributes)}}},2604:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.J={},this.on(r.SET_UA_DATA,this.pn)},pn:function(n){i.isEmpty(this.J)&&(this.J=n.data)},get:function(){return i.cloneDeep(this.J)}}},6963:function(n,t,e){var i=e(9576),r=e(2805),o=e(2678),u={globalTags:{},viewStates:{},shouldBatch:!1};n.exports={initialize:function(){this.J=i.cloneDeep(u),this.on(r.REGISTER_VIEWS,this.Ht),this.on(r.SET_VIEW_ACTIVE_STATE,this.$t),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Wt),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.Yt),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Kt),this.on(r.SET_GLOBAL_TAGS,this.Xt),this.on(r.RESET_VIEW_STATES,this.Jt),this.on(r.SET_VIEW_BATCHING,this.Pt)},getAll:function(){var n={};for(var t in this.J.viewStates)n[t]=this.getViewState(t);return n},shouldBatch:function(){return this.J.shouldBatch},getViewState:function(n){var t=i.cloneDeep(this.J.viewStates[n]),e=this.J.globalTags;return t.metadata=i.extend({},t.parsedMetadata,e,t.userSuppliedMetadata),t},getActiveViewTags:function(){var n=this.getActiveViewStates(),t=i.map(n,(function(n){return n.metadata})),e=[{}].concat(t);return i.extend.apply(i,e)},getActivationEventId:function(n){return this.J.viewStates[n]?this.J.viewStates[n].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.J.viewStates,i.bind((function(n,t,e){return this.isViewActive(e)&&n.push(this.getViewState(e)),n}),this),[])},isViewActive:function(n){var t=this.J.viewStates[n];return t||o.warn("No Page registered with id",n),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.J.globalTags)},Jt:function(){this.J.viewStates={},this.emitChange()},Ht:function(n){i.each(n.views,i.bind((function(n){var t=n.id;this.J.viewStates[t]={id:t,isActive:i.isBoolean(n.isActive)?n.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},$t:function(n){var t=n.view.id;if(!this.J.viewStates[t])throw new Error("No view exists with id "+t);this.J.viewStates[t].isActive=n.isActive,n.isActive?this.J.viewStates[t].activatedTimestamp=n.timestamp:(this.J.viewStates[t].parsedMetadata={},this.J.viewStates[t].userSuppliedMetadata={}),this.emitChange()},Wt:function(n){var t=n.pageId;if(!this.J.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.J.viewStates[t].parsedMetadata,n.metadata),this.emitChange()},Yt:function(n){var t=n.pageId;if(!this.J.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.J.viewStates[t].userSuppliedMetadata,n.metadata),this.emitChange()},Kt:function(n){var t=n.pageId;this.J.viewStates[t]&&(this.J.viewStates[t].activationEventId=n.eventData.eventId,this.emitChange())},Xt:function(n){i.extend(this.J.globalTags,n),this.emitChange()},Pt:function(n){this.J.shouldBatch=n,this.emitChange()}}},1522:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.J={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.pn)},getAll:function(){return o.safeReference(i.values(this.J.views))},getPagesMap:function(){return o.safeReference(this.J.views)},get:function(n){return o.safeReference(this.J.views[n])},getByApiName:function(n){return o.safeReference(this.J.apiNamesToViews[n])},apiNameToId:function(n){var t=this.J.apiNamesToViews[n];if(t)return t.id},idToApiName:function(n){var t=this.J.views[n];if(t)return t.apiName},getNumberOfPages:function(){return i.keys(this.J.views).length},getAllViewsForActivationType:function(n){return i.filter(this.J.views,{activationType:n})},pn:function(n){i.isEmpty(n.data.views)||(i.each(n.data.views,i.bind((function(n){o.deepFreeze(n),this.J.views[n.id]=n,this.J.apiNamesToViews[n.apiName]=n}),this)),this.emitChange())}}},9984:function(n,t,e){var i=e(9576),r=e(2805),o=e(9196);n.exports={initialize:function(){this.J={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Qt),this.on(r.SET_VISITOR_ATTRIBUTES,this.Zt),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.ne)},getVisitorProfile:function(){return this.J.profile},getVisitorProfileMetadata:function(){return this.J.metadata},getAttribute:function(n){var t=this.J.profile;return i.cloneDeep(o.getFieldValue(t,n))},getAttributeMetadata:function(n){return i.cloneDeep(this.J.metadata[n])},getVisitorIdFromAPI:function(){return this.J.visitorId},ne:function(n){this.J.profile=n.profile,this.J.metadata=n.metadata,this.emitChange()},Zt:function(n){i.each(n.attributes,i.bind((function(n){var t=n.key;o.setFieldValue(this.J.profile,t,n.value),n.metadata&&i.forOwn(n.metadata,i.bind((function(n,e){o.setFieldValue(this.J.metadata,t.concat(e),n)}),this))}),this)),this.emitChange()},Qt:function(n){this.J.visitorId=n,this.emitChange()}}},4375:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.te)},getCustomBehavioralAttributes:function(){return i.filter(this.J,(function(n){return!!n.rule_json}))},getVisitorAttribute:function(n){var t=i.values(this.J);if(n.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(n.datasourceId)})),n.attributeName&&n.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(n.attributeId){var e=this.J[n.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+n.attributeId);return e}if(n.attributeName){var r=i.filter(t,{name:n.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+n.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+n.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},te:function(n){i.isEmpty(n.data.visitorAttributes)||(i.each(n.data.visitorAttributes,i.bind((function(n){this.J[n.id]=n}),this)),this.emitChange())}}},1217:function(n,t,e){var i=e(9576),r=e(2805),o=e(2676);n.exports={initialize:function(){this.J={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.ee),this.on(r.MERGE_VARIATION_ID_MAP,this.re),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.oe),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.ue)},getVariationIdMap:function(){return i.cloneDeep(this.J.variationIdMap)},getVariationIdMapString:function(){return o.stringify(this.J.variationIdMap)},ee:function(n){var t=this.J.variationIdMap[n.layerId]||{};t[n.experimentId]!==n.variationId&&(t[n.experimentId]=n.variationId,this.J.variationIdMap[n.layerId]=t,this.emitChange())},re:function(n){var t=this.getVariationIdMap(),e=n.variationIdMap;i.each(t||{},(function(n,t){e[t]?i.assign(e[t],n):e[t]=n})),this.J.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.J.preferredLayerMap)},getPreferredLayerMapString:function(){return o.stringify(this.J.preferredLayerMap)},getPreferredLayerId:function(n){return this.J.preferredLayerMap[n]},oe:function(n){this.J.preferredLayerMap[n.groupId]!==n.layerId&&(this.J.preferredLayerMap[n.groupId]=n.layerId,this.emitChange())},ue:function(n){var t=this.getPreferredLayerMap(),e=n.preferredLayerMap;i.assign(e,t),this.J.preferredLayerMap=e,this.emitChange()}}},5847:function(n,t,e){e(9576);var i=e(2805);e(5093).j;n.exports={initialize:function(){this.J={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.pn),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.ae),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.ce)},getEvents:function(){return this.J.events},getForeignEvents:function(){return this.J.foreignEvents},getForeignEventQueues:function(){return this.J.foreignEventQueues},pn:function(n){this.J.events=n,this.emitChange()},ae:function(n){this.J.foreignEvents[n.key]=n.value},ce:function(n){this.J.foreignEventQueues[n.key]=n.value}}},9721:function(n,t,e){var i=e(2805);n.exports={initialize:function(){this.J={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.se)},getBaseMap:function(){return this.J.baseMap},getEventQueue:function(){return this.J.eventQueue},getLastEvent:function(){return this.J.lastEvent},getCleared:function(){return this.J.cleared},getInitialized:function(){return this.J.initialized},se:function(n){this.J[n.key]=n.value}}},7022:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.J={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.pn),this.on(r.DATA_LOADED,this.fe)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.J.randomId},getVisitorIdLocator:function(){return this.J.visitorIdLocator},pn:function(n){i.extend(this.J,n),this.emitChange()},fe:function(n){i.isEmpty(n.data.visitorIdLocator)||(this.J.visitorIdLocator=n.data.visitorIdLocator,this.emitChange())}}},5417:function(n,t,e){var i=e(9576),r=e(2678),o=e(2805);n.exports={initialize:function(){this.J={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.le),this.on(o.XDOMAIN_ADD_FRAME,this.de),this.on(o.XDOMAIN_SET_MESSAGE,this.he),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.ve),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.pe),this.on(o.XDOMAIN_SET_DISABLED,this.ge)},getMessages:function(){return i.cloneDeep(this.J.messages)},getOffset:function(){return 0===this.J.messages.length?0:this.J.messages[0].data.id},getNextMessageId:function(){return this.J.messages.length+this.getOffset()},getMessageById:function(n){return this.J.messages[n-this.getOffset()]},getSubscribers:function(){return this.J.subscribers},getFrames:function(){return this.J.frames},getNextFrameId:function(){return this.J.frames.length},getDefaultFrame:function(){return this.J.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.J.canonicalOrigins)},isDisabled:function(){return this.J.disabled},le:function(n){this.J.defaultFrame=n},de:function(n){this.J.frames.push(n)},he:function(n){for(this.J.messages[n.messageId-this.getOffset()]=n.message;this.J.messages.length>1e3;){var t=this.J.messages.shift();r.debug("XDomainStorage: Cleared old message: "+t.data.id)}},ve:function(n){this.J.subscribers.push(n.subscriber)},pe:function(n){this.J.canonicalOrigins=n.canonicalOrigins},ge:function(n){this.J.disabled=n.disabled}}},7010:function(n,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},34:function(n,t,e){var i=e(6639).U;t.Error=i("TagError")},1295:function(n,t,e){var i=e(8964).PluginTypes,r=e(4041).get("stores/plugins");t.getTagValue=function(n){var e=r.getPlugin(i.viewTagLocators,n.locatorType);if(!e)throw new t.Error("No locator registered for tag locatorType: "+n.locatorType);return e(n)},t.enums=e(7010),t.Error=e(34).Error},634:function(n,t,e){var i=e(7010),r=e(34).Error;function o(n,t,e){var i=new RegExp("^\\s*([+-]?)\\s*((\\d+)((?:\\"+t+"\\d{3})+)?)(?:\\"+e+"(\\d+))?\\s*$"),r=n.match(i);if(!r)return NaN;var o=r[3],u=r[4],a=r[5];if(u&&!a&&o.length>3&&4===u.length||!u&&o.length<=3&&a&&3===a.length)return NaN;var c=r[1],s=r[2].replace(new RegExp("\\"+t,"g"),"");return Number(c+s+(a?"."+a:""))}function u(n){var t=o(n=String(n),",",".");return isNaN(t)&&(t=o(n,".",",")),t}n.exports=function(n,t){var e;switch(n){case i.valueType.STRING:return t?String(t):"";case i.valueType.NUMBER:if(e=u(t),isNaN(e))throw new r('"'+t+'" cannot be parsed as a number');return e;case i.valueType.CURRENCY:if(e=u(e=String(t).replace(/^[^\d\,\.\-]*/g,"").replace(/[^\d\,\.\-]*$/g,"")),isNaN(e))throw new r('"'+t+'" cannot be parsed as currency');return Math.round(100*e)}throw new r("Unknown ViewTag type: "+n)}},3113:function(n,t,e){var i=e(2805),r=e(4797),o=e(8398).Promise,u=e(4041).get("stores/async_request");t.makeAsyncRequest=function(n,t){var e,a,c=u.getPromise(n);if(c)return c;var s=new o((function(n,t){e=n,a=t}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:n,promise:s,resolver:e,rejecter:a}),t&&t(),s},t.resolveRequest=function(n,t){r.dispatch(i.RESOLVE_DEFERRED,{source:n,resolveWith:t})},t.rejectRequest=function(n,t){r.dispatch(i.REJECT_DEFERRED,{source:n,rejectWith:t})}},4005:function(n,t,e){var i=e(7918),r=e(2188);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}},8718:function(n,t,e){var i=e(9576),r=e(6639).U,o=e(3792),u=e(6954),a=e(2188),c=e(2805),s=e(4041),f=e(4797),l=s.get("stores/cookie_options"),d=t.SetError=r("CookieSetError"),h=t.MismatchError=r("CookieMismatchError");t.getAll=function(n){var e,r,o,a,c;i.isUndefined(n)&&(n=!0),e=u.getCookieString().split(/\s*;\s*/);var s={};for(o=0;o<e.length;o++)if((a=(r=e[o]).indexOf("="))>0&&void 0===s[c=t.safeDecodeURIComponent(r.substring(0,a))]){var f=r.substring(a+1);n&&(f=t.safeDecodeURIComponent(f)),s[c]=f}return s},t.safeDecodeURIComponent=function(n){try{return decodeURIComponent(n)}catch(t){return n}},t.get=function(n,e){return t.getAll(e)[n]},t.set=function(n,e,r,s){r=i.extend({encodeValue:!0},r),!1!==s&&(s=!0);var g=[];if(i.isUndefined(r.domain)){var m=l.getCurrentDomain();m||(m=function(n,e){!1!==e&&(e=!0);for(var r,o,u=n.hostname.split("."),a=[],s=null,l=u.length-1;l>=0;l--)if(a.unshift(u[l]),r=a.join("."),!i.includes(v,r)){o={domain:e?"."+r:r};try{t.set(p,Math.random().toString(),o),t.remove(p,o),s=o.domain;break}catch(d){}}return f.dispatch(c.SET_COOKIE_DOMAIN,s),s}(a.getLocation(),!0)),r.domain=m}if(r.domain&&g.push("domain="+r.domain),i.isUndefined(r.path)&&(r.path="/"),r.path&&g.push("path="+r.path),i.isUndefined(r.expires)){var y=i.isUndefined(r.maxAge)?l.getDefaultAgeInSeconds():r.maxAge;r.expires=new Date(o.now()+1e3*y)}if(i.isUndefined(r.expires)||g.push("expires="+r.expires.toUTCString()),r.secure&&g.push("secure"),u.setCookie(n+"="+(r.encodeValue?encodeURIComponent(e):e)+";"+g.join(";")),s){var b=r.encodeValue,_=t.get(n,b);if(_!==e){if(!_)throw new d('Failed to set cookie "'+n+'"');throw new h('Expected "'+e+'" for "'+n+'", got "'+_+'"')}}},t.remove=function(n,e){for(var r=a.getLocation().hostname.split(".");r.length>0;)t.set(n,null,i.extend({},e,{domain:"."+r.join("."),expires:new Date(0)}),!1),r.shift()};var v=["optimizely.test"],p="optimizelyDomainTestCookie"},6639:function(n,t,e){var i=e(3491),r=i("InternalError");t.G=r,t.U=function(n){return i(n,r)}},6530:function(n,t,e){var i=e(9576),r=e(8398).Promise;n.exports=function(){var n,t,e=new r((function(e,i){n=e,t=i}));return e.resolve=function(){return n.apply(null,i.toArray(arguments)),e},e.reject=function(){return t.apply(null,i.toArray(arguments)),e},e}},3694:function(n,t,e){var i=e(9576);t.deepFreeze=function(n){},t.safeReference=function(n){return i.cloneDeep(n)}},9196:function(n,t,e){var i=e(9576);t.getFieldValue=function(n,t){i.isArray(t)||(t=[t]);for(var e=n,r=0;r<t.length;r++){var o=t[r];if(!i.isObject(e)||!e.hasOwnProperty(o))return;e=e[o]}return e},t.setFieldValue=function(n,t,e){if(!i.isArray(t)||i.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=n,o=0;o<t.length-1;o++){var u=t[o];i.isObject(r[u])||(r[u]={}),r=r[u]}r[t[t.length-1]]=e}},2678:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),u=e(8964),a=e(4797),c=e(2676);function s(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}s.prototype.me=function(){return!i.isNull(this.logLevel)},s.prototype.setLogLevel=function(n){var t=this.ye(n);null===t?console.error("Unknown log level: "+n):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},s.prototype.setLogMatcher=function(n){i.isString(n)?this.logMatcher=n:this.logMatcher="",this.logGroup=0},s.prototype.shouldLog=function(n){return this.me()&&this.logLevel>=n},s.prototype.matchesLogMessage=function(n,t){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===n?this.logGroup++:"GROUPEND"===n&&this.logGroup--,!0;var r=i.some(t,(function(n){if(!i.isString(n))try{n=c.stringify(n)}catch(t){}return i.isString(n)&&i.includes(n,e)}));return r&&"GROUPSTART"===n&&this.logGroup++,r},s.prototype.storeLog=function(n,t){var e={logLevel:n,logMessage:t};a.dispatch(r.LOG,e)},s.prototype.flush=function(){var n=e(4041).get("stores/log");this.logGroup=0;var t=n.getLogs();i.each(t,i.bind((function(n){this.be(n.logLevel,n.logMessage,!0)}),this))},s.prototype.be=function(n,t,e){var r,o=n;if(console)switch(n){case"GROUPSTART":r=console.groupCollapsed,o=u.LogLevel.DEBUG;break;case"GROUPEND":r=console.groupEnd,o=u.LogLevel.DEBUG;break;case u.LogLevel.ERROR:r=console.error;break;case u.LogLevel.WARN:r=console.warn;break;case u.LogLevel.DEBUG:r=console.debug;break;default:r=console.log}try{e||this.me()&&!this.shouldLog(o)||(i.isArray(t)&&i.isString(t[0])&&(t=this._e(t)),this.storeLog(n,t)),r&&this.shouldLog(o)&&this.matchesLogMessage(n,t)&&r.apply(console,t)}catch(a){console&&(console.error?console.error(a):console.log(a))}},s.prototype.debug=function(){this.be(u.LogLevel.DEBUG,[].slice.call(arguments))},s.prototype.log=function(){this.be(u.LogLevel.INFO,[].slice.call(arguments))},s.prototype.logAlways=function(){var n=this._e([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,n),this.storeLog(u.LogLevel.INFO,n)},s.prototype.warn=function(){this.be(u.LogLevel.WARN,[].slice.call(arguments))},s.prototype.error=function(n){var t=[].slice.call(arguments);1===t.length&&n.stack?(this.be(u.LogLevel.ERROR,[this.we(),n]),this.be(u.LogLevel.INFO,[n.stack])):this.be(u.LogLevel.ERROR,t)},s.prototype.groupCollapsed=function(){this.be("GROUPSTART",[].slice.call(arguments))},s.prototype.groupEnd=function(){this.be("GROUPEND",[].slice.call(arguments))},s.prototype._e=function(n){var t=this.we().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+n[0]].concat(n.slice(1))},s.prototype.we=function(){return this.timebase?o.now()-this.timebase:0},s.prototype.ye=function(n){return n&&("TRUE"===(n=n.toUpperCase())&&(n="INFO"),"FALSE"===n&&(n="OFF"),"ALL"===n&&(n="DEBUG"),!i.isUndefined(u.LogLevel[n]))?u.LogLevel[n]:null},n.exports=new s},3043:function(n,t,e){n.exports=e(7190)},2119:function(n,t){t.isSingleExperimentPolicy=function(n){return"single_experiment"===n||"multivariate"===n}},7984:function(n,t,e){var i=e(9576),r=e(8398).Promise,o=e(2188);t.pollFor=function(n,t,e){var u,a;return i.isFunction(e)?a=e:(u=e||100,a=function(){return--u<-1}),t=t||50,new r((function(e,i){!function r(){var u;if(!a()){try{var c=n();if(c)return e(c)}catch(s){u=s}return o.setTimeout(r,t)}i(u||new Error("Poll timed out"))}()}))}},1705:function(n,t,e){var i=e(9576),r=e(8398).Promise;t.firstToResolve=function(n){return new r((function(t){i.each(n,(function(n){r.resolve(n).then(t,(function(){}))}))}))}},7918:function(n,t,e){var i=e(9576),r=e(2188);t.getQueryParams=function(){var n=r.getLocationSearch()||"";if(0===n.indexOf("?")&&(n=n.substring(1)),0===n.length)return[];for(var t=n.split("&"),e=[],i=0;i<t.length;i++){var o="",u="",a=t[i].split("=");a.length>0&&(o=a[0]),a.length>1&&(u=a[1]),e.push([o,u])}return e},t.getQueryParamValue=function(n){for(var e=t.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===n)return e[i][1]},t.queryStringFromMap=function(n){return i.map(n,(function(n,t){return t+"="+n})).join("&")}},2522:function(n,t,e){var i=e(9576),r=e(2678),o=e(2188);function u(n){this.windowLength=n,this.count=0,this.listeners={},this.isIncrementingTick=!1}u.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(i.bind((function(){this.isIncrementingTick=!1}),this),0))},u.prototype.increment=function(){this.count+=1,i.forEach(this.listeners[String(this.count)],(function(n){n()})),o.setTimeout(i.bind(this.decrement,this),this.windowLength)},u.prototype.decrement=function(){this.count-=1,this.count<0&&(r.warn("Decremented down to negative count: ",this.count),this.count=0)},u.prototype.addListener=function(n,t){this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(t)},n.exports=u},74:function(n,t,e){var i=e(9576),r=e(4041).get("stores/observed_redirect");t.getReferrer=function(){var n=r.get();return n?n.referrer:null},t.getExperimentAndVariation=function(){var n=r.get();return n&&i.isString(n.variationId)?i.pick(n,["experimentId","variationId"]):null}},2591:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),u=e(4041),a=e(6954),c=e(8964),s=e(4797),f=e(2678),l=u.get("stores/sandbox"),d=e(2188);t.shouldSandbox=function(){return!1},t.get=function(n){if(!n)throw new Error("Name is required");if(t.shouldSandbox()){l.isInitialized()||h();var e=l.get(n);if(e)return e}return d.getGlobal(n)};var h=function(){try{var n="optimizely_"+o.now(),t=a.createElement("iframe");t.name=n,t.style.display="none",a.appendToHead(t);var e=t.contentWindow,u=t.contentDocument;u.write("<script><\/script>"),u.close();var l=i.mapValues(c.SandboxedFunctions,(function(n){return e[n]}));s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l}),t.parentNode.removeChild(t)}catch(d){f.warn("Unable to create a sandbox: ",d)}}},5554:function(n,t,e){var i=e(6954),r=e(2678),o=e(3455);t.addScriptAsync=function(n,t){var e=i.querySelector("head"),o=i.createElement("script");o.type="text/javascript",o.async=!0,o.src=n,t&&(o.onload=t),e.insertBefore(o,e.firstChild),r.debug("Asynchronously requesting "+n)},t.addScriptSync=function(n,e){try{var u="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==n.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+n);i.write('<script id="'+u+'" src="'+n+'"><\/script>');var a=i.querySelector("#"+u);if(!a)throw new Error("DocumentEnv.write failed to append script");a.onload=e,a.onerror=function(i){r.warn("Failed to load script ("+n+") synchronously:",i),t.addScriptAsync(n,e)}}catch(c){r.debug("DocumentEnv.write failed for "+n+": "+c.message);return o.request({url:n,async:!1,contentType:"text/plain",success:function(n){new Function(n.responseText)(),e&&e()}})["catch"]((function(i){r.error("Failed to load "+n+" via synchronous XHR: "+i.message),t.addScriptAsync(n,e)}))}}},9418:function(n,t,e){var i=e(8398).Promise,r=e(2188);t.makeTimeoutPromise=function(n){return new i((function(t,e){r.setTimeout((function(){e(new Error("Timed out after "+n+" ms"))}),n)}))}},769:function(n,t,e){var i=e(9576),r=e(7051),o=e(2188),u=e(2805),a=e(4041),c=e(4797),s=a.get("stores/ua_data");t.get=function(){var n=s.get();return i.isEmpty(n)&&(n=r.parseUA(o.getUserAgent()),c.dispatch(u.SET_UA_DATA,{data:n})),n}},6724:function(n,t){t.guessDomain=function(n,t){if(!n)return"";try{return t?n.match(/:\/\/(.[^/]+)/)[1]:n.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(e){return""}}},7581:function(n,t,e){var i=e(9576),r=e(8398).Promise,o=e(2805),u=e(4041),a=e(4797),c=e(7989),s=e(6639).U,f=e(3792),l=e(6954),d=e(2676),h=e(7984),v=e(1685),p=e(2188),g=e(2678),m=u.get("stores/xdomain"),y=t.Error=s("XDomainStorageError");function b(n){var t;if(i.find(m.getFrames(),{origin:n.origin})){try{t=d.parse(n.data)}catch(u){return void g.debug("XDomain","Ignoring malformed message event:",n)}if("ERROR"===t.type)a.dispatch(o.XDOMAIN_SET_DISABLED,{disabled:!0}),c.emitInternalError(new y("Xdomain Error: "+t.response));else if("SYNC"===t.type)i.each(m.getSubscribers(),(function(n){n(t.response.key,t.response.value)}));else{var e=m.getMessageById(t.id);if(!e){if(g.warn("XDomain","No stored message found for ID",t.id),i.isNumber(t.id)){var r=m.getNextMessageId();t.id>=r?c.emitInternalError(new y("Message ID is greater than expected maximum ID ("+t.id+">"+r+")")):t.id<0?c.emitInternalError(new y("Message ID is < 0: "+t.id)):c.emitInternalError(new y("No stored message found for message ID: "+t.id))}else c.emitInternalError(new y("Message ID is not a number: "+t.id));return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",t.id);e.resolver(t.response),a.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:{data:{id:t.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:f.now()}})}}else g.debug("XDomain","No frame found for origin: "+n.origin)}function _(n,t){return t||(t=m.getDefaultFrame()),new r((function(e){var r={data:i.extend({},n,{id:m.getNextMessageId()}),resolver:e};t?m.isDisabled()||w(r,t):a.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:r.data.id,message:r})}))}function w(n,t){var e=n.data;a.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:n.data.id,message:i.extend({},n,{startTime:f.now()})}),t.target.postMessage(d.stringify(e),t.origin)}t.setItem=function(n,t,e){return _({type:"PUT",key:n,value:t},e)},t.getItem=function(n,t){return _({type:"GET",key:n},t)},t.fetchAll=function(n){return _({type:"GETALL"},n)},t.deleteData=function(n,t){return _({type:"DELETE",visitorId:n},t)},t.subscribe=function(n){a.dispatch(o.XDOMAIN_ADD_SUBSCRIBER,{subscriber:n})},t.loadIframe=function(n,t){return new r((function(e){var i=l.createElement("iframe");i.src=n+t,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:m.getNextFrameId(),target:i.contentWindow,origin:n,path:t};a.dispatch(o.XDOMAIN_ADD_FRAME,r),e(r)},l.appendTo(l.querySelector("body"),i)}))},t.getXDomainUserId=function(n,t){var e,r={},o=i.keys(n);return i.each(t,(function(n){r[n]=[],i.each(o,(function(t){var o=v.getUserIdFromKey(t,n);!e&&o&&(e=o),o&&!i.includes(r[n],o)&&r[n].push(o)}))})),g.debug("XDomain: Found userIds:",r),e},t.load=function(n,e){p.addEventListener("message",b);return h.pollFor((function(){return!!l.querySelector("body")})).then((function(){return t.loadIframe(n,e)})).then((function(n){a.dispatch(o.XDOMAIN_SET_DEFAULT_FRAME,n),m.isDisabled()||i.each(m.getMessages(),(function(t){t.startTime||w(t,n)}))}))}},3455:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),u=e(4797),a=e(2676),c=e(2678),s=e(8398).Promise,f=e(2591);t.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},t.request=function(n){return n=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},n),new s((function(e,r){if(!t.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){n.success&&n.success(o),e(o)},o.onerror=function(){n.error&&n.error(o),r(o)},i.isObject(n.data)&&(n.data=a.stringify(n.data)),o.open(n.method,n.url,n.async),n.withCredentials&&(o.withCredentials=n.withCredentials),o.setRequestHeader("Content-Type",n.contentType),i.isObject(n.headers)&&i.forEach(n.headers,(function(n,t){o.setRequestHeader(t,n)})),o.send(n.data)}))},t.retryableRequest=function(n,e,a,f){if(!e)return s.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return s.reject(new Error("CORS is not supported."));i.isUndefined(f)&&(f=3),i.isUndefined(a)&&(a=0);var l={id:e,timeStamp:o.now(),data:n,retryCount:a};return u.dispatch(r.SET_PENDING_EVENT,l),c.debug("Sending event ",e),t.request(n).then((function(n){return u.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),n}),(function(n){throw l.retryCount>=f?(u.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),c.warn("Event ",l," could not be sent after ",f," attempts.")):(l.retryCount++,u.dispatch(r.SET_PENDING_EVENT,l),c.debug("Event ",l," failed to send, with error ",n," It will be retried ",f-a," times.")),n}))},t.sendBeacon=t.request},9840:function(n,t,e){var i=e(9576),r=e(2805),o=e(2438),u=e(6227),a=e(3792),c=e(4041),s=e(8964),f=e(1372),l=e(4797),d=e(2678),h=e(1295),v=c.get("stores/event_data"),p=c.get("stores/plugins"),g=c.get("stores/rum"),m=c.get("stores/view"),y=c.get("stores/view_data");function b(n,t){i.forEach(n,(function(n){if(n.eventType!==f.CUSTOM){var e=p.getPlugin(s.PluginTypes.eventImplementations,n.eventType);e?t?e.attach(n):e.detach(n):d.warn("No implementation found for event type:",n.eventType,"needed for event:",n)}}))}t.parseViewTags=function(n){var e=t.evaluateViewTags(n);t.setParsedViewTags(n.id,e)},t.updateAllViewTags=function(){var n=m.getActiveViewStates();i.each(n,(function(n){var e=y.get(n.id);t.parseViewTags(e)}))},t.evaluateViewTags=function(n){return n.tags?i.reduce(n.tags,(function(n,t){try{n[t.apiName]=h.getTagValue(t)}catch(r){e=r,(null!=(i=h.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",t,r):d.error(r)}var e,i;return n}),{}):{}},t.createViewTicket=function(){var n={};return i.each(p.getAllPlugins(s.PluginTypes.viewProviders),(function(t){n[t.provides]=c.evaluate(t.getter)})),n},t.registerViews=function(n){l.dispatch(r.REGISTER_VIEWS,{views:n})},t.activateViaAPI=function(n,e){e&&t.setUserSuppliedViewTags(n.id,e),t.activateMultiple([n],e)},t.getViewsAndActivate=function(n){var e=y.getAllViewsForActivationType(n);t.activateMultiple(e)},t.activateMultiple=function(n,e){var u=[];return i.each(n,(function(n){var a=m.getViewState(n.id),c=t.createViewTicket();if(a.isActive)if(n.deactivationEnabled)try{t.hasValidStaticConditions(n,c)||t.deactivate(n)}catch(h){d.error("Page / Error evaluating whether to deactivate page ",t.description(n),h)}else d.log("Not activating Page, already active ",t.description(n));else{try{if(!t.hasValidStaticConditions(n,c))return i.isBoolean(a.isActive)||t.setViewActiveState(n,!1),void d.log("Page / Failed to match page conditions for "+t.description(n),n.staticConditions)}catch(h){return i.isBoolean(a.isActive)||t.setViewActiveState(n,!1),void d.error("Page / Error evaluating whether to activate page ",t.description(n),h)}if(u.push(n),t.setViewActiveState(n,!0),d.log("Activated Page",t.description(n)),o.emitViewActivated({view:n,metadata:e}),g.getSampleRum()){var f=n.activationType||s.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:f,entityId:n.id})}b(v.getByPageId(n.id),!0)}})),i.isEmpty(u)||o.emitViewsActivated({views:u}),u},t.deactivate=function(n){m.getViewState(n.id).isActive?(t.setViewActiveState(n,!1),d.log("Deactivated Page",t.description(n)),o.emitPageDeactivated({page:n}),b(v.getByPageId(n.id),!1)):d.log("Not deactivating Page, already inactive ",t.description(n))},t.setViewActiveState=function(n,t){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:n,timestamp:a.now(),isActive:t})},t.setGlobalTags=function(n){l.dispatch(r.SET_GLOBAL_TAGS,n)},t.setParsedViewTags=function(n,t){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:n,metadata:t})},t.setUserSuppliedViewTags=function(n,t){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:n,metadata:t})},t.hasValidStaticConditions=function(n,t){var e={};if(i.isEmpty(n.staticConditions))return!0;var o=p.getAllPlugins(s.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",n.staticConditions),d.debug("Matching to current value:",t);var a=u.evaluate(n.staticConditions,(function(n){var i=n.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[n.type]||(e[n.type]=!0)),r.match(t,n)}));return d.groupEnd(),g.getSampleRum()&&a&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:i.keys(e),entityId:n.id}),a},t.description=function(n){return'"'+n.name+'" ('+n.id+")"},t.isActivationTypeImmediate=function(n){return n===s.ViewActivationTypes.immediate||!n},t.shouldTriggerImmediately=function(n){return n===s.ViewActivationTypes.DOMChanged||n===s.ViewActivationTypes.URLChanged||n===s.ViewActivationTypes.immediate||!n},t.create=function(n,t){return{id:n,apiName:t,category:"other"}},t.createState=function(n){return{id:n,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},1685:function(n,t,e){var i=e(9576),r=e(4797),o=e(2805),u=e(5434),a=e(9314),c=e(8718),s=e(3792),f=e(4041),l=e(8964),d=e(2676),h=e(9196),v=e(4243).mM,p=e(2678),g=e(8398).Promise,m=e(7918),y=e(8964).VisitorStorageKeys,b=e(2188),_=f.get("stores/cookie_options"),w=f.get("stores/global"),E=f.get("stores/layer"),I=f.get("stores/plugins"),T=f.get("stores/rum"),S=f.get("stores/session"),A=f.get("stores/visitor_id"),k=f.get("stores/visitor_bucketing"),x=f.get("stores/visitor"),R=f.get("stores/provider_status");function N(n,t){var e=function(n,e){var i;t.attributionType&&(i=s.now()),r.dispatch(o.SET_VISITOR_ATTRIBUTES,{attributes:[{key:n,value:e,metadata:{lastModified:i}}]})};if(t.getter){var u=t.provides;if(i.isArray(u)||(u=[u]),!(t.isSticky&&!i.isUndefined(h.getFieldValue(n,u)))){var a;try{var c=f.evaluate(t.getter);i.isFunction(c)&&(c=c((function(){return h.getFieldValue(n,u)}),(function(n){e(u,n)}))),i.isUndefined(c)||(t.isAsync?(a=c.then((function(n){e(u,n)}),(function(n){p.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',n)})),r.dispatch(o.SET_VISITOR_ATTRIBUTE_PENDING,{key:u,pending:a})):e(u,c))}catch(l){p.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+l.message)}return a}}}function D(n){var t=P(n),e=v.getItem(t);return i.isString(e)&&(e=F(e)),e}function C(n){var t;if(n.layerId)t=n;else{var e=n;t={layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}return t}function O(n,t,e){try{var i=P(n);e||(t=d.stringify(t));try{v.setItem(i,t)}catch(r){throw p.warn("Visitor / Unable to set localStorage key, error was:",r),new Error("Unable to set localStorage")}}catch(r){p.warn("Unable to persist visitor data:",r.message)}}function P(n){var e=A.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,n].join("$$")}function M(n,e){if(!A.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(L(n)){var u=t.getStorageKeyFromKey(n);if(i.includes(y,u)){var c=P(u);if(!(n.indexOf(c)<=0)&&(e=F(e)))if(u===y.EVENT_QUEUE)r.dispatch(o.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:n,value:a.deserialize(e)});else if(u===y.EVENTS)r.dispatch(o.SET_FOREIGN_VISITOR_EVENTS,{key:n,value:a.deserialize(e)});else if(u===y.LAYER_STATES)r.dispatch(o.LOAD_PERSISTED_LAYER_STATES,{layerStates:i.map(e,C),merge:!0});else if(u===y.VARIATION_MAP)r.dispatch(o.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(u===y.VISITOR_PROFILE){var s=e;i.each(["custom"],(function(n){var t=I.getPlugin(l.PluginTypes.visitorProfileProviders,n);if(t){if(s.profile&&s.metadata){var e=function(n,t,e){var r=x.getAttribute(t),o=x.getAttributeMetadata(t),u=n.profile[t],a=n.metadata[t];if(i.isEmpty(r))return{data:u,metadata:a};var c={};return i.forOwn(u,(function(n,t){var r,u;o&&o[t]&&(r=o[t].lastModified),a&&a[t]&&(u=a[t].lastModified),(e===l.AttributionTypes.FIRST_TOUCH&&r>=u||e===l.AttributionTypes.LAST_TOUCH&&u>=r||i.isUndefined(r)&&u)&&(c.data=c.data||{},c.data[t]=n,u&&(c.metadata=c.metadata||{},c.metadata[t]=c.metadata[t]||{},c.metadata[t].lastModified=u))})),c}(s,n,t.attributionType);if(!i.isEmpty(e)){var u=[];i.forOwn(e.data,(function(t,i){var r=e.metadata[i],o={key:[n,i],value:t,metadata:r};u.push(o)})),r.dispatch(o.SET_VISITOR_ATTRIBUTES,{attributes:u})}}}else p.debug("Attribute type",n,"not used by any audiences")}))}}}}function L(n){return n.split("$$")[0].indexOf("://")>0}function F(n){try{return d.parse(n)}catch(t){return p.debug("Failed to parse: ",n,t),null}}t.getOrGenerateId=function(){return{randomId:t.getCurrentId()||"oeu"+s.now()+"r"+Math.random()}},t.getCurrentId=function(){var n=A.getVisitorIdLocator();return x.getVisitorIdFromAPI()||(n?function(n){var t,e=n.name;switch(n.type){case l.VisitorIdLocatorType.COOKIE:t=c.get(e);break;case l.VisitorIdLocatorType.JS_VARIABLE:t=b.getGlobalByPath(e);break;case l.VisitorIdLocatorType.LOCALSTORAGE:try{t=b.getGlobal("localStorage").getItem(e)}catch(a){throw new Error("Unable to read localStorage: "+a.toString())}break;case l.VisitorIdLocatorType.QUERY:t=m.getQueryParamValue(e)}try{if(!t)throw p.error("Visitor / Customer provided visitor id cannot be found. Type:",n.type," Name:",e),new Error("Failure to obtain visitor id from "+n.type);if(!i.isString(t)&&!i.isNumber(t))throw p.error("Visitor / Customer provided visitor id is not a string or number. Type:",n.type," Name:",e," Id Type:",(u=t)&&"undefined"!=typeof Symbol&&u.constructor===Symbol?"symbol":typeof u),new Error("Customer provided visitor id is not a string or number")}catch(s){throw T.getSampleRum()&&r.dispatch(o.RECORD_VISITOR_ID_ERROR,{isError:!0}),s}var u;T.getSampleRum()&&(r.dispatch(o.RECORD_VISITOR_ID_ERROR,{isError:!1}),r.dispatch(o.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:n.type,entityId:t}));return String(t)}(n):c.get(l.COOKIES.VISITOR_ID))},t.hasSomeData=function(){return v.keys().length>0},t.setId=function(n){var e,a,s=A.getBucketingId();r.dispatch(o.SET_VISITOR_ID,n),A.getBucketingId()!==s&&(!function(){!function(n,t){0;u.initializeStore(n,t)}(D(y.EVENTS)||[],D(y.EVENT_QUEUE)||[]);var n=(e=y.LAYER_STATES,a=A.getBucketingId(),c=[],s=new RegExp(a+"\\$\\$([^$]+?)\\$\\$"+e),i.each(v.keys(),(function(n){var t=n.match(s);if(t){var e={namespace:t[1],userId:a,item:F(v.getItem(n))};c.push(e)}})),c);var e,a,c,s;i.forEach(n,(function(n){n.item=i.map(n.item,C)})),d=n,h=[],i.each(d,(function(n){i.each(n.item,(function(t){t.namespace=n.namespace,h.push(t)}))})),g=h,r.dispatch(o.LOAD_PERSISTED_LAYER_STATES,{layerStates:i.filter(g,(function(n){return!!n.decision}))}),p=D(y.SESSION_STATE)||{},p=i.extend({lastSessionTimestamp:0,sessionId:null},p),r.dispatch(o.LOAD_SESSION_STATE,p),function(n){var t,e,u=I.getAllPlugins(l.PluginTypes.visitorProfileProviders),a=i.filter(u,(function(n){return i.isFunction(n.restorer)}));n.profile&&n.metadata?(t=n.profile,e=n.metadata):(t=n,e={});t=i.reduce(t,(function(n,t,e){var r=t,o=i.find(a,{provides:e});return o&&(r=o.restorer(t)),n[e]=r,n}),{}),r.dispatch(o.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:e})}(D(y.VISITOR_PROFILE)||{});var f=D(y.TRACKER_OPTIMIZELY);f&&(m=f,r.dispatch(o.SET_TRACKER_PERSISTABLE_STATE,m));var d,h;var p;var g;var m;t.loadForeignData(),t.removeLegacySessionStateCookies()}(),t.deleteOldLocalData());try{A.getVisitorIdLocator()||t.maybePersistVisitorId(n)}catch(f){if(p.error("Visitor / Unable to persist visitorId, disabling tracking"),r.dispatch(o.LOAD_DIRECTIVE,{trackingDisabled:!0}),e=f,null!=(a=c.MismatchError)&&"undefined"!=typeof Symbol&&a[Symbol.hasInstance]?a[Symbol.hasInstance](e):e instanceof a)throw p.error("Visitor / Cookie not set to correct value:",f),new Error("Cookie mismatch error while persisting visitorId");throw f}t.refreshSession()},t.getVariationIdMap=function(){return D(y.VARIATION_MAP)||{}},t.updateVariationIdMap=function(n,t,e){r.dispatch(o.UPDATE_VARIATION_ID_MAP,{layerId:n,experimentId:t,variationId:e})},t.persistVariationIdMap=function(){var n=k.getVariationIdMapString();O(y.VARIATION_MAP,n,!0)},t.getPreferredLayerMap=function(){return D(y.LAYER_MAP)||{}},t.updatePreferredLayerMap=function(n,t){r.dispatch(o.UPDATE_PREFERRED_LAYER_MAP,{groupId:n,layerId:t})},t.persistTrackerOptimizelyData=function(n){O(y.TRACKER_OPTIMIZELY,n)},t.refreshSession=function(){r.dispatch(o.REFRESH_SESSION)},t.populateEagerVisitorData=function(n,e){var r=i.filter(n,(function(n){return!n.isLazy}));return t.populateVisitorData(r,e)},t.populateLazyVisitorData=function(n,e){var r=i.filter(n,(function(n){return n.isLazy}));return t.populateVisitorData(r,e)},t.populateVisitorData=function(n,t){t=t||{};var e=i.partial(N,t),r=i(n).filter({isAsync:!0}).map(e).filter().value();return i.forEach(i.filter(n,(function(n){return!n.isAsync})),e),r.length>0?g.all(r):g.resolve()},t.persistBehaviorEvents=function(n){O(y.EVENTS,n)},t.persistBehaviorEventQueue=function(n){O(y.EVENT_QUEUE,n)},t.getPersistedBehaviorEventCount=function(){var n=D(y.EVENTS)||[],t=D(y.EVENT_QUEUE)||[];return a.deserialize(n).length+a.deserialize(t).length},t.persistLayerStates=function(){var n=E.getLayerStates(t.getNamespace());n=i.map(n,(function(n){return i.omit(n,"namespace")})),O(y.LAYER_STATES,n)},t.persistSessionState=function(){O(y.SESSION_STATE,S.getState())},t.persistVisitorProfile=function(){O(y.VISITOR_PROFILE,function(){var n=x.getVisitorProfile(),t=x.getVisitorProfileMetadata(),e=I.getAllPlugins(l.PluginTypes.visitorProfileProviders);if(e){var r=i.reduce(e,(function(n,t){return t.provides&&(n[t.provides]=t),n}),{});n=i.omitBy(n,(function(n,t){var e=r[t];return e&&e.isTransient}))}return{profile:n,metadata:t}}())},t.persistVisitorBucketingStore=function(){var n;t.persistVariationIdMap(),n=k.getPreferredLayerMapString(),O(y.LAYER_MAP,n,!0)},t.getUserIdFromKey=function(n,e){var r;return i.includes(n,e)&&i.includes(n,"_")&&i.includes(n,"$$")&&i.includes(n.slice(n.indexOf("$$")),t.getNamespace())&&(r=n.slice(n.indexOf("_")+1,n.indexOf("$$"))),r},t.maybePersistVisitorId=function(n){n.randomId&&(_.getAutoRefresh()||t.getCurrentId()!==n.randomId?(c.set(l.COOKIES.VISITOR_ID,n.randomId),p.log("Persisting visitorId:",n.randomId)):p.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(n){return x.getAttribute(n)},t.getPendingAttributeValue=function(n){return R.getPendingAttributeValue(n)},t.isForeignKey=L,t.checkKeyForVisitorId=function(n){var e=A.getBucketingId()||t.getCurrentId(),i=t.getIdFromKey(n);return!i||i===e},t.getIdFromKey=function(n){var e=n.split("$$")[0],r=t.getStorageKeyFromKey(n);if(i.includes(l.StorageKeys,r))return null;var o=e.indexOf("_");return-1===o?e:e.substring(o+1)},t.getStorageKeyFromKey=function(n){var t,e=n.split("$$").pop();if(e.indexOf("://")>-1){var r=e.indexOf("_");t=e.substring(r+1)}else t=e;return i.includes(i.values(l.AllStorageKeys),t)?t:null},t.deleteOldLocalData=function(){var n=v.keys();i.each(n,(function(n){t.isForeignKey(n)||t.checkKeyForVisitorId(n)||v.removeItem(n)}))},t.deleteOldForeignData=function(){var n=v.keys();i.each(n,(function(n){t.isForeignKey(n)&&v.removeItem(n)}))},t.loadForeignData=function(){i.each(v.keys(),(function(n){var t=v.getItem(n);t&&M(n,t)}))},t.getNamespace=function(){return w.getNamespace()},t.serializeFieldKey=function(n){return i.isArray(n)?n.join("$$"):n},t.removeLegacySessionStateCookies=function(){var n=c.getAll();i.forEach(i.keys(n),(function(n){0===n.indexOf(l.COOKIES.SESSION_STATE+"$$")&&c.remove(n)}))}},8955:function(n,t,e){var i=e(9576),r=e(8964);t.normalizeClientData=function(n){!n.listTargetingKeys&&n.listTargetingCookies&&(n.listTargetingKeys=i.map(n.listTargetingCookies,(function(n){return{type:r.ListTargetingKeyTypes.COOKIE,key:n}})),delete n.listTargetingCookies)}},5723:function(n,t,e){e(4041).register("env/jquery",e(6911))},6911:function(n,t,e){e(2188);n.exports=e(4438)},5133:function(n){n.exports={}},6708:function(n,t,e){function i(n,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t}var r=e(9576),o=e(6639).G,u=e(3792),a=e(4041),c=e(6954),s=e(2678),f=e(2188),l=e(3455),d=a.get("stores/client_metadata"),h=a.get("stores/global");function v(n){return n&&n.engine?n.engine:d.getClientName()}t.handleError=function(n,t){var e=function(){return l.request({url:"https://errors.client.optimizely.com/log",method:"POST",data:m,contentType:"application/json"}).then((function(n){s.log("Error Monitor / Logged error with response: ",n)}),(function(n){s.error("Failed to log error, response was: ",n)}))},a=n.name||"Error",p=n.message||"",g=n.stack||null;i(n,o)&&(i(p,Error)?(p=p.message,g=n.message.stack):g=null);var m={timestamp:u.now(),clientEngine:v(t),clientVersion:d.getClientVersion(),accountId:h.getAccountId(),projectId:h.getProjectId(),errorClass:a,message:p,stacktrace:g},y=r.map(h.getExperimental(),(function(n,t){return{key:"exp_"+t,value:String(n)}}));t&&r.forEach(t,(function(n,t){r.isObject(n)||y.push({key:t,value:String(n)})}),[]),r.isEmpty(y)||(m.metadata=y),s.error("Logging error",m),c.isLoaded()?e():f.addEventListener("load",e)}},7102:function(n,t,e){var i=e(9576),r=e(2805),o=e(7989),u=e(8235),a=e(6639).U,c=e(4611),s=e(6530),f=e(4041).get("stores/directive"),l=e(6954),d=e(5557),h=e(4797),v=e(2678),p=e(2522),g=e(7246),m=e(9280).create(),y=1e3,b=10,_=a("ChangeOverheatError");function w(n,t){if(this.change=n,this.identifier=t.identifier,this.startTime=t.startTime,f.shouldObserveChangesIndefinitely()){h.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new p(y);var e=i.isNull(b)?Number.POSITIVE_INFINITY:b;this.rateMeter.addListener(e,i.bind((function(){v.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new _("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:n.id,changeType:n.type,movingWindowMilliseconds:y,maxMacroTasksInMovingWindow:e})}),this));for(var u=Math.min(e,50),a=0;a<=u;a++)this.rateMeter.addListener(a,i.partial((function(n){h.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:n})}),a))}}w.prototype.numberOfRootNodes=function(n){var t=document.createElement("div");return t.innerHTML=n,t.childNodes.length},w.prototype.getSiblingElements=function(n,t,e){for(var i=n,r=[],o=0;o<t;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},w.prototype.apply=function(){this.applyDeferred=s();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var n=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};f.shouldObserveChangesUntilTimeout()?t={timeout:i.partial(g.isTimedOut,this.startTime),onTimeout:n}:f.isEditor()&&m.waitUntil(i.partial(g.isTimedOut,this.startTime)).then(n,n),this.unobserveSelector=m.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),t);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},w.prototype.maybeApplyToElement=function(n){var t=u.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(n.hasAttribute(t))return v.debug("Not applying AppendChange to element",n,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),i.bind(this.applyOrReapplyToElement,this,n,t)(),this.applyDeferred.resolve()},w.prototype.applyOrReapplyToElement=function(n,t){var e;switch(this.change.operator){case d.DOMInsertionType.AFTER:e=d.insertAdjacentHTMLType.AFTER_END;break;case d.DOMInsertionType.APPEND:e=d.insertAdjacentHTMLType.BEFORE_END;break;case d.DOMInsertionType.BEFORE:e=d.insertAdjacentHTMLType.BEFORE_BEGIN;break;case d.DOMInsertionType.PREPEND:e=d.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=d.insertAdjacentHTMLType.BEFORE_END}n.insertAdjacentHTML(e,this.change.value),n.setAttribute(t,""),c.setData(n,this.change.id,this.identifier,[]);var r,o,u=this.numberOfRootNodes(this.change.value)-1;e===d.insertAdjacentHTMLType.BEFORE_END?(r=n.lastChild,o=this.getSiblingElements(r,u,!1)):e===d.insertAdjacentHTMLType.AFTER_BEGIN?(r=n.firstChild,o=this.getSiblingElements(r,u,!0)):e===d.insertAdjacentHTMLType.BEFORE_BEGIN?(r=n.previousSibling,o=this.getSiblingElements(r,u,!1)):e===d.insertAdjacentHTMLType.AFTER_END&&(r=n.nextSibling,o=this.getSiblingElements(r,u,!0)),o.unshift(r),i.each(o,i.bind((function(n){var e=n.nodeType===Node.ELEMENT_NODE?n:l.parentElement(n);e.setAttribute(t,"");var r=c.getData(e,this.change.id,this.identifier)||[];r.push(n),c.setData(e,this.change.id,this.identifier,r),i.each(l.childrenOf(e),(function(n){n.setAttribute(t,"")}))}),this))},w.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},w.prototype.undo=function(){var n=u.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id,t=l.querySelectorAll("["+n+"]");return i.each(t,i.bind((function(t){var e=c.getData(t,this.change.id,this.identifier)||[];i.each(e,(function(n){n.parentNode.removeChild(n)})),t.removeAttribute(n),c.removeData(t,this.change.id,this.identifier),i.each(l.childrenOf(t),(function(t){t.removeAttribute(n)}))}),this)),s().resolve(d.changeState.UNAPPLIED)},n.exports=function(n){n.registerChangeApplier(d.changeType.APPEND,w)}},2075:function(n,t,e){var i=e(9576),r=e(5557);t.transformVisibilityAttributesToCSS=function(n){if(!n.attributes)return n;if(n.attributes[r.selectorChangeType.HIDE]||n.attributes[r.selectorChangeType.REMOVE]){var t=i.extend({css:{}},i.cloneDeep(n));return n.attributes[r.selectorChangeType.HIDE]&&(t.css.visibility="hidden",delete t.attributes[r.selectorChangeType.HIDE]),n.attributes[r.selectorChangeType.REMOVE]&&(t.css.display="none",delete t.attributes[r.selectorChangeType.REMOVE]),t}return n},t.createStylesFromChange=function(n,t){if(i.isEmpty(t.css))return t.attributes.style;var e="",r=t.attributes.style||"";return i.each(t.css,(function(n,t){new RegExp(t+"\\s?:").test(r)||(e+=t+":"+n+";")})),i.isUndefined(t.attributes.style)?(n||"")+e:e+r}},145:function(n,t,e){var i=e(9576),r=(e(8398).Promise,e(2805)),o=e(7989),u=e(8235),a=e(6639).U,c=e(4611),s=e(6530),f=e(4041).get("stores/directive"),l=e(6954),d=e(5557),h=e(4797),v=e(2678),p=e(7174),g=e(2522),m=e(7246),y=e(2188),b=e(2075),_=e(9280).create(),w={attributes:!0,childList:!0,subtree:!0,characterData:!0},E=1e3,I=10,T=a("ChangeOverheatError");function S(n,t){if(this.change=i.cloneDeep(n),this.change=b.transformVisibilityAttributesToCSS(this.change),this.identifier=t.identifier,this.startTime=t.startTime,this.disconnectObserverQueue=[],f.shouldObserveChangesIndefinitely()){h.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new g(E);var e=i.isNull(I)?Number.POSITIVE_INFINITY:I;this.rateMeter.addListener(e,i.bind((function(){v.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new T("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:n.id,changeType:n.type,movingWindowMilliseconds:E,maxMacroTasksInMovingWindow:e})}),this));for(var u=Math.min(e,50),a=0;a<=u;a++)this.rateMeter.addListener(a,i.partial((function(n){h.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:n})}),a))}this.cancelled=!1}S.prototype.apply=function(){this.applyDeferred=s();try{if(i.isEmpty(this.change.attributes)&&i.isEmpty(this.change.css))return v.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var n=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};f.shouldObserveChangesUntilTimeout()?t={timeout:i.partial(m.isTimedOut,this.startTime),onTimeout:n}:f.isEditor()&&_.waitUntil(i.partial(m.isTimedOut,this.startTime)).then(n,n),this.unobserveSelector=_.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),t);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},S.prototype.maybeApplyToElement=function(n){var t=u.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(n.hasAttribute(t))return v.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+n),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var e=i.bind(this.applyOrReapplyToElement,this,n,t);e();var r=i.bind((function(){var t=i.bind((function(){this.cancelled||p.observe(o,n,w)}),this);return y.setTimeout(t)}),this),o=p.create(i.bind((function(){this.rateMeter&&this.rateMeter.countCurrentTick(),o.disconnect(),e(),r()}),this));r(),this.disconnectObserverQueue.push(i.bind(o.disconnect,o)),this.applyDeferred.resolve()},S.prototype.applyOrReapplyToElement=function(n,t){var e={};i.forOwn(this.change.attributes,(function(r,o){switch(o){case d.selectorChangeType.CLASS:i.isUndefined(n.className)||(e[d.selectorChangeType.CLASS]=n.className,n.className=r);break;case d.selectorChangeType.HREF:i.isUndefined(n.href)||(e[d.selectorChangeType.HREF]=n.href,n.href=r);break;case d.selectorChangeType.HTML:i.isUndefined(n.innerHTML)||(e[d.selectorChangeType.HTML]=n.innerHTML,n.innerHTML=r,i.each(l.childrenOf(n),(function(n){n.setAttribute(t,"")})));break;case d.selectorChangeType.SRC:i.isUndefined(n.src)||(e[d.selectorChangeType.SRC]=n.src,n.src=r);break;case d.selectorChangeType.STYLE:break;case d.selectorChangeType.TEXT:i.isUndefined(n.textContent)||(e[d.selectorChangeType.TEXT]=n.textContent,n.textContent=r);break;default:throw new Error("Unrecognized attribute: "+o)}}));var r=b.createStylesFromChange(n.style.cssText,this.change);i.isString(r)&&(e[d.selectorChangeType.STYLE]=n.style.cssText,n.style.cssText=r),n.setAttribute(t,""),c.setData(n,this.change.id,this.identifier,e)},S.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),i.each(this.disconnectObserverQueue,(function(n){try{n()}catch(t){}}))},S.prototype.undo=function(){var n=l.querySelectorAll("["+u.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id+"]");return i.each(n,i.bind((function(n){var t=c.getData(n,this.change.id,this.identifier);t&&i.forOwn(t,(function(t,e){switch(e){case d.selectorChangeType.CLASS:n.className=t;break;case d.selectorChangeType.HREF:n.href=t;break;case d.selectorChangeType.HTML:n.innerHTML=t;break;case d.selectorChangeType.SRC:n.src=t;break;case d.selectorChangeType.STYLE:n.style.cssText=t;break;case d.selectorChangeType.TEXT:n.textContent=t;break;case d.selectorChangeType.HIDE:n.style.visibility=t;break;case d.selectorChangeType.REMOVE:n.style.display=t;break;default:throw new Error("Unrecognized attribute: "+e)}})),n.removeAttribute(u.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id),c.removeData(n,this.change.id,this.identifier)}),this)),s().resolve(d.changeState.UNAPPLIED)},n.exports=function(n){n.registerChangeApplier(d.changeType.ATTRIBUTE,S)}},7649:function(n,t,e){var i=e(9576),r=e(6530),o=e(5557),u=e(9404);function a(n,t){if(!i.isFunction(n.value))throw new Error("Custom code must be a function");this.change=n}a.prototype.apply=function(){var n=r();try{u.apply(this.change.value),n.resolve()}catch(t){n.reject(t)}return n},a.prototype.undo=function(){return r().resolve(o.changeState.IGNORED)},n.exports=function(n){n.registerChangeApplier(o.changeType.CUSTOM_CODE,a)}},4870:function(n,t,e){var i=e(6183),r=e(7065).E,o={selectExperiment:function(n,t,e){if(n.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=n.experiments[0];if(!i.isValidExperiment(t,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};n.exports=function(n){n.registerDecider("single_experiment",o),n.registerDecider("multivariate",o)}},4064:function(n,t,e){var i=function(n){return n&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n},r=e(9576),o=e(7989),u=e(6639).U,a=e(6954),c=e(3043),s=t.Error=u("ClickDelegateError");function f(n){this.handler=n,this.events=[],this.unlistenFn=null,this.clickHandler=r.bind((function(n){r.forEach(this.events,r.bind((function(t){try{var e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;(function(n,t,e){var u=n.target,a=0;for(;u;){var f;try{f=c(u,t)}catch(d){var l={typeofElementValue:void 0===u?"undefined":i(u),nodeName:r.result(u,["nodeName"],null),nodeType:r.result(u,["nodeType"],null),targetName:r.result(n,["target","nodeName"],null),targetType:r.result(n,["target","nodeType"],null),numParentsTraversed:a,selector:t,errorMessage:d.message,eventId:e.id};return o.emitError(new s("Unable to evaluate match for element"),l),!1}if(f)return!0;u=u.parentElement,a++}return!1})(n,e,t)&&this.handler(t)}catch(u){o.emitError(new s("Unable to handle click for selector"+e+":"+u.message))}}),this))}),this)}f.prototype.listen=function(){this.unlistenFn=a.addEventListener("click",this.clickHandler,!0)},f.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},f.prototype.hasEvents=function(){return this.events.length>0},f.prototype.addEvent=function(n){this.events.push(n)},f.prototype.removeEvent=function(n){this.events=r.filter(this.events,(function(t){return t.apiName!==n.apiName}))},n.exports=f},7154:function(n,t,e){var i=e(9126),r=e(4064),o=e(2678),u=e(9840);function a(n){return"apiName: "+n.apiName+", selector: "+n.eventFilter.selector}n.exports=function(n){var t=new r((function(n){u.updateAllViewTags(),i.trackClickEvent(n)?o.log("Tracking click event:",n):o.log("Not tracking click event:",n)}));n.registerEventImplementation("click",{attach:function(n){t.hasEvents()||t.listen(),t.addEvent(n),o.debug("Started listening for click event ("+a(n)+"):",n)},detach:function(n){t.removeEvent(n),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+a(n)+"):",n)}})}},3057:function(n,t,e){var i=e(9576),r=e(5071),o=e(5186),u=e(319);function a(n,t){var e=o.buildFromSpecV0_1(t);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return u.execute(e[0],n)}function c(n,t){return i.map(n,(function(n){return i.isFunction(n.toObject)?n.toObject(t):n}))}function s(n,t){if(!n)return["Descriptor not defined"];var e=[];return n.count&&e.push('Unexpected "count" clause specified'),n.pick&&n.pick.modifier&&-1===t.indexOf(n.pick.modifier)&&e.push('Invalid "pick" modifier "'+n.pick.modifier+'"'),i.each(n.filters,(function(n){i.isUndefined(n.modifier)||e.push('Unexpected "filter" modifier "'+n.modifier+'"')})),e.length>0?e:void 0}function f(n,t){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(i.isUndefined(t))return c(r.getEvents(n),e);if(i.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return c(r.getEvents(n).slice(-t),e)}var u=s(t,i.values(o.RECENCY_FILTERS));if(u)throw new Error(u.join("\n"));return c(a(r.getEvents(n),t),e)}function l(n,t){if(!(t=i.cloneDeep(t)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||o.FREQUENCY_FILTERS.MOST_FREQUENT;var e=s(t,i.values(o.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return a(r.getEvents(n),t)}function d(n,t){var e=o.buildFromSpecV0_2(t),a=r.getEvents(n),s=c(u.execute(e,a),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(s=i.flatten(s)),t.reduce&&(s=s[0]),s}n.exports=["stores/visitor_events",function(n){return{getEvents:i.partial(f,n),getByFrequency:i.partial(l,n),query:i.partial(d,n)}}]},9374:function(n,t,e){n.exports=function(n){n.registerApiModule("behavior",e(3057))}},1569:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(6731)),n.registerAudienceMatcher("behavior",e(4683))}},4683:function(n,t,e){var i=e(9576),r=e(2676),o=e(5186),u=e(319);n.exports={fieldsNeeded:["events"],match:function(n,t){var e,a=r.parse(t.value);return e=i.isUndefined(a.version)?[a]:o.buildFromSpecV0_1(a),i.every(e,(function(t){return u.isSatisfied(t,n.events)}))}}},6731:function(n,t,e){var i=e(5071);n.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},6879:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(6478))}},6478:function(n,t,e){var i=e(9576),r=e(2024),o=e(5071),u=e(2676),a=e(5186);n.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(n,t){var e=n.getProjectId(),c=i.filter(i.map(t.getCustomBehavioralAttributes(e),(function(n){try{return{id:n.id,granularity:r.GRANULARITY.ALL,rule:a.buildFromSpecV0_2(u.parse(n.rule_json))}}catch(t){return}}))),s=o.getEvents();return r.evaluate(c,s)}]}},9754:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(351)),n.registerAudienceMatcher("first_session",e(2456))}},2456:function(n){n.exports={fieldsNeeded:["first_session"],match:function(n){return!!n.first_session}}},351:function(n,t,e){var i=e(2657),r=e(5071),o=e(9196).getFieldValue,u=e(2289).CURRENT_SESSION_INDEX;n.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var n=r.getEvents();if(n&&n.length>0){var t=n[0];return o(t,[i.FIELDS.SESSION_INDEX])===u}return!0}]}},2024:function(n,t,e){var i=e(2678),r={FIELDS:e(2657).FIELDS},o=e(5186),u=e(319);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(n,e){var a={};if(0===e.length){for(var c=0;c<n.length;c++)a[n[c].id]=n[c].defaultValue;return a}var s=function(n){if(0===n.length)return[];for(var t=n.length-1,e=r.FIELDS.SESSION_ID,i=n[t][e];t>0&&i===n[t-1][e];)t--;return n.slice(t)}(e),f=function(n,t){if(0===n.length||t<=0)return[];var e=+new Date-t*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=n.length;i>0&&e<=n[i-1][r.FIELDS.TIME];)i--;return n.slice(i)}(e,60);for(c=0;c<n.length;c++){var l=n[c],d=e;l.granularity===t.GRANULARITY.CURRENT_SESSION?d=s:l.granularity===t.GRANULARITY.LAST_60_DAYS&&(d=f);try{var h=d;l.rule&&(h=u.execute(l.rule,d)),a[l.id]=l.defaultValue,1===h.length?a[l.id]=h[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",h.length,"results, expected 1")}catch(v){i.error("Behavior / Rule for",l.id,"failed with",v.message||"")}}return a}},5071:function(n,t,e){var i=e(9576),r=e(9314),o=e(4041).get("stores/visitor_events");t.getEvents=function(){var n=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),e=[].concat.apply([],i.values(o.getForeignEventQueues())),u=r.mergeAllEvents([n,t,e]);return u.slice(u.length-1e3)}},5186:function(n,t,e){var i=t,r=e(9576),o={FIELDS:e(2657).FIELDS,FIELDS_V0_2:e(2657).FIELDS_V0_2},u=e(2676),a=e(2678),c=e(319);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(n,t){return r.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,[c.generateAlias(n,t)]},i.groupField=function(n){return r.isString(n)&&(n=[n]),[(n=n||c.DEFAULT_FIELD).join(".")]};var s={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function f(n){return n=(n||"").toString().trim(),s[n]||n}function l(n,t,e){var u={where:t};if(n.count&&(u.limit=n.count),n.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var a=i.getFieldKeyPathForSource(n.name,e),c=i.aggregate("count"),s=i.aggregateField("count"),f=i.groupField(a);return r.extend(u,{select:[{field:f}],groupBy:i.groupBy([a]),aggregate:[c],orderBy:[{field:s,direction:"DESC"}]})}return r.extend(u,{orderBy:[{field:[o.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(n,t,e){return n=f(n),r.isString(t)&&(t=[t]),"exists"===n?{op:n,args:[{field:t}]}:{op:n,args:[{field:t},{value:e}]}},i.relativeTimeComparison=function(n,t){return{op:f(n),args:[{op:"-",args:[{eval:"now"},{field:[o.FIELDS.TIME]}]},{value:t*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(n){return r.isArray(n)?{op:"between",args:[{field:[o.FIELDS.TIME]},{value:[n[0]||+new Date(0),n[1]||+new Date]}]}:(a.error("Rule builder","rangeTimeComparison passed invalid range",n),null)},i.groupBy=function(n){for(var t=[],e=0;e<n.length;e++)t[e]={field:n[e]};return t},i.aggregate=function(n,t){return r.isString(t)&&(t=[t]),{op:n,args:[{field:t=t||c.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(n,t){t=t||i.SOURCE_TYPES.BEHAVIOR;var e=[];return r.isString(n)?(e=[n],t!==i.SOURCE_TYPES.BEHAVIOR||r.includes(r.values(o.FIELDS),n)||(e=[o.FIELDS.OPTIONS,n])):e=n,e},i.buildFromSpecV0_1=function(n){if(!(n.action||n.filters&&0!==n.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+u.stringify(n));var t=i.fieldComparison("gt",o.FIELDS.TIME,0),e=[],c=[];if(n.action&&(c.push(i.fieldComparison("eq",o.FIELDS.NAME,n.action.value)),n.action.type&&c.push(i.fieldComparison("eq",o.FIELDS.TYPE,n.action.type))),n.time)if("last_days"===n.time.type)c.push(i.relativeTimeComparison("lte",n.time.days));else if("range"===n.time.type){var s=i.rangeTimeComparison([n.time.start,n.time.stop]);s&&c.push(s)}else a.error("Rule builder",'Audience spec has bad "time" type',n.time.type);if(t={op:"and",args:c},n.count&&e.push({where:i.fieldComparison(n.count.comparator,"0",n.count.value),from:{select:[{field:i.aggregateField("count")}],where:t,aggregate:[i.aggregate("count")]}}),n.filters&&r.each(n.filters,(function(r){var u,a,s=i.getFieldKeyPathForSource(r.name,n.source);if(r.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(u=i.aggregate("count"),a=i.aggregateField("count")):r.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(u=i.aggregate("max",o.FIELDS.TIME),a=i.aggregateField("max",o.FIELDS.TIME)),u){var f=s,l=i.groupField(f);e.push({where:i.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:l}],where:t,groupBy:i.groupBy([f]),aggregate:[u],orderBy:[{field:a,direction:"DESC"}],limit:1}})}else c.push(i.fieldComparison(r.comparator,s,r.value))})),n.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+u.stringify(n));return[l(n.pick,t,n.source)]}return e.length>0?e:[{where:t}]},i.buildFromSpecV0_2=function(n){!function(n){var t=[];if(r.isUndefined(n))throw new Error("rule is undefined");if(!r.isObject(n))throw new Error("rule is not an Object");"0.2"!==n.version&&t.push('version: not "0.2"'),n.filter&&(r.isArray(n.filter)?r.each(n.filter,(function(n,e){var r=i.validateFieldKeyPathV0_2(n.field,i.FieldPurpose.FILTER);r&&t.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(n.comparator,n.value);o&&t.push("filter["+e+"]: "+o)})):t.push("filter: not an array"));var e=[],o=[];n.sort&&(n.reduce&&n.reduce.aggregator&&"nth"!==n.reduce.aggregator&&t.push("sort: superfluous because we can apply aggregator "+u.stringify(n.reduce.aggregator)+" to unsorted items"),r.isArray(n.sort)?r.each(n.sort,(function(n,a){var c=i.validateFieldKeyPathV0_2(n.field,i.FieldPurpose.SORT);c&&t.push("sort["+a+"]: "+c),n.field&&"frequency"===n.field[0]?e.push(n):o.push(n);var s=function(n){var t="direction "+(u.stringify(n)||String(n));if(!r.includes(["ascending","descending"],n))return t+' is not "ascending" or "descending"'}(n.direction);s&&t.push("sort["+a+"]: "+s)})):t.push("sort: not an array"),e.length&&o.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!n.pick&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(n.pick){n.reduce&&"count"===n.reduce.aggregator&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var a=i.validateFieldKeyPathV0_2(n.pick.field);a&&t.push("pick: "+a)}if(n.reduce){var c=n.reduce.aggregator,s="aggregator "+(u.stringify(c)||String(c)),f=n.reduce.n,l="index "+(u.stringify(f)||String(f));r.includes(["sum","avg","max","min","count","nth"],c)||t.push("reduce: "+s+" is unknown"),r.includes(["sum","avg","max","min"],c)&&(n.pick||t.push("reduce: "+s+" is impossible to use because no values have been picked")),"nth"===c?((!r.isNumber(f)||isNaN(f)||parseInt(f,10)!==f||f<0)&&t.push("reduce: "+l+" is not a non-negative integer (mandated by "+s+")"),n.sort||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):r.isUndefined(f)||t.push("reduce: "+l+" is defined (not mandated by "+s+")")}if(t.length)throw new Error(t.join("\n"))}(n);var t={where:{op:"and",args:r.map(n.filter||[],(function(n){return"age"===n.field[0]?i.relativeTimeComparison(n.comparator||"eq",n.value/i.MILLIS_IN_A_DAY):i.fieldComparison(n.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(n.field),n.value)}))}};if(n.reduce&&"count"===n.reduce.aggregator)return r.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],o=[];if(n.sort&&(r.each(n.sort,(function(n){r.includes(["ascending","descending"],n.direction)&&(r.includes(["time","age"],n.field[0])&&o.push(n),"frequency"===n.field[0]&&e.push(n))})),o.length&&!e.length&&(t.orderBy=r.filter(r.map(o,(function(n){return"time"===n.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===n.direction?"ASC":"DESC"}:"age"===n.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===n.direction?"DESC":"ASC"}:void 0}))))),n.pick&&n.pick.field){var a=i.convertFieldKeyPathFromSpecV0_2(n.pick.field);if(n.reduce&&r.includes(["avg","max","min","sum"],n.reduce.aggregator))return r.extend(t,{aggregate:[{op:n.reduce.aggregator,args:[{field:a}]}],select:[{field:[c.generateAlias(n.reduce.aggregator,a)]}]});t=e.length?r.extend(t,{groupBy:[{field:a}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[a.join(".")]}]}):r.extend(t,{select:[{field:a}]})}if(n.reduce&&"nth"===n.reduce.aggregator){var s=n.reduce.n;if(r.isNumber(s)&&s>=0&&Number(s)===Math.floor(Number(s)))return r.extend(t,{offset:s,limit:1})}return t},i.convertFieldKeyPathFromSpecV0_2=function(n){return"tags"===n[0]&&"revenue"===n[1]?["r"]:[o.FIELDS_V0_2[n[0]]].concat(n.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(n,t){var e="field "+(u.stringify(n)||String(n));if(!r.isArray(n)||!r.every(n,r.isString))return e+" is not an array of strings";if("tags"===n[0]&&n.length>2||"tags"!==n[0]&&n.length>1)return e+" includes too many strings";if("tags"===n[0]&&n.length<2)return e+" does not specify an exact tag";if(n.length<1)return e+" does not specify a top-level field";var a=r.keys(o.FIELDS_V0_2),c=["age","frequency"];return t===i.FieldPurpose.FILTER&&(a.push("age"),c=["frequency"]),t===i.FieldPurpose.SORT&&(a=["time","age","frequency"],c=["name","type","category","tags"]),r.includes(c,n[0])?e+" is not supported here":r.includes(a,n[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(n,t){var e="comparator "+(u.stringify(n)||String(n)),i="value "+(u.stringify(t)||String(t));if(!r.isString(n)&&!r.isUndefined(n))return e+" is not a string";switch(n){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!r.isNumber(t))return i+" is not a number (mandated by "+e+")";break;case"in":if(!r.isArray(t))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(r.isArray(t)&&2===t.length&&r.isNumber(t[0])&&r.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!(r.isString(t)||r.isArray(t)&&2===t.length&&r.isString(t[0])&&r.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(!r.isUndefined(t))return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},319:function(n,t,e){var i=e(9576),r=e(8964),o=e(2678),u=i.bind(o.log,o),a=e(3792),c=e(9196).getFieldValue,s=e(2676),f=function(n,t,e){if(n.getValueOrDefault)return n.getValueOrDefault(t,e);if(!i.isArray(t))return e;var r=c(n,t);return void 0===r&&(r=e),r},l=function(n){return"string"==typeof n?n.trim().toLowerCase():n};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(n){var t=i.map(n,l);return t[0]==t[1]},is:function(n){return n[0]===n[1]},gt:function(n){return n[0]>n[1]},lt:function(n){return n[0]<n[1]},gte:function(n){return n[0]>=n[1]},lte:function(n){return n[0]<=n[1]},"in":function(n){var t=i.map(n[1]||[],l);return i.includes(t,l(n[0]))},between:function(n){return n[1][0]<=n[0]&&n[0]<=n[1][1]},contains:function(n){var t=i.map(n,(function(n){return"string"==typeof n?n.toLowerCase():n}));return-1!==(t[0]||"").indexOf(t[1])},regex:function(n){try{var t,e;return i.isString(n[1])?(t=n[1],e="i"):(t=n[1][0]||"",e=n[1][1]||""),new RegExp(t,e).test(n[0])}catch(r){return o.error("Rules",'In operator "regex", error: '+(r.message||"invalid RegExp /"+[t,e].join("/"))),!1}},exists:function(n){return void 0!==n[0]},and:function(n){return i.every(n,(function(n){return n}))},or:function(n){return i.some(n,(function(n){return n}))},not:function(n){return!n[0]}},t.arithmeticOperators={"+":function(n){return(n[0]||0)+(n[1]||0)},"-":function(n){return(n[0]||0)-(n[1]||0)},"/":function(n){return(n[0]||0)/(n[1]||1)},"%":function(n){return(n[0]||0)%(n[1]||1)}},t.aggregateOperators={sum:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r},avg:function(n,e){if(0===e.length)return 0;for(var i=n[0]||t.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r/e.length},max:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,f(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,f(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(n,t){return t.length}};var d={now:function(){return a.now()}},h=function(n,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return f(n,e.field);if(e.hasOwnProperty("eval"))return e.eval in d?d[e.eval]():void o.error("Rules","Unknown function: "+e.eval);if(e.op){var r,u=(r=e.op)in t.booleanOperators?t.booleanOperators[r]:r in t.arithmeticOperators?t.arithmeticOperators[r]:null;if(u){var a=i.partial(h,n),c=e.args||[];return u(i.map(c,(function(n){return a(n)})),n)}o.error("Rules","Unknown operator: "+e.op)}else o.error("Rules","No operator specified: "+s.stringify(e))};t.generateAlias=function(n,t){return"_"+n+"_"+t.join(".")};t.rewrite=function(n){var e=[],r={};function u(n,a){if(i.isArray(n)&&("and"!==n[0]&&"or"!==n[0]&&"not"!==n[0]&&o.error("Rules","Unexpected operation "+n[0]+". Continuing optimistically."),n={op:n[0],args:n.slice(1)}),n.hasOwnProperty("field")||n.hasOwnProperty("value")||n.hasOwnProperty("eval"))return n;if(a&&n.op in t.aggregateOperators){var c=(n.args&&n.args[0]||{}).field||t.DEFAULT_FIELD,s=t.generateAlias(n.op,c);return s in r||(e.push({op:n.op,args:n.args}),r[s]=!0),{field:[s]}}for(var f=[],l=n.args||[],d=0;d<l.length;d++)f[d]=u(l[d],a);return{op:n.op,args:f}}var a={};n.hasOwnProperty(t.clause.WHERE)&&(a[t.clause.WHERE]=u(n[t.clause.WHERE],!1)),n.hasOwnProperty(t.clause.HAVING)&&(a[t.clause.HAVING]=u(n[t.clause.HAVING],!0)),(n.hasOwnProperty(t.clause.AGGREGATE)||e.length>0)&&(a[t.clause.AGGREGATE]=(n[t.clause.AGGREGATE]||[]).concat(e));for(var c=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],s=0;s<c.length;s++)n.hasOwnProperty(c[s])&&(a[c[s]]=n[c[s]]);return n.hasOwnProperty(t.clause.FROM)&&(a[t.clause.FROM]=t.rewrite(n[t.clause.FROM])),a};var v=function(n,e){e=e||0;var r=[];if(n.hasOwnProperty(t.clause.WHERE)?n[t.clause.WHERE].op?n[t.clause.WHERE].op in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),!n.hasOwnProperty(t.clause.HAVING)||(n[t.clause.HAVING].op?n[t.clause.HAVING].op in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),n.hasOwnProperty(t.clause.GROUP_BY)&&!n.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),n.hasOwnProperty(t.clause.SELECT)){var o=n[t.clause.SELECT];if(i.isArray(o))for(var u=0;u<o.length;u++)o[u].op&&o[u].op in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+o[u].op+'" specified in selector at index '+u);else r.push("SELECT clause must be an array")}if(n.hasOwnProperty(t.clause.OFFSET)){var a=n[t.clause.OFFSET];(!i.isNumber(a)||Number(a)<0||Number(a)!==Math.floor(Number(a)))&&r.push("OFFSET must be a non-negative integer")}if(n.hasOwnProperty(t.clause.LIMIT)){var c=n[t.clause.LIMIT];(!i.isNumber(c)||Number(c)<0||Number(c)!==Math.floor(Number(c)))&&r.push("LIMIT must be a non-negative integer")}return e>0&&(r=i.map(r,(function(n){return"Sub-rule "+e+": "+n}))),n.hasOwnProperty(t.clause.FROM)&&(r=r.concat(v(n[t.clause.FROM],e+1))),r},p=function(n,e){var r,a,c,l=e;if(n.hasOwnProperty(t.clause.FROM)&&(o.debug("Evaluating FROM clause:",n[t.clause.FROM]),l=p(n[t.clause.FROM],l),o.debug("Results after FROM:",l)),o.debug("Evaluating WHERE clause:",n[t.clause.WHERE]),l=i.filter(l,(function(e){return h(e,n[t.clause.WHERE])})),o.debug("Results after WHERE:",l),n.hasOwnProperty(t.clause.AGGREGATE)){o.debug("Evaluating AGGREGATE clause:",n[t.clause.AGGREGATE]);var d=function(n,t){var e={};if(void 0===n||!i.isArray(n)||0===n.length)return e["*"]={fieldValues:{},events:t},e;for(var r=i.map(n,(function(n){return n.field})),o=0;o<t.length;o++){for(var u=t[o],a=[],c={},l=0;l<r.length;l++){var d=r[l],h=f(u,d),v=d.join(".");c[v]=h,a.push(encodeURIComponent(v)+"="+encodeURIComponent(s.stringify(h)))}var p=a.join("&");e.hasOwnProperty(p)||(e[p]={fieldValues:c,events:[]}),e[p].events.push(u)}return e}(n[t.clause.GROUP_BY],l);l=function(n,t){var e=[];return i.each(n,(function(n,r){var o=i.extend({},n.fieldValues),u=t[r]||{};i.extend(o,u),e.push(o)})),e}(d,(r=n[t.clause.AGGREGATE],a=d,c={},i.each(a,(function(n,e){c[e]={};for(var i=0;i<r.length;i++){var u=r[i],a=u.op;if(a in t.aggregateOperators){var s=(u.args&&u.args[0]||{}).field||t.DEFAULT_FIELD,f=t.generateAlias(a,s),l=t.aggregateOperators[a]([s],n.events);c[e][f]=l}else o.error("Rules","Unknown aggregate operator "+a)}})),c)),o.debug("Results after AGGREGATE:",l)}n.hasOwnProperty(t.clause.HAVING)&&(o.debug("Evaluating HAVING clause:",n[t.clause.HAVING]),l=i.filter(l,(function(e){return h(e,n[t.clause.HAVING])})),o.debug("Results after HAVING:",l)),n.hasOwnProperty(t.clause.ORDER_BY)&&(o.debug("Evaluating ORDER_BY clause:",n[t.clause.ORDER_BY]),l=function(n,t){return i.isArray(n)?0===n.length?t:t.sort((function(t,e){for(var i=0;i<n.length;i++){var r=n[i],o="ASC"===(r.direction||"ASC")?1:-1,u=r.field,a=f(t,u,0),c=f(e,u,0);if(a<c)return-o;if(a>c)return o}return 0})):(u("Rules","groupBy rule must be an array"),t)}(n[t.clause.ORDER_BY],l),o.debug("Results after ORDER_BY:",l));var v,g=0;return n.hasOwnProperty(t.clause.OFFSET)&&(o.debug("Evaluating OFFSET clause:",n[t.clause.OFFSET]),g=Number(n[t.clause.OFFSET])),n.hasOwnProperty(t.clause.LIMIT)&&(o.debug("Evaluating LIMIT clause:",n[t.clause.LIMIT]),v=g+Number(n[t.clause.LIMIT])),(g>0||!i.isUndefined(v))&&(l=l.slice(g,v),o.debug("Results after OFFSET/LIMIT:",l)),n.hasOwnProperty(t.clause.SELECT)&&(o.debug("Evaluating SELECT clause:",n[t.clause.SELECT]),l=function(n,t){return i.map(t,(function(t){return i.map(n,(function(n){return h(t,n)}))}))}(n[t.clause.SELECT],l),o.debug("Results after SELECT:",l)),l};t.execute=function(n,e){n=t.rewrite(n),o.shouldLog(r.LogLevel.DEBUG)&&o.groupCollapsed("Evaluating Behavioral Rule"),o.debug("Rule:",n,s.stringify(n)),o.debug("Events:",e);var i=v(n);if(i.length>0)throw new Error("Rule "+s.stringify(n)+" has violations: "+i.join("\n"));var u=p(n,e);return o.debug("Rule result:",u),o.shouldLog(r.LogLevel.DEBUG)&&o.groupEnd(),u},t.isSatisfied=function(n,e){try{return t.execute(n,e).length>0}catch(i){return o.error("Rules","Error "+i.toString()+" while evaluating rule "+s.stringify(n)),!1}}},5664:function(n,t,e){n.exports=function(n){n.registerDependency("sources/browser_id",e(6003)),n.registerVisitorProfileProvider(e(806)),n.registerVisitorProfileProvider(e(6442)),n.registerAudienceMatcher("browser_version",e(716))}},716:function(n,t,e){var i=e(4364).y;n.exports={fieldsNeeded:["browserVersion","browserId"],match:function(n,t){var e=t.value,r=n.browserId,o=n.browserVersion;if(0===e.indexOf(r)){var u=e.substr(r.length);return 0===i(o,u)}return!1}}},806:function(n){n.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(n){return n.getId()}]}},6442:function(n){n.exports={provides:"browserVersion",getter:["sources/browser_id",function(n){return n.getVersion()}]}},6003:function(n,t,e){var i=e(769);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}},6093:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(3045)),n.registerAudienceMatcher("campaign",e(817))}},817:function(n,t,e){var i=e(6061);n.exports={fieldsNeeded:["campaign"],match:function(n,t){return i.hasMatch(t.value,t.match,n.campaign)}}},3045:function(n,t,e){var i=e(4005);n.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},7217:function(n,t,e){n.exports=function(n){n.registerAudienceMatcher("code",e(1764))}},1764:function(n,t,e){var i=e(9576),r=e(9404);t.fieldsNeeded=[],t.match=function(n,t){if(i.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(o){return!1}return!1}},8068:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(9286));var t=e(2531);n.registerAudienceMatcher("custom_attribute",t),n.registerAudienceMatcher("custom_dimension",t)}},2531:function(n,t,e){var i=e(9576),r=e(6061);t.match=function(n,t){var e;return n.custom&&(e=n.custom[t.name]),i.isObject(e)&&(e=e.value),r.hasMatch(t.value,t.match,e)}},9286:function(n,t,e){var i=e(9576),r=e(8964),o=e(2678),u=e(4041).get("stores/dimension_data");n.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(n){return i.reduce(n,(function(n,t,e){var r=e,a=u.getByApiName(e),c=u.getById(e);return i.isObject(t)?(!t.id&&a&&(c=a,r=a.id,i.extend(t,{id:c.segmentId||c.id})),!t.name&&c&&c.apiName&&(t.name=c.apiName),t.id||c||o.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),n[r]=t,n):(o.error('Unable to restore custom attribute "'+e+'" because value is not an object'),n)}),{})},shouldTrack:!0}},520:function(n,t,e){n.exports=function(n){n.registerDependency("sources/device",e(8822)),n.registerVisitorProfileProvider(e(4917)),n.registerAudienceMatcher("device",e(1306))}},1306:function(n){n.exports={fieldsNeeded:["device"],match:function(n,t){return n.device===t.value}}},4917:function(n){n.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(n){return n.getDevice()}]}},8822:function(n,t,e){var i=e(769);t.getDevice=function(){var n=i.get().device;return"unknown"!==n.model?n.model:"tablet"===n.type?"tablet":n.isMobile?"mobile":"desktop"}},9665:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7510)),n.registerAudienceMatcher("device_type",e(4160))}},4160:function(n){n.exports={fieldsNeeded:["device_type"],match:function(n,t){return n.device_type===t.value}}},7510:function(n,t,e){var i=e(769);n.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var n=i.get().device;switch(n.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return n.type;default:return"other"}}]}},7819:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(5850)),n.registerAudienceMatcher("location",e(9099))}},9099:function(n,t){t.fieldsNeeded=["location"],t.match=function(n,t){if(!n.hasOwnProperty("location"))return!1;var e=n.location,i=t.value.split("|"),r=(i[0]||"").trim(),o=(i[1]||"").trim(),u=(i[2]||"").trim(),a=(i[3]||"").trim(),c=(i.length>4&&i[4]||"").trim();switch(i.length){case 1:if(e.country===r)return!0;break;case 2:if(e.region===o&&e.country===r)return!0;break;case 3:if(e.city===u&&(e.region===o||""===o)&&e.country===r)return!0;break;case 4:if(e.continent===a)return!0;break;case 5:if(e.dma===c)return!0}return!1}},5850:function(n,t,e){var i=e(6217);n.exports={provides:"location",isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}},8663:function(n,t,e){function i(n,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t}var r=e(9576),o=e(2676),u=e(2678),a=e(8398).Promise,c=e(3455),s=1,f=2,l="itemMetadata",d="recos";function h(n){return n===f}function v(n,t){if(!function(n){return n===s}(t))return d in n?o.parse(n.recos):(u.warn('recommender / Expected key "recos" not found'),[]);var e=new RegExp("^reco(\\d+)$"),i=r.reduce(n,(function(t,i,u){var a=u.match(e);if(a){var c=o.parse(n[u]);c&&r.isObject(c)&&(t[a[1]]=c)}return t}),[]);return r.filter(i,(function(n){return!r.isUndefined(n)}))}function p(n,t){return[n,encodeURIComponent(t)].join("/")}function g(n,t){var e=function(n,t,e){if(!r.isArray(n)||r.isEmpty(n))throw new Error("No "+e+"s available");var i;if(t){if(!(i=r.find(n,{id:t})))throw new Error("No "+e+" found with specified id "+t)}else{if(n.length>1)throw new Error("No "+e+" id specified when there are more than one available.");i=n[0]}return i},i=e(n.getRecommenderServices(),t&&t.recommenderServiceId,"recommender service");return i.idTagName||(i.idTagName="id"),{recommenderService:i,recommender:e(i.recommenders,t&&t.recommenderId,"recommender")}}function m(n){return o.parse(n).data}function y(n,t){return c.request({url:p(n,t)}).then((function(n){var t=m(n.response),e={};return l in t&&(e=o.parse(t.itemMetadata)),e}))}function b(n,t,e,o){var u=!(!o||!o.fetchWithMetadata),a=o&&o.overrideServingUrl||t.servingUrl;return c.request({url:p(a,e)}).then((function(t){var e,a=m(t.response);return e=v(a,n.serviceVersion),u&&h(n.serviceVersion)?_(n,r.map(e,n.idTagName),o).then((function(n){return n=r.map(n,(function(n){return i(n,Error)&&(n={}),delete n.__proto__,n})),r.merge(e,n)})):e}))}function _(n,t,e){var i=e&&e.overrideCatalogUrl||n.catalogUrl;return r.isString(t)?y(i,t):a.all(r.map(t,(function(n){return y(i,n)["catch"]((function(t){return u.warn("recommender / Failed to get recommendations for item:",n,t),t}))})))}function w(n,t,e){var i=g(n,e);return b(i.recommenderService,i.recommender,t,{overrideServingUrl:e&&e.overrideServingUrl,overrideCatalogUrl:e&&e.overrideCatalogUrl,fetchWithMetadata:!0})}function E(n,t,e){var i=g(n,e),r=i.recommenderService,o=i.recommender;if(!h(r.serviceVersion))throw new Error("Recommender service "+r.id+" serves self-contained recos. Use `fetchRecommendations` API call");return b(r,o,t,{overrideServingUrl:e&&e.overrideServingUrl,fetchWithMetadata:!1})}function I(n,t,e){var i=g(n,e).recommenderService;if(!h(i.serviceVersion))throw new Error("Recommender service "+i.id+" serves self-contained recos. Use `fetchRecommendations` API call");return r.isArray(t)&&t.length>20?a.reject("Cannot fetch more than 20 items"):_(i,t,e)}function T(n,t,e,i){return new S(n,t,e,i)}function S(n,t,e,i){this.recommenderSettings=t;var r=g(n,t);this.recommenderService=r.recommenderService,this.recommender=r.recommender,this.targetId=e,i&&(this.preFilter=i.preFilter,this.canonicalize=i.canonicalize,this.postFilter=i.postFilter),this._globalStore=n,this.reset()}function A(){var n={recosNoMeta:[],recosNoMetaOffset:0,recos:[],recosOffset:0};return u.debug("recommender / fetching recommended items for",this.targetId,"from recommender",this.recommender.id),h(this.recommenderService.serviceVersion)?E(this._globalStore,this.targetId,this.recommenderSettings).then(r.bind((function(t){return n.recosNoMeta=r.filter(t,this.preFilter),n}),this)):w(this._globalStore,this.targetId,this.recommenderSettings).then(r.bind((function(t){return n.recos=r(t).filter(this.preFilter).map(this.canonicalize).filter(this.postFilter).value(),n}),this))}function k(n){var t=n.numNeeded,e=n.buffer,o=e.recosNoMeta.length-e.recosNoMetaOffset;if(t<=0||o<=0)return a.resolve(n);var c=Math.max(t,5),s=r.slice(e.recosNoMeta,e.recosNoMetaOffset,e.recosNoMetaOffset+c),f=r.map(s,this.recommenderService.idTagName);e.recosNoMetaOffset+=f.length;var l=n.recosSoFar;return u.debug("recommender / fetching metadata for",f,"from recommender",this.recommender.id),I(this._globalStore,f,this.recommenderSettings).then(r.bind((function(o){o=r.map(o,(function(n){return i(n,Error)?{}:n})),e.recos=r(s).merge(o).map(this.canonicalize).filter(this.postFilter).value();var u=r.slice(e.recos,0,t);return e.recosOffset=u.length,n.recosSoFar=l.concat(u),n.numNeeded-=u.length,n.numNeeded>0?k.call(this,n):n}),this))}S.prototype.reset=function(){this._bufferPromise=null},S.prototype.next=function(n){var t=Math.floor(r.isNumber(n)?n:1);if(t<=0)throw new Error("Invalid argument "+n+". Must be positive integer");this._bufferPromise||(this._bufferPromise=A.call(this));var e=this._bufferPromise.then(r.bind((function(n){var e=[];return n.recos.length-n.recosOffset>0&&(e=n.recos.slice(n.recosOffset,n.recosOffset+t),n.recosOffset+=e.length,t-=e.length),t<=0?{result:e,buffer:n}:k.call(this,{buffer:n,recosSoFar:e,numNeeded:t}).then((function(n){return{result:n.recosSoFar,buffer:n.buffer}}))}),this));return this._bufferPromise=e.then((function(n){return n.buffer})),e.then((function(n){return n.result}))},n.exports=["stores/global",function(n){return{fetchRecommendations:r.partial(w,n),fetchRecommendedItems:r.partial(E,n),fetchItemMetadata:r.partial(I,n),getRecommendationsFetcher:r.partial(T,n)}}]},9686:function(n,t,e){n.exports=function(n){n.registerApiModule("recommender",e(8663))}},928:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(340)),n.registerAudienceMatcher("referrer",e(206))}},206:function(n,t,e){var i=e(859);t.fieldsNeeded=["referrer"],t.match=function(n,t){return null!==n.referrer&&i(n.referrer,t)}},340:function(n,t,e){var i=e(6954),r=e(74);n.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var n=r.getReferrer()||i.getReferrer();return""===n&&(n=null),n}]}},186:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4859)),n.registerAudienceMatcher("source_type",e(1612))}},1612:function(n,t,e){var i=e(6061);t.fieldsNeeded=["source_type"],t.match=function(n,t){return i.hasMatch(t.value,t.match,n.source_type)}},4859:function(n,t,e){var i=e(4005),r=e(6954),o=e(74),u=e(6724),a=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];n.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(n,t){var e,c=n(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var n=o.getReferrer()||r.getReferrer(),t=0;t<a.length;t++){var e=a[t];if(n.match(e))return"search"}return n&&u.guessDomain(n)!==u.guessDomain(i.getUrl())?"referral":"direct"}();e=s,(!c||"direct"!==e)&&t(s)}}]}},1310:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4397)),n.registerVisitorProfileProvider(e(1582)),n.registerAudienceMatcher("time_and_day",e(8809))}},8809:function(n,t,e){var i=e(8290);t.fieldsNeeded=["currentTimestamp"],t.match=function(n,t){return i.test(t.value,new Date(n.currentTimestamp))}},4397:function(n,t,e){var i=e(3792);n.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},1582:function(n){n.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},8290:function(n,t,e){var i=e(9576);function r(n){var t=n.split(":");if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+n);return 60*parseInt(t[0],10)+parseInt(t[1],10)}t.test=function(n,t){var e=function(n){var t=n.split("_");if(3!==t.length)throw new Error("Invalid time and day string "+n);var e=t[2].split(",");return{start_time:t[0],end_time:t[1],days:e}}(n),o=r(e.start_time),u=r(e.end_time),a=60*t.getHours()+t.getMinutes(),c=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][t.getDay()];return a>=o&&a<=u&&i.includes(e.days,c)}},7644:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(9995))}},9995:function(n){n.exports={provides:"visitorId",getter:["stores/visitor_id",function(n){return n.getRandomId()}]}},3056:function(n,t,e){var i=e(2676),r=e(2678),o=e(7984),u=e(74),a=e(9612),c=e(2188),s="google_universal_analytics",f=e(9978);var l=function(n,t){return o.pollFor((function(){return function(n){var t=n.getGlobal("GoogleAnalyticsObject");return t?n.getGlobal(t):null}(c)}),200,50).then((function(e){var i=t.universal_analytics_tracker,r=i?i+".":"",o=t.universal_analytics_slot,a=u.getReferrer();a&&e(r+"set","referrer",a);var c={nonInteraction:!0};c["dimension"+o]=n,e(r+"send","event","Optimizely","Assigned To Campaign",c)}))},d={preRedirectPolicy:a.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:a.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:a.NonRedirectPolicies.TRACK_IMMEDIATELY,trackLayerDecision:function(n){var t=n.integrationSettings;if(t&&t[s]&&n.experimentId&&n.variationId){var e={id:n.layerId,name:n.layerName,policy:n.layerPolicy,integrationStringVersion:n.integrationStringVersion},i={id:n.experimentId,name:n.experimentName},o={id:n.variationId,name:n.variationName},u=n.isLayerHoldback,a=f.generateAnalyticsString(e,i,o,u,150,!0);if(a)return l(a,t[s])["catch"]((function(n){r.warn("Tracker for",s,"failed:",n)}))}},serializeSettings:i.stringify,deserializeSettings:i.parse};n.exports=function(n){n.registerAnalyticsTracker("google_universal_analytics",d)}},2774:function(n,t,e){var i=e(9576),r=e(7989),o=e(1243),u=e(2805),a=e(6639).U,c=e(2676),s=e(2678),f=e(9612),l=e(1685),d=e(2188),h=e(3455),v=e(4041),p=(e(6954),e(4658)),g=e(7356),m=e(4797),y=v.get("stores/global"),b=v.get("stores/tracker_optimizely"),_=t.Error=a("OptimizelyTrackerError"),w="client_activation",E="campaign_activated",I="view_activated",T={revenue:{validate:C,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:C,sanitize:Math.floor,excludeFeature:!0},value:{validate:C,sanitize:i.identity}},S="AUTO",A=[function(){return function(n){P(function(n){return i.extend({entity_id:n.pageId,key:n.pageApiName,timestamp:n.timestamp,uuid:n.eventId,type:I},N(n.eventTags))}(n),n.userFeatures,W(n.layerStates))}}],k=[function(){return function(n){!function(n){var t=i.isNull(y.getAnonymizeIP())?void 0:y.getAnonymizeIP(),e={account_id:n.accountId,anonymize_ip:t,client_name:n.clientName,client_version:n.clientVersion,project_id:n.projectId,visitors:[]};e.revision=n.revision,e.enrich_decisions=!0;var r={session_id:L(n.sessionId),visitor_id:n.visitorId,attributes:[],snapshots:[]},o=W(n.layerStates);m.dispatch(u.REGISTER_TRACKER_VISITOR,{data:e,visitor:r,decisions:o}),$()}(n),P(function(n){return{entity_id:null,type:w,uuid:n.eventId,timestamp:n.timestamp}}(n),n.userFeatures,W(n.layerStates))}}],x=[function(){return function(n){var t;P((t=n,i.extend({entity_id:t.eventEntityId,key:t.eventApiName,timestamp:t.timestamp,uuid:t.eventId,type:t.eventCategory},N(t.eventTags))),n.userFeatures,W(n.layerStates))}}],R=[function(){return function(n){var t;P((t=n,i.extend({entity_id:t.eventEntityId,key:t.eventApiName,timestamp:t.timestamp,uuid:t.eventId,type:t.eventCategory},N(t.eventTags))),n.userFeatures,W(n.layerStates))}}];function N(n){var t=function(n,t,e){try{D(t),n[e]=t}catch(i){r.emitError(new _("Bad value for eventTags["+e+"]: "+i.message))}return n},e=i.keys(T),o=i.omit(n,e),u=i.pick(n,e),a=i.reduce(o,t,{}),c=i.reduce(u,(function(n,e,i){var o=T[i];o.excludeFeature||t(a,e,i);try{o.validate(e),n[i]=o.sanitize(e),a[i]=n[i]}catch(u){r.emitError(new _("Bad value for eventMetrics["+i+"]: "+u.message))}return n}),{});return c.tags=a,c}function D(n){if(null==n)throw new Error("Feature value is null");if("object"==typeof n){var t;try{t=c.stringify(n)}catch(e){}throw new Error('Feature value is complex: "'+t)}}function C(n){if(null==n)throw new Error("Metric value is null");if(!i.isNumber(n))throw new Error("Metric value is not numeric")}function O(n){return i.reduce(n,(function(n,t){try{D(t.value),n.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){s.warn("Error evaluating user feature",t,e)}return n}),[])}function P(n,t,e){m.dispatch(u.REGISTER_TRACKER_EVENT,{event:n,decisions:e}),M(t),$()}function M(n){var t=O(n);m.dispatch(u.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function L(n){return S}function F(){if(b.canSend()){var n=b.hasEventsToSend(),t=b.hasPreviousBatchesToSend();n||t?(t&&(i.each(b.getPreviousBatches(),j),m.dispatch(u.RESET_TRACKER_PREVIOUS_BATCHES)),n&&(m.dispatch(u.FINALIZE_BATCH_SNAPSHOT),j(b.getEventBatch()),m.dispatch(u.RESET_TRACKER_EVENTS))):s.debug("Not sending events because there are no events to send")}else s.debug("Not sending events (holding)")}function j(n){s.debug("Sending ticket:",n);var t=o.generate();h.retryableRequest({url:"https://logx.optimizely.com/v1/events",method:"POST",data:U(n)},t)}function U(n){return i.extend({},i.pick(n,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:i.map(n.visitors,V)})}function V(n){return{visitor_id:n.visitor_id,session_id:S,attributes:i.map(n.attributes,z),snapshots:i.map(n.snapshots,q)}}function z(n){return H(n,{entity_id:"e",key:"k",type:"t",value:"v"})}function q(n){var t=n.events;return t=function(n){var t=i.reduce(n,(function(n,t){var e;if(n[e=t.type===I&&i.isEmpty(t.tags)&&i.isEmpty(i.pick(t,i.keys(T)))?t.type:t.uuid]){var r=n[e].timestamp;t.timestamp>r&&(r=t.timestamp),n[e]=i.extend({},n[e],{key:n[e].key+"-"+(t.key||""),entity_id:n[e].entity_id+"-"+t.entity_id,timestamp:r})}else n[e]=t;return n}),{});return i.values(t)}(t),{activationTimestamp:y.getActivationTimestamp(),decisions:i.map(n.decisions,B),events:i.map(t,G)}}function B(n){return H(n,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function G(n){return n.key===E&&(n.type=E,delete n.key),H(n,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function H(n,t){return i.reduce(n,(function(n,e,i){return i in t&&(n[t[i]||i]=e),n}),{})}function $(){if(b.shouldBatch()){if(!b.isPolling()){d.setTimeout((function n(){F(),b.isPolling()&&d.setTimeout(n,1e3)}),1e3),m.dispatch(u.SET_TRACKER_POLLING,!0),d.setTimeout((function(){m.dispatch(u.SET_TRACKER_BATCHING,!1),m.dispatch(u.SET_TRACKER_POLLING,!1)}),1e4)}}else F()}function W(n){return i.map(n,(function(n){return{campaign_id:n.layerId,experiment_id:n.decision.experimentId,variation_id:n.decision.variationId,is_campaign_holdback:n.decision.isLayerHoldback}}))}function Y(){var n=b.getPersistableState();if(n)try{s.debug("Persisting pending batch:",n),l.persistTrackerOptimizelyData(n),m.dispatch(u.SET_TRACKER_DIRTY,!1)}catch(t){s.debug("Failed to persist pending batch:",t)}}var K={trackLayerDecision:function(n){n.timing===f.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(n){var t=O(n.userFeatures),e={account_id:n.accountId,anonymize_ip:n.anonymizeIP,client_name:n.clientName,client_version:n.clientVersion,project_id:n.projectId,visitors:[{session_id:L(n.sessionId),visitor_id:n.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:n.layerId,experiment_id:n.experimentId,variation_id:n.variationId,is_campaign_holdback:n.isLayerHoldback}],events:[{uuid:n.decisionId,entity_id:n.layerId,timestamp:n.timestamp,type:E}]}]}]};m.dispatch(u.REGISTER_PREVIOUS_BATCH,e),$()}(n):function(n){var t={entity_id:n.layerId,type:E,uuid:n.decisionId,timestamp:n.timestamp};m.dispatch(u.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:W(n.layerStates)}),M(n.userFeatures),$()}(n)},postRedirectPolicy:f.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:f.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:A,onClientActivation:k,onClickEvent:R,onCustomEvent:x};n.exports=function(n){n.registerAnalyticsTracker("optimizely",K),p.on({filter:{type:g.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){m.dispatch(u.SET_TRACKER_SEND_EVENTS,!0),b.isPolling()||F()}}),p.on({filter:{type:g.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){m.dispatch(u.SET_TRACKER_SEND_EVENTS,!1)}}),m.dispatch(u.SET_TRACKER_SEND_EVENTS,!0);var t=p.on({filter:{type:"lifecycle",name:"activated"},handler:function(){b.observe(Y),p.off(t)}})}},2628:function(n,t,e){var i=e(9404),r={match:function(n,t){return i.apply(t.value)}};n.exports=function(n){n.registerViewMatcher("custom_code",r)}},7278:function(n,t,e){var i=e(6954),r={match:function(n,t){return!!i.querySelector(t.value)}};n.exports=function(n){n.registerViewMatcher("element_present",r)}},414:function(n,t,e){n.exports=function(n){n.registerViewProvider(e(2218)),n.registerViewMatcher("url",e(1154))}},1154:function(n,t,e){var i=e(859);n.exports={fieldsNeeded:["url"],match:function(n,t){return i(n.url,t)}}},2218:function(n,t,e){var i=e(4005);n.exports={provides:"url",getter:[function(){return i.getUrl()}]}},9330:function(n,t,e){var i=e(6954),r=e(7010).nodeNames,o=e(634);n.exports=function(n){var t,e=n.locator,u=i.querySelectorAll(e);if(u.length>0){var a=u[0];switch(a.nodeName){case r.INPUT:case r.SELECT:t=a.value.trim();break;default:t=(u[0].innerText||u[0].textContent).trim().replace(/\s+/g," ")}}return o(n.valueType,t)}},6363:function(n,t,e){var i=e(1295).enums.locatorType;n.exports=function(n){n.registerViewTagLocator(i.CSS_SELECTOR,e(9330))}},6357:function(n,t,e){var i=e(6954),r=e(8964),o=e(4658),u=e(9328),a=e(9840),c={token:void 0,setUpObserver:function(){u.createDOMChangedObserver(),this.token=o.on({filter:{type:"viewTrigger",name:"DOMChanged"},handler:function(){a.getViewsAndActivate(r.ViewActivationTypes.DOMChanged)}})},turnOffObserver:function(){o.off(this.token)}};n.exports=function(n){i.isReady()?c.setUpObserver():i.addReadyHandler(c.setUpObserver),n.registerViewTrigger("DOMChanged",c)}},106:function(n,t,e){var i=e(9576),r=e(4041),o=e(4658),u=e(7356),a=e(2188),c=r.get("stores/directive"),s="optimizelyPreview",f=function(n){a.getGlobal(s).push(n)};t.initialize=function(n){c.isSlave()&&function(n){var t=!1;if(i.isArray(window.optimizely)&&i.each(window.optimizely,(function(e){i.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===n&&(t=!0)})),!t)throw new Error("Preview projectId: "+n+" does not match expected")}(n),o.on({filter:{type:u.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),o.on({filter:{type:u.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),o.on({filter:{type:u.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),o.on({filter:{type:"error"},publicOnly:!0,handler:f})},t.setupPreviewGlobal=function(){a.getGlobal(s)||a.setGlobal(s,[])},t.pushToPreviewGlobal=function(n){f(n)}},8562:function(n,t,e){var i=e(9576),r=e(1243),o=e(3113),u=e(5434),a=e(3792),c=e(6954),s=e(4797),f=e(4243).mM,l=e(2678),d=e(7170),h=e(8398).Promise,v=e(1685),p=e(2188),g=e(3455),m=e(2805),y=e(8964),b=e(4041),_=b.get("stores/async_request"),w=b.get("stores/client_metadata"),E=b.get("stores/global"),I=b.get("stores/rum"),T=b.get("stores/performance"),S=(b.get("stores/xdomain"),b.get("stores/view_data")),A=e(7431),k="https://rum.optimizely.com/rum",x="1.0";function R(n){return i.isEmpty(n)?h.resolve():(t=function(){return g.request({url:k,method:"POST",data:n,withCredentials:!0}).then((function(n){return o.resolveRequest("RUM_FIRST_BEACON",n),n}))["catch"]((function(n){throw l.error("POST to client-rum failed:",n),o.rejectRequest("RUM_FIRST_BEACON",n),n}))},(e=_.getPromise("RUM_FIRST_BEACON"))?e.then(t):o.makeAsyncRequest("RUM_FIRST_BEACON",t));var t,e}function N(){try{return!c.querySelector("body")}catch(n){return null}}function D(){var n=p.getGlobal("performance"),t=n?n.timing:{},e=T.getMarks()||{},r=I.getApiData(),o=I.getDOMObservationData(),u=A.get("state").getActiveExperimentIds(),a=I.getFeaturesNeededData(),s=c.parseUri(I.getScriptSrc()),l=I.getRumData()||{},h=l.extras||{};i.assign(h,{apiCalls:r,DOMObservationData:o,paintTimings:O(),activeExperimentIds:u,numPages:S.getNumberOfPages(),snippet:{scheme:s.protocol.slice(0,-1),host:s.host,path:s.pathname},networkInfo:C(),experimental:E.getExperimental(),featuresNeeded:a,beacon:{cjsOnload:!0}});var g=p.getGlobal("Prototype");g&&!i.isUndefined(g.Version)&&(h.prototypeJS=g.Version);var m={id:I.getRumId(),v:x,project:E.getSnippetId()||E.getProjectId(),navigationTimings:t,userTimings:e,xd:!1,apis:i.keys(r),extras:h,sampleRate:l.sampleRate};(function(){var n=f.keys(),t=i.filter(i.map(n,(function(n){var t=v.getStorageKeyFromKey(n);return t?{key:n,isForeign:v.isForeignKey(n),category:t,size:n.length+f.getItem(n).length}:null}))),e=i.reduce(t,(function(n,t){var e=t.key,i=v.getIdFromKey(e);return i?((t.isForeign?n.foreign:n.local)[i]=!0,n):n}),{local:{},foreign:{}}),r=i.chain(t).filter({isForeign:!0}).reduce((function(n,t){return n[t.key.split("_")[0]]=!0,n}),{}).value(),o={local:0,foreign:0},u={local:{},foreign:{}};i.forEach(t,(function(n){var t=n.isForeign?"foreign":"local";o[t]+=n.size,u[t][n.category]||(u[t][n.category]=0),u[t][n.category]+=n.size}));var a={numKeys:f.allKeys().length,sizeKeys:f.allKeys().toString().length,sizeValues:f.allValues().toString().length,idCounts:{local:i.keys(e.local).length,foreign:i.keys(e.foreign).length},foreignOriginCount:i.keys(r).length,byteTotals:o,byteTotalsByCategory:u};return d.estimateStorage().then((function(n){return i.assign(a,{storageEstimate:n})}))})().then((function(n){R(i.assign(m,{lsMetrics:n}))}))}function C(){var n=p.getGlobal("navigator");if(n&&n.connection)return i.pick(n.connection,["downlink","rtt","effectiveType"])}function O(){var n=p.getGlobal("performance");if(n)try{var t=n.getEntriesByType("paint");if(i.isEmpty(t))return;return i.reduce(t,(function(n,t){return n[t.name]=Math.round(t.startTime),n}),{})}catch(e){return}}t.initialize=function(){var n,t=r.generate().replace(/-/g,"");n=Math.random()<.01;var e=function(){var n=c.getCurrentScript();if(n)return n.src}();s.dispatch(m.SET_RUM_DATA,{id:t,RumHost:k,inRumSample:n,src:e,data:{id:t,sync:N(),timebase:a.now(),sampleRate:.01,url:e,extras:{initialDOMState:c.getReadyState()}}})},t.queueBeacons=function(){return I.getSampleRum()?(function(){try{p.getGlobal("requestAnimationFrame")((function(){var n=I.getRumData().timebase;s.dispatch(m.SET_RUM_DATA,{data:{render:a.now()-(n||0)}})}))}catch(n){return}}(),c.isLoaded()?p.setTimeout(D,3e3):p.addEventListener("load",D),new h((function(n,t){p.setTimeout((function(){(function(){!function(){var n={id:I.getRumId(),v:x,account:E.getAccountId(),project:E.getSnippetId()||E.getProjectId(),snippet:E.getSnippetId(),revision:E.getRevision(),clientVersion:w.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},t=v.getPersistedBehaviorEventCount(),e=u.getEventCount();n.numBehaviorEvents=e;var r=e-t;i.extend(n.extras,{behaviorEventCountDiff:r,behaviorEventCountDecreased:r<0}),i.assign(n,function(){var n=p.getGlobal("performance");if(!n)return;var t,e=I.getScriptSrc();try{if(e){l.debug("Using derived script src: ",e);var r=n.getEntriesByName(e);r.length>0&&(t=r[0])}if(!t){var o=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;l.debug("Scanning resource timing entries with regex");var u=n.getEntriesByType("resource");t=i.find(u,(function(n){return o.test(n.name)}))}if(t)return i.mapValues(y.ResourceTimingAttributes,(function(n,e){var i=t[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?i||[]:void 0}))}catch(a){return}}(),T.getDurationsFor(i.values(y.RUMPerformanceTimingAttributes))),s.dispatch(m.SET_RUM_DATA,{data:n})}();var n=I.getRumData(),t=T.getMarks()||{};return n.extras=n.extras||{},n.extras.beacon={cjsTimeout:!0},n.userTimings=t,R(n=i.pickBy(n,(function(n){return!i.isUndefined(n)})))})().then(n,t)}),3e3)}))["catch"]((function(n){l.warn("RUM / Error sending data:",n)}))):h.resolve()}},4438:function(n,t){var e,i,r;i="undefined"!=typeof window?window:this,r=function(i,r){var o=[],u=o.slice,a=o.concat,c=o.push,s=o.indexOf,f={},l=f.toString,d=f.hasOwnProperty,h={},v="1.11.3",p=function(n,t){return new p.fn.init(n,t)},g=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,m=/^-ms-/,y=/-([\da-z])/gi,b=function(n,t){return t.toUpperCase()};function _(n){var t="length"in n&&n.length,e=p.type(n);return"function"!==e&&!p.isWindow(n)&&(!(1!==n.nodeType||!t)||"array"===e||0===t||"number"==typeof t&&t>0&&t-1 in n)}p.fn=p.prototype={jquery:v,constructor:p,selector:"",length:0,toArray:function(){return u.call(this)},get:function(n){return null!=n?n<0?this[n+this.length]:this[n]:u.call(this)},pushStack:function(n){var t=p.merge(this.constructor(),n);return t.prevObject=this,t.context=this.context,t},each:function(n,t){return p.each(this,n,t)},map:function(n){return this.pushStack(p.map(this,(function(t,e){return n.call(t,e,t)})))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(n){var t=this.length,e=+n+(n<0?t:0);return this.pushStack(e>=0&&e<t?[this[e]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:c,sort:o.sort,splice:o.splice},p.extend=p.fn.extend=function(){var n,t,e,i,r,o,u=arguments[0]||{},a=1,c=arguments.length,s=!1;for("boolean"==typeof u&&(s=u,u=arguments[a]||{},a++),"object"==typeof u||p.isFunction(u)||(u={}),a===c&&(u=this,a--);a<c;a++)if(null!=(r=arguments[a]))for(i in r)n=u[i],u!==(e=r[i])&&(s&&e&&(p.isPlainObject(e)||(t=p.isArray(e)))?(t?(t=!1,o=n&&p.isArray(n)?n:[]):o=n&&p.isPlainObject(n)?n:{},u[i]=p.extend(s,o,e)):e!==undefined&&(u[i]=e));return u},p.extend({expando:"jQuery"+(v+Math.random()).replace(/\D/g,""),isReady:!0,error:function(n){throw new Error(n)},noop:function(){},isFunction:function(n){return"function"===p.type(n)},isArray:Array.isArray||function(n){return"array"===p.type(n)},isWindow:function(n){return null!=n&&n==n.window},isNumeric:function(n){return!p.isArray(n)&&n-parseFloat(n)+1>=0},isEmptyObject:function(n){var t;for(t in n)return!1;return!0},isPlainObject:function(n){var t;if(!n||"object"!==p.type(n)||n.nodeType||p.isWindow(n))return!1;try{if(n.constructor&&!d.call(n,"constructor")&&!d.call(n.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(h.ownLast)for(t in n)return d.call(n,t);for(t in n);return t===undefined||d.call(n,t)},type:function(n){return null==n?n+"":"object"==typeof n||"function"==typeof n?f[l.call(n)]||"object":typeof n},globalEval:function(n){n&&p.trim(n)&&(i.execScript||function(n){i.eval.call(i,n)})(n)},camelCase:function(n){return n.replace(m,"ms-").replace(y,b)},nodeName:function(n,t){return n.nodeName&&n.nodeName.toLowerCase()===t.toLowerCase()},each:function(n,t,e){var i=0,r=n.length,o=_(n);if(e){if(o)for(;i<r&&!1!==t.apply(n[i],e);i++);else for(i in n)if(!1===t.apply(n[i],e))break}else if(o)for(;i<r&&!1!==t.call(n[i],i,n[i]);i++);else for(i in n)if(!1===t.call(n[i],i,n[i]))break;return n},trim:function(n){return null==n?"":(n+"").replace(g,"")},makeArray:function(n,t){var e=t||[];return null!=n&&(_(Object(n))?p.merge(e,"string"==typeof n?[n]:n):c.call(e,n)),e},inArray:function(n,t,e){var i;if(t){if(s)return s.call(t,n,e);for(i=t.length,e=e?e<0?Math.max(0,i+e):e:0;e<i;e++)if(e in t&&t[e]===n)return e}return-1},merge:function(n,t){for(var e=+t.length,i=0,r=n.length;i<e;)n[r++]=t[i++];if(e!=e)for(;t[i]!==undefined;)n[r++]=t[i++];return n.length=r,n},grep:function(n,t,e){for(var i=[],r=0,o=n.length,u=!e;r<o;r++)!t(n[r],r)!==u&&i.push(n[r]);return i},map:function(n,t,e){var i,r=0,o=n.length,u=[];if(_(n))for(;r<o;r++)null!=(i=t(n[r],r,e))&&u.push(i);else for(r in n)null!=(i=t(n[r],r,e))&&u.push(i);return a.apply([],u)},guid:1,proxy:function(n,t){var e,i,r;return"string"==typeof t&&(r=n[t],t=n,n=r),p.isFunction(n)?(e=u.call(arguments,2),i=function(){return n.apply(t||this,e.concat(u.call(arguments)))},i.guid=n.guid=n.guid||p.guid++,i):undefined},now:function(){return+new Date},support:h}),p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(n,t){f["[object "+t+"]"]=t.toLowerCase()}));var w=function(n){var t,e,i,r,o,u,a,c,s,f,l,d,h,v,p,g,m,y,b,_="sizzle"+1*new Date,w=n.document,E=0,I=0,T=an(),S=an(),A=an(),k=function(n,t){return n===t&&(l=!0),0},x=1<<31,R={}.hasOwnProperty,N=[],D=N.pop,C=N.push,O=N.push,P=N.slice,M=function(n,t){for(var e=0,i=n.length;e<i;e++)if(n[e]===t)return e;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",j="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",U=j.replace("w","w#"),V="\\[[\\x20\\t\\r\\n\\f]*("+j+")(?:"+F+"*([*^$|!~]?=)"+F+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+U+"))|)"+F+"*\\]",z=":("+j+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+V+")*)|.*)\\)|)",q=new RegExp(F+"+","g"),B=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),G=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),H=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),$=new RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]","g"),W=new RegExp(z),Y=new RegExp("^"+U+"$"),K={ID:new RegExp("^#("+j+")"),CLASS:new RegExp("^\\.("+j+")"),TAG:new RegExp("^("+j.replace("w","w*")+")"),ATTR:new RegExp("^"+V),PSEUDO:new RegExp("^"+z),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,nn=/[+~]/,tn=/'|\\/g,en=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig"),rn=function(n,t,e){var i="0x"+t-65536;return i!=i||e?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},on=function(){d()};try{O.apply(N=P.call(w.childNodes),w.childNodes),N[w.childNodes.length].nodeType}catch(In){O={apply:N.length?function(n,t){C.apply(n,P.call(t))}:function(n,t){for(var e=n.length,i=0;n[e++]=t[i++];);n.length=e-1}}}function un(n,t,i,r){var o,a,s,f,l,v,m,y,E,I;if((t?t.ownerDocument||t:w)!==h&&d(t),i=i||[],f=(t=t||h).nodeType,"string"!=typeof n||!n||1!==f&&9!==f&&11!==f)return i;if(!r&&p){if(11!==f&&(o=Z.exec(n)))if(s=o[1]){if(9===f){if(!(a=t.getElementById(s))||!a.parentNode)return i;if(a.id===s)return i.push(a),i}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&b(t,a)&&a.id===s)return i.push(a),i}else{if(o[2])return O.apply(i,t.getElementsByTagName(n)),i;if((s=o[3])&&e.getElementsByClassName)return O.apply(i,t.getElementsByClassName(s)),i}if(e.qsa&&(!g||!g.test(n))){if(y=m=_,E=t,I=1!==f&&n,1===f&&"object"!==t.nodeName.toLowerCase()){for(v=u(n),(m=t.getAttribute("id"))?y=m.replace(tn,"\\$&"):t.setAttribute("id",y),y="[id='"+y+"'] ",l=v.length;l--;)v[l]=y+mn(v[l]);E=nn.test(n)&&pn(t.parentNode)||t,I=v.join(",")}if(I)try{return O.apply(i,E.querySelectorAll(I)),i}catch(T){}finally{m||t.removeAttribute("id")}}}return c(n.replace(B,"$1"),t,i,r)}function an(){var n=[];return function t(e,r){return n.push(e+" ")>i.cacheLength&&delete t[n.shift()],t[e+" "]=r}}function cn(n){return n[_]=!0,n}function sn(n){var t=h.createElement("div");try{return!!n(t)}catch(In){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fn(n,t){for(var e=n.split("|"),r=n.length;r--;)i.attrHandle[e[r]]=t}function ln(n,t){var e=t&&n,i=e&&1===n.nodeType&&1===t.nodeType&&(~t.sourceIndex||x)-(~n.sourceIndex||x);if(i)return i;if(e)for(;e=e.nextSibling;)if(e===t)return-1;return n?1:-1}function dn(n){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===n}}function hn(n){return function(t){var e=t.nodeName.toLowerCase();return("input"===e||"button"===e)&&t.type===n}}function vn(n){return cn((function(t){return t=+t,cn((function(e,i){for(var r,o=n([],e.length,t),u=o.length;u--;)e[r=o[u]]&&(e[r]=!(i[r]=e[r]))}))}))}function pn(n){return n&&"undefined"!=typeof n.getElementsByTagName&&n}for(t in e=un.support={},o=un.isXML=function(n){var t=n&&(n.ownerDocument||n).documentElement;return!!t&&"HTML"!==t.nodeName},d=un.setDocument=function(n){var t,r,u=n?n.ownerDocument||n:w;return u!==h&&9===u.nodeType&&u.documentElement?(h=u,v=u.documentElement,(r=u.defaultView)&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",on,!1):r.attachEvent&&r.attachEvent("onunload",on)),p=!o(u),e.attributes=sn((function(n){return n.className="i",!n.getAttribute("className")})),e.getElementsByTagName=sn((function(n){return n.appendChild(u.createComment("")),!n.getElementsByTagName("*").length})),e.getElementsByClassName=Q.test(u.getElementsByClassName),e.getById=sn((function(n){return v.appendChild(n).id=_,!u.getElementsByName||!u.getElementsByName(_).length})),e.getById?(i.find.ID=function(n,t){if("undefined"!=typeof t.getElementById&&p){var e=t.getElementById(n);return e&&e.parentNode?[e]:[]}},i.filter.ID=function(n){var t=n.replace(en,rn);return function(n){return n.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(n){var t=n.replace(en,rn);return function(n){var e="undefined"!=typeof n.getAttributeNode&&n.getAttributeNode("id");return e&&e.value===t}}),i.find.TAG=e.getElementsByTagName?function(n,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(n):e.qsa?t.querySelectorAll(n):void 0}:function(n,t){var e,i=[],r=0,o=t.getElementsByTagName(n);if("*"===n){for(;e=o[r++];)1===e.nodeType&&i.push(e);return i}return o},i.find.CLASS=e.getElementsByClassName&&function(n,t){if(p)return t.getElementsByClassName(n)},m=[],g=[],(e.qsa=Q.test(u.querySelectorAll))&&(sn((function(n){v.appendChild(n).innerHTML="<a id='"+_+"'></a><select id='"+_+"-\f]' msallowcapture=''><option selected=''></option></select>",n.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),n.querySelectorAll("[selected]").length||g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|"+L+")"),n.querySelectorAll("[id~="+_+"-]").length||g.push("~="),n.querySelectorAll(":checked").length||g.push(":checked"),n.querySelectorAll("a#"+_+"+*").length||g.push(".#.+[+~]")})),sn((function(n){var t=u.createElement("input");t.setAttribute("type","hidden"),n.appendChild(t).setAttribute("name","D"),n.querySelectorAll("[name=d]").length&&g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),n.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),n.querySelectorAll("*,:x"),g.push(",.*:")}))),(e.matchesSelector=Q.test(y=v.matches||v.webkitMatchesSelector||v.mozMatchesSelector||v.oMatchesSelector||v.msMatchesSelector))&&sn((function(n){e.disconnectedMatch=y.call(n,"div"),y.call(n,"[s!='']:x"),m.push("!=",z)})),g=g.length&&new RegExp(g.join("|")),m=m.length&&new RegExp(m.join("|")),t=Q.test(v.compareDocumentPosition),b=t||Q.test(v.contains)?function(n,t){var e=9===n.nodeType?n.documentElement:n,i=t&&t.parentNode;return n===i||!(!i||1!==i.nodeType||!(e.contains?e.contains(i):n.compareDocumentPosition&&16&n.compareDocumentPosition(i)))}:function(n,t){if(t)for(;t=t.parentNode;)if(t===n)return!0;return!1},k=t?function(n,t){if(n===t)return l=!0,0;var i=!n.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(n.ownerDocument||n)===(t.ownerDocument||t)?n.compareDocumentPosition(t):1)||!e.sortDetached&&t.compareDocumentPosition(n)===i?n===u||n.ownerDocument===w&&b(w,n)?-1:t===u||t.ownerDocument===w&&b(w,t)?1:f?M(f,n)-M(f,t):0:4&i?-1:1)}:function(n,t){if(n===t)return l=!0,0;var e,i=0,r=n.parentNode,o=t.parentNode,a=[n],c=[t];if(!r||!o)return n===u?-1:t===u?1:r?-1:o?1:f?M(f,n)-M(f,t):0;if(r===o)return ln(n,t);for(e=n;e=e.parentNode;)a.unshift(e);for(e=t;e=e.parentNode;)c.unshift(e);for(;a[i]===c[i];)i++;return i?ln(a[i],c[i]):a[i]===w?-1:c[i]===w?1:0},u):h},un.matches=function(n,t){return un(n,null,null,t)},un.matchesSelector=function(n,t){if((n.ownerDocument||n)!==h&&d(n),t=t.replace($,"='$1']"),e.matchesSelector&&p&&(!m||!m.test(t))&&(!g||!g.test(t)))try{var i=y.call(n,t);if(i||e.disconnectedMatch||n.document&&11!==n.document.nodeType)return i}catch(In){}return un(t,h,null,[n]).length>0},un.contains=function(n,t){return(n.ownerDocument||n)!==h&&d(n),b(n,t)},un.attr=function(n,t){(n.ownerDocument||n)!==h&&d(n);var r=i.attrHandle[t.toLowerCase()],o=r&&R.call(i.attrHandle,t.toLowerCase())?r(n,t,!p):undefined;return o!==undefined?o:e.attributes||!p?n.getAttribute(t):(o=n.getAttributeNode(t))&&o.specified?o.value:null},un.error=function(n){throw new Error("Syntax error, unrecognized expression: "+n)},un.uniqueSort=function(n){var t,i=[],r=0,o=0;if(l=!e.detectDuplicates,f=!e.sortStable&&n.slice(0),n.sort(k),l){for(;t=n[o++];)t===n[o]&&(r=i.push(o));for(;r--;)n.splice(i[r],1)}return f=null,n},r=un.getText=function(n){var t,e="",i=0,o=n.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof n.textContent)return n.textContent;for(n=n.firstChild;n;n=n.nextSibling)e+=r(n)}else if(3===o||4===o)return n.nodeValue}else for(;t=n[i++];)e+=r(t);return e},i=un.selectors={cacheLength:50,createPseudo:cn,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(n){return n[1]=n[1].replace(en,rn),n[3]=(n[3]||n[4]||n[5]||"").replace(en,rn),"~="===n[2]&&(n[3]=" "+n[3]+" "),n.slice(0,4)},CHILD:function(n){return n[1]=n[1].toLowerCase(),"nth"===n[1].slice(0,3)?(n[3]||un.error(n[0]),n[4]=+(n[4]?n[5]+(n[6]||1):2*("even"===n[3]||"odd"===n[3])),n[5]=+(n[7]+n[8]||"odd"===n[3])):n[3]&&un.error(n[0]),n},PSEUDO:function(n){var t,e=!n[6]&&n[2];return K.CHILD.test(n[0])?null:(n[3]?n[2]=n[4]||n[5]||"":e&&W.test(e)&&(t=u(e,!0))&&(t=e.indexOf(")",e.length-t)-e.length)&&(n[0]=n[0].slice(0,t),n[2]=e.slice(0,t)),n.slice(0,3))}},filter:{TAG:function(n){var t=n.replace(en,rn).toLowerCase();return"*"===n?function(){return!0}:function(n){return n.nodeName&&n.nodeName.toLowerCase()===t}},CLASS:function(n){var t=T[n+" "];return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+n+"("+F+"|$)"))&&T(n,(function(n){return t.test("string"==typeof n.className&&n.className||"undefined"!=typeof n.getAttribute&&n.getAttribute("class")||"")}))},ATTR:function(n,t,e){return function(i){var r=un.attr(i,n);return null==r?"!="===t:!t||(r+="","="===t?r===e:"!="===t?r!==e:"^="===t?e&&0===r.indexOf(e):"*="===t?e&&r.indexOf(e)>-1:"$="===t?e&&r.slice(-e.length)===e:"~="===t?(" "+r.replace(q," ")+" ").indexOf(e)>-1:"|="===t&&(r===e||r.slice(0,e.length+1)===e+"-"))}},CHILD:function(n,t,e,i,r){var o="nth"!==n.slice(0,3),u="last"!==n.slice(-4),a="of-type"===t;return 1===i&&0===r?function(n){return!!n.parentNode}:function(t,e,c){var s,f,l,d,h,v,p=o!==u?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!c&&!a;if(g){if(o){for(;p;){for(l=t;l=l[p];)if(a?l.nodeName.toLowerCase()===m:1===l.nodeType)return!1;v=p="only"===n&&!v&&"nextSibling"}return!0}if(v=[u?g.firstChild:g.lastChild],u&&y){for(h=(s=(f=g[_]||(g[_]={}))[n]||[])[0]===E&&s[1],d=s[0]===E&&s[2],l=h&&g.childNodes[h];l=++h&&l&&l[p]||(d=h=0)||v.pop();)if(1===l.nodeType&&++d&&l===t){f[n]=[E,h,d];break}}else if(y&&(s=(t[_]||(t[_]={}))[n])&&s[0]===E)d=s[1];else for(;(l=++h&&l&&l[p]||(d=h=0)||v.pop())&&((a?l.nodeName.toLowerCase()!==m:1!==l.nodeType)||!++d||(y&&((l[_]||(l[_]={}))[n]=[E,d]),l!==t)););return(d-=r)===i||d%i==0&&d/i>=0}}},PSEUDO:function(n,t){var e,r=i.pseudos[n]||i.setFilters[n.toLowerCase()]||un.error("unsupported pseudo: "+n);return r[_]?r(t):r.length>1?(e=[n,n,"",t],i.setFilters.hasOwnProperty(n.toLowerCase())?cn((function(n,e){for(var i,o=r(n,t),u=o.length;u--;)n[i=M(n,o[u])]=!(e[i]=o[u])})):function(n){return r(n,0,e)}):r}},pseudos:{not:cn((function(n){var t=[],e=[],i=a(n.replace(B,"$1"));return i[_]?cn((function(n,t,e,r){for(var o,u=i(n,null,r,[]),a=n.length;a--;)(o=u[a])&&(n[a]=!(t[a]=o))})):function(n,r,o){return t[0]=n,i(t,null,o,e),t[0]=null,!e.pop()}})),has:cn((function(n){return function(t){return un(n,t).length>0}})),contains:cn((function(n){return n=n.replace(en,rn),function(t){return(t.textContent||t.innerText||r(t)).indexOf(n)>-1}})),lang:cn((function(n){return Y.test(n||"")||un.error("unsupported lang: "+n),n=n.replace(en,rn).toLowerCase(),function(t){var e;do{if(e=p?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(e=e.toLowerCase())===n||0===e.indexOf(n+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var e=n.location&&n.location.hash;return e&&e.slice(1)===t.id},root:function(n){return n===v},focus:function(n){return n===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(n.type||n.href||~n.tabIndex)},enabled:function(n){return!1===n.disabled},disabled:function(n){return!0===n.disabled},checked:function(n){var t=n.nodeName.toLowerCase();return"input"===t&&!!n.checked||"option"===t&&!!n.selected},selected:function(n){return n.parentNode&&n.parentNode.selectedIndex,!0===n.selected},empty:function(n){for(n=n.firstChild;n;n=n.nextSibling)if(n.nodeType<6)return!1;return!0},parent:function(n){return!i.pseudos.empty(n)},header:function(n){return J.test(n.nodeName)},input:function(n){return X.test(n.nodeName)},button:function(n){var t=n.nodeName.toLowerCase();return"input"===t&&"button"===n.type||"button"===t},text:function(n){var t;return"input"===n.nodeName.toLowerCase()&&"text"===n.type&&(null==(t=n.getAttribute("type"))||"text"===t.toLowerCase())},first:vn((function(){return[0]})),last:vn((function(n,t){return[t-1]})),eq:vn((function(n,t,e){return[e<0?e+t:e]})),even:vn((function(n,t){for(var e=0;e<t;e+=2)n.push(e);return n})),odd:vn((function(n,t){for(var e=1;e<t;e+=2)n.push(e);return n})),lt:vn((function(n,t,e){for(var i=e<0?e+t:e;--i>=0;)n.push(i);return n})),gt:vn((function(n,t,e){for(var i=e<0?e+t:e;++i<t;)n.push(i);return n}))}},i.pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=dn(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=hn(t);function gn(){}function mn(n){for(var t=0,e=n.length,i="";t<e;t++)i+=n[t].value;return i}function yn(n,t,e){var i=t.dir,r=e&&"parentNode"===i,o=I++;return t.first?function(t,e,o){for(;t=t[i];)if(1===t.nodeType||r)return n(t,e,o)}:function(t,e,u){var a,c,s=[E,o];if(u){for(;t=t[i];)if((1===t.nodeType||r)&&n(t,e,u))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if((a=(c=t[_]||(t[_]={}))[i])&&a[0]===E&&a[1]===o)return s[2]=a[2];if(c[i]=s,s[2]=n(t,e,u))return!0}}}function bn(n){return n.length>1?function(t,e,i){for(var r=n.length;r--;)if(!n[r](t,e,i))return!1;return!0}:n[0]}function _n(n,t,e,i,r){for(var o,u=[],a=0,c=n.length,s=null!=t;a<c;a++)(o=n[a])&&(e&&!e(o,i,r)||(u.push(o),s&&t.push(a)));return u}function wn(n,t,e,i,r,o){return i&&!i[_]&&(i=wn(i)),r&&!r[_]&&(r=wn(r,o)),cn((function(o,u,a,c){var s,f,l,d=[],h=[],v=u.length,p=o||function(n,t,e){for(var i=0,r=t.length;i<r;i++)un(n,t[i],e);return e}(t||"*",a.nodeType?[a]:a,[]),g=!n||!o&&t?p:_n(p,d,n,a,c),m=e?r||(o?n:v||i)?[]:u:g;if(e&&e(g,m,a,c),i)for(s=_n(m,h),i(s,[],a,c),f=s.length;f--;)(l=s[f])&&(m[h[f]]=!(g[h[f]]=l));if(o){if(r||n){if(r){for(s=[],f=m.length;f--;)(l=m[f])&&s.push(g[f]=l);r(null,m=[],s,c)}for(f=m.length;f--;)(l=m[f])&&(s=r?M(o,l):d[f])>-1&&(o[s]=!(u[s]=l))}}else m=_n(m===u?m.splice(v,m.length):m),r?r(null,u,m,c):O.apply(u,m)}))}function En(n){for(var t,e,r,o=n.length,u=i.relative[n[0].type],a=u||i.relative[" "],c=u?1:0,f=yn((function(n){return n===t}),a,!0),l=yn((function(n){return M(t,n)>-1}),a,!0),d=[function(n,e,i){var r=!u&&(i||e!==s)||((t=e).nodeType?f(n,e,i):l(n,e,i));return t=null,r}];c<o;c++)if(e=i.relative[n[c].type])d=[yn(bn(d),e)];else{if((e=i.filter[n[c].type].apply(null,n[c].matches))[_]){for(r=++c;r<o&&!i.relative[n[r].type];r++);return wn(c>1&&bn(d),c>1&&mn(n.slice(0,c-1).concat({value:" "===n[c-2].type?"*":""})).replace(B,"$1"),e,c<r&&En(n.slice(c,r)),r<o&&En(n=n.slice(r)),r<o&&mn(n))}d.push(e)}return bn(d)}return gn.prototype=i.filters=i.pseudos,i.setFilters=new gn,u=un.tokenize=function(n,t){var e,r,o,u,a,c,s,f=S[n+" "];if(f)return t?0:f.slice(0);for(a=n,c=[],s=i.preFilter;a;){for(u in e&&!(r=G.exec(a))||(r&&(a=a.slice(r[0].length)||a),c.push(o=[])),e=!1,(r=H.exec(a))&&(e=r.shift(),o.push({value:e,type:r[0].replace(B," ")}),a=a.slice(e.length)),i.filter)!(r=K[u].exec(a))||s[u]&&!(r=s[u](r))||(e=r.shift(),o.push({value:e,type:u,matches:r}),a=a.slice(e.length));if(!e)break}return t?a.length:a?un.error(n):S(n,c).slice(0)},a=un.compile=function(n,t){var e,r=[],o=[],a=A[n+" "];if(!a){for(t||(t=u(n)),e=t.length;e--;)(a=En(t[e]))[_]?r.push(a):o.push(a);a=A(n,function(n,t){var e=t.length>0,r=n.length>0,o=function(o,u,a,c,f){var l,d,v,p=0,g="0",m=o&&[],y=[],b=s,_=o||r&&i.find.TAG("*",f),w=E+=null==b?1:Math.random()||.1,I=_.length;for(f&&(s=u!==h&&u);g!==I&&null!=(l=_[g]);g++){if(r&&l){for(d=0;v=n[d++];)if(v(l,u,a)){c.push(l);break}f&&(E=w)}e&&((l=!v&&l)&&p--,o&&m.push(l))}if(p+=g,e&&g!==p){for(d=0;v=t[d++];)v(m,y,u,a);if(o){if(p>0)for(;g--;)m[g]||y[g]||(y[g]=D.call(c));y=_n(y)}O.apply(c,y),f&&!o&&y.length>0&&p+t.length>1&&un.uniqueSort(c)}return f&&(E=w,s=b),m};return e?cn(o):o}(o,r)),a.selector=n}return a},c=un.select=function(n,t,r,o){var c,s,f,l,d,h="function"==typeof n&&n,v=!o&&u(n=h.selector||n);if(r=r||[],1===v.length){if((s=v[0]=v[0].slice(0)).length>2&&"ID"===(f=s[0]).type&&e.getById&&9===t.nodeType&&p&&i.relative[s[1].type]){if(!(t=(i.find.ID(f.matches[0].replace(en,rn),t)||[])[0]))return r;h&&(t=t.parentNode),n=n.slice(s.shift().value.length)}for(c=K.needsContext.test(n)?0:s.length;c--&&(f=s[c],!i.relative[l=f.type]);)if((d=i.find[l])&&(o=d(f.matches[0].replace(en,rn),nn.test(s[0].type)&&pn(t.parentNode)||t))){if(s.splice(c,1),!(n=o.length&&mn(s)))return O.apply(r,o),r;break}}return(h||a(n,v))(o,t,!p,r,nn.test(n)&&pn(t.parentNode)||t),r},e.sortStable=_.split("").sort(k).join("")===_,e.detectDuplicates=!!l,d(),e.sortDetached=sn((function(n){return 1&n.compareDocumentPosition(h.createElement("div"))})),sn((function(n){return n.innerHTML="<a href='#'></a>","#"===n.firstChild.getAttribute("href")}))||fn("type|href|height|width",(function(n,t,e){if(!e)return n.getAttribute(t,"type"===t.toLowerCase()?1:2)})),e.attributes&&sn((function(n){return n.innerHTML="<input/>",n.firstChild.setAttribute("value",""),""===n.firstChild.getAttribute("value")}))||fn("value",(function(n,t,e){if(!e&&"input"===n.nodeName.toLowerCase())return n.defaultValue})),sn((function(n){return null==n.getAttribute("disabled")}))||fn(L,(function(n,t,e){var i;if(!e)return!0===n[t]?t.toLowerCase():(i=n.getAttributeNode(t))&&i.specified?i.value:null})),un}(i);p.find=w,p.expr=w.selectors,p.expr[":"]=p.expr.pseudos,p.unique=w.uniqueSort,p.text=w.getText,p.isXMLDoc=w.isXML,p.contains=w.contains;var E=p.expr.match.needsContext,I=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,T=/^.[^:#\[\.,]*$/;function S(n,t,e){if(p.isFunction(t))return p.grep(n,(function(n,i){return!!t.call(n,i,n)!==e}));if(t.nodeType)return p.grep(n,(function(n){return n===t!==e}));if("string"==typeof t){if(T.test(t))return p.filter(t,n,e);t=p.filter(t,n)}return p.grep(n,(function(n){return p.inArray(n,t)>=0!==e}))}p.filter=function(n,t,e){var i=t[0];return e&&(n=":not("+n+")"),1===t.length&&1===i.nodeType?p.find.matchesSelector(i,n)?[i]:[]:p.find.matches(n,p.grep(t,(function(n){return 1===n.nodeType})))},p.fn.extend({find:function(n){var t,e=[],i=this,r=i.length;if("string"!=typeof n)return this.pushStack(p(n).filter((function(){for(t=0;t<r;t++)if(p.contains(i[t],this))return!0})));for(t=0;t<r;t++)p.find(n,i[t],e);return(e=this.pushStack(r>1?p.unique(e):e)).selector=this.selector?this.selector+" "+n:n,e},filter:function(n){return this.pushStack(S(this,n||[],!1))},not:function(n){return this.pushStack(S(this,n||[],!0))},is:function(n){return!!S(this,"string"==typeof n&&E.test(n)?p(n):n||[],!1).length}});var A,k=i.document,x=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(p.fn.init=function(n,t){var e,i;if(!n)return this;if("string"==typeof n){if(!(e="<"===n.charAt(0)&&">"===n.charAt(n.length-1)&&n.length>=3?[null,n,null]:x.exec(n))||!e[1]&&t)return!t||t.jquery?(t||A).find(n):this.constructor(t).find(n);if(e[1]){if(t=t instanceof p?t[0]:t,p.merge(this,p.parseHTML(e[1],t&&t.nodeType?t.ownerDocument||t:k,!0)),I.test(e[1])&&p.isPlainObject(t))for(e in t)p.isFunction(this[e])?this[e](t[e]):this.attr(e,t[e]);return this}if((i=k.getElementById(e[2]))&&i.parentNode){if(i.id!==e[2])return A.find(n);this.length=1,this[0]=i}return this.context=k,this.selector=n,this}return n.nodeType?(this.context=this[0]=n,this.length=1,this):p.isFunction(n)?"undefined"!=typeof A.ready?A.ready(n):n(p):(n.selector!==undefined&&(this.selector=n.selector,this.context=n.context),p.makeArray(n,this))}).prototype=p.fn,A=p(k);var R=/^(?:parents|prev(?:Until|All))/,N={children:!0,contents:!0,next:!0,prev:!0};function D(n,t){do{n=n[t]}while(n&&1!==n.nodeType);return n}p.extend({dir:function(n,t,e){for(var i=[],r=n[t];r&&9!==r.nodeType&&(e===undefined||1!==r.nodeType||!p(r).is(e));)1===r.nodeType&&i.push(r),r=r[t];return i},sibling:function(n,t){for(var e=[];n;n=n.nextSibling)1===n.nodeType&&n!==t&&e.push(n);return e}}),p.fn.extend({has:function(n){var t,e=p(n,this),i=e.length;return this.filter((function(){for(t=0;t<i;t++)if(p.contains(this,e[t]))return!0}))},closest:function(n,t){for(var e,i=0,r=this.length,o=[],u=E.test(n)||"string"!=typeof n?p(n,t||this.context):0;i<r;i++)for(e=this[i];e&&e!==t;e=e.parentNode)if(e.nodeType<11&&(u?u.index(e)>-1:1===e.nodeType&&p.find.matchesSelector(e,n))){o.push(e);break}return this.pushStack(o.length>1?p.unique(o):o)},index:function(n){return n?"string"==typeof n?p.inArray(this[0],p(n)):p.inArray(n.jquery?n[0]:n,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(n,t){return this.pushStack(p.unique(p.merge(this.get(),p(n,t))))},addBack:function(n){return this.add(null==n?this.prevObject:this.prevObject.filter(n))}}),p.each({parent:function(n){var t=n.parentNode;return t&&11!==t.nodeType?t:null},parents:function(n){return p.dir(n,"parentNode")},parentsUntil:function(n,t,e){return p.dir(n,"parentNode",e)},next:function(n){return D(n,"nextSibling")},prev:function(n){return D(n,"previousSibling")},nextAll:function(n){return p.dir(n,"nextSibling")},prevAll:function(n){return p.dir(n,"previousSibling")},nextUntil:function(n,t,e){return p.dir(n,"nextSibling",e)},prevUntil:function(n,t,e){return p.dir(n,"previousSibling",e)},siblings:function(n){return p.sibling((n.parentNode||{}).firstChild,n)},children:function(n){return p.sibling(n.firstChild)},contents:function(n){return p.nodeName(n,"iframe")?n.contentDocument||n.contentWindow.document:p.merge([],n.childNodes)}},(function(n,t){p.fn[n]=function(e,i){var r=p.map(this,t,e);return"Until"!==n.slice(-5)&&(i=e),i&&"string"==typeof i&&(r=p.filter(i,r)),this.length>1&&(N[n]||(r=p.unique(r)),R.test(n)&&(r=r.reverse())),this.pushStack(r)}}));var C,O=/\S+/g,P={};function M(){k.addEventListener?(k.removeEventListener("DOMContentLoaded",L,!1),i.removeEventListener("load",L,!1)):(k.detachEvent("onreadystatechange",L),i.detachEvent("onload",L))}function L(){(k.addEventListener||"load"===event.type||"complete"===k.readyState)&&(M(),p.ready())}p.Callbacks=function(n){n="string"==typeof n?P[n]||function(n){var t=P[n]={};return p.each(n.match(O)||[],(function(n,e){t[e]=!0})),t}(n):p.extend({},n);var t,e,i,r,o,u,a=[],c=!n.once&&[],s=function(l){for(e=n.memory&&l,i=!0,o=u||0,u=0,r=a.length,t=!0;a&&o<r;o++)if(!1===a[o].apply(l[0],l[1])&&n.stopOnFalse){e=!1;break}t=!1,a&&(c?c.length&&s(c.shift()):e?a=[]:f.disable())},f={add:function(){if(a){var i=a.length;!function o(t){p.each(t,(function(t,e){var i=p.type(e);"function"===i?n.unique&&f.has(e)||a.push(e):e&&e.length&&"string"!==i&&o(e)}))}(arguments),t?r=a.length:e&&(u=i,s(e))}return this},remove:function(){return a&&p.each(arguments,(function(n,e){for(var i;(i=p.inArray(e,a,i))>-1;)a.splice(i,1),t&&(i<=r&&r--,i<=o&&o--)})),this},has:function(n){return n?p.inArray(n,a)>-1:!(!a||!a.length)},empty:function(){return a=[],r=0,this},disable:function(){return a=c=e=undefined,this},disabled:function(){return!a},lock:function(){return c=undefined,e||f.disable(),this},locked:function(){return!c},fireWith:function(n,e){return!a||i&&!c||(e=[n,(e=e||[]).slice?e.slice():e],t?c.push(e):s(e)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!i}};return f},p.extend({Deferred:function(n){var t=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],e="pending",i={state:function(){return e},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var n=arguments;return p.Deferred((function(e){p.each(t,(function(t,o){var u=p.isFunction(n[t])&&n[t];r[o[1]]((function(){var n=u&&u.apply(this,arguments);n&&p.isFunction(n.promise)?n.promise().done(e.resolve).fail(e.reject).progress(e.notify):e[o[0]+"With"](this===i?e.promise():this,u?[n]:arguments)}))})),n=null})).promise()},promise:function(n){return null!=n?p.extend(n,i):i}},r={};return i.pipe=i.then,p.each(t,(function(n,o){var u=o[2],a=o[3];i[o[1]]=u.add,a&&u.add((function(){e=a}),t[1^n][2].disable,t[2][2].lock),r[o[0]]=function(){return r[o[0]+"With"](this===r?i:this,arguments),this},r[o[0]+"With"]=u.fireWith})),i.promise(r),n&&n.call(r,r),r},when:function(n){var t,e,i,r=0,o=u.call(arguments),a=o.length,c=1!==a||n&&p.isFunction(n.promise)?a:0,s=1===c?n:p.Deferred(),f=function(n,e,i){return function(r){e[n]=this,i[n]=arguments.length>1?u.call(arguments):r,i===t?s.notifyWith(e,i):--c||s.resolveWith(e,i)}};if(a>1)for(t=new Array(a),e=new Array(a),i=new Array(a);r<a;r++)o[r]&&p.isFunction(o[r].promise)?o[r].promise().done(f(r,i,o)).fail(s.reject).progress(f(r,e,t)):--c;return c||s.resolveWith(i,o),s.promise()}}),p.fn.ready=function(n){return p.ready.promise().done(n),this},p.extend({isReady:!1,readyWait:1,holdReady:function(n){n?p.readyWait++:p.ready(!0)},ready:function(n){if(!(!0===n?--p.readyWait:p.isReady)){if(!k.body)return setTimeout(p.ready);p.isReady=!0,!0!==n&&--p.readyWait>0||(C.resolveWith(k,[p]),p.fn.triggerHandler&&(p(k).triggerHandler("ready"),p(k).off("ready")))}}}),p.ready.promise=function(n){if(!C)if(C=p.Deferred(),"complete"===k.readyState)setTimeout(p.ready);else if(k.addEventListener)k.addEventListener("DOMContentLoaded",L,!1),i.addEventListener("load",L,!1);else{k.attachEvent("onreadystatechange",L),i.attachEvent("onload",L);var t=!1;try{t=null==i.frameElement&&k.documentElement}catch(e){}t&&t.doScroll&&function n(){if(!p.isReady){try{t.doScroll("left")}catch(e){return setTimeout(n,50)}M(),p.ready()}}()}return C.promise(n)};var F,j=typeof undefined;for(F in p(h))break;h.ownLast="0"!==F,h.inlineBlockNeedsLayout=!1,p((function(){var n,t,e,i;(e=k.getElementsByTagName("body")[0])&&e.style&&(t=k.createElement("div"),(i=k.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",e.appendChild(i).appendChild(t),typeof t.style.zoom!==j&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",h.inlineBlockNeedsLayout=n=3===t.offsetWidth,n&&(e.style.zoom=1)),e.removeChild(i))})),function(){var n=k.createElement("div");if(null==h.deleteExpando){h.deleteExpando=!0;try{delete n.test}catch(t){h.deleteExpando=!1}}n=null}(),p.acceptData=function(n){var t=p.noData[(n.nodeName+" ").toLowerCase()],e=+n.nodeType||1;return(1===e||9===e)&&(!t||!0!==t&&n.getAttribute("classid")===t)};var U=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,V=/([A-Z])/g;function z(n,t,e){if(e===undefined&&1===n.nodeType){var i="data-"+t.replace(V,"-$1").toLowerCase();if("string"==typeof(e=n.getAttribute(i))){try{e="true"===e||"false"!==e&&("null"===e?null:+e+""===e?+e:U.test(e)?p.parseJSON(e):e)}catch(r){}p.data(n,t,e)}else e=undefined}return e}function q(n){var t;for(t in n)if(("data"!==t||!p.isEmptyObject(n[t]))&&"toJSON"!==t)return!1;return!0}function B(n,t,e,i){if(p.acceptData(n)){var r,u,a=p.expando,c=n.nodeType,s=c?p.cache:n,f=c?n[a]:n[a]&&a;if(f&&s[f]&&(i||s[f].data)||e!==undefined||"string"!=typeof t)return f||(f=c?n[a]=o.pop()||p.guid++:a),s[f]||(s[f]=c?{}:{toJSON:p.noop}),"object"!=typeof t&&"function"!=typeof t||(i?s[f]=p.extend(s[f],t):s[f].data=p.extend(s[f].data,t)),u=s[f],i||(u.data||(u.data={}),u=u.data),e!==undefined&&(u[p.camelCase(t)]=e),"string"==typeof t?null==(r=u[t])&&(r=u[p.camelCase(t)]):r=u,r}}function G(n,t,e){if(p.acceptData(n)){var i,r,o=n.nodeType,u=o?p.cache:n,a=o?n[p.expando]:p.expando;if(u[a]){if(t&&(i=e?u[a]:u[a].data)){r=(t=p.isArray(t)?t.concat(p.map(t,p.camelCase)):t in i||(t=p.camelCase(t))in i?[t]:t.split(" ")).length;for(;r--;)delete i[t[r]];if(e?!q(i):!p.isEmptyObject(i))return}(e||(delete u[a].data,q(u[a])))&&(o?p.cleanData([n],!0):h.deleteExpando||u!=u.window?delete u[a]:u[a]=null)}}}p.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(n){return!!(n=n.nodeType?p.cache[n[p.expando]]:n[p.expando])&&!q(n)},data:function(n,t,e){return B(n,t,e)},removeData:function(n,t){return G(n,t)},_data:function(n,t,e){return B(n,t,e,!0)},_removeData:function(n,t){return G(n,t,!0)}}),p.fn.extend({data:function(n,t){var e,i,r,o=this[0],u=o&&o.attributes;if(n===undefined){if(this.length&&(r=p.data(o),1===o.nodeType&&!p._data(o,"parsedAttrs"))){for(e=u.length;e--;)u[e]&&0===(i=u[e].name).indexOf("data-")&&z(o,i=p.camelCase(i.slice(5)),r[i]);p._data(o,"parsedAttrs",!0)}return r}return"object"==typeof n?this.each((function(){p.data(this,n)})):arguments.length>1?this.each((function(){p.data(this,n,t)})):o?z(o,n,p.data(o,n)):undefined},removeData:function(n){return this.each((function(){p.removeData(this,n)}))}}),p.extend({queue:function(n,t,e){var i;if(n)return t=(t||"fx")+"queue",i=p._data(n,t),e&&(!i||p.isArray(e)?i=p._data(n,t,p.makeArray(e)):i.push(e)),i||[]},dequeue:function(n,t){t=t||"fx";var e=p.queue(n,t),i=e.length,r=e.shift(),o=p._queueHooks(n,t);"inprogress"===r&&(r=e.shift(),i--),r&&("fx"===t&&e.unshift("inprogress"),delete o.stop,r.call(n,(function(){p.dequeue(n,t)}),o)),!i&&o&&o.empty.fire()},_queueHooks:function(n,t){var e=t+"queueHooks";return p._data(n,e)||p._data(n,e,{empty:p.Callbacks("once memory").add((function(){p._removeData(n,t+"queue"),p._removeData(n,e)}))})}}),p.fn.extend({queue:function(n,t){var e=2;return"string"!=typeof n&&(t=n,n="fx",e--),arguments.length<e?p.queue(this[0],n):t===undefined?this:this.each((function(){var e=p.queue(this,n,t);p._queueHooks(this,n),"fx"===n&&"inprogress"!==e[0]&&p.dequeue(this,n)}))},dequeue:function(n){return this.each((function(){p.dequeue(this,n)}))},clearQueue:function(n){return this.queue(n||"fx",[])},promise:function(n,t){var e,i=1,r=p.Deferred(),o=this,u=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof n&&(t=n,n=undefined),n=n||"fx";u--;)(e=p._data(o[u],n+"queueHooks"))&&e.empty&&(i++,e.empty.add(a));return a(),r.promise(t)}});var H=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$=["Top","Right","Bottom","Left"],W=function(n,t){return n=t||n,"none"===p.css(n,"display")||!p.contains(n.ownerDocument,n)},Y=p.access=function(n,t,e,i,r,o,u){var a=0,c=n.length,s=null==e;if("object"===p.type(e))for(a in r=!0,e)p.access(n,t,a,e[a],!0,o,u);else if(i!==undefined&&(r=!0,p.isFunction(i)||(u=!0),s&&(u?(t.call(n,i),t=null):(s=t,t=function(n,t,e){return s.call(p(n),e)})),t))for(;a<c;a++)t(n[a],e,u?i:i.call(n[a],a,t(n[a],e)));return r?n:s?t.call(n):c?t(n[0],e):o},K=/^(?:checkbox|radio)$/i;!function(){var n=k.createElement("input"),t=k.createElement("div"),e=k.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",h.leadingWhitespace=3===t.firstChild.nodeType,h.tbody=!t.getElementsByTagName("tbody").length,h.htmlSerialize=!!t.getElementsByTagName("link").length,h.html5Clone="<:nav></:nav>"!==k.createElement("nav").cloneNode(!0).outerHTML,n.type="checkbox",n.checked=!0,e.appendChild(n),h.appendChecked=n.checked,t.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,e.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",h.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,h.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",(function(){h.noCloneEvent=!1})),t.cloneNode(!0).click()),null==h.deleteExpando){h.deleteExpando=!0;try{delete t.test}catch(i){h.deleteExpando=!1}}}(),function(){var n,t,e=k.createElement("div");for(n in{submit:!0,change:!0,focusin:!0})t="on"+n,(h[n+"Bubbles"]=t in i)||(e.setAttribute(t,"t"),h[n+"Bubbles"]=!1===e.attributes[t].expando);e=null}();var X=/^(?:input|select|textarea)$/i,J=/^key/,Q=/^(?:mouse|pointer|contextmenu)|click/,Z=/^(?:focusinfocus|focusoutblur)$/,nn=/^([^.]*)(?:\.(.+)|)$/;function tn(){return!0}function en(){return!1}function rn(){try{return k.activeElement}catch(n){}}function on(n){var t=un.split("|"),e=n.createDocumentFragment();if(e.createElement)for(;t.length;)e.createElement(t.pop());return e}p.event={global:{},add:function(n,t,e,i,r){var o,u,a,c,s,f,l,d,h,v,g,m=p._data(n);if(m){for(e.handler&&(e=(c=e).handler,r=c.selector),e.guid||(e.guid=p.guid++),(u=m.events)||(u=m.events={}),(f=m.handle)||(f=m.handle=function(n){return typeof p===j||n&&p.event.triggered===n.type?undefined:p.event.dispatch.apply(f.elem,arguments)},f.elem=n),a=(t=(t||"").match(O)||[""]).length;a--;)h=g=(o=nn.exec(t[a])||[])[1],v=(o[2]||"").split(".").sort(),h&&(s=p.event.special[h]||{},h=(r?s.delegateType:s.bindType)||h,s=p.event.special[h]||{},l=p.extend({type:h,origType:g,data:i,handler:e,guid:e.guid,selector:r,needsContext:r&&p.expr.match.needsContext.test(r),namespace:v.join(".")},c),(d=u[h])||((d=u[h]=[]).delegateCount=0,s.setup&&!1!==s.setup.call(n,i,v,f)||(n.addEventListener?n.addEventListener(h,f,!1):n.attachEvent&&n.attachEvent("on"+h,f))),s.add&&(s.add.call(n,l),l.handler.guid||(l.handler.guid=e.guid)),r?d.splice(d.delegateCount++,0,l):d.push(l),p.event.global[h]=!0);n=null}},remove:function(n,t,e,i,r){var o,u,a,c,s,f,l,d,h,v,g,m=p.hasData(n)&&p._data(n);if(m&&(f=m.events)){for(s=(t=(t||"").match(O)||[""]).length;s--;)if(h=g=(a=nn.exec(t[s])||[])[1],v=(a[2]||"").split(".").sort(),h){for(l=p.event.special[h]||{},d=f[h=(i?l.delegateType:l.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"),c=o=d.length;o--;)u=d[o],!r&&g!==u.origType||e&&e.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(d.splice(o,1),u.selector&&d.delegateCount--,l.remove&&l.remove.call(n,u));c&&!d.length&&(l.teardown&&!1!==l.teardown.call(n,v,m.handle)||p.removeEvent(n,h,m.handle),delete f[h])}else for(h in f)p.event.remove(n,h+t[s],e,i,!0);p.isEmptyObject(f)&&(delete m.handle,p._removeData(n,"events"))}},trigger:function(n,t,e,r){var o,u,a,c,s,f,l,h=[e||k],v=d.call(n,"type")?n.type:n,g=d.call(n,"namespace")?n.namespace.split("."):[];if(a=f=e=e||k,3!==e.nodeType&&8!==e.nodeType&&!Z.test(v+p.event.triggered)&&(v.indexOf(".")>=0&&(g=v.split("."),v=g.shift(),g.sort()),u=v.indexOf(":")<0&&"on"+v,(n=n[p.expando]?n:new p.Event(v,"object"==typeof n&&n)).isTrigger=r?2:3,n.namespace=g.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=undefined,n.target||(n.target=e),t=null==t?[n]:p.makeArray(t,[n]),s=p.event.special[v]||{},r||!s.trigger||!1!==s.trigger.apply(e,t))){if(!r&&!s.noBubble&&!p.isWindow(e)){for(c=s.delegateType||v,Z.test(c+v)||(a=a.parentNode);a;a=a.parentNode)h.push(a),f=a;f===(e.ownerDocument||k)&&h.push(f.defaultView||f.parentWindow||i)}for(l=0;(a=h[l++])&&!n.isPropagationStopped();)n.type=l>1?c:s.bindType||v,(o=(p._data(a,"events")||{})[n.type]&&p._data(a,"handle"))&&o.apply(a,t),(o=u&&a[u])&&o.apply&&p.acceptData(a)&&(n.result=o.apply(a,t),!1===n.result&&n.preventDefault());if(n.type=v,!r&&!n.isDefaultPrevented()&&(!s._default||!1===s._default.apply(h.pop(),t))&&p.acceptData(e)&&u&&e[v]&&!p.isWindow(e)){(f=e[u])&&(e[u]=null),p.event.triggered=v;try{e[v]()}catch(m){}p.event.triggered=undefined,f&&(e[u]=f)}return n.result}},dispatch:function(n){n=p.event.fix(n);var t,e,i,r,o,a=[],c=u.call(arguments),s=(p._data(this,"events")||{})[n.type]||[],f=p.event.special[n.type]||{};if(c[0]=n,n.delegateTarget=this,!f.preDispatch||!1!==f.preDispatch.call(this,n)){for(a=p.event.handlers.call(this,n,s),t=0;(r=a[t++])&&!n.isPropagationStopped();)for(n.currentTarget=r.elem,o=0;(i=r.handlers[o++])&&!n.isImmediatePropagationStopped();)n.namespace_re&&!n.namespace_re.test(i.namespace)||(n.handleObj=i,n.data=i.data,(e=((p.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,c))!==undefined&&!1===(n.result=e)&&(n.preventDefault(),n.stopPropagation()));return f.postDispatch&&f.postDispatch.call(this,n),n.result}},handlers:function(n,t){var e,i,r,o,u=[],a=t.delegateCount,c=n.target;if(a&&c.nodeType&&(!n.button||"click"!==n.type))for(;c!=this;c=c.parentNode||this)if(1===c.nodeType&&(!0!==c.disabled||"click"!==n.type)){for(r=[],o=0;o<a;o++)r[e=(i=t[o]).selector+" "]===undefined&&(r[e]=i.needsContext?p(e,this).index(c)>=0:p.find(e,this,null,[c]).length),r[e]&&r.push(i);r.length&&u.push({elem:c,handlers:r})}return a<t.length&&u.push({elem:this,handlers:t.slice(a)}),u},fix:function(n){if(n[p.expando])return n;var t,e,i,r=n.type,o=n,u=this.fixHooks[r];for(u||(this.fixHooks[r]=u=Q.test(r)?this.mouseHooks:J.test(r)?this.keyHooks:{}),i=u.props?this.props.concat(u.props):this.props,n=new p.Event(o),t=i.length;t--;)n[e=i[t]]=o[e];return n.target||(n.target=o.srcElement||k),3===n.target.nodeType&&(n.target=n.target.parentNode),n.metaKey=!!n.metaKey,u.filter?u.filter(n,o):n},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(n,t){return null==n.which&&(n.which=null!=t.charCode?t.charCode:t.keyCode),n}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(n,t){var e,i,r,o=t.button,u=t.fromElement;return null==n.pageX&&null!=t.clientX&&(r=(i=n.target.ownerDocument||k).documentElement,e=i.body,n.pageX=t.clientX+(r&&r.scrollLeft||e&&e.scrollLeft||0)-(r&&r.clientLeft||e&&e.clientLeft||0),n.pageY=t.clientY+(r&&r.scrollTop||e&&e.scrollTop||0)-(r&&r.clientTop||e&&e.clientTop||0)),!n.relatedTarget&&u&&(n.relatedTarget=u===n.target?t.toElement:u),n.which||o===undefined||(n.which=1&o?1:2&o?3:4&o?2:0),n}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==rn()&&this.focus)try{return this.focus(),!1}catch(n){}},delegateType:"focusin"},blur:{trigger:function(){if(this===rn()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(p.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(n){return p.nodeName(n.target,"a")}},beforeunload:{postDispatch:function(n){n.result!==undefined&&n.originalEvent&&(n.originalEvent.returnValue=n.result)}}},simulate:function(n,t,e,i){var r=p.extend(new p.Event,e,{type:n,isSimulated:!0,originalEvent:{}});i?p.event.trigger(r,null,t):p.event.dispatch.call(t,r),r.isDefaultPrevented()&&e.preventDefault()}},p.removeEvent=k.removeEventListener?function(n,t,e){n.removeEventListener&&n.removeEventListener(t,e,!1)}:function(n,t,e){var i="on"+t;n.detachEvent&&(typeof n[i]===j&&(n[i]=null),n.detachEvent(i,e))},p.Event=function(n,t){if(!(this instanceof p.Event))return new p.Event(n,t);n&&n.type?(this.originalEvent=n,this.type=n.type,this.isDefaultPrevented=n.defaultPrevented||n.defaultPrevented===undefined&&!1===n.returnValue?tn:en):this.type=n,t&&p.extend(this,t),this.timeStamp=n&&n.timeStamp||p.now(),this[p.expando]=!0},p.Event.prototype={isDefaultPrevented:en,isPropagationStopped:en,isImmediatePropagationStopped:en,preventDefault:function(){var n=this.originalEvent;this.isDefaultPrevented=tn,n&&(n.preventDefault?n.preventDefault():n.returnValue=!1)},stopPropagation:function(){var n=this.originalEvent;this.isPropagationStopped=tn,n&&(n.stopPropagation&&n.stopPropagation(),n.cancelBubble=!0)},stopImmediatePropagation:function(){var n=this.originalEvent;this.isImmediatePropagationStopped=tn,n&&n.stopImmediatePropagation&&n.stopImmediatePropagation(),this.stopPropagation()}},p.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(n,t){p.event.special[n]={delegateType:t,bindType:t,handle:function(n){var e,i=this,r=n.relatedTarget,o=n.handleObj;return r&&(r===i||p.contains(i,r))||(n.type=o.origType,e=o.handler.apply(this,arguments),n.type=t),e}}})),h.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",(function(n){var t=n.target,e=p.nodeName(t,"input")||p.nodeName(t,"button")?t.form:undefined;e&&!p._data(e,"submitBubbles")&&(p.event.add(e,"submit._submit",(function(n){n._submit_bubble=!0})),p._data(e,"submitBubbles",!0))}))},postDispatch:function(n){n._submit_bubble&&(delete n._submit_bubble,this.parentNode&&!n.isTrigger&&p.event.simulate("submit",this.parentNode,n,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),h.changeBubbles||(p.event.special.change={setup:function(){if(X.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(p.event.add(this,"propertychange._change",(function(n){"checked"===n.originalEvent.propertyName&&(this._just_changed=!0)})),p.event.add(this,"click._change",(function(n){this._just_changed&&!n.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,n,!0)}))),!1;p.event.add(this,"beforeactivate._change",(function(n){var t=n.target;X.test(t.nodeName)&&!p._data(t,"changeBubbles")&&(p.event.add(t,"change._change",(function(n){!this.parentNode||n.isSimulated||n.isTrigger||p.event.simulate("change",this.parentNode,n,!0)})),p._data(t,"changeBubbles",!0))}))},handle:function(n){var t=n.target;if(this!==t||n.isSimulated||n.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return n.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!X.test(this.nodeName)}}),h.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},(function(n,t){var e=function(n){p.event.simulate(t,n.target,p.event.fix(n),!0)};p.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=p._data(i,t);r||i.addEventListener(n,e,!0),p._data(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=p._data(i,t)-1;r?p._data(i,t,r):(i.removeEventListener(n,e,!0),p._removeData(i,t))}}})),p.fn.extend({on:function(n,t,e,i,r){var o,u;if("object"==typeof n){for(o in"string"!=typeof t&&(e=e||t,t=undefined),n)this.on(o,t,e,n[o],r);return this}if(null==e&&null==i?(i=t,e=t=undefined):null==i&&("string"==typeof t?(i=e,e=undefined):(i=e,e=t,t=undefined)),!1===i)i=en;else if(!i)return this;return 1===r&&(u=i,i=function(n){return p().off(n),u.apply(this,arguments)},i.guid=u.guid||(u.guid=p.guid++)),this.each((function(){p.event.add(this,n,i,e,t)}))},one:function(n,t,e,i){return this.on(n,t,e,i,1)},off:function(n,t,e){var i,r;if(n&&n.preventDefault&&n.handleObj)return i=n.handleObj,p(n.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof n){for(r in n)this.off(r,t,n[r]);return this}return!1!==t&&"function"!=typeof t||(e=t,t=undefined),!1===e&&(e=en),this.each((function(){p.event.remove(this,n,e,t)}))},trigger:function(n,t){return this.each((function(){p.event.trigger(n,t,this)}))},triggerHandler:function(n,t){var e=this[0];if(e)return p.event.trigger(n,t,e,!0)}});var un="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",an=/ jQuery\d+="(?:null|\d+)"/g,cn=new RegExp("<(?:"+un+")[\\s/>]","i"),sn=/^\s+/,fn=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ln=/<([\w:]+)/,dn=/<tbody/i,hn=/<|&#?\w+;/,vn=/<(?:script|style|link)/i,pn=/checked\s*(?:[^=]|=\s*.checked.)/i,gn=/^$|\/(?:java|ecma)script/i,mn=/^true\/(.*)/,yn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,bn={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:h.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},_n=on(k).appendChild(k.createElement("div"));function wn(n,t){var e,i,r=0,o=typeof n.getElementsByTagName!==j?n.getElementsByTagName(t||"*"):typeof n.querySelectorAll!==j?n.querySelectorAll(t||"*"):undefined;if(!o)for(o=[],e=n.childNodes||n;null!=(i=e[r]);r++)!t||p.nodeName(i,t)?o.push(i):p.merge(o,wn(i,t));return t===undefined||t&&p.nodeName(n,t)?p.merge([n],o):o}function En(n){K.test(n.type)&&(n.defaultChecked=n.checked)}function In(n,t){return p.nodeName(n,"table")&&p.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?n.getElementsByTagName("tbody")[0]||n.appendChild(n.ownerDocument.createElement("tbody")):n}function Tn(n){return n.type=(null!==p.find.attr(n,"type"))+"/"+n.type,n}function Sn(n){var t=mn.exec(n.type);return t?n.type=t[1]:n.removeAttribute("type"),n}function An(n,t){for(var e,i=0;null!=(e=n[i]);i++)p._data(e,"globalEval",!t||p._data(t[i],"globalEval"))}function kn(n,t){if(1===t.nodeType&&p.hasData(n)){var e,i,r,o=p._data(n),u=p._data(t,o),a=o.events;if(a)for(e in delete u.handle,u.events={},a)for(i=0,r=a[e].length;i<r;i++)p.event.add(t,e,a[e][i]);u.data&&(u.data=p.extend({},u.data))}}function xn(n,t){var e,i,r;if(1===t.nodeType){if(e=t.nodeName.toLowerCase(),!h.noCloneEvent&&t[p.expando]){for(i in(r=p._data(t)).events)p.removeEvent(t,i,r.handle);t.removeAttribute(p.expando)}"script"===e&&t.text!==n.text?(Tn(t).text=n.text,Sn(t)):"object"===e?(t.parentNode&&(t.outerHTML=n.outerHTML),h.html5Clone&&n.innerHTML&&!p.trim(t.innerHTML)&&(t.innerHTML=n.innerHTML)):"input"===e&&K.test(n.type)?(t.defaultChecked=t.checked=n.checked,t.value!==n.value&&(t.value=n.value)):"option"===e?t.defaultSelected=t.selected=n.defaultSelected:"input"!==e&&"textarea"!==e||(t.defaultValue=n.defaultValue)}}bn.optgroup=bn.option,bn.tbody=bn.tfoot=bn.colgroup=bn.caption=bn.thead,bn.th=bn.td,p.extend({clone:function(n,t,e){var i,r,o,u,a,c=p.contains(n.ownerDocument,n);if(h.html5Clone||p.isXMLDoc(n)||!cn.test("<"+n.nodeName+">")?o=n.cloneNode(!0):(_n.innerHTML=n.outerHTML,_n.removeChild(o=_n.firstChild)),!(h.noCloneEvent&&h.noCloneChecked||1!==n.nodeType&&11!==n.nodeType||p.isXMLDoc(n)))for(i=wn(o),a=wn(n),u=0;null!=(r=a[u]);++u)i[u]&&xn(r,i[u]);if(t)if(e)for(a=a||wn(n),i=i||wn(o),u=0;null!=(r=a[u]);u++)kn(r,i[u]);else kn(n,o);return(i=wn(o,"script")).length>0&&An(i,!c&&wn(n,"script")),i=a=r=null,o},buildFragment:function(n,t,e,i){for(var r,o,u,a,c,s,f,l=n.length,d=on(t),v=[],g=0;g<l;g++)if((o=n[g])||0===o)if("object"===p.type(o))p.merge(v,o.nodeType?[o]:o);else if(hn.test(o)){for(a=a||d.appendChild(t.createElement("div")),c=(ln.exec(o)||["",""])[1].toLowerCase(),f=bn[c]||bn._default,a.innerHTML=f[1]+o.replace(fn,"<$1></$2>")+f[2],r=f[0];r--;)a=a.lastChild;if(!h.leadingWhitespace&&sn.test(o)&&v.push(t.createTextNode(sn.exec(o)[0])),!h.tbody)for(r=(o="table"!==c||dn.test(o)?"<table>"!==f[1]||dn.test(o)?0:a:a.firstChild)&&o.childNodes.length;r--;)p.nodeName(s=o.childNodes[r],"tbody")&&!s.childNodes.length&&o.removeChild(s);for(p.merge(v,a.childNodes),a.textContent="";a.firstChild;)a.removeChild(a.firstChild);a=d.lastChild}else v.push(t.createTextNode(o));for(a&&d.removeChild(a),h.appendChecked||p.grep(wn(v,"input"),En),g=0;o=v[g++];)if((!i||-1===p.inArray(o,i))&&(u=p.contains(o.ownerDocument,o),a=wn(d.appendChild(o),"script"),u&&An(a),e))for(r=0;o=a[r++];)gn.test(o.type||"")&&e.push(o);return a=null,d},cleanData:function(n,t){for(var e,i,r,u,a=0,c=p.expando,s=p.cache,f=h.deleteExpando,l=p.event.special;null!=(e=n[a]);a++)if((t||p.acceptData(e))&&(u=(r=e[c])&&s[r])){if(u.events)for(i in u.events)l[i]?p.event.remove(e,i):p.removeEvent(e,i,u.handle);s[r]&&(delete s[r],f?delete e[c]:typeof e.removeAttribute!==j?e.removeAttribute(c):e[c]=null,o.push(r))}}}),p.fn.extend({text:function(n){return Y(this,(function(n){return n===undefined?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||k).createTextNode(n))}),null,n,arguments.length)},append:function(){return this.domManip(arguments,(function(n){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||In(this,n).appendChild(n)}))},prepend:function(){return this.domManip(arguments,(function(n){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=In(this,n);t.insertBefore(n,t.firstChild)}}))},before:function(){return this.domManip(arguments,(function(n){this.parentNode&&this.parentNode.insertBefore(n,this)}))},after:function(){return this.domManip(arguments,(function(n){this.parentNode&&this.parentNode.insertBefore(n,this.nextSibling)}))},remove:function(n,t){for(var e,i=n?p.filter(n,this):this,r=0;null!=(e=i[r]);r++)t||1!==e.nodeType||p.cleanData(wn(e)),e.parentNode&&(t&&p.contains(e.ownerDocument,e)&&An(wn(e,"script")),e.parentNode.removeChild(e));return this},empty:function(){for(var n,t=0;null!=(n=this[t]);t++){for(1===n.nodeType&&p.cleanData(wn(n,!1));n.firstChild;)n.removeChild(n.firstChild);n.options&&p.nodeName(n,"select")&&(n.options.length=0)}return this},clone:function(n,t){return n=null!=n&&n,t=null==t?n:t,this.map((function(){return p.clone(this,n,t)}))},html:function(n){return Y(this,(function(n){var t=this[0]||{},e=0,i=this.length;if(n===undefined)return 1===t.nodeType?t.innerHTML.replace(an,""):undefined;if("string"==typeof n&&!vn.test(n)&&(h.htmlSerialize||!cn.test(n))&&(h.leadingWhitespace||!sn.test(n))&&!bn[(ln.exec(n)||["",""])[1].toLowerCase()]){n=n.replace(fn,"<$1></$2>");try{for(;e<i;e++)1===(t=this[e]||{}).nodeType&&(p.cleanData(wn(t,!1)),t.innerHTML=n);t=0}catch(r){}}t&&this.empty().append(n)}),null,n,arguments.length)},replaceWith:function(){var n=arguments[0];return this.domManip(arguments,(function(t){n=this.parentNode,p.cleanData(wn(this)),n&&n.replaceChild(t,this)})),n&&(n.length||n.nodeType)?this:this.remove()},detach:function(n){return this.remove(n,!0)},domManip:function(n,t){n=a.apply([],n);var e,i,r,o,u,c,s=0,f=this.length,l=this,d=f-1,v=n[0],g=p.isFunction(v);if(g||f>1&&"string"==typeof v&&!h.checkClone&&pn.test(v))return this.each((function(e){var i=l.eq(e);g&&(n[0]=v.call(this,e,i.html())),i.domManip(n,t)}));if(f&&(e=(c=p.buildFragment(n,this[0].ownerDocument,!1,this)).firstChild,1===c.childNodes.length&&(c=e),e)){for(r=(o=p.map(wn(c,"script"),Tn)).length;s<f;s++)i=c,s!==d&&(i=p.clone(i,!0,!0),r&&p.merge(o,wn(i,"script"))),t.call(this[s],i,s);if(r)for(u=o[o.length-1].ownerDocument,p.map(o,Sn),s=0;s<r;s++)i=o[s],gn.test(i.type||"")&&!p._data(i,"globalEval")&&p.contains(u,i)&&(i.src?p._evalUrl&&p._evalUrl(i.src):p.globalEval((i.text||i.textContent||i.innerHTML||"").replace(yn,"")));c=e=null}return this}}),p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(n,t){p.fn[n]=function(n){for(var e,i=0,r=[],o=p(n),u=o.length-1;i<=u;i++)e=i===u?this:this.clone(!0),p(o[i])[t](e),c.apply(r,e.get());return this.pushStack(r)}}));var Rn,Nn,Dn={};function Cn(n,t){var e,r=p(t.createElement(n)).appendTo(t.body),o=i.getDefaultComputedStyle&&(e=i.getDefaultComputedStyle(r[0]))?e.display:p.css(r[0],"display");return r.detach(),o}function On(n){var t=k,e=Dn[n];return e||("none"!==(e=Cn(n,t))&&e||((t=((Rn=(Rn||p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow||Rn[0].contentDocument).document).write(),t.close(),e=Cn(n,t),Rn.detach()),Dn[n]=e),e}h.shrinkWrapBlocks=function(){return null!=Nn?Nn:(Nn=!1,(t=k.getElementsByTagName("body")[0])&&t.style?(n=k.createElement("div"),(e=k.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(e).appendChild(n),typeof n.style.zoom!==j&&(n.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",n.appendChild(k.createElement("div")).style.width="5px",Nn=3!==n.offsetWidth),t.removeChild(e),Nn):void 0);var n,t,e};var Pn,Mn,Ln=/^margin/,Fn=new RegExp("^("+H+")(?!px)[a-z%]+$","i"),jn=/^(top|right|bottom|left)$/;function Un(n,t){return{get:function(){var e=n();if(null!=e){if(!e)return(this.get=t).apply(this,arguments);delete this.get}}}}i.getComputedStyle?(Pn=function(n){return n.ownerDocument.defaultView.opener?n.ownerDocument.defaultView.getComputedStyle(n,null):i.getComputedStyle(n,null)},Mn=function(n,t,e){var i,r,o,u,a=n.style;return u=(e=e||Pn(n))?e.getPropertyValue(t)||e[t]:undefined,e&&(""!==u||p.contains(n.ownerDocument,n)||(u=p.style(n,t)),Fn.test(u)&&Ln.test(t)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=u,u=e.width,a.width=i,a.minWidth=r,a.maxWidth=o)),u===undefined?u:u+""}):k.documentElement.currentStyle&&(Pn=function(n){return n.currentStyle},Mn=function(n,t,e){var i,r,o,u,a=n.style;return null==(u=(e=e||Pn(n))?e[t]:undefined)&&a&&a[t]&&(u=a[t]),Fn.test(u)&&!jn.test(t)&&(i=a.left,(o=(r=n.runtimeStyle)&&r.left)&&(r.left=n.currentStyle.left),a.left="fontSize"===t?"1em":u,u=a.pixelLeft+"px",a.left=i,o&&(r.left=o)),u===undefined?u:u+""||"auto"}),function(){var n,t,e,r,o,u,a;function c(){var n,t,e,c;(t=k.getElementsByTagName("body")[0])&&t.style&&(n=k.createElement("div"),(e=k.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(e).appendChild(n),n.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",r=o=!1,a=!0,i.getComputedStyle&&(r="1%"!==(i.getComputedStyle(n,null)||{}).top,o="4px"===(i.getComputedStyle(n,null)||{width:"4px"}).width,(c=n.appendChild(k.createElement("div"))).style.cssText=n.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",n.style.width="1px",a=!parseFloat((i.getComputedStyle(c,null)||{}).marginRight),n.removeChild(c)),n.innerHTML="<table><tr><td></td><td>t</td></tr></table>",(c=n.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(u=0===c[0].offsetHeight)&&(c[0].style.display="",c[1].style.display="none",u=0===c[0].offsetHeight),t.removeChild(e))}(n=k.createElement("div")).innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",(t=(e=n.getElementsByTagName("a")[0])&&e.style)&&(t.cssText="float:left;opacity:.5",h.opacity="0.5"===t.opacity,h.cssFloat=!!t.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===n.style.backgroundClip,h.boxSizing=""===t.boxSizing||""===t.MozBoxSizing||""===t.WebkitBoxSizing,p.extend(h,{reliableHiddenOffsets:function(){return null==u&&c(),u},boxSizingReliable:function(){return null==o&&c(),o},pixelPosition:function(){return null==r&&c(),r},reliableMarginRight:function(){return null==a&&c(),a}}))}(),p.swap=function(n,t,e,i){var r,o,u={};for(o in t)u[o]=n.style[o],n.style[o]=t[o];for(o in r=e.apply(n,i||[]),t)n.style[o]=u[o];return r};var Vn=/alpha\([^)]*\)/i,zn=/opacity\s*=\s*([^)]*)/,qn=/^(none|table(?!-c[ea]).+)/,Bn=new RegExp("^("+H+")(.*)$","i"),Gn=new RegExp("^([+-])=("+H+")","i"),Hn={position:"absolute",visibility:"hidden",display:"block"},$n={letterSpacing:"0",fontWeight:"400"},Wn=["Webkit","O","Moz","ms"];function Yn(n,t){if(t in n)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),i=t,r=Wn.length;r--;)if((t=Wn[r]+e)in n)return t;return i}function Kn(n,t){for(var e,i,r,o=[],u=0,a=n.length;u<a;u++)(i=n[u]).style&&(o[u]=p._data(i,"olddisplay"),e=i.style.display,t?(o[u]||"none"!==e||(i.style.display=""),""===i.style.display&&W(i)&&(o[u]=p._data(i,"olddisplay",On(i.nodeName)))):(r=W(i),(e&&"none"!==e||!r)&&p._data(i,"olddisplay",r?e:p.css(i,"display"))));for(u=0;u<a;u++)(i=n[u]).style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?o[u]||"":"none"));return n}function Xn(n,t,e){var i=Bn.exec(t);return i?Math.max(0,i[1]-(e||0))+(i[2]||"px"):t}function Jn(n,t,e,i,r){for(var o=e===(i?"border":"content")?4:"width"===t?1:0,u=0;o<4;o+=2)"margin"===e&&(u+=p.css(n,e+$[o],!0,r)),i?("content"===e&&(u-=p.css(n,"padding"+$[o],!0,r)),"margin"!==e&&(u-=p.css(n,"border"+$[o]+"Width",!0,r))):(u+=p.css(n,"padding"+$[o],!0,r),"padding"!==e&&(u+=p.css(n,"border"+$[o]+"Width",!0,r)));return u}function Qn(n,t,e){var i=!0,r="width"===t?n.offsetWidth:n.offsetHeight,o=Pn(n),u=h.boxSizing&&"border-box"===p.css(n,"boxSizing",!1,o);if(r<=0||null==r){if(((r=Mn(n,t,o))<0||null==r)&&(r=n.style[t]),Fn.test(r))return r;i=u&&(h.boxSizingReliable()||r===n.style[t]),r=parseFloat(r)||0}return r+Jn(n,t,e||(u?"border":"content"),i,o)+"px"}function Zn(n,t,e,i,r){return new Zn.prototype.init(n,t,e,i,r)}p.extend({cssHooks:{opacity:{get:function(n,t){if(t){var e=Mn(n,"opacity");return""===e?"1":e}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:h.cssFloat?"cssFloat":"styleFloat"},style:function(n,t,e,i){if(n&&3!==n.nodeType&&8!==n.nodeType&&n.style){var r,o,u,a=p.camelCase(t),c=n.style;if(t=p.cssProps[a]||(p.cssProps[a]=Yn(c,a)),u=p.cssHooks[t]||p.cssHooks[a],e===undefined)return u&&"get"in u&&(r=u.get(n,!1,i))!==undefined?r:c[t];if("string"==(o=typeof e)&&(r=Gn.exec(e))&&(e=(r[1]+1)*r[2]+parseFloat(p.css(n,t)),o="number"),null!=e&&e==e&&("number"!==o||p.cssNumber[a]||(e+="px"),h.clearCloneStyle||""!==e||0!==t.indexOf("background")||(c[t]="inherit"),!u||!("set"in u)||(e=u.set(n,e,i))!==undefined))try{c[t]=e}catch(s){}}},css:function(n,t,e,i){var r,o,u,a=p.camelCase(t);return t=p.cssProps[a]||(p.cssProps[a]=Yn(n.style,a)),(u=p.cssHooks[t]||p.cssHooks[a])&&"get"in u&&(o=u.get(n,!0,e)),o===undefined&&(o=Mn(n,t,i)),"normal"===o&&t in $n&&(o=$n[t]),""===e||e?(r=parseFloat(o),!0===e||p.isNumeric(r)?r||0:o):o}}),p.each(["height","width"],(function(n,t){p.cssHooks[t]={get:function(n,e,i){if(e)return qn.test(p.css(n,"display"))&&0===n.offsetWidth?p.swap(n,Hn,(function(){return Qn(n,t,i)})):Qn(n,t,i)},set:function(n,e,i){var r=i&&Pn(n);return Xn(0,e,i?Jn(n,t,i,h.boxSizing&&"border-box"===p.css(n,"boxSizing",!1,r),r):0)}}})),h.opacity||(p.cssHooks.opacity={get:function(n,t){return zn.test((t&&n.currentStyle?n.currentStyle.filter:n.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(n,t){var e=n.style,i=n.currentStyle,r=p.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=i&&i.filter||e.filter||"";e.zoom=1,(t>=1||""===t)&&""===p.trim(o.replace(Vn,""))&&e.removeAttribute&&(e.removeAttribute("filter"),""===t||i&&!i.filter)||(e.filter=Vn.test(o)?o.replace(Vn,r):o+" "+r)}}),p.cssHooks.marginRight=Un(h.reliableMarginRight,(function(n,t){if(t)return p.swap(n,{display:"inline-block"},Mn,[n,"marginRight"])})),p.each({margin:"",padding:"",border:"Width"},(function(n,t){p.cssHooks[n+t]={expand:function(e){for(var i=0,r={},o="string"==typeof e?e.split(" "):[e];i<4;i++)r[n+$[i]+t]=o[i]||o[i-2]||o[0];return r}},Ln.test(n)||(p.cssHooks[n+t].set=Xn)})),p.fn.extend({css:function(n,t){return Y(this,(function(n,t,e){var i,r,o={},u=0;if(p.isArray(t)){for(i=Pn(n),r=t.length;u<r;u++)o[t[u]]=p.css(n,t[u],!1,i);return o}return e!==undefined?p.style(n,t,e):p.css(n,t)}),n,t,arguments.length>1)},show:function(){return Kn(this,!0)},hide:function(){return Kn(this)},toggle:function(n){return"boolean"==typeof n?n?this.show():this.hide():this.each((function(){W(this)?p(this).show():p(this).hide()}))}}),p.Tween=Zn,Zn.prototype={constructor:Zn,init:function(n,t,e,i,r,o){this.elem=n,this.prop=e,this.easing=r||"swing",this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(p.cssNumber[e]?"":"px")},cur:function(){var n=Zn.propHooks[this.prop];return n&&n.get?n.get(this):Zn.propHooks._default.get(this)},run:function(n){var t,e=Zn.propHooks[this.prop];return this.options.duration?this.pos=t=p.easing[this.easing](n,this.options.duration*n,0,1,this.options.duration):this.pos=t=n,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),e&&e.set?e.set(this):Zn.propHooks._default.set(this),this}},Zn.prototype.init.prototype=Zn.prototype,Zn.propHooks={_default:{get:function(n){var t;return null==n.elem[n.prop]||n.elem.style&&null!=n.elem.style[n.prop]?(t=p.css(n.elem,n.prop,""))&&"auto"!==t?t:0:n.elem[n.prop]},set:function(n){p.fx.step[n.prop]?p.fx.step[n.prop](n):n.elem.style&&(null!=n.elem.style[p.cssProps[n.prop]]||p.cssHooks[n.prop])?p.style(n.elem,n.prop,n.now+n.unit):n.elem[n.prop]=n.now}}},Zn.propHooks.scrollTop=Zn.propHooks.scrollLeft={set:function(n){n.elem.nodeType&&n.elem.parentNode&&(n.elem[n.prop]=n.now)}},p.easing={linear:function(n){return n},swing:function(n){return.5-Math.cos(n*Math.PI)/2}},p.fx=Zn.prototype.init,p.fx.step={};var nt,tt,et,it,rt,ot,ut,at=/^(?:toggle|show|hide)$/,ct=new RegExp("^(?:([+-])=|)("+H+")([a-z%]*)$","i"),st=/queueHooks$/,ft=[function(n,t,e){var i,r,o,u,a,c,s,f=this,l={},d=n.style,v=n.nodeType&&W(n),g=p._data(n,"fxshow");for(i in e.queue||(null==(a=p._queueHooks(n,"fx")).unqueued&&(a.unqueued=0,c=a.empty.fire,a.empty.fire=function(){a.unqueued||c()}),a.unqueued++,f.always((function(){f.always((function(){a.unqueued--,p.queue(n,"fx").length||a.empty.fire()}))}))),1===n.nodeType&&("height"in t||"width"in t)&&(e.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===("none"===(s=p.css(n,"display"))?p._data(n,"olddisplay")||On(n.nodeName):s)&&"none"===p.css(n,"float")&&(h.inlineBlockNeedsLayout&&"inline"!==On(n.nodeName)?d.zoom=1:d.display="inline-block")),e.overflow&&(d.overflow="hidden",h.shrinkWrapBlocks()||f.always((function(){d.overflow=e.overflow[0],d.overflowX=e.overflow[1],d.overflowY=e.overflow[2]}))),t)if(r=t[i],at.exec(r)){if(delete t[i],o=o||"toggle"===r,r===(v?"hide":"show")){if("show"!==r||!g||g[i]===undefined)continue;v=!0}l[i]=g&&g[i]||p.style(n,i)}else s=undefined;if(p.isEmptyObject(l))"inline"===("none"===s?On(n.nodeName):s)&&(d.display=s);else for(i in g?"hidden"in g&&(v=g.hidden):g=p._data(n,"fxshow",{}),o&&(g.hidden=!v),v?p(n).show():f.done((function(){p(n).hide()})),f.done((function(){var t;for(t in p._removeData(n,"fxshow"),l)p.style(n,t,l[t])})),l)u=vt(v?g[i]:0,i,f),i in g||(g[i]=u.start,v&&(u.end=u.start,u.start="width"===i||"height"===i?1:0))}],lt={"*":[function(n,t){var e=this.createTween(n,t),i=e.cur(),r=ct.exec(t),o=r&&r[3]||(p.cssNumber[n]?"":"px"),u=(p.cssNumber[n]||"px"!==o&&+i)&&ct.exec(p.css(e.elem,n)),a=1,c=20;if(u&&u[3]!==o){o=o||u[3],r=r||[],u=+i||1;do{u/=a=a||".5",p.style(e.elem,n,u+o)}while(a!==(a=e.cur()/i)&&1!==a&&--c)}return r&&(u=e.start=+u||+i||0,e.unit=o,e.end=r[1]?u+(r[1]+1)*r[2]:+r[2]),e}]};function dt(){return setTimeout((function(){nt=undefined})),nt=p.now()}function ht(n,t){var e,i={height:n},r=0;for(t=t?1:0;r<4;r+=2-t)i["margin"+(e=$[r])]=i["padding"+e]=n;return t&&(i.opacity=i.width=n),i}function vt(n,t,e){for(var i,r=(lt[t]||[]).concat(lt["*"]),o=0,u=r.length;o<u;o++)if(i=r[o].call(e,t,n))return i}function pt(n,t,e){var i,r,o=0,u=ft.length,a=p.Deferred().always((function(){delete c.elem})),c=function(){if(r)return!1;for(var t=nt||dt(),e=Math.max(0,s.startTime+s.duration-t),i=1-(e/s.duration||0),o=0,u=s.tweens.length;o<u;o++)s.tweens[o].run(i);return a.notifyWith(n,[s,i,e]),i<1&&u?e:(a.resolveWith(n,[s]),!1)},s=a.promise({elem:n,props:p.extend({},t),opts:p.extend(!0,{specialEasing:{}},e),originalProperties:t,originalOptions:e,startTime:nt||dt(),duration:e.duration,tweens:[],createTween:function(t,e){var i=p.Tween(n,s.opts,t,e,s.opts.specialEasing[t]||s.opts.easing);return s.tweens.push(i),i},stop:function(t){var e=0,i=t?s.tweens.length:0;if(r)return this;for(r=!0;e<i;e++)s.tweens[e].run(1);return t?a.resolveWith(n,[s,t]):a.rejectWith(n,[s,t]),this}}),f=s.props;for(function(n,t){var e,i,r,o,u;for(e in n)if(r=t[i=p.camelCase(e)],o=n[e],p.isArray(o)&&(r=o[1],o=n[e]=o[0]),e!==i&&(n[i]=o,delete n[e]),(u=p.cssHooks[i])&&"expand"in u)for(e in o=u.expand(o),delete n[i],o)e in n||(n[e]=o[e],t[e]=r);else t[i]=r}(f,s.opts.specialEasing);o<u;o++)if(i=ft[o].call(s,n,f,s.opts))return i;return p.map(f,vt,s),p.isFunction(s.opts.start)&&s.opts.start.call(n,s),p.fx.timer(p.extend(c,{elem:n,anim:s,queue:s.opts.queue})),s.progress(s.opts.progress).done(s.opts.done,s.opts.complete).fail(s.opts.fail).always(s.opts.always)}p.Animation=p.extend(pt,{tweener:function(n,t){p.isFunction(n)?(t=n,n=["*"]):n=n.split(" ");for(var e,i=0,r=n.length;i<r;i++)e=n[i],lt[e]=lt[e]||[],lt[e].unshift(t)},prefilter:function(n,t){t?ft.unshift(n):ft.push(n)}}),p.speed=function(n,t,e){var i=n&&"object"==typeof n?p.extend({},n):{complete:e||!e&&t||p.isFunction(n)&&n,duration:n,easing:e&&t||t&&!p.isFunction(t)&&t};return i.duration=p.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in p.fx.speeds?p.fx.speeds[i.duration]:p.fx.speeds._default,null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){p.isFunction(i.old)&&i.old.call(this),i.queue&&p.dequeue(this,i.queue)},i},p.fn.extend({fadeTo:function(n,t,e,i){return this.filter(W).css("opacity",0).show().end().animate({opacity:t},n,e,i)},animate:function(n,t,e,i){var r=p.isEmptyObject(n),o=p.speed(t,e,i),u=function(){var t=pt(this,p.extend({},n),o);(r||p._data(this,"finish"))&&t.stop(!0)};return u.finish=u,r||!1===o.queue?this.each(u):this.queue(o.queue,u)},stop:function(n,t,e){var i=function(n){var t=n.stop;delete n.stop,t(e)};return"string"!=typeof n&&(e=t,t=n,n=undefined),t&&!1!==n&&this.queue(n||"fx",[]),this.each((function(){var t=!0,r=null!=n&&n+"queueHooks",o=p.timers,u=p._data(this);if(r)u[r]&&u[r].stop&&i(u[r]);else for(r in u)u[r]&&u[r].stop&&st.test(r)&&i(u[r]);for(r=o.length;r--;)o[r].elem!==this||null!=n&&o[r].queue!==n||(o[r].anim.stop(e),t=!1,o.splice(r,1));!t&&e||p.dequeue(this,n)}))},finish:function(n){return!1!==n&&(n=n||"fx"),this.each((function(){var t,e=p._data(this),i=e[n+"queue"],r=e[n+"queueHooks"],o=p.timers,u=i?i.length:0;for(e.finish=!0,p.queue(this,n,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===n&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<u;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete e.finish}))}}),p.each(["toggle","show","hide"],(function(n,t){var e=p.fn[t];p.fn[t]=function(n,i,r){return null==n||"boolean"==typeof n?e.apply(this,arguments):this.animate(ht(t,!0),n,i,r)}})),p.each({slideDown:ht("show"),slideUp:ht("hide"),slideToggle:ht("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(n,t){p.fn[n]=function(n,e,i){return this.animate(t,n,e,i)}})),p.timers=[],p.fx.tick=function(){var n,t=p.timers,e=0;for(nt=p.now();e<t.length;e++)(n=t[e])()||t[e]!==n||t.splice(e--,1);t.length||p.fx.stop(),nt=undefined},p.fx.timer=function(n){p.timers.push(n),n()?p.fx.start():p.timers.pop()},p.fx.interval=13,p.fx.start=function(){tt||(tt=setInterval(p.fx.tick,p.fx.interval))},p.fx.stop=function(){clearInterval(tt),tt=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fn.delay=function(n,t){return n=p.fx&&p.fx.speeds[n]||n,t=t||"fx",this.queue(t,(function(t,e){var i=setTimeout(t,n);e.stop=function(){clearTimeout(i)}}))},(it=k.createElement("div")).setAttribute("className","t"),it.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",ot=it.getElementsByTagName("a")[0],ut=(rt=k.createElement("select")).appendChild(k.createElement("option")),et=it.getElementsByTagName("input")[0],ot.style.cssText="top:1px",h.getSetAttribute="t"!==it.className,h.style=/top/.test(ot.getAttribute("style")),h.hrefNormalized="/a"===ot.getAttribute("href"),h.checkOn=!!et.value,h.optSelected=ut.selected,h.enctype=!!k.createElement("form").enctype,rt.disabled=!0,h.optDisabled=!ut.disabled,(et=k.createElement("input")).setAttribute("value",""),h.input=""===et.getAttribute("value"),et.value="t",et.setAttribute("type","radio"),h.radioValue="t"===et.value;var gt=/\r/g;p.fn.extend({val:function(n){var t,e,i,r=this[0];return arguments.length?(i=p.isFunction(n),this.each((function(e){var r;1===this.nodeType&&(null==(r=i?n.call(this,e,p(this).val()):n)?r="":"number"==typeof r?r+="":p.isArray(r)&&(r=p.map(r,(function(n){return null==n?"":n+""}))),(t=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&t.set(this,r,"value")!==undefined||(this.value=r))}))):r?(t=p.valHooks[r.type]||p.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&(e=t.get(r,"value"))!==undefined?e:"string"==typeof(e=r.value)?e.replace(gt,""):null==e?"":e:void 0}}),p.extend({valHooks:{option:{get:function(n){var t=p.find.attr(n,"value");return null!=t?t:p.trim(p.text(n))}},select:{get:function(n){for(var t,e,i=n.options,r=n.selectedIndex,o="select-one"===n.type||r<0,u=o?null:[],a=o?r+1:i.length,c=r<0?a:o?r:0;c<a;c++)if(((e=i[c]).selected||c===r)&&(h.optDisabled?!e.disabled:null===e.getAttribute("disabled"))&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){if(t=p(e).val(),o)return t;u.push(t)}return u},set:function(n,t){for(var e,i,r=n.options,o=p.makeArray(t),u=r.length;u--;)if(i=r[u],p.inArray(p.valHooks.option.get(i),o)>=0)try{i.selected=e=!0}catch(a){i.scrollHeight}else i.selected=!1;return e||(n.selectedIndex=-1),r}}}}),p.each(["radio","checkbox"],(function(){p.valHooks[this]={set:function(n,t){if(p.isArray(t))return n.checked=p.inArray(p(n).val(),t)>=0}},h.checkOn||(p.valHooks[this].get=function(n){return null===n.getAttribute("value")?"on":n.value})}));var mt,yt,bt=p.expr.attrHandle,_t=/^(?:checked|selected)$/i,wt=h.getSetAttribute,Et=h.input;p.fn.extend({attr:function(n,t){return Y(this,p.attr,n,t,arguments.length>1)},removeAttr:function(n){return this.each((function(){p.removeAttr(this,n)}))}}),p.extend({attr:function(n,t,e){var i,r,o=n.nodeType;if(n&&3!==o&&8!==o&&2!==o)return typeof n.getAttribute===j?p.prop(n,t,e):(1===o&&p.isXMLDoc(n)||(t=t.toLowerCase(),i=p.attrHooks[t]||(p.expr.match.bool.test(t)?yt:mt)),e===undefined?i&&"get"in i&&null!==(r=i.get(n,t))?r:null==(r=p.find.attr(n,t))?undefined:r:null!==e?i&&"set"in i&&(r=i.set(n,e,t))!==undefined?r:(n.setAttribute(t,e+""),e):void p.removeAttr(n,t))},removeAttr:function(n,t){var e,i,r=0,o=t&&t.match(O);if(o&&1===n.nodeType)for(;e=o[r++];)i=p.propFix[e]||e,p.expr.match.bool.test(e)?Et&&wt||!_t.test(e)?n[i]=!1:n[p.camelCase("default-"+e)]=n[i]=!1:p.attr(n,e,""),n.removeAttribute(wt?e:i)},attrHooks:{type:{set:function(n,t){if(!h.radioValue&&"radio"===t&&p.nodeName(n,"input")){var e=n.value;return n.setAttribute("type",t),e&&(n.value=e),t}}}}}),yt={set:function(n,t,e){return!1===t?p.removeAttr(n,e):Et&&wt||!_t.test(e)?n.setAttribute(!wt&&p.propFix[e]||e,e):n[p.camelCase("default-"+e)]=n[e]=!0,e}},p.each(p.expr.match.bool.source.match(/\w+/g),(function(n,t){var e=bt[t]||p.find.attr;bt[t]=Et&&wt||!_t.test(t)?function(n,t,i){var r,o;return i||(o=bt[t],bt[t]=r,r=null!=e(n,t,i)?t.toLowerCase():null,bt[t]=o),r}:function(n,t,e){if(!e)return n[p.camelCase("default-"+t)]?t.toLowerCase():null}})),Et&&wt||(p.attrHooks.value={set:function(n,t,e){if(!p.nodeName(n,"input"))return mt&&mt.set(n,t,e);n.defaultValue=t}}),wt||(mt={set:function(n,t,e){var i=n.getAttributeNode(e);if(i||n.setAttributeNode(i=n.ownerDocument.createAttribute(e)),i.value=t+="","value"===e||t===n.getAttribute(e))return t}},bt.id=bt.name=bt.coords=function(n,t,e){var i;if(!e)return(i=n.getAttributeNode(t))&&""!==i.value?i.value:null},p.valHooks.button={get:function(n,t){var e=n.getAttributeNode(t);if(e&&e.specified)return e.value},set:mt.set},p.attrHooks.contenteditable={set:function(n,t,e){mt.set(n,""!==t&&t,e)}},p.each(["width","height"],(function(n,t){p.attrHooks[t]={set:function(n,e){if(""===e)return n.setAttribute(t,"auto"),e}}}))),h.style||(p.attrHooks.style={get:function(n){return n.style.cssText||undefined},set:function(n,t){return n.style.cssText=t+""}});var It=/^(?:input|select|textarea|button|object)$/i,Tt=/^(?:a|area)$/i;p.fn.extend({prop:function(n,t){return Y(this,p.prop,n,t,arguments.length>1)},removeProp:function(n){return n=p.propFix[n]||n,this.each((function(){try{this[n]=undefined,delete this[n]}catch(t){}}))}}),p.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(n,t,e){var i,r,o=n.nodeType;if(n&&3!==o&&8!==o&&2!==o)return(1!==o||!p.isXMLDoc(n))&&(t=p.propFix[t]||t,r=p.propHooks[t]),e!==undefined?r&&"set"in r&&(i=r.set(n,e,t))!==undefined?i:n[t]=e:r&&"get"in r&&null!==(i=r.get(n,t))?i:n[t]},propHooks:{tabIndex:{get:function(n){var t=p.find.attr(n,"tabindex");return t?parseInt(t,10):It.test(n.nodeName)||Tt.test(n.nodeName)&&n.href?0:-1}}}}),h.hrefNormalized||p.each(["href","src"],(function(n,t){p.propHooks[t]={get:function(n){return n.getAttribute(t,4)}}})),h.optSelected||(p.propHooks.selected={get:function(n){var t=n.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),p.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){p.propFix[this.toLowerCase()]=this})),h.enctype||(p.propFix.enctype="encoding");var St=/[\t\r\n\f]/g;p.fn.extend({addClass:function(n){var t,e,i,r,o,u,a=0,c=this.length,s="string"==typeof n&&n;if(p.isFunction(n))return this.each((function(t){p(this).addClass(n.call(this,t,this.className))}));if(s)for(t=(n||"").match(O)||[];a<c;a++)if(i=1===(e=this[a]).nodeType&&(e.className?(" "+e.className+" ").replace(St," "):" ")){for(o=0;r=t[o++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");u=p.trim(i),e.className!==u&&(e.className=u)}return this},removeClass:function(n){var t,e,i,r,o,u,a=0,c=this.length,s=0===arguments.length||"string"==typeof n&&n;if(p.isFunction(n))return this.each((function(t){p(this).removeClass(n.call(this,t,this.className))}));if(s)for(t=(n||"").match(O)||[];a<c;a++)if(i=1===(e=this[a]).nodeType&&(e.className?(" "+e.className+" ").replace(St," "):"")){for(o=0;r=t[o++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");u=n?p.trim(i):"",e.className!==u&&(e.className=u)}return this},toggleClass:function(n,t){var e=typeof n;return"boolean"==typeof t&&"string"===e?t?this.addClass(n):this.removeClass(n):p.isFunction(n)?this.each((function(e){p(this).toggleClass(n.call(this,e,this.className,t),t)})):this.each((function(){if("string"===e)for(var t,i=0,r=p(this),o=n.match(O)||[];t=o[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else e!==j&&"boolean"!==e||(this.className&&p._data(this,"__className__",this.className),this.className=this.className||!1===n?"":p._data(this,"__className__")||"")}))},hasClass:function(n){for(var t=" "+n+" ",e=0,i=this.length;e<i;e++)if(1===this[e].nodeType&&(" "+this[e].className+" ").replace(St," ").indexOf(t)>=0)return!0;return!1}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(function(n,t){p.fn[t]=function(n,e){return arguments.length>0?this.on(t,null,n,e):this.trigger(t)}})),p.fn.extend({hover:function(n,t){return this.mouseenter(n).mouseleave(t||n)},bind:function(n,t,e){return this.on(n,null,t,e)},unbind:function(n,t){return this.off(n,null,t)},delegate:function(n,t,e,i){return this.on(t,n,e,i)},undelegate:function(n,t,e){return 1===arguments.length?this.off(n,"**"):this.off(t,n||"**",e)}});var At=p.now(),kt=/\?/,xt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;p.parseJSON=function(n){if(i.JSON&&i.JSON.parse)return i.JSON.parse(n+"");var t,e=null,r=p.trim(n+"");return r&&!p.trim(r.replace(xt,(function(n,i,r,o){return t&&i&&(e=0),0===e?n:(t=r||i,e+=!o-!r,"")})))?Function("return "+r)():p.error("Invalid JSON: "+n)},p.parseXML=function(n){var t;if(!n||"string"!=typeof n)return null;try{i.DOMParser?t=(new DOMParser).parseFromString(n,"text/xml"):((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(n))}catch(e){t=undefined}return t&&t.documentElement&&!t.getElementsByTagName("parsererror").length||p.error("Invalid XML: "+n),t};var Rt,Nt,Dt=/#.*$/,Ct=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Pt=/^(?:GET|HEAD)$/,Mt=/^\/\//,Lt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ft={},jt={},Ut="*/".concat("*");try{Nt=location.href}catch(ue){(Nt=k.createElement("a")).href="",Nt=Nt.href}function Vt(n){return function(t,e){"string"!=typeof t&&(e=t,t="*");var i,r=0,o=t.toLowerCase().match(O)||[];if(p.isFunction(e))for(;i=o[r++];)"+"===i.charAt(0)?(i=i.slice(1)||"*",(n[i]=n[i]||[]).unshift(e)):(n[i]=n[i]||[]).push(e)}}function zt(n,t,e,i){var r={},o=n===jt;function u(a){var c;return r[a]=!0,p.each(n[a]||[],(function(n,a){var s=a(t,e,i);return"string"!=typeof s||o||r[s]?o?!(c=s):void 0:(t.dataTypes.unshift(s),u(s),!1)})),c}return u(t.dataTypes[0])||!r["*"]&&u("*")}function qt(n,t){var e,i,r=p.ajaxSettings.flatOptions||{};for(i in t)t[i]!==undefined&&((r[i]?n:e||(e={}))[i]=t[i]);return e&&p.extend(!0,n,e),n}Rt=Lt.exec(Nt.toLowerCase())||[],p.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Nt,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Rt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ut,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(n,t){return t?qt(qt(n,p.ajaxSettings),t):qt(p.ajaxSettings,n)},ajaxPrefilter:Vt(Ft),ajaxTransport:Vt(jt),ajax:function(n,t){"object"==typeof n&&(t=n,n=undefined),t=t||{};var e,i,r,o,u,a,c,s,f=p.ajaxSetup({},t),l=f.context||f,d=f.context&&(l.nodeType||l.jquery)?p(l):p.event,h=p.Deferred(),v=p.Callbacks("once memory"),g=f.statusCode||{},m={},y={},b=0,_="canceled",w={readyState:0,getResponseHeader:function(n){var t;if(2===b){if(!s)for(s={};t=Ot.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[n.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?o:null},setRequestHeader:function(n,t){var e=n.toLowerCase();return b||(n=y[e]=y[e]||n,m[n]=t),this},overrideMimeType:function(n){return b||(f.mimeType=n),this},statusCode:function(n){var t;if(n)if(b<2)for(t in n)g[t]=[g[t],n[t]];else w.always(n[w.status]);return this},abort:function(n){var t=n||_;return c&&c.abort(t),E(0,t),this}};if(h.promise(w).complete=v.add,w.success=w.done,w.error=w.fail,f.url=((n||f.url||Nt)+"").replace(Dt,"").replace(Mt,Rt[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=p.trim(f.dataType||"*").toLowerCase().match(O)||[""],null==f.crossDomain&&(e=Lt.exec(f.url.toLowerCase()),f.crossDomain=!(!e||e[1]===Rt[1]&&e[2]===Rt[2]&&(e[3]||("http:"===e[1]?"80":"443"))===(Rt[3]||("http:"===Rt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=p.param(f.data,f.traditional)),zt(Ft,f,t,w),2===b)return w;for(i in(a=p.event&&f.global)&&0==p.active++&&p.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Pt.test(f.type),r=f.url,f.hasContent||(f.data&&(r=f.url+=(kt.test(r)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=Ct.test(r)?r.replace(Ct,"$1_="+At++):r+(kt.test(r)?"&":"?")+"_="+At++)),f.ifModified&&(p.lastModified[r]&&w.setRequestHeader("If-Modified-Since",p.lastModified[r]),p.etag[r]&&w.setRequestHeader("If-None-Match",p.etag[r])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Ut+"; q=0.01":""):f.accepts["*"]),f.headers)w.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(!1===f.beforeSend.call(l,w,f)||2===b))return w.abort();for(i in _="abort",{success:1,error:1,complete:1})w[i](f[i]);if(c=zt(jt,f,t,w)){w.readyState=1,a&&d.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(u=setTimeout((function(){w.abort("timeout")}),f.timeout));try{b=1,c.send(m,E)}catch(ue){if(!(b<2))throw ue;E(-1,ue)}}else E(-1,"No Transport");function E(n,t,e,i){var s,m,y,_,E,I=t;2!==b&&(b=2,u&&clearTimeout(u),c=undefined,o=i||"",w.readyState=n>0?4:0,s=n>=200&&n<300||304===n,e&&(_=function(n,t,e){for(var i,r,o,u,a=n.contents,c=n.dataTypes;"*"===c[0];)c.shift(),r===undefined&&(r=n.mimeType||t.getResponseHeader("Content-Type"));if(r)for(u in a)if(a[u]&&a[u].test(r)){c.unshift(u);break}if(c[0]in e)o=c[0];else{for(u in e){if(!c[0]||n.converters[u+" "+c[0]]){o=u;break}i||(i=u)}o=o||i}if(o)return o!==c[0]&&c.unshift(o),e[o]}(f,w,e)),_=function(n,t,e,i){var r,o,u,a,c,s={},f=n.dataTypes.slice();if(f[1])for(u in n.converters)s[u.toLowerCase()]=n.converters[u];for(o=f.shift();o;)if(n.responseFields[o]&&(e[n.responseFields[o]]=t),!c&&i&&n.dataFilter&&(t=n.dataFilter(t,n.dataType)),c=o,o=f.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(!(u=s[c+" "+o]||s["* "+o]))for(r in s)if((a=r.split(" "))[1]===o&&(u=s[c+" "+a[0]]||s["* "+a[0]])){!0===u?u=s[r]:!0!==s[r]&&(o=a[0],f.unshift(a[1]));break}if(!0!==u)if(u&&n.throws)t=u(t);else try{t=u(t)}catch(ue){return{state:"parsererror",error:u?ue:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}(f,_,w,s),s?(f.ifModified&&((E=w.getResponseHeader("Last-Modified"))&&(p.lastModified[r]=E),(E=w.getResponseHeader("etag"))&&(p.etag[r]=E)),204===n||"HEAD"===f.type?I="nocontent":304===n?I="notmodified":(I=_.state,m=_.data,s=!(y=_.error))):(y=I,!n&&I||(I="error",n<0&&(n=0))),w.status=n,w.statusText=(t||I)+"",s?h.resolveWith(l,[m,I,w]):h.rejectWith(l,[w,I,y]),w.statusCode(g),g=undefined,a&&d.trigger(s?"ajaxSuccess":"ajaxError",[w,f,s?m:y]),v.fireWith(l,[w,I]),a&&(d.trigger("ajaxComplete",[w,f]),--p.active||p.event.trigger("ajaxStop")))}return w},getJSON:function(n,t,e){return p.get(n,t,e,"json")},getScript:function(n,t){return p.get(n,undefined,t,"script")}}),p.each(["get","post"],(function(n,t){p[t]=function(n,e,i,r){return p.isFunction(e)&&(r=r||i,i=e,e=undefined),p.ajax({url:n,type:t,dataType:r,data:e,success:i})}})),p._evalUrl=function(n){return p.ajax({url:n,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},p.fn.extend({wrapAll:function(n){if(p.isFunction(n))return this.each((function(t){p(this).wrapAll(n.call(this,t))}));if(this[0]){var t=p(n,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var n=this;n.firstChild&&1===n.firstChild.nodeType;)n=n.firstChild;return n})).append(this)}return this},wrapInner:function(n){return p.isFunction(n)?this.each((function(t){p(this).wrapInner(n.call(this,t))})):this.each((function(){var t=p(this),e=t.contents();e.length?e.wrapAll(n):t.append(n)}))},wrap:function(n){var t=p.isFunction(n);return this.each((function(e){p(this).wrapAll(t?n.call(this,e):n)}))},unwrap:function(){return this.parent().each((function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)})).end()}}),p.expr.filters.hidden=function(n){return n.offsetWidth<=0&&n.offsetHeight<=0||!h.reliableHiddenOffsets()&&"none"===(n.style&&n.style.display||p.css(n,"display"))},p.expr.filters.visible=function(n){return!p.expr.filters.hidden(n)};var Bt=/%20/g,Gt=/\[\]$/,Ht=/\r?\n/g,$t=/^(?:submit|button|image|reset|file)$/i,Wt=/^(?:input|select|textarea|keygen)/i;function Yt(n,t,e,i){var r;if(p.isArray(t))p.each(t,(function(t,r){e||Gt.test(n)?i(n,r):Yt(n+"["+("object"==typeof r?t:"")+"]",r,e,i)}));else if(e||"object"!==p.type(t))i(n,t);else for(r in t)Yt(n+"["+r+"]",t[r],e,i)}p.param=function(n,t){var e,i=[],r=function(n,t){t=p.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(n)+"="+encodeURIComponent(t)};if(t===undefined&&(t=p.ajaxSettings&&p.ajaxSettings.traditional),p.isArray(n)||n.jquery&&!p.isPlainObject(n))p.each(n,(function(){r(this.name,this.value)}));else for(e in n)Yt(e,n[e],t,r);return i.join("&").replace(Bt,"+")},p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var n=p.prop(this,"elements");return n?p.makeArray(n):this})).filter((function(){var n=this.type;return this.name&&!p(this).is(":disabled")&&Wt.test(this.nodeName)&&!$t.test(n)&&(this.checked||!K.test(n))})).map((function(n,t){var e=p(this).val();return null==e?null:p.isArray(e)?p.map(e,(function(n){return{name:t.name,value:n.replace(Ht,"\r\n")}})):{name:t.name,value:e.replace(Ht,"\r\n")}})).get()}}),p.ajaxSettings.xhr=i.ActiveXObject!==undefined?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Qt()||function(){try{return new i.ActiveXObject("Microsoft.XMLHTTP")}catch(ue){}}()}:Qt;var Kt=0,Xt={},Jt=p.ajaxSettings.xhr();function Qt(){try{return new i.XMLHttpRequest}catch(ue){}}i.attachEvent&&i.attachEvent("onunload",(function(){for(var n in Xt)Xt[n](undefined,!0)})),h.cors=!!Jt&&"withCredentials"in Jt,(Jt=h.ajax=!!Jt)&&p.ajaxTransport((function(n){var t;if(!n.crossDomain||h.cors)return{send:function(e,i){var r,o=n.xhr(),u=++Kt;if(o.open(n.type,n.url,n.async,n.username,n.password),n.xhrFields)for(r in n.xhrFields)o[r]=n.xhrFields[r];for(r in n.mimeType&&o.overrideMimeType&&o.overrideMimeType(n.mimeType),n.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)e[r]!==undefined&&o.setRequestHeader(r,e[r]+"");o.send(n.hasContent&&n.data||null),t=function(e,r){var a,c,s;if(t&&(r||4===o.readyState))if(delete Xt[u],t=undefined,o.onreadystatechange=p.noop,r)4!==o.readyState&&o.abort();else{s={},a=o.status,"string"==typeof o.responseText&&(s.text=o.responseText);try{c=o.statusText}catch(ue){c=""}a||!n.isLocal||n.crossDomain?1223===a&&(a=204):a=s.text?200:404}s&&i(a,c,s,o.getAllResponseHeaders())},n.async?4===o.readyState?setTimeout(t):o.onreadystatechange=Xt[u]=t:t()},abort:function(){t&&t(undefined,!0)}}})),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(n){return p.globalEval(n),n}}}),p.ajaxPrefilter("script",(function(n){n.cache===undefined&&(n.cache=!1),n.crossDomain&&(n.type="GET",n.global=!1)})),p.ajaxTransport("script",(function(n){if(n.crossDomain){var t,e=k.head||p("head")[0]||k.documentElement;return{send:function(i,r){(t=k.createElement("script")).async=!0,n.scriptCharset&&(t.charset=n.scriptCharset),t.src=n.url,t.onload=t.onreadystatechange=function(n,e){(e||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,e||r(200,"success"))},e.insertBefore(t,e.firstChild)},abort:function(){t&&t.onload(undefined,!0)}}}}));var Zt=[],ne=/(=)\?(?=&|$)|\?\?/;p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var n=Zt.pop()||p.expando+"_"+At++;return this[n]=!0,n}}),p.ajaxPrefilter("json jsonp",(function(n,t,e){var r,o,u,a=!1!==n.jsonp&&(ne.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&ne.test(n.data)&&"data");if(a||"jsonp"===n.dataTypes[0])return r=n.jsonpCallback=p.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,a?n[a]=n[a].replace(ne,"$1"+r):!1!==n.jsonp&&(n.url+=(kt.test(n.url)?"&":"?")+n.jsonp+"="+r),n.converters["script json"]=function(){return u||p.error(r+" was not called"),u[0]},n.dataTypes[0]="json",o=i[r],i[r]=function(){u=arguments},e.always((function(){i[r]=o,n[r]&&(n.jsonpCallback=t.jsonpCallback,Zt.push(r)),u&&p.isFunction(o)&&o(u[0]),u=o=undefined})),"script"})),p.parseHTML=function(n,t,e){if(!n||"string"!=typeof n)return null;"boolean"==typeof t&&(e=t,t=!1),t=t||k;var i=I.exec(n),r=!e&&[];return i?[t.createElement(i[1])]:(i=p.buildFragment([n],t,r),r&&r.length&&p(r).remove(),p.merge([],i.childNodes))};var te=p.fn.load;p.fn.load=function(n,t,e){if("string"!=typeof n&&te)return te.apply(this,arguments);var i,r,o,u=this,a=n.indexOf(" ");return a>=0&&(i=p.trim(n.slice(a,n.length)),n=n.slice(0,a)),p.isFunction(t)?(e=t,t=undefined):t&&"object"==typeof t&&(o="POST"),u.length>0&&p.ajax({url:n,type:o,dataType:"html",data:t}).done((function(n){r=arguments,u.html(i?p("<div>").append(p.parseHTML(n)).find(i):n)})).complete(e&&function(n,t){u.each(e,r||[n.responseText,t,n])}),this},p.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(n,t){p.fn[t]=function(n){return this.on(t,n)}})),p.expr.filters.animated=function(n){return p.grep(p.timers,(function(t){return n===t.elem})).length};var ee=i.document.documentElement;function ie(n){return p.isWindow(n)?n:9===n.nodeType&&(n.defaultView||n.parentWindow)}p.offset={setOffset:function(n,t,e){var i,r,o,u,a,c,s=p.css(n,"position"),f=p(n),l={};"static"===s&&(n.style.position="relative"),a=f.offset(),o=p.css(n,"top"),c=p.css(n,"left"),("absolute"===s||"fixed"===s)&&p.inArray("auto",[o,c])>-1?(u=(i=f.position()).top,r=i.left):(u=parseFloat(o)||0,r=parseFloat(c)||0),p.isFunction(t)&&(t=t.call(n,e,a)),null!=t.top&&(l.top=t.top-a.top+u),null!=t.left&&(l.left=t.left-a.left+r),"using"in t?t.using.call(n,l):f.css(l)}},p.fn.extend({offset:function(n){if(arguments.length)return n===undefined?this:this.each((function(t){p.offset.setOffset(this,n,t)}));var t,e,i={top:0,left:0},r=this[0],o=r&&r.ownerDocument;return o?(t=o.documentElement,p.contains(t,r)?(typeof r.getBoundingClientRect!==j&&(i=r.getBoundingClientRect()),e=ie(o),{top:i.top+(e.pageYOffset||t.scrollTop)-(t.clientTop||0),left:i.left+(e.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):i):void 0},position:function(){if(this[0]){var n,t,e={top:0,left:0},i=this[0];return"fixed"===p.css(i,"position")?t=i.getBoundingClientRect():(n=this.offsetParent(),t=this.offset(),p.nodeName(n[0],"html")||(e=n.offset()),e.top+=p.css(n[0],"borderTopWidth",!0),e.left+=p.css(n[0],"borderLeftWidth",!0)),{top:t.top-e.top-p.css(i,"marginTop",!0),left:t.left-e.left-p.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var n=this.offsetParent||ee;n&&!p.nodeName(n,"html")&&"static"===p.css(n,"position");)n=n.offsetParent;return n||ee}))}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(n,t){var e=/Y/.test(t);p.fn[n]=function(i){return Y(this,(function(n,i,r){var o=ie(n);if(r===undefined)return o?t in o?o[t]:o.document.documentElement[i]:n[i];o?o.scrollTo(e?p(o).scrollLeft():r,e?r:p(o).scrollTop()):n[i]=r}),n,i,arguments.length,null)}})),p.each(["top","left"],(function(n,t){p.cssHooks[t]=Un(h.pixelPosition,(function(n,e){if(e)return e=Mn(n,t),Fn.test(e)?p(n).position()[t]+"px":e}))})),p.each({Height:"height",Width:"width"},(function(n,t){p.each({padding:"inner"+n,content:t,"":"outer"+n},(function(e,i){p.fn[i]=function(i,r){var o=arguments.length&&(e||"boolean"!=typeof i),u=e||(!0===i||!0===r?"margin":"border");return Y(this,(function(t,e,i){var r;return p.isWindow(t)?t.document.documentElement["client"+n]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+n],r["scroll"+n],t.body["offset"+n],r["offset"+n],r["client"+n])):i===undefined?p.css(t,e,u):p.style(t,e,i,u)}),t,o?i:undefined,o,null)}}))})),p.fn.size=function(){return this.length},p.fn.andSelf=p.fn.addBack,(e=function(){return p}.apply(t,[]))===undefined||(n.exports=e);var re=i.jQuery,oe=i.$;return p.noConflict=function(n){return i.$===p&&(i.$=oe),n&&i.jQuery===p&&(i.jQuery=re),p},typeof r===j&&(i.jQuery=i.$=p),p},"object"==typeof n.exports?n.exports=i.document?r(i,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return r(n)}:r(i)},7339:function(){}},__webpack_module_cache__={};function __webpack_require__(n){var t=__webpack_module_cache__[n];if(t!==undefined)return t.exports;var e=__webpack_module_cache__[n]={id:n,loaded:!1,exports:{}};return __webpack_modules__[n].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.amdO={},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),__webpack_require__.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n};var __webpack_exports__={};!function(){try{!function(){var n=function(n){var t=[__webpack_require__(7644)];t.push(__webpack_require__(1569)),t.push(__webpack_require__(6879)),t.push(__webpack_require__(9754)),t.push(__webpack_require__(9374)),t.push(__webpack_require__(5664)),t.push(__webpack_require__(6093)),t.push(__webpack_require__(7217)),t.push(__webpack_require__(8068)),t.push(__webpack_require__(520)),t.push(__webpack_require__(9665)),t.push(__webpack_require__(7819)),t.push(__webpack_require__(928)),t.push(__webpack_require__(186)),t.push(__webpack_require__(1310)),t.push(__webpack_require__(3056)),t.push(__webpack_require__(2774)),t.push(__webpack_require__(414)),t.push(__webpack_require__(2628)),t.push(__webpack_require__(7278)),t.push(__webpack_require__(6357)),t.push(__webpack_require__(6363)),t.push(__webpack_require__(7154)),t.push(__webpack_require__(9686)),t.push(__webpack_require__(7102)),t.push(__webpack_require__(145)),t.push(__webpack_require__(7649)),t.push(__webpack_require__(4870)),f.initializePlugins(t)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(8562).initialize();var t=__webpack_require__(9e3);t.time("gtagReady");var e=__webpack_require__(2678),i=__webpack_require__(4041);__webpack_require__(5723);var r=i.get("stores/directive");if(!__webpack_require__(3455).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,u=__webpack_require__(6072),a=__webpack_require__(4819),c=__webpack_require__(5554),s={"accountId": "973095788", "namespace": "973095788", "revision": "55877", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": true}, "projectId": "973095788", "layers": [{"changes": null, "id": "20038270766", "name": "Implementation - GDPR Implementation", "commitId": "20030891707", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "10759632009"], "audienceName": "Audience - EU Visits", "changes": null, "id": "20026791941", "integrationSettings": null, "variations": [{"id": "20052934087", "name": "EU Customer GDPR", "actions": [{"viewId": "20024431975", "changes": [{"dependencies": [], "type": "custom_code", "id": "cd86835794914a6eb5c7b497b24391a9", "value": function($){function createCookie(name,value,days) {

        var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

console.log("Cookie EU GDP installed");
createCookie("cookieEUGDPR","1",1);
}}]}]}], "weightDistributions": null, "name": "Implementation - GDPR Implementation", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["20024431975"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "20473677943", "name": "Implementation - Flight Search [NGEN] - Add restriction legend for SAP flights", "commitId": "20481369738", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "20458767976", "integrationSettings": null, "variations": [{"id": "20479257499", "name": "Honduras restriction legend", "actions": [{"viewId": "20375803827", "changes": [{"id": "D16EA7B4-CFF9-4C13-A5EB-CBB27C4E63CC", "src": "/actions/60d60201ec67ff8af4d58bd36ce2764ee0686f1f12e6f80133954d93e9bdccc1.js", "dependencies": []}]}, {"viewId": "20377475567", "changes": [{"id": "0E6D7A4E-B46F-464A-BD87-735E78BA9B40", "src": "/actions/6094184e880f8c3f0d8a38418aa37fc6d28059fff7e48fa5cac892e5ac4694a4.js", "dependencies": []}]}]}], "weightDistributions": null, "name": "Implementation - Flight Search [NGEN] - Add restriction legend for SAP flights", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["20375803827", "20377475567"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "21015061974", "name": "Fix-Confirmation[NGEN]Button Invoice tax regime", "commitId": "20994262554", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "21016140540", "integrationSettings": null, "variations": [{"id": "21000191740", "name": "Original", "actions": [{"viewId": "18171703234", "changes": []}]}, {"id": "21004481059", "name": "Variation #1", "actions": [{"viewId": "18171703234", "changes": [{"dependencies": [], "type": "custom_code", "id": "FA12C9DD-219C-4CA1-9108-F54487464C20", "value": function($){if(window.$("#mcp > a > span:nth-child(1)").text().includes("Esp")){

var button = '<input type="submit" value="Obtener Factura" id="factura" name="Obtener Factura"/>';
$('#PaymentInformation > mbs-payment-information > mbs-booking-detail > div > div > h3 > span').append(button); //creamos el boton

}

else{
  var button = '<input type="submit" value="Get Invoice" id="factura" name="Obtener Factura"/>';
$('#PaymentInformation > mbs-payment-information > mbs-booking-detail > div > div > h3 > span').append(button); //creamos el boton

}

$('#factura').click(function(){
   window.open('https://factura.volaris.com/', '_blank');
 
}); //link de dirección


/*$('#PaymentInformation > mbs-payment-information > mbs-booking-detail > div > div > h3 > button').click(function(){
   window.open('https://factura.volaris.com/', '_blank');
 
});*/
}}, {"value": "<style>#PaymentInformation>mbs-payment-information > mbs-booking-detail > div > div > h3 > button{\n  visibility: hidden;\n  \n}\n\n#factura {\n    box-sizing: border-box;\n    user-select: none;\n    cursor: pointer;\n    outline: 0;\n    border: none;\n    -webkit-tap-highlight-color: transparent;\n    display: inline-block;\n    white-space: nowrap;\n    text-decoration: none;\n    vertical-align: baseline;\n    text-align: center;\n    margin: 0;\n    overflow: visible;\n    font-weight: 400;\n    box-shadow: none;\n    font-family: Lato,sans-serif;\n    padding: 0 20px;\n    line-height: 38px;\n    font-size: 12px;\n    border-radius: 20px;\n    background: rgba(161,40,133,.08);\n    color: #a12885;\n    position: absolute;\n    right: 0;\n    min-width: 132px;\n    width: auto;\ntop: -5px;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "005F59D3-F569-460E-9526-4E53E0DDCCBF"}, {"selector": "#factura", "dependencies": [], "attributes": {}, "type": "attribute", "id": "CFFEC418-9FFE-4A91-A990-97AB57B21744", "css": {}}]}]}], "weightDistributions": [{"entityId": "21004481059", "endOfRange": 10000}], "name": "Fix-Confirmation[NGEN]Button Invoice tax regime", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["18171703234"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "21552181028", "name": "Test - Flight Search [NGEN] - Cintillito verde y negro NLU-Toluca", "commitId": "22952000043", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "21545961620", "integrationSettings": null, "variations": [{"id": "21545532196", "name": "Original", "actions": [{"viewId": "20845140367", "changes": []}, {"viewId": "20851680115", "changes": []}]}, {"id": "21526252727", "name": "Tooltip New", "actions": [{"viewId": "20845140367", "changes": [{"dependencies": [], "type": "custom_code", "id": "8a779ce649c549eb961c422f53a4a4ba", "value": function($){//Función mutation
var mylistNLURibbon = document.querySelector("#Flightlists");
var mynodeNLURibbon = mylistNLURibbon.querySelectorAll(".flightLists")[0];

function doTestNLURibbon() {
  //Cintillo AIFA

  i = 1;
  auxi = [];
  text = "";
  $("#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted > div")
    .children("div.row.no-gutters.flightItemDetails")
    .each(function () {
      text =
        "#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted > div:nth-child(" +
        i +
        ")";
      v = document.querySelector(text).innerText.includes("AIFA");
      auxi += "Selector:" + text + "Resultado:" + v + "</br>";
      if (v == true) {
        $(text + " > div > div.flightSchedule").prepend(
          '<div><img src="//cdn.optimizely.com/img/973095788/8512ce2578ff4395b01d60a6d95bffff.svg" class="NLU-Ribbon" style="width: 58px;position: absolute;margin-left: -3%;margin-top: -13px;"></div>'
        );
        $(text + " > div > div.flightSchedule").css("font-weight", "bold");
      }
      i += 1;
    });

  //Cintillo Toluca

  i = 1;
  auxi = [];
  text = "";
  $("#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted > div")
    .children("div.row.no-gutters.flightItemDetails")
    .each(function () {
      text =
        "#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted > div:nth-child(" +
        i +
        ")";
      v = document.querySelector(text).innerText.includes("Toluca");
      auxi += "Selector:" + text + "Resultado:" + v + "</br>";
      if (v == true) {
        $(text + " > div > div.flightSchedule").prepend(
          '<div><img src="//cdn.optimizely.com/img/973095788/79ff94a9b41e48f1bf1a8eb12963451e.svg" class="NLU-Ribbon" style="width: 58px;position: absolute;margin-left: -3%;margin-top: -13px;"></div>'
        );
        $(text + " > div > div.flightSchedule").css("font-weight", "bold");
      }
      i += 1;
    });
}
doTestNLURibbon();
new MutationObserver(function () {
  if (
    $("#FaresTab").text().includes("Regular") &&
    document.querySelector(".NLU-Ribbon") == null
  ) {
    doTestNLURibbon();
  }
}).observe(mynodeNLURibbon, { subtree: true, childList: true });
}}, {"selector": "#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted > div:nth-child(6) > div > div.flightSchedule.stop-0.col-md-7 > div:nth-child(1) > img", "dependencies": [], "attributes": {}, "type": "attribute", "id": "251becdcf893469d9ca804fdcea34b40", "css": {}}]}, {"viewId": "20851680115", "changes": [{"dependencies": [], "type": "custom_code", "id": "aa018399fb794e95bffce8d2f8148961", "value": function($){//Función mutation
var mylistNLURibbon = document.querySelector("#Flightlists");
var mynodeNLURibbon = mylistNLURibbon.querySelectorAll(".flightLists")[0];

function doTestNLURibbon() {
  //Cintillo AIFA

  i = 1;
  auxi = [];
  text = "";
  $("#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted > div")
    .children("div.row.no-gutters.flightItemDetails")
    .each(function () {
      text =
        "#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted > div:nth-child(" +
        i +
        ")";
      v = document.querySelector(text).innerText.includes("AIFA");
      auxi += "Selector:" + text + "Resultado:" + v + "</br>";
      if (v == true) {
        $(text + " > div > div.flightSchedule").prepend(
          '<div><img src="//cdn.optimizely.com/img/973095788/8512ce2578ff4395b01d60a6d95bffff.svg" class="NLU-Ribbon" style="width: 58px;position: absolute;margin-left: -3%;margin-top: -13px;"></div>'
        );
        $(text + " > div > div.flightSchedule").css("font-weight", "bold");
      }
      i += 1;
    });

  //Cintillo Toluca

  i = 1;
  auxi = [];
  text = "";
  $("#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted > div")
    .children("div.row.no-gutters.flightItemDetails")
    .each(function () {
      text =
        "#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted > div:nth-child(" +
        i +
        ")";
      v = document.querySelector(text).innerText.includes("Toluca");
      auxi += "Selector:" + text + "Resultado:" + v + "</br>";
      if (v == true) {
        $(text + " > div > div.flightSchedule").prepend(
          '<div><img src="//cdn.optimizely.com/img/973095788/79ff94a9b41e48f1bf1a8eb12963451e.svg" class="NLU-Ribbon" style="width: 58px;position: absolute;margin-left: -3%;margin-top: -13px;"></div>'
        );
        $(text + " > div > div.flightSchedule").css("font-weight", "bold");
      }
      i += 1;
    });
}
doTestNLURibbon();
new MutationObserver(function () {
  if (
    $("#FaresTab").text().includes("regulares") &&
    document.querySelector(".NLU-Ribbon") == null
  ) {
    doTestNLURibbon();
  }
}).observe(mynodeNLURibbon, { subtree: true, childList: true });
}}]}]}], "weightDistributions": [{"entityId": "21526252727", "endOfRange": 10000}], "name": "Test - Flight Search [NGEN] - Cintillito verde y negro NLU-Toluca", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["20845140367", "20851680115"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "24117420131", "name": "Test-Flights Share Flight Button", "commitId": "24224540151", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "24080160403", "integrationSettings": null, "variations": [{"id": "24078010842", "name": "Original", "actions": [{"viewId": "18160291111", "changes": []}]}, {"id": "24106220197", "name": "Bot\u00f3n con texto", "actions": [{"viewId": "18160291111", "changes": [{"id": "346148AA-7A32-4161-AE32-361A2D8B14DD", "type": "custom_code", "value": function($){$(document.body).on('click', '.cerrarModalFW', function (e) {
  $( "#popupAlertTestContainer" ).remove();
});

$(document.body).on("click", "#shareFlightF", function (e) {
  var adt = utag_data.num_Pax_Adults;
  var chd = utag_data.num_Pax_Children;
  var in1 = 0; /*número de infantes */
  var rr = "False";
  if (utag_data.flight_type == "Round Trip") {
    rr = "True";
  }
  var cc = utag_data.currency;
  var fechaOrigen = utag_data.origin_date;
  const [yearO, monthO, dayO] = fechaOrigen.split("-");
  var dd1 = monthO + "/" + dayO + "/" + yearO; // formato 09/30/2022 '2022-09-29'
  var fechaRetorno = utag_data.return_date;
  const [yearR, monthR, dayR] = fechaRetorno.split("-");
  var dd2 = monthR + "/" + dayR + "/" + yearR; // formato 09/30/2022 '2022-09-29'
  var culture = utag_data.language_code;
  var o1 = utag_data.from_airport;
  var d1 = utag_data.to_airport;
  var dni = 0;
  var dominio = "www.volaris.com";
  var copyText = "https://" + dominio + "/flight/select?utm_campaign=share_flights_test&adt=" + adt + "&chd=" + chd + "&in1=" + in1 + "&rr=" + rr + "&cc=" + cc + "&dd1=" + dd1 + "&dd2=" + dd2 + "&utm_source=FlightSearch&culture=" + culture + "&s=True&utm_medium=Referral&o1=" + o1 + "&d1=" + d1 + "&dni=" + dni + "&promoCode=";
  
   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  showModalCopied();
});

function showModalCopied() {
  var textoTitulo = "Enlace copiado";
  var textoModal = "Lorem Impsum";
  var textoBoton = "Continuar con mi reservación";

  /*if (route == "leisure") {
    textoTitulo = "Copied link";
    textoModal = "Lorem Impsum";
    textoBoton = "Continue with my reservation";
  }*/
  
  $('body').append('<div class="cdk-overlay-container" id="popupAlertTestContainer"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalFW"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>'+textoTitulo+'</h6> </div> <div class="mat-dialog-content" mat-dialog-content=""><p style="text-align: justify;margin-bottom:30px;">'+textoModal+'</p> <a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalFW" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">'+textoBoton+'</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>');  
}
}, "dependencies": []}, {"id": "50B68D6C-DC6D-430E-9F2C-8DB911663BBA", "type": "append", "selector": "head", "value": "<style>#Routeinformation .content .details .actions button:nth-child(1) {\n    margin: 0 0px 0 0 !important;\n}</style>", "dependencies": []}, {"id": "EB05DB21-CB13-4DDA-8B76-04F45D30E051", "src": "/actions/789de382fbfa94977ca0be6a2db8dd71ff0a39002ae328f565d06cd9d3267a79.js", "dependencies": []}]}]}, {"id": "24172970292", "name": "Bot\u00f3n con icono", "actions": [{"viewId": "18160291111", "changes": [{"id": "91E1785D-F4F0-424C-9F43-C2BC26C743E3", "type": "custom_code", "value": function($){$(document.body).on('click', '.cerrarModalAlert', function (e) {
  $("#popupAlertTest").remove();
});

$(document.body).on('click', '.cerrarModalFW', function (e) {
  var copyText = document.getElementById('shareLinkFlight').value;
  navigator.clipboard.writeText(copyText);
  $("#popupAlertTestContainer").remove();  
  modalConfirmationShow();
});

$(document.body).on('click', '.cerrarModalFWClose', function (e) {
  $("#popupAlertTestContainer").remove();
});

$(document.body).on("click", "#shareFlightF", function (e) {
  var adt = utag_data.num_Pax_Adults;
  var chd = utag_data.num_Pax_Children;
  var in1 = 0; /*número de infantes */
  var rr = "False";
  if (utag_data.flight_type == "Round Trip") {
    rr = "True";
  }
  var cc = utag_data.currency;
  var fechaOrigen = utag_data.origin_date;
  const [yearO, monthO, dayO] = fechaOrigen.split("-");
  var dd1 = monthO + "/" + dayO + "/" + yearO; // formato 09/30/2022 '2022-09-29'
  var fechaRetorno = utag_data.return_date;
  const [yearR, monthR, dayR] = fechaRetorno.split("-");
  var dd2 = monthR + "/" + dayR + "/" + yearR; // formato 09/30/2022 '2022-09-29'
  var culture = utag_data.language_code;
  var o1 = utag_data.from_airport;
  var d1 = utag_data.to_airport;
  var dni = 0;
  var dominio = "www.volaris.com";
  var copyText = "https://" + dominio + "/flight/select?utm_campaign=share_flights_test&adt=" + adt + "&chd=" + chd + "&in1=" + in1 + "&rr=" + rr + "&cc=" + cc + "&dd1=" + dd1 + "&dd2=" + dd2 + "&utm_source=FlightSearch&culture=" + culture + "&s=True&utm_medium=Referral&o1=" + o1 + "&d1=" + d1 + "&dni=" + dni;
  
  //navigator.clipboard.writeText(copyText);
  showModalCopied(copyText);
});

function showModalCopied(copyText) {
  var textoTitulo = "Compartir vuelo";
  var textoModal = "¡Comparte tu vuelo a tus amigos!";
  var textoBoton = "Copiar enlace";
  
  if ($("#mcp > a > span:nth-child(1)").text().includes("Eng")) {
    textoTitulo = "Share flight";
    textoModal = "Share your flight with your friends!";
    textoBoton = "Copy link";
  }   
  
  var labelLink = '<div _ngcontent-bgm-c25="" class="row ng-star-inserted"><div _ngcontent-bgm-c25="" class="col"><mat-form-field _ngcontent-bgm-c25="" appearance="outline" class="textbox mat-form-field ng-tns-c7-48 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float ng-untouched ng-pristine ng-valid"><div class="mat-form-field-wrapper"><div class="mat-form-field-flex"><!----><!----><div class="mat-form-field-outline ng-tns-c7-48 ng-star-inserted"><div class="mat-form-field-outline-start"></div><div class="mat-form-field-outline-gap"></div><div class="mat-form-field-outline-end"></div></div><div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c7-48 ng-star-inserted"><div class="mat-form-field-outline-start"></div><div class="mat-form-field-outline-gap"></div><div class="mat-form-field-outline-end"></div></div><!----><div class="mat-form-field-infix" style="padding: 5px 24px 1px 0;"><!----><!----><input _ngcontent-bgm-c25="" id="shareLinkFlight" class="mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid ng-star-inserted" matinput="" placeholder="'+copyText+'" value="'+copyText+'" type="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" id="mat-input-3" aria-invalid="false" aria-required="false"><mat-autocomplete _ngcontent-bgm-c25="" class="mat-autocomplete ng-star-inserted" panelwidth="auto"><!----></mat-autocomplete><!----><span class="mat-form-field-label-wrapper"><!----></span></div><!----></div><!----><div class="mat-form-field-subscript-wrapper"><!----><!----><div class="mat-form-field-hint-wrapper ng-tns-c7-48 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style="opacity: 1; transform: translateY(0%);"><!----><div class="mat-form-field-hint-spacer"></div></div></div></div></mat-form-field></div></div>';
  
  $('body').append('<div class="cdk-overlay-container" id="popupAlertTestContainer"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalFWClose"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>'+textoTitulo+'</h6> </div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p style="text-align: justify;margin-bottom:30px;">'+textoModal+'</p>'+labelLink+'<a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalFW" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">'+textoBoton+'</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>');  
}

function modalConfirmationShow() {
  var textoTitulo = "Enlace copiado";
  var textoBoton = "Continuar tu reservación";
  var textoModal = "¡Listo! Se ha copiado el enlace a este vuelo en tu portapapeles.";
  
  if ($("#mcp > a > span:nth-child(1)").text().includes("Eng")) {
    textoTitulo = "Copied link";
    textoBoton = "Continue with your reservation";
    textoModal = "Done! The link to this flight has been copied to your clipboard.";
  }   
  
  var mensajeExitoso = '<div class="cdk-overlay-container" id="popupAlertTest"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalAlert"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>'+textoTitulo+'</h6> </div> <div class="mat-dialog-content" mat-dialog-content=""><span _ngcontent-bgm-c25="" class="material-icons check_circle check-circle"> check_circle </span><p>'+textoModal+'</p><a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalAlert" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">'+textoBoton+'</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $('body').append(mensajeExitoso);
}
}, "dependencies": []}, {"id": "F04BDC3E-FB43-44DC-8D6C-48A8695A21FF", "type": "append", "selector": "head", "value": "<style>.check_circle {\n    color: #427f10;\n    font-size: 65px;\n    padding-bottom: 30px;\n    text-align: center;\n    width: 100%;\n}\n\n#Routeinformation .content .details .actions button:nth-child(2) {\n    margin: 0 32px 0 0;\n}\n\n#Routeinformation .content .details .actions button:nth-child(2) {\n    background: rgba(161,40,133,.08);\n    color: #a12885;\n}</style>", "dependencies": []}, {"id": "A1328053-7FF3-4498-A220-FB8EA5138335", "src": "/actions/f7a721e053e9aaa55c022c32db65116a99fb18ece8cb5af52c7f952c0288e961.js", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "79F481E9-7CB6-4FE8-95EB-A05B3CE7F872", "selector": "#shareFlightF"}]}]}], "weightDistributions": [{"entityId": "24078010842", "endOfRange": 5000}, {"entityId": "24172970292", "endOfRange": 10000}], "name": "Test-Flights Share Flight Button", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["18160291111"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "24397450351", "name": "Test-Flights[NGEN]-Flights benefit box Desktop (LogIn) 50%", "commitId": "24400110190", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "8265491574", "24427040243"], "audienceName": "Audience - Desktop Version,Audience - Anonymous Users", "changes": null, "id": "24410930289", "integrationSettings": null, "variations": [{"id": "24384640438", "name": "Original", "actions": []}, {"id": "24402730236", "name": "Box", "actions": [{"viewId": "20375803827", "changes": [{"id": "187887baf98644a6a87b423f886824ef", "type": "custom_code", "value": function($){$(document).ready(function(){
 $(document).on('#Routeinformation > span > p:nth-child(1) > img', function () {
    $('#Routeinformation > span').hide();
    $("close");
  });
});

$(document.body).on('click', '.cerrarboxfs', function (e) {
  $("#boxFS").addClass("animated fadeOutUp");
  setTimeout( function() { 
    $("#boxFS").addClass("d-none");
  	$("#boxFS").addClass("cerradoDef");
   }, 1000);
});

window.onscroll = function() {myScrollFunction();};

function myScrollFunction() {
  if ($("#Routeinformation").hasClass("sticky")) {
    $("#boxFS").addClass("d-none");
  } else {
    if ($("#boxFS").hasClass("cerradoDef")) {
    } else {	
      $("#boxFS").removeClass("d-none");
    }
  }
}
}, "dependencies": []}, {"id": "08af7d3be0384fca846e192a0ee01e1e", "type": "append", "selector": "head", "value": "<style>#boxFS {\n    position: absolute;\n    z-index: 2000;\n    font-family: Lato,sans-serif;\n    font-size: 12px;\n    list-style: none;\n    cursor: pointer;\n    box-sizing: inherit;\n    background: #fff;\n    border: 1px solid rgba(0,0,0,.1);\n    box-shadow: 0 2px 8px 0 rgba(0,0,0,.06),0 20px 25px 0 rgba(0,0,0,.08);\n    color: #080206;\n    border-radius: 6px;\n    visibility: visible;\n    width: 280px;\n    padding: 10px 12px 16px;\n    right: 1%;\n    top: 60px;\n}\n\n#Routeinformation > span > p:nth-child(1) > a > span{\n    list-style: none;\n    visibility: visible;\n    font-family: Lato,sans-serif;\n    font-weight: 700;\n    color: #a12885;\n    cursor: pointer;\n    box-sizing: inherit;\n    font-size: 24px;\n    line-height: 24px;\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    position: relative;\n    top: 10px;\n    margin-left: 16px;\n}\n\n#Login > span > ul{\n}\n\n\n.animated {\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 1.5s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeOutUp {\n    0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    }\n    100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    }\n}\n\n@keyframes fadeOutUp {\n    0% {\n    opacity: 1;\n    transform: translateY(0);\n    }\n    100% {\n    opacity: 0;\n    transform: translateY(-20px);\n    }\n}\n\n.fadeOutUp {\n    -webkit-animation-name: fadeOutUp;\n    animation-name: fadeOutUp;\n}\n\n.icon-check:before  {\n    width: 20px;\n    color: #a12885;\n    font-size: 16px;\n}</style>", "dependencies": []}, {"id": "ece9ce6e188e482698fbcbdb1b834cf5", "type": "append", "dependencies": [], "selector": "#MainHeader", "value": "<span _ngcontent-oba-c1=\"\" class=\"tooltip-text\" id=\"boxFS\"><a class=\"cerrarboxfs\"><img src=\"//cdn.optimizely.com/img/973095788/7f48256dddb24c99a32c4f79113dc75b.svg\" style=\"position: absolute;right: 10px;\"></a><p _ngcontent-oba-c1=\"\"><span _ngcontent-oba-c1=\"\" class=\"icon icon-account\"></span><strong _ngcontent-oba-c1=\"\" id=\"inicia\" > Inicia sesi\u00f3n y vuela m\u00e1s f\u00e1cil y al mejor precio:</strong><a _ngcontent-oba-c1=\"\"><span _ngcontent-oba-c1=\"\"></span></a></p><ul _ngcontent-oba-c1=\"\"><li _ngcontent-oba-c1=\"\"><span _ngcontent-oba-c1=\"\" class=\"icon icon-check\"></span> Compra tus vuelos m\u00e1s r\u00e1pido </li><li _ngcontent-oba-c1=\"\"><span _ngcontent-oba-c1=\"\" class=\"icon icon-check\"></span> Tu check in es m\u00e1s f\u00e1cil </li><li _ngcontent-oba-c1=\"\"><span _ngcontent-oba-c1=\"\" class=\"icon icon-check\"></span> Ent\u00e9rate de nuestras promociones </li></ul></span>", "operator": "after"}, {"css": {}, "dependencies": [], "attributes": {"style": "z-index: 99980;"}, "type": "attribute", "id": "33ef0879150d4159a4ef0a3c15f7afab", "selector": "#Routeinformation"}, {"css": {}, "dependencies": [], "attributes": {"style": "font-size: 12px;\nline-height: 16px\ndisplay: flex;\n"}, "type": "attribute", "id": "c293f9425aaa4e5b8ce584c7e90c9516", "selector": "#inicia"}, {"css": {}, "dependencies": [], "attributes": {"style": "display: flex;"}, "type": "attribute", "id": "7be0b2038e1742e4ad001245754ad237", "selector": "#boxFS > p"}, {"css": {}, "dependencies": [], "attributes": {"style": "margin-top:-6px;"}, "type": "attribute", "id": "365d1d3f408a4b3ca9e710db33d65360", "selector": "#boxFS .icon-account"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "f579d519d79a4ea2a8b1d6a36aa46b94", "selector": "#boxFS > a > img"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "0164348746944368b88ae4f1a1b47718", "selector": "#Login > button"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "f1fb3138e76f460cadd3e5a6eb96176c", "selector": "#login-wrap > div > div > div:nth-child(2) > div > form > div.submit > button"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "59212a039dbf430aa272db4f3c7ed3a2", "selector": "#SignUp > button"}]}, {"viewId": "20377475567", "changes": [{"id": "30b397e04d574b7981c06bd5bd7e5fea", "type": "custom_code", "value": function($){$(document).ready(function(){
 $(document).on('#Routeinformation > span > p:nth-child(1) > img', function () {
    $('#Routeinformation > span').hide();
    $("close");
  });
});

$(document.body).on('click', '.cerrarboxfs', function (e) {
  $("#boxFS").addClass("animated fadeOutUp");
  setTimeout( function() { 
    $("#boxFS").addClass("d-none");
  	$("#boxFS").addClass("cerradoDef");
   }, 1000);
});

window.onscroll = function() {myScrollFunction();};

function myScrollFunction() {
  if ($("#Routeinformation").hasClass("sticky")) {
    $("#boxFS").addClass("d-none");
  } else {
    if ($("#boxFS").hasClass("cerradoDef")) {
    } else {	
      $("#boxFS").removeClass("d-none");
    }
  }
}
}, "dependencies": []}, {"id": "40c3ba5bbb2f4b62b16f519c15761c12", "type": "append", "selector": "head", "value": "<style>#boxFS {\n    position: absolute;\n    z-index: 2000;\n    font-family: Lato,sans-serif;\n    font-size: 12px;\n    list-style: none;\n    cursor: pointer;\n    box-sizing: inherit;\n    background: #fff;\n    border: 1px solid rgba(0,0,0,.1);\n    box-shadow: 0 2px 8px 0 rgba(0,0,0,.06),0 20px 25px 0 rgba(0,0,0,.08);\n    color: #080206;\n    border-radius: 6px;\n    visibility: visible;\n    width: 280px;\n    padding: 10px 12px 16px;\n    right: 1%;\n    top: 60px;\n}\n\n#Routeinformation > span > p:nth-child(1) > a > span{\n    list-style: none;\n    visibility: visible;\n    font-family: Lato,sans-serif;\n    font-weight: 700;\n    color: #a12885;\n    cursor: pointer;\n    box-sizing: inherit;\n    font-size: 24px;\n    line-height: 24px;\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    position: relative;\n    top: 10px;\n    margin-left: 16px;\n}\n\n#Login > span > ul{\n}\n\n\n.animated {\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 1.5s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeOutUp {\n    0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    }\n    100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    }\n}\n\n@keyframes fadeOutUp {\n    0% {\n    opacity: 1;\n    transform: translateY(0);\n    }\n    100% {\n    opacity: 0;\n    transform: translateY(-20px);\n    }\n}\n\n.fadeOutUp {\n    -webkit-animation-name: fadeOutUp;\n    animation-name: fadeOutUp;\n}\n\n.icon-check:before  {\n    width: 20px;\n    color: #a12885;\n    font-size: 16px;\n}</style>", "dependencies": []}, {"id": "58172e3fe9be4e15a4d46c7e3afb5a51", "type": "append", "dependencies": [], "selector": "#MainHeader", "value": "<span _ngcontent-oba-c1=\"\" class=\"tooltip-text\" id=\"boxFS\"><a class=\"cerrarboxfs\"><img src=\"//cdn.optimizely.com/img/973095788/7f48256dddb24c99a32c4f79113dc75b.svg\" style=\"position: absolute;right: 10px;\"></a><p _ngcontent-oba-c1=\"\"><span _ngcontent-oba-c1=\"\" class=\"icon icon-account\"></span><strong _ngcontent-oba-c1=\"\" id=\"inicia\"> Log in and fly easily at the best price:</strong><a _ngcontent-oba-c1=\"\"><span _ngcontent-oba-c1=\"\"></span></a></p><ul _ngcontent-oba-c1=\"\"><li _ngcontent-oba-c1=\"\"><span _ngcontent-oba-c1=\"\" class=\"icon icon-check\"></span> Book your flights faster</li><li _ngcontent-oba-c1=\"\"><span _ngcontent-oba-c1=\"\" class=\"icon icon-check\"></span> Your check-in is as easy as 1,2,3\n </li><li _ngcontent-oba-c1=\"\"><span _ngcontent-oba-c1=\"\" class=\"icon icon-check\"></span> Keep track of our best deals\n </li></ul></span>", "operator": "after"}, {"css": {}, "dependencies": [], "attributes": {"style": "z-index: 99980;"}, "type": "attribute", "id": "a04ff7195a5041ba9bac6913f7f94919", "selector": "#Routeinformation"}, {"css": {}, "dependencies": [], "attributes": {"style": "font-size: 12px;\nline-height: 16px\ndisplay: flex;"}, "type": "attribute", "id": "ea39c73efa094383a1174ed697c73587", "selector": "#inicia"}, {"css": {}, "dependencies": [], "attributes": {"style": "display: flex;"}, "type": "attribute", "id": "40cbeabffbd84b82bb071a2d65b3c4ce", "selector": "#boxFS > p"}, {"css": {}, "dependencies": [], "attributes": {"style": "margin-top:-6px;"}, "type": "attribute", "id": "3fab6a572058490a93facd195eca8796", "selector": "#boxFS .icon-account"}]}]}], "weightDistributions": [{"entityId": "24384640438", "endOfRange": 5000}, {"entityId": "24402730236", "endOfRange": 10000}], "name": "Test-Flights[NGEN]-Flights benefit box Desktop (LogIn) 50%", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["20375803827", "20377475567"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "24575180022", "name": "Test-Passengers & Payment removing v.club elements 66", "commitId": "24568180026", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "24579580006", "integrationSettings": null, "variations": [{"id": "24589070008", "name": "Original", "actions": []}, {"id": "24566170023", "name": "Vclub alerts", "actions": [{"viewId": "18199391328", "changes": [{"dependencies": [], "type": "custom_code", "id": "36216c8822d74279be81610e7e5d221c", "value": function($){$(document.body).on('click', '.btnLoginPax', function (e) {
  window.$( "#Login > button" ).click();
});
}}, {"value": "<style>#PassengerContact > mbs-passenger-contact > div > form > div.row.mobile-margin-zero.primary-customer-section.vclub > div:nth-child(4) > mat-form-field > div > div.mat-form-field-subscript-wrapper > div.mat-form-field-hint-wrapper {\n  display: none !important;\n}\n\n.passenger-contact-wrap .primary-customer-section .email-wrap .mat-form-field-wrapper {\n    margin-right: 0px;\n}\n\n.vclub-membership-information {\n    outline: none;\n}\n\n.replace-login h4 {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 19px;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "15ef656cb668428db83e29217b0432d5"}, {"selector": "#PassengerDetail > div > mbs-passenger-details > div.container-fluid.card.shadow-default.radius-12.booking.passenger-wrap.ng-trigger.ng-trigger-slideInOut.ng-star-inserted > form > div > div:nth-child(1) > div > h4 > span:nth-child(1)", "dependencies": [], "attributes": {"remove": true}, "type": "attribute", "id": "2a7e9ddf377946aeae09a8c8852d53d1", "css": {}}, {"selector": "#PassengerContact > mbs-passenger-contact > div > form > div.row.mobile-margin-zero.primary-customer-section.vclub > div:nth-child(4) > a", "dependencies": [], "attributes": {"remove": true}, "type": "attribute", "id": "41ae32e3a7e4474398fb5add7c7b1e32", "css": {}}, {"selector": "#btnLoginPax", "dependencies": [], "attributes": {}, "type": "attribute", "id": "db390a7b11ec44fe86f532ae0fbb059c", "css": {}}]}, {"viewId": "18262000014", "changes": [{"selector": "#PassengerDetail > div > mbs-passenger-details > div.container-fluid.card.shadow-default.radius-12.vclub-membership-information.ng-star-inserted", "dependencies": [], "attributes": {"html": "<div class=\"row replace-login\">\n  <div class=\"col-8 col-sm-8\"><h4 id=\"titleLoginPax\">Ya tengo una cuenta</h4><p id=\"subtitleLoginPax\">\u00a1Inicia sesi\u00f3n para hacer m\u00e1s r\u00e1pida tu compra!</p></div><div class=\"col-4 col-sm-4\"><a class=\"btn continue mat-flat-button mat-button-base btn-small mat-secondary btnLoginPax\" color=\"secondary\" mat-flat-button=\"\"><span class=\"mat-button-wrapper\" id=\"btnLoginPax\">Iniciar sesi\u00f3n</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div><div class=\"mat-button-focus-overlay\"></div></a></div>\n</div>"}, "type": "attribute", "id": "5a617f55830549d78030b0af151f9c60", "css": {}}]}, {"viewId": "18254190011", "changes": [{"selector": "#PassengerDetail > div > mbs-passenger-details > div.container-fluid.card.shadow-default.radius-12.vclub-membership-information.ng-star-inserted", "dependencies": [], "attributes": {"html": "<div class=\"row replace-login\">\n  <div class=\"col-8 col-sm-8\"><h4 id=\"titleLoginPax\">I already have an account</h4><p id=\"subtitleLoginPax\">Log in to speed up the booking process</p></div><div class=\"col-4 col-sm-4\"><a class=\"btn continue mat-flat-button mat-button-base btn-small mat-secondary btnLoginPax\" color=\"secondary\" mat-flat-button=\"\"><span class=\"mat-button-wrapper\" id=\"btnLoginPax\">Login</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div><div class=\"mat-button-focus-overlay\"></div></a></div>\n</div>"}, "type": "attribute", "id": "32f2c170eaba49ac8726f9e9936cd95f", "css": {}}]}]}], "weightDistributions": [{"entityId": "24589070008", "endOfRange": 3400}, {"entityId": "24566170023", "endOfRange": 10000}], "name": "Test-Passengers & Payment removing v.club elements 66", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["18199391328", "18254190011", "18262000014"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25306610297", "name": "Test - Wishlist - Flight Search & User Profile (Fifth Iteration)", "commitId": "25297510652", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "25306600348", "integrationSettings": null, "variations": [{"id": "25261041019", "name": "Original", "actions": []}, {"id": "25325670202", "name": "Wishlist", "actions": [{"viewId": "24631980032", "changes": [{"id": "a93a82bddc254ce68a0df2d0c6b99c0d", "type": "custom_code", "value": function($){function airportNameEsp(aeropuerto) {
  switch (aeropuerto) {
    case "ABQ":
      myDestination = "Albuquerque";
      break;
    case "ACA":
      myDestination = "Acapulco";
      break;
    case "AGU":
      myDestination = "Aguascalientes";
      break;
    case "ALB":
      myDestination = "Albany";
      break;
    case "ATL":
      myDestination = "Atlanta";
      break;
    case "AUS":
      myDestination = "Austin";
      break;
    case "BDL":
      myDestination = "Bradley";
      break;
    case "BHM":
      myDestination = "Birmingham";
      break;
    case "BIL":
      myDestination = "Billings";
      break;
    case "BIS":
      myDestination = "Bismarck";
      break;
    case "BJX":
      myDestination = "León";
      break;
    case "BKG":
      myDestination = "Branson";
      break;
    case "BLB":
      myDestination = "Balboa Airport";
      break;
    case "BMI":
      myDestination = "Illinois";
      break;
    case "BNA":
      myDestination = "Nashville";
      break;
    case "BOG":
      myDestination = "Bogotá";
      break;
    case "BOI":
      myDestination = "Boise";
      break;
    case "BOS":
      myDestination = "Boston";
      break;
    case "BTV":
      myDestination = "Burlington";
      break;
    case "BUF":
      myDestination = "Buffalo";
      break;
    case "BWI":
      myDestination = "Baltimore";
      break;
    case "BZN":
      myDestination = "Bozeman";
      break;
    case "CEN":
      myDestination = "Ciudad Obregón";
      break;
    case "CHS":
      myDestination = "Charleston";
      break;
    case "CID":
      myDestination = "Cedar Rapids";
      break;
    case "CJS":
      myDestination = "Ciudad Juárez";
      break;
    case "CLE":
      myDestination = "Cleveland";
      break;
    case "CLQ":
      myDestination = "Colima";
      break;
    case "CLT":
      myDestination = "Charlotte";
      break;
    case "CME":
      myDestination = "Ciudad Del Carmen ";
      break;
    case "CMH":
      myDestination = "Columbus";
      break;
    case "COS":
      myDestination = "Colorado Springs";
      break;
    case "CPE":
      myDestination = "Campeche";
      break;
    case "CTM":
      myDestination = "Chetumal";
      break;
    case "CUL":
      myDestination = "Culiacán";
      break;
    case "CUN":
      myDestination = "Cancún";
      break;
    case "CUU":
      myDestination = "Chihuahua";
      break;
    case "CVG":
      myDestination = "Cincinnati";
      break;
    case "CZM":
      myDestination = "Cozumel";
      break;
    case "DCA":
      myDestination = "Washington D.C.";
      break;
    case "DEN":
      myDestination = "Denver";
      break;
    case "DFW":
      myDestination = "Dallas - Fort Worth";
      break;
    case "DGO":
      myDestination = "Durango";
      break;
    case "DSM":
      myDestination = "Des Moines";
      break;
    case "DTW":
      myDestination = "Detroit";
      break;
    case "ELP":
      myDestination = "El Paso";
      break;
    case "EWR":
      myDestination = "Newark";
      break;
    case "FAR":
      myDestination = "Fargo";
      break;
    case "FAT":
      myDestination = "Fresno";
      break;
    case "FLL":
      myDestination = "Fort Lauderdale";
      break;
    case "FSD":
      myDestination = "Sioux Falls";
      break;
    case "GDL":
      myDestination = "Guadalajara";
      break;
    case "GEG":
      myDestination = "Spokane";
      break;
    case "GRB":
      myDestination = "Green Bay";
      break;
    case "GRR":
      myDestination = "Grand Rapids";
      break;
    case "GSO":
      myDestination = "Greensboro";
      break;
    case "GSP":
      myDestination = "Greenville";
      break;
    case "GUA":
      myDestination = "Guatemala";
      break;
    case "HMO":
      myDestination = "Hermosillo";
      break;
    case "HRL":
      myDestination = "Valley";
      break;
    case "HSV":
      myDestination = "Huntsville";
      break;
    case "HUX":
      myDestination = "Huatulco";
      break;
    case "IAD":
      myDestination = "Dulles Washington";
      break;
    case "IAH":
      myDestination = "Houston";
      break;
    case "ICT":
      myDestination = "Wichita";
      break;
    case "IND":
      myDestination = "Indianapolis";
      break;
    case "ISP":
      myDestination = "Long Island";
      break;
    case "JAC":
      myDestination = "Jackson Hole";
      break;
    case "JAN":
      myDestination = "Jackson-Evers";
      break;
    case "JAX":
      myDestination = "Jacksonville";
      break;
    case "JFK":
      myDestination = "Nueva York";
      break;
    case "LAP":
      myDestination = "La Paz";
      break;
    case "LAS":
      myDestination = "Las Vegas";
      break;
    case "LAX":
      myDestination = "Los Ángeles";
      break;
    case "LFT":
      myDestination = "Lafayette";
      break;
    case "LGA":
      myDestination = "La Guardia";
      break;
    case "LIT":
      myDestination = "Little Rock";
      break;
    case "LMM":
      myDestination = "Los Mochis";
      break;
    case "LTO":
      myDestination = "Loreto";
      break;
    case "MCI":
      myDestination = "Kansas City";
      break;
    case "MCO":
      myDestination = "Orlando";
      break;
    case "MDT":
      myDestination = "Harrisburg";
      break;
    case "MDW":
      myDestination = "Chicago Midway";
      break;
    case "MEM":
      myDestination = "Memphis";
      break;
    case "MEX":
      myDestination = "Cd. de México (AICM)";
      break;
    case "MGA":
      myDestination = "Managua";
      break;
    case "MIA":
      myDestination = "Miami";
      break;
    case "MID":
      myDestination = "Mérida";
      break;
    case "MKE":
      myDestination = "Milwaukee";
      break;
    case "MLM":
      myDestination = "Morelia";
      break;
    case "MSL":
      myDestination = "Muscle Shoals";
      break;
    case "MSN":
      myDestination = "Madison";
      break;
    case "MSO":
      myDestination = "Missoula";
      break;
    case "MSP":
      myDestination = "Mineápolis";
      break;
    case "MSY":
      myDestination = "Nueva Orleans";
      break;
    case "MTY":
      myDestination = "Monterrey";
      break;
    case "MXL":
      myDestination = "Mexicali";
      break;
    case "MYR":
      myDestination = "Myrtle Beach";
      break;
    case "MZT":
      myDestination = "Mazatlán";
      break;
    case "NLU":
      myDestination = "Ciudad de México (AIFA)";
      break;
    case "OAK":
      myDestination = "Oakland";
      break;
    case "OAX":
      myDestination = "Oaxaca";
      break;
    case "OKC":
      myDestination = "Oklahoma City";
      break;
    case "OMA":
      myDestination = "Omaha";
      break;
    case "ONT":
      myDestination = "Ontario";
      break;
    case "ORD":
      myDestination = "Chicago (O Hare)";
      break;
    case "ORF":
      myDestination = "Norfolk";
      break;
    case "PBC":
      myDestination = "Puebla";
      break;
    case "PBI":
      myDestination = "Palm Beach";
      break;
    case "PDX":
      myDestination = "Portland";
      break;
    case "PHL":
      myDestination = "Philadelphia";
      break;
    case "PHX":
      myDestination = "Phoenix";
      break;
    case "PIT":
      myDestination = "Pittsburgh";
      break;
    case "PNS":
      myDestination = "Pensacola";
      break;
    case "PPE":
      myDestination = "Puerto Peñasco";
      break;
    case "PSM":
      myDestination = "Portsmouth";
      break;
    case "PSP":
      myDestination = "Palm Springs";
      break;
    case "PVD":
      myDestination = "Warwick";
      break;
    case "PVR":
      myDestination = "Puerto Vallarta";
      break;
    case "PWM":
      myDestination = "Portland, ME";
      break;
    case "PXM":
      myDestination = "Puerto Escondido";
      break;
    case "QRO":
      myDestination = "Querétaro";
      break;
    case "RDU":
      myDestination = "Raleigh";
      break;
    case "REX":
      myDestination = "Reynosa";
      break;
    case "RFD":
      myDestination = "Chicago Rockford";
      break;
    case "RNO":
      myDestination = "Reno";
      break;
    case "RSW":
      myDestination = "Fort Myers";
      break;
    case "SAL":
      myDestination = "San Salvador";
      break;
    case "SAN":
      myDestination = "San Diego";
      break;
    case "SAT":
      myDestination = "San Antonio";
      break;
    case "SAV":
      myDestination = "Savannah";
      break;
    case "SBA":
      myDestination = "Santa Bárbara";
      break;
    case "SBD":
      myDestination = "San Bernardino";
      break;
    case "SDF":
      myDestination = "Louisville";
      break;
    case "SEA":
      myDestination = "Seattle";
      break;
    case "SFO":
      myDestination = "San Francisco";
      break;
    case "SJC":
      myDestination = "San José, California";
      break;
    case "SJD":
      myDestination = "Los Cabos";
      break;
    case "SJO":
      myDestination = "San José, Costa Rica";
      break;
    case "SLC":
      myDestination = "Salt Lake City";
      break;
    case "SLP":
      myDestination = "San Luis Potosí";
      break;
    case "SMF":
      myDestination = "Sacramento";
      break;
    case "SNA":
      myDestination = "Santa Ana";
      break;
    case "SRQ":
      myDestination = "Bradenton";
      break;
    case "STL":
      myDestination = "St. Louis";
      break;
    case "SYR":
      myDestination = "Syracuse";
      break;
    case "TAM":
      myDestination = "Tampico";
      break;
    case "TAP":
      myDestination = "Tapachula";
      break;
    case "TGZ":
      myDestination = "Tuxtla Gutiérrez";
      break;
    case "TIJ":
      myDestination = "Tijuana";
      break;
    case "TLC":
      myDestination = "Toluca";
      break;
    case "TPA":
      myDestination = "Tampa";
      break;
    case "TPQ":
      myDestination = "Tepic";
      break;
    case "TRC":
      myDestination = "Torreón";
      break;
    case "TTN":
      myDestination = "Trenton";
      break;
    case "TUL":
      myDestination = "Tulsa";
      break;
    case "TUS":
      myDestination = "Tucson";
      break;
    case "TYR":
      myDestination = "Pounds Field";
      break;
    case "TYS":
      myDestination = "Knoxville";
      break;
    case "UPN":
      myDestination = "Uruapan";
      break;
    case "VER":
      myDestination = "Veracruz";
      break;
    case "VSA":
      myDestination = "Villahermosa";
      break;
    case "XNA":
      myDestination = "Fayettville";
      break;
    case "ZCL":
      myDestination = "Zacatecas";
      break;
    case "ZIH":
      myDestination = "Ixtapa / Zihuatanejo";
      break;
    case "LIM":
      myDestination = "Lima";
      break;
    case "QMX":
      myDestination = "Ciudad de México (todos los aeropuertos)";
      break;
    case "QLA":
      myDestination = "Los Ángeles (todos los aeropuertos)";
      break;
    default:
      myDestination = "Aeropuerto";
      break;
  }
  return myDestination;
}

//Aeropuertos
const optionsJSON = [
  {
    value: "ATL",
    text: "Aeropuerto Internacional Hartsfield–Jackson Atlanta (ATL), Atlanta, Estados Unidos",
  },
  {
    value: "LAX",
    text: "Aeropuerto Internacional Los Ángeles (LAX), Los Angeles, Estados Unidos",
  },
  {
    value: "ORD",
    text: "Aeropuerto Internacional O'Hare (ORD), Chicago, Estados Unidos",
  },
  {
    value: "DFW",
    text: "Aeropuerto Internacional Dallas-Fort Worth (DFW), Dallas, Estados Unidos",
  },
  {
    value: "DEN",
    text: "Aeropuerto Internacional Denver (DEN), Denver, Estados Unidos",
  },
  {
    value: "JFK",
    text: "Aeropuerto Internacional John F. Kennedy (JFK), New York, Estados Unidos",
  },
  {
    value: "SFO",
    text: "Aeropuerto Internacional de San Francisco (SFO), San Francisco, Estados Unidos",
  },
  {
    value: "LAS",
    text: "Aeropuerto Internacional McCarran (LAS), Las Vegas, Estados Unidos",
  },
  {
    value: "YYZ",
    text: "Aeropuerto Internacional Pearson de Toronto (YYZ), Toronto, Canadá",
  },
  {
    value: "SEA",
    text: "Aeropuerto Internacional de Seattle-Tacoma (SEA), Seattle, Estados Unidos",
  },
  {
    value: "CLT",
    text: "Aeropuerto Internacional Douglas de Charlotte (CLT), Charlotte, Estados Unidos",
  },
  {
    value: "MCO",
    text: "Aeropuerto Internacional de Orlando (MCO), Orlando, Estados Unidos",
  },
  {
    value: "MIA",
    text: "Aeropuerto Internacional de Miami (MIA), Miami, Estados Unidos",
  },
  {
    value: "PHX",
    text: "Aeropuerto Internacional de Phoenix Sky Harbor (PHX), Phoenix, Estados Unidos",
  },
  {
    value: "EWR",
    text: "Aeropuerto Internacional de Newark Liberty (EWR), Newark, Estados Unidos",
  },
  {
    value: "IAH",
    text: "Aeropuerto Intercontinental George Bush de Houston (IAH), Houston, Estados Unidos",
  },
  {
    value: "MSP",
    text: "Aeropuerto Internacional de St. Paul (MSP), Minneapolis, Estados Unidos",
  },
  {
    value: "BOS",
    text: "Aeropuerto Internacional Logan (BOS), Boston, Estados Unidos",
  },
  {
    value: "DTW",
    text: "Aeropuerto Metropolitano del Condado de Wayne de Detroit (DTW), Detroit, Estados Unidos",
  },
  {
    value: "FLL",
    text: "Aeropuerto Internacional de Fort Lauderdale-Hollywood (FLL), Fort Lauderdale, Estados Unidos",
  },
  {
    value: "ORL",
    text: "Aeropuerto Ejecutivo de Orlando (ORL), Orlando, Estados Unidos",
  },
  {
    value: "LGA",
    text: "Aeropuerto LaGuardia (LGA), New York, Estados Unidos",
  },
  {
    value: "PHL",
    text: "Aeropuerto Internacional de Filadelfia (PHL), Philadelphia, Estados Unidos",
  },
  {
    value: "BWI",
    text: "Aeropuerto Internacional Thurgood Marshall de Washington (BWI), Baltimore, Estados Unidos",
  },
  {
    value: "SLC",
    text: "Aeropuerto Internacional de Salt Lake City (SLC), Salt Lake City, Estados Unidos",
  },
  {
    value: "YVR",
    text: "Aeropuerto Internacional de Vancouver (YVR), Vancouver, Canadá",
  },
  {
    value: "DCA",
    text: "Aeropuerto Nacional Ronald Reagan de Washington (DCA), Washington, Estados Unidos",
  },
  {
    value: "IAD",
    text: "Aeropuerto Internacional de Washington Dulles (IAD), Washington, Estados Unidos",
  },
  {
    value: "MDW",
    text: "Aeropuerto Internacional Midway (MDW), Chicago, Estados Unidos",
  },
  {
    value: "SAN",
    text: "Aeropuerto Internacional de San Diego (SAN), San Diego, Estados Unidos",
  },
  {
    value: "HNL",
    text: "Aeropuerto Internacional Daniel K. Inouye (HNL), Honolulu, Estados Unidos",
  },
  {
    value: "TPA",
    text: "Aeropuerto Internacional de Tampa (TPA), Tampa, Estados Unidos",
  },
  {
    value: "PDX",
    text: "Aeropuerto Internacional de Portland (PDX), Portland, Estados Unidos",
  },
  {
    value: "YUL",
    text: "Aeropuerto Internacional Montréal-Pierre Elliott Trudeau (YUL), Montreal, Canadá",
  },
  {
    value: "YYC",
    text: "Aeropuerto Internacional de Calgary (YYC), Calgary, Canadá",
  },
  {
    value: "DAL",
    text: "Aeropuerto Love Field de Dallas (DAL), Dallas, Estados Unidos",
  },
  {
    value: "STL",
    text: "Aeropuerto Internacional Lambert St. Louis (STL), St. Louis, Estados Unidos",
  },
  {
    value: "BNA",
    text: "Aeropuerto Internacional de Nashville (BNA), Nashville, Estados Unidos",
  },
  {
    value: "AUS",
    text: "Aeropuerto Internacional de Austin-Bergstrom (AUS), Austin, Estados Unidos",
  },
  {
    value: "HOU",
    text: "Aeropuerto William P. Hobby (HOU), Houston, Estados Unidos",
  },
  {
    value: "OAK",
    text: "Aeropuerto Internacional Metropolitano de Oakland (OAK), Oakland, Estados Unidos",
  },
  {
    value: "SJC",
    text: "Aeropuerto Internacional Norman Y. Mineta San Jose (SJC), San Jose, Estados Unidos",
  },
  {
    value: "MSY",
    text: "Aeropuerto Internacional Louis Armstrong de Nueva Orleans (MSY), New Orleans, Estados Unidos",
  },
  {
    value: "RDU",
    text: "Aeropuerto Internacional Raleigh-Durham (RDU), Raleigh, Estados Unidos",
  },
  {
    value: "MCI",
    text: "Aeropuerto Internacional de Kansas City (MCI), Kansas City, Estados Unidos",
  },
  {
    value: "SMF",
    text: "Aeropuerto Internacional de Sacramento (SMF), Sacramento, Estados Unidos",
  },
  {
    value: "SNA",
    text: "Aeropuerto John Wayne-Condado de Orange (SNA), Santa Ana, Estados Unidos",
  },
  {
    value: "CLE",
    text: "Aeropuerto Internacional Cleveland Hopkins (CLE), Cleveland, Estados Unidos",
  },
  {
    value: "SAT",
    text: "Aeropuerto Internacional de San Antonio (SAT), San Antonio, Estados Unidos",
  },
  {
    value: "PIT",
    text: "Aeropuerto Internacional de Pittsburgh (PIT), Pittsburgh, Estados Unidos",
  },
  {
    value: "RSW",
    text: "Aeropuerto Internacional del Suroeste de Florida (RSW), Fort Myers, Estados Unidos",
  },
  {
    value: "IND",
    text: "Aeropuerto Internacional de Indianápolis (IND), Indianapolis, Estados Unidos",
  },
  {
    value: "CVG",
    text: "Aeropuerto Internacional de Cincinnati/Norte de Kentucky (CVG), Cincinnati, Estados Unidos",
  },
  {
    value: "YEG",
    text: "Aeropuerto Internacional de Edmonton (YEG), Edmonton, Canadá",
  },
  {
    value: "CMH",
    text: "Aeropuerto Internacional Port Columbus (CMH), Columbus, Estados Unidos",
  },
  {
    value: "BDL",
    text: "Aeropuerto Internacional Bradley (BDL), Windsor Locks, Estados Unidos",
  },
  {
    value: "PBI",
    text: "Aeropuerto Internacional de Palm Beach (PBI), West Palm Beach, Estados Unidos",
  },
  {
    value: "JAX",
    text: "Aeropuerto Internacional de Jacksonville (JAX), Jacksonville, Estados Unidos",
  },
  {
    value: "ANC",
    text: "Aeropuerto Internacional Ted Stevens Anchorage (ANC), Anchorage, Estados Unidos",
  },
  {
    value: "ABQ",
    text: "Aeropuerto Internacional Sunport de Albuquerque (ABQ), Albuquerque, Estados Unidos",
  },
  {
    value: "YOW",
    text: "Aeropuerto Internacional Ottawa Macdonald-Cartier (YOW), Ottawa, Canadá",
  },
  {
    value: "BUF",
    text: "Aeropuerto Internacional Buffalo Niagara (BUF), Buffalo, Estados Unidos",
  },
  { value: "OMA", text: "Aeropuerto Eppley (OMA), Omaha, Estados Unidos" },
  {
    value: "YWG",
    text: "Aeropuerto Internacional James Armstrong Richardson de Winnipeg (YWG), Winnipeg, Canadá",
  },
  {
    value: "ONT",
    text: "Aeropuerto Internacional de Ontario (ONT), Ontario, Estados Unidos",
  },
  {
    value: "YHZ",
    text: "Aeropuerto Internacional de Halifax Stanfield (YHZ), Halifax, Canadá",
  },
  {
    value: "PVD",
    text: "Aeropuerto T. F. Green (PVD), Providence, Estados Unidos",
  },
  {
    value: "MKE",
    text: "Aeropuerto Internacional General Mitchell (MKE), Milwaukee, Estados Unidos",
  },
  {
    value: "KOA",
    text: "Aeropuerto Internacional de Kona en Keahole (KOA), Kona, Estados Unidos",
  },
  {
    value: "LGB",
    text: "Aeropuerto de Long Beach (LGB), Long Beach, Estados Unidos",
  },
  { value: "LIH", text: "Aeropuerto de Lihue (LIH), Lihue, Estados Unidos" },
  {
    value: "ELP",
    text: "Aeropuerto Internacional de El Paso (ELP), El Paso, Estados Unidos",
  },
  {
    value: "YTZ",
    text: "Aeropuerto Billy Bishop del Centro de la Ciudad de Toronto (YTZ), Toronto, Canadá",
  },
  {
    value: "SFB",
    text: "Aeropuerto Internacional de Sanford en Orlando (SFB), Sanford, Estados Unidos",
  },
  {
    value: "ALB",
    text: "Aeropuerto Internacional de Albany (ALB), Albany, Estados Unidos",
  },
  { value: "BUR", text: "Aeropuerto Bob Hope (BUR), Burbank, Estados Unidos" },
  {
    value: "PSP",
    text: "Aeropuerto Internacional de Palm Springs (PSP), Palm Springs, Estados Unidos",
  },
  {
    value: "SYR",
    text: "Aeropuerto Internacional de Syracuse Hancock (SYR), Syracuse, Estados Unidos",
  },
  {
    value: "YYJ",
    text: "Aeropuerto Internacional de Victoria (YYJ), Victoria, Canadá",
  },
  {
    value: "YLW",
    text: "Aeropuerto Internacional de Kelowna (YLW), Kelowna, Canadá",
  },
  {
    value: "PWM",
    text: "Aeropuerto Internacional de Portland Jetport (PWM), Portland, Estados Unidos",
  },
  {
    value: "YQB",
    text: "Aeropuerto Internacional Jean Lesage de Québec City (YQB), Quebec, Canadá",
  },
  {
    value: "PNS",
    text: "Aeropuerto Regional de Pensacola (PNS), Pensacola, Estados Unidos",
  },
  {
    value: "MHT",
    text: "Aeropuerto de Manchester (MHT), Manchester NH, Estados Unidos",
  },
  {
    value: "HPN",
    text: "Aeropuerto del Condado de Westchester (HPN), White Plains, Estados Unidos",
  },
  {
    value: "YXE",
    text: "Aeropuerto Internacional John G. Diefenbaker de Saskatoon (YXE), Saskatoon, Canadá",
  },
  {
    value: "ITO",
    text: "Aeropuerto Internacional de Hilo (ITO), Hilo, Estados Unidos",
  },
  {
    value: "YQR",
    text: "Aeropuerto Internacional de Regina (YQR), Regina, Canadá",
  },
  {
    value: "SRQ",
    text: "Aeropuerto Internacional de Sarasota-Bradenton (SRQ), Sarasota, Estados Unidos",
  },
  {
    value: "ROC",
    text: "Aeropuerto Internacional Greater Rochester (ROC), Rochester, Estados Unidos",
  },
  {
    value: "BTV",
    text: "Aeropuerto Internacional de Burlington (BTV), Burlington, Estados Unidos",
  },
  {
    value: "PIE",
    text: "Aeropuerto Internacional de St. Petersburg-Clearwater (PIE), St. Petersburg, Estados Unidos",
  },
  {
    value: "ECP",
    text: "Aeropuerto Internacional de Northwest Florida Beaches (ECP), Panama City, Estados Unidos",
  },
  {
    value: "FAT",
    text: "Aeropuerto Internacional de Fresno Yosemite (FAT), Fresno, Estados Unidos",
  },
  {
    value: "MFE",
    text: "Aeropuerto Internacional de McAllen Miller (MFE), Mcallen, Estados Unidos",
  },
  {
    value: "TLH",
    text: "Aeropuerto Regional de Tallahassee (TLH), Tallahassee, Estados Unidos",
  },
  {
    value: "AMA",
    text: "Aeropuerto Internacional Rick Husband Amarillo (AMA), Amarillo, Estados Unidos",
  },
  {
    value: "SBA",
    text: "Aeropuerto Municipal de Santa Bárbara (SBA), Santa Barbara, Estados Unidos",
  },
  {
    value: "ISP",
    text: "Aeropuerto MacArthur de Long Island (ISP), Islip, Estados Unidos",
  },
  {
    value: "MEX",
    text: "Aeropuerto Internacional de la Ciudad de México (AICM) (MEX), Ciudad de México, México",
  },
  {
    value: "GRU",
    text: "Aeropuerto Internacional de São Paulo-Guarulhos (GRU), Sao Paulo, Brasil",
  },
  {
    value: "BOG",
    text: "Aeropuerto Internacional El Dorado (BOG), Bogotá, Colombia",
  },
  {
    value: "CUN",
    text: "Aeropuerto Internacional de Cancún (CUN), Cancún, México",
  },
  {
    value: "SCL",
    text: "Aeropuerto Internacional Comodoro Arturo Merino Benítez (SCL), Santiago, Chile",
  },
  {
    value: "LIM",
    text: "Aeropuerto Internacional Jorge Chávez (LIM), Lima, Perú",
  },
  {
    value: "CGH",
    text: "Aeropuerto de São Paulo-Congonhas (CGH), Sao Paulo, Brasil",
  },
  {
    value: "BSB",
    text: "Aeropuerto Internacional Presidente Juscelino Kubitschek (BSB), Brasilia, Brasil",
  },
  {
    value: "GIG",
    text: "Aeropuerto Internacional de Río de Janeiro-Galeão (GIG), Rio De Janeiro, Brasil",
  },
  {
    value: "PTY",
    text: "Aeropuerto Internacional de Tocumen (PTY), Panama City, Panamá",
  },
  {
    value: "AEP",
    text: "Aeroparque Jorge Newbery (AEP), Buenos Aires, Argentina",
  },
  {
    value: "GDL",
    text: "Aeropuerto Internacional de Guadalajara (GDL), Guadalajara, México",
  },
  {
    value: "EZE",
    text: "Aeropuerto Internacional Ministro Pistarini (EZE), Buenos Aires, Argentina",
  },
  {
    value: "CNF",
    text: "Aeropuerto Internacional Tancredo Neves (CNF), Belo Horizonte, Brasil",
  },
  {
    value: "MTY",
    text: "Aeropuerto Internacional de Monterrey (MTY), Monterrey, México",
  },
  {
    value: "VCP",
    text: "Aeropuerto Internacional de Viracopos (VCP), Campinas, Brasil",
  },
  {
    value: "SDU",
    text: "Aeropuerto Santos Dumont (SDU), Rio De Janeiro, Brasil",
  },
  {
    value: "POA",
    text: "Aeropuerto Salgado Filho (POA), Porto Alegre, Brasil",
  },
  {
    value: "REC",
    text: "Aeropuerto Internacional Guararapes-Gilberto Freyre (REC), Recife, Brasil",
  },
  {
    value: "SSA",
    text: "Aeropuerto Internacional Deputado Luís Eduardo Magalhães (SSA), Salvador, Brasil",
  },
  {
    value: "TIJ",
    text: "Aeropuerto Internacional General Abelardo L. Rodríguez (TIJ), Tijuana, México",
  },
  { value: "CWB", text: "Aeropuerto Afonso Pena (CWB), Curitiba, Brasil" },
  {
    value: "FOR",
    text: "Aeropuerto Internacional Pinto Martins (FOR), Fortaleza, Brasil",
  },
  {
    value: "HAV",
    text: "Aeropuerto Internacional José Martí (HAV), Habana, Cuba",
  },
  {
    value: "SJO",
    text: "Aeropuerto Internacional Juan Santamaría (SJO), San Jose, Costa Rica",
  },
  { value: "MUN", text: "Aeropuerto de Maturín (MUN), Maturin, Venezuela" },
  {
    value: "FLN",
    text: "Aeropuerto Internacional Hercílio Luz (FLN), Florianopolis, Brasil",
  },
  {
    value: "BEL",
    text: "Aeropuerto Internacional Val de Cans (BEL), Belem, Brasil",
  },
  {
    value: "CUZ",
    text: "Aeropuerto Internacional Alejandro Velasco Astete (CUZ), Cuzco, Perú",
  },
  { value: "GYN", text: "Aeropuerto Santa Genoveva (GYN), Goiania, Brasil" },
  {
    value: "VIX",
    text: "Aeropuerto Eurico de Aguiar Salles (VIX), Vitoria, Brasil",
  },
  {
    value: "SAL",
    text: "Aeropuerto Internacional de El Salvador (SAL), San Salvador, El Salvador",
  },
  { value: "CGB", text: "Aeropuerto Marechal Rondon (CGB), Cuiaba, Brasil" },
  {
    value: "COR",
    text: "Aeropuerto Ingeniero Ambrosio Taravella (COR), Cordoba, Argentina",
  },
  {
    value: "MAO",
    text: "Aeropuerto Internacional Eduardo Gomes (MAO), Manaus, Brasil",
  },
  {
    value: "GUA",
    text: "Aeropuerto Internacional La Aurora (GUA), Guatemala City, Guatemala",
  },
  {
    value: "NAT",
    text: "Aeropuerto Internacional Governador Aluízio Alves (NAT), Natal, Brasil",
  },
  {
    value: "IGU",
    text: "Aeropuerto Internacional de Foz do Iguaçu (IGU), Foz Do Iguacu, Brasil",
  },
  {
    value: "MCZ",
    text: "Aeropuerto Internacional Zumbi dos Palmares (MCZ), Maceio, Brasil",
  },
  {
    value: "MDZ",
    text: "Aeropuerto Internacional El Plumerillo (MDZ), Mendoza, Argentina",
  },
  {
    value: "BPS",
    text: "Aeropuerto de Porto Seguro (BPS), Porto Seguro, Brasil",
  },
  {
    value: "AQP",
    text: "Aeropuerto Internacional Rodríguez Ballón (AQP), Arequipa, Perú",
  },
  {
    value: "SLZ",
    text: "Aeropuerto Internacional Marechal Cunha Machado (SLZ), Sao Luis, Brasil",
  },
  {
    value: "NVT",
    text: "Aeropuerto Internacional Ministro Victor Konder (NVT), Navegantes, Brasil",
  },
  {
    value: "CGR",
    text: "Aeropuerto Internacional de Campo Grande (CGR), Campo Grande, Brasil",
  },
  {
    value: "MGA",
    text: "Aeropuerto Internacional Augusto C. Sandino (MGA), Managua, Nicaragua",
  },
  {
    value: "JPA",
    text: "Aeropuerto Internacional Presidente Castro Pinto (JPA), Joao Pessoa, Brasil",
  },
  {
    value: "BRC",
    text: "Aeropuerto de San Carlos de Bariloche (BRC), San Carlos De Bariloche, Argentina",
  },
  { value: "AJU", text: "Aeropuerto Santa María (AJU), Aracaju, Brasil" },
  {
    value: "LIR",
    text: "Aeropuerto Internacional Daniel Oduber Quiros (LIR), Liberia, Costa Rica",
  },
  {
    value: "ASU",
    text: "Aeropuerto Internacional Silvio Pettirossi (ASU), Asuncion, Paraguay",
  },
  {
    value: "THE",
    text: "Aeropuerto Senador Petrônio Portela (THE), Teresina, Brasil",
  },
  {
    value: "UDI",
    text: "Aeropuerto Ten. Cel. Aviador César Bombonato (UDI), Uberlandia, Brasil",
  },
  {
    value: "SLA",
    text: "Aeropuerto Internacional Martin Miguel De Guemes (SLA), Salta, Argentina",
  },
  {
    value: "IGR",
    text: "Aeropuerto Internacional Cataratas del Iguazú (IGR), Iguazu Falls, Argentina",
  },
  {
    value: "IQT",
    text: "Aeropuerto Internacional Coronel FAP Francisco Secada Vignetta (IQT), Iquitos, Perú",
  },
  {
    value: "NQN",
    text: "Aeropuerto Presidente Peron (NQN), Neuquen, Argentina",
  },
  {
    value: "LDB",
    text: "Aeropuerto Governador José Richa (LDB), Londrina, Brasil",
  },
  {
    value: "BZE",
    text: "Aeropuerto Internacional Philip S. W. Goldson (BZE), Belize City, Belice",
  },
  {
    value: "SAP",
    text: "Aeropuerto Internacional Ramón Villeda Morales (SAP), San Pedro Sula, Honduras",
  },
  {
    value: "RAO",
    text: "Aeropuerto Leite Lopes (RAO), Ribeirao Preto, Brasil",
  },
  {
    value: "PIU",
    text: "Aeropuerto Internacional Capitán FAP Guillermo Concha Iberico (PIU), Piura, Perú",
  },
  {
    value: "USH",
    text: "Aeropuerto Malvinas Argentinas (USH), Ushuaia, Argentina",
  },
  {
    value: "PVH",
    text: "Aeropuerto Governador Jorge Teixeira de Oliveira (PVH), Porto Velho, Brasil",
  },
  { value: "ROS", text: "Aeropuerto Islas Malvinas (ROS), Rosario, Argentina" },
  {
    value: "SJP",
    text: "Aeropuerto Estadual Prof. Eribelto Manoel Reino (SJP), Sao Jose Do Rio Preto, Brasil",
  },
  {
    value: "TGU",
    text: "Aeropuerto Internacional Toncontín (TGU), Tegucigalpa, Honduras",
  },
  {
    value: "ACA",
    text: "Aeropuerto Internacional de Acapulco (ACA), Acapulco, México",
  },
  {
    value: "TPP",
    text: "Aeropuerto Cadete FAP Guillermo Del Castillo Paredes (TPP), Tarapoto, Perú",
  },
  {
    value: "MGF",
    text: "Aeropuerto Regional de Maringá - Sílvio Nane Junior (MGF), Maringa, Brasil",
  },
  {
    value: "PMW",
    text: "Aeropuerto Brigadeiro Lysias Rodrigues (PMW), Palmas, Brasil",
  },
  {
    value: "FTE",
    text: "Aeropuerto de El Calafate (FTE), El Calafate, Argentina",
  },
  {
    value: "CRD",
    text: "Aeropuerto General E. Mosconi (CRD), Comodoro Rivadavia, Argentina",
  },
  {
    value: "IOS",
    text: "Aeropuerto Bahía - Jorge Amado (IOS), Ilheus, Brasil",
  },
  { value: "MCP", text: "Aeropuerto Alberto Alcolumbre (MCP), Macapa, Brasil" },
  {
    value: "TRU",
    text: "Aeropuerto Internacional Capitan FAP Carlos Martinez De Pinillos (TRU), Trujillo, Perú",
  },
  {
    value: "TUC",
    text: "Aeropuerto Teniente Benjamin Matienzo (TUC), Tucuman, Argentina",
  },
  {
    value: "JDO",
    text: "Aeropuerto Orlando Bezerra de Menezes (JDO), Juazeiro Do Norte, Brasil",
  },
  {
    value: "CIX",
    text: "Aeropuerto Internacional Capitan FAP Jose A Quinones Gonzales (CIX), Chiclayo, Perú",
  },
  {
    value: "JOI",
    text: "Aeropuerto Lauro Carneiro de Loyola (JOI), Joinville, Brasil",
  },
  {
    value: "PCL",
    text: "Aeropuerto Internacional Cap FAP David Abenzur Rengifo (PCL), Pucallpa, Perú",
  },
  {
    value: "PNZ",
    text: "Aeropuerto Senador Nilo Coelho (PNZ), Petrolina, Brasil",
  },
  {
    value: "JUL",
    text: "Aeropuerto Internacional Inca Manco Capac (JUL), Juliaca, Perú",
  },
  {
    value: "STM",
    text: "Aeropuerto Maestro Wilson Fonseca (STM), Santarem, Brasil",
  },
  {
    value: "BHI",
    text: "Aeropuerto Comandante Espora (BHI), Bahia Blanca, Argentina",
  },
  {
    value: "RTB",
    text: "Aeropuerto Internacional Juan Manuel Galvez (RTB), Roatan, Honduras",
  },
  {
    value: "RBR",
    text: "Aeropuerto Plácido de Castro (RBR), Rio Branco, Brasil",
  },
  {
    value: "DAV",
    text: "Aeropuerto Internacional Enrique Malek (DAV), David, Panamá",
  },
  {
    value: "RES",
    text: "Aeropuerto Internacional de Resistencia (RES), Resistencia, Argentina",
  },
  {
    value: "IMP",
    text: "Aeropuerto Prefeito Renato Moreira (IMP), Imperatriz, Brasil",
  },
  {
    value: "REL",
    text: "Aeropuerto Almirante Marco Andres Zar (REL), Trelew, Argentina",
  },
  {
    value: "RGL",
    text: "Aeropuerto Piloto Civil N. Fernández (RGL), Rio Gallegos, Argentina",
  },
  {
    value: "MDQ",
    text: "Aeropuerto Internacional Ástor Piazzola (MDQ), Mar Del Plata, Argentina",
  },
  {
    value: "BVB",
    text: "Aeropuerto Atlas Brasil Cantanhede (BVB), Boa Vista, Brasil",
  },
  {
    value: "MAB",
    text: "Aeropuerto João Correa da Rocha (MAB), Maraba, Brasil",
  },
  {
    value: "MOC",
    text: "Aeropuerto Mário Ribeiro (MOC), Montes Claros, Brasil",
  },
  {
    value: "JUJ",
    text: "Aeropuerto Internacional Gobernador Horacio Guzman (JUJ), Jujuy, Argentina",
  },
  {
    value: "PPB",
    text: "Aeropuerto Presidente Prudente (PPB), President Prudente, Brasil",
  },
  {
    value: "AGU",
    text: "Aeropuerto Internacional Lic. Jesús Terán Peredo (AGU), Aguascalientes, México",
  },
  {
    value: "BHM",
    text: "Aeropuerto Internacional de Birmingham-Shuttlesworth (BHM), Birmingham, Estados Unidos",
  },
  {
    value: "BIL",
    text: "Aeropuerto Internacional Billings Logan (BIL), Billings, Estados Unidos",
  },
  {
    value: "BIS",
    text: "Aeropuerto Municipal de Bismark (BIS), Bismarck, Estados Unidos",
  },
  {
    value: "BJX",
    text: "Aeropuerto Internacional Del Bajío (BJX), León, México",
  },
  {
    value: "BKG",
    text: "Aeropuerto de Branson (BKG), Branson, Estados Unidos",
  },
  {
    value: "BLB",
    text: "Aeropuerto Internacional de Panamá Pacífico (BLB), Balboa Airport, Panamá",
  },
  {
    value: "BMI",
    text: "Aeropuerto Regional Central de Illinois en Bloomington-Normal (BMI), Illinois, Estados Unidos",
  },
  { value: "BOI", text: "Aeropuerto de Boise (BOI), Boise, Estados Unidos" },
  {
    value: "BZN",
    text: "Aeropuerto Internacional Bozeman Yellowstone (BZN), Bozeman, Estados Unidos",
  },
  {
    value: "CEN",
    text: "Aeropuerto Internacional de Ciudad Obregón (CEN), Ciudad Obregón, México",
  },
  {
    value: "CHS",
    text: "Aeropuerto Internacional de Charleston (CHS), Charleston, Estados Unidos",
  },
  {
    value: "CID",
    text: "Aeropuerto Internacional del Este de Iowa (CID), Cedar Rapids, Estados Unidos",
  },
  {
    value: "CJS",
    text: "Aeropuerto Internacional Abraham González (CJS), Ciudad Juárez, México",
  },
  {
    value: "CLQ",
    text: "Aeropuerto Licenciado Miguel de la Madrid (CLQ), Colima, México",
  },
  {
    value: "CME",
    text: "Aeropuerto Internacional de Ciudad del Carmen (CME), Ciudad Del Carmen , México",
  },
  {
    value: "COS",
    text: "Aeropuerto de Colorado Springs (COS), Colorado Springs, Estados Unidos",
  },
  {
    value: "CPE",
    text: "Aeropuerto Internacional Ingeniero Alberto Acuña Ongay (CPE), Campeche, México",
  },
  {
    value: "CTM",
    text: "Aeropuerto Internacional de Chetumal (CTM), Chetumal, México",
  },
  {
    value: "CUL",
    text: "Aeropuerto Internacional Federal de Culiacán (CUL), Culiacán, México",
  },
  {
    value: "CUU",
    text: "Aeropuerto Internacional General Roberto Fierro Villalobos (CUU), Chihuahua, México",
  },
  {
    value: "CZM",
    text: "Aeropuerto Internacional de Cozumel (CZM), Cozumel, México",
  },
  {
    value: "DGO",
    text: "Aeropuerto Internacional Guadalupe Victoria (DGO), Durango, México",
  },
  {
    value: "DSM",
    text: "Aeropuerto Internacional de Des Moines (DSM), Des Moines, Estados Unidos",
  },
  {
    value: "FAR",
    text: "Aeropuerto Internacional Hector (FAR), Fargo, Estados Unidos",
  },
  {
    value: "FSD",
    text: "Aeropuerto Regional de Sioux Falls (FSD), Sioux Falls, Estados Unidos",
  },
  {
    value: "GEG",
    text: "Aeropuerto Internacional de Spokane (GEG), Spokane, Estados Unidos",
  },
  {
    value: "GRB",
    text: "Aeropuerto Internacional de Green Bay-Austin Straubel (GRB), Green Bay, Estados Unidos",
  },
  {
    value: "GRR",
    text: "Aeropuerto Internacional Gerald R. Ford (GRR), Grand Rapids, Estados Unidos",
  },
  {
    value: "GSO",
    text: "Aeropuerto Internacional Piedmont Triad (GSO), Greensboro, Estados Unidos",
  },
  {
    value: "GSP",
    text: "Aeropuerto Internacional de Greenville-Spartanburg (GSP), Greenville, Estados Unidos",
  },
  {
    value: "HMO",
    text: "Aeropuerto Internacional de Hermosillo (HMO), Hermosillo, México",
  },
  {
    value: "HRL",
    text: "Aeropuerto Internacional Valley (HRL), Valley, Estados Unidos",
  },
  {
    value: "HSV",
    text: "Aeropuerto Internacional de Huntsville (HSV), Huntsville, Estados Unidos",
  },
  {
    value: "HUX",
    text: "Aeropuerto Internacional de Bahías de Huatulco (HUX), Huatulco, México",
  },
  {
    value: "ICT",
    text: "Aeropuerto Mid-Continent de Wichita (ICT), Wichita, Estados Unidos",
  },
  {
    value: "JAC",
    text: "Aeropuerto de Jackson Hole (JAC), Jackson Hole, Estados Unidos",
  },
  {
    value: "JAN",
    text: "Aeropuerto Internacional Jackson-Medgar Wiley Evers (JAN), Jackson-Evers, Estados Unidos",
  },
  {
    value: "LAP",
    text: "Aeropuerto Internacional Manuel Márquez de León (LAP), La Paz, México",
  },
  {
    value: "LFT",
    text: "Aeropuerto Regional de Lafayette (LFT), Lafayette, Estados Unidos",
  },
  {
    value: "LIT",
    text: "Aeropuerto Nacional Bill y Hillary Clinton (LIT), Little Rock, Estados Unidos",
  },
  {
    value: "LMM",
    text: "Aeropuerto Internacional Federal del Valle del Fuerte (LMM), Los Mochis, México",
  },
  {
    value: "LTO",
    text: "Aeropuerto Internacional de Loreto (LTO), Loreto, México",
  },
  {
    value: "MDT",
    text: "Aeropuerto Internacional de Harrisburg (MDT), Harrisburg, Estados Unidos",
  },
  {
    value: "MEM",
    text: "Aeropuerto Internacional de Memphis (MEM), Memphis, Estados Unidos",
  },
  {
    value: "MID",
    text: "Aeropuerto Internacional Manuel Crescencio Rejón (MID), Mérida, México",
  },
  {
    value: "MLM",
    text: "Aeropuerto Internacional General Francisco J. Mujica (MLM), Morelia, México",
  },
  {
    value: "MSL",
    text: "Aeropuerto Regional del Noroeste de Alabama (MSL), Muscle Shoals, Estados Unidos",
  },
  {
    value: "MSN",
    text: "Aeropuerto Regional del Condado de Dane (MSN), Madison, Estados Unidos",
  },
  {
    value: "MSO",
    text: "Aeropuerto Internacional de Missoula (MSO), Missoula, Estados Unidos",
  },
  {
    value: "MXL",
    text: "Aeropuerto Internacional General Rodolfo Sánchez Taboada (MXL), Mexicali, México",
  },
  {
    value: "MYR",
    text: "Aeropuerto Internacional de Myrtle Beach (MYR), Myrtle Beach, Estados Unidos",
  },
  {
    value: "MZT",
    text: "Aeropuerto Internacional General Rafael Buelna (MZT), Mazatlán, México",
  },
  {
    value: "NLU",
    text: "Aeropuerto Internacional Felipe Ángeles (NLU), Ciudad de México (AIFA), México",
  },
  {
    value: "OAX",
    text: "Aeropuerto Internacional de Oaxaca (OAX), Oaxaca, México",
  },
  {
    value: "OKC",
    text: "Aeropuerto Will Rogers World (OKC), Oklahoma City, Estados Unidos",
  },
  {
    value: "ORF",
    text: "Aeropuerto Internacional de Norfolk (ORF), Norfolk, Estados Unidos",
  },
  {
    value: "PBC",
    text: "Aeropuerto Internacional de Puebla (PBC), Puebla, México",
  },
  {
    value: "PPE",
    text: "Aeropuerto Internacional Mar de Cortés (PPE), Puerto Peñasco, México",
  },
  {
    value: "PSM",
    text: "Aeropuerto Internacional Pease (PSM), Portsmouth, Estados Unidos",
  },
  {
    value: "PVR",
    text: "Aeropuerto Internacional de Puerto Vallarta (PVR), Puerto Vallarta, México",
  },
  {
    value: "PXM",
    text: "Aeropuerto Internacional de Puerto Escondido (PXM), Puerto Escondido, México",
  },
  {
    value: "QRO",
    text: "Aeropuerto Intercontinental de Querétaro (QRO), Querétaro, México",
  },
  {
    value: "REX",
    text: "Aeropuerto Internacional General Lucio Blanco (REX), Reynosa, México",
  },
  {
    value: "RFD",
    text: "Aeropuerto Internacional de Chicago Rockford (RFD), Chicago Rockford, Estados Unidos",
  },
  {
    value: "RNO",
    text: "Aeropuerto Internacional Reno-Tahoe (RNO), Reno, Estados Unidos",
  },
  {
    value: "SAV",
    text: "Aeropuerto Internacional de Savannah-Hilton Head (SAV), Savannah, Estados Unidos",
  },
  {
    value: "SBD",
    text: "Aeropuerto Internacional de San Bernardino (SBD), San Bernardino, Estados Unidos",
  },
  {
    value: "SDF",
    text: "Aeropuerto Internacional de Louisville Muhammad Ali (SDF), Louisville, Estados Unidos",
  },
  {
    value: "SJD",
    text: "Aeropuerto Internacional de Los Cabos (SJD), Los Cabos, México",
  },
  {
    value: "SLP",
    text: "Aeropuerto Internacional Ponciano Arriaga (SLP), San Luis Potosí, México",
  },
  {
    value: "TAM",
    text: "Aeropuerto Internacional General Francisco Javier Mina (TAM), Tampico, México",
  },
  {
    value: "TAP",
    text: "Aeropuerto Internacional de Tapachula (TAP), Tapachula, México",
  },
  {
    value: "TGZ",
    text: "Aeropuerto Internacional Ángel Albino Corzo (TGZ), Tuxtla Gutiérrez, México",
  },
  {
    value: "TLC",
    text: "Aeropuerto Internacional de Toluca (TLC), Toluca, México",
  },
  {
    value: "TPQ",
    text: "Aeropuerto Internacional de Tepic (TPQ), Tepic, México",
  },
  {
    value: "TRC",
    text: "Aeropuerto Internacional de Torreón (TRC), Torreón, México",
  },
  {
    value: "TTN",
    text: "Aeropuerto de Trenton-Mercer (TTN), Trenton, Estados Unidos",
  },
  {
    value: "TUL",
    text: "Aeropuerto Internacional de Tulsa (TUL), Tulsa, Estados Unidos",
  },
  {
    value: "TUS",
    text: "Aeropuerto Internacional de Tucson (TUS), Tucson, Estados Unidos",
  },
  {
    value: "TYR",
    text: "Aeropuerto Regional Tyler Pounds (TYR), Pounds Field, Estados Unidos",
  },
  {
    value: "TYS",
    text: "Aeropuerto McGhee Tyson (TYS), Knoxville, Estados Unidos",
  },
  {
    value: "UPN",
    text: "Aeropuerto Internacional Licenciado y General Ignacio López Rayón (UPN), Uruapan, México",
  },
  {
    value: "VER",
    text: "Aeropuerto Internacional de Veracruz (VER), Veracruz, México",
  },
  {
    value: "VSA",
    text: "Aeropuerto Internacional Carlos Rovirosa Pérez (VSA), Villahermosa, México",
  },
  {
    value: "XNA",
    text: "Aeropuerto Regional del Noroeste de Arkansas (XNA), Fayettville, Estados Unidos",
  },
  {
    value: "ZCL",
    text: "Aeropuerto Internacional General Leobardo C. Ruiz (ZCL), Zacatecas, México",
  },
  {
    value: "ZIH",
    text: "Aeropuerto Internacional de Ixtapa-Zihuatanejo (ZIH), Ixtapa / Zihuatanejo, México",
  },
];

//Guardar cookie
function setCookieWishlist(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

//Verificar si hay una cookie existente en el dispositivo
function getCookieWishlist(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Cerrar modal wishlist
$(document.body).on("click", "#btnCerrarModalWishlist", function (e) {
  $("#modal-test-wishlist").remove();
});

//Al darle click al boton de wishlist
$(document.body).on("click", ".btn-wishlist-logged", function (e) {
  //window.$("#LoggedIn > button").click();
  window.$("#MainHeader").click();
  showWishlistModal();
});

//Cambiar el tab
function openTab(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  var tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  document
    .querySelector(`[onclick="openTab('${tabName}')"]`)
  //.classList.add("active");
}

//Función para convertir fechas:
function convertirFechaOrigen(fechaStr) {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const partes = fechaStr.split("/");
  const mesNum = parseInt(partes[0], 10);
  const dia = parseInt(partes[1], 10);
  const año = parseInt(partes[2], 10);

  const mesTexto = meses[mesNum - 1];
  const fechaFormateada = `${dia} de ${mesTexto}, ${año}`;

  return fechaFormateada;
}

//Función para convertir un string en arreglo
function arrayToString(array, separator) {
  return array.join(separator);
}

//Función para comparar si ya pasó una fecha:
function fechaYaPaso(fechaStr) {
  const partes = fechaStr.split("/");
  const mes = parseInt(partes[0], 10);
  const dia = parseInt(partes[1], 10);
  const año = parseInt(partes[2], 10);

  const fechaObjetivo = new Date(año, mes - 1, dia); // Meses en JavaScript son 0-indexados
  const fechaActual = new Date();

  return fechaObjetivo < fechaActual;
}

//Función para buscar valores de nuevos aeropuertos 
function newAirportsValues(valueToFind) {
  for (const option of optionsJSON) {
    if (option.value === valueToFind) {
      return option.text;
    }
  }
  return "No se encontró ninguna coincidencia";
}

//Función para cargar el contenido de nuevas rutas 
function newRoutesContent(routes) {
  var contenido = "";
  var valuesCookie = routes.split(",");

  for (var i = 0; i < valuesCookie.length; i++) {
    const foundText = newAirportsValues(valuesCookie[i]);
    infoDestinoSplit = foundText.split(",");
    nombreAeropuerto = infoDestinoSplit[0];
    nombreAeropuerto = nombreAeropuerto.replace("Aeropuerto", "Apto.");
    contenido += '<div class="col-12 col-sm-6"> <div class="row caja-destinos-nuevos"> <div class="col-2 compass-container"><span class="material-symbols-outlined">explore</span></div> <div class="col-8"> <div class="truncate-container"><p class="caja-destinos-nuevos-title"><span class="truncate-text">' + nombreAeropuerto + '</span></p></div> <p class="caja-destinos-nuevos-subtitle">' + infoDestinoSplit[1] + ', ' + infoDestinoSplit[2] + '</p> </div> <div class="col-2"><span class="material-symbols-outlined close-new-destinations" data-destination="' + valuesCookie[i] + '">close</span></div> </div> </div>';
  }
  return contenido;
}

//Fecha de hoy
function getFechaHoy(daysToAdd) {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysToAdd);

  const month = String(futureDate.getMonth() + 1).padStart(2, '0');
  const day = String(futureDate.getDate()).padStart(2, '0');
  const year = futureDate.getFullYear();

  return `${month}/${day}/${year}`;
}

//Función para cargar las cajas de destinos añadidos (primer pestaña)
function loadDestinationsWL(cookieList, cookieListDetailed) {
  var contenido = "";
  var valuesCookie = cookieList.split(",");
  var valuesCookieDetailed = cookieListDetailed.split(",");
  var promoDisponible;
  const missingAirports = ["SNA", "TJX", "VSA", "DTW", "QMX", "QLA"];
  var nombreAeropuerto, imagenAeropuerto, linkDinamico;

  for (var i = 0; i < valuesCookie.length; i++) {
    nombreAeropuerto = airportNameEsp(valuesCookie[i]);

    if (missingAirports.includes(valuesCookie[i])) {
      imagenAeropuerto = "https://mapa.volaris.com/images/placeholder.jpg";
    } else {
      imagenAeropuerto =
        "https://d2jxstk8lyvs1f.cloudfront.net/" + valuesCookie[i] + ".jpg";
    }

    if (nombreAeropuerto === "Aeropuerto") {
      nombreAeropuerto = nombreAeropuerto + " (" + valuesCookie[i] + ")";
    }

    infoDestino = valuesCookieDetailed[i];
    infoDestinoSplit = infoDestino.split("|");

    pasajeros = parseInt(infoDestinoSplit[0]) + parseInt(infoDestinoSplit[1]) + parseInt(infoDestinoSplit[2]);

    const tipoVuelo = infoDestinoSplit[3];
    if (tipoVuelo == "True") {
      labelTipoVuelo = "Vuelo redondo";
    } else {
      labelTipoVuelo = "Vuelo sencillo";
    }

    var fechaVuelo = infoDestinoSplit[5];
    var fechaVueloRegreso = infoDestinoSplit[6];

    const haPasado = fechaYaPaso(fechaVuelo);
    var fechaAnadida = "";
    if (haPasado) {
      fechaVuelo = getFechaHoy(0);
      fechaVueloRegreso = getFechaHoy(8);
      //fechaAnadida = "";
    }
    var fechaFormateada = convertirFechaOrigen(fechaVuelo);
    fechaAnadida = "<p>" + fechaFormateada + "</p>";

    if (pasajeros == 1) {
      labelPasajeros = " pasajero"
    } else {
      labelPasajeros = " pasajeros"
    }

    linkDinamico =
      "https://www.volaris.com/flight/select?utm_campaign=wishlist_deeplink&utm_source=Wishlist&utm_medium=Referral&adt=" + infoDestinoSplit[0] + "&chd=" + infoDestinoSplit[1] + "&in1=" + infoDestinoSplit[2] + "&rr=" + infoDestinoSplit[3] + "&cc=" + infoDestinoSplit[4] + "&dd1=" + fechaVuelo + "&dd2=" + fechaVueloRegreso + "&culture=" + infoDestinoSplit[7] + "&o1=" + infoDestinoSplit[8] + "&d1=" + infoDestinoSplit[9] + "&s=True&dni=0&promoCode=";

    contenido +=
      '<div class="col-12 col-sm-6"><button class="caja-destino effect-apollo"> <div class="caja-destino-borde"></div> <div class="caja-destino-contenido"><img src="' +
      imagenAeropuerto +
      '" class="img-destinos"></div> <div class="caja-destino-texto figcaption"><a class="remove-wishlist" data-destination="' +
      valuesCookie[i] +
      '" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel remove-wl-box"></span></a><p class="caja-destino-txt caja-destino-titulo">' +
      nombreAeropuerto +
      '</p><p>' + labelTipoVuelo + '</p>' + fechaAnadida + '<p>' + pasajeros + labelPasajeros + '</p> <p style="text-align:right;color:#a12885;"><a href="javascript:void(0);" class="share-flight-wishlist" data-deeplink="' + linkDinamico + '"><span class="material-symbols-outlined" style="margin-right:10px;">share</span></a><a href="' +
      linkDinamico +
      '"><span class="material-symbols-outlined">arrow_right_alt</span></a></p><!--<p class="caja-destino-txt caja-destino-precio"><span class="caja-destino-txt">promo disponible</span></p> <p class="caja-destino-txt caja-destino-disclaimer">Viaje sencillo | TUA no incluido</p>--> </div> </button></div>';
  }
  return contenido;
}

//Click en botón Wishlist para mostrar modal
function showWishlistModal() {
  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");
  var cookieListNewRoutes = getCookieWishlist("wishlist_array_new_destinations");
  var contenido = "";
  var rutasNuevosDestinos = "";

  //Contenido cajas con los destinos Volaris
  if (cookieList !== undefined && cookieList !== null && cookieList !== '' && cookieList !== 'undefined') {
    contenido = loadDestinationsWL(cookieList, cookieListDetailed);
  } else {
    contenido = '<div class="col-12"><p>Inicia una búsqueda para añadir tus destinos favoritos a tu lista.</p></div>'
  }

  //Todas las rutas nuevas
  if (cookieListNewRoutes !== null && cookieListNewRoutes !== undefined && cookieListNewRoutes !== '' && cookieListNewRoutes !== 'undefined') {
    rutasNuevosDestinos = newRoutesContent(cookieListNewRoutes);
  }

  //Sugerir una ruta contenido
  var rutasSugeridas =
    '<div class="col-12"> <form id="form-rutas-nuevas"> <div class="row"> <p>¿Te gustaría explorar nuevas rutas con Volaris? Déjanos saber tus destinos soñados y recibe una notificación en caso de abrir una nueva ruta. </p> <div class="col-12 col-sm-6"> <div class="input-group dropdown-container"> <input type="text" class="dropdown-input dropdownAeropuerto" name="from-airport-wl-request" id="from-airport-wl-request" placeholder="Origen" autocomplete="off" required> <span class="input-group-addon volaris"><span class="material-symbols-outlined arrow-voi">arrow_drop_down</span></span> <div class="dropdown-list" style="display: none;"></div> </div> </div> <div class="col-12 col-sm-6"> <div class="dropdown-container"> <input type="text" name="to-airport-wl-request" id="to-airport-wl-request" class="dropdown-input dropdownAeropuerto" placeholder="Destino" autocomplete="off" required> <span class="input-group-addon volaris"><span class="material-symbols-outlined arrow-voi">arrow_drop_down</span></span> <div class="dropdown-list" style="display: none;"></div> </div> </div> <div class="col-12 col-sm-6"> <input type="hidden" id="new-destinations-wl-request" name="new-destinations-wl-request" value="' + cookieListNewRoutes + '"> <a id="btnAuxGuardarRuta" class="btn btn-large marBtm25 mat-flat-button mat-button-base mat-primary btnGuardarRuta disabled" color="primary" href="javascript:void(0);">Guardar ruta</a> <button type="submit" class="btn btn-large marBtm25 mat-flat-button mat-button-base mat-primary" style="display:none;" id="btnSubmitRuta">Guardar Ruta</button></div> <div class="col-12 col-sm-6"></div> <div class="col-12 nuevos-destinos-boxes"> <div class="row" id="newRoutesContent">' + rutasNuevosDestinos + "</div></div></div></form></div>";

  //Añade contenido de WL
  var tabulador =
    '<div class="col-12" style="margin-top: 20px;"><div class="button-wl-menu b2" id="menu-wishlist"> <input type="checkbox" class="checkbox menu-wishlist-checkbox" name="menu-wishlist-checkbox" id="menu-wishlist-checkbox" /> <div class="knobs"> <span>Mi lista</span> </div> <div class="layer"></div> </div> </div> <div class="col-12"> <div class="tab-content" id="tab1"> <div class="row" id="contenidoWLTabOne">' +
    contenido +
    ' </div> </div> <div class="tab-content" id="tab2"> <div class="row">' +
    rutasSugeridas +
    "</div> </div> </div>";

  $("body").append(
    '<div class="cdk-overlay-container" id="modal-test-wishlist"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: center; align-items: center;"> <div id="cdk-overlay-0" class="cdk-overlay-pane baggage-modal-panel" style="max-width: 50vw; pointer-events: auto; position: static; max-height: 80vh;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container class="mat-dialog-container ng-tns-c40-8 ng-trigger ng-trigger-dialogContainer ng-star-inserted wishlist-bucket" style="transform: none;"> <div class="baggage-modal-container ng-star-inserted combo-flex-container" style="overflow-x: hidden;"> <mat-dialog-content class="template-content combo-content mat-dialog-contents"> <a class="closeDialog" href="javascript:void(0)" mat-dialog-close="" type="button" id="btnCerrarModalWishlist"> <mat-icon aria-hidden="false" aria-label="Close" class="mat-icon notranslate material-icons mat-icon-no-color" matsuffix="" role="img">close</mat-icon></a><div class="row"><div class="col-12"><h4 style="font-size: 18px;margin-bottom: 10px;">Mis favoritos</h4></div></div><div class="row" id="contenido-wishlist">' +
    '<div class="row">' +
    tabulador +
    "</div>" +
    ' </div> </mat-dialog-content> </div> </mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>'
  );
}

/****************FUNCIONES PARA EL DROPDOWN ************************** */
$(document.body).on("keyup", ".dropdownAeropuerto", function (e) {
  //const searchQuery = event.target.value.toLowerCase();
  const searchQuery = $(this).val().toLowerCase();
  const container = event.target.closest(".dropdown-container");
  const list = container.querySelector(".dropdown-list");

  const filteredOptions = optionsJSON.filter((option) =>
    option.text.toLowerCase().includes(searchQuery)
  );

  $(this).data('value', '');
  // Limpia la lista
  list.innerHTML = "";

  // Agrega las opciones filtradas a la lista
  filteredOptions.forEach((option) => {
    const listItem = document.createElement("div");
    listItem.className = "dropdown-item";
    listItem.textContent = option.text;
    listItem.addEventListener("click", function () {
      const input = container.querySelector(".dropdown-input");
      input.value = option.text;
      list.style.display = "none";
      input.setAttribute("data-value", option.value);
      validaNuevasRutas(); //Validando rutas
    });
    list.appendChild(listItem);
  });

  list.style.display = "block";
});

/*window.onload = function () {
  
};*/

/*************FUNCIONES PARA TABS EN EL MENÚ***************** */

//Al hacer click en el checkbox del menú
$(document.body).on("click", ".menu-wishlist-checkbox", function (e) {
  //var nombreTab = $(this).data("tab");
  let isChecked = $("#menu-wishlist-checkbox").is(":checked");
  if (isChecked) {
    openTab("tab2");
  } else {
    openTab("tab1");
  }
});

//Al dar click a la tab
$(document.body).on("click", ".tab-button", function (e) {
  var nombreTab = $(this).data("tab");
  openTab(nombreTab);
});

/**************FUNCIONES PARA COMPARTIR UN VUELO DEL WISHLIST**************** */
//Modal para compartir vuelo
function showModalCopied(copyText) {
  var textoTitulo = "Compartir vuelo";
  var textoModal = "¡Comparte tu vuelo a tus amigos!";
  var textoBoton = "Copiar enlace";

  var labelLink = '<div _ngcontent-bgm-c25="" class="row ng-star-inserted"><div _ngcontent-bgm-c25="" class="col"><mat-form-field _ngcontent-bgm-c25="" appearance="outline" class="textbox mat-form-field ng-tns-c7-48 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float ng-untouched ng-pristine ng-valid"><div class="mat-form-field-wrapper"><div class="mat-form-field-flex"><!----><!----><div class="mat-form-field-outline ng-tns-c7-48 ng-star-inserted"><div class="mat-form-field-outline-start"></div><div class="mat-form-field-outline-gap"></div><div class="mat-form-field-outline-end"></div></div><div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c7-48 ng-star-inserted"><div class="mat-form-field-outline-start"></div><div class="mat-form-field-outline-gap"></div><div class="mat-form-field-outline-end"></div></div><!----><div class="mat-form-field-infix" style="padding: 5px 24px 1px 0;"><!----><!----><input _ngcontent-bgm-c25="" id="shareLinkFlight" class="mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid ng-star-inserted" matinput="" placeholder="' + copyText + '" value="' + copyText + '" type="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" id="mat-input-3" aria-invalid="false" aria-required="false"><mat-autocomplete _ngcontent-bgm-c25="" class="mat-autocomplete ng-star-inserted" panelwidth="auto"><!----></mat-autocomplete><!----><span class="mat-form-field-label-wrapper"><!----></span></div><!----></div><!----><div class="mat-form-field-subscript-wrapper"><!----><!----><div class="mat-form-field-hint-wrapper ng-tns-c7-48 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style="opacity: 1; transform: translateY(0%);"><!----><div class="mat-form-field-hint-spacer"></div></div></div></div></mat-form-field></div></div>';

  $('body').append('<div class="cdk-overlay-container" id="popupAlertTestContainer"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalFWWishlistClose"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p style="text-align: justify;margin-bottom:30px;">' + textoModal + '</p>' + labelLink + '<a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalFWWishlist" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' + textoBoton + '</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>');
}

//Función para desplegar al copiar el link de un vuelo
function modalConfirmationShow() {
  var textoTitulo = "Enlace copiado";
  var textoBoton = "Aceptar";
  var textoModal = "¡Listo! Se ha copiado el enlace a este vuelo en tu portapapeles.";

  var mensajeExitoso = '<div class="cdk-overlay-container" id="popupAlertTest"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalAlert"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content=""><span _ngcontent-bgm-c25="" class="material-icons check_circle check-circle"> check_circle </span><p>' + textoModal + '</p><div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $('body').append(mensajeExitoso);
}

$(document.body).on('click', '.cerrarModalAlert', function (e) {
  $("#popupAlertTest").remove();
});

$(document.body).on('click', '.cerrarModalFWWishlist', function (e) {
  var copyText = document.getElementById('shareLinkFlight').value;
  navigator.clipboard.writeText(copyText);
  $("#popupAlertTestContainer").remove();
  modalConfirmationShow();
});

$(document.body).on('click', '.cerrarModalFWWishlistClose', function (e) {
  $("#popupAlertTestContainer").remove();
});

//Compartir vuelo individual wishlist
$(document.body).on("click", ".share-flight-wishlist", function (e) {
  var deeplinkVuelo = $(this).attr("data-deeplink");
  showModalCopied(deeplinkVuelo);
});
/**************FIN FUNCIONES PARA COMPARTIR UN VUELO DEL WISHLIST**************** */

/**************FUNCIONES PARA QUITAR DESTINOS DEL WISHLIST**************** */
function modalRemoveDestination(destination) {
  var textoModal = "¿Estás seguro que quieres quitar este destino?";
  var textoBoton = "Remover";
  var textoDescarte = "Cancelar";

  var wishlistList = [];
  var wishlistDetailed = [];

  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");

  var valuesCookie = cookieList.split(",");
  var valuesCookieDetailed = cookieListDetailed.split(",");
  for (var i = 0; i < valuesCookie.length; i++) {
    if (valuesCookie[i] !== destination) {
      wishlistList.push(valuesCookie[i]);
      wishlistDetailed.push(valuesCookieDetailed[i]);
    }
  }

  var inputsDestinos = '<input type="hidden" id="wishlist-list-remove" name="wishlist-list-remove" value="' + wishlistList + '">' + '<input type="hidden" id="wishlist-list-detailed-remove" name="wishlist-list-detailed-remove" value="' +
    wishlistDetailed +
    '"><input type="hidden" id="destination-removed" name="destination-removed" value="' + destination + '">';

  var mensajeExitoso =
    '<div class="cdk-overlay-container" id="popupRemoverDestinoWL"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout" style="padding: 10px;"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog btnCerrarRemoverWL" id="btnCerrarRemoverWL" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a></div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p>' +
    textoModal +
    '</p><div class="row"><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-secondary btnCerrarRemoverWL" color="secondary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoDescarte +
    '</span></a></div><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-primary btnRemoverDestinoWL" data-wishlist="' + wishlistList + '" data-wishlist-detailed="' + wishlistDetailed + '" id="btnRemoverDestinoWL" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoBoton +
    '</span></a></div></div>' + inputsDestinos + ' <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $("body").append(mensajeExitoso);
}

$(document.body).on("click", ".btnCerrarRemoverWL", function (e) {
  $("#popupRemoverDestinoWL").remove();
});

//Quitar destino de wishlist
$(document.body).on('click', '.remove-wishlist', function (e) {
  var destination = $(this).attr("data-destination");
  modalRemoveDestination(destination);
});

$(document.body).on('click', '.btnRemoverDestinoWL', function (e) {
  var cookieList = $(this).attr("data-wishlist");
  var cookieListDetailed = $(this).attr("data-wishlist-detailed");
  var contenido = "";
  if (cookieList !== null && cookieList !== undefined && cookieList !== '' && cookieList !== 'undefined') {
    contenido = loadDestinationsWL(cookieList, cookieListDetailed);
    setCookieWishlist("wishlist_array", cookieList, 30);
    setCookieWishlist("wishlist_array_detailed", cookieListDetailed, 30);
  } else {
    setCookieWishlist("wishlist_array", "", -1);
    setCookieWishlist("wishlist_array_detailed", "", -1);
    contenido = '<div class="col-12"><p>Inicia una búsqueda para añadir tus destinos favoritos a tu lista.</p></div>'
  }
  window.document.getElementById("contenidoWLTabOne").innerHTML = contenido;
  $("#popupRemoverDestinoWL").remove();
});

/**************FIN DE FUNCIONES PARA QUITAR DESTINOS DEL WISHLIST**************** */


/*************FUNCIONES PARA IDENTIFICAR LA API DE TEALIUM ************************/
function checkUserProfile(callback) {
  setCookieWishlist("wishlist_array", utag_data.cookie_wishlist, 30);
  setCookieWishlist("wishlist_array_detailed", utag_data.cookie_wishlist_detailed, 30);
  setCookieWishlist("wishlist_array_new_destinations", utag_data.cookie_wishlist_new_destinations, 30);
  callback(); // Llamar al callback después de obtener la información de Tealium y crear la cookie
}

$(document).ready(function () {
  var cookieValidadora = getCookieWishlist("wishlist_available"); //Para no hacer tantos llamados
  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");

  if (cookieValidadora == null || cookieValidadora == undefined || cookieValidadora == '') {
    if (cookieList == null || cookieList == undefined || cookieList == '') {
      console.log("Getting info");
      checkUserProfile(function () {
        setCookieWishlist("wishlist_available", "Yes", 30);
      });
    }
  }

  //Para los dropdowns cuando hacen click fuera y se cierren
  const dropdowns = document.querySelectorAll(".dropdownAeropuerto");

  // Agregar el evento a cada elemento dropdownAeropuerto
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (event) {
      filterOptions(event);
    });
  });

  // Cierra la lista si se hace clic fuera del dropdown
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown-container")) {
      const lists = document.querySelectorAll(".dropdown-list");
      lists.forEach((list) => {
        list.style.display = "none";
      });
    }
  });


}); //Fin función ready function


/********FUNCIONES PARA VALIDAR RUTAS NUEVAS******* */
//Modal de alerta para vuelo
function showModalAlerta(titulo, mensaje) {
  var textoTitulo = titulo;
  var textoModal = mensaje;

  var mensajeExitoso = '<div class="cdk-overlay-container" id="popupModalAlerta"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalAlerta"  id="cerrarModalAlerta" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content=""><p>' + textoModal + '</p><div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $('body').append(mensajeExitoso);
}

$(document.body).on('click', '.cerrarModalAlerta', function (e) {
  $("#popupModalAlerta").remove();
});

function validaNuevasRutas() {
  var origin = $("#from-airport-wl-request").attr("data-value");
  var destination = $("#to-airport-wl-request").attr("data-value");
  var btnSubmitRuta = document.getElementById("btnSubmitRuta");
  var btnAuxGuardarRuta = document.getElementById("btnAuxGuardarRuta");

  if (origin == null || origin == '' || origin == undefined) {
    $("#from-airport-wl-request").addClass("input-error-nd");
  } else {
    $("#from-airport-wl-request").removeClass("input-error-nd");
  }
  if (destination == null || destination == '' || destination == undefined) {
    $("#to-airport-wl-request").addClass("input-error-nd");
  } else {
    $("#to-airport-wl-request").removeClass("input-error-nd");
  }

  if (origin == null || origin == '' || origin == undefined || destination == null || destination == '' || destination == undefined) { //Si está vacío alguno de los campos
    //showModalAlerta("Tiene que elegir algo");
    btnSubmitRuta.style.display = "none";
    btnAuxGuardarRuta.style.display = "block";
  } else {
    if (origin == destination) {
      btnSubmitRuta.style.display = "none";
      btnAuxGuardarRuta.style.display = "block";
      $('#from-airport-wl-request').removeAttr('data-value');
      $('#to-airport-wl-request').removeAttr('data-value');
      $("#form-rutas-nuevas input[type='text']").val("");
      showModalAlerta("Destinos similares", "El origen y destino deben ser distintos.");
      //alert("Elegir destino diferente");
    } else {
      //Para toda la parte del nuevo destino
      var wishlistNew = [];
      //var cookieListNew = getCookieWishlist("wishlist_array_new_destinations");
      cookieListNew = document.getElementById("new-destinations-wl-request").value;
      var valuesCookieNew = cookieListNew.split(",");
      for (var i = 0; i < valuesCookieNew.length; i++) {
        if (valuesCookieNew[i] !== "" && valuesCookieNew[i] !== "undefined") {
          wishlistNew.push(valuesCookieNew[i]);
        }
      }
      //Aqui se añade
      if (wishlistNew.includes(destination)) {
        // No hace nada, ya que el destino ya está en la lista de aeropuertos
        //alert("No se hace nada");
      } else {
        //alert("Se añade el destino" + destination);
        wishlistNew.push(destination);
      }
      $("#new-destinations-wl-request").val(wishlistNew);

      btnSubmitRuta.style.display = "block";
      btnAuxGuardarRuta.style.display = "none";
    }
  }
};

$(document.body).on('submit', '#form-rutas-nuevas', function (event) {
  // Detener el envío del formulario
  event.preventDefault();
  var formData = $(this).serialize();

  // Enviar los datos utilizando AJAX
  $.ajax({
    type: "POST",
    url: $(this).attr("action"),
    data: formData,
    //data: { "from-airport-wl-request": origin, "to-airport-wl-request": destination, "new-destinations-wl-request": newDestinations },
    success: function (response) {
      // Manejar la respuesta
      showModalAlerta("Destino añadido exitosamente", "Te notificaremos en caso de abrir una nueva ruta.");
      //$("#form-rutas-nuevas input[type='text']").data('value', '');
      //$("#form-rutas-nuevas input[type='text']").data('value',null);
      $('#from-airport-wl-request').removeAttr('data-value');
      $('#to-airport-wl-request').removeAttr('data-value');
      $("#form-rutas-nuevas input[type='text']").val("");

      var miElemento = document.getElementById("btnSubmitRuta");
      miElemento.style.display = "none";
      var btnAuxGuardarRuta = document.getElementById("btnAuxGuardarRuta");
      btnAuxGuardarRuta.style.display = "block";

      var wishlistNew = document.getElementById("new-destinations-wl-request").value;
      setCookieWishlist("wishlist_array_new_destinations", wishlistNew, 30);
      //var wishlistNewString = arrayToString(wishlistNew, ",");
      var nuevasRutas = newRoutesContent(wishlistNew);
      $("#newRoutesContent").html(nuevasRutas);
    },
    error: function (xhr, status, error) {
      console.log(xhr.responseText);
    }
  });
});

/**************FUNCIONES PARA QUITAR DESTINOS NUEVOS DEL WISHLIST**************** */
function modalRemoveNewDestination(destination) {
  var textoModal = "¿Estás seguro que quieres quitar este destino?";
  var textoBoton = "Remover";
  var textoDescarte = "Cancelar";

  var wishlistList = [];
  //var cookieList = getCookieWishlist("wishlist_array_new_destinations");
  var cookieList = document.getElementById("new-destinations-wl-request").value;

  var valuesCookie = cookieList.split(",");
  for (var i = 0; i < valuesCookie.length; i++) {
    if (valuesCookie[i] !== destination) {
      wishlistList.push(valuesCookie[i]);
    }
  }

  var inputsDestinos = '<input type="hidden" id="wishlist-list-new-remove" name="wishlist-list-new-remove" value="' + wishlistList + '"><input type="hidden" id="new-destination-removed" name="new-destination-removed" value="' + destination + '">';

  var mensajeExitoso =
    '<div class="cdk-overlay-container" id="popupRemoverNewDestinoWL"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout" style="padding: 10px;"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog btnCerrarRemoverNewWL" id="btnCerrarRemoverNewWL" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a></div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p>' +
    textoModal +
    '</p><div class="row"><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-secondary btnCerrarRemoverNewWL" color="secondary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoDescarte +
    '</span></a></div><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-primary btnRemoverNewDestinoWL" data-wishlist="' + wishlistList + '" id="btnRemoverNewDestinoWL" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoBoton +
    '</span></a></div></div>' + inputsDestinos + ' <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';

  $("body").append(mensajeExitoso);
}

$(document.body).on("click", ".btnCerrarRemoverNewWL", function (e) {
  $("#popupRemoverNewDestinoWL").remove();
});

//Quitar destino de wishlist
$(document.body).on('click', '.close-new-destinations', function (e) {
  var destination = $(this).attr("data-destination");
  modalRemoveNewDestination(destination);
});

$(document.body).on('click', '.btnRemoverNewDestinoWL', function (e) {
  var cookieList = $(this).attr("data-wishlist");
  var contenido = "";

  var valorNuevo = document.getElementById("wishlist-list-new-remove").value;
  $("#new-destinations-wl-request").val(valorNuevo);

  if (cookieList !== null && cookieList !== undefined && cookieList !== '' && cookieList !== 'undefined') {
    contenido = newRoutesContent(cookieList);
    setCookieWishlist("wishlist_array_new_destinations", cookieList, 30);
  } else {
    setCookieWishlist("wishlist_array_new_destinations", "", -1);
    //contenido = '<div class="col-12"><p>Inicia una búsqueda para añadir tus destinos favoritos a tu lista.</p></div>';
  }
  window.document.getElementById("newRoutesContent").innerHTML = contenido;
  $("#popupRemoverNewDestinoWL").remove();
});

/**************FIN DE FUNCIONES PARA QUITAR DESTINOS NUEVOS DEL WISHLIST**************** */
}, "dependencies": []}, {"id": "53e47cd25996464c8093f8a7caa5601c", "type": "append", "selector": "head", "value": "<style>@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);\n.wl-main-title {\n  font-size: 18px;\n  margin-bottom: 10px;\n  line-height: 22px;\n  color: #080206;\n}\n.remove-wl-box {\n  color: #6b676a;\n}\n.remove-wl-box:before {\n  font-size: 18px;\n}\n.caja-destino {\n  display: flex;\n  background: #fff;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border-width: 1px;\n  border-color: #0000001a;\n  flex: 0 0 310px;\n  width: 100%;\n  text-align: left;\n  height: 140px;\n  position: relative;\n  pointer-events: auto;\n  margin-bottom: 20px;\n}\n.caja-destino-borde {\n  height: 100%;\n  width: 0.5rem;\n  background: #a12885;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.caja-destino-contenido {\n  position: relative;\n  width: 104px;\n  flex: 0 0 90px;\n}\n.caja-destino-contenido::before {\n  height: 0;\n  content: \"\";\n  display: block;\n  padding-bottom: 133.333%;\n}\n.caja-destino-contenido > img,\n.caja-destino-contenido > video {\n  object-fit: cover;\n}\n.caja-destino-contenido > :not(style) {\n  overflow: hidden;\n  position: absolute;\n  inset: 0;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 100%;\n  height: 115%;\n}\n.caja-destino-texto {\n  padding-inline-start: 0.75rem;\n  padding-inline-end: 0.75rem;\n  padding-top: 0;\n  padding-bottom: 0.5rem;\n  color: #080206;\n  flex: 1 1 auto;\n  min-width: 0.25rem;\n}\n.caja-destino-titulo {\n  font-size: 20px;\n  font-weight: 700;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: 10px !important;\n  line-height: 25px;\n}\n.caja-destino-fecha {\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n.caja-destino-precio {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #a12885;\n  margin-top: 1rem;\n}\n.caja-destino-disclaimer {\n  margin-top: 0.25rem;\n  font-size: 10px;\n  color: #00000099;\n}\n.effect-apollo img {\n  opacity: 0.95;\n  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\n  transition: opacity 0.35s, transform 0.35s;\n  -webkit-transform: scale3d(1.05, 1.05, 1);\n  transform: scale3d(1.05, 1.05, 1);\n}\n.effect-apollo:hover img {\n  opacity: 0.6;\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n}\n.figcaption::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.5);\n  content: \"\";\n  -webkit-transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, -100%, 0);\n  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, -100%, 0);\n}\n.figcaption:hover::before {\n  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, 100%, 0);\n  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, 100%, 0);\n}\n.caja-destino-texto p {\n  margin-bottom: 5px;\n}\n.caja-destino-texto p:nth-of-type(2) {\n  color: #00000099;\n  font-size: 14px;\n  line-height: 17px;\n}\n.caja-destino-texto p:nth-of-type(3),\n.caja-destino-texto p:nth-of-type(4) {\n  font-size: 14px;\n  line-height: 17px;\n}\n.wishlist-bucket {\n  scrollbar-width: auto;\n  scrollbar-color: #7a7a7a #f2f2f2;\n}\n.wishlist-bucket::-webkit-scrollbar {\n  width: 16px;\n}\n.wishlist-bucket::-webkit-scrollbar-track {\n  background: #f2f2f2;\n}\n.wishlist-bucket::-webkit-scrollbar-thumb {\n  background-color: #7a7a7a;\n  border-radius: 10px;\n  border: 5px solid #f2f2f2;\n}\n.remove-wishlist {\n  position: absolute;\n  right: 5px;\n  top: 3px !important;\n}\n.tab-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.tab-button {\n  background-color: #f1f1f1;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.tab-button:hover {\n  background-color: #ddd;\n}\n.tab-content {\n  display: none;\n  margin-top: 20px;\n}\n.tab-content.active {\n  display: block;\n}\n.knobs,\n.layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.button-wl-menu {\n  position: relative;\n  top: 50%;\n  width: 100%;\n  height: 36px;\n  margin: -20px auto 0 auto;\n  overflow: hidden;\n}\n.button-wl-menu.r,\n.button-wl-menu.r .layer {\n  border-radius: 100px;\n}\n.button-wl-menu.b2 {\n  border-radius: 2px;\n}\n.checkbox {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n.knobs {\n  z-index: 2;\n}\n.layer {\n  width: 100%;\n  background-color: #fff;\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n#menu-wishlist {\n  border: 1px solid #ccc !important;\n  border-radius: 16px;\n  width: 70%;\n}\n#menu-wishlist .knobs span,\n#menu-wishlist .knobs:after,\n#menu-wishlist .knobs:before {\n  position: absolute;\n  top: 4px;\n  width: 50%;\n  height: 27px;\n  font-weight: 700;\n  text-align: center;\n  line-height: 0.7;\n  padding: 9px 4px;\n  border-radius: 2px;\n  transition: 0.3s ease all;\n  font-size: 13px;\n}\n#menu-wishlist .knobs:before {\n  content: \"\";\n  left: 4px;\n  background-color: #a12885;\n  border-radius: 20px;\n}\n#menu-wishlist .knobs:after {\n  content: \"Nuevos destinos\";\n  right: 4px;\n  color: #4e4e4e;\n}\n#menu-wishlist .knobs span {\n  display: inline-block;\n  left: 4px;\n  color: #fff;\n  z-index: 1;\n}\n#menu-wishlist .checkbox:checked + .knobs span {\n  color: #4e4e4e;\n}\n#menu-wishlist .checkbox:checked + .knobs:before {\n  left: 49%;\n  background-color: #a12885;\n}\n#menu-wishlist .checkbox:checked + .knobs:after {\n  color: #fff;\n}\n#menu-wishlist .checkbox:checked ~ .layer {\n  background-color: #fff;\n}\n.check_circle {\n  color: #427f10;\n  font-size: 65px;\n  padding-bottom: 30px;\n  text-align: center;\n  width: 100%;\n}\n.dropdownAeropuerto {\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc !important;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  margin-top: 10px;\n  width: 100%;\n  font: inherit;\n  position: relative;\n}\n.input-group-addon.volaris {\n  color: #fff;\n  background-color: #fafafa;\n  border-color: #d43f3a;\n  position: absolute;\n  right: 16px;\n  width: 8%;\n  height: 33px;\n  top: 12px;\n  border-radius: 5px;\n}\n.arrow-voi {\n  color: #a12885;\n  size: 10px;\n  font-size: 35px;\n  margin-left: -5px;\n}\n.dropdown-list {\n  display: block;\n  z-index: 10;\n  position: absolute;\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  max-height: 200px;\n  overflow-y: overlay;\n  width: 93%;\n  margin-top: -30px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n.dropdown-item {\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n}\n#tab1 {\n  display: block;\n  width: 48vw;\n  padding: 10px 30px;\n  height: 60vh;\n}\n#tab2 {\n  display: block;\n  width: 48vw;\n  padding: 10px 50px;\n  height: 60vh;\n  display: none;\n}\n.compass-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #a12885;\n}\n.close-new-destinations {\n  color: #6b676a;\n  font-size: 20px;\n  cursor: pointer;\n}\n.caja-destinos-nuevos {\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc !important;\n  border-radius: 10px;\n  margin-bottom: 0;\n  margin-top: 10px;\n  width: 108%;\n  font: inherit;\n}\n.caja-destinos-nuevos-title {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 10px !important;\n  max-height: 4.5em;\n}\ndiv.caja-destinos-nuevos-title {\n  display: -webkit-box;\n  max-height: 3em;\n  overflow: hidden;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  line-height: 1.2;\n}\n.truncate-container {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  position: relative;\n  line-height: 1.2;\n  max-height: calc(2 * 1.2em);\n}\n.truncate-text {\n  display: inline;\n  position: relative;\n  z-index: 1;\n}\n.caja-destinos-nuevos-subtitle {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.nuevos-destinos-boxes {\n  margin-top: 32px;\n}\n#newRoutesContent {\n  max-height: 150px;\n  overflow-y: overlay;\n}\n#contenidoWLTabOne {\n  max-height: 58vh;\n  overflow-y: overlay;\n}\n.input-error-nd {\n  border: 2px solid #a12885 !important;\n}\n@media only screen and (max-width: 768px) {\n  #tab2 {\n    width: 100%;\n    padding: 10px 40px;\n  }\n  #tab1 {\n    width: 100%;\n  }\n  #menu-wishlist {\n    width: 90%;\n  }\n}</style>", "dependencies": []}, {"id": "a6424ac38ca7485d8fe05b27c158ce33", "type": "append", "dependencies": [], "selector": "#Logged-In-Member > button.btn.btn-large.marBtm25.mat-flat-button.mat-button-base.mat-primary", "value": "<button id=\"btnMiWishlist\" class=\"btn btn-large marBtm25 mat-flat-button mat-button-base mat-secondary btn-wishlist-logged\" color=\"secondary\" style=\"margin-bottom: 24px;\" mat-flat-button=\"\"><span class=\"mat-button-wrapper\">Mi lista de deseos</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div><div class=\"mat-button-focus-overlay\"></div></button>", "operator": "after"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "f637d0f8a1664f34986fd0eae406fe72", "selector": "#btnMiWishlist"}, {"id": "028b92c0e9b6453ea24728d5de5b3968", "type": "append", "dependencies": [], "selector": "#SignInUp > ul.d-lg-none.sign-sm > li:nth-child(1)", "value": "<li>\n    <a id=\"btn-wishlist-responsive\" href=\"javascript:void(0);\" class=\"ng-star-inserted btn-wishlist-logged\" style=\"margin-top: 8px;\">\n        <span class=\"material-symbols-outlined icon-heart-header\">\n            favorite\n        </span>\n    </a>\n</li>", "operator": "before"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "3398f28cb1984ebbb4a41551e4511df6", "selector": "#btn-wishlist-responsive"}]}, {"viewId": "25176760426", "changes": [{"id": "41518a5e969e442a9fd7900e0133f0eb", "type": "custom_code", "value": function($){function airportNameIng(aeropuerto) {
  switch (aeropuerto) {
    case "ABQ":
      myDestination = "Albuquerque";
      break;
    case "ACA":
      myDestination = "Acapulco";
      break;
    case "AGU":
      myDestination = "Aguascalientes";
      break;
    case "ALB":
      myDestination = "Albany";
      break;
    case "ATL":
      myDestination = "Atlanta";
      break;
    case "AUS":
      myDestination = "Austin";
      break;
    case "BDL":
      myDestination = "Bradley";
      break;
    case "BHM":
      myDestination = "Birmingham";
      break;
    case "BIL":
      myDestination = "Billings";
      break;
    case "BIS":
      myDestination = "Bismarck";
      break;
    case "BJX":
      myDestination = "Leon";
      break;
    case "BKG":
      myDestination = "Branson";
      break;
    case "BLB":
      myDestination = "Balboa Airport";
      break;
    case "BMI":
      myDestination = "Illinois";
      break;
    case "BNA":
      myDestination = "Nashville";
      break;
    case "BOG":
      myDestination = "Bogota";
      break;
    case "BOI":
      myDestination = "Boise";
      break;
    case "BOS":
      myDestination = "Boston";
      break;
    case "BTV":
      myDestination = "Burlington";
      break;
    case "BUF":
      myDestination = "Buffalo";
      break;
    case "BWI":
      myDestination = "Baltimore";
      break;
    case "BZN":
      myDestination = "Bozeman";
      break;
    case "CEN":
      myDestination = "Ciudad Obregon";
      break;
    case "CHS":
      myDestination = "Charleston";
      break;
    case "CID":
      myDestination = "Cedar Rapids";
      break;
    case "CJS":
      myDestination = "Ciudad Juarez";
      break;
    case "CLE":
      myDestination = "Cleveland";
      break;
    case "CLQ":
      myDestination = "Colima";
      break;
    case "CLT":
      myDestination = "Charlotte";
      break;
    case "CME":
      myDestination = "Ciudad Del Carmen ";
      break;
    case "CMH":
      myDestination = "Columbus";
      break;
    case "COS":
      myDestination = "Colorado Springs";
      break;
    case "CPE":
      myDestination = "Campeche";
      break;
    case "CTM":
      myDestination = "Chetumal";
      break;
    case "CUL":
      myDestination = "Culiacan";
      break;
    case "CUN":
      myDestination = "Cancun";
      break;
    case "CUU":
      myDestination = "Chihuahua";
      break;
    case "CVG":
      myDestination = "Cincinnati";
      break;
    case "CZM":
      myDestination = "Cozumel";
      break;
    case "DCA":
      myDestination = "Washington D.C.";
      break;
    case "DEN":
      myDestination = "Denver";
      break;
    case "DFW":
      myDestination = "Dallas - Fort Worth";
      break;
    case "DGO":
      myDestination = "Durango";
      break;
    case "DSM":
      myDestination = "Des Moines";
      break;
    case "DTW":
      myDestination = "Detroit";
      break;
    case "ELP":
      myDestination = "El Paso";
      break;
    case "EWR":
      myDestination = "Newark";
      break;
    case "FAR":
      myDestination = "Fargo";
      break;
    case "FAT":
      myDestination = "Fresno";
      break;
    case "FLL":
      myDestination = "Fort Lauderdale";
      break;
    case "FSD":
      myDestination = "Sioux Falls";
      break;
    case "GDL":
      myDestination = "Guadalajara";
      break;
    case "GEG":
      myDestination = "Spokane";
      break;
    case "GRB":
      myDestination = "Green Bay";
      break;
    case "GRR":
      myDestination = "Grand Rapids";
      break;
    case "GSO":
      myDestination = "Greensboro";
      break;
    case "GSP":
      myDestination = "Greenville";
      break;
    case "GUA":
      myDestination = "Guatemala";
      break;
    case "HMO":
      myDestination = "Hermosillo";
      break;
    case "HRL":
      myDestination = "Valley";
      break;
    case "HSV":
      myDestination = "Huntsville";
      break;
    case "HUX":
      myDestination = "Huatulco";
      break;
    case "IAD":
      myDestination = "Dulles Washington";
      break;
    case "IAH":
      myDestination = "Houston";
      break;
    case "ICT":
      myDestination = "Wichita";
      break;
    case "IND":
      myDestination = "Indianapolis";
      break;
    case "ISP":
      myDestination = "Long Island";
      break;
    case "JAC":
      myDestination = "Jackson Hole";
      break;
    case "JAN":
      myDestination = "Jackson-Evers";
      break;
    case "JAX":
      myDestination = "Jacksonville";
      break;
    case "JFK":
      myDestination = "New York";
      break;
    case "LAP":
      myDestination = "La Paz";
      break;
    case "LAS":
      myDestination = "Las Vegas";
      break;
    case "LAX":
      myDestination = "Los Angeles";
      break;
    case "LFT":
      myDestination = "Lafayette";
      break;
    case "LGA":
      myDestination = "La Guardia";
      break;
    case "LIT":
      myDestination = "Little Rock";
      break;
    case "LMM":
      myDestination = "Los Mochis";
      break;
    case "LTO":
      myDestination = "Loreto";
      break;
    case "MCI":
      myDestination = "Kansas City";
      break;
    case "MCO":
      myDestination = "Orlando";
      break;
    case "MDT":
      myDestination = "Harrisburg";
      break;
    case "MDW":
      myDestination = "Chicago Midway";
      break;
    case "MEM":
      myDestination = "Memphis";
      break;
    case "MEX":
      myDestination = "Mexico City (AICM)";
      break;
    case "MGA":
      myDestination = "Managua";
      break;
    case "MIA":
      myDestination = "Miami";
      break;
    case "MID":
      myDestination = "Merida";
      break;
    case "MKE":
      myDestination = "Milwaukee";
      break;
    case "MLM":
      myDestination = "Morelia";
      break;
    case "MSL":
      myDestination = "Muscle Shoals";
      break;
    case "MSN":
      myDestination = "Madison";
      break;
    case "MSO":
      myDestination = "Missoula";
      break;
    case "MSP":
      myDestination = "Minneapolis";
      break;
    case "MSY":
      myDestination = "New Orleans";
      break;
    case "MTY":
      myDestination = "Monterrey";
      break;
    case "MXL":
      myDestination = "Mexicali";
      break;
    case "MYR":
      myDestination = "Myrtle Beach";
      break;
    case "MZT":
      myDestination = "Mazatlan";
      break;
    case "NLU":
      myDestination = "Mexico City (AIFA)";
      break;
    case "OAK":
      myDestination = "Oakland";
      break;
    case "OAX":
      myDestination = "Oaxaca";
      break;
    case "OKC":
      myDestination = "Oklahoma City";
      break;
    case "OMA":
      myDestination = "Omaha";
      break;
    case "ONT":
      myDestination = "Ontario";
      break;
    case "ORD":
      myDestination = "Chicago (O Hare)";
      break;
    case "ORF":
      myDestination = "Norfolk";
      break;
    case "PBC":
      myDestination = "Puebla";
      break;
    case "PBI":
      myDestination = "Palm Beach";
      break;
    case "PDX":
      myDestination = "Portland";
      break;
    case "PHL":
      myDestination = "Philadelphia";
      break;
    case "PHX":
      myDestination = "Phoenix";
      break;
    case "PIT":
      myDestination = "Pittsburgh";
      break;
    case "PNS":
      myDestination = "Pensacola";
      break;
    case "PPE":
      myDestination = "Puerto Penasco";
      break;
    case "PSM":
      myDestination = "Portsmouth";
      break;
    case "PSP":
      myDestination = "Palm Springs";
      break;
    case "PVD":
      myDestination = "Warwick";
      break;
    case "PVR":
      myDestination = "Puerto Vallarta";
      break;
    case "PWM":
      myDestination = "Portland, ME";
      break;
    case "PXM":
      myDestination = "Puerto Escondido";
      break;
    case "QRO":
      myDestination = "Queretaro";
      break;
    case "RDU":
      myDestination = "Raleigh";
      break;
    case "REX":
      myDestination = "Reynosa";
      break;
    case "RFD":
      myDestination = "Chicago Rockford";
      break;
    case "RNO":
      myDestination = "Reno";
      break;
    case "RSW":
      myDestination = "Fort Myers";
      break;
    case "SAL":
      myDestination = "San Salvador";
      break;
    case "SAN":
      myDestination = "San Diego";
      break;
    case "SAT":
      myDestination = "San Antonio";
      break;
    case "SAV":
      myDestination = "Savannah";
      break;
    case "SBA":
      myDestination = "Santa Barbara";
      break;
    case "SBD":
      myDestination = "San Bernardino";
      break;
    case "SDF":
      myDestination = "Louisville";
      break;
    case "SEA":
      myDestination = "Seattle";
      break;
    case "SFO":
      myDestination = "San Francisco";
      break;
    case "SJC":
      myDestination = "San Jose, California";
      break;
    case "SJD":
      myDestination = "Los Cabos";
      break;
    case "SJO":
      myDestination = "San Jose, Costa Rica";
      break;
    case "SLC":
      myDestination = "Salt Lake City";
      break;
    case "SLP":
      myDestination = "San Luis Potosi";
      break;
    case "SMF":
      myDestination = "Sacramento";
      break;
    case "SNA":
      myDestination = "Santa Ana";
      break;
    case "SRQ":
      myDestination = "Bradenton";
      break;
    case "STL":
      myDestination = "St. Louis";
      break;
    case "SYR":
      myDestination = "Syracuse";
      break;
    case "TAM":
      myDestination = "Tampico";
      break;
    case "TAP":
      myDestination = "Tapachula";
      break;
    case "TGZ":
      myDestination = "Tuxtla Gutierrez";
      break;
    case "TIJ":
      myDestination = "Tijuana";
      break;
    case "TLC":
      myDestination = "Toluca";
      break;
    case "TPA":
      myDestination = "Tampa";
      break;
    case "TPQ":
      myDestination = "Tepic";
      break;
    case "TRC":
      myDestination = "Torreon";
      break;
    case "TTN":
      myDestination = "Trenton";
      break;
    case "TUL":
      myDestination = "Tulsa";
      break;
    case "TUS":
      myDestination = "Tucson";
      break;
    case "TYR":
      myDestination = "Pounds Field";
      break;
    case "TYS":
      myDestination = "Knoxville";
      break;
    case "UPN":
      myDestination = "Uruapan";
      break;
    case "VER":
      myDestination = "Veracruz";
      break;
    case "VSA":
      myDestination = "Villahermosa";
      break;
    case "XNA":
      myDestination = "Fayettville";
      break;
    case "ZCL":
      myDestination = "Zacatecas";
      break;
    case "ZIH":
      myDestination = "Ixtapa / Zihuatanejo";
      break;
    case "LIM":
      myDestination = "Lima";
      break;
    case "QMX":
      myDestination = "Mexico City (All Airports)";
      break;
    case "QLA":
      myDestination = "Los Angeles (All Airports)";
      break;
    default:
      myDestination = "Airport";
      break;
  }
  return myDestination;
}

//Aeropuertos
const optionsJSON = [
  { value: "ATL", text: "Hartsfield–Jackson Atlanta International Airport (ATL), Atlanta, United States" },
  { value: "LAX", text: "Los Angeles International Airport (LAX), Los Angeles, United States" },
  { value: "ORD", text: "O'Hare International Airport (ORD), Chicago, United States" },
  { value: "DFW", text: "Dallas-Fort Worth International Airport (DFW), Dallas, United States" },
  { value: "DEN", text: "Denver International Airport (DEN), Denver, United States" },
  { value: "JFK", text: "John F. Kennedy International Airport (JFK), New York, United States" },
  { value: "SFO", text: "San Francisco International Airport (SFO), San Francisco, United States" },
  { value: "LAS", text: "McCarran International Airport (LAS), Las Vegas, United States" },
  { value: "YYZ", text: "Toronto Pearson International Airport (YYZ), Toronto, Canada" },
  { value: "SEA", text: "Seattle–Tacoma International Airport (SEA), Seattle, United States" },
  { value: "CLT", text: "Charlotte Douglas International Airport (CLT), Charlotte, United States" },
  { value: "MCO", text: "Orlando International Airport (MCO), Orlando, United States" },
  { value: "MIA", text: "Miami International Airport (MIA), Miami, United States" },
  { value: "PHX", text: "Phoenix Sky Harbor International Airport (PHX), Phoenix, United States" },
  { value: "EWR", text: "Newark Liberty International Airport (EWR), Newark, United States" },
  { value: "IAH", text: "George Bush Intercontinental Houston Airport (IAH), Houston, United States" },
  { value: "MSP", text: "St Paul International Airport (MSP), Minneapolis, United States" },
  { value: "BOS", text: "Logan International Airport (BOS), Boston, United States" },
  { value: "DTW", text: "Detroit Metropolitan Wayne County Airport (DTW), Detroit, United States" },
  { value: "FLL", text: "Fort Lauderdale Hollywood International Airport (FLL), Fort Lauderdale, United States" },
  { value: "ORL", text: "Orlando Executive Airport (ORL), Orlando, United States" },
  { value: "LGA", text: "LaGuardia Airport (LGA), New York, United States" },
  { value: "PHL", text: "Philadelphia International Airport (PHL), Philadelphia, United States" },
  { value: "BWI", text: "Washington International Thurgood Marshall Airport (BWI), Baltimore, United States" },
  { value: "SLC", text: "Salt Lake City International Airport (SLC), Salt Lake City, United States" },
  { value: "YVR", text: "Vancouver International Airport (YVR), Vancouver, Canada" },
  { value: "DCA", text: "Ronald Reagan Washington National Airport (DCA), Washington, United States" },
  { value: "IAD", text: "Washington Dulles International Airport (IAD), Washington, United States" },
  { value: "MDW", text: "Midway International Airport (MDW), Chicago, United States" },
  { value: "SAN", text: "San Diego International Airport (SAN), San Diego, United States" },
  { value: "HNL", text: "Daniel K. Inouye International Airport (HNL), Honolulu, United States" },
  { value: "TPA", text: "Tampa International Airport (TPA), Tampa, United States" },
  { value: "PDX", text: "Portland International Airport (PDX), Portland, United States" },
  { value: "YUL", text: "Montréal–Pierre Elliott Trudeau International Airport (YUL), Montreal, Canada" },
  { value: "YYC", text: "Calgary International Airport (YYC), Calgary, Canada" },
  { value: "DAL", text: "Dallas Love Field (DAL), Dallas, United States" },
  { value: "STL", text: "Lambert St Louis International Airport (STL), St. Louis, United States" },
  { value: "BNA", text: "Nashville International Airport (BNA), Nashville, United States" },
  { value: "AUS", text: "Austin Bergstrom International Airport (AUS), Austin, United States" },
  { value: "HOU", text: "William P Hobby Airport (HOU), Houston, United States" },
  { value: "OAK", text: "Metropolitan Oakland International Airport (OAK), Oakland, United States" },
  { value: "SJC", text: "Norman Y. Mineta San Jose International Airport (SJC), San Jose, United States" },
  { value: "MSY", text: "Louis Armstrong New Orleans International Airport (MSY), New Orleans, United States" },
  { value: "RDU", text: "Raleigh–Durham International Airport (RDU), Raleigh, United States" },
  { value: "MCI", text: "Kansas City International Airport (MCI), Kansas City, United States" },
  { value: "SMF", text: "Sacramento International Airport (SMF), Sacramento, United States" },
  { value: "SNA", text: "John Wayne Airport-Orange County Airport (SNA), Santa Ana, United States" },
  { value: "CLE", text: "Cleveland Hopkins International Airport (CLE), Cleveland, United States" },
  { value: "SAT", text: "San Antonio International Airport (SAT), San Antonio, United States" },
  { value: "PIT", text: "Pittsburgh International Airport (PIT), Pittsburgh, United States" },
  { value: "RSW", text: "Southwest Florida International Airport (RSW), Fort Myers, United States" },
  { value: "IND", text: "Indianapolis International Airport (IND), Indianapolis, United States" },
  { value: "CVG", text: "Cincinnati Northern Kentucky International Airport (CVG), Cincinnati, United States" },
  { value: "YEG", text: "Edmonton International Airport (YEG), Edmonton, Canada" },
  { value: "CMH", text: "Port Columbus International Airport (CMH), Columbus, United States" },
  { value: "BDL", text: "Bradley International Airport (BDL), Windsor Locks, United States" },
  { value: "PBI", text: "Palm Beach International Airport (PBI), West Palm Beach, United States" },
  { value: "JAX", text: "Jacksonville International Airport (JAX), Jacksonville, United States" },
  { value: "ANC", text: "Ted Stevens Anchorage International Airport (ANC), Anchorage, United States" },
  { value: "ABQ", text: "Albuquerque International Sunport Airport (ABQ), Albuquerque, United States" },
  { value: "YOW", text: "Ottawa Macdonald–Cartier International Airport (YOW), Ottawa, Canada" },
  { value: "BUF", text: "Buffalo Niagara International Airport (BUF), Buffalo, United States" },
  { value: "OMA", text: "Eppley Airfield (OMA), Omaha, United States" },
  { value: "YWG", text: "Winnipeg James Armstrong Richardson International Airport (YWG), Winnipeg, Canada" },
  { value: "ONT", text: "Ontario International Airport (ONT), Ontario, United States" },
  { value: "YHZ", text: "Halifax Stanfield International Airport (YHZ), Halifax, Canada" },
  { value: "PVD", text: "T. F. Green Airport (PVD), Providence, United States" },
  { value: "MKE", text: "General Mitchell International Airport (MKE), Milwaukee, United States" },
  { value: "KOA", text: "Kona International At Keahole Airport (KOA), Kona, United States" },
  { value: "LGB", text: "Long Beach Airport (LGB), Long Beach, United States" },
  { value: "LIH", text: "Lihue Airport (LIH), Lihue, United States" },
  { value: "ELP", text: "El Paso International Airport (ELP), El Paso, United States" },
  { value: "YTZ", text: "Billy Bishop Toronto City Centre Airport (YTZ), Toronto, Canada" },
  { value: "SFB", text: "Orlando Sanford International Airport (SFB), Sanford, United States" },
  { value: "ALB", text: "Albany International Airport (ALB), Albany, United States" },
  { value: "BUR", text: "Bob Hope Airport (BUR), Burbank, United States" },
  { value: "PSP", text: "Palm Springs International Airport (PSP), Palm Springs, United States" },
  { value: "SYR", text: "Syracuse Hancock International Airport (SYR), Syracuse, United States" },
  { value: "YYJ", text: "Victoria International Airport (YYJ), Victoria, Canada" },
  { value: "YLW", text: "Kelowna International Airport (YLW), Kelowna, Canada" },
  { value: "PWM", text: "Portland International Jetport Airport (PWM), Portland, United States" },
  { value: "YQB", text: "Québec City Jean Lesage International Airport (YQB), Quebec, Canada" },
  { value: "PNS", text: "Pensacola Regional Airport (PNS), Pensacola, United States" },
  { value: "MHT", text: "Manchester Airport (MHT), Manchester NH, United States" },
  { value: "HPN", text: "Westchester County Airport (HPN), White Plains, United States" },
  { value: "YXE", text: "Saskatoon John G. Diefenbaker International Airport (YXE), Saskatoon, Canada" },
  { value: "ITO", text: "Hilo International Airport (ITO), Hilo, United States" },
  { value: "YQR", text: "Regina International Airport (YQR), Regina, Canada" },
  { value: "SRQ", text: "Sarasota Bradenton International Airport (SRQ), Sarasota, United States" },
  { value: "ROC", text: "Greater Rochester International Airport (ROC), Rochester, United States" },
  { value: "BTV", text: "Burlington International Airport (BTV), Burlington, United States" },
  { value: "PIE", text: "St Petersburg Clearwater International Airport (PIE), St. Petersburg, United States" },
  { value: "ECP", text: "Northwest Florida Beaches International Airport (ECP), Panama City, United States" },
  { value: "FAT", text: "Fresno Yosemite International Airport (FAT), Fresno, United States" },
  { value: "MFE", text: "Mc Allen Miller International Airport (MFE), Mcallen, United States" },
  { value: "TLH", text: "Tallahassee Regional Airport (TLH), Tallahassee, United States" },
  { value: "AMA", text: "Rick Husband Amarillo International Airport (AMA), Amarillo, United States" },
  { value: "SBA", text: "Santa Barbara Municipal Airport (SBA), Santa Barbara, United States" },
  { value: "ISP", text: "Long Island Mac Arthur Airport (ISP), Islip, United States" },
  { value: "MEX", text: "Mexico City International Airport (MEX), Ciudad de México, Mexico" },
  { value: "GRU", text: "São Paulo–Guarulhos International Airport (GRU), Sao Paulo, Brazil" },
  { value: "BOG", text: "El Dorado International Airport (BOG), Bogotá, Colombia" },
  { value: "CUN", text: "Cancún International Airport (CUN), Cancún, Mexico" },
  { value: "SCL", text: "Comodoro Arturo Merino Benítez International Airport (SCL), Santiago, Chile" },
  { value: "LIM", text: "Jorge Chávez International Airport (LIM), Lima, Peru" },
  { value: "CGH", text: "São Paulo–Congonhas Airport (CGH), Sao Paulo, Brazil" },
  { value: "BSB", text: "Presidente Juscelino Kubistschek International Airport (BSB), Brasilia, Brazil" },
  { value: "GIG", text: "Rio de Janeiro–Galeão International Airport (GIG), Rio De Janeiro, Brazil" },
  { value: "PTY", text: "Tocumen International Airport (PTY), Panama City, Panama" },
  { value: "AEP", text: "Aeroparque Jorge Newbery (AEP), Buenos Aires, Argentina" },
  { value: "GDL", text: "Guadalajara International Airport (GDL), Guadalajara, Mexico" },
  { value: "EZE", text: "Ministro Pistarini International Airport (EZE), Buenos Aires, Argentina" },
  { value: "CNF", text: "Tancredo Neves International Airport (CNF), Belo Horizonte, Brazil" },
  { value: "MTY", text: "Monterrey International Airport (MTY), Monterrey, Mexico" },
  { value: "VCP", text: "Viracopos International Airport (VCP), Campinas, Brazil" },
  { value: "SDU", text: "Santos Dumont Airport (SDU), Rio De Janeiro, Brazil" },
  { value: "POA", text: "Salgado Filho Airport (POA), Porto Alegre, Brazil" },
  { value: "REC", text: "Guararapes - Gilberto Freyre International Airport (REC), Recife, Brazil" },
  { value: "SSA", text: "Deputado Luís Eduardo Magalhães International Airport (SSA), Salvador, Brazil" },
  { value: "TIJ", text: "General Abelardo L. Rodríguez International Airport (TIJ), Tijuana, Mexico" },
  { value: "CWB", text: "Afonso Pena Airport (CWB), Curitiba, Brazil" },
  { value: "FOR", text: "Pinto Martins International Airport (FOR), Fortaleza, Brazil" },
  { value: "HAV", text: "José Martí International Airport (HAV), Havana, Cuba" },
  { value: "SJO", text: "Juan Santamaria International Airport (SJO), San Jose, Costa Rica" },
  { value: "MUN", text: "Maturín Airport (MUN), Maturin, Venezuela" },
  { value: "FLN", text: "Hercílio Luz International Airport (FLN), Florianopolis, Brazil" },
  { value: "BEL", text: "Val de Cans International Airport (BEL), Belem, Brazil" },
  { value: "CUZ", text: "Alejandro Velasco Astete International Airport (CUZ), Cuzco, Peru" },
  { value: "GYN", text: "Santa Genoveva Airport (GYN), Goiania, Brazil" },
  { value: "VIX", text: "Eurico de Aguiar Salles Airport (VIX), Vitoria, Brazil" },
  { value: "SAL", text: "El Salvador International Airport (SAL), San Salvador, El Salvador" },
  { value: "CGB", text: "Marechal Rondon Airport (CGB), Cuiaba, Brazil" },
  { value: "COR", text: "Ingeniero Ambrosio Taravella Airport (COR), Cordoba, Argentina" },
  { value: "MAO", text: "Eduardo Gomes International Airport (MAO), Manaus, Brazil" },
  { value: "GUA", text: "La Aurora International Airport (GUA), Guatemala City, Guatemala" },
  { value: "NAT", text: "Governador Aluízio Alves International Airport (NAT), Natal, Brazil" },
  { value: "IGU", text: "Foz do Iguaçu International Airport (IGU), Foz Do Iguacu, Brazil" },
  { value: "MCZ", text: "Zumbi dos Palmares Airport (MCZ), Maceio, Brazil" },
  { value: "MDZ", text: "El Plumerillo Airport (MDZ), Mendoza, Argentina" },
  { value: "BPS", text: "Porto Seguro Airport (BPS), Porto Seguro, Brazil" },
  { value: "AQP", text: "Rodríguez Ballón International Airport (AQP), Arequipa, Peru" },
  { value: "SLZ", text: "Marechal Cunha Machado International Airport (SLZ), Sao Luis, Brazil" },
  { value: "NVT", text: "Ministro Victor Konder International Airport (NVT), Navegantes, Brazil" },
  { value: "CGR", text: "Campo Grande Airport (CGR), Campo Grande, Brazil" },
  { value: "MGA", text: "Augusto C. Sandino (Managua) International Airport (MGA), Managua, Nicaragua" },
  { value: "JPA", text: "Presidente Castro Pinto International Airport (JPA), Joao Pessoa, Brazil" },
  { value: "BRC", text: "San Carlos De Bariloche Airport (BRC), San Carlos De Bariloche, Argentina" },
  { value: "AJU", text: "Santa Maria Airport (AJU), Aracaju, Brazil" },
  { value: "LIR", text: "Daniel Oduber Quiros International Airport (LIR), Liberia, Costa Rica" },
  { value: "ASU", text: "Silvio Pettirossi International Airport (ASU), Asuncion, Paraguay" },
  { value: "THE", text: "Senador Petrônio Portela Airport (THE), Teresina, Brazil" },
  { value: "UDI", text: "Ten. Cel. Aviador César Bombonato Airport (UDI), Uberlandia, Brazil" },
  { value: "SLA", text: "Martin Miguel De Guemes International Airport (SLA), Salta, Argentina" },
  { value: "IGR", text: "Cataratas del Iguazú International Airport (IGR), Iguazu Falls, Argentina" },
  { value: "IQT", text: "Coronel FAP Francisco Secada Vignetta International Airport (IQT), Iquitos, Peru" },
  { value: "NQN", text: "Presidente Peron Airport (NQN), Neuquen, Argentina" },
  { value: "LDB", text: "Governador José Richa Airport (LDB), Londrina, Brazil" },
  { value: "BZE", text: "Philip S. W. Goldson International Airport (BZE), Belize City, Belize" },
  { value: "SAP", text: "Ramón Villeda Morales International Airport (SAP), San Pedro Sula, Honduras" },
  { value: "RAO", text: "Leite Lopes Airport (RAO), Ribeirao Preto, Brazil" },
  { value: "PIU", text: "Capitán FAP Guillermo Concha Iberico International Airport (PIU), Piura, Peru" },
  { value: "USH", text: "Malvinas Argentinas Airport (USH), Ushuaia, Argentina" },
  { value: "PVH", text: "Governador Jorge Teixeira de Oliveira Airport (PVH), Porto Velho, Brazil" },
  { value: "ROS", text: "Islas Malvinas Airport (ROS), Rosario, Argentina" },
  { value: "SJP", text: "Prof. Eribelto Manoel Reino State Airport (SJP), Sao Jose Do Rio Preto, Brazil" },
  { value: "TGU", text: "Toncontín International Airport (TGU), Tegucigalpa, Honduras" },
  { value: "ACA", text: "Acapulco International Airport (ACA), Acapulco, Mexico" },
  { value: "TPP", text: "Cadete FAP Guillermo Del Castillo Paredes Airport (TPP), Tarapoto, Peru" },
  { value: "MGF", text: "Regional de Maringá - Sílvio Nane Junior Airport (MGF), Maringa, Brazil" },
  { value: "PMW", text: "Brigadeiro Lysias Rodrigues Airport (PMW), Palmas, Brazil" },
  { value: "FTE", text: "El Calafate Airport (FTE), El Calafate, Argentina" },
  { value: "CRD", text: "General E. Mosconi Airport (CRD), Comodoro Rivadavia, Argentina" },
  { value: "IOS", text: "Bahia - Jorge Amado Airport (IOS), Ilheus, Brazil" },
  { value: "MCP", text: "Alberto Alcolumbre Airport (MCP), Macapa, Brazil" },
  { value: "TRU", text: "Capitan FAP Carlos Martinez De Pinillos International Airport (TRU), Trujillo, Peru" },
  { value: "TUC", text: "Teniente Benjamin Matienzo Airport (TUC), Tucuman, Argentina" },
  { value: "JDO", text: "Orlando Bezerra de Menezes Airport (JDO), Juazeiro Do Norte, Brazil" },
  { value: "CIX", text: "Capitan FAP Jose A Quinones Gonzales International Airport (CIX), Chiclayo, Peru" },
  { value: "JOI", text: "Lauro Carneiro de Loyola Airport (JOI), Joinville, Brazil" },
  { value: "PCL", text: "Cap FAP David Abenzur Rengifo International Airport (PCL), Pucallpa, Peru" },
  { value: "PNZ", text: "Senador Nilo Coelho Airport (PNZ), Petrolina, Brazil" },
  { value: "JUL", text: "Inca Manco Capac International Airport (JUL), Juliaca, Peru" },
  { value: "STM", text: "Maestro Wilson Fonseca Airport (STM), Santarem, Brazil" },
  { value: "BHI", text: "Comandante Espora Airport (BHI), Bahia Blanca, Argentina" },
  { value: "RTB", text: "Juan Manuel Galvez International Airport (RTB), Roatan, Honduras" },
  { value: "RBR", text: "Plácido de Castro Airport (RBR), Rio Branco, Brazil" },
  { value: "DAV", text: "Enrique Malek International Airport (DAV), David, Panama" },
  { value: "RES", text: "Resistencia International Airport (RES), Resistencia, Argentina" },
  { value: "IMP", text: "Prefeito Renato Moreira Airport (IMP), Imperatriz, Brazil" },
  { value: "REL", text: "Almirante Marco Andres Zar Airport (REL), Trelew, Argentina" },
  { value: "RGL", text: "Piloto Civil N. Fernández Airport (RGL), Rio Gallegos, Argentina" },
  { value: "MDQ", text: "Ástor Piazzola International Airport (MDQ), Mar Del Plata, Argentina" },
  { value: "BVB", text: "Atlas Brasil Cantanhede Airport (BVB), Boa Vista, Brazil" },
  { value: "MAB", text: "João Correa da Rocha Airport (MAB), Maraba, Brazil" },
  { value: "MOC", text: "Mário Ribeiro Airport (MOC), Montes Claros, Brazil" },
  { value: "JUJ", text: "Gobernador Horacio Guzman International Airport (JUJ), Jujuy, Argentina" },
  { value: "PPB", text: "Presidente Prudente Airport (PPB), President Prudente, Brazil" },
  { value: "AGU", text: "Lic. Jesús Terán Peredo International Airport (AGU), Aguascalientes, Mexico" },
  { value: "BHM", text: "Birmingham-Shuttlesworth Intl Airport (BHM), Birmingham, United States" },
  { value: "BIL", text: "Billings Logan Intl Airport (BIL), Billings, United States" },
  { value: "BIS", text: "Bismark Municipal Airport (BIS), Bismarck, United States" },
  { value: "BJX", text: "Del Bajío International Airport (BJX), León, Mexico" },
  { value: "BKG", text: "Branson Airport (BKG), Branson, United States" },
  { value: "BLB", text: "Panamá Pacífico International Airport (BLB), Balboa Airport, Panama" },
  { value: "BMI", text: "Central Illinois Regional Airport at Bloomington–Normal (BMI), Illinois, United States" },
  { value: "BOI", text: "Boise Airport (BOI), Boise, United States" },
  { value: "BZN", text: "Bozeman Yellowstone International Airport (BZN), Bozeman, United States" },
  { value: "CEN", text: "Ciudad Obregón International Airport (CEN), Ciudad Obregón, Mexico" },
  { value: "CHS", text: "Charleston Intl Airport (CHS), Charleston, United States" },
  { value: "CID", text: "Eastern Iowa Airport (CID), Cedar Rapids, United States" },
  { value: "CJS", text: "Abraham González International Airport (CJS), Ciudad Juárez, Mexico" },
  { value: "CLQ", text: "Licenciado Miguel de la Madrid Airport (CLQ), Colima, Mexico" },
  { value: "CME", text: "Ciudad del Carmen International Airport (CME), Ciudad Del Carmen , Mexico" },
  { value: "COS", text: "Colorado Springs Airport (COS), Colorado Springs, United States" },
  { value: "CPE", text: "Engineer Alberto Acuña Ongay International Airport (CPE), Campeche, Mexico" },
  { value: "CTM", text: "Chetumal International Airport (CTM), Chetumal, Mexico" },
  { value: "CUL", text: "Federal Airport of Culiacán (CUL), Culiacán, Mexico" },
  { value: "CUU", text: "General Roberto Fierro Villalobos International Airport (CUU), Chihuahua, Mexico" },
  { value: "CZM", text: "Cozumel International Airport (CZM), Cozumel, Mexico" },
  { value: "DGO", text: "Guadalupe Victoria International Airport (DGO), Durango, Mexico" },
  { value: "DSM", text: "Des Moines International Airport (DSM), Des Moines, United States" },
  { value: "FAR", text: "Hector International Airport (FAR), Fargo, United States" },
  { value: "FSD", text: "Sioux Falls Regional Airport (FSD), Sioux Falls, United States" },
  { value: "GEG", text: "Spokane International Airport (GEG), Spokane, United States" },
  { value: "GRB", text: "Green Bay–Austin Straubel International Airport (GRB), Green Bay, United States" },
  { value: "GRR", text: "Gerald R. Ford International Airport (GRR), Grand Rapids, United States" },
  { value: "GSO", text: "Piedmont Triad International Airport (GSO), Greensboro, United States" },
  { value: "GSP", text: "Greenville-Spartanburg International Airport (GSP), Greenville, United States" },
  { value: "HMO", text: "Hermosillo International Airport (HMO), Hermosillo, Mexico" },
  { value: "HRL", text: "Valley International Airport (HRL), Valley, United States" },
  { value: "HSV", text: "Huntsville International Airport (HSV), Huntsville, United States" },
  { value: "HUX", text: "Bahías de Huatulco International Airport (HUX), Huatulco, Mexico" },
  { value: "ICT", text: "Wichita Mid-Continent Airport (ICT), Wichita, United States" },
  { value: "JAC", text: "Jackson Hole Airport (JAC), Jackson Hole, United States" },
  { value: "JAN", text: "Jackson–Medgar Wiley Evers International Airport (JAN), Jackson-Evers, United States" },
  { value: "LAP", text: "Manuel Márquez de León International Airport (LAP), La Paz, Mexico" },
  { value: "LFT", text: "Lafayette Regional Airport (LFT), Lafayette, United States" },
  { value: "LIT", text: "Bill and Hillary Clinton National Airport (LIT), Little Rock, United States" },
  { value: "LMM", text: "Federal Airport of the Valle del Fuerte (LMM), Los Mochis, Mexico" },
  { value: "LTO", text: "Loreto International Airport (LTO), Loreto, Mexico" },
  { value: "MDT", text: "Harrisburg International Airport (MDT), Harrisburg, United States" },
  { value: "MEM", text: "Memphis International Airport (MEM), Memphis, United States" },
  { value: "MID", text: "Manuel Crescencio Rejón International Airport (MID), Mérida, Mexico" },
  { value: "MLM", text: "General Francisco J. Mujica International Airport (MLM), Morelia, Mexico" },
  { value: "MSL", text: "Northwest Alabama Regional Airport (MSL), Muscle Shoals, United States" },
  { value: "MSN", text: "Dane County Regional Airport (MSN), Madison, United States" },
  { value: "MSO", text: "Missoula International Airport (MSO), Missoula, United States" },
  { value: "MXL", text: "General Rodolfo Sánchez Taboada International Airport (MXL), Mexicali, Mexico" },
  { value: "MYR", text: "Myrtle Beach International Airport (MYR), Myrtle Beach, United States" },
  { value: "MZT", text: "General Rafael Buelna International Airport (MZT), Mazatlán, Mexico" },
  { value: "NLU", text: "Felipe Ángeles International Airport (NLU), Ciudad de México (AIFA), Mexico" },
  { value: "OAX", text: "Oaxaca International Airport (OAX), Oaxaca, Mexico" },
  { value: "OKC", text: "Will Rogers World Airport (OKC), Oklahoma City, United States" },
  { value: "ORF", text: "Norfolk International Airport (ORF), Norfolk, United States" },
  { value: "PBC", text: "Puebla International Airport (PBC), Puebla, Mexico" },
  { value: "PPE", text: "Mar de Cortés International Airport (PPE), Puerto Peñasco, Mexico" },
  { value: "PSM", text: "Pease International Airport (PSM), Portsmouth, United States" },
  { value: "PVR", text: "Puerto Vallarta International Airport (PVR), Puerto Vallarta, Mexico" },
  { value: "PXM", text: "Puerto Escondido International Airport (PXM), Puerto Escondido, Mexico" },
  { value: "QRO", text: "Intercontinental Airport of Querétaro (QRO), Querétaro, Mexico" },
  { value: "REX", text: "General Lucio Blanco International Airport (REX), Reynosa, Mexico" },
  { value: "RFD", text: "Chicago Rockford International Airport (RFD), Chicago Rockford, United States" },
  { value: "RNO", text: "Reno-Tahoe International Airport (RNO), Reno, United States" },
  { value: "SAV", text: "Savannah-Hilton Head International Airport (SAV), Savannah, United States" },
  { value: "SBD", text: "San Bernardino International Airport (SBD), San Bernardino, United States" },
  { value: "SDF", text: "Louisville Muhammad Ali International Airport (SDF), Louisville, United States" },
  { value: "SJD", text: "Los Cabos International Airport (SJD), Los Cabos, Mexico" },
  { value: "SLP", text: "Ponciano Arriaga International Airport (SLP), San Luis Potosí, Mexico" },
  { value: "TAM", text: "General Francisco Javier Mina International Airport (TAM), Tampico, Mexico" },
  { value: "TAP", text: "Tapachula International Airport (TAP), Tapachula, Mexico" },
  { value: "TGZ", text: "Ángel Albino Corzo International Airport (TGZ), Tuxtla Gutiérrez, Mexico" },
  { value: "TLC", text: "Toluca International Airport (TLC), Toluca, Mexico" },
  { value: "TPQ", text: "Tepic International Airport (TPQ), Tepic, Mexico" },
  { value: "TRC", text: "Torreón International Airport (TRC), Torreón, Mexico" },
  { value: "TTN", text: "Trenton-Mercer Airport (TTN), Trenton, United States" },
  { value: "TUL", text: "Tulsa International Airport (TUL), Tulsa, United States" },
  { value: "TUS", text: "Tucson International Airport (TUS), Tucson, United States" },
  { value: "TYR", text: "Tyler Pounds Regional Airport (TYR), Pounds Field, United States" },
  { value: "TYS", text: "McGhee Tyson Airport (TYS), Knoxville, United States" },
  { value: "UPN", text: "Licensed and General Ignacio López Rayón International Airport (UPN), Uruapan, Mexico" },
  { value: "VER", text: "Veracruz International Airport (VER), Veracruz, Mexico" },
  { value: "VSA", text: "Carlos Rovirosa Pérez International Airport (VSA), Villahermosa, Mexico" },
  { value: "XNA", text: "Northwest Arkansas Regional Airport (XNA), Fayettville, United States" },
  { value: "ZCL", text: "General Leobardo C. Ruiz International Airport (ZCL), Zacatecas, Mexico" },
  { value: "ZIH", text: "Ixtapa-Zihuatanejo International Airport (ZIH), Ixtapa / Zihuatanejo, Mexico" }
];

//Guardar cookie
function setCookieWishlist(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

//Verificar si hay una cookie existente en el dispositivo
function getCookieWishlist(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Cerrar modal wishlist
$(document.body).on("click", "#btnCerrarModalWishlist", function (e) {
  $("#modal-test-wishlist").remove();
});

//Al darle click al boton de wishlist
$(document.body).on("click", ".btn-wishlist-logged", function (e) {
  //window.$("#LoggedIn > button").click();
  window.$("#MainHeader").click();
  showWishlistModal();
});

//Cambiar el tab
function openTab(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  var tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  document
    .querySelector(`[onclick="openTab('${tabName}')"]`)
  //.classList.add("active");
}

//Función para convertir fechas:
function convertirFechaOrigen(fechaStr) {
  const meses = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const partes = fechaStr.split("/");
  const mesNum = parseInt(partes[0], 10);
  const dia = parseInt(partes[1], 10);
  const año = parseInt(partes[2], 10);

  const mesTexto = meses[mesNum - 1];
  const fechaFormateada = `${mesTexto} ${dia}, ${año}`;

  return fechaFormateada;
}

//Función para convertir un string en arreglo
function arrayToString(array, separator) {
  return array.join(separator);
}

//Función para comparar si ya pasó una fecha:
function fechaYaPaso(fechaStr) {
  const partes = fechaStr.split("/");
  const mes = parseInt(partes[0], 10);
  const dia = parseInt(partes[1], 10);
  const año = parseInt(partes[2], 10);

  const fechaObjetivo = new Date(año, mes - 1, dia); // Meses en JavaScript son 0-indexados
  const fechaActual = new Date();

  return fechaObjetivo < fechaActual;
}

//Función para buscar valores de nuevos aeropuertos 
function newAirportsValues(valueToFind) {
  for (const option of optionsJSON) {
    if (option.value === valueToFind) {
      return option.text;
    }
  }
  return "No se encontró ninguna coincidencia";
}

//Función para cargar el contenido de nuevas rutas 
function newRoutesContent(routes) {
  var contenido = "";
  var valuesCookie = routes.split(",");

  for (var i = 0; i < valuesCookie.length; i++) {
    const foundText = newAirportsValues(valuesCookie[i]);
    infoDestinoSplit = foundText.split(",");
    nombreAeropuerto = infoDestinoSplit[0];
    nombreAeropuerto = nombreAeropuerto.replace("Aeropuerto", "Apto.");
    contenido += '<div class="col-12 col-sm-6"> <div class="row caja-destinos-nuevos"> <div class="col-2 compass-container"><span class="material-symbols-outlined">explore</span></div> <div class="col-8"> <div class="truncate-container"><p class="caja-destinos-nuevos-title"><span class="truncate-text">' + nombreAeropuerto + '</span></p></div> <p class="caja-destinos-nuevos-subtitle">' + infoDestinoSplit[1] + ', ' + infoDestinoSplit[2] + '</p> </div> <div class="col-2"><span class="material-symbols-outlined close-new-destinations" data-destination="' + valuesCookie[i] + '">close</span></div> </div> </div>';
  }
  return contenido;
}

//Fecha de hoy
function getFechaHoy(daysToAdd) {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysToAdd);

  const month = String(futureDate.getMonth() + 1).padStart(2, '0');
  const day = String(futureDate.getDate()).padStart(2, '0');
  const year = futureDate.getFullYear();

  return `${month}/${day}/${year}`;
}

//Función para cargar las cajas de destinos añadidos (primer pestaña)
function loadDestinationsWL(cookieList, cookieListDetailed) {
  var contenido = "";
  var valuesCookie = cookieList.split(",");
  var valuesCookieDetailed = cookieListDetailed.split(",");
  var promoDisponible;
  const missingAirports = ["SNA", "TJX", "VSA", "DTW", "QMX", "QLA"];
  var nombreAeropuerto, imagenAeropuerto, linkDinamico;

  for (var i = 0; i < valuesCookie.length; i++) {
    nombreAeropuerto = airportNameIng(valuesCookie[i]);

    if (missingAirports.includes(valuesCookie[i])) {
      imagenAeropuerto = "https://mapa.volaris.com/images/placeholder.jpg";
    } else {
      imagenAeropuerto =
        "https://d2jxstk8lyvs1f.cloudfront.net/" + valuesCookie[i] + ".jpg";
    }

    if (nombreAeropuerto === "Airport") {
      nombreAeropuerto = nombreAeropuerto + " (" + valuesCookie[i] + ")";
    }

    infoDestino = valuesCookieDetailed[i];
    infoDestinoSplit = infoDestino.split("|");

    pasajeros = parseInt(infoDestinoSplit[0]) + parseInt(infoDestinoSplit[1]) + parseInt(infoDestinoSplit[2]);

    const tipoVuelo = infoDestinoSplit[3];
    if (tipoVuelo == "True") {
      labelTipoVuelo = "Round trip";
    } else {
      labelTipoVuelo = "One way";
    }

    var fechaVuelo = infoDestinoSplit[5];
    var fechaVueloRegreso = infoDestinoSplit[6];

    const haPasado = fechaYaPaso(fechaVuelo);
    var fechaAnadida = "";
    if (haPasado) {
      fechaVuelo = getFechaHoy(0);
      fechaVueloRegreso = getFechaHoy(8);
      //fechaAnadida = "";
    }
    var fechaFormateada = convertirFechaOrigen(fechaVuelo);
    fechaAnadida = "<p>" + fechaFormateada + "</p>";

    if (pasajeros == 1) {
      labelPasajeros = " passenger"
    } else {
      labelPasajeros = " passengers"
    }

    linkDinamico =
      "https://www.volaris.com/flight/select?utm_campaign=wishlist_deeplink&utm_source=Wishlist&utm_medium=Referral&adt=" + infoDestinoSplit[0] + "&chd=" + infoDestinoSplit[1] + "&in1=" + infoDestinoSplit[2] + "&rr=" + infoDestinoSplit[3] + "&cc=" + infoDestinoSplit[4] + "&dd1=" + fechaVuelo + "&dd2=" + fechaVueloRegreso + "&culture=" + infoDestinoSplit[7] + "&o1=" + infoDestinoSplit[8] + "&d1=" + infoDestinoSplit[9] + "&s=True&dni=0&promoCode=";

    contenido +=
      '<div class="col-12 col-sm-6"><button class="caja-destino effect-apollo"> <div class="caja-destino-borde"></div> <div class="caja-destino-contenido"><img src="' +
      imagenAeropuerto +
      '" class="img-destinos"></div> <div class="caja-destino-texto figcaption"><a class="remove-wishlist" data-destination="' +
      valuesCookie[i] +
      '" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel remove-wl-box"></span></a><p class="caja-destino-txt caja-destino-titulo">' +
      nombreAeropuerto +
      '</p><p>' + labelTipoVuelo + '</p>' + fechaAnadida + '<p>' + pasajeros + labelPasajeros + '</p> <p style="text-align:right;color:#a12885;"><a href="javascript:void(0);" class="share-flight-wishlist" data-deeplink="' + linkDinamico + '"><span class="material-symbols-outlined" style="margin-right:10px;">share</span></a><a href="' +
      linkDinamico +
      '"><span class="material-symbols-outlined">arrow_right_alt</span></a></p><!--<p class="caja-destino-txt caja-destino-precio"><span class="caja-destino-txt">promo disponible</span></p> <p class="caja-destino-txt caja-destino-disclaimer">Viaje sencillo | TUA no incluido</p>--> </div> </button></div>';
  }
  return contenido;
}

//Click en botón Wishlist para mostrar modal
function showWishlistModal() {
  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");
  var cookieListNewRoutes = getCookieWishlist("wishlist_array_new_destinations");
  var contenido = "";
  var rutasNuevosDestinos = "";

  //Contenido cajas con los destinos Volaris
  if (cookieList !== undefined && cookieList !== null && cookieList !== '' && cookieList !== 'undefined') {
    contenido = loadDestinationsWL(cookieList, cookieListDetailed);
  } else {
    contenido = '<div class="col-12"><p>Start a flight search to add your favorite destinations to your list.</p></div>'
  }

  //Todas las rutas nuevas
  if (cookieListNewRoutes !== null && cookieListNewRoutes !== undefined && cookieListNewRoutes !== '' && cookieListNewRoutes !== 'undefined') {
    rutasNuevosDestinos = newRoutesContent(cookieListNewRoutes);
  }

  //Sugerir una ruta contenido
  var rutasSugeridas =
    '<div class="col-12"> <form id="form-rutas-nuevas"> <div class="row"> <p>Would you like to explore new routes with Volaris? Let us know your dreamed destinations and receive notifications in case we start a new route. </p> <div class="col-12 col-sm-6"> <div class="input-group dropdown-container"> <input type="text" class="dropdown-input dropdownAeropuerto" name="from-airport-wl-request" id="from-airport-wl-request" placeholder="Origin" autocomplete="off" required> <span class="input-group-addon volaris"><span class="material-symbols-outlined arrow-voi">arrow_drop_down</span></span> <div class="dropdown-list" style="display: none;"></div> </div> </div> <div class="col-12 col-sm-6"> <div class="dropdown-container"> <input type="text" name="to-airport-wl-request" id="to-airport-wl-request" class="dropdown-input dropdownAeropuerto" placeholder="Destination" autocomplete="off" required> <span class="input-group-addon volaris"><span class="material-symbols-outlined arrow-voi">arrow_drop_down</span></span> <div class="dropdown-list" style="display: none;"></div> </div> </div> <div class="col-12 col-sm-6"> <input type="hidden" id="new-destinations-wl-request" name="new-destinations-wl-request" value="' + cookieListNewRoutes + '"> <a id="btnAuxGuardarRuta" class="btn btn-large marBtm25 mat-flat-button mat-button-base mat-primary btnGuardarRuta disabled" color="primary" href="javascript:void(0);">Save route</a> <button type="submit" class="btn btn-large marBtm25 mat-flat-button mat-button-base mat-primary" style="display:none;" id="btnSubmitRuta">Save route</button></div> <div class="col-12 col-sm-6"></div> <div class="col-12 nuevos-destinos-boxes"> <div class="row" id="newRoutesContent">' + rutasNuevosDestinos + "</div></div></div></form></div>";

  //Añade contenido de WL
  var tabulador =
    '<div class="col-12" style="margin-top: 20px;"><div class="button-wl-menu b2" id="menu-wishlist"> <input type="checkbox" class="checkbox menu-wishlist-checkbox" name="menu-wishlist-checkbox" id="menu-wishlist-checkbox" /> <div class="knobs"> <span>My list</span> </div> <div class="layer"></div> </div> </div> <div class="col-12"> <div class="tab-content" id="tab1"> <div class="row" id="contenidoWLTabOne">' +
    contenido +
    ' </div> </div> <div class="tab-content" id="tab2"> <div class="row">' +
    rutasSugeridas +
    "</div> </div> </div>";

  $("body").append(
    '<div class="cdk-overlay-container" id="modal-test-wishlist"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: center; align-items: center;"> <div id="cdk-overlay-0" class="cdk-overlay-pane baggage-modal-panel" style="max-width: 50vw; pointer-events: auto; position: static; max-height: 80vh;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container class="mat-dialog-container ng-tns-c40-8 ng-trigger ng-trigger-dialogContainer ng-star-inserted wishlist-bucket" style="transform: none;"> <div class="baggage-modal-container ng-star-inserted combo-flex-container" style="overflow-x: hidden;"> <mat-dialog-content class="template-content combo-content mat-dialog-contents"> <a class="closeDialog" href="javascript:void(0)" mat-dialog-close="" type="button" id="btnCerrarModalWishlist"> <mat-icon aria-hidden="false" aria-label="Close" class="mat-icon notranslate material-icons mat-icon-no-color" matsuffix="" role="img">close</mat-icon></a><div class="row"><div class="col-12"><h4 style="font-size: 18px;margin-bottom: 10px;">My wishlist</h4></div></div><div class="row" id="contenido-wishlist">' +
    '<div class="row">' +
    tabulador +
    "</div>" +
    ' </div> </mat-dialog-content> </div> </mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>'
  );
}

/****************FUNCIONES PARA EL DROPDOWN ************************** */
$(document.body).on("keyup", ".dropdownAeropuerto", function (e) {
  //const searchQuery = event.target.value.toLowerCase();
  const searchQuery = $(this).val().toLowerCase();
  const container = event.target.closest(".dropdown-container");
  const list = container.querySelector(".dropdown-list");

  const filteredOptions = optionsJSON.filter((option) =>
    option.text.toLowerCase().includes(searchQuery)
  );

  $(this).data('value', '');
  // Limpia la lista
  list.innerHTML = "";

  // Agrega las opciones filtradas a la lista
  filteredOptions.forEach((option) => {
    const listItem = document.createElement("div");
    listItem.className = "dropdown-item";
    listItem.textContent = option.text;
    listItem.addEventListener("click", function () {
      const input = container.querySelector(".dropdown-input");
      input.value = option.text;
      list.style.display = "none";
      input.setAttribute("data-value", option.value);
      validaNuevasRutas(); //Validando rutas
    });
    list.appendChild(listItem);
  });

  list.style.display = "block";
});

/*window.onload = function () {
  
};*/

/*************FUNCIONES PARA TABS EN EL MENÚ***************** */

//Al hacer click en el checkbox del menú
$(document.body).on("click", ".menu-wishlist-checkbox", function (e) {
  //var nombreTab = $(this).data("tab");
  let isChecked = $("#menu-wishlist-checkbox").is(":checked");
  if (isChecked) {
    openTab("tab2");
  } else {
    openTab("tab1");
  }
});

//Al dar click a la tab
$(document.body).on("click", ".tab-button", function (e) {
  var nombreTab = $(this).data("tab");
  openTab(nombreTab);
});

/**************FUNCIONES PARA COMPARTIR UN VUELO DEL WISHLIST**************** */
//Modal para compartir vuelo
function showModalCopied(copyText) {
  var textoTitulo = "Share flight";
  var textoModal = "Share this flight with your friends!";
  var textoBoton = "Copy link";

  var labelLink = '<div _ngcontent-bgm-c25="" class="row ng-star-inserted"><div _ngcontent-bgm-c25="" class="col"><mat-form-field _ngcontent-bgm-c25="" appearance="outline" class="textbox mat-form-field ng-tns-c7-48 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float ng-untouched ng-pristine ng-valid"><div class="mat-form-field-wrapper"><div class="mat-form-field-flex"><!----><!----><div class="mat-form-field-outline ng-tns-c7-48 ng-star-inserted"><div class="mat-form-field-outline-start"></div><div class="mat-form-field-outline-gap"></div><div class="mat-form-field-outline-end"></div></div><div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c7-48 ng-star-inserted"><div class="mat-form-field-outline-start"></div><div class="mat-form-field-outline-gap"></div><div class="mat-form-field-outline-end"></div></div><!----><div class="mat-form-field-infix" style="padding: 5px 24px 1px 0;"><!----><!----><input _ngcontent-bgm-c25="" id="shareLinkFlight" class="mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid ng-star-inserted" matinput="" placeholder="' + copyText + '" value="' + copyText + '" type="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" id="mat-input-3" aria-invalid="false" aria-required="false"><mat-autocomplete _ngcontent-bgm-c25="" class="mat-autocomplete ng-star-inserted" panelwidth="auto"><!----></mat-autocomplete><!----><span class="mat-form-field-label-wrapper"><!----></span></div><!----></div><!----><div class="mat-form-field-subscript-wrapper"><!----><!----><div class="mat-form-field-hint-wrapper ng-tns-c7-48 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style="opacity: 1; transform: translateY(0%);"><!----><div class="mat-form-field-hint-spacer"></div></div></div></div></mat-form-field></div></div>';

  $('body').append('<div class="cdk-overlay-container" id="popupAlertTestContainer"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalFWWishlistClose"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p style="text-align: justify;margin-bottom:30px;">' + textoModal + '</p>' + labelLink + '<a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalFWWishlist" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' + textoBoton + '</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>');
}

//Función para desplegar al copiar el link de un vuelo
function modalConfirmationShow() {
  var textoTitulo = "Link copied";
  var textoBoton = "Accept";
  var textoModal = "All set! The link to this flight has been copied to your clipboard.";

  var mensajeExitoso = '<div class="cdk-overlay-container" id="popupAlertTest"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalAlert"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content=""><span _ngcontent-bgm-c25="" class="material-icons check_circle check-circle"> check_circle </span><p>' + textoModal + '</p><div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $('body').append(mensajeExitoso);
}

$(document.body).on('click', '.cerrarModalAlert', function (e) {
  $("#popupAlertTest").remove();
});

$(document.body).on('click', '.cerrarModalFWWishlist', function (e) {
  var copyText = document.getElementById('shareLinkFlight').value;
  navigator.clipboard.writeText(copyText);
  $("#popupAlertTestContainer").remove();
  modalConfirmationShow();
});

$(document.body).on('click', '.cerrarModalFWWishlistClose', function (e) {
  $("#popupAlertTestContainer").remove();
});

//Compartir vuelo individual wishlist
$(document.body).on("click", ".share-flight-wishlist", function (e) {
  var deeplinkVuelo = $(this).attr("data-deeplink");
  showModalCopied(deeplinkVuelo);
});
/**************FIN FUNCIONES PARA COMPARTIR UN VUELO DEL WISHLIST**************** */

/**************FUNCIONES PARA QUITAR DESTINOS DEL WISHLIST**************** */
function modalRemoveDestination(destination) {
  var textoModal = "Are you sure you want to remove this destination?";
  var textoBoton = "Remove";
  var textoDescarte = "Cancel";

  var wishlistList = [];
  var wishlistDetailed = [];

  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");

  var valuesCookie = cookieList.split(",");
  var valuesCookieDetailed = cookieListDetailed.split(",");
  for (var i = 0; i < valuesCookie.length; i++) {
    if (valuesCookie[i] !== destination) {
      wishlistList.push(valuesCookie[i]);
      wishlistDetailed.push(valuesCookieDetailed[i]);
    }
  }

  var inputsDestinos = '<input type="hidden" id="wishlist-list-remove" name="wishlist-list-remove" value="' + wishlistList + '">' + '<input type="hidden" id="wishlist-list-detailed-remove" name="wishlist-list-detailed-remove" value="' +
    wishlistDetailed +
    '"><input type="hidden" id="destination-removed" name="destination-removed" value="' + destination + '">';

  var mensajeExitoso =
    '<div class="cdk-overlay-container" id="popupRemoverDestinoWL"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout" style="padding: 10px;"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog btnCerrarRemoverWL" id="btnCerrarRemoverWL" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a></div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p>' +
    textoModal +
    '</p><div class="row"><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-secondary btnCerrarRemoverWL" color="secondary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoDescarte +
    '</span></a></div><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-primary btnRemoverDestinoWL" data-wishlist="' + wishlistList + '" data-wishlist-detailed="' + wishlistDetailed + '" id="btnRemoverDestinoWL" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoBoton +
    '</span></a></div></div>' + inputsDestinos + ' <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $("body").append(mensajeExitoso);
}

$(document.body).on("click", ".btnCerrarRemoverWL", function (e) {
  $("#popupRemoverDestinoWL").remove();
});

//Quitar destino de wishlist
$(document.body).on('click', '.remove-wishlist', function (e) {
  var destination = $(this).attr("data-destination");
  modalRemoveDestination(destination);
});

$(document.body).on('click', '.btnRemoverDestinoWL', function (e) {
  var cookieList = $(this).attr("data-wishlist");
  var cookieListDetailed = $(this).attr("data-wishlist-detailed");
  var contenido = "";
  if (cookieList !== null && cookieList !== undefined && cookieList !== '' && cookieList !== 'undefined') {
    contenido = loadDestinationsWL(cookieList, cookieListDetailed);
    setCookieWishlist("wishlist_array", cookieList, 30);
    setCookieWishlist("wishlist_array_detailed", cookieListDetailed, 30);
  } else {
    setCookieWishlist("wishlist_array", "", -1);
    setCookieWishlist("wishlist_array_detailed", "", -1);
    contenido = '<div class="col-12"><p>Start a flight search to add your favorite destinations to your list.</p></div>'
  }
  window.document.getElementById("contenidoWLTabOne").innerHTML = contenido;
  $("#popupRemoverDestinoWL").remove();
});

/**************FIN DE FUNCIONES PARA QUITAR DESTINOS DEL WISHLIST**************** */


/*************FUNCIONES PARA IDENTIFICAR LA API DE TEALIUM ************************/
function checkUserProfile(callback) {
  setCookieWishlist("wishlist_array", utag_data.cookie_wishlist, 30);
  setCookieWishlist("wishlist_array_detailed", utag_data.cookie_wishlist_detailed, 30);
  setCookieWishlist("wishlist_array_new_destinations", utag_data.cookie_wishlist_new_destinations, 30);
  callback(); // Llamar al callback después de obtener la información de Tealium y crear la cookie
}

$(document).ready(function () {
  var cookieValidadora = getCookieWishlist("wishlist_available"); //Para no hacer tantos llamados
  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");

  if (cookieValidadora == null || cookieValidadora == undefined || cookieValidadora == '') {
    if (cookieList == null || cookieList == undefined || cookieList == '') {
      console.log("Getting info");
      checkUserProfile(function () {
        setCookieWishlist("wishlist_available", "Yes", 30);
      });
    }
  }

  //Para los dropdowns cuando hacen click fuera y se cierren
  const dropdowns = document.querySelectorAll(".dropdownAeropuerto");

  // Agregar el evento a cada elemento dropdownAeropuerto
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (event) {
      filterOptions(event);
    });
  });

  // Cierra la lista si se hace clic fuera del dropdown
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown-container")) {
      const lists = document.querySelectorAll(".dropdown-list");
      lists.forEach((list) => {
        list.style.display = "none";
      });
    }
  });


}); //Fin función ready function


/********FUNCIONES PARA VALIDAR RUTAS NUEVAS******* */
//Modal de alerta para vuelo
function showModalAlerta(titulo, mensaje) {
  var textoTitulo = titulo;
  var textoModal = mensaje;

  var mensajeExitoso = '<div class="cdk-overlay-container" id="popupModalAlerta"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalAlerta"  id="cerrarModalAlerta" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content=""><p>' + textoModal + '</p><div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $('body').append(mensajeExitoso);
}

$(document.body).on('click', '.cerrarModalAlerta', function (e) {
  $("#popupModalAlerta").remove();
});

function validaNuevasRutas() {
  var origin = $("#from-airport-wl-request").attr("data-value");
  var destination = $("#to-airport-wl-request").attr("data-value");
  var btnSubmitRuta = document.getElementById("btnSubmitRuta");
  var btnAuxGuardarRuta = document.getElementById("btnAuxGuardarRuta");

  if (origin == null || origin == '' || origin == undefined) {
    $("#from-airport-wl-request").addClass("input-error-nd");
  } else {
    $("#from-airport-wl-request").removeClass("input-error-nd");
  }
  if (destination == null || destination == '' || destination == undefined) {
    $("#to-airport-wl-request").addClass("input-error-nd");
  } else {
    $("#to-airport-wl-request").removeClass("input-error-nd");
  }

  if (origin == null || origin == '' || origin == undefined || destination == null || destination == '' || destination == undefined) { //Si está vacío alguno de los campos
    //showModalAlerta("Tiene que elegir algo");
    btnSubmitRuta.style.display = "none";
    btnAuxGuardarRuta.style.display = "block";
  } else {
    if (origin == destination) {
      btnSubmitRuta.style.display = "none";
      btnAuxGuardarRuta.style.display = "block";
      $('#from-airport-wl-request').removeAttr('data-value');
      $('#to-airport-wl-request').removeAttr('data-value');
      $("#form-rutas-nuevas input[type='text']").val("");
      showModalAlerta("Similar destinations", "The origin and destination must be different.");
      //alert("Elegir destino diferente");
    } else {
      //Para toda la parte del nuevo destino
      var wishlistNew = [];
      //var cookieListNew = getCookieWishlist("wishlist_array_new_destinations");
      cookieListNew = document.getElementById("new-destinations-wl-request").value;
      var valuesCookieNew = cookieListNew.split(",");
      for (var i = 0; i < valuesCookieNew.length; i++) {
        if (valuesCookieNew[i] !== "" && valuesCookieNew[i] !== "undefined") {
          wishlistNew.push(valuesCookieNew[i]);
        }
      }
      //Aqui se añade
      if (wishlistNew.includes(destination)) {
        // No hace nada, ya que el destino ya está en la lista de aeropuertos
        //alert("No se hace nada");
      } else {
        //alert("Se añade el destino" + destination);
        wishlistNew.push(destination);
      }
      $("#new-destinations-wl-request").val(wishlistNew);

      btnSubmitRuta.style.display = "block";
      btnAuxGuardarRuta.style.display = "none";
    }
  }
};

$(document.body).on('submit', '#form-rutas-nuevas', function (event) {
  // Detener el envío del formulario
  event.preventDefault();
  var formData = $(this).serialize();

  // Enviar los datos utilizando AJAX
  $.ajax({
    type: "POST",
    url: $(this).attr("action"),
    data: formData,
    //data: { "from-airport-wl-request": origin, "to-airport-wl-request": destination, "new-destinations-wl-request": newDestinations },
    success: function (response) {
      // Manejar la respuesta
      showModalAlerta("Destination added successfully", "We will notify you in case we start a new route.");
      //$("#form-rutas-nuevas input[type='text']").data('value', '');
      //$("#form-rutas-nuevas input[type='text']").data('value',null);
      $('#from-airport-wl-request').removeAttr('data-value');
      $('#to-airport-wl-request').removeAttr('data-value');
      $("#form-rutas-nuevas input[type='text']").val("");

      var miElemento = document.getElementById("btnSubmitRuta");
      miElemento.style.display = "none";
      var btnAuxGuardarRuta = document.getElementById("btnAuxGuardarRuta");
      btnAuxGuardarRuta.style.display = "block";

      var wishlistNew = document.getElementById("new-destinations-wl-request").value;
      setCookieWishlist("wishlist_array_new_destinations", wishlistNew, 30);
      //var wishlistNewString = arrayToString(wishlistNew, ",");
      var nuevasRutas = newRoutesContent(wishlistNew);
      $("#newRoutesContent").html(nuevasRutas);
    },
    error: function (xhr, status, error) {
      console.log(xhr.responseText);
    }
  });
});

/**************FUNCIONES PARA QUITAR DESTINOS NUEVOS DEL WISHLIST**************** */
function modalRemoveNewDestination(destination) {
  var textoModal = "Are you sure you want to remove this destination?";
  var textoBoton = "Remove";
  var textoDescarte = "Cancel";

  var wishlistList = [];
  //var cookieList = getCookieWishlist("wishlist_array_new_destinations");
  var cookieList = document.getElementById("new-destinations-wl-request").value;

  var valuesCookie = cookieList.split(",");
  for (var i = 0; i < valuesCookie.length; i++) {
    if (valuesCookie[i] !== destination) {
      wishlistList.push(valuesCookie[i]);
    }
  }

  var inputsDestinos = '<input type="hidden" id="wishlist-list-new-remove" name="wishlist-list-new-remove" value="' + wishlistList + '"><input type="hidden" id="new-destination-removed" name="new-destination-removed" value="' + destination + '">';

  var mensajeExitoso =
    '<div class="cdk-overlay-container" id="popupRemoverNewDestinoWL"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout" style="padding: 10px;"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog btnCerrarRemoverNewWL" id="btnCerrarRemoverNewWL" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a></div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p>' +
    textoModal +
    '</p><div class="row"><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-secondary btnCerrarRemoverNewWL" color="secondary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoDescarte +
    '</span></a></div><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-primary btnRemoverNewDestinoWL" data-wishlist="' + wishlistList + '" id="btnRemoverNewDestinoWL" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoBoton +
    '</span></a></div></div>' + inputsDestinos + ' <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';

  $("body").append(mensajeExitoso);
}

$(document.body).on("click", ".btnCerrarRemoverNewWL", function (e) {
  $("#popupRemoverNewDestinoWL").remove();
});

//Quitar destino de wishlist
$(document.body).on('click', '.close-new-destinations', function (e) {
  var destination = $(this).attr("data-destination");
  modalRemoveNewDestination(destination);
});

$(document.body).on('click', '.btnRemoverNewDestinoWL', function (e) {
  var cookieList = $(this).attr("data-wishlist");
  var contenido = "";

  var valorNuevo = document.getElementById("wishlist-list-new-remove").value;
  $("#new-destinations-wl-request").val(valorNuevo);

  if (cookieList !== null && cookieList !== undefined && cookieList !== '' && cookieList !== 'undefined') {
    contenido = newRoutesContent(cookieList);
    setCookieWishlist("wishlist_array_new_destinations", cookieList, 30);
  } else {
    setCookieWishlist("wishlist_array_new_destinations", "", -1);
  }
  window.document.getElementById("newRoutesContent").innerHTML = contenido;
  $("#popupRemoverNewDestinoWL").remove();
});

/**************FIN DE FUNCIONES PARA QUITAR DESTINOS NUEVOS DEL WISHLIST**************** */
}, "dependencies": []}, {"id": "d84df35784254953a01b9e7c16dc5870", "type": "append", "selector": "head", "value": "<style>@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);\n.wl-main-title {\n  font-size: 18px;\n  margin-bottom: 10px;\n  line-height: 22px;\n  color: #080206;\n}\n.remove-wl-box {\n  color: #6b676a;\n}\n.remove-wl-box:before {\n  font-size: 18px;\n}\n.caja-destino {\n  display: flex;\n  background: #fff;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border-width: 1px;\n  border-color: #0000001a;\n  flex: 0 0 310px;\n  width: 100%;\n  text-align: left;\n  height: 140px;\n  position: relative;\n  pointer-events: auto;\n  margin-bottom: 20px;\n}\n.caja-destino-borde {\n  height: 100%;\n  width: 0.5rem;\n  background: #a12885;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.caja-destino-contenido {\n  position: relative;\n  width: 104px;\n  flex: 0 0 90px;\n}\n.caja-destino-contenido::before {\n  height: 0;\n  content: \"\";\n  display: block;\n  padding-bottom: 133.333%;\n}\n.caja-destino-contenido > img,\n.caja-destino-contenido > video {\n  object-fit: cover;\n}\n.caja-destino-contenido > :not(style) {\n  overflow: hidden;\n  position: absolute;\n  inset: 0;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 100%;\n  height: 115%;\n}\n.caja-destino-texto {\n  padding-inline-start: 0.75rem;\n  padding-inline-end: 0.75rem;\n  padding-top: 0;\n  padding-bottom: 0.5rem;\n  color: #080206;\n  flex: 1 1 auto;\n  min-width: 0.25rem;\n}\n.caja-destino-titulo {\n  font-size: 20px;\n  font-weight: 700;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: 10px !important;\n  line-height: 25px;\n}\n.caja-destino-fecha {\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n.caja-destino-precio {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #a12885;\n  margin-top: 1rem;\n}\n.caja-destino-disclaimer {\n  margin-top: 0.25rem;\n  font-size: 10px;\n  color: #00000099;\n}\n.effect-apollo img {\n  opacity: 0.95;\n  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\n  transition: opacity 0.35s, transform 0.35s;\n  -webkit-transform: scale3d(1.05, 1.05, 1);\n  transform: scale3d(1.05, 1.05, 1);\n}\n.effect-apollo:hover img {\n  opacity: 0.6;\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n}\n.figcaption::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.5);\n  content: \"\";\n  -webkit-transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, -100%, 0);\n  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, -100%, 0);\n}\n.figcaption:hover::before {\n  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, 100%, 0);\n  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, 100%, 0);\n}\n.caja-destino-texto p {\n  margin-bottom: 5px;\n}\n.caja-destino-texto p:nth-of-type(2) {\n  color: #00000099;\n  font-size: 14px;\n  line-height: 17px;\n}\n.caja-destino-texto p:nth-of-type(3),\n.caja-destino-texto p:nth-of-type(4) {\n  font-size: 14px;\n  line-height: 17px;\n}\n.wishlist-bucket {\n  scrollbar-width: auto;\n  scrollbar-color: #7a7a7a #f2f2f2;\n}\n.wishlist-bucket::-webkit-scrollbar {\n  width: 16px;\n}\n.wishlist-bucket::-webkit-scrollbar-track {\n  background: #f2f2f2;\n}\n.wishlist-bucket::-webkit-scrollbar-thumb {\n  background-color: #7a7a7a;\n  border-radius: 10px;\n  border: 5px solid #f2f2f2;\n}\n.remove-wishlist {\n  position: absolute;\n  right: 5px;\n  top: 3px !important;\n}\n.tab-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.tab-button {\n  background-color: #f1f1f1;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.tab-button:hover {\n  background-color: #ddd;\n}\n.tab-content {\n  display: none;\n  margin-top: 20px;\n}\n.tab-content.active {\n  display: block;\n}\n.knobs,\n.layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.button-wl-menu {\n  position: relative;\n  top: 50%;\n  width: 100%;\n  height: 36px;\n  margin: -20px auto 0 auto;\n  overflow: hidden;\n}\n.button-wl-menu.r,\n.button-wl-menu.r .layer {\n  border-radius: 100px;\n}\n.button-wl-menu.b2 {\n  border-radius: 2px;\n}\n.checkbox {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n.knobs {\n  z-index: 2;\n}\n.layer {\n  width: 100%;\n  background-color: #fff;\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n#menu-wishlist {\n  border: 1px solid #ccc !important;\n  border-radius: 16px;\n  width: 70%;\n}\n#menu-wishlist .knobs span,\n#menu-wishlist .knobs:after,\n#menu-wishlist .knobs:before {\n  position: absolute;\n  top: 4px;\n  width: 50%;\n  height: 27px;\n  font-weight: 700;\n  text-align: center;\n  line-height: 0.7;\n  padding: 9px 4px;\n  border-radius: 2px;\n  transition: 0.3s ease all;\n  font-size: 13px;\n}\n#menu-wishlist .knobs:before {\n  content: \"\";\n  left: 4px;\n  background-color: #a12885;\n  border-radius: 20px;\n}\n#menu-wishlist .knobs:after {\n  content: \"New destinations\";\n  right: 4px;\n  color: #4e4e4e;\n}\n#menu-wishlist .knobs span {\n  display: inline-block;\n  left: 4px;\n  color: #fff;\n  z-index: 1;\n}\n#menu-wishlist .checkbox:checked + .knobs span {\n  color: #4e4e4e;\n}\n#menu-wishlist .checkbox:checked + .knobs:before {\n  left: 49%;\n  background-color: #a12885;\n}\n#menu-wishlist .checkbox:checked + .knobs:after {\n  color: #fff;\n}\n#menu-wishlist .checkbox:checked ~ .layer {\n  background-color: #fff;\n}\n.check_circle {\n  color: #427f10;\n  font-size: 65px;\n  padding-bottom: 30px;\n  text-align: center;\n  width: 100%;\n}\n.dropdownAeropuerto {\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc !important;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  margin-top: 10px;\n  width: 100%;\n  font: inherit;\n  position: relative;\n}\n.input-group-addon.volaris {\n  color: #fff;\n  background-color: #fafafa;\n  border-color: #d43f3a;\n  position: absolute;\n  right: 16px;\n  width: 8%;\n  height: 33px;\n  top: 12px;\n  border-radius: 5px;\n}\n.arrow-voi {\n  color: #a12885;\n  size: 10px;\n  font-size: 35px;\n  margin-left: -5px;\n}\n.dropdown-list {\n  display: block;\n  z-index: 10;\n  position: absolute;\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  max-height: 200px;\n  overflow-y: overlay;\n  width: 93%;\n  margin-top: -30px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n.dropdown-item {\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n}\n#tab1 {\n  display: block;\n  width: 48vw;\n  padding: 10px 30px;\n  height: 60vh;\n}\n#tab2 {\n  display: block;\n  width: 48vw;\n  padding: 10px 50px;\n  height: 60vh;\n  display: none;\n}\n.compass-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #a12885;\n}\n.close-new-destinations {\n  color: #6b676a;\n  font-size: 20px;\n  cursor: pointer;\n}\n.caja-destinos-nuevos {\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc !important;\n  border-radius: 10px;\n  margin-bottom: 0;\n  margin-top: 10px;\n  width: 108%;\n  font: inherit;\n}\n.caja-destinos-nuevos-title {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 10px !important;\n  max-height: 4.5em;\n}\ndiv.caja-destinos-nuevos-title {\n  display: -webkit-box;\n  max-height: 3em;\n  overflow: hidden;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  line-height: 1.2;\n}\n.truncate-container {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  position: relative;\n  line-height: 1.2;\n  max-height: calc(2 * 1.2em);\n}\n.truncate-text {\n  display: inline;\n  position: relative;\n  z-index: 1;\n}\n.caja-destinos-nuevos-subtitle {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.nuevos-destinos-boxes {\n  margin-top: 32px;\n}\n#newRoutesContent {\n  max-height: 150px;\n  overflow-y: overlay;\n}\n#contenidoWLTabOne {\n  max-height: 58vh;\n  overflow-y: overlay;\n}\n.input-error-nd {\n  border: 2px solid #e80808 !important;\n}\n@media only screen and (max-width: 768px) {\n  #tab2 {\n    width: 100%;\n    padding: 10px 40px;\n  }\n  #tab1 {\n    width: 100%;\n  }\n  #menu-wishlist {\n    width: 90%;\n  }\n}</style>", "dependencies": []}, {"id": "1c4b2c8cd1e045428787a46da0f06746", "type": "append", "dependencies": [], "selector": "#Logged-In-Member > button.btn.btn-large.marBtm25.mat-flat-button.mat-button-base.mat-primary", "value": "<button id=\"btnMiWishlist\" class=\"btn btn-large marBtm25 mat-flat-button mat-button-base mat-secondary btn-wishlist-logged\" color=\"secondary\" style=\"margin-bottom: 24px;\" mat-flat-button=\"\"><span class=\"mat-button-wrapper\">My Wishlist</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div><div class=\"mat-button-focus-overlay\"></div></button>", "operator": "after"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "8791f9c1e78040059709b585691ac712", "selector": "#btnMiWishlist"}, {"id": "52d721ece5114e5087b0ebd7d60add5f", "type": "append", "dependencies": [], "selector": "#SignInUp > ul.d-lg-none.sign-sm > li:nth-child(1)", "value": "<li>\n    <a id=\"btn-wishlist-responsive\" href=\"javascript:void(0);\" class=\"ng-star-inserted btn-wishlist-logged\" style=\"margin-top: 8px;\">\n        <span class=\"material-symbols-outlined icon-heart-header\">\n            favorite\n        </span>\n    </a>\n</li>", "operator": "before"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "887fbdc282ae4a248340adffbe7f592c", "selector": "#btn-wishlist-responsive"}]}, {"viewId": "25122521202", "changes": [{"id": "59e6a5d647354abca68834d3a1970c9c", "type": "custom_code", "value": function($){//Obtener cookie
function getCookieWishlistFlight(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Guardar cookie
function setCookieWishlistFlight(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//Muestra modal de destino añadido
function showModalDestination() {
    var textoTitulo = "Añadido exitosamente a Favoritos";
    var textoBoton = "Cerrar";
    var textoModal = "Entra a tu lista desde el ícono de tu cuenta en la parte superior del sitio.";

    if ($("#mcp > a > span:nth-child(1)").text().includes("Eng")) {
        textoTitulo = "Added successfully to wishlist";
        textoBoton = "Close";
        textoModal = "Access your wishlist from your profile icon at the top of the site.";
    }

    var mensajeExitoso =
        '<div class="cdk-overlay-container" id="popupConfirmedDestination"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalWLSuccess"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' +
        textoTitulo +
        '</h6> </div> <div class="mat-dialog-content" mat-dialog-content="" style="padding: 10px;overflow-x: hidden;"><p>' +
        textoModal +
        '</p><a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalWLSuccess" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
        textoBoton +
        '</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
    $("body").append(mensajeExitoso);
    $("#wishlist-content").addClass("d-none");
}

function modalIniciaSesionWL() {
    var textoBoton = "Iniciar sesión";
    var textoModal = "Inicia sesión o regístrate para agregar vuelos a tu wishlist y no perder de vista tus destinos favoritos.";
    var textoDescarte = "Descartar";

    if ($("#mcp > a > span:nth-child(1)").text().includes("Eng")) {
        textoBoton = "Log in";
        textoModal = "Login or sign up to add flights to your wishlist and keep track of your favorite destinations.";
        textoDescarte = "Discard";
    }

    var mensajeExitoso =
        '<div class="cdk-overlay-container" id="popupLoginWishlist"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout" style="padding: 10px;"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog btnCerrarTacheLoginWL" id="btnCerrarTacheLoginWL" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a></div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p>' +
        textoModal +
        '</p><div class="row"><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-secondary btnCerrarTacheLoginWL" color="secondary" mat-flat-button=""><span class="mat-button-wrapper">' +
        textoDescarte +
        '</span></a></div><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-primary btnLoginWL" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
        textoBoton +
        '</span></a></div></div> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
    $("body").append(mensajeExitoso);
}

//Abrir módulo de iniciar sesión en wishlist
$(document.body).on("click", ".login-wishlist", function (e) {
    modalIniciaSesionWL();
});

//Al cerrar modal de destino añadido
$(document.body).on("click", ".cerrarModalWLSuccess", function (e) {
    $("#popupConfirmedDestination").remove();
    $("#wishlist-content").addClass("d-none");
});

$(document.body).on("click", ".btnCerrarTacheLoginWL", function (e) {
    $("#popupLoginWishlist").remove();
});

$(document.body).on("click", ".btnLoginWL", function (e) {
    window.$("#Login > button").click();
    $("#popupLoginWishlist").remove();
});

$(document.body).on("click", ".btnFullList", function (e) {
    var textoTitulo = "Parece que tu lista está llena";
    var textoBoton = "Entendido";
    var textoModal = "Para agregar un nuevo destino, borra uno de los guardados en Favoritos, ingresando al lado del ícono de tu cuenta en la parte superior del sitio.";

    if ($("#mcp > a > span:nth-child(1)").text().includes("Eng")) {
        textoTitulo = "Looks like your wishlist is full";
        textoBoton = "Understood";
        textoModal = "To add a new destination, delete a saved one from your list by clicking next to your account icon at the top of the site.";
    }

    var mensajeExitoso =
        '<div class="cdk-overlay-container" id="popupConfirmedDestination"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalWLSuccess"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' +
        textoTitulo +
        '</h6> </div> <div class="mat-dialog-content" mat-dialog-content="" style="padding: 10px;overflow-x: hidden;"><p>' +
        textoModal +
        '</p><a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalWLSuccess" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
        textoBoton +
        '</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
    $("body").append(mensajeExitoso);
    $("#wishlist-content").addClass("d-none");
});

//Guardar nuevo destino en cookie, wishlist
$(document.body).on("click", ".wishlist-action", function (e) {
    var wishlistList = document.getElementById("wishlist-list").value;
    setCookieWishlistFlight("wishlist_array", wishlistList, 30);
    var wishlistDetailed = document.getElementById("wishlist-list-detailed").value;
    setCookieWishlistFlight("wishlist_array_detailed", wishlistDetailed, 30);
    //Guardar información referente al vuelo
    showModalDestination();
});

//Get info vuelo
function getInfoVuelo() {
    var adt = utag_data.num_Pax_Adults;
    var chd = utag_data.num_Pax_Children;
    var in1 = 0; /*número de infantes */
    var rr = "False";
    if (utag_data.flight_type == "Round Trip") {
        rr = "True";
    }
    var cc = utag_data.currency;

    var fechaOrigen = utag_data.origin_date;
    const [yearO, monthO, dayO] = fechaOrigen.split("-");
    var dd1 = monthO + "/" + dayO + "/" + yearO; // formato 09/30/2022 '2022-09-29'

    var fechaRetorno = utag_data.return_date;
    const [yearR, monthR, dayR] = fechaRetorno.split("-");
    var dd2 = monthR + "/" + dayR + "/" + yearR; // formato 09/30/2022 '2022-09-29'

    var culture = utag_data.language_code;
    var o1 = utag_data.from_airport;
    var d1 = utag_data.to_airport;
    var dni = 0;

    var cookieArray =
        adt +
        "|" +
        chd +
        "|" +
        String(in1) +
        "|" +
        String(rr) +
        "|" +
        cc +
        "|" +
        String(dd1) +
        "|" +
        String(dd2) +
        "|" +
        culture +
        "|" +
        o1 +
        "|" +
        d1 +
        "|" +
        String(dni);

    return cookieArray;
}

//Añade banner de wishlist
$(document).ready(function () {
    var elementWishlistContent = $("#wishlist-content");
    if (elementWishlistContent.length <= 0) {
        $("#Routeinformation").after("<div id='wishlist-content'></div>");
    }

    var labelAddFavorite = "Añadir a mis favoritos";
    var labelFullText = "Ahora puedes guardar tus destinos de ensueño, comienza con este vuelo.";
    if ($("#mcp > a > span:nth-child(1)").text().includes("Eng")) {
        labelAddFavorite = "Add to wishlist";
        labelFullText = "Now you can save your dream destinations, start now with this flight.";
    }
    //Identificar si está en sesión
    //if ($("#Login > button").text().includes("Iniciar") || $("#Login > button").text().includes("Login")) {
    if (utag_data.customer_email == '' || utag_data.customer_email == 'WebAnonymous' || utag_data.customer_email == undefined || utag_data.customer_email == 'undefined') {
        var elementoBannerLogin = $("#wishlist-message-login");
        if (elementoBannerLogin.length <= 0) {
            $("#wishlist-content").html(
                '<div id="wishlist-message-login" class="ng-star-inserted"><div class="card shadow-default radius-12 booking-details wishlist-details"><p class="labelBannerText">' + labelFullText + ' <a class="login-wishlist">' + labelAddFavorite + '<span class="material-symbols-outlined icon-corazon">favorite</span> </a></p></div></div>'
            );
        }
    } else {
        var wishlistList = [];
        var wishlistDetailed = [];
        var contadorDestinos = 0;
        var fullWishlist = false;

        var cookieList = getCookieWishlistFlight("wishlist_array");
        var cookieListDetailed = getCookieWishlistFlight("wishlist_array_detailed");

        var valuesCookie = cookieList.split(",");
        for (var i = 0; i < valuesCookie.length; i++) {
            if (valuesCookie[i] !== "" && valuesCookie[i] !== 'undefined') {
                wishlistList.push(valuesCookie[i]);
                contadorDestinos = contadorDestinos + 1;
            }
        }

        var valuesCookieDetailed = cookieListDetailed.split(",");
        for (var i = 0; i < valuesCookieDetailed.length; i++) {
            if (valuesCookieDetailed[i] !== "" && valuesCookie[i] !== 'undefined') {
                wishlistDetailed.push(valuesCookieDetailed[i]);
            }
        }

        var infoVuelo = getInfoVuelo();

        var showBanner = true;
        if (wishlistList.includes(utag_data.to_airport)) {
            // Hacer algo si el valor está en la lista de deseos
            showBanner = false;
        } else {
            wishlistList.push(utag_data.to_airport);
            wishlistDetailed.push(infoVuelo);
        }

        if (contadorDestinos >= 8) {
            showBanner = false;
            fullWishlist = true;
        }

        if (showBanner) {
            var elementoBanner = $("#wishlist-message");
            // Verifica si el elemento fue encontrado
            if (elementoBanner.length <= 0) {
                $("#wishlist-content").html(
                    '<div id="wishlist-message" class="ng-star-inserted"><div class="card shadow-default radius-12 booking-details wishlist-details"><p class="labelBannerText">' + labelFullText + ' <a class="wishlist-btn wishlist-action">' + labelAddFavorite + ' <span class="material-symbols-outlined icon-corazon">favorite</span> </a></p><input type="hidden" name="toAirport" id="toAirport" value="' +
                    utag_data.to_airport +
                    '"><input type="hidden" id="wishlist-list" name="wishlist-list" value="' +
                    wishlistList +
                    '"><input type="hidden" id="fromAirport" name="fromAirport" value="' +
                    utag_data.from_airport +
                    '"><input type="hidden" id="wishlist-list-detailed" name="wishlist-list-detailed" value="' +
                    wishlistDetailed +
                    '"></div></div>'
                );
            }
        }

        if (fullWishlist) {
            var elementoBannerFull = $("#wishlist-message-full");
            if (elementoBannerFull.length <= 0) {
                $("#wishlist-content").html(
                    '<div id="wishlist-message-full" class="ng-star-inserted"> <div class="card shadow-default radius-12 booking-details wishlist-details"><p class="labelBannerText">' + labelFullText + ' <a class="wishlist-btn btnFullList">' + labelAddFavorite + ' <span class="material-symbols-outlined icon-corazon">favorite</span> </a></p> </div> </div>'
                );
            }
        }

    }
});
}, "dependencies": []}, {"id": "d8037edabe5f45c79192b2feabe1d2eb", "type": "append", "selector": "head", "value": "<style>@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);\n.check_circle {\n  color: #427f10;\n  font-size: 65px;\n  padding-bottom: 30px;\n  text-align: center;\n  width: 100%;\n}\n.wishlist-details {\n  background: #fff;\n  margin-top: 15px;\n}\n.wishlist-details p {\n  margin-bottom: 0;\n}\n#wishlist-button {\n  width: 38px;\n  height: 38px;\n  background: #a12885;\n  min-width: 10px !important;\n  padding: 3px 7px;\n}\n.wishlist-icon {\n  width: 36px;\n  height: 36px;\n  color: #fff;\n}\n.login-wishlist,\n.wishlist-btn {\n  color: #a12885 !important;\n  font-size: 14px;\n  float: right;\n  margin-top: -3px;\n  cursor: pointer;\n}\n.login-wishlist,\n.login-wishlist span {\n  font-size: 16px;\n  cursor: pointer;\n}\n.material-symbols-outlined:hover {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n.login-wishlist:hover > .material-symbols-outlined,\n.wishlist-action:hover > .material-symbols-outlined {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n.icon-corazon {\n  font-size: 14px !important;\n}\n@media only screen and (max-width: 768px) {\n  .labelBannerText {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\t}\n  \n  .labelBannerText a {\n    margin-top: 10px;\n    text-align: center;\n    }\n  \n  \n  .wishlist-details {\n    padding: 10px 20px\n  }\n  /*.labelBannerText {\n        align-items: center;\n    }\n    \n    .login-wishlist {\n        text-align: center;\n    }*/\n}\n\n.wishlist-btn {\nbackground: none;\n    border: none;\n    font-family: Lato,sans-serif;\n}</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "7e99096832994f5582ce0d75704c5a7a", "selector": "#wishlist-message > div > p > a"}]}, {"viewId": "25155420995", "changes": []}]}, {"id": "25260460651", "name": "Wishlist (minimalist)", "actions": [{"viewId": "24631980032", "changes": [{"id": "2229e5e9397d4f4c8d8708c2f325aaa5", "type": "custom_code", "value": function($){function airportNameEsp(aeropuerto) {
  switch (aeropuerto) {
    case "ABQ":
      myDestination = "Albuquerque";
      break;
    case "ACA":
      myDestination = "Acapulco";
      break;
    case "AGU":
      myDestination = "Aguascalientes";
      break;
    case "ALB":
      myDestination = "Albany";
      break;
    case "ATL":
      myDestination = "Atlanta";
      break;
    case "AUS":
      myDestination = "Austin";
      break;
    case "BDL":
      myDestination = "Bradley";
      break;
    case "BHM":
      myDestination = "Birmingham";
      break;
    case "BIL":
      myDestination = "Billings";
      break;
    case "BIS":
      myDestination = "Bismarck";
      break;
    case "BJX":
      myDestination = "León";
      break;
    case "BKG":
      myDestination = "Branson";
      break;
    case "BLB":
      myDestination = "Balboa Airport";
      break;
    case "BMI":
      myDestination = "Illinois";
      break;
    case "BNA":
      myDestination = "Nashville";
      break;
    case "BOG":
      myDestination = "Bogotá";
      break;
    case "BOI":
      myDestination = "Boise";
      break;
    case "BOS":
      myDestination = "Boston";
      break;
    case "BTV":
      myDestination = "Burlington";
      break;
    case "BUF":
      myDestination = "Buffalo";
      break;
    case "BWI":
      myDestination = "Baltimore";
      break;
    case "BZN":
      myDestination = "Bozeman";
      break;
    case "CEN":
      myDestination = "Ciudad Obregón";
      break;
    case "CHS":
      myDestination = "Charleston";
      break;
    case "CID":
      myDestination = "Cedar Rapids";
      break;
    case "CJS":
      myDestination = "Ciudad Juárez";
      break;
    case "CLE":
      myDestination = "Cleveland";
      break;
    case "CLQ":
      myDestination = "Colima";
      break;
    case "CLT":
      myDestination = "Charlotte";
      break;
    case "CME":
      myDestination = "Ciudad Del Carmen ";
      break;
    case "CMH":
      myDestination = "Columbus";
      break;
    case "COS":
      myDestination = "Colorado Springs";
      break;
    case "CPE":
      myDestination = "Campeche";
      break;
    case "CTM":
      myDestination = "Chetumal";
      break;
    case "CUL":
      myDestination = "Culiacán";
      break;
    case "CUN":
      myDestination = "Cancún";
      break;
    case "CUU":
      myDestination = "Chihuahua";
      break;
    case "CVG":
      myDestination = "Cincinnati";
      break;
    case "CZM":
      myDestination = "Cozumel";
      break;
    case "DCA":
      myDestination = "Washington D.C.";
      break;
    case "DEN":
      myDestination = "Denver";
      break;
    case "DFW":
      myDestination = "Dallas - Fort Worth";
      break;
    case "DGO":
      myDestination = "Durango";
      break;
    case "DSM":
      myDestination = "Des Moines";
      break;
    case "DTW":
      myDestination = "Detroit";
      break;
    case "ELP":
      myDestination = "El Paso";
      break;
    case "EWR":
      myDestination = "Newark";
      break;
    case "FAR":
      myDestination = "Fargo";
      break;
    case "FAT":
      myDestination = "Fresno";
      break;
    case "FLL":
      myDestination = "Fort Lauderdale";
      break;
    case "FSD":
      myDestination = "Sioux Falls";
      break;
    case "GDL":
      myDestination = "Guadalajara";
      break;
    case "GEG":
      myDestination = "Spokane";
      break;
    case "GRB":
      myDestination = "Green Bay";
      break;
    case "GRR":
      myDestination = "Grand Rapids";
      break;
    case "GSO":
      myDestination = "Greensboro";
      break;
    case "GSP":
      myDestination = "Greenville";
      break;
    case "GUA":
      myDestination = "Guatemala";
      break;
    case "HMO":
      myDestination = "Hermosillo";
      break;
    case "HRL":
      myDestination = "Valley";
      break;
    case "HSV":
      myDestination = "Huntsville";
      break;
    case "HUX":
      myDestination = "Huatulco";
      break;
    case "IAD":
      myDestination = "Dulles Washington";
      break;
    case "IAH":
      myDestination = "Houston";
      break;
    case "ICT":
      myDestination = "Wichita";
      break;
    case "IND":
      myDestination = "Indianapolis";
      break;
    case "ISP":
      myDestination = "Long Island";
      break;
    case "JAC":
      myDestination = "Jackson Hole";
      break;
    case "JAN":
      myDestination = "Jackson-Evers";
      break;
    case "JAX":
      myDestination = "Jacksonville";
      break;
    case "JFK":
      myDestination = "Nueva York";
      break;
    case "LAP":
      myDestination = "La Paz";
      break;
    case "LAS":
      myDestination = "Las Vegas";
      break;
    case "LAX":
      myDestination = "Los Ángeles";
      break;
    case "LFT":
      myDestination = "Lafayette";
      break;
    case "LGA":
      myDestination = "La Guardia";
      break;
    case "LIT":
      myDestination = "Little Rock";
      break;
    case "LMM":
      myDestination = "Los Mochis";
      break;
    case "LTO":
      myDestination = "Loreto";
      break;
    case "MCI":
      myDestination = "Kansas City";
      break;
    case "MCO":
      myDestination = "Orlando";
      break;
    case "MDT":
      myDestination = "Harrisburg";
      break;
    case "MDW":
      myDestination = "Chicago Midway";
      break;
    case "MEM":
      myDestination = "Memphis";
      break;
    case "MEX":
      myDestination = "Cd. de México (AICM)";
      break;
    case "MGA":
      myDestination = "Managua";
      break;
    case "MIA":
      myDestination = "Miami";
      break;
    case "MID":
      myDestination = "Mérida";
      break;
    case "MKE":
      myDestination = "Milwaukee";
      break;
    case "MLM":
      myDestination = "Morelia";
      break;
    case "MSL":
      myDestination = "Muscle Shoals";
      break;
    case "MSN":
      myDestination = "Madison";
      break;
    case "MSO":
      myDestination = "Missoula";
      break;
    case "MSP":
      myDestination = "Mineápolis";
      break;
    case "MSY":
      myDestination = "Nueva Orleans";
      break;
    case "MTY":
      myDestination = "Monterrey";
      break;
    case "MXL":
      myDestination = "Mexicali";
      break;
    case "MYR":
      myDestination = "Myrtle Beach";
      break;
    case "MZT":
      myDestination = "Mazatlán";
      break;
    case "NLU":
      myDestination = "Ciudad de México (AIFA)";
      break;
    case "OAK":
      myDestination = "Oakland";
      break;
    case "OAX":
      myDestination = "Oaxaca";
      break;
    case "OKC":
      myDestination = "Oklahoma City";
      break;
    case "OMA":
      myDestination = "Omaha";
      break;
    case "ONT":
      myDestination = "Ontario";
      break;
    case "ORD":
      myDestination = "Chicago (O Hare)";
      break;
    case "ORF":
      myDestination = "Norfolk";
      break;
    case "PBC":
      myDestination = "Puebla";
      break;
    case "PBI":
      myDestination = "Palm Beach";
      break;
    case "PDX":
      myDestination = "Portland";
      break;
    case "PHL":
      myDestination = "Philadelphia";
      break;
    case "PHX":
      myDestination = "Phoenix";
      break;
    case "PIT":
      myDestination = "Pittsburgh";
      break;
    case "PNS":
      myDestination = "Pensacola";
      break;
    case "PPE":
      myDestination = "Puerto Peñasco";
      break;
    case "PSM":
      myDestination = "Portsmouth";
      break;
    case "PSP":
      myDestination = "Palm Springs";
      break;
    case "PVD":
      myDestination = "Warwick";
      break;
    case "PVR":
      myDestination = "Puerto Vallarta";
      break;
    case "PWM":
      myDestination = "Portland, ME";
      break;
    case "PXM":
      myDestination = "Puerto Escondido";
      break;
    case "QRO":
      myDestination = "Querétaro";
      break;
    case "RDU":
      myDestination = "Raleigh";
      break;
    case "REX":
      myDestination = "Reynosa";
      break;
    case "RFD":
      myDestination = "Chicago Rockford";
      break;
    case "RNO":
      myDestination = "Reno";
      break;
    case "RSW":
      myDestination = "Fort Myers";
      break;
    case "SAL":
      myDestination = "San Salvador";
      break;
    case "SAN":
      myDestination = "San Diego";
      break;
    case "SAT":
      myDestination = "San Antonio";
      break;
    case "SAV":
      myDestination = "Savannah";
      break;
    case "SBA":
      myDestination = "Santa Bárbara";
      break;
    case "SBD":
      myDestination = "San Bernardino";
      break;
    case "SDF":
      myDestination = "Louisville";
      break;
    case "SEA":
      myDestination = "Seattle";
      break;
    case "SFO":
      myDestination = "San Francisco";
      break;
    case "SJC":
      myDestination = "San José, California";
      break;
    case "SJD":
      myDestination = "Los Cabos";
      break;
    case "SJO":
      myDestination = "San José, Costa Rica";
      break;
    case "SLC":
      myDestination = "Salt Lake City";
      break;
    case "SLP":
      myDestination = "San Luis Potosí";
      break;
    case "SMF":
      myDestination = "Sacramento";
      break;
    case "SNA":
      myDestination = "Santa Ana";
      break;
    case "SRQ":
      myDestination = "Bradenton";
      break;
    case "STL":
      myDestination = "St. Louis";
      break;
    case "SYR":
      myDestination = "Syracuse";
      break;
    case "TAM":
      myDestination = "Tampico";
      break;
    case "TAP":
      myDestination = "Tapachula";
      break;
    case "TGZ":
      myDestination = "Tuxtla Gutiérrez";
      break;
    case "TIJ":
      myDestination = "Tijuana";
      break;
    case "TLC":
      myDestination = "Toluca";
      break;
    case "TPA":
      myDestination = "Tampa";
      break;
    case "TPQ":
      myDestination = "Tepic";
      break;
    case "TRC":
      myDestination = "Torreón";
      break;
    case "TTN":
      myDestination = "Trenton";
      break;
    case "TUL":
      myDestination = "Tulsa";
      break;
    case "TUS":
      myDestination = "Tucson";
      break;
    case "TYR":
      myDestination = "Pounds Field";
      break;
    case "TYS":
      myDestination = "Knoxville";
      break;
    case "UPN":
      myDestination = "Uruapan";
      break;
    case "VER":
      myDestination = "Veracruz";
      break;
    case "VSA":
      myDestination = "Villahermosa";
      break;
    case "XNA":
      myDestination = "Fayettville";
      break;
    case "ZCL":
      myDestination = "Zacatecas";
      break;
    case "ZIH":
      myDestination = "Ixtapa / Zihuatanejo";
      break;
    case "LIM":
      myDestination = "Lima";
      break;
    case "QMX":
      myDestination = "Ciudad de México (todos los aeropuertos)";
      break;
    case "QLA":
      myDestination = "Los Ángeles (todos los aeropuertos)";
      break;
    default:
      myDestination = "Aeropuerto";
      break;
  }
  return myDestination;
}

//Aeropuertos
const optionsJSON = [
  {
    value: "ATL",
    text: "Aeropuerto Internacional Hartsfield–Jackson Atlanta (ATL), Atlanta, Estados Unidos",
  },
  {
    value: "LAX",
    text: "Aeropuerto Internacional Los Ángeles (LAX), Los Angeles, Estados Unidos",
  },
  {
    value: "ORD",
    text: "Aeropuerto Internacional O'Hare (ORD), Chicago, Estados Unidos",
  },
  {
    value: "DFW",
    text: "Aeropuerto Internacional Dallas-Fort Worth (DFW), Dallas, Estados Unidos",
  },
  {
    value: "DEN",
    text: "Aeropuerto Internacional Denver (DEN), Denver, Estados Unidos",
  },
  {
    value: "JFK",
    text: "Aeropuerto Internacional John F. Kennedy (JFK), New York, Estados Unidos",
  },
  {
    value: "SFO",
    text: "Aeropuerto Internacional de San Francisco (SFO), San Francisco, Estados Unidos",
  },
  {
    value: "LAS",
    text: "Aeropuerto Internacional McCarran (LAS), Las Vegas, Estados Unidos",
  },
  {
    value: "YYZ",
    text: "Aeropuerto Internacional Pearson de Toronto (YYZ), Toronto, Canadá",
  },
  {
    value: "SEA",
    text: "Aeropuerto Internacional de Seattle-Tacoma (SEA), Seattle, Estados Unidos",
  },
  {
    value: "CLT",
    text: "Aeropuerto Internacional Douglas de Charlotte (CLT), Charlotte, Estados Unidos",
  },
  {
    value: "MCO",
    text: "Aeropuerto Internacional de Orlando (MCO), Orlando, Estados Unidos",
  },
  {
    value: "MIA",
    text: "Aeropuerto Internacional de Miami (MIA), Miami, Estados Unidos",
  },
  {
    value: "PHX",
    text: "Aeropuerto Internacional de Phoenix Sky Harbor (PHX), Phoenix, Estados Unidos",
  },
  {
    value: "EWR",
    text: "Aeropuerto Internacional de Newark Liberty (EWR), Newark, Estados Unidos",
  },
  {
    value: "IAH",
    text: "Aeropuerto Intercontinental George Bush de Houston (IAH), Houston, Estados Unidos",
  },
  {
    value: "MSP",
    text: "Aeropuerto Internacional de St. Paul (MSP), Minneapolis, Estados Unidos",
  },
  {
    value: "BOS",
    text: "Aeropuerto Internacional Logan (BOS), Boston, Estados Unidos",
  },
  {
    value: "DTW",
    text: "Aeropuerto Metropolitano del Condado de Wayne de Detroit (DTW), Detroit, Estados Unidos",
  },
  {
    value: "FLL",
    text: "Aeropuerto Internacional de Fort Lauderdale-Hollywood (FLL), Fort Lauderdale, Estados Unidos",
  },
  {
    value: "ORL",
    text: "Aeropuerto Ejecutivo de Orlando (ORL), Orlando, Estados Unidos",
  },
  {
    value: "LGA",
    text: "Aeropuerto LaGuardia (LGA), New York, Estados Unidos",
  },
  {
    value: "PHL",
    text: "Aeropuerto Internacional de Filadelfia (PHL), Philadelphia, Estados Unidos",
  },
  {
    value: "BWI",
    text: "Aeropuerto Internacional Thurgood Marshall de Washington (BWI), Baltimore, Estados Unidos",
  },
  {
    value: "SLC",
    text: "Aeropuerto Internacional de Salt Lake City (SLC), Salt Lake City, Estados Unidos",
  },
  {
    value: "YVR",
    text: "Aeropuerto Internacional de Vancouver (YVR), Vancouver, Canadá",
  },
  {
    value: "DCA",
    text: "Aeropuerto Nacional Ronald Reagan de Washington (DCA), Washington, Estados Unidos",
  },
  {
    value: "IAD",
    text: "Aeropuerto Internacional de Washington Dulles (IAD), Washington, Estados Unidos",
  },
  {
    value: "MDW",
    text: "Aeropuerto Internacional Midway (MDW), Chicago, Estados Unidos",
  },
  {
    value: "SAN",
    text: "Aeropuerto Internacional de San Diego (SAN), San Diego, Estados Unidos",
  },
  {
    value: "HNL",
    text: "Aeropuerto Internacional Daniel K. Inouye (HNL), Honolulu, Estados Unidos",
  },
  {
    value: "TPA",
    text: "Aeropuerto Internacional de Tampa (TPA), Tampa, Estados Unidos",
  },
  {
    value: "PDX",
    text: "Aeropuerto Internacional de Portland (PDX), Portland, Estados Unidos",
  },
  {
    value: "YUL",
    text: "Aeropuerto Internacional Montréal-Pierre Elliott Trudeau (YUL), Montreal, Canadá",
  },
  {
    value: "YYC",
    text: "Aeropuerto Internacional de Calgary (YYC), Calgary, Canadá",
  },
  {
    value: "DAL",
    text: "Aeropuerto Love Field de Dallas (DAL), Dallas, Estados Unidos",
  },
  {
    value: "STL",
    text: "Aeropuerto Internacional Lambert St. Louis (STL), St. Louis, Estados Unidos",
  },
  {
    value: "BNA",
    text: "Aeropuerto Internacional de Nashville (BNA), Nashville, Estados Unidos",
  },
  {
    value: "AUS",
    text: "Aeropuerto Internacional de Austin-Bergstrom (AUS), Austin, Estados Unidos",
  },
  {
    value: "HOU",
    text: "Aeropuerto William P. Hobby (HOU), Houston, Estados Unidos",
  },
  {
    value: "OAK",
    text: "Aeropuerto Internacional Metropolitano de Oakland (OAK), Oakland, Estados Unidos",
  },
  {
    value: "SJC",
    text: "Aeropuerto Internacional Norman Y. Mineta San Jose (SJC), San Jose, Estados Unidos",
  },
  {
    value: "MSY",
    text: "Aeropuerto Internacional Louis Armstrong de Nueva Orleans (MSY), New Orleans, Estados Unidos",
  },
  {
    value: "RDU",
    text: "Aeropuerto Internacional Raleigh-Durham (RDU), Raleigh, Estados Unidos",
  },
  {
    value: "MCI",
    text: "Aeropuerto Internacional de Kansas City (MCI), Kansas City, Estados Unidos",
  },
  {
    value: "SMF",
    text: "Aeropuerto Internacional de Sacramento (SMF), Sacramento, Estados Unidos",
  },
  {
    value: "SNA",
    text: "Aeropuerto John Wayne-Condado de Orange (SNA), Santa Ana, Estados Unidos",
  },
  {
    value: "CLE",
    text: "Aeropuerto Internacional Cleveland Hopkins (CLE), Cleveland, Estados Unidos",
  },
  {
    value: "SAT",
    text: "Aeropuerto Internacional de San Antonio (SAT), San Antonio, Estados Unidos",
  },
  {
    value: "PIT",
    text: "Aeropuerto Internacional de Pittsburgh (PIT), Pittsburgh, Estados Unidos",
  },
  {
    value: "RSW",
    text: "Aeropuerto Internacional del Suroeste de Florida (RSW), Fort Myers, Estados Unidos",
  },
  {
    value: "IND",
    text: "Aeropuerto Internacional de Indianápolis (IND), Indianapolis, Estados Unidos",
  },
  {
    value: "CVG",
    text: "Aeropuerto Internacional de Cincinnati/Norte de Kentucky (CVG), Cincinnati, Estados Unidos",
  },
  {
    value: "YEG",
    text: "Aeropuerto Internacional de Edmonton (YEG), Edmonton, Canadá",
  },
  {
    value: "CMH",
    text: "Aeropuerto Internacional Port Columbus (CMH), Columbus, Estados Unidos",
  },
  {
    value: "BDL",
    text: "Aeropuerto Internacional Bradley (BDL), Windsor Locks, Estados Unidos",
  },
  {
    value: "PBI",
    text: "Aeropuerto Internacional de Palm Beach (PBI), West Palm Beach, Estados Unidos",
  },
  {
    value: "JAX",
    text: "Aeropuerto Internacional de Jacksonville (JAX), Jacksonville, Estados Unidos",
  },
  {
    value: "ANC",
    text: "Aeropuerto Internacional Ted Stevens Anchorage (ANC), Anchorage, Estados Unidos",
  },
  {
    value: "ABQ",
    text: "Aeropuerto Internacional Sunport de Albuquerque (ABQ), Albuquerque, Estados Unidos",
  },
  {
    value: "YOW",
    text: "Aeropuerto Internacional Ottawa Macdonald-Cartier (YOW), Ottawa, Canadá",
  },
  {
    value: "BUF",
    text: "Aeropuerto Internacional Buffalo Niagara (BUF), Buffalo, Estados Unidos",
  },
  { value: "OMA", text: "Aeropuerto Eppley (OMA), Omaha, Estados Unidos" },
  {
    value: "YWG",
    text: "Aeropuerto Internacional James Armstrong Richardson de Winnipeg (YWG), Winnipeg, Canadá",
  },
  {
    value: "ONT",
    text: "Aeropuerto Internacional de Ontario (ONT), Ontario, Estados Unidos",
  },
  {
    value: "YHZ",
    text: "Aeropuerto Internacional de Halifax Stanfield (YHZ), Halifax, Canadá",
  },
  {
    value: "PVD",
    text: "Aeropuerto T. F. Green (PVD), Providence, Estados Unidos",
  },
  {
    value: "MKE",
    text: "Aeropuerto Internacional General Mitchell (MKE), Milwaukee, Estados Unidos",
  },
  {
    value: "KOA",
    text: "Aeropuerto Internacional de Kona en Keahole (KOA), Kona, Estados Unidos",
  },
  {
    value: "LGB",
    text: "Aeropuerto de Long Beach (LGB), Long Beach, Estados Unidos",
  },
  { value: "LIH", text: "Aeropuerto de Lihue (LIH), Lihue, Estados Unidos" },
  {
    value: "ELP",
    text: "Aeropuerto Internacional de El Paso (ELP), El Paso, Estados Unidos",
  },
  {
    value: "YTZ",
    text: "Aeropuerto Billy Bishop del Centro de la Ciudad de Toronto (YTZ), Toronto, Canadá",
  },
  {
    value: "SFB",
    text: "Aeropuerto Internacional de Sanford en Orlando (SFB), Sanford, Estados Unidos",
  },
  {
    value: "ALB",
    text: "Aeropuerto Internacional de Albany (ALB), Albany, Estados Unidos",
  },
  { value: "BUR", text: "Aeropuerto Bob Hope (BUR), Burbank, Estados Unidos" },
  {
    value: "PSP",
    text: "Aeropuerto Internacional de Palm Springs (PSP), Palm Springs, Estados Unidos",
  },
  {
    value: "SYR",
    text: "Aeropuerto Internacional de Syracuse Hancock (SYR), Syracuse, Estados Unidos",
  },
  {
    value: "YYJ",
    text: "Aeropuerto Internacional de Victoria (YYJ), Victoria, Canadá",
  },
  {
    value: "YLW",
    text: "Aeropuerto Internacional de Kelowna (YLW), Kelowna, Canadá",
  },
  {
    value: "PWM",
    text: "Aeropuerto Internacional de Portland Jetport (PWM), Portland, Estados Unidos",
  },
  {
    value: "YQB",
    text: "Aeropuerto Internacional Jean Lesage de Québec City (YQB), Quebec, Canadá",
  },
  {
    value: "PNS",
    text: "Aeropuerto Regional de Pensacola (PNS), Pensacola, Estados Unidos",
  },
  {
    value: "MHT",
    text: "Aeropuerto de Manchester (MHT), Manchester NH, Estados Unidos",
  },
  {
    value: "HPN",
    text: "Aeropuerto del Condado de Westchester (HPN), White Plains, Estados Unidos",
  },
  {
    value: "YXE",
    text: "Aeropuerto Internacional John G. Diefenbaker de Saskatoon (YXE), Saskatoon, Canadá",
  },
  {
    value: "ITO",
    text: "Aeropuerto Internacional de Hilo (ITO), Hilo, Estados Unidos",
  },
  {
    value: "YQR",
    text: "Aeropuerto Internacional de Regina (YQR), Regina, Canadá",
  },
  {
    value: "SRQ",
    text: "Aeropuerto Internacional de Sarasota-Bradenton (SRQ), Sarasota, Estados Unidos",
  },
  {
    value: "ROC",
    text: "Aeropuerto Internacional Greater Rochester (ROC), Rochester, Estados Unidos",
  },
  {
    value: "BTV",
    text: "Aeropuerto Internacional de Burlington (BTV), Burlington, Estados Unidos",
  },
  {
    value: "PIE",
    text: "Aeropuerto Internacional de St. Petersburg-Clearwater (PIE), St. Petersburg, Estados Unidos",
  },
  {
    value: "ECP",
    text: "Aeropuerto Internacional de Northwest Florida Beaches (ECP), Panama City, Estados Unidos",
  },
  {
    value: "FAT",
    text: "Aeropuerto Internacional de Fresno Yosemite (FAT), Fresno, Estados Unidos",
  },
  {
    value: "MFE",
    text: "Aeropuerto Internacional de McAllen Miller (MFE), Mcallen, Estados Unidos",
  },
  {
    value: "TLH",
    text: "Aeropuerto Regional de Tallahassee (TLH), Tallahassee, Estados Unidos",
  },
  {
    value: "AMA",
    text: "Aeropuerto Internacional Rick Husband Amarillo (AMA), Amarillo, Estados Unidos",
  },
  {
    value: "SBA",
    text: "Aeropuerto Municipal de Santa Bárbara (SBA), Santa Barbara, Estados Unidos",
  },
  {
    value: "ISP",
    text: "Aeropuerto MacArthur de Long Island (ISP), Islip, Estados Unidos",
  },
  {
    value: "MEX",
    text: "Aeropuerto Internacional de la Ciudad de México (AICM) (MEX), Ciudad de México, México",
  },
  {
    value: "GRU",
    text: "Aeropuerto Internacional de São Paulo-Guarulhos (GRU), Sao Paulo, Brasil",
  },
  {
    value: "BOG",
    text: "Aeropuerto Internacional El Dorado (BOG), Bogotá, Colombia",
  },
  {
    value: "CUN",
    text: "Aeropuerto Internacional de Cancún (CUN), Cancún, México",
  },
  {
    value: "SCL",
    text: "Aeropuerto Internacional Comodoro Arturo Merino Benítez (SCL), Santiago, Chile",
  },
  {
    value: "LIM",
    text: "Aeropuerto Internacional Jorge Chávez (LIM), Lima, Perú",
  },
  {
    value: "CGH",
    text: "Aeropuerto de São Paulo-Congonhas (CGH), Sao Paulo, Brasil",
  },
  {
    value: "BSB",
    text: "Aeropuerto Internacional Presidente Juscelino Kubitschek (BSB), Brasilia, Brasil",
  },
  {
    value: "GIG",
    text: "Aeropuerto Internacional de Río de Janeiro-Galeão (GIG), Rio De Janeiro, Brasil",
  },
  {
    value: "PTY",
    text: "Aeropuerto Internacional de Tocumen (PTY), Panama City, Panamá",
  },
  {
    value: "AEP",
    text: "Aeroparque Jorge Newbery (AEP), Buenos Aires, Argentina",
  },
  {
    value: "GDL",
    text: "Aeropuerto Internacional de Guadalajara (GDL), Guadalajara, México",
  },
  {
    value: "EZE",
    text: "Aeropuerto Internacional Ministro Pistarini (EZE), Buenos Aires, Argentina",
  },
  {
    value: "CNF",
    text: "Aeropuerto Internacional Tancredo Neves (CNF), Belo Horizonte, Brasil",
  },
  {
    value: "MTY",
    text: "Aeropuerto Internacional de Monterrey (MTY), Monterrey, México",
  },
  {
    value: "VCP",
    text: "Aeropuerto Internacional de Viracopos (VCP), Campinas, Brasil",
  },
  {
    value: "SDU",
    text: "Aeropuerto Santos Dumont (SDU), Rio De Janeiro, Brasil",
  },
  {
    value: "POA",
    text: "Aeropuerto Salgado Filho (POA), Porto Alegre, Brasil",
  },
  {
    value: "REC",
    text: "Aeropuerto Internacional Guararapes-Gilberto Freyre (REC), Recife, Brasil",
  },
  {
    value: "SSA",
    text: "Aeropuerto Internacional Deputado Luís Eduardo Magalhães (SSA), Salvador, Brasil",
  },
  {
    value: "TIJ",
    text: "Aeropuerto Internacional General Abelardo L. Rodríguez (TIJ), Tijuana, México",
  },
  { value: "CWB", text: "Aeropuerto Afonso Pena (CWB), Curitiba, Brasil" },
  {
    value: "FOR",
    text: "Aeropuerto Internacional Pinto Martins (FOR), Fortaleza, Brasil",
  },
  {
    value: "HAV",
    text: "Aeropuerto Internacional José Martí (HAV), Habana, Cuba",
  },
  {
    value: "SJO",
    text: "Aeropuerto Internacional Juan Santamaría (SJO), San Jose, Costa Rica",
  },
  { value: "MUN", text: "Aeropuerto de Maturín (MUN), Maturin, Venezuela" },
  {
    value: "FLN",
    text: "Aeropuerto Internacional Hercílio Luz (FLN), Florianopolis, Brasil",
  },
  {
    value: "BEL",
    text: "Aeropuerto Internacional Val de Cans (BEL), Belem, Brasil",
  },
  {
    value: "CUZ",
    text: "Aeropuerto Internacional Alejandro Velasco Astete (CUZ), Cuzco, Perú",
  },
  { value: "GYN", text: "Aeropuerto Santa Genoveva (GYN), Goiania, Brasil" },
  {
    value: "VIX",
    text: "Aeropuerto Eurico de Aguiar Salles (VIX), Vitoria, Brasil",
  },
  {
    value: "SAL",
    text: "Aeropuerto Internacional de El Salvador (SAL), San Salvador, El Salvador",
  },
  { value: "CGB", text: "Aeropuerto Marechal Rondon (CGB), Cuiaba, Brasil" },
  {
    value: "COR",
    text: "Aeropuerto Ingeniero Ambrosio Taravella (COR), Cordoba, Argentina",
  },
  {
    value: "MAO",
    text: "Aeropuerto Internacional Eduardo Gomes (MAO), Manaus, Brasil",
  },
  {
    value: "GUA",
    text: "Aeropuerto Internacional La Aurora (GUA), Guatemala City, Guatemala",
  },
  {
    value: "NAT",
    text: "Aeropuerto Internacional Governador Aluízio Alves (NAT), Natal, Brasil",
  },
  {
    value: "IGU",
    text: "Aeropuerto Internacional de Foz do Iguaçu (IGU), Foz Do Iguacu, Brasil",
  },
  {
    value: "MCZ",
    text: "Aeropuerto Internacional Zumbi dos Palmares (MCZ), Maceio, Brasil",
  },
  {
    value: "MDZ",
    text: "Aeropuerto Internacional El Plumerillo (MDZ), Mendoza, Argentina",
  },
  {
    value: "BPS",
    text: "Aeropuerto de Porto Seguro (BPS), Porto Seguro, Brasil",
  },
  {
    value: "AQP",
    text: "Aeropuerto Internacional Rodríguez Ballón (AQP), Arequipa, Perú",
  },
  {
    value: "SLZ",
    text: "Aeropuerto Internacional Marechal Cunha Machado (SLZ), Sao Luis, Brasil",
  },
  {
    value: "NVT",
    text: "Aeropuerto Internacional Ministro Victor Konder (NVT), Navegantes, Brasil",
  },
  {
    value: "CGR",
    text: "Aeropuerto Internacional de Campo Grande (CGR), Campo Grande, Brasil",
  },
  {
    value: "MGA",
    text: "Aeropuerto Internacional Augusto C. Sandino (MGA), Managua, Nicaragua",
  },
  {
    value: "JPA",
    text: "Aeropuerto Internacional Presidente Castro Pinto (JPA), Joao Pessoa, Brasil",
  },
  {
    value: "BRC",
    text: "Aeropuerto de San Carlos de Bariloche (BRC), San Carlos De Bariloche, Argentina",
  },
  { value: "AJU", text: "Aeropuerto Santa María (AJU), Aracaju, Brasil" },
  {
    value: "LIR",
    text: "Aeropuerto Internacional Daniel Oduber Quiros (LIR), Liberia, Costa Rica",
  },
  {
    value: "ASU",
    text: "Aeropuerto Internacional Silvio Pettirossi (ASU), Asuncion, Paraguay",
  },
  {
    value: "THE",
    text: "Aeropuerto Senador Petrônio Portela (THE), Teresina, Brasil",
  },
  {
    value: "UDI",
    text: "Aeropuerto Ten. Cel. Aviador César Bombonato (UDI), Uberlandia, Brasil",
  },
  {
    value: "SLA",
    text: "Aeropuerto Internacional Martin Miguel De Guemes (SLA), Salta, Argentina",
  },
  {
    value: "IGR",
    text: "Aeropuerto Internacional Cataratas del Iguazú (IGR), Iguazu Falls, Argentina",
  },
  {
    value: "IQT",
    text: "Aeropuerto Internacional Coronel FAP Francisco Secada Vignetta (IQT), Iquitos, Perú",
  },
  {
    value: "NQN",
    text: "Aeropuerto Presidente Peron (NQN), Neuquen, Argentina",
  },
  {
    value: "LDB",
    text: "Aeropuerto Governador José Richa (LDB), Londrina, Brasil",
  },
  {
    value: "BZE",
    text: "Aeropuerto Internacional Philip S. W. Goldson (BZE), Belize City, Belice",
  },
  {
    value: "SAP",
    text: "Aeropuerto Internacional Ramón Villeda Morales (SAP), San Pedro Sula, Honduras",
  },
  {
    value: "RAO",
    text: "Aeropuerto Leite Lopes (RAO), Ribeirao Preto, Brasil",
  },
  {
    value: "PIU",
    text: "Aeropuerto Internacional Capitán FAP Guillermo Concha Iberico (PIU), Piura, Perú",
  },
  {
    value: "USH",
    text: "Aeropuerto Malvinas Argentinas (USH), Ushuaia, Argentina",
  },
  {
    value: "PVH",
    text: "Aeropuerto Governador Jorge Teixeira de Oliveira (PVH), Porto Velho, Brasil",
  },
  { value: "ROS", text: "Aeropuerto Islas Malvinas (ROS), Rosario, Argentina" },
  {
    value: "SJP",
    text: "Aeropuerto Estadual Prof. Eribelto Manoel Reino (SJP), Sao Jose Do Rio Preto, Brasil",
  },
  {
    value: "TGU",
    text: "Aeropuerto Internacional Toncontín (TGU), Tegucigalpa, Honduras",
  },
  {
    value: "ACA",
    text: "Aeropuerto Internacional de Acapulco (ACA), Acapulco, México",
  },
  {
    value: "TPP",
    text: "Aeropuerto Cadete FAP Guillermo Del Castillo Paredes (TPP), Tarapoto, Perú",
  },
  {
    value: "MGF",
    text: "Aeropuerto Regional de Maringá - Sílvio Nane Junior (MGF), Maringa, Brasil",
  },
  {
    value: "PMW",
    text: "Aeropuerto Brigadeiro Lysias Rodrigues (PMW), Palmas, Brasil",
  },
  {
    value: "FTE",
    text: "Aeropuerto de El Calafate (FTE), El Calafate, Argentina",
  },
  {
    value: "CRD",
    text: "Aeropuerto General E. Mosconi (CRD), Comodoro Rivadavia, Argentina",
  },
  {
    value: "IOS",
    text: "Aeropuerto Bahía - Jorge Amado (IOS), Ilheus, Brasil",
  },
  { value: "MCP", text: "Aeropuerto Alberto Alcolumbre (MCP), Macapa, Brasil" },
  {
    value: "TRU",
    text: "Aeropuerto Internacional Capitan FAP Carlos Martinez De Pinillos (TRU), Trujillo, Perú",
  },
  {
    value: "TUC",
    text: "Aeropuerto Teniente Benjamin Matienzo (TUC), Tucuman, Argentina",
  },
  {
    value: "JDO",
    text: "Aeropuerto Orlando Bezerra de Menezes (JDO), Juazeiro Do Norte, Brasil",
  },
  {
    value: "CIX",
    text: "Aeropuerto Internacional Capitan FAP Jose A Quinones Gonzales (CIX), Chiclayo, Perú",
  },
  {
    value: "JOI",
    text: "Aeropuerto Lauro Carneiro de Loyola (JOI), Joinville, Brasil",
  },
  {
    value: "PCL",
    text: "Aeropuerto Internacional Cap FAP David Abenzur Rengifo (PCL), Pucallpa, Perú",
  },
  {
    value: "PNZ",
    text: "Aeropuerto Senador Nilo Coelho (PNZ), Petrolina, Brasil",
  },
  {
    value: "JUL",
    text: "Aeropuerto Internacional Inca Manco Capac (JUL), Juliaca, Perú",
  },
  {
    value: "STM",
    text: "Aeropuerto Maestro Wilson Fonseca (STM), Santarem, Brasil",
  },
  {
    value: "BHI",
    text: "Aeropuerto Comandante Espora (BHI), Bahia Blanca, Argentina",
  },
  {
    value: "RTB",
    text: "Aeropuerto Internacional Juan Manuel Galvez (RTB), Roatan, Honduras",
  },
  {
    value: "RBR",
    text: "Aeropuerto Plácido de Castro (RBR), Rio Branco, Brasil",
  },
  {
    value: "DAV",
    text: "Aeropuerto Internacional Enrique Malek (DAV), David, Panamá",
  },
  {
    value: "RES",
    text: "Aeropuerto Internacional de Resistencia (RES), Resistencia, Argentina",
  },
  {
    value: "IMP",
    text: "Aeropuerto Prefeito Renato Moreira (IMP), Imperatriz, Brasil",
  },
  {
    value: "REL",
    text: "Aeropuerto Almirante Marco Andres Zar (REL), Trelew, Argentina",
  },
  {
    value: "RGL",
    text: "Aeropuerto Piloto Civil N. Fernández (RGL), Rio Gallegos, Argentina",
  },
  {
    value: "MDQ",
    text: "Aeropuerto Internacional Ástor Piazzola (MDQ), Mar Del Plata, Argentina",
  },
  {
    value: "BVB",
    text: "Aeropuerto Atlas Brasil Cantanhede (BVB), Boa Vista, Brasil",
  },
  {
    value: "MAB",
    text: "Aeropuerto João Correa da Rocha (MAB), Maraba, Brasil",
  },
  {
    value: "MOC",
    text: "Aeropuerto Mário Ribeiro (MOC), Montes Claros, Brasil",
  },
  {
    value: "JUJ",
    text: "Aeropuerto Internacional Gobernador Horacio Guzman (JUJ), Jujuy, Argentina",
  },
  {
    value: "PPB",
    text: "Aeropuerto Presidente Prudente (PPB), President Prudente, Brasil",
  },
  {
    value: "AGU",
    text: "Aeropuerto Internacional Lic. Jesús Terán Peredo (AGU), Aguascalientes, México",
  },
  {
    value: "BHM",
    text: "Aeropuerto Internacional de Birmingham-Shuttlesworth (BHM), Birmingham, Estados Unidos",
  },
  {
    value: "BIL",
    text: "Aeropuerto Internacional Billings Logan (BIL), Billings, Estados Unidos",
  },
  {
    value: "BIS",
    text: "Aeropuerto Municipal de Bismark (BIS), Bismarck, Estados Unidos",
  },
  {
    value: "BJX",
    text: "Aeropuerto Internacional Del Bajío (BJX), León, México",
  },
  {
    value: "BKG",
    text: "Aeropuerto de Branson (BKG), Branson, Estados Unidos",
  },
  {
    value: "BLB",
    text: "Aeropuerto Internacional de Panamá Pacífico (BLB), Balboa Airport, Panamá",
  },
  {
    value: "BMI",
    text: "Aeropuerto Regional Central de Illinois en Bloomington-Normal (BMI), Illinois, Estados Unidos",
  },
  { value: "BOI", text: "Aeropuerto de Boise (BOI), Boise, Estados Unidos" },
  {
    value: "BZN",
    text: "Aeropuerto Internacional Bozeman Yellowstone (BZN), Bozeman, Estados Unidos",
  },
  {
    value: "CEN",
    text: "Aeropuerto Internacional de Ciudad Obregón (CEN), Ciudad Obregón, México",
  },
  {
    value: "CHS",
    text: "Aeropuerto Internacional de Charleston (CHS), Charleston, Estados Unidos",
  },
  {
    value: "CID",
    text: "Aeropuerto Internacional del Este de Iowa (CID), Cedar Rapids, Estados Unidos",
  },
  {
    value: "CJS",
    text: "Aeropuerto Internacional Abraham González (CJS), Ciudad Juárez, México",
  },
  {
    value: "CLQ",
    text: "Aeropuerto Licenciado Miguel de la Madrid (CLQ), Colima, México",
  },
  {
    value: "CME",
    text: "Aeropuerto Internacional de Ciudad del Carmen (CME), Ciudad Del Carmen , México",
  },
  {
    value: "COS",
    text: "Aeropuerto de Colorado Springs (COS), Colorado Springs, Estados Unidos",
  },
  {
    value: "CPE",
    text: "Aeropuerto Internacional Ingeniero Alberto Acuña Ongay (CPE), Campeche, México",
  },
  {
    value: "CTM",
    text: "Aeropuerto Internacional de Chetumal (CTM), Chetumal, México",
  },
  {
    value: "CUL",
    text: "Aeropuerto Internacional Federal de Culiacán (CUL), Culiacán, México",
  },
  {
    value: "CUU",
    text: "Aeropuerto Internacional General Roberto Fierro Villalobos (CUU), Chihuahua, México",
  },
  {
    value: "CZM",
    text: "Aeropuerto Internacional de Cozumel (CZM), Cozumel, México",
  },
  {
    value: "DGO",
    text: "Aeropuerto Internacional Guadalupe Victoria (DGO), Durango, México",
  },
  {
    value: "DSM",
    text: "Aeropuerto Internacional de Des Moines (DSM), Des Moines, Estados Unidos",
  },
  {
    value: "FAR",
    text: "Aeropuerto Internacional Hector (FAR), Fargo, Estados Unidos",
  },
  {
    value: "FSD",
    text: "Aeropuerto Regional de Sioux Falls (FSD), Sioux Falls, Estados Unidos",
  },
  {
    value: "GEG",
    text: "Aeropuerto Internacional de Spokane (GEG), Spokane, Estados Unidos",
  },
  {
    value: "GRB",
    text: "Aeropuerto Internacional de Green Bay-Austin Straubel (GRB), Green Bay, Estados Unidos",
  },
  {
    value: "GRR",
    text: "Aeropuerto Internacional Gerald R. Ford (GRR), Grand Rapids, Estados Unidos",
  },
  {
    value: "GSO",
    text: "Aeropuerto Internacional Piedmont Triad (GSO), Greensboro, Estados Unidos",
  },
  {
    value: "GSP",
    text: "Aeropuerto Internacional de Greenville-Spartanburg (GSP), Greenville, Estados Unidos",
  },
  {
    value: "HMO",
    text: "Aeropuerto Internacional de Hermosillo (HMO), Hermosillo, México",
  },
  {
    value: "HRL",
    text: "Aeropuerto Internacional Valley (HRL), Valley, Estados Unidos",
  },
  {
    value: "HSV",
    text: "Aeropuerto Internacional de Huntsville (HSV), Huntsville, Estados Unidos",
  },
  {
    value: "HUX",
    text: "Aeropuerto Internacional de Bahías de Huatulco (HUX), Huatulco, México",
  },
  {
    value: "ICT",
    text: "Aeropuerto Mid-Continent de Wichita (ICT), Wichita, Estados Unidos",
  },
  {
    value: "JAC",
    text: "Aeropuerto de Jackson Hole (JAC), Jackson Hole, Estados Unidos",
  },
  {
    value: "JAN",
    text: "Aeropuerto Internacional Jackson-Medgar Wiley Evers (JAN), Jackson-Evers, Estados Unidos",
  },
  {
    value: "LAP",
    text: "Aeropuerto Internacional Manuel Márquez de León (LAP), La Paz, México",
  },
  {
    value: "LFT",
    text: "Aeropuerto Regional de Lafayette (LFT), Lafayette, Estados Unidos",
  },
  {
    value: "LIT",
    text: "Aeropuerto Nacional Bill y Hillary Clinton (LIT), Little Rock, Estados Unidos",
  },
  {
    value: "LMM",
    text: "Aeropuerto Internacional Federal del Valle del Fuerte (LMM), Los Mochis, México",
  },
  {
    value: "LTO",
    text: "Aeropuerto Internacional de Loreto (LTO), Loreto, México",
  },
  {
    value: "MDT",
    text: "Aeropuerto Internacional de Harrisburg (MDT), Harrisburg, Estados Unidos",
  },
  {
    value: "MEM",
    text: "Aeropuerto Internacional de Memphis (MEM), Memphis, Estados Unidos",
  },
  {
    value: "MID",
    text: "Aeropuerto Internacional Manuel Crescencio Rejón (MID), Mérida, México",
  },
  {
    value: "MLM",
    text: "Aeropuerto Internacional General Francisco J. Mujica (MLM), Morelia, México",
  },
  {
    value: "MSL",
    text: "Aeropuerto Regional del Noroeste de Alabama (MSL), Muscle Shoals, Estados Unidos",
  },
  {
    value: "MSN",
    text: "Aeropuerto Regional del Condado de Dane (MSN), Madison, Estados Unidos",
  },
  {
    value: "MSO",
    text: "Aeropuerto Internacional de Missoula (MSO), Missoula, Estados Unidos",
  },
  {
    value: "MXL",
    text: "Aeropuerto Internacional General Rodolfo Sánchez Taboada (MXL), Mexicali, México",
  },
  {
    value: "MYR",
    text: "Aeropuerto Internacional de Myrtle Beach (MYR), Myrtle Beach, Estados Unidos",
  },
  {
    value: "MZT",
    text: "Aeropuerto Internacional General Rafael Buelna (MZT), Mazatlán, México",
  },
  {
    value: "NLU",
    text: "Aeropuerto Internacional Felipe Ángeles (NLU), Ciudad de México (AIFA), México",
  },
  {
    value: "OAX",
    text: "Aeropuerto Internacional de Oaxaca (OAX), Oaxaca, México",
  },
  {
    value: "OKC",
    text: "Aeropuerto Will Rogers World (OKC), Oklahoma City, Estados Unidos",
  },
  {
    value: "ORF",
    text: "Aeropuerto Internacional de Norfolk (ORF), Norfolk, Estados Unidos",
  },
  {
    value: "PBC",
    text: "Aeropuerto Internacional de Puebla (PBC), Puebla, México",
  },
  {
    value: "PPE",
    text: "Aeropuerto Internacional Mar de Cortés (PPE), Puerto Peñasco, México",
  },
  {
    value: "PSM",
    text: "Aeropuerto Internacional Pease (PSM), Portsmouth, Estados Unidos",
  },
  {
    value: "PVR",
    text: "Aeropuerto Internacional de Puerto Vallarta (PVR), Puerto Vallarta, México",
  },
  {
    value: "PXM",
    text: "Aeropuerto Internacional de Puerto Escondido (PXM), Puerto Escondido, México",
  },
  {
    value: "QRO",
    text: "Aeropuerto Intercontinental de Querétaro (QRO), Querétaro, México",
  },
  {
    value: "REX",
    text: "Aeropuerto Internacional General Lucio Blanco (REX), Reynosa, México",
  },
  {
    value: "RFD",
    text: "Aeropuerto Internacional de Chicago Rockford (RFD), Chicago Rockford, Estados Unidos",
  },
  {
    value: "RNO",
    text: "Aeropuerto Internacional Reno-Tahoe (RNO), Reno, Estados Unidos",
  },
  {
    value: "SAV",
    text: "Aeropuerto Internacional de Savannah-Hilton Head (SAV), Savannah, Estados Unidos",
  },
  {
    value: "SBD",
    text: "Aeropuerto Internacional de San Bernardino (SBD), San Bernardino, Estados Unidos",
  },
  {
    value: "SDF",
    text: "Aeropuerto Internacional de Louisville Muhammad Ali (SDF), Louisville, Estados Unidos",
  },
  {
    value: "SJD",
    text: "Aeropuerto Internacional de Los Cabos (SJD), Los Cabos, México",
  },
  {
    value: "SLP",
    text: "Aeropuerto Internacional Ponciano Arriaga (SLP), San Luis Potosí, México",
  },
  {
    value: "TAM",
    text: "Aeropuerto Internacional General Francisco Javier Mina (TAM), Tampico, México",
  },
  {
    value: "TAP",
    text: "Aeropuerto Internacional de Tapachula (TAP), Tapachula, México",
  },
  {
    value: "TGZ",
    text: "Aeropuerto Internacional Ángel Albino Corzo (TGZ), Tuxtla Gutiérrez, México",
  },
  {
    value: "TLC",
    text: "Aeropuerto Internacional de Toluca (TLC), Toluca, México",
  },
  {
    value: "TPQ",
    text: "Aeropuerto Internacional de Tepic (TPQ), Tepic, México",
  },
  {
    value: "TRC",
    text: "Aeropuerto Internacional de Torreón (TRC), Torreón, México",
  },
  {
    value: "TTN",
    text: "Aeropuerto de Trenton-Mercer (TTN), Trenton, Estados Unidos",
  },
  {
    value: "TUL",
    text: "Aeropuerto Internacional de Tulsa (TUL), Tulsa, Estados Unidos",
  },
  {
    value: "TUS",
    text: "Aeropuerto Internacional de Tucson (TUS), Tucson, Estados Unidos",
  },
  {
    value: "TYR",
    text: "Aeropuerto Regional Tyler Pounds (TYR), Pounds Field, Estados Unidos",
  },
  {
    value: "TYS",
    text: "Aeropuerto McGhee Tyson (TYS), Knoxville, Estados Unidos",
  },
  {
    value: "UPN",
    text: "Aeropuerto Internacional Licenciado y General Ignacio López Rayón (UPN), Uruapan, México",
  },
  {
    value: "VER",
    text: "Aeropuerto Internacional de Veracruz (VER), Veracruz, México",
  },
  {
    value: "VSA",
    text: "Aeropuerto Internacional Carlos Rovirosa Pérez (VSA), Villahermosa, México",
  },
  {
    value: "XNA",
    text: "Aeropuerto Regional del Noroeste de Arkansas (XNA), Fayettville, Estados Unidos",
  },
  {
    value: "ZCL",
    text: "Aeropuerto Internacional General Leobardo C. Ruiz (ZCL), Zacatecas, México",
  },
  {
    value: "ZIH",
    text: "Aeropuerto Internacional de Ixtapa-Zihuatanejo (ZIH), Ixtapa / Zihuatanejo, México",
  },
];

//Guardar cookie
function setCookieWishlist(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

//Verificar si hay una cookie existente en el dispositivo
function getCookieWishlist(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Cerrar modal wishlist
$(document.body).on("click", "#btnCerrarModalWishlist", function (e) {
  $("#modal-test-wishlist").remove();
});

//Al darle click al boton de wishlist
$(document.body).on("click", ".btn-wishlist-logged", function (e) {
  //window.$("#LoggedIn > button").click();
  window.$("#MainHeader").click();
  showWishlistModal();
});

//Cambiar el tab
function openTab(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  var tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  document
    .querySelector(`[onclick="openTab('${tabName}')"]`)
  //.classList.add("active");
}

//Función para convertir fechas:
function convertirFechaOrigen(fechaStr) {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const partes = fechaStr.split("/");
  const mesNum = parseInt(partes[0], 10);
  const dia = parseInt(partes[1], 10);
  const año = parseInt(partes[2], 10);

  const mesTexto = meses[mesNum - 1];
  const fechaFormateada = `${dia} de ${mesTexto}, ${año}`;

  return fechaFormateada;
}

//Función para convertir un string en arreglo
function arrayToString(array, separator) {
  return array.join(separator);
}

//Función para comparar si ya pasó una fecha:
function fechaYaPaso(fechaStr) {
  const partes = fechaStr.split("/");
  const mes = parseInt(partes[0], 10);
  const dia = parseInt(partes[1], 10);
  const año = parseInt(partes[2], 10);

  const fechaObjetivo = new Date(año, mes - 1, dia); // Meses en JavaScript son 0-indexados
  const fechaActual = new Date();

  return fechaObjetivo < fechaActual;
}

//Función para buscar valores de nuevos aeropuertos 
function newAirportsValues(valueToFind) {
  for (const option of optionsJSON) {
    if (option.value === valueToFind) {
      return option.text;
    }
  }
  return "No se encontró ninguna coincidencia";
}

//Función para cargar el contenido de nuevas rutas 
function newRoutesContent(routes) {
  var contenido = "";
  var valuesCookie = routes.split(",");

  for (var i = 0; i < valuesCookie.length; i++) {
    const foundText = newAirportsValues(valuesCookie[i]);
    infoDestinoSplit = foundText.split(",");
    nombreAeropuerto = infoDestinoSplit[0];
    nombreAeropuerto = nombreAeropuerto.replace("Aeropuerto", "Apto.");
    contenido += '<div class="col-12 col-sm-6"> <div class="row caja-destinos-nuevos"> <div class="col-2 compass-container"><span class="material-symbols-outlined">explore</span></div> <div class="col-8"> <div class="truncate-container"><p class="caja-destinos-nuevos-title"><span class="truncate-text">' + nombreAeropuerto + '</span></p></div> <p class="caja-destinos-nuevos-subtitle">' + infoDestinoSplit[1] + ', ' + infoDestinoSplit[2] + '</p> </div> <div class="col-2"><span class="material-symbols-outlined close-new-destinations" data-destination="' + valuesCookie[i] + '">close</span></div> </div> </div>';
  }
  return contenido;
}

//Fecha de hoy
function getFechaHoy(daysToAdd) {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysToAdd);

  const month = String(futureDate.getMonth() + 1).padStart(2, '0');
  const day = String(futureDate.getDate()).padStart(2, '0');
  const year = futureDate.getFullYear();

  return `${month}/${day}/${year}`;
}

//Función para cargar las cajas de destinos añadidos (primer pestaña)
function loadDestinationsWL(cookieList, cookieListDetailed) {
  var contenido = "";
  var valuesCookie = cookieList.split(",");
  var valuesCookieDetailed = cookieListDetailed.split(",");
  var promoDisponible;
  const missingAirports = ["SNA", "TJX", "VSA", "DTW", "QMX", "QLA"];
  var nombreAeropuerto, imagenAeropuerto, linkDinamico;

  for (var i = 0; i < valuesCookie.length; i++) {
    nombreAeropuerto = airportNameEsp(valuesCookie[i]);

    if (missingAirports.includes(valuesCookie[i])) {
      imagenAeropuerto = "https://mapa.volaris.com/images/placeholder.jpg";
    } else {
      imagenAeropuerto =
        "https://d2jxstk8lyvs1f.cloudfront.net/" + valuesCookie[i] + ".jpg";
    }

    if (nombreAeropuerto === "Aeropuerto") {
      nombreAeropuerto = nombreAeropuerto + " (" + valuesCookie[i] + ")";
    }

    infoDestino = valuesCookieDetailed[i];
    infoDestinoSplit = infoDestino.split("|");

    pasajeros = parseInt(infoDestinoSplit[0]) + parseInt(infoDestinoSplit[1]) + parseInt(infoDestinoSplit[2]);

    const tipoVuelo = infoDestinoSplit[3];
    if (tipoVuelo == "True") {
      labelTipoVuelo = "Vuelo redondo";
    } else {
      labelTipoVuelo = "Vuelo sencillo";
    }

    var fechaVuelo = infoDestinoSplit[5];
    var fechaVueloRegreso = infoDestinoSplit[6];

    const haPasado = fechaYaPaso(fechaVuelo);
    var fechaAnadida = "";
    if (haPasado) {
      fechaVuelo = getFechaHoy(0);
      fechaVueloRegreso = getFechaHoy(8);
      //fechaAnadida = "";
    }
    var fechaFormateada = convertirFechaOrigen(fechaVuelo);
    fechaAnadida = "<p>" + fechaFormateada + "</p>";

    if (pasajeros == 1) {
      labelPasajeros = " pasajero"
    } else {
      labelPasajeros = " pasajeros"
    }

    linkDinamico =
      "https://www.volaris.com/flight/select?utm_campaign=wishlist_deeplink&utm_source=Wishlist&utm_medium=Referral&adt=" + infoDestinoSplit[0] + "&chd=" + infoDestinoSplit[1] + "&in1=" + infoDestinoSplit[2] + "&rr=" + infoDestinoSplit[3] + "&cc=" + infoDestinoSplit[4] + "&dd1=" + fechaVuelo + "&dd2=" + fechaVueloRegreso + "&culture=" + infoDestinoSplit[7] + "&o1=" + infoDestinoSplit[8] + "&d1=" + infoDestinoSplit[9] + "&s=True&dni=0&promoCode=";

    contenido +=
      '<div class="col-12 col-sm-6"><button class="caja-destino effect-apollo"> <div class="caja-destino-borde"></div> <div class="caja-destino-contenido"><img src="' +
      imagenAeropuerto +
      '" class="img-destinos"></div> <div class="caja-destino-texto figcaption"><a class="remove-wishlist" data-destination="' +
      valuesCookie[i] +
      '" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel remove-wl-box"></span></a><p class="caja-destino-txt caja-destino-titulo">' +
      nombreAeropuerto +
      '</p><p>' + labelTipoVuelo + '</p>' + fechaAnadida + '<p>' + pasajeros + labelPasajeros + '</p> <p style="text-align:right;color:#a12885;"><a href="javascript:void(0);" class="share-flight-wishlist" data-deeplink="' + linkDinamico + '"><span class="material-symbols-outlined" style="margin-right:10px;">share</span></a><a href="' +
      linkDinamico +
      '"><span class="material-symbols-outlined">arrow_right_alt</span></a></p><!--<p class="caja-destino-txt caja-destino-precio"><span class="caja-destino-txt">promo disponible</span></p> <p class="caja-destino-txt caja-destino-disclaimer">Viaje sencillo | TUA no incluido</p>--> </div> </button></div>';
  }
  return contenido;
}

//Click en botón Wishlist para mostrar modal
function showWishlistModal() {
  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");
  var cookieListNewRoutes = getCookieWishlist("wishlist_array_new_destinations");
  var contenido = "";
  var rutasNuevosDestinos = "";

  //Contenido cajas con los destinos Volaris
  if (cookieList !== undefined && cookieList !== null && cookieList !== '' && cookieList !== 'undefined') {
    contenido = loadDestinationsWL(cookieList, cookieListDetailed);
  } else {
    contenido = '<div class="col-12"><p>Inicia una búsqueda para añadir tus destinos favoritos a tu lista.</p></div>'
  }

  //Todas las rutas nuevas
  if (cookieListNewRoutes !== null && cookieListNewRoutes !== undefined && cookieListNewRoutes !== '' && cookieListNewRoutes !== 'undefined') {
    rutasNuevosDestinos = newRoutesContent(cookieListNewRoutes);
  }

  //Sugerir una ruta contenido
  var rutasSugeridas =
    '<div class="col-12"> <form id="form-rutas-nuevas"> <div class="row"> <p>¿Te gustaría explorar nuevas rutas con Volaris? Déjanos saber tus destinos soñados y recibe una notificación en caso de abrir una nueva ruta. </p> <div class="col-12 col-sm-6"> <div class="input-group dropdown-container"> <input type="text" class="dropdown-input dropdownAeropuerto" name="from-airport-wl-request" id="from-airport-wl-request" placeholder="Origen" autocomplete="off" required> <span class="input-group-addon volaris"><span class="material-symbols-outlined arrow-voi">arrow_drop_down</span></span> <div class="dropdown-list" style="display: none;"></div> </div> </div> <div class="col-12 col-sm-6"> <div class="dropdown-container"> <input type="text" name="to-airport-wl-request" id="to-airport-wl-request" class="dropdown-input dropdownAeropuerto" placeholder="Destino" autocomplete="off" required> <span class="input-group-addon volaris"><span class="material-symbols-outlined arrow-voi">arrow_drop_down</span></span> <div class="dropdown-list" style="display: none;"></div> </div> </div> <div class="col-12 col-sm-6"> <input type="hidden" id="new-destinations-wl-request" name="new-destinations-wl-request" value="' + cookieListNewRoutes + '"> <a id="btnAuxGuardarRuta" class="btn btn-large marBtm25 mat-flat-button mat-button-base mat-primary btnGuardarRuta disabled" color="primary" href="javascript:void(0);">Guardar ruta</a> <button type="submit" class="btn btn-large marBtm25 mat-flat-button mat-button-base mat-primary" style="display:none;" id="btnSubmitRuta">Guardar Ruta</button></div> <div class="col-12 col-sm-6"></div> <div class="col-12 nuevos-destinos-boxes"> <div class="row" id="newRoutesContent">' + rutasNuevosDestinos + "</div></div></div></form></div>";

  //Añade contenido de WL
  var tabulador =
    '<div class="col-12" style="margin-top: 20px;"><div class="button-wl-menu b2" id="menu-wishlist"> <input type="checkbox" class="checkbox menu-wishlist-checkbox" name="menu-wishlist-checkbox" id="menu-wishlist-checkbox" /> <div class="knobs"> <span>Mi lista</span> </div> <div class="layer"></div> </div> </div> <div class="col-12"> <div class="tab-content" id="tab1"> <div class="row" id="contenidoWLTabOne">' +
    contenido +
    ' </div> </div> <div class="tab-content" id="tab2"> <div class="row">' +
    rutasSugeridas +
    "</div> </div> </div>";

  $("body").append(
    '<div class="cdk-overlay-container" id="modal-test-wishlist"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: center; align-items: center;"> <div id="cdk-overlay-0" class="cdk-overlay-pane baggage-modal-panel" style="max-width: 50vw; pointer-events: auto; position: static; max-height: 80vh;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container class="mat-dialog-container ng-tns-c40-8 ng-trigger ng-trigger-dialogContainer ng-star-inserted wishlist-bucket" style="transform: none;"> <div class="baggage-modal-container ng-star-inserted combo-flex-container" style="overflow-x: hidden;"> <mat-dialog-content class="template-content combo-content mat-dialog-contents"> <a class="closeDialog" href="javascript:void(0)" mat-dialog-close="" type="button" id="btnCerrarModalWishlist"> <mat-icon aria-hidden="false" aria-label="Close" class="mat-icon notranslate material-icons mat-icon-no-color" matsuffix="" role="img">close</mat-icon></a><div class="row"><div class="col-12"><h4 style="font-size: 18px;margin-bottom: 10px;">Mis favoritos</h4></div></div><div class="row" id="contenido-wishlist">' +
    '<div class="row">' +
    tabulador +
    "</div>" +
    ' </div> </mat-dialog-content> </div> </mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>'
  );
}

/****************FUNCIONES PARA EL DROPDOWN ************************** */
$(document.body).on("keyup", ".dropdownAeropuerto", function (e) {
  //const searchQuery = event.target.value.toLowerCase();
  const searchQuery = $(this).val().toLowerCase();
  const container = event.target.closest(".dropdown-container");
  const list = container.querySelector(".dropdown-list");

  const filteredOptions = optionsJSON.filter((option) =>
    option.text.toLowerCase().includes(searchQuery)
  );

  $(this).data('value', '');
  // Limpia la lista
  list.innerHTML = "";

  // Agrega las opciones filtradas a la lista
  filteredOptions.forEach((option) => {
    const listItem = document.createElement("div");
    listItem.className = "dropdown-item";
    listItem.textContent = option.text;
    listItem.addEventListener("click", function () {
      const input = container.querySelector(".dropdown-input");
      input.value = option.text;
      list.style.display = "none";
      input.setAttribute("data-value", option.value);
      validaNuevasRutas(); //Validando rutas
    });
    list.appendChild(listItem);
  });

  list.style.display = "block";
});

/*window.onload = function () {
  
};*/

/*************FUNCIONES PARA TABS EN EL MENÚ***************** */

//Al hacer click en el checkbox del menú
$(document.body).on("click", ".menu-wishlist-checkbox", function (e) {
  //var nombreTab = $(this).data("tab");
  let isChecked = $("#menu-wishlist-checkbox").is(":checked");
  if (isChecked) {
    openTab("tab2");
  } else {
    openTab("tab1");
  }
});

//Al dar click a la tab
$(document.body).on("click", ".tab-button", function (e) {
  var nombreTab = $(this).data("tab");
  openTab(nombreTab);
});

/**************FUNCIONES PARA COMPARTIR UN VUELO DEL WISHLIST**************** */
//Modal para compartir vuelo
function showModalCopied(copyText) {
  var textoTitulo = "Compartir vuelo";
  var textoModal = "¡Comparte tu vuelo a tus amigos!";
  var textoBoton = "Copiar enlace";

  var labelLink = '<div _ngcontent-bgm-c25="" class="row ng-star-inserted"><div _ngcontent-bgm-c25="" class="col"><mat-form-field _ngcontent-bgm-c25="" appearance="outline" class="textbox mat-form-field ng-tns-c7-48 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float ng-untouched ng-pristine ng-valid"><div class="mat-form-field-wrapper"><div class="mat-form-field-flex"><!----><!----><div class="mat-form-field-outline ng-tns-c7-48 ng-star-inserted"><div class="mat-form-field-outline-start"></div><div class="mat-form-field-outline-gap"></div><div class="mat-form-field-outline-end"></div></div><div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c7-48 ng-star-inserted"><div class="mat-form-field-outline-start"></div><div class="mat-form-field-outline-gap"></div><div class="mat-form-field-outline-end"></div></div><!----><div class="mat-form-field-infix" style="padding: 5px 24px 1px 0;"><!----><!----><input _ngcontent-bgm-c25="" id="shareLinkFlight" class="mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid ng-star-inserted" matinput="" placeholder="' + copyText + '" value="' + copyText + '" type="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" id="mat-input-3" aria-invalid="false" aria-required="false"><mat-autocomplete _ngcontent-bgm-c25="" class="mat-autocomplete ng-star-inserted" panelwidth="auto"><!----></mat-autocomplete><!----><span class="mat-form-field-label-wrapper"><!----></span></div><!----></div><!----><div class="mat-form-field-subscript-wrapper"><!----><!----><div class="mat-form-field-hint-wrapper ng-tns-c7-48 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style="opacity: 1; transform: translateY(0%);"><!----><div class="mat-form-field-hint-spacer"></div></div></div></div></mat-form-field></div></div>';

  $('body').append('<div class="cdk-overlay-container" id="popupAlertTestContainer"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalFWWishlistClose"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p style="text-align: justify;margin-bottom:30px;">' + textoModal + '</p>' + labelLink + '<a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalFWWishlist" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' + textoBoton + '</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>');
}

//Función para desplegar al copiar el link de un vuelo
function modalConfirmationShow() {
  var textoTitulo = "Enlace copiado";
  var textoBoton = "Aceptar";
  var textoModal = "¡Listo! Se ha copiado el enlace a este vuelo en tu portapapeles.";

  var mensajeExitoso = '<div class="cdk-overlay-container" id="popupAlertTest"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalAlert"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content=""><span _ngcontent-bgm-c25="" class="material-icons check_circle check-circle"> check_circle </span><p>' + textoModal + '</p><div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $('body').append(mensajeExitoso);
}

$(document.body).on('click', '.cerrarModalAlert', function (e) {
  $("#popupAlertTest").remove();
});

$(document.body).on('click', '.cerrarModalFWWishlist', function (e) {
  var copyText = document.getElementById('shareLinkFlight').value;
  navigator.clipboard.writeText(copyText);
  $("#popupAlertTestContainer").remove();
  modalConfirmationShow();
});

$(document.body).on('click', '.cerrarModalFWWishlistClose', function (e) {
  $("#popupAlertTestContainer").remove();
});

//Compartir vuelo individual wishlist
$(document.body).on("click", ".share-flight-wishlist", function (e) {
  var deeplinkVuelo = $(this).attr("data-deeplink");
  showModalCopied(deeplinkVuelo);
});
/**************FIN FUNCIONES PARA COMPARTIR UN VUELO DEL WISHLIST**************** */

/**************FUNCIONES PARA QUITAR DESTINOS DEL WISHLIST**************** */
function modalRemoveDestination(destination) {
  var textoModal = "¿Estás seguro que quieres quitar este destino?";
  var textoBoton = "Remover";
  var textoDescarte = "Cancelar";

  var wishlistList = [];
  var wishlistDetailed = [];

  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");

  var valuesCookie = cookieList.split(",");
  var valuesCookieDetailed = cookieListDetailed.split(",");
  for (var i = 0; i < valuesCookie.length; i++) {
    if (valuesCookie[i] !== destination) {
      wishlistList.push(valuesCookie[i]);
      wishlistDetailed.push(valuesCookieDetailed[i]);
    }
  }

  var inputsDestinos = '<input type="hidden" id="wishlist-list-remove" name="wishlist-list-remove" value="' + wishlistList + '">' + '<input type="hidden" id="wishlist-list-detailed-remove" name="wishlist-list-detailed-remove" value="' +
    wishlistDetailed +
    '"><input type="hidden" id="destination-removed" name="destination-removed" value="' + destination + '">';

  var mensajeExitoso =
    '<div class="cdk-overlay-container" id="popupRemoverDestinoWL"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout" style="padding: 10px;"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog btnCerrarRemoverWL" id="btnCerrarRemoverWL" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a></div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p>' +
    textoModal +
    '</p><div class="row"><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-secondary btnCerrarRemoverWL" color="secondary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoDescarte +
    '</span></a></div><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-primary btnRemoverDestinoWL" data-wishlist="' + wishlistList + '" data-wishlist-detailed="' + wishlistDetailed + '" id="btnRemoverDestinoWL" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoBoton +
    '</span></a></div></div>' + inputsDestinos + ' <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $("body").append(mensajeExitoso);
}

$(document.body).on("click", ".btnCerrarRemoverWL", function (e) {
  $("#popupRemoverDestinoWL").remove();
});

//Quitar destino de wishlist
$(document.body).on('click', '.remove-wishlist', function (e) {
  var destination = $(this).attr("data-destination");
  modalRemoveDestination(destination);
});

$(document.body).on('click', '.btnRemoverDestinoWL', function (e) {
  var cookieList = $(this).attr("data-wishlist");
  var cookieListDetailed = $(this).attr("data-wishlist-detailed");
  var contenido = "";
  if (cookieList !== null && cookieList !== undefined && cookieList !== '' && cookieList !== 'undefined') {
    contenido = loadDestinationsWL(cookieList, cookieListDetailed);
    setCookieWishlist("wishlist_array", cookieList, 30);
    setCookieWishlist("wishlist_array_detailed", cookieListDetailed, 30);
  } else {
    setCookieWishlist("wishlist_array", "", -1);
    setCookieWishlist("wishlist_array_detailed", "", -1);
    contenido = '<div class="col-12"><p>Inicia una búsqueda para añadir tus destinos favoritos a tu lista.</p></div>'
  }
  window.document.getElementById("contenidoWLTabOne").innerHTML = contenido;
  $("#popupRemoverDestinoWL").remove();
});

/**************FIN DE FUNCIONES PARA QUITAR DESTINOS DEL WISHLIST**************** */


/*************FUNCIONES PARA IDENTIFICAR LA API DE TEALIUM ************************/
function checkUserProfile(callback) {
  setCookieWishlist("wishlist_array", utag_data.cookie_wishlist, 30);
  setCookieWishlist("wishlist_array_detailed", utag_data.cookie_wishlist_detailed, 30);
  setCookieWishlist("wishlist_array_new_destinations", utag_data.cookie_wishlist_new_destinations, 30);
  callback(); // Llamar al callback después de obtener la información de Tealium y crear la cookie
}

$(document).ready(function () {
  var cookieValidadora = getCookieWishlist("wishlist_available"); //Para no hacer tantos llamados
  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");

  if (cookieValidadora == null || cookieValidadora == undefined || cookieValidadora == '') {
    if (cookieList == null || cookieList == undefined || cookieList == '') {
      console.log("Getting info");
      checkUserProfile(function () {
        setCookieWishlist("wishlist_available", "Yes", 30);
      });
    }
  }

  //Para los dropdowns cuando hacen click fuera y se cierren
  const dropdowns = document.querySelectorAll(".dropdownAeropuerto");

  // Agregar el evento a cada elemento dropdownAeropuerto
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (event) {
      filterOptions(event);
    });
  });

  // Cierra la lista si se hace clic fuera del dropdown
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown-container")) {
      const lists = document.querySelectorAll(".dropdown-list");
      lists.forEach((list) => {
        list.style.display = "none";
      });
    }
  });


}); //Fin función ready function


/********FUNCIONES PARA VALIDAR RUTAS NUEVAS******* */
//Modal de alerta para vuelo
function showModalAlerta(titulo, mensaje) {
  var textoTitulo = titulo;
  var textoModal = mensaje;

  var mensajeExitoso = '<div class="cdk-overlay-container" id="popupModalAlerta"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalAlerta"  id="cerrarModalAlerta" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content=""><p>' + textoModal + '</p><div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $('body').append(mensajeExitoso);
}

$(document.body).on('click', '.cerrarModalAlerta', function (e) {
  $("#popupModalAlerta").remove();
});

function validaNuevasRutas() {
  var origin = $("#from-airport-wl-request").attr("data-value");
  var destination = $("#to-airport-wl-request").attr("data-value");
  var btnSubmitRuta = document.getElementById("btnSubmitRuta");
  var btnAuxGuardarRuta = document.getElementById("btnAuxGuardarRuta");

  if (origin == null || origin == '' || origin == undefined) {
    $("#from-airport-wl-request").addClass("input-error-nd");
  } else {
    $("#from-airport-wl-request").removeClass("input-error-nd");
  }
  if (destination == null || destination == '' || destination == undefined) {
    $("#to-airport-wl-request").addClass("input-error-nd");
  } else {
    $("#to-airport-wl-request").removeClass("input-error-nd");
  }

  if (origin == null || origin == '' || origin == undefined || destination == null || destination == '' || destination == undefined) { //Si está vacío alguno de los campos
    //showModalAlerta("Tiene que elegir algo");
    btnSubmitRuta.style.display = "none";
    btnAuxGuardarRuta.style.display = "block";
  } else {
    if (origin == destination) {
      btnSubmitRuta.style.display = "none";
      btnAuxGuardarRuta.style.display = "block";
      $('#from-airport-wl-request').removeAttr('data-value');
      $('#to-airport-wl-request').removeAttr('data-value');
      $("#form-rutas-nuevas input[type='text']").val("");
      showModalAlerta("Destinos similares", "El origen y destino deben ser distintos.");
      //alert("Elegir destino diferente");
    } else {
      //Para toda la parte del nuevo destino
      var wishlistNew = [];
      //var cookieListNew = getCookieWishlist("wishlist_array_new_destinations");
      cookieListNew = document.getElementById("new-destinations-wl-request").value;
      var valuesCookieNew = cookieListNew.split(",");
      for (var i = 0; i < valuesCookieNew.length; i++) {
        if (valuesCookieNew[i] !== "" && valuesCookieNew[i] !== "undefined") {
          wishlistNew.push(valuesCookieNew[i]);
        }
      }
      //Aqui se añade
      if (wishlistNew.includes(destination)) {
        // No hace nada, ya que el destino ya está en la lista de aeropuertos
        //alert("No se hace nada");
      } else {
        //alert("Se añade el destino" + destination);
        wishlistNew.push(destination);
      }
      $("#new-destinations-wl-request").val(wishlistNew);

      btnSubmitRuta.style.display = "block";
      btnAuxGuardarRuta.style.display = "none";
    }
  }
};

$(document.body).on('submit', '#form-rutas-nuevas', function (event) {
  // Detener el envío del formulario
  event.preventDefault();
  var formData = $(this).serialize();

  // Enviar los datos utilizando AJAX
  $.ajax({
    type: "POST",
    url: $(this).attr("action"),
    data: formData,
    //data: { "from-airport-wl-request": origin, "to-airport-wl-request": destination, "new-destinations-wl-request": newDestinations },
    success: function (response) {
      // Manejar la respuesta
      showModalAlerta("Destino añadido exitosamente", "Te notificaremos en caso de abrir una nueva ruta.");
      //$("#form-rutas-nuevas input[type='text']").data('value', '');
      //$("#form-rutas-nuevas input[type='text']").data('value',null);
      $('#from-airport-wl-request').removeAttr('data-value');
      $('#to-airport-wl-request').removeAttr('data-value');
      $("#form-rutas-nuevas input[type='text']").val("");

      var miElemento = document.getElementById("btnSubmitRuta");
      miElemento.style.display = "none";
      var btnAuxGuardarRuta = document.getElementById("btnAuxGuardarRuta");
      btnAuxGuardarRuta.style.display = "block";

      var wishlistNew = document.getElementById("new-destinations-wl-request").value;
      setCookieWishlist("wishlist_array_new_destinations", wishlistNew, 30);
      //var wishlistNewString = arrayToString(wishlistNew, ",");
      var nuevasRutas = newRoutesContent(wishlistNew);
      $("#newRoutesContent").html(nuevasRutas);
    },
    error: function (xhr, status, error) {
      console.log(xhr.responseText);
    }
  });
});

/**************FUNCIONES PARA QUITAR DESTINOS NUEVOS DEL WISHLIST**************** */
function modalRemoveNewDestination(destination) {
  var textoModal = "¿Estás seguro que quieres quitar este destino?";
  var textoBoton = "Remover";
  var textoDescarte = "Cancelar";

  var wishlistList = [];
  //var cookieList = getCookieWishlist("wishlist_array_new_destinations");
  var cookieList = document.getElementById("new-destinations-wl-request").value;

  var valuesCookie = cookieList.split(",");
  for (var i = 0; i < valuesCookie.length; i++) {
    if (valuesCookie[i] !== destination) {
      wishlistList.push(valuesCookie[i]);
    }
  }

  var inputsDestinos = '<input type="hidden" id="wishlist-list-new-remove" name="wishlist-list-new-remove" value="' + wishlistList + '"><input type="hidden" id="new-destination-removed" name="new-destination-removed" value="' + destination + '">';

  var mensajeExitoso =
    '<div class="cdk-overlay-container" id="popupRemoverNewDestinoWL"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout" style="padding: 10px;"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog btnCerrarRemoverNewWL" id="btnCerrarRemoverNewWL" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a></div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p>' +
    textoModal +
    '</p><div class="row"><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-secondary btnCerrarRemoverNewWL" color="secondary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoDescarte +
    '</span></a></div><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-primary btnRemoverNewDestinoWL" data-wishlist="' + wishlistList + '" id="btnRemoverNewDestinoWL" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoBoton +
    '</span></a></div></div>' + inputsDestinos + ' <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';

  $("body").append(mensajeExitoso);
}

$(document.body).on("click", ".btnCerrarRemoverNewWL", function (e) {
  $("#popupRemoverNewDestinoWL").remove();
});

//Quitar destino de wishlist
$(document.body).on('click', '.close-new-destinations', function (e) {
  var destination = $(this).attr("data-destination");
  modalRemoveNewDestination(destination);
});

$(document.body).on('click', '.btnRemoverNewDestinoWL', function (e) {
  var cookieList = $(this).attr("data-wishlist");
  var contenido = "";

  var valorNuevo = document.getElementById("wishlist-list-new-remove").value;
  $("#new-destinations-wl-request").val(valorNuevo);

  if (cookieList !== null && cookieList !== undefined && cookieList !== '' && cookieList !== 'undefined') {
    contenido = newRoutesContent(cookieList);
    setCookieWishlist("wishlist_array_new_destinations", cookieList, 30);
  } else {
    setCookieWishlist("wishlist_array_new_destinations", "", -1);
    //contenido = '<div class="col-12"><p>Inicia una búsqueda para añadir tus destinos favoritos a tu lista.</p></div>';
  }
  window.document.getElementById("newRoutesContent").innerHTML = contenido;
  $("#popupRemoverNewDestinoWL").remove();
});

/**************FIN DE FUNCIONES PARA QUITAR DESTINOS NUEVOS DEL WISHLIST**************** */
}, "dependencies": []}, {"id": "f0439168cf874653954cb3693d6c5da4", "type": "append", "selector": "head", "value": "<style>@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\");\n\n.icon-corazon-header, .icon-heart-header {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n\n.icon-corazon-header {\n  font-size: 12px !important;\n}\n\nheader #MainHeader #SignInUp ul li#wlm {\n  height: 26px;\n  line-height: 26px;\n  margin: 5px 0 9px;\n  padding: 0 16px;\n  /*border-left: 1px solid #e6e6e6;*/\n  border-right: 1px solid #e6e6e6;\n}\n\nheader #MainHeader #SignInUp ul li#wlm a {\n  color: #a12885;\n  font-size: 12px;\n  /*margin-right: -7px;*/\n  height: 26px;\n  line-height: 26px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 3px;\n}\n\n.wl-main-title {\n  font-size: 18px;\n  margin-bottom: 10px;\n  line-height: 22px;\n  color: #080206;\n}\n.remove-wl-box {\n  color: #6b676a;\n}\n\n.remove-wl-box:before {\n  font-size: 18px;\n}\n\n.caja-destino {\n  display: flex;\n  background: #ffffff;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border-width: 1px;\n  border-color: #0000001a;\n  flex: 0 0 310px;\n  /*min-width: 310px;*/\n  width: 100%;\n  text-align: left;\n  height: 140px;\n  position: relative;\n  pointer-events: auto;\n  margin-bottom: 20px;\n}\n\n.caja-destino-borde {\n  height: 100%;\n  width: 0.5rem;\n  background: rgb(161, 40, 133);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n}\n\n.caja-destino-contenido {\n  position: relative;\n  width: 104px;\n  flex: 0 0 90px;\n}\n\n.caja-destino-contenido::before {\n  height: 0px;\n  content: \"\";\n  display: block;\n  padding-bottom: 133.333%;\n}\n\n.caja-destino-contenido > img,\n.caja-destino-contenido > video {\n  object-fit: cover;\n}\n\n.caja-destino-contenido > :not(style) {\n  overflow: hidden;\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 100%;\n  height: 115%;\n}\n\n.caja-destino-texto {\n  padding-inline-start: 0.75rem;\n  padding-inline-end: 0.75rem;\n  padding-top: 0px;\n  padding-bottom: 0.5rem;\n  color: #080206;\n  flex: 1 1 auto;\n  min-width: 0.25rem;\n}\n\n.caja-destino-titulo {\n  /*font-size: 1rem;*/\n  font-size: 20px;\n  /*font-weight: 700;*/\n  font-weight: bold;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  /*margin: 0;*/\n  margin-bottom: 10px !important;\n  line-height: 25px;\n}\n\n.caja-destino-fecha {\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n\n.caja-destino-precio {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: rgb(161, 40, 133);\n  margin-top: 1rem;\n}\n\n.caja-destino-disclaimer {\n  margin-top: 0.25rem;\n  font-size: 10px;\n  color: #00000099;\n}\n\n.effect-apollo img {\n  opacity: 0.95;\n  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\n  transition: opacity 0.35s, transform 0.35s;\n  -webkit-transform: scale3d(1.05, 1.05, 1);\n  transform: scale3d(1.05, 1.05, 1);\n}\n\n.effect-apollo:hover img {\n  opacity: 0.6;\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n}\n\n.figcaption::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.5);\n  content: \"\";\n  -webkit-transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, -100%, 0);\n  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, -100%, 0);\n}\n\n.figcaption:hover::before {\n  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, 100%, 0);\n  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, 100%, 0);\n}\n\n.caja-destino-texto p {\n  margin-bottom: 5px;\n}\n\n.caja-destino-texto p:nth-of-type(2) {\n  color: #00000099;\n  font-size: 14px;\n  line-height: 17px;\n}\n\n.caja-destino-texto p:nth-of-type(3),\n.caja-destino-texto p:nth-of-type(4) {\n  font-size: 14px;\n  line-height: 17px;\n}\n\n/* ===== Scrollbar CSS ===== */\n/* Firefox */\n.wishlist-bucket {\n  scrollbar-width: auto;\n  scrollbar-color: #7a7a7a #f2f2f2;\n}\n\n/* Chrome, Edge, and Safari */\n.wishlist-bucket::-webkit-scrollbar {\n  width: 16px;\n}\n\n.wishlist-bucket::-webkit-scrollbar-track {\n  background: #f2f2f2;\n}\n\n.wishlist-bucket::-webkit-scrollbar-thumb {\n  background-color: #7a7a7a;\n  border-radius: 10px;\n  border: 5px solid #f2f2f2;\n}\n\n.remove-wishlist {\n  position: absolute;\n  right: 5px;\n  top: 3px !important;\n}\n\n.tab-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.tab-button {\n  background-color: #f1f1f1;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.tab-button:hover {\n  background-color: #ddd;\n}\n\n.tab-content {\n  display: none;\n  margin-top: 20px;\n}\n\n.tab-content.active {\n  display: block;\n}\n\n/*Dropdown*/\n/*.dropdown-container {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  margin: 10px;\n}\n\n.dropdown-input {\n  width: 200px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.dropdown-list {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  max-height: 200px;\n  overflow-y: auto;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.dropdown-item {\n  padding: 5px;\n  cursor: pointer;\n}\n\n.dropdown-item:hover {\n  background-color: #f2f2f2;\n}\n\n.dropdownAeropuerto {\n  width: 100%;\n  height: 40px;\n}*/\n\n/* Menu Wishlist */\n.knobs,\n.layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.button-wl-menu {\n  position: relative;\n  top: 50%;\n  width: 100%;\n  height: 36px;\n  margin: -20px auto 0 auto;\n  overflow: hidden;\n}\n\n.button-wl-menu.r,\n.button-wl-menu.r .layer {\n  border-radius: 100px;\n}\n\n.button-wl-menu.b2 {\n  border-radius: 2px;\n}\n\n.checkbox {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.knobs {\n  z-index: 2;\n}\n\n.layer {\n  width: 100%;\n  background-color: #ffffff;\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n\n/* Button 10 */\n#menu-wishlist {\n  border: 1px solid #ccc !important;\n  border-radius: 16px;\n  width: 70%;\n}\n\n#menu-wishlist .knobs:before,\n#menu-wishlist .knobs:after,\n#menu-wishlist .knobs span {\n  position: absolute;\n  top: 4px;\n  width: 50%;\n  height: 27px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 0.7;\n  padding: 9px 4px;\n  border-radius: 2px;\n  transition: 0.3s ease all;\n  font-size: 13px;\n}\n\n#menu-wishlist .knobs:before {\n  content: \"\";\n  left: 4px;\n  background-color: #a12885;\n  border-radius: 20px;\n}\n\n#menu-wishlist .knobs:after {\n  content: \"Nuevos destinos\";\n  right: 4px;\n  color: #4e4e4e;\n}\n\n#menu-wishlist .knobs span {\n  display: inline-block;\n  left: 4px;\n  color: #fff;\n  z-index: 1;\n}\n\n#menu-wishlist .checkbox:checked + .knobs span {\n  color: #4e4e4e;\n}\n\n#menu-wishlist .checkbox:checked + .knobs:before {\n  left: 49%;\n  background-color: #a12885;\n}\n\n#menu-wishlist .checkbox:checked + .knobs:after {\n  color: #fff;\n}\n\n#menu-wishlist .checkbox:checked ~ .layer {\n  background-color: #ffffff;\n}\n\n/*Para la alerta de vuelo compartido*/\n.check_circle {\n  color: #427f10;\n  font-size: 65px;\n  padding-bottom: 30px;\n  text-align: center;\n  width: 100%;\n}\n\n/*Dropdoen */\n.dropdownAeropuerto {\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc !important;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  margin-top: 10px;\n  width: 100%;\n  font: inherit;\n  position: relative;\n}\n\n.input-group-addon.volaris {\n  color: rgb(255, 255, 255);\n  background-color: rgb(250, 250, 250);\n  border-color: rgb(212, 63, 58);\n  position: absolute;\n  right: 16px;\n  width: 8%;\n  height: 33px;\n  top: 12px;\n  border-radius: 5px;\n}\n\n.arrow-voi {\n  color: #a12885;\n  size: 10px;\n  font-size: 35px;\n  margin-left: -5px;\n}\n\n.dropdown-list {\n  display: block;\n  z-index: 10;\n  position: absolute;\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  max-height: 200px;\n  overflow-y: overlay;\n  width: 93%;\n  margin-top: -30px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n.dropdown-item {\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n}\n\n#tab1 {\n  display: block;\n  width: 48vw;\n  padding: 10px 30px;\n  height: 60vh;\n}\n\n#tab2 {\n  display: block;\n  width: 48vw;\n  padding: 10px 50px;\n  height: 60vh;\n  display: none;\n}\n\n.compass-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #a12885;\n}\n\n.close-new-destinations {\n  color: #6b676a;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.caja-destinos-nuevos {\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc !important;\n  border-radius: 10px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  width: 108%;\n  font: inherit;\n}\n\n.caja-destinos-nuevos-title {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 10px !important;\n  max-height: 4.5em; /* Altura m\u00e1xima de cuatro l\u00edneas */\n  /*overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; */ /* Evitar que el texto se ajuste autom\u00e1ticamente */\n}\n\ndiv.caja-destinos-nuevos-title {\n  display: -webkit-box;\n  max-height: 3em; /* Altura m\u00e1xima de tres l\u00edneas */\n  overflow: hidden;\n  -webkit-line-clamp: 3; /* N\u00famero de l\u00edneas que se mostrar\u00e1n */\n  -webkit-box-orient: vertical;\n  line-height: 1.2; /* Ajusta la altura de l\u00ednea seg\u00fan tus necesidades */\n}\n\n.truncate-container {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  position: relative;\n  line-height: 1.2;\n  max-height: calc(2 * 1.2em); /* Altura m\u00e1xima para dos l\u00edneas */\n}\n.truncate-text {\n  display: inline;\n  position: relative;\n  z-index: 1;\n}\n/*.fadeout {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%);\n  width: 50px;\n  height: 1.2em;\n  z-index: 2;\n}*/\n\n.caja-destinos-nuevos-subtitle {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.nuevos-destinos-boxes {\n  margin-top: 32px;\n}\n\n#newRoutesContent {\n  max-height: 150px;\n  overflow-y: overlay;\n}\n\n#contenidoWLTabOne {\n  max-height: 58vh;\n  overflow-y: overlay;\n}\n\n.input-error-nd {\n  border: 2px solid #a12885 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  #tab2 {\n    width: 100%;\n    padding: 10px 40px;\n  }\n\n  #tab1 {\n    width: 100%;\n  }\n\n  #menu-wishlist {\n    width: 90%;\n  }\n}</style>", "dependencies": []}, {"operator": "before", "dependencies": [], "value": "<li id=\"wlm\"><a id=\"btnMiWishlist\" href=\"javascript:void(0);\" class=\"btn-wishlist-logged\"><span class=\"material-symbols-outlined icon-corazon-header\">favorite</span><span _ngcontent-nbt-c1=\"\">Mis Favoritos</span></a></li>", "type": "append", "id": "b61d9bdf05784e23b576b54fdde8346a", "selector": "#LoggedIn"}, {"id": "86c2f6a7e34f466a89bc484163430d7f", "type": "append", "dependencies": [], "selector": "#SignInUp > ul.d-lg-none.sign-sm > li:nth-child(1)", "value": "<li>\n    <a id=\"btn-wishlist-responsive\" href=\"javascript:void(0);\" class=\"ng-star-inserted btn-wishlist-logged\" style=\"margin-top: 8px;\">\n        <span class=\"material-symbols-outlined icon-heart-header\">\n            favorite\n        </span>\n    </a>\n</li>", "operator": "before"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "9fe64fbe76234d55a2ebb9ced67caf62", "selector": "#btn-wishlist-responsive"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "6a2bcb2c8e464fd39dbfb4312bbdd5d3", "selector": "#btnMiWishlist"}]}, {"viewId": "25155420995", "changes": [{"css": {}, "dependencies": [], "attributes": {"remove": true}, "type": "attribute", "id": "5832cdd1674d451e97dae7bbb3987251", "selector": "#wlm"}, {"css": {}, "dependencies": [], "attributes": {"remove": true}, "type": "attribute", "id": "31d9daa63aa94ecab500c5378b333bfb", "selector": "#btn-wishlist-responsive"}]}, {"viewId": "25176760426", "changes": [{"id": "183416f1447540ed91469ea61b982332", "type": "custom_code", "value": function($){function airportNameIng(aeropuerto) {
  switch (aeropuerto) {
    case "ABQ":
      myDestination = "Albuquerque";
      break;
    case "ACA":
      myDestination = "Acapulco";
      break;
    case "AGU":
      myDestination = "Aguascalientes";
      break;
    case "ALB":
      myDestination = "Albany";
      break;
    case "ATL":
      myDestination = "Atlanta";
      break;
    case "AUS":
      myDestination = "Austin";
      break;
    case "BDL":
      myDestination = "Bradley";
      break;
    case "BHM":
      myDestination = "Birmingham";
      break;
    case "BIL":
      myDestination = "Billings";
      break;
    case "BIS":
      myDestination = "Bismarck";
      break;
    case "BJX":
      myDestination = "Leon";
      break;
    case "BKG":
      myDestination = "Branson";
      break;
    case "BLB":
      myDestination = "Balboa Airport";
      break;
    case "BMI":
      myDestination = "Illinois";
      break;
    case "BNA":
      myDestination = "Nashville";
      break;
    case "BOG":
      myDestination = "Bogota";
      break;
    case "BOI":
      myDestination = "Boise";
      break;
    case "BOS":
      myDestination = "Boston";
      break;
    case "BTV":
      myDestination = "Burlington";
      break;
    case "BUF":
      myDestination = "Buffalo";
      break;
    case "BWI":
      myDestination = "Baltimore";
      break;
    case "BZN":
      myDestination = "Bozeman";
      break;
    case "CEN":
      myDestination = "Ciudad Obregon";
      break;
    case "CHS":
      myDestination = "Charleston";
      break;
    case "CID":
      myDestination = "Cedar Rapids";
      break;
    case "CJS":
      myDestination = "Ciudad Juarez";
      break;
    case "CLE":
      myDestination = "Cleveland";
      break;
    case "CLQ":
      myDestination = "Colima";
      break;
    case "CLT":
      myDestination = "Charlotte";
      break;
    case "CME":
      myDestination = "Ciudad Del Carmen ";
      break;
    case "CMH":
      myDestination = "Columbus";
      break;
    case "COS":
      myDestination = "Colorado Springs";
      break;
    case "CPE":
      myDestination = "Campeche";
      break;
    case "CTM":
      myDestination = "Chetumal";
      break;
    case "CUL":
      myDestination = "Culiacan";
      break;
    case "CUN":
      myDestination = "Cancun";
      break;
    case "CUU":
      myDestination = "Chihuahua";
      break;
    case "CVG":
      myDestination = "Cincinnati";
      break;
    case "CZM":
      myDestination = "Cozumel";
      break;
    case "DCA":
      myDestination = "Washington D.C.";
      break;
    case "DEN":
      myDestination = "Denver";
      break;
    case "DFW":
      myDestination = "Dallas - Fort Worth";
      break;
    case "DGO":
      myDestination = "Durango";
      break;
    case "DSM":
      myDestination = "Des Moines";
      break;
    case "DTW":
      myDestination = "Detroit";
      break;
    case "ELP":
      myDestination = "El Paso";
      break;
    case "EWR":
      myDestination = "Newark";
      break;
    case "FAR":
      myDestination = "Fargo";
      break;
    case "FAT":
      myDestination = "Fresno";
      break;
    case "FLL":
      myDestination = "Fort Lauderdale";
      break;
    case "FSD":
      myDestination = "Sioux Falls";
      break;
    case "GDL":
      myDestination = "Guadalajara";
      break;
    case "GEG":
      myDestination = "Spokane";
      break;
    case "GRB":
      myDestination = "Green Bay";
      break;
    case "GRR":
      myDestination = "Grand Rapids";
      break;
    case "GSO":
      myDestination = "Greensboro";
      break;
    case "GSP":
      myDestination = "Greenville";
      break;
    case "GUA":
      myDestination = "Guatemala";
      break;
    case "HMO":
      myDestination = "Hermosillo";
      break;
    case "HRL":
      myDestination = "Valley";
      break;
    case "HSV":
      myDestination = "Huntsville";
      break;
    case "HUX":
      myDestination = "Huatulco";
      break;
    case "IAD":
      myDestination = "Dulles Washington";
      break;
    case "IAH":
      myDestination = "Houston";
      break;
    case "ICT":
      myDestination = "Wichita";
      break;
    case "IND":
      myDestination = "Indianapolis";
      break;
    case "ISP":
      myDestination = "Long Island";
      break;
    case "JAC":
      myDestination = "Jackson Hole";
      break;
    case "JAN":
      myDestination = "Jackson-Evers";
      break;
    case "JAX":
      myDestination = "Jacksonville";
      break;
    case "JFK":
      myDestination = "New York";
      break;
    case "LAP":
      myDestination = "La Paz";
      break;
    case "LAS":
      myDestination = "Las Vegas";
      break;
    case "LAX":
      myDestination = "Los Angeles";
      break;
    case "LFT":
      myDestination = "Lafayette";
      break;
    case "LGA":
      myDestination = "La Guardia";
      break;
    case "LIT":
      myDestination = "Little Rock";
      break;
    case "LMM":
      myDestination = "Los Mochis";
      break;
    case "LTO":
      myDestination = "Loreto";
      break;
    case "MCI":
      myDestination = "Kansas City";
      break;
    case "MCO":
      myDestination = "Orlando";
      break;
    case "MDT":
      myDestination = "Harrisburg";
      break;
    case "MDW":
      myDestination = "Chicago Midway";
      break;
    case "MEM":
      myDestination = "Memphis";
      break;
    case "MEX":
      myDestination = "Mexico City (AICM)";
      break;
    case "MGA":
      myDestination = "Managua";
      break;
    case "MIA":
      myDestination = "Miami";
      break;
    case "MID":
      myDestination = "Merida";
      break;
    case "MKE":
      myDestination = "Milwaukee";
      break;
    case "MLM":
      myDestination = "Morelia";
      break;
    case "MSL":
      myDestination = "Muscle Shoals";
      break;
    case "MSN":
      myDestination = "Madison";
      break;
    case "MSO":
      myDestination = "Missoula";
      break;
    case "MSP":
      myDestination = "Minneapolis";
      break;
    case "MSY":
      myDestination = "New Orleans";
      break;
    case "MTY":
      myDestination = "Monterrey";
      break;
    case "MXL":
      myDestination = "Mexicali";
      break;
    case "MYR":
      myDestination = "Myrtle Beach";
      break;
    case "MZT":
      myDestination = "Mazatlan";
      break;
    case "NLU":
      myDestination = "Mexico City (AIFA)";
      break;
    case "OAK":
      myDestination = "Oakland";
      break;
    case "OAX":
      myDestination = "Oaxaca";
      break;
    case "OKC":
      myDestination = "Oklahoma City";
      break;
    case "OMA":
      myDestination = "Omaha";
      break;
    case "ONT":
      myDestination = "Ontario";
      break;
    case "ORD":
      myDestination = "Chicago (O Hare)";
      break;
    case "ORF":
      myDestination = "Norfolk";
      break;
    case "PBC":
      myDestination = "Puebla";
      break;
    case "PBI":
      myDestination = "Palm Beach";
      break;
    case "PDX":
      myDestination = "Portland";
      break;
    case "PHL":
      myDestination = "Philadelphia";
      break;
    case "PHX":
      myDestination = "Phoenix";
      break;
    case "PIT":
      myDestination = "Pittsburgh";
      break;
    case "PNS":
      myDestination = "Pensacola";
      break;
    case "PPE":
      myDestination = "Puerto Penasco";
      break;
    case "PSM":
      myDestination = "Portsmouth";
      break;
    case "PSP":
      myDestination = "Palm Springs";
      break;
    case "PVD":
      myDestination = "Warwick";
      break;
    case "PVR":
      myDestination = "Puerto Vallarta";
      break;
    case "PWM":
      myDestination = "Portland, ME";
      break;
    case "PXM":
      myDestination = "Puerto Escondido";
      break;
    case "QRO":
      myDestination = "Queretaro";
      break;
    case "RDU":
      myDestination = "Raleigh";
      break;
    case "REX":
      myDestination = "Reynosa";
      break;
    case "RFD":
      myDestination = "Chicago Rockford";
      break;
    case "RNO":
      myDestination = "Reno";
      break;
    case "RSW":
      myDestination = "Fort Myers";
      break;
    case "SAL":
      myDestination = "San Salvador";
      break;
    case "SAN":
      myDestination = "San Diego";
      break;
    case "SAT":
      myDestination = "San Antonio";
      break;
    case "SAV":
      myDestination = "Savannah";
      break;
    case "SBA":
      myDestination = "Santa Barbara";
      break;
    case "SBD":
      myDestination = "San Bernardino";
      break;
    case "SDF":
      myDestination = "Louisville";
      break;
    case "SEA":
      myDestination = "Seattle";
      break;
    case "SFO":
      myDestination = "San Francisco";
      break;
    case "SJC":
      myDestination = "San Jose, California";
      break;
    case "SJD":
      myDestination = "Los Cabos";
      break;
    case "SJO":
      myDestination = "San Jose, Costa Rica";
      break;
    case "SLC":
      myDestination = "Salt Lake City";
      break;
    case "SLP":
      myDestination = "San Luis Potosi";
      break;
    case "SMF":
      myDestination = "Sacramento";
      break;
    case "SNA":
      myDestination = "Santa Ana";
      break;
    case "SRQ":
      myDestination = "Bradenton";
      break;
    case "STL":
      myDestination = "St. Louis";
      break;
    case "SYR":
      myDestination = "Syracuse";
      break;
    case "TAM":
      myDestination = "Tampico";
      break;
    case "TAP":
      myDestination = "Tapachula";
      break;
    case "TGZ":
      myDestination = "Tuxtla Gutierrez";
      break;
    case "TIJ":
      myDestination = "Tijuana";
      break;
    case "TLC":
      myDestination = "Toluca";
      break;
    case "TPA":
      myDestination = "Tampa";
      break;
    case "TPQ":
      myDestination = "Tepic";
      break;
    case "TRC":
      myDestination = "Torreon";
      break;
    case "TTN":
      myDestination = "Trenton";
      break;
    case "TUL":
      myDestination = "Tulsa";
      break;
    case "TUS":
      myDestination = "Tucson";
      break;
    case "TYR":
      myDestination = "Pounds Field";
      break;
    case "TYS":
      myDestination = "Knoxville";
      break;
    case "UPN":
      myDestination = "Uruapan";
      break;
    case "VER":
      myDestination = "Veracruz";
      break;
    case "VSA":
      myDestination = "Villahermosa";
      break;
    case "XNA":
      myDestination = "Fayettville";
      break;
    case "ZCL":
      myDestination = "Zacatecas";
      break;
    case "ZIH":
      myDestination = "Ixtapa / Zihuatanejo";
      break;
    case "LIM":
      myDestination = "Lima";
      break;
    case "QMX":
      myDestination = "Mexico City (All Airports)";
      break;
    case "QLA":
      myDestination = "Los Angeles (All Airports)";
      break;
    default:
      myDestination = "Airport";
      break;
  }
  return myDestination;
}

//Aeropuertos
const optionsJSON = [
  { value: "ATL", text: "Hartsfield–Jackson Atlanta International Airport (ATL), Atlanta, United States" },
  { value: "LAX", text: "Los Angeles International Airport (LAX), Los Angeles, United States" },
  { value: "ORD", text: "O'Hare International Airport (ORD), Chicago, United States" },
  { value: "DFW", text: "Dallas-Fort Worth International Airport (DFW), Dallas, United States" },
  { value: "DEN", text: "Denver International Airport (DEN), Denver, United States" },
  { value: "JFK", text: "John F. Kennedy International Airport (JFK), New York, United States" },
  { value: "SFO", text: "San Francisco International Airport (SFO), San Francisco, United States" },
  { value: "LAS", text: "McCarran International Airport (LAS), Las Vegas, United States" },
  { value: "YYZ", text: "Toronto Pearson International Airport (YYZ), Toronto, Canada" },
  { value: "SEA", text: "Seattle–Tacoma International Airport (SEA), Seattle, United States" },
  { value: "CLT", text: "Charlotte Douglas International Airport (CLT), Charlotte, United States" },
  { value: "MCO", text: "Orlando International Airport (MCO), Orlando, United States" },
  { value: "MIA", text: "Miami International Airport (MIA), Miami, United States" },
  { value: "PHX", text: "Phoenix Sky Harbor International Airport (PHX), Phoenix, United States" },
  { value: "EWR", text: "Newark Liberty International Airport (EWR), Newark, United States" },
  { value: "IAH", text: "George Bush Intercontinental Houston Airport (IAH), Houston, United States" },
  { value: "MSP", text: "St Paul International Airport (MSP), Minneapolis, United States" },
  { value: "BOS", text: "Logan International Airport (BOS), Boston, United States" },
  { value: "DTW", text: "Detroit Metropolitan Wayne County Airport (DTW), Detroit, United States" },
  { value: "FLL", text: "Fort Lauderdale Hollywood International Airport (FLL), Fort Lauderdale, United States" },
  { value: "ORL", text: "Orlando Executive Airport (ORL), Orlando, United States" },
  { value: "LGA", text: "LaGuardia Airport (LGA), New York, United States" },
  { value: "PHL", text: "Philadelphia International Airport (PHL), Philadelphia, United States" },
  { value: "BWI", text: "Washington International Thurgood Marshall Airport (BWI), Baltimore, United States" },
  { value: "SLC", text: "Salt Lake City International Airport (SLC), Salt Lake City, United States" },
  { value: "YVR", text: "Vancouver International Airport (YVR), Vancouver, Canada" },
  { value: "DCA", text: "Ronald Reagan Washington National Airport (DCA), Washington, United States" },
  { value: "IAD", text: "Washington Dulles International Airport (IAD), Washington, United States" },
  { value: "MDW", text: "Midway International Airport (MDW), Chicago, United States" },
  { value: "SAN", text: "San Diego International Airport (SAN), San Diego, United States" },
  { value: "HNL", text: "Daniel K. Inouye International Airport (HNL), Honolulu, United States" },
  { value: "TPA", text: "Tampa International Airport (TPA), Tampa, United States" },
  { value: "PDX", text: "Portland International Airport (PDX), Portland, United States" },
  { value: "YUL", text: "Montréal–Pierre Elliott Trudeau International Airport (YUL), Montreal, Canada" },
  { value: "YYC", text: "Calgary International Airport (YYC), Calgary, Canada" },
  { value: "DAL", text: "Dallas Love Field (DAL), Dallas, United States" },
  { value: "STL", text: "Lambert St Louis International Airport (STL), St. Louis, United States" },
  { value: "BNA", text: "Nashville International Airport (BNA), Nashville, United States" },
  { value: "AUS", text: "Austin Bergstrom International Airport (AUS), Austin, United States" },
  { value: "HOU", text: "William P Hobby Airport (HOU), Houston, United States" },
  { value: "OAK", text: "Metropolitan Oakland International Airport (OAK), Oakland, United States" },
  { value: "SJC", text: "Norman Y. Mineta San Jose International Airport (SJC), San Jose, United States" },
  { value: "MSY", text: "Louis Armstrong New Orleans International Airport (MSY), New Orleans, United States" },
  { value: "RDU", text: "Raleigh–Durham International Airport (RDU), Raleigh, United States" },
  { value: "MCI", text: "Kansas City International Airport (MCI), Kansas City, United States" },
  { value: "SMF", text: "Sacramento International Airport (SMF), Sacramento, United States" },
  { value: "SNA", text: "John Wayne Airport-Orange County Airport (SNA), Santa Ana, United States" },
  { value: "CLE", text: "Cleveland Hopkins International Airport (CLE), Cleveland, United States" },
  { value: "SAT", text: "San Antonio International Airport (SAT), San Antonio, United States" },
  { value: "PIT", text: "Pittsburgh International Airport (PIT), Pittsburgh, United States" },
  { value: "RSW", text: "Southwest Florida International Airport (RSW), Fort Myers, United States" },
  { value: "IND", text: "Indianapolis International Airport (IND), Indianapolis, United States" },
  { value: "CVG", text: "Cincinnati Northern Kentucky International Airport (CVG), Cincinnati, United States" },
  { value: "YEG", text: "Edmonton International Airport (YEG), Edmonton, Canada" },
  { value: "CMH", text: "Port Columbus International Airport (CMH), Columbus, United States" },
  { value: "BDL", text: "Bradley International Airport (BDL), Windsor Locks, United States" },
  { value: "PBI", text: "Palm Beach International Airport (PBI), West Palm Beach, United States" },
  { value: "JAX", text: "Jacksonville International Airport (JAX), Jacksonville, United States" },
  { value: "ANC", text: "Ted Stevens Anchorage International Airport (ANC), Anchorage, United States" },
  { value: "ABQ", text: "Albuquerque International Sunport Airport (ABQ), Albuquerque, United States" },
  { value: "YOW", text: "Ottawa Macdonald–Cartier International Airport (YOW), Ottawa, Canada" },
  { value: "BUF", text: "Buffalo Niagara International Airport (BUF), Buffalo, United States" },
  { value: "OMA", text: "Eppley Airfield (OMA), Omaha, United States" },
  { value: "YWG", text: "Winnipeg James Armstrong Richardson International Airport (YWG), Winnipeg, Canada" },
  { value: "ONT", text: "Ontario International Airport (ONT), Ontario, United States" },
  { value: "YHZ", text: "Halifax Stanfield International Airport (YHZ), Halifax, Canada" },
  { value: "PVD", text: "T. F. Green Airport (PVD), Providence, United States" },
  { value: "MKE", text: "General Mitchell International Airport (MKE), Milwaukee, United States" },
  { value: "KOA", text: "Kona International At Keahole Airport (KOA), Kona, United States" },
  { value: "LGB", text: "Long Beach Airport (LGB), Long Beach, United States" },
  { value: "LIH", text: "Lihue Airport (LIH), Lihue, United States" },
  { value: "ELP", text: "El Paso International Airport (ELP), El Paso, United States" },
  { value: "YTZ", text: "Billy Bishop Toronto City Centre Airport (YTZ), Toronto, Canada" },
  { value: "SFB", text: "Orlando Sanford International Airport (SFB), Sanford, United States" },
  { value: "ALB", text: "Albany International Airport (ALB), Albany, United States" },
  { value: "BUR", text: "Bob Hope Airport (BUR), Burbank, United States" },
  { value: "PSP", text: "Palm Springs International Airport (PSP), Palm Springs, United States" },
  { value: "SYR", text: "Syracuse Hancock International Airport (SYR), Syracuse, United States" },
  { value: "YYJ", text: "Victoria International Airport (YYJ), Victoria, Canada" },
  { value: "YLW", text: "Kelowna International Airport (YLW), Kelowna, Canada" },
  { value: "PWM", text: "Portland International Jetport Airport (PWM), Portland, United States" },
  { value: "YQB", text: "Québec City Jean Lesage International Airport (YQB), Quebec, Canada" },
  { value: "PNS", text: "Pensacola Regional Airport (PNS), Pensacola, United States" },
  { value: "MHT", text: "Manchester Airport (MHT), Manchester NH, United States" },
  { value: "HPN", text: "Westchester County Airport (HPN), White Plains, United States" },
  { value: "YXE", text: "Saskatoon John G. Diefenbaker International Airport (YXE), Saskatoon, Canada" },
  { value: "ITO", text: "Hilo International Airport (ITO), Hilo, United States" },
  { value: "YQR", text: "Regina International Airport (YQR), Regina, Canada" },
  { value: "SRQ", text: "Sarasota Bradenton International Airport (SRQ), Sarasota, United States" },
  { value: "ROC", text: "Greater Rochester International Airport (ROC), Rochester, United States" },
  { value: "BTV", text: "Burlington International Airport (BTV), Burlington, United States" },
  { value: "PIE", text: "St Petersburg Clearwater International Airport (PIE), St. Petersburg, United States" },
  { value: "ECP", text: "Northwest Florida Beaches International Airport (ECP), Panama City, United States" },
  { value: "FAT", text: "Fresno Yosemite International Airport (FAT), Fresno, United States" },
  { value: "MFE", text: "Mc Allen Miller International Airport (MFE), Mcallen, United States" },
  { value: "TLH", text: "Tallahassee Regional Airport (TLH), Tallahassee, United States" },
  { value: "AMA", text: "Rick Husband Amarillo International Airport (AMA), Amarillo, United States" },
  { value: "SBA", text: "Santa Barbara Municipal Airport (SBA), Santa Barbara, United States" },
  { value: "ISP", text: "Long Island Mac Arthur Airport (ISP), Islip, United States" },
  { value: "MEX", text: "Mexico City International Airport (MEX), Ciudad de México, Mexico" },
  { value: "GRU", text: "São Paulo–Guarulhos International Airport (GRU), Sao Paulo, Brazil" },
  { value: "BOG", text: "El Dorado International Airport (BOG), Bogotá, Colombia" },
  { value: "CUN", text: "Cancún International Airport (CUN), Cancún, Mexico" },
  { value: "SCL", text: "Comodoro Arturo Merino Benítez International Airport (SCL), Santiago, Chile" },
  { value: "LIM", text: "Jorge Chávez International Airport (LIM), Lima, Peru" },
  { value: "CGH", text: "São Paulo–Congonhas Airport (CGH), Sao Paulo, Brazil" },
  { value: "BSB", text: "Presidente Juscelino Kubistschek International Airport (BSB), Brasilia, Brazil" },
  { value: "GIG", text: "Rio de Janeiro–Galeão International Airport (GIG), Rio De Janeiro, Brazil" },
  { value: "PTY", text: "Tocumen International Airport (PTY), Panama City, Panama" },
  { value: "AEP", text: "Aeroparque Jorge Newbery (AEP), Buenos Aires, Argentina" },
  { value: "GDL", text: "Guadalajara International Airport (GDL), Guadalajara, Mexico" },
  { value: "EZE", text: "Ministro Pistarini International Airport (EZE), Buenos Aires, Argentina" },
  { value: "CNF", text: "Tancredo Neves International Airport (CNF), Belo Horizonte, Brazil" },
  { value: "MTY", text: "Monterrey International Airport (MTY), Monterrey, Mexico" },
  { value: "VCP", text: "Viracopos International Airport (VCP), Campinas, Brazil" },
  { value: "SDU", text: "Santos Dumont Airport (SDU), Rio De Janeiro, Brazil" },
  { value: "POA", text: "Salgado Filho Airport (POA), Porto Alegre, Brazil" },
  { value: "REC", text: "Guararapes - Gilberto Freyre International Airport (REC), Recife, Brazil" },
  { value: "SSA", text: "Deputado Luís Eduardo Magalhães International Airport (SSA), Salvador, Brazil" },
  { value: "TIJ", text: "General Abelardo L. Rodríguez International Airport (TIJ), Tijuana, Mexico" },
  { value: "CWB", text: "Afonso Pena Airport (CWB), Curitiba, Brazil" },
  { value: "FOR", text: "Pinto Martins International Airport (FOR), Fortaleza, Brazil" },
  { value: "HAV", text: "José Martí International Airport (HAV), Havana, Cuba" },
  { value: "SJO", text: "Juan Santamaria International Airport (SJO), San Jose, Costa Rica" },
  { value: "MUN", text: "Maturín Airport (MUN), Maturin, Venezuela" },
  { value: "FLN", text: "Hercílio Luz International Airport (FLN), Florianopolis, Brazil" },
  { value: "BEL", text: "Val de Cans International Airport (BEL), Belem, Brazil" },
  { value: "CUZ", text: "Alejandro Velasco Astete International Airport (CUZ), Cuzco, Peru" },
  { value: "GYN", text: "Santa Genoveva Airport (GYN), Goiania, Brazil" },
  { value: "VIX", text: "Eurico de Aguiar Salles Airport (VIX), Vitoria, Brazil" },
  { value: "SAL", text: "El Salvador International Airport (SAL), San Salvador, El Salvador" },
  { value: "CGB", text: "Marechal Rondon Airport (CGB), Cuiaba, Brazil" },
  { value: "COR", text: "Ingeniero Ambrosio Taravella Airport (COR), Cordoba, Argentina" },
  { value: "MAO", text: "Eduardo Gomes International Airport (MAO), Manaus, Brazil" },
  { value: "GUA", text: "La Aurora International Airport (GUA), Guatemala City, Guatemala" },
  { value: "NAT", text: "Governador Aluízio Alves International Airport (NAT), Natal, Brazil" },
  { value: "IGU", text: "Foz do Iguaçu International Airport (IGU), Foz Do Iguacu, Brazil" },
  { value: "MCZ", text: "Zumbi dos Palmares Airport (MCZ), Maceio, Brazil" },
  { value: "MDZ", text: "El Plumerillo Airport (MDZ), Mendoza, Argentina" },
  { value: "BPS", text: "Porto Seguro Airport (BPS), Porto Seguro, Brazil" },
  { value: "AQP", text: "Rodríguez Ballón International Airport (AQP), Arequipa, Peru" },
  { value: "SLZ", text: "Marechal Cunha Machado International Airport (SLZ), Sao Luis, Brazil" },
  { value: "NVT", text: "Ministro Victor Konder International Airport (NVT), Navegantes, Brazil" },
  { value: "CGR", text: "Campo Grande Airport (CGR), Campo Grande, Brazil" },
  { value: "MGA", text: "Augusto C. Sandino (Managua) International Airport (MGA), Managua, Nicaragua" },
  { value: "JPA", text: "Presidente Castro Pinto International Airport (JPA), Joao Pessoa, Brazil" },
  { value: "BRC", text: "San Carlos De Bariloche Airport (BRC), San Carlos De Bariloche, Argentina" },
  { value: "AJU", text: "Santa Maria Airport (AJU), Aracaju, Brazil" },
  { value: "LIR", text: "Daniel Oduber Quiros International Airport (LIR), Liberia, Costa Rica" },
  { value: "ASU", text: "Silvio Pettirossi International Airport (ASU), Asuncion, Paraguay" },
  { value: "THE", text: "Senador Petrônio Portela Airport (THE), Teresina, Brazil" },
  { value: "UDI", text: "Ten. Cel. Aviador César Bombonato Airport (UDI), Uberlandia, Brazil" },
  { value: "SLA", text: "Martin Miguel De Guemes International Airport (SLA), Salta, Argentina" },
  { value: "IGR", text: "Cataratas del Iguazú International Airport (IGR), Iguazu Falls, Argentina" },
  { value: "IQT", text: "Coronel FAP Francisco Secada Vignetta International Airport (IQT), Iquitos, Peru" },
  { value: "NQN", text: "Presidente Peron Airport (NQN), Neuquen, Argentina" },
  { value: "LDB", text: "Governador José Richa Airport (LDB), Londrina, Brazil" },
  { value: "BZE", text: "Philip S. W. Goldson International Airport (BZE), Belize City, Belize" },
  { value: "SAP", text: "Ramón Villeda Morales International Airport (SAP), San Pedro Sula, Honduras" },
  { value: "RAO", text: "Leite Lopes Airport (RAO), Ribeirao Preto, Brazil" },
  { value: "PIU", text: "Capitán FAP Guillermo Concha Iberico International Airport (PIU), Piura, Peru" },
  { value: "USH", text: "Malvinas Argentinas Airport (USH), Ushuaia, Argentina" },
  { value: "PVH", text: "Governador Jorge Teixeira de Oliveira Airport (PVH), Porto Velho, Brazil" },
  { value: "ROS", text: "Islas Malvinas Airport (ROS), Rosario, Argentina" },
  { value: "SJP", text: "Prof. Eribelto Manoel Reino State Airport (SJP), Sao Jose Do Rio Preto, Brazil" },
  { value: "TGU", text: "Toncontín International Airport (TGU), Tegucigalpa, Honduras" },
  { value: "ACA", text: "Acapulco International Airport (ACA), Acapulco, Mexico" },
  { value: "TPP", text: "Cadete FAP Guillermo Del Castillo Paredes Airport (TPP), Tarapoto, Peru" },
  { value: "MGF", text: "Regional de Maringá - Sílvio Nane Junior Airport (MGF), Maringa, Brazil" },
  { value: "PMW", text: "Brigadeiro Lysias Rodrigues Airport (PMW), Palmas, Brazil" },
  { value: "FTE", text: "El Calafate Airport (FTE), El Calafate, Argentina" },
  { value: "CRD", text: "General E. Mosconi Airport (CRD), Comodoro Rivadavia, Argentina" },
  { value: "IOS", text: "Bahia - Jorge Amado Airport (IOS), Ilheus, Brazil" },
  { value: "MCP", text: "Alberto Alcolumbre Airport (MCP), Macapa, Brazil" },
  { value: "TRU", text: "Capitan FAP Carlos Martinez De Pinillos International Airport (TRU), Trujillo, Peru" },
  { value: "TUC", text: "Teniente Benjamin Matienzo Airport (TUC), Tucuman, Argentina" },
  { value: "JDO", text: "Orlando Bezerra de Menezes Airport (JDO), Juazeiro Do Norte, Brazil" },
  { value: "CIX", text: "Capitan FAP Jose A Quinones Gonzales International Airport (CIX), Chiclayo, Peru" },
  { value: "JOI", text: "Lauro Carneiro de Loyola Airport (JOI), Joinville, Brazil" },
  { value: "PCL", text: "Cap FAP David Abenzur Rengifo International Airport (PCL), Pucallpa, Peru" },
  { value: "PNZ", text: "Senador Nilo Coelho Airport (PNZ), Petrolina, Brazil" },
  { value: "JUL", text: "Inca Manco Capac International Airport (JUL), Juliaca, Peru" },
  { value: "STM", text: "Maestro Wilson Fonseca Airport (STM), Santarem, Brazil" },
  { value: "BHI", text: "Comandante Espora Airport (BHI), Bahia Blanca, Argentina" },
  { value: "RTB", text: "Juan Manuel Galvez International Airport (RTB), Roatan, Honduras" },
  { value: "RBR", text: "Plácido de Castro Airport (RBR), Rio Branco, Brazil" },
  { value: "DAV", text: "Enrique Malek International Airport (DAV), David, Panama" },
  { value: "RES", text: "Resistencia International Airport (RES), Resistencia, Argentina" },
  { value: "IMP", text: "Prefeito Renato Moreira Airport (IMP), Imperatriz, Brazil" },
  { value: "REL", text: "Almirante Marco Andres Zar Airport (REL), Trelew, Argentina" },
  { value: "RGL", text: "Piloto Civil N. Fernández Airport (RGL), Rio Gallegos, Argentina" },
  { value: "MDQ", text: "Ástor Piazzola International Airport (MDQ), Mar Del Plata, Argentina" },
  { value: "BVB", text: "Atlas Brasil Cantanhede Airport (BVB), Boa Vista, Brazil" },
  { value: "MAB", text: "João Correa da Rocha Airport (MAB), Maraba, Brazil" },
  { value: "MOC", text: "Mário Ribeiro Airport (MOC), Montes Claros, Brazil" },
  { value: "JUJ", text: "Gobernador Horacio Guzman International Airport (JUJ), Jujuy, Argentina" },
  { value: "PPB", text: "Presidente Prudente Airport (PPB), President Prudente, Brazil" },
  { value: "AGU", text: "Lic. Jesús Terán Peredo International Airport (AGU), Aguascalientes, Mexico" },
  { value: "BHM", text: "Birmingham-Shuttlesworth Intl Airport (BHM), Birmingham, United States" },
  { value: "BIL", text: "Billings Logan Intl Airport (BIL), Billings, United States" },
  { value: "BIS", text: "Bismark Municipal Airport (BIS), Bismarck, United States" },
  { value: "BJX", text: "Del Bajío International Airport (BJX), León, Mexico" },
  { value: "BKG", text: "Branson Airport (BKG), Branson, United States" },
  { value: "BLB", text: "Panamá Pacífico International Airport (BLB), Balboa Airport, Panama" },
  { value: "BMI", text: "Central Illinois Regional Airport at Bloomington–Normal (BMI), Illinois, United States" },
  { value: "BOI", text: "Boise Airport (BOI), Boise, United States" },
  { value: "BZN", text: "Bozeman Yellowstone International Airport (BZN), Bozeman, United States" },
  { value: "CEN", text: "Ciudad Obregón International Airport (CEN), Ciudad Obregón, Mexico" },
  { value: "CHS", text: "Charleston Intl Airport (CHS), Charleston, United States" },
  { value: "CID", text: "Eastern Iowa Airport (CID), Cedar Rapids, United States" },
  { value: "CJS", text: "Abraham González International Airport (CJS), Ciudad Juárez, Mexico" },
  { value: "CLQ", text: "Licenciado Miguel de la Madrid Airport (CLQ), Colima, Mexico" },
  { value: "CME", text: "Ciudad del Carmen International Airport (CME), Ciudad Del Carmen , Mexico" },
  { value: "COS", text: "Colorado Springs Airport (COS), Colorado Springs, United States" },
  { value: "CPE", text: "Engineer Alberto Acuña Ongay International Airport (CPE), Campeche, Mexico" },
  { value: "CTM", text: "Chetumal International Airport (CTM), Chetumal, Mexico" },
  { value: "CUL", text: "Federal Airport of Culiacán (CUL), Culiacán, Mexico" },
  { value: "CUU", text: "General Roberto Fierro Villalobos International Airport (CUU), Chihuahua, Mexico" },
  { value: "CZM", text: "Cozumel International Airport (CZM), Cozumel, Mexico" },
  { value: "DGO", text: "Guadalupe Victoria International Airport (DGO), Durango, Mexico" },
  { value: "DSM", text: "Des Moines International Airport (DSM), Des Moines, United States" },
  { value: "FAR", text: "Hector International Airport (FAR), Fargo, United States" },
  { value: "FSD", text: "Sioux Falls Regional Airport (FSD), Sioux Falls, United States" },
  { value: "GEG", text: "Spokane International Airport (GEG), Spokane, United States" },
  { value: "GRB", text: "Green Bay–Austin Straubel International Airport (GRB), Green Bay, United States" },
  { value: "GRR", text: "Gerald R. Ford International Airport (GRR), Grand Rapids, United States" },
  { value: "GSO", text: "Piedmont Triad International Airport (GSO), Greensboro, United States" },
  { value: "GSP", text: "Greenville-Spartanburg International Airport (GSP), Greenville, United States" },
  { value: "HMO", text: "Hermosillo International Airport (HMO), Hermosillo, Mexico" },
  { value: "HRL", text: "Valley International Airport (HRL), Valley, United States" },
  { value: "HSV", text: "Huntsville International Airport (HSV), Huntsville, United States" },
  { value: "HUX", text: "Bahías de Huatulco International Airport (HUX), Huatulco, Mexico" },
  { value: "ICT", text: "Wichita Mid-Continent Airport (ICT), Wichita, United States" },
  { value: "JAC", text: "Jackson Hole Airport (JAC), Jackson Hole, United States" },
  { value: "JAN", text: "Jackson–Medgar Wiley Evers International Airport (JAN), Jackson-Evers, United States" },
  { value: "LAP", text: "Manuel Márquez de León International Airport (LAP), La Paz, Mexico" },
  { value: "LFT", text: "Lafayette Regional Airport (LFT), Lafayette, United States" },
  { value: "LIT", text: "Bill and Hillary Clinton National Airport (LIT), Little Rock, United States" },
  { value: "LMM", text: "Federal Airport of the Valle del Fuerte (LMM), Los Mochis, Mexico" },
  { value: "LTO", text: "Loreto International Airport (LTO), Loreto, Mexico" },
  { value: "MDT", text: "Harrisburg International Airport (MDT), Harrisburg, United States" },
  { value: "MEM", text: "Memphis International Airport (MEM), Memphis, United States" },
  { value: "MID", text: "Manuel Crescencio Rejón International Airport (MID), Mérida, Mexico" },
  { value: "MLM", text: "General Francisco J. Mujica International Airport (MLM), Morelia, Mexico" },
  { value: "MSL", text: "Northwest Alabama Regional Airport (MSL), Muscle Shoals, United States" },
  { value: "MSN", text: "Dane County Regional Airport (MSN), Madison, United States" },
  { value: "MSO", text: "Missoula International Airport (MSO), Missoula, United States" },
  { value: "MXL", text: "General Rodolfo Sánchez Taboada International Airport (MXL), Mexicali, Mexico" },
  { value: "MYR", text: "Myrtle Beach International Airport (MYR), Myrtle Beach, United States" },
  { value: "MZT", text: "General Rafael Buelna International Airport (MZT), Mazatlán, Mexico" },
  { value: "NLU", text: "Felipe Ángeles International Airport (NLU), Ciudad de México (AIFA), Mexico" },
  { value: "OAX", text: "Oaxaca International Airport (OAX), Oaxaca, Mexico" },
  { value: "OKC", text: "Will Rogers World Airport (OKC), Oklahoma City, United States" },
  { value: "ORF", text: "Norfolk International Airport (ORF), Norfolk, United States" },
  { value: "PBC", text: "Puebla International Airport (PBC), Puebla, Mexico" },
  { value: "PPE", text: "Mar de Cortés International Airport (PPE), Puerto Peñasco, Mexico" },
  { value: "PSM", text: "Pease International Airport (PSM), Portsmouth, United States" },
  { value: "PVR", text: "Puerto Vallarta International Airport (PVR), Puerto Vallarta, Mexico" },
  { value: "PXM", text: "Puerto Escondido International Airport (PXM), Puerto Escondido, Mexico" },
  { value: "QRO", text: "Intercontinental Airport of Querétaro (QRO), Querétaro, Mexico" },
  { value: "REX", text: "General Lucio Blanco International Airport (REX), Reynosa, Mexico" },
  { value: "RFD", text: "Chicago Rockford International Airport (RFD), Chicago Rockford, United States" },
  { value: "RNO", text: "Reno-Tahoe International Airport (RNO), Reno, United States" },
  { value: "SAV", text: "Savannah-Hilton Head International Airport (SAV), Savannah, United States" },
  { value: "SBD", text: "San Bernardino International Airport (SBD), San Bernardino, United States" },
  { value: "SDF", text: "Louisville Muhammad Ali International Airport (SDF), Louisville, United States" },
  { value: "SJD", text: "Los Cabos International Airport (SJD), Los Cabos, Mexico" },
  { value: "SLP", text: "Ponciano Arriaga International Airport (SLP), San Luis Potosí, Mexico" },
  { value: "TAM", text: "General Francisco Javier Mina International Airport (TAM), Tampico, Mexico" },
  { value: "TAP", text: "Tapachula International Airport (TAP), Tapachula, Mexico" },
  { value: "TGZ", text: "Ángel Albino Corzo International Airport (TGZ), Tuxtla Gutiérrez, Mexico" },
  { value: "TLC", text: "Toluca International Airport (TLC), Toluca, Mexico" },
  { value: "TPQ", text: "Tepic International Airport (TPQ), Tepic, Mexico" },
  { value: "TRC", text: "Torreón International Airport (TRC), Torreón, Mexico" },
  { value: "TTN", text: "Trenton-Mercer Airport (TTN), Trenton, United States" },
  { value: "TUL", text: "Tulsa International Airport (TUL), Tulsa, United States" },
  { value: "TUS", text: "Tucson International Airport (TUS), Tucson, United States" },
  { value: "TYR", text: "Tyler Pounds Regional Airport (TYR), Pounds Field, United States" },
  { value: "TYS", text: "McGhee Tyson Airport (TYS), Knoxville, United States" },
  { value: "UPN", text: "Licensed and General Ignacio López Rayón International Airport (UPN), Uruapan, Mexico" },
  { value: "VER", text: "Veracruz International Airport (VER), Veracruz, Mexico" },
  { value: "VSA", text: "Carlos Rovirosa Pérez International Airport (VSA), Villahermosa, Mexico" },
  { value: "XNA", text: "Northwest Arkansas Regional Airport (XNA), Fayettville, United States" },
  { value: "ZCL", text: "General Leobardo C. Ruiz International Airport (ZCL), Zacatecas, Mexico" },
  { value: "ZIH", text: "Ixtapa-Zihuatanejo International Airport (ZIH), Ixtapa / Zihuatanejo, Mexico" }
];

//Guardar cookie
function setCookieWishlist(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

//Verificar si hay una cookie existente en el dispositivo
function getCookieWishlist(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Cerrar modal wishlist
$(document.body).on("click", "#btnCerrarModalWishlist", function (e) {
  $("#modal-test-wishlist").remove();
});

//Al darle click al boton de wishlist
$(document.body).on("click", ".btn-wishlist-logged", function (e) {
  //window.$("#LoggedIn > button").click();
  window.$("#MainHeader").click();
  showWishlistModal();
});

//Cambiar el tab
function openTab(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  var tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  document
    .querySelector(`[onclick="openTab('${tabName}')"]`)
  //.classList.add("active");
}

//Función para convertir fechas:
function convertirFechaOrigen(fechaStr) {
  const meses = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const partes = fechaStr.split("/");
  const mesNum = parseInt(partes[0], 10);
  const dia = parseInt(partes[1], 10);
  const año = parseInt(partes[2], 10);

  const mesTexto = meses[mesNum - 1];
  const fechaFormateada = `${mesTexto} ${dia}, ${año}`;

  return fechaFormateada;
}

//Función para convertir un string en arreglo
function arrayToString(array, separator) {
  return array.join(separator);
}

//Función para comparar si ya pasó una fecha:
function fechaYaPaso(fechaStr) {
  const partes = fechaStr.split("/");
  const mes = parseInt(partes[0], 10);
  const dia = parseInt(partes[1], 10);
  const año = parseInt(partes[2], 10);

  const fechaObjetivo = new Date(año, mes - 1, dia); // Meses en JavaScript son 0-indexados
  const fechaActual = new Date();

  return fechaObjetivo < fechaActual;
}

//Función para buscar valores de nuevos aeropuertos 
function newAirportsValues(valueToFind) {
  for (const option of optionsJSON) {
    if (option.value === valueToFind) {
      return option.text;
    }
  }
  return "No se encontró ninguna coincidencia";
}

//Función para cargar el contenido de nuevas rutas 
function newRoutesContent(routes) {
  var contenido = "";
  var valuesCookie = routes.split(",");

  for (var i = 0; i < valuesCookie.length; i++) {
    const foundText = newAirportsValues(valuesCookie[i]);
    infoDestinoSplit = foundText.split(",");
    nombreAeropuerto = infoDestinoSplit[0];
    nombreAeropuerto = nombreAeropuerto.replace("Aeropuerto", "Apto.");
    contenido += '<div class="col-12 col-sm-6"> <div class="row caja-destinos-nuevos"> <div class="col-2 compass-container"><span class="material-symbols-outlined">explore</span></div> <div class="col-8"> <div class="truncate-container"><p class="caja-destinos-nuevos-title"><span class="truncate-text">' + nombreAeropuerto + '</span></p></div> <p class="caja-destinos-nuevos-subtitle">' + infoDestinoSplit[1] + ', ' + infoDestinoSplit[2] + '</p> </div> <div class="col-2"><span class="material-symbols-outlined close-new-destinations" data-destination="' + valuesCookie[i] + '">close</span></div> </div> </div>';
  }
  return contenido;
}

//Fecha de hoy
function getFechaHoy(daysToAdd) {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysToAdd);

  const month = String(futureDate.getMonth() + 1).padStart(2, '0');
  const day = String(futureDate.getDate()).padStart(2, '0');
  const year = futureDate.getFullYear();

  return `${month}/${day}/${year}`;
}

//Función para cargar las cajas de destinos añadidos (primer pestaña)
function loadDestinationsWL(cookieList, cookieListDetailed) {
  var contenido = "";
  var valuesCookie = cookieList.split(",");
  var valuesCookieDetailed = cookieListDetailed.split(",");
  var promoDisponible;
  const missingAirports = ["SNA", "TJX", "VSA", "DTW", "QMX", "QLA"];
  var nombreAeropuerto, imagenAeropuerto, linkDinamico;

  for (var i = 0; i < valuesCookie.length; i++) {
    nombreAeropuerto = airportNameIng(valuesCookie[i]);

    if (missingAirports.includes(valuesCookie[i])) {
      imagenAeropuerto = "https://mapa.volaris.com/images/placeholder.jpg";
    } else {
      imagenAeropuerto =
        "https://d2jxstk8lyvs1f.cloudfront.net/" + valuesCookie[i] + ".jpg";
    }

    if (nombreAeropuerto === "Airport") {
      nombreAeropuerto = nombreAeropuerto + " (" + valuesCookie[i] + ")";
    }

    infoDestino = valuesCookieDetailed[i];
    infoDestinoSplit = infoDestino.split("|");

    pasajeros = parseInt(infoDestinoSplit[0]) + parseInt(infoDestinoSplit[1]) + parseInt(infoDestinoSplit[2]);

    const tipoVuelo = infoDestinoSplit[3];
    if (tipoVuelo == "True") {
      labelTipoVuelo = "Round trip";
    } else {
      labelTipoVuelo = "One way";
    }

    var fechaVuelo = infoDestinoSplit[5];
    var fechaVueloRegreso = infoDestinoSplit[6];

    const haPasado = fechaYaPaso(fechaVuelo);
    var fechaAnadida = "";
    if (haPasado) {
      fechaVuelo = getFechaHoy(0);
      fechaVueloRegreso = getFechaHoy(8);
      //fechaAnadida = "";
    }
    var fechaFormateada = convertirFechaOrigen(fechaVuelo);
    fechaAnadida = "<p>" + fechaFormateada + "</p>";

    if (pasajeros == 1) {
      labelPasajeros = " passenger"
    } else {
      labelPasajeros = " passengers"
    }

    linkDinamico =
      "https://www.volaris.com/flight/select?utm_campaign=wishlist_deeplink&utm_source=Wishlist&utm_medium=Referral&adt=" + infoDestinoSplit[0] + "&chd=" + infoDestinoSplit[1] + "&in1=" + infoDestinoSplit[2] + "&rr=" + infoDestinoSplit[3] + "&cc=" + infoDestinoSplit[4] + "&dd1=" + fechaVuelo + "&dd2=" + fechaVueloRegreso + "&culture=" + infoDestinoSplit[7] + "&o1=" + infoDestinoSplit[8] + "&d1=" + infoDestinoSplit[9] + "&s=True&dni=0&promoCode=";

    contenido +=
      '<div class="col-12 col-sm-6"><button class="caja-destino effect-apollo"> <div class="caja-destino-borde"></div> <div class="caja-destino-contenido"><img src="' +
      imagenAeropuerto +
      '" class="img-destinos"></div> <div class="caja-destino-texto figcaption"><a class="remove-wishlist" data-destination="' +
      valuesCookie[i] +
      '" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel remove-wl-box"></span></a><p class="caja-destino-txt caja-destino-titulo">' +
      nombreAeropuerto +
      '</p><p>' + labelTipoVuelo + '</p>' + fechaAnadida + '<p>' + pasajeros + labelPasajeros + '</p> <p style="text-align:right;color:#a12885;"><a href="javascript:void(0);" class="share-flight-wishlist" data-deeplink="' + linkDinamico + '"><span class="material-symbols-outlined" style="margin-right:10px;">share</span></a><a href="' +
      linkDinamico +
      '"><span class="material-symbols-outlined">arrow_right_alt</span></a></p><!--<p class="caja-destino-txt caja-destino-precio"><span class="caja-destino-txt">promo disponible</span></p> <p class="caja-destino-txt caja-destino-disclaimer">Viaje sencillo | TUA no incluido</p>--> </div> </button></div>';
  }
  return contenido;
}

//Click en botón Wishlist para mostrar modal
function showWishlistModal() {
  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");
  var cookieListNewRoutes = getCookieWishlist("wishlist_array_new_destinations");
  var contenido = "";
  var rutasNuevosDestinos = "";

  //Contenido cajas con los destinos Volaris
  if (cookieList !== undefined && cookieList !== null && cookieList !== '' && cookieList !== 'undefined') {
    contenido = loadDestinationsWL(cookieList, cookieListDetailed);
  } else {
    contenido = '<div class="col-12"><p>Start a flight search to add your favorite destinations to your list.</p></div>'
  }

  //Todas las rutas nuevas
  if (cookieListNewRoutes !== null && cookieListNewRoutes !== undefined && cookieListNewRoutes !== '' && cookieListNewRoutes !== 'undefined') {
    rutasNuevosDestinos = newRoutesContent(cookieListNewRoutes);
  }

  //Sugerir una ruta contenido
  var rutasSugeridas =
    '<div class="col-12"> <form id="form-rutas-nuevas"> <div class="row"> <p>Would you like to explore new routes with Volaris? Let us know your dreamed destinations and receive notifications in case we start a new route. </p> <div class="col-12 col-sm-6"> <div class="input-group dropdown-container"> <input type="text" class="dropdown-input dropdownAeropuerto" name="from-airport-wl-request" id="from-airport-wl-request" placeholder="Origin" autocomplete="off" required> <span class="input-group-addon volaris"><span class="material-symbols-outlined arrow-voi">arrow_drop_down</span></span> <div class="dropdown-list" style="display: none;"></div> </div> </div> <div class="col-12 col-sm-6"> <div class="dropdown-container"> <input type="text" name="to-airport-wl-request" id="to-airport-wl-request" class="dropdown-input dropdownAeropuerto" placeholder="Destination" autocomplete="off" required> <span class="input-group-addon volaris"><span class="material-symbols-outlined arrow-voi">arrow_drop_down</span></span> <div class="dropdown-list" style="display: none;"></div> </div> </div> <div class="col-12 col-sm-6"> <input type="hidden" id="new-destinations-wl-request" name="new-destinations-wl-request" value="' + cookieListNewRoutes + '"> <a id="btnAuxGuardarRuta" class="btn btn-large marBtm25 mat-flat-button mat-button-base mat-primary btnGuardarRuta disabled" color="primary" href="javascript:void(0);">Save route</a> <button type="submit" class="btn btn-large marBtm25 mat-flat-button mat-button-base mat-primary" style="display:none;" id="btnSubmitRuta">Save route</button></div> <div class="col-12 col-sm-6"></div> <div class="col-12 nuevos-destinos-boxes"> <div class="row" id="newRoutesContent">' + rutasNuevosDestinos + "</div></div></div></form></div>";

  //Añade contenido de WL
  var tabulador =
    '<div class="col-12" style="margin-top: 20px;"><div class="button-wl-menu b2" id="menu-wishlist"> <input type="checkbox" class="checkbox menu-wishlist-checkbox" name="menu-wishlist-checkbox" id="menu-wishlist-checkbox" /> <div class="knobs"> <span>My list</span> </div> <div class="layer"></div> </div> </div> <div class="col-12"> <div class="tab-content" id="tab1"> <div class="row" id="contenidoWLTabOne">' +
    contenido +
    ' </div> </div> <div class="tab-content" id="tab2"> <div class="row">' +
    rutasSugeridas +
    "</div> </div> </div>";

  $("body").append(
    '<div class="cdk-overlay-container" id="modal-test-wishlist"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: center; align-items: center;"> <div id="cdk-overlay-0" class="cdk-overlay-pane baggage-modal-panel" style="max-width: 50vw; pointer-events: auto; position: static; max-height: 80vh;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container class="mat-dialog-container ng-tns-c40-8 ng-trigger ng-trigger-dialogContainer ng-star-inserted wishlist-bucket" style="transform: none;"> <div class="baggage-modal-container ng-star-inserted combo-flex-container" style="overflow-x: hidden;"> <mat-dialog-content class="template-content combo-content mat-dialog-contents"> <a class="closeDialog" href="javascript:void(0)" mat-dialog-close="" type="button" id="btnCerrarModalWishlist"> <mat-icon aria-hidden="false" aria-label="Close" class="mat-icon notranslate material-icons mat-icon-no-color" matsuffix="" role="img">close</mat-icon></a><div class="row"><div class="col-12"><h4 style="font-size: 18px;margin-bottom: 10px;">My wishlist</h4></div></div><div class="row" id="contenido-wishlist">' +
    '<div class="row">' +
    tabulador +
    "</div>" +
    ' </div> </mat-dialog-content> </div> </mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>'
  );
}

/****************FUNCIONES PARA EL DROPDOWN ************************** */
$(document.body).on("keyup", ".dropdownAeropuerto", function (e) {
  //const searchQuery = event.target.value.toLowerCase();
  const searchQuery = $(this).val().toLowerCase();
  const container = event.target.closest(".dropdown-container");
  const list = container.querySelector(".dropdown-list");

  const filteredOptions = optionsJSON.filter((option) =>
    option.text.toLowerCase().includes(searchQuery)
  );

  $(this).data('value', '');
  // Limpia la lista
  list.innerHTML = "";

  // Agrega las opciones filtradas a la lista
  filteredOptions.forEach((option) => {
    const listItem = document.createElement("div");
    listItem.className = "dropdown-item";
    listItem.textContent = option.text;
    listItem.addEventListener("click", function () {
      const input = container.querySelector(".dropdown-input");
      input.value = option.text;
      list.style.display = "none";
      input.setAttribute("data-value", option.value);
      validaNuevasRutas(); //Validando rutas
    });
    list.appendChild(listItem);
  });

  list.style.display = "block";
});

/*window.onload = function () {
  
};*/

/*************FUNCIONES PARA TABS EN EL MENÚ***************** */

//Al hacer click en el checkbox del menú
$(document.body).on("click", ".menu-wishlist-checkbox", function (e) {
  //var nombreTab = $(this).data("tab");
  let isChecked = $("#menu-wishlist-checkbox").is(":checked");
  if (isChecked) {
    openTab("tab2");
  } else {
    openTab("tab1");
  }
});

//Al dar click a la tab
$(document.body).on("click", ".tab-button", function (e) {
  var nombreTab = $(this).data("tab");
  openTab(nombreTab);
});

/**************FUNCIONES PARA COMPARTIR UN VUELO DEL WISHLIST**************** */
//Modal para compartir vuelo
function showModalCopied(copyText) {
  var textoTitulo = "Share flight";
  var textoModal = "Share this flight with your friends!";
  var textoBoton = "Copy link";

  var labelLink = '<div _ngcontent-bgm-c25="" class="row ng-star-inserted"><div _ngcontent-bgm-c25="" class="col"><mat-form-field _ngcontent-bgm-c25="" appearance="outline" class="textbox mat-form-field ng-tns-c7-48 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float ng-untouched ng-pristine ng-valid"><div class="mat-form-field-wrapper"><div class="mat-form-field-flex"><!----><!----><div class="mat-form-field-outline ng-tns-c7-48 ng-star-inserted"><div class="mat-form-field-outline-start"></div><div class="mat-form-field-outline-gap"></div><div class="mat-form-field-outline-end"></div></div><div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c7-48 ng-star-inserted"><div class="mat-form-field-outline-start"></div><div class="mat-form-field-outline-gap"></div><div class="mat-form-field-outline-end"></div></div><!----><div class="mat-form-field-infix" style="padding: 5px 24px 1px 0;"><!----><!----><input _ngcontent-bgm-c25="" id="shareLinkFlight" class="mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid ng-star-inserted" matinput="" placeholder="' + copyText + '" value="' + copyText + '" type="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" id="mat-input-3" aria-invalid="false" aria-required="false"><mat-autocomplete _ngcontent-bgm-c25="" class="mat-autocomplete ng-star-inserted" panelwidth="auto"><!----></mat-autocomplete><!----><span class="mat-form-field-label-wrapper"><!----></span></div><!----></div><!----><div class="mat-form-field-subscript-wrapper"><!----><!----><div class="mat-form-field-hint-wrapper ng-tns-c7-48 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style="opacity: 1; transform: translateY(0%);"><!----><div class="mat-form-field-hint-spacer"></div></div></div></div></mat-form-field></div></div>';

  $('body').append('<div class="cdk-overlay-container" id="popupAlertTestContainer"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalFWWishlistClose"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p style="text-align: justify;margin-bottom:30px;">' + textoModal + '</p>' + labelLink + '<a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalFWWishlist" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' + textoBoton + '</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>');
}

//Función para desplegar al copiar el link de un vuelo
function modalConfirmationShow() {
  var textoTitulo = "Link copied";
  var textoBoton = "Accept";
  var textoModal = "All set! The link to this flight has been copied to your clipboard.";

  var mensajeExitoso = '<div class="cdk-overlay-container" id="popupAlertTest"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalAlert"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content=""><span _ngcontent-bgm-c25="" class="material-icons check_circle check-circle"> check_circle </span><p>' + textoModal + '</p><div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $('body').append(mensajeExitoso);
}

$(document.body).on('click', '.cerrarModalAlert', function (e) {
  $("#popupAlertTest").remove();
});

$(document.body).on('click', '.cerrarModalFWWishlist', function (e) {
  var copyText = document.getElementById('shareLinkFlight').value;
  navigator.clipboard.writeText(copyText);
  $("#popupAlertTestContainer").remove();
  modalConfirmationShow();
});

$(document.body).on('click', '.cerrarModalFWWishlistClose', function (e) {
  $("#popupAlertTestContainer").remove();
});

//Compartir vuelo individual wishlist
$(document.body).on("click", ".share-flight-wishlist", function (e) {
  var deeplinkVuelo = $(this).attr("data-deeplink");
  showModalCopied(deeplinkVuelo);
});
/**************FIN FUNCIONES PARA COMPARTIR UN VUELO DEL WISHLIST**************** */

/**************FUNCIONES PARA QUITAR DESTINOS DEL WISHLIST**************** */
function modalRemoveDestination(destination) {
  var textoModal = "Are you sure you want to remove this destination?";
  var textoBoton = "Remove";
  var textoDescarte = "Cancel";

  var wishlistList = [];
  var wishlistDetailed = [];

  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");

  var valuesCookie = cookieList.split(",");
  var valuesCookieDetailed = cookieListDetailed.split(",");
  for (var i = 0; i < valuesCookie.length; i++) {
    if (valuesCookie[i] !== destination) {
      wishlistList.push(valuesCookie[i]);
      wishlistDetailed.push(valuesCookieDetailed[i]);
    }
  }

  var inputsDestinos = '<input type="hidden" id="wishlist-list-remove" name="wishlist-list-remove" value="' + wishlistList + '">' + '<input type="hidden" id="wishlist-list-detailed-remove" name="wishlist-list-detailed-remove" value="' +
    wishlistDetailed +
    '"><input type="hidden" id="destination-removed" name="destination-removed" value="' + destination + '">';

  var mensajeExitoso =
    '<div class="cdk-overlay-container" id="popupRemoverDestinoWL"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout" style="padding: 10px;"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog btnCerrarRemoverWL" id="btnCerrarRemoverWL" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a></div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p>' +
    textoModal +
    '</p><div class="row"><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-secondary btnCerrarRemoverWL" color="secondary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoDescarte +
    '</span></a></div><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-primary btnRemoverDestinoWL" data-wishlist="' + wishlistList + '" data-wishlist-detailed="' + wishlistDetailed + '" id="btnRemoverDestinoWL" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoBoton +
    '</span></a></div></div>' + inputsDestinos + ' <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $("body").append(mensajeExitoso);
}

$(document.body).on("click", ".btnCerrarRemoverWL", function (e) {
  $("#popupRemoverDestinoWL").remove();
});

//Quitar destino de wishlist
$(document.body).on('click', '.remove-wishlist', function (e) {
  var destination = $(this).attr("data-destination");
  modalRemoveDestination(destination);
});

$(document.body).on('click', '.btnRemoverDestinoWL', function (e) {
  var cookieList = $(this).attr("data-wishlist");
  var cookieListDetailed = $(this).attr("data-wishlist-detailed");
  var contenido = "";
  if (cookieList !== null && cookieList !== undefined && cookieList !== '' && cookieList !== 'undefined') {
    contenido = loadDestinationsWL(cookieList, cookieListDetailed);
    setCookieWishlist("wishlist_array", cookieList, 30);
    setCookieWishlist("wishlist_array_detailed", cookieListDetailed, 30);
  } else {
    setCookieWishlist("wishlist_array", "", -1);
    setCookieWishlist("wishlist_array_detailed", "", -1);
    contenido = '<div class="col-12"><p>Start a flight search to add your favorite destinations to your list.</p></div>'
  }
  window.document.getElementById("contenidoWLTabOne").innerHTML = contenido;
  $("#popupRemoverDestinoWL").remove();
});

/**************FIN DE FUNCIONES PARA QUITAR DESTINOS DEL WISHLIST**************** */


/*************FUNCIONES PARA IDENTIFICAR LA API DE TEALIUM ************************/
function checkUserProfile(callback) {
  setCookieWishlist("wishlist_array", utag_data.cookie_wishlist, 30);
  setCookieWishlist("wishlist_array_detailed", utag_data.cookie_wishlist_detailed, 30);
  setCookieWishlist("wishlist_array_new_destinations", utag_data.cookie_wishlist_new_destinations, 30);
  callback(); // Llamar al callback después de obtener la información de Tealium y crear la cookie
}

$(document).ready(function () {
  var cookieValidadora = getCookieWishlist("wishlist_available"); //Para no hacer tantos llamados
  var cookieList = getCookieWishlist("wishlist_array");
  var cookieListDetailed = getCookieWishlist("wishlist_array_detailed");

  if (cookieValidadora == null || cookieValidadora == undefined || cookieValidadora == '') {
    if (cookieList == null || cookieList == undefined || cookieList == '') {
      console.log("Getting info");
      checkUserProfile(function () {
        setCookieWishlist("wishlist_available", "Yes", 30);
      });
    }
  }

  //Para los dropdowns cuando hacen click fuera y se cierren
  const dropdowns = document.querySelectorAll(".dropdownAeropuerto");

  // Agregar el evento a cada elemento dropdownAeropuerto
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (event) {
      filterOptions(event);
    });
  });

  // Cierra la lista si se hace clic fuera del dropdown
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown-container")) {
      const lists = document.querySelectorAll(".dropdown-list");
      lists.forEach((list) => {
        list.style.display = "none";
      });
    }
  });


}); //Fin función ready function


/********FUNCIONES PARA VALIDAR RUTAS NUEVAS******* */
//Modal de alerta para vuelo
function showModalAlerta(titulo, mensaje) {
  var textoTitulo = titulo;
  var textoModal = mensaje;

  var mensajeExitoso = '<div class="cdk-overlay-container" id="popupModalAlerta"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalAlerta"  id="cerrarModalAlerta" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' + textoTitulo + '</h6> </div> <div class="mat-dialog-content" mat-dialog-content=""><p>' + textoModal + '</p><div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
  $('body').append(mensajeExitoso);
}

$(document.body).on('click', '.cerrarModalAlerta', function (e) {
  $("#popupModalAlerta").remove();
});

function validaNuevasRutas() {
  var origin = $("#from-airport-wl-request").attr("data-value");
  var destination = $("#to-airport-wl-request").attr("data-value");
  var btnSubmitRuta = document.getElementById("btnSubmitRuta");
  var btnAuxGuardarRuta = document.getElementById("btnAuxGuardarRuta");

  if (origin == null || origin == '' || origin == undefined) {
    $("#from-airport-wl-request").addClass("input-error-nd");
  } else {
    $("#from-airport-wl-request").removeClass("input-error-nd");
  }
  if (destination == null || destination == '' || destination == undefined) {
    $("#to-airport-wl-request").addClass("input-error-nd");
  } else {
    $("#to-airport-wl-request").removeClass("input-error-nd");
  }

  if (origin == null || origin == '' || origin == undefined || destination == null || destination == '' || destination == undefined) { //Si está vacío alguno de los campos
    //showModalAlerta("Tiene que elegir algo");
    btnSubmitRuta.style.display = "none";
    btnAuxGuardarRuta.style.display = "block";
  } else {
    if (origin == destination) {
      btnSubmitRuta.style.display = "none";
      btnAuxGuardarRuta.style.display = "block";
      $('#from-airport-wl-request').removeAttr('data-value');
      $('#to-airport-wl-request').removeAttr('data-value');
      $("#form-rutas-nuevas input[type='text']").val("");
      showModalAlerta("Similar destinations", "The origin and destination must be different.");
      //alert("Elegir destino diferente");
    } else {
      //Para toda la parte del nuevo destino
      var wishlistNew = [];
      //var cookieListNew = getCookieWishlist("wishlist_array_new_destinations");
      cookieListNew = document.getElementById("new-destinations-wl-request").value;
      var valuesCookieNew = cookieListNew.split(",");
      for (var i = 0; i < valuesCookieNew.length; i++) {
        if (valuesCookieNew[i] !== "" && valuesCookieNew[i] !== "undefined") {
          wishlistNew.push(valuesCookieNew[i]);
        }
      }
      //Aqui se añade
      if (wishlistNew.includes(destination)) {
        // No hace nada, ya que el destino ya está en la lista de aeropuertos
        //alert("No se hace nada");
      } else {
        //alert("Se añade el destino" + destination);
        wishlistNew.push(destination);
      }
      $("#new-destinations-wl-request").val(wishlistNew);

      btnSubmitRuta.style.display = "block";
      btnAuxGuardarRuta.style.display = "none";
    }
  }
};

$(document.body).on('submit', '#form-rutas-nuevas', function (event) {
  // Detener el envío del formulario
  event.preventDefault();
  var formData = $(this).serialize();

  // Enviar los datos utilizando AJAX
  $.ajax({
    type: "POST",
    url: $(this).attr("action"),
    data: formData,
    //data: { "from-airport-wl-request": origin, "to-airport-wl-request": destination, "new-destinations-wl-request": newDestinations },
    success: function (response) {
      // Manejar la respuesta
      showModalAlerta("Destination added successfully", "We will notify you in case we start a new route.");
      //$("#form-rutas-nuevas input[type='text']").data('value', '');
      //$("#form-rutas-nuevas input[type='text']").data('value',null);
      $('#from-airport-wl-request').removeAttr('data-value');
      $('#to-airport-wl-request').removeAttr('data-value');
      $("#form-rutas-nuevas input[type='text']").val("");

      var miElemento = document.getElementById("btnSubmitRuta");
      miElemento.style.display = "none";
      var btnAuxGuardarRuta = document.getElementById("btnAuxGuardarRuta");
      btnAuxGuardarRuta.style.display = "block";

      var wishlistNew = document.getElementById("new-destinations-wl-request").value;
      setCookieWishlist("wishlist_array_new_destinations", wishlistNew, 30);
      //var wishlistNewString = arrayToString(wishlistNew, ",");
      var nuevasRutas = newRoutesContent(wishlistNew);
      $("#newRoutesContent").html(nuevasRutas);
    },
    error: function (xhr, status, error) {
      console.log(xhr.responseText);
    }
  });
});

/**************FUNCIONES PARA QUITAR DESTINOS NUEVOS DEL WISHLIST**************** */
function modalRemoveNewDestination(destination) {
  var textoModal = "Are you sure you want to remove this destination?";
  var textoBoton = "Remove";
  var textoDescarte = "Cancel";

  var wishlistList = [];
  //var cookieList = getCookieWishlist("wishlist_array_new_destinations");
  var cookieList = document.getElementById("new-destinations-wl-request").value;

  var valuesCookie = cookieList.split(",");
  for (var i = 0; i < valuesCookie.length; i++) {
    if (valuesCookie[i] !== destination) {
      wishlistList.push(valuesCookie[i]);
    }
  }

  var inputsDestinos = '<input type="hidden" id="wishlist-list-new-remove" name="wishlist-list-new-remove" value="' + wishlistList + '"><input type="hidden" id="new-destination-removed" name="new-destination-removed" value="' + destination + '">';

  var mensajeExitoso =
    '<div class="cdk-overlay-container" id="popupRemoverNewDestinoWL"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout" style="padding: 10px;"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog btnCerrarRemoverNewWL" id="btnCerrarRemoverNewWL" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a></div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p>' +
    textoModal +
    '</p><div class="row"><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-secondary btnCerrarRemoverNewWL" color="secondary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoDescarte +
    '</span></a></div><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-primary btnRemoverNewDestinoWL" data-wishlist="' + wishlistList + '" id="btnRemoverNewDestinoWL" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
    textoBoton +
    '</span></a></div></div>' + inputsDestinos + ' <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';

  $("body").append(mensajeExitoso);
}

$(document.body).on("click", ".btnCerrarRemoverNewWL", function (e) {
  $("#popupRemoverNewDestinoWL").remove();
});

//Quitar destino de wishlist
$(document.body).on('click', '.close-new-destinations', function (e) {
  var destination = $(this).attr("data-destination");
  modalRemoveNewDestination(destination);
});

$(document.body).on('click', '.btnRemoverNewDestinoWL', function (e) {
  var cookieList = $(this).attr("data-wishlist");
  var contenido = "";

  var valorNuevo = document.getElementById("wishlist-list-new-remove").value;
  $("#new-destinations-wl-request").val(valorNuevo);

  if (cookieList !== null && cookieList !== undefined && cookieList !== '' && cookieList !== 'undefined') {
    contenido = newRoutesContent(cookieList);
    setCookieWishlist("wishlist_array_new_destinations", cookieList, 30);
  } else {
    setCookieWishlist("wishlist_array_new_destinations", "", -1);
  }
  window.document.getElementById("newRoutesContent").innerHTML = contenido;
  $("#popupRemoverNewDestinoWL").remove();
});

/**************FIN DE FUNCIONES PARA QUITAR DESTINOS NUEVOS DEL WISHLIST**************** */
}, "dependencies": []}, {"id": "31f8557085084f52b91658c3522484b3", "type": "append", "selector": "head", "value": "<style>@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\");\n\n.icon-corazon-header, .icon-heart-header {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n\n.icon-corazon-header {\n  font-size: 12px !important;\n}\n\nheader #MainHeader #SignInUp ul li#wlm {\n  height: 26px;\n  line-height: 26px;\n  margin: 5px 0 9px;\n  padding: 0 16px;\n  /*border-left: 1px solid #e6e6e6;*/\n  border-right: 1px solid #e6e6e6;\n}\n\nheader #MainHeader #SignInUp ul li#wlm a {\n  color: #a12885;\n  font-size: 12px;\n  /*margin-right: -7px;*/\n  height: 26px;\n  line-height: 26px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 3px;\n}\n\n.wl-main-title {\n  font-size: 18px;\n  margin-bottom: 10px;\n  line-height: 22px;\n  color: #080206;\n}\n.remove-wl-box {\n  color: #6b676a;\n}\n\n.remove-wl-box:before {\n  font-size: 18px;\n}\n\n.caja-destino {\n  display: flex;\n  background: #ffffff;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border-width: 1px;\n  border-color: #0000001a;\n  flex: 0 0 310px;\n  /*min-width: 310px;*/\n  width: 100%;\n  text-align: left;\n  height: 140px;\n  position: relative;\n  pointer-events: auto;\n  margin-bottom: 20px;\n}\n\n.caja-destino-borde {\n  height: 100%;\n  width: 0.5rem;\n  background: rgb(161, 40, 133);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n}\n\n.caja-destino-contenido {\n  position: relative;\n  width: 104px;\n  flex: 0 0 90px;\n}\n\n.caja-destino-contenido::before {\n  height: 0px;\n  content: \"\";\n  display: block;\n  padding-bottom: 133.333%;\n}\n\n.caja-destino-contenido > img,\n.caja-destino-contenido > video {\n  object-fit: cover;\n}\n\n.caja-destino-contenido > :not(style) {\n  overflow: hidden;\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 100%;\n  height: 115%;\n}\n\n.caja-destino-texto {\n  padding-inline-start: 0.75rem;\n  padding-inline-end: 0.75rem;\n  padding-top: 0px;\n  padding-bottom: 0.5rem;\n  color: #080206;\n  flex: 1 1 auto;\n  min-width: 0.25rem;\n}\n\n.caja-destino-titulo {\n  /*font-size: 1rem;*/\n  font-size: 20px;\n  /*font-weight: 700;*/\n  font-weight: bold;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  /*margin: 0;*/\n  margin-bottom: 10px !important;\n  line-height: 25px;\n}\n\n.caja-destino-fecha {\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n\n.caja-destino-precio {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: rgb(161, 40, 133);\n  margin-top: 1rem;\n}\n\n.caja-destino-disclaimer {\n  margin-top: 0.25rem;\n  font-size: 10px;\n  color: #00000099;\n}\n\n.effect-apollo img {\n  opacity: 0.95;\n  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\n  transition: opacity 0.35s, transform 0.35s;\n  -webkit-transform: scale3d(1.05, 1.05, 1);\n  transform: scale3d(1.05, 1.05, 1);\n}\n\n.effect-apollo:hover img {\n  opacity: 0.6;\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n}\n\n.figcaption::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.5);\n  content: \"\";\n  -webkit-transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, -100%, 0);\n  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, -100%, 0);\n}\n\n.figcaption:hover::before {\n  -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, 100%, 0);\n  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)\n    translate3d(0, 100%, 0);\n}\n\n.caja-destino-texto p {\n  margin-bottom: 5px;\n}\n\n.caja-destino-texto p:nth-of-type(2) {\n  color: #00000099;\n  font-size: 14px;\n  line-height: 17px;\n}\n\n.caja-destino-texto p:nth-of-type(3),\n.caja-destino-texto p:nth-of-type(4) {\n  font-size: 14px;\n  line-height: 17px;\n}\n\n/* ===== Scrollbar CSS ===== */\n/* Firefox */\n.wishlist-bucket {\n  scrollbar-width: auto;\n  scrollbar-color: #7a7a7a #f2f2f2;\n}\n\n/* Chrome, Edge, and Safari */\n.wishlist-bucket::-webkit-scrollbar {\n  width: 16px;\n}\n\n.wishlist-bucket::-webkit-scrollbar-track {\n  background: #f2f2f2;\n}\n\n.wishlist-bucket::-webkit-scrollbar-thumb {\n  background-color: #7a7a7a;\n  border-radius: 10px;\n  border: 5px solid #f2f2f2;\n}\n\n.remove-wishlist {\n  position: absolute;\n  right: 5px;\n  top: 3px !important;\n}\n\n.tab-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.tab-button {\n  background-color: #f1f1f1;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.tab-button:hover {\n  background-color: #ddd;\n}\n\n.tab-content {\n  display: none;\n  margin-top: 20px;\n}\n\n.tab-content.active {\n  display: block;\n}\n\n/*Dropdown*/\n/*.dropdown-container {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  margin: 10px;\n}\n\n.dropdown-input {\n  width: 200px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.dropdown-list {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  max-height: 200px;\n  overflow-y: auto;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.dropdown-item {\n  padding: 5px;\n  cursor: pointer;\n}\n\n.dropdown-item:hover {\n  background-color: #f2f2f2;\n}\n\n.dropdownAeropuerto {\n  width: 100%;\n  height: 40px;\n}*/\n\n/* Menu Wishlist */\n.knobs,\n.layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.button-wl-menu {\n  position: relative;\n  top: 50%;\n  width: 100%;\n  height: 36px;\n  margin: -20px auto 0 auto;\n  overflow: hidden;\n}\n\n.button-wl-menu.r,\n.button-wl-menu.r .layer {\n  border-radius: 100px;\n}\n\n.button-wl-menu.b2 {\n  border-radius: 2px;\n}\n\n.checkbox {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.knobs {\n  z-index: 2;\n}\n\n.layer {\n  width: 100%;\n  background-color: #ffffff;\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n\n/* Button 10 */\n#menu-wishlist {\n  border: 1px solid #ccc !important;\n  border-radius: 16px;\n  width: 70%;\n}\n\n#menu-wishlist .knobs:before,\n#menu-wishlist .knobs:after,\n#menu-wishlist .knobs span {\n  position: absolute;\n  top: 4px;\n  width: 50%;\n  height: 27px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 0.7;\n  padding: 9px 4px;\n  border-radius: 2px;\n  transition: 0.3s ease all;\n  font-size: 13px;\n}\n\n#menu-wishlist .knobs:before {\n  content: \"\";\n  left: 4px;\n  background-color: #a12885;\n  border-radius: 20px;\n}\n\n#menu-wishlist .knobs:after {\n  content: \"New destinations\";\n  right: 4px;\n  color: #4e4e4e;\n}\n\n#menu-wishlist .knobs span {\n  display: inline-block;\n  left: 4px;\n  color: #fff;\n  z-index: 1;\n}\n\n#menu-wishlist .checkbox:checked + .knobs span {\n  color: #4e4e4e;\n}\n\n#menu-wishlist .checkbox:checked + .knobs:before {\n  left: 49%;\n  background-color: #a12885;\n}\n\n#menu-wishlist .checkbox:checked + .knobs:after {\n  color: #fff;\n}\n\n#menu-wishlist .checkbox:checked ~ .layer {\n  background-color: #ffffff;\n}\n\n/*Para la alerta de vuelo compartido*/\n.check_circle {\n  color: #427f10;\n  font-size: 65px;\n  padding-bottom: 30px;\n  text-align: center;\n  width: 100%;\n}\n\n/*Dropdoen */\n.dropdownAeropuerto {\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc !important;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  margin-top: 10px;\n  width: 100%;\n  font: inherit;\n  position: relative;\n}\n\n.input-group-addon.volaris {\n  color: rgb(255, 255, 255);\n  background-color: rgb(250, 250, 250);\n  border-color: rgb(212, 63, 58);\n  position: absolute;\n  right: 16px;\n  width: 8%;\n  height: 33px;\n  top: 12px;\n  border-radius: 5px;\n}\n\n.arrow-voi {\n  color: #a12885;\n  size: 10px;\n  font-size: 35px;\n  margin-left: -5px;\n}\n\n.dropdown-list {\n  display: block;\n  z-index: 10;\n  position: absolute;\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  max-height: 200px;\n  overflow-y: overlay;\n  width: 93%;\n  margin-top: -30px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n.dropdown-item {\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n}\n\n#tab1 {\n  display: block;\n  width: 48vw;\n  padding: 10px 30px;\n  height: 60vh;\n}\n\n#tab2 {\n  display: block;\n  width: 48vw;\n  padding: 10px 50px;\n  height: 60vh;\n  display: none;\n}\n\n.compass-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #a12885;\n}\n\n.close-new-destinations {\n  color: #6b676a;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.caja-destinos-nuevos {\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc !important;\n  border-radius: 10px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  width: 108%;\n  font: inherit;\n}\n\n.caja-destinos-nuevos-title {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 10px !important;\n  max-height: 4.5em; /* Altura m\u00e1xima de cuatro l\u00edneas */\n  /*overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; */ /* Evitar que el texto se ajuste autom\u00e1ticamente */\n}\n\ndiv.caja-destinos-nuevos-title {\n  display: -webkit-box;\n  max-height: 3em; /* Altura m\u00e1xima de tres l\u00edneas */\n  overflow: hidden;\n  -webkit-line-clamp: 3; /* N\u00famero de l\u00edneas que se mostrar\u00e1n */\n  -webkit-box-orient: vertical;\n  line-height: 1.2; /* Ajusta la altura de l\u00ednea seg\u00fan tus necesidades */\n}\n\n.truncate-container {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  position: relative;\n  line-height: 1.2;\n  max-height: calc(2 * 1.2em); /* Altura m\u00e1xima para dos l\u00edneas */\n}\n.truncate-text {\n  display: inline;\n  position: relative;\n  z-index: 1;\n}\n/*.fadeout {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%);\n  width: 50px;\n  height: 1.2em;\n  z-index: 2;\n}*/\n\n.caja-destinos-nuevos-subtitle {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.nuevos-destinos-boxes {\n  margin-top: 32px;\n}\n\n#newRoutesContent {\n  max-height: 150px;\n  overflow-y: overlay;\n}\n\n#contenidoWLTabOne {\n  max-height: 58vh;\n  overflow-y: overlay;\n}\n\n.input-error-nd {\n  border: 2px solid #e80808 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  #tab2 {\n    width: 100%;\n    padding: 10px 40px;\n  }\n\n  #tab1 {\n    width: 100%;\n  }\n\n  #menu-wishlist {\n    width: 90%;\n  }\n}</style>", "dependencies": []}, {"id": "57d3ddf046324b34a3a4567be003b7a7", "type": "append", "dependencies": [], "selector": "#LoggedIn", "value": "<li id=\"wlm\"><a id=\"btnMiWishlist\" href=\"javascript:void(0);\" class=\"btn-wishlist-logged\"><span class=\"material-symbols-outlined icon-corazon-header\">favorite</span><span _ngcontent-nbt-c1=\"\">My Wishlist</span></a></li>", "operator": "before"}, {"id": "08e50b646f934d0fb552518fb73bdf84", "type": "append", "dependencies": [], "selector": "#SignInUp > ul.d-lg-none.sign-sm > li:nth-child(1)", "value": "<li>\n    <a id=\"btn-wishlist-responsive\" href=\"javascript:void(0);\" class=\"ng-star-inserted btn-wishlist-logged\" style=\"margin-top: 8px;\">\n        <span class=\"material-symbols-outlined icon-heart-header\">\n            favorite\n        </span>\n    </a>\n</li>", "operator": "before"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "a6cc13e4a7d144098ef2d2953bc820c3", "selector": "#btn-wishlist-responsive"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "07e5480677434c3899512d3179112462", "selector": "#btnMiWishlist"}]}, {"viewId": "25122521202", "changes": [{"id": "dc807876cd6d45aa9618b1926be0e8c1", "type": "custom_code", "value": function($){//Obtener cookie
function getCookieWishlistFlight(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Guardar cookie
function setCookieWishlistFlight(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//Muestra modal de destino añadido
function showModalDestination() {
    var textoTitulo = "Añadido exitosamente a Favoritos";
    var textoBoton = "Cerrar";
    var textoModal = "Entra a tu lista desde el ícono de tu cuenta en la parte superior del sitio.";

    if ($("#mcp > a > span:nth-child(1)").text().includes("Eng")) {
        textoTitulo = "Added successfully to wishlist";
        textoBoton = "Close";
        textoModal = "Access your wishlist from your profile icon at the top of the site.";
    }

    var mensajeExitoso =
        '<div class="cdk-overlay-container" id="popupConfirmedDestination"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalWLSuccess"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' +
        textoTitulo +
        '</h6> </div> <div class="mat-dialog-content" mat-dialog-content="" style="padding: 10px;overflow-x: hidden;"><p>' +
        textoModal +
        '</p><a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalWLSuccess" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
        textoBoton +
        '</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
    $("body").append(mensajeExitoso);
    $("#wishlist-content").addClass("d-none");
}

function modalIniciaSesionWL() {
    var textoBoton = "Iniciar sesión";
    var textoModal = "Inicia sesión o regístrate para agregar vuelos a tu wishlist y no perder de vista tus destinos favoritos.";
    var textoDescarte = "Descartar";

    if ($("#mcp > a > span:nth-child(1)").text().includes("Eng")) {
        textoBoton = "Log in";
        textoModal = "Login or sign up to add flights to your wishlist and keep track of your favorite destinations.";
        textoDescarte = "Discard";
    }

    var mensajeExitoso =
        '<div class="cdk-overlay-container" id="popupLoginWishlist"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout" style="padding: 10px;"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog btnCerrarTacheLoginWL" id="btnCerrarTacheLoginWL" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a></div> <div class="mat-dialog-content" mat-dialog-content="" style="overflow-x: hidden;"><p>' +
        textoModal +
        '</p><div class="row"><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-secondary btnCerrarTacheLoginWL" color="secondary" mat-flat-button=""><span class="mat-button-wrapper">' +
        textoDescarte +
        '</span></a></div><div class="col-6"><a href="javascript:void(0);" class="btn btn-small mat-raised-button mat-button-base mat-primary btnLoginWL" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
        textoBoton +
        '</span></a></div></div> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
    $("body").append(mensajeExitoso);
}

//Abrir módulo de iniciar sesión en wishlist
$(document.body).on("click", ".login-wishlist-action", function (e) {
    /*window.$("#Login > button").click();
    $("#popupLogin").remove();*/
    modalIniciaSesionWL();
});

//Al cerrar modal de destino añadido
$(document.body).on("click", ".cerrarModalWLSuccess", function (e) {
    $("#popupConfirmedDestination").remove();
    $("#wishlist-content").addClass("d-none");
});

$(document.body).on("click", ".btnCerrarTacheLoginWL", function (e) {
    $("#popupLoginWishlist").remove();
});

$(document.body).on("click", ".btnLoginWL", function (e) {
    window.$("#Login > button").click();
    $("#popupLoginWishlist").remove();
});

$(document.body).on("click", ".btnFullList", function (e) {
    var textoTitulo = "Parece que tu lista está llena. ";
    var textoBoton = "Entendido";
    var textoModal = "Para agregar un nuevo destino, borra uno de los guardados en Favoritos, ingresando al lado del ícono de tu cuenta en la parte superior del sitio.";

    if ($("#mcp > a > span:nth-child(1)").text().includes("Eng")) {
        textoTitulo = "Looks like your wishlist is full";
        textoBoton = "Understood";
        textoModal = "To add a new destination, delete a saved one from your list by clicking next to your account icon at the top of the site.";
    }

    var mensajeExitoso =
        '<div class="cdk-overlay-container" id="popupConfirmedDestination"> <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div> <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: center;"> <div id="cdk-overlay-1" class="cdk-overlay-pane sessionTimeoutDialog" style="max-width: 340px; pointer-events: auto; width: 100%; position: static; margin-left: 0px;"> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> <mat-dialog-container style="width:600px;" aria-modal="true" class="mat-dialog-container ng-tns-c41-24 ng-trigger ng-trigger-dialogContainer ng-star-inserted" tabindex="-1" id="mat-dialog-1" role="dialog" aria-labelledby="mat-dialog-title-1" style="transform: none;"> <shared-session-timeout class="ng-star-inserted"> <div class="sessionTimeout"> <div class="mat-dialog-title" mat-dialog-title="" id="mat-dialog-title-1"> <a class="closeDialog cerrarModalWLSuccess"  id="btnCerrarTache" href="javascript:void(0);" mat-dialog-close="" type="button"><span class="icon-cancel"></span></a> <h6>' +
        textoTitulo +
        '</h6> </div> <div class="mat-dialog-content" mat-dialog-content="" style="padding: 10px;overflow-x: hidden;"><p>' +
        textoModal +
        '</p><a href="javascript:void(0);" class="btn btn-large btn-sessionout mat-flat-button mat-button-base mat-primary cerrarModalWLSuccess" id="btnCerrarMod" color="primary" mat-flat-button=""><span class="mat-button-wrapper">' +
        textoBoton +
        '</span></a> <div class="mat-button-ripple mat-ripple" matripple=""></div> <div class="mat-button-focus-overlay"></div> </button> </div> </div> </shared-session-timeout></mat-dialog-container> <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div> </div> </div> </div>';
    $("body").append(mensajeExitoso);
    $("#wishlist-content").addClass("d-none");
});

//Guardar nuevo destino en cookie, wishlist
$(document.body).on("click", ".wishlist-action", function (e) {
    var wishlistList = document.getElementById("wishlist-list").value;
    setCookieWishlistFlight("wishlist_array", wishlistList, 30);
    var wishlistDetailed = document.getElementById("wishlist-list-detailed").value;
    setCookieWishlistFlight("wishlist_array_detailed", wishlistDetailed, 30);
    //Guardar información referente al vuelo
    showModalDestination();
});

//Get info vuelo
function getInfoVuelo() {
    var adt = utag_data.num_Pax_Adults;
    var chd = utag_data.num_Pax_Children;
    var in1 = 0; /*número de infantes */
    var rr = "False";
    if (utag_data.flight_type == "Round Trip") {
        rr = "True";
    }
    var cc = utag_data.currency;

    var fechaOrigen = utag_data.origin_date;
    const [yearO, monthO, dayO] = fechaOrigen.split("-");
    var dd1 = monthO + "/" + dayO + "/" + yearO; // formato 09/30/2022 '2022-09-29'

    var fechaRetorno = utag_data.return_date;
    const [yearR, monthR, dayR] = fechaRetorno.split("-");
    var dd2 = monthR + "/" + dayR + "/" + yearR; // formato 09/30/2022 '2022-09-29'

    var culture = utag_data.language_code;
    var o1 = utag_data.from_airport;
    var d1 = utag_data.to_airport;
    var dni = 0;

    var cookieArray =
        adt +
        "|" +
        chd +
        "|" +
        String(in1) +
        "|" +
        String(rr) +
        "|" +
        cc +
        "|" +
        String(dd1) +
        "|" +
        String(dd2) +
        "|" +
        culture +
        "|" +
        o1 +
        "|" +
        d1 +
        "|" +
        String(dni);

    return cookieArray;
}

//Añade banner de wishlist
$(document).ready(function () {
    var elementWishlistContent = $("#wishlist-content");
    if (elementWishlistContent.length <= 0) {
        $("#Routeinformation").after("<div id='wishlist-content'></div>");
    }

    var labelAddFavorite = "Añadir a mis favoritos";
    if ($("#mcp > a > span:nth-child(1)").text().includes("Eng")) {
        labelAddFavorite = "Add to wishlist";
    }

    //Identificar si está en sesión
    if (utag_data.customer_email == '' || utag_data.customer_email == 'WebAnonymous' || utag_data.customer_email == undefined || utag_data.customer_email == 'undefined') {
        var elementoBannerLogin = $("#wishlist-message-login");
        if (elementoBannerLogin.length <= 0) {
            $("#wishlist-content").html(
                '<div id="wishlist-message-login" class="ng-star-inserted"><div class="booking-details wishlist-details"><p><a class="login-wishlist login-wishlist-action"><span class="material-symbols-outlined icon-corazon">favorite</span>' + labelAddFavorite + '</a></p></div></div>'
            );
        }
    } else {
        var wishlistList = [];
        var wishlistDetailed = [];
        var contadorDestinos = 0;
        var fullWishlist = false;

        var cookieList = getCookieWishlistFlight("wishlist_array");
        var cookieListDetailed = getCookieWishlistFlight("wishlist_array_detailed");

        var valuesCookie = cookieList.split(",");
        for (var i = 0; i < valuesCookie.length; i++) {
            if (valuesCookie[i] !== "" && valuesCookie[i] !== 'undefined') {
                wishlistList.push(valuesCookie[i]);
                contadorDestinos = contadorDestinos + 1;
            }
        }

        var valuesCookieDetailed = cookieListDetailed.split(",");
        for (var i = 0; i < valuesCookieDetailed.length; i++) {
            if (valuesCookieDetailed[i] !== "" && valuesCookie[i] !== 'undefined') {
                wishlistDetailed.push(valuesCookieDetailed[i]);
            }
        }

        var infoVuelo = getInfoVuelo();

        var showBanner = true;
        if (wishlistList.includes(utag_data.to_airport)) {
            // Hacer algo si el valor está en la lista de deseos
            showBanner = false;
        } else {
            wishlistList.push(utag_data.to_airport);
            wishlistDetailed.push(infoVuelo);
        }

        if (contadorDestinos >= 8) {
            showBanner = false;
            fullWishlist = true;
        }

        if (showBanner) {
            var elementoBanner = $("#wishlist-message");
            // Verifica si el elemento fue encontrado
            if (elementoBanner.length <= 0) {
                $("#wishlist-content").html(
                    '<div id="wishlist-message" class="ng-star-inserted"><div class="booking-details wishlist-details"><p><a class="login-wishlist wishlist-btn wishlist-action"><span class="material-symbols-outlined icon-corazon">favorite</span>' + labelAddFavorite + '</a></p><input type="hidden" name="toAirport" id="toAirport" value="' +
                    utag_data.to_airport +
                    '"><input type="hidden" id="wishlist-list" name="wishlist-list" value="' +
                    wishlistList +
                    '"><input type="hidden" id="fromAirport" name="fromAirport" value="' +
                    utag_data.from_airport +
                    '"><input type="hidden" id="wishlist-list-detailed" name="wishlist-list-detailed" value="' +
                    wishlistDetailed +
                    '"></div></div>'
                );
            }
        }
        if (fullWishlist) {
            var elementoBannerFull = $("#wishlist-message-full");
            if (elementoBannerFull.length <= 0) {
                $("#wishlist-content").html(
                    '<div id="wishlist-message-full" class="ng-star-inserted"> <div class="booking-details wishlist-details"> <p><a class="login-wishlist wishlist-btn wishlist-action btnFullList"><span class="material-symbols-outlined icon-corazon">favorite</span>' + labelAddFavorite + '</a></p> </div> </div>'
                );
            }
        }
    }
});
}, "dependencies": []}, {"id": "f845329a0cfc4b399ed678a637f0c793", "type": "append", "selector": "head", "value": "<style>@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);\n.check_circle {\n  color: #427f10;\n  font-size: 65px;\n  padding-bottom: 30px;\n  text-align: center;\n  width: 100%;\n}\n#wishlist-button {\n  width: 38px;\n  height: 38px;\n  background: #a12885;\n  min-width: 10px !important;\n  padding: 3px 7px;\n}\n.wishlist-icon {\n  width: 36px;\n  height: 36px;\n  color: #fff;\n}\n.login-wishlist,\n.wishlist-btn {\n  min-width: 0 !important;\n  width: auto !important;\n  color: #a12885 !important;\n  margin-top: 10px;\n}\n.login-wishlist,\n.login-wishlist span {\n  font-size: 16px;\n  cursor: pointer;\n}\n.material-symbols-outlined:hover {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n.login-wishlist:hover > .material-symbols-outlined {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "25261041019", "endOfRange": 5000}, {"entityId": "25325670202", "endOfRange": 7500}, {"entityId": "25260460651", "endOfRange": 10000}], "name": "Test - Wishlist - Flight Search & User Profile (Fifth Iteration)", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["24631980032", "25122521202", "25155420995", "25176760426"], "weightDistributions": null, "decisionMetadata": null}], "groups": [], "audiences": [{"id": "8265491574", "name": "Audience - Desktop Version", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "window.innerWidth > 768"}]]]}, {"id": "10759632009", "name": "Audience - EU Visits", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "|||EU"}, {"match": null, "name": null, "type": "location", "value": "DE"}, {"match": null, "name": null, "type": "location", "value": "AT"}, {"match": null, "name": null, "type": "location", "value": "BE"}, {"match": null, "name": null, "type": "location", "value": "BG"}, {"match": null, "name": null, "type": "location", "value": "HR"}, {"match": null, "name": null, "type": "location", "value": "CY"}, {"match": null, "name": null, "type": "location", "value": "CZ"}, {"match": null, "name": null, "type": "location", "value": "DK"}, {"match": null, "name": null, "type": "location", "value": "EE"}, {"match": null, "name": null, "type": "location", "value": "FI"}, {"match": null, "name": null, "type": "location", "value": "FR"}, {"match": null, "name": null, "type": "location", "value": "HU"}, {"match": null, "name": null, "type": "location", "value": "IE"}, {"match": null, "name": null, "type": "location", "value": "IT"}, {"match": null, "name": null, "type": "location", "value": "LV"}, {"match": null, "name": null, "type": "location", "value": "LT"}, {"match": null, "name": null, "type": "location", "value": "LU"}, {"match": null, "name": null, "type": "location", "value": "MT"}, {"match": null, "name": null, "type": "location", "value": "NL"}, {"match": null, "name": null, "type": "location", "value": "PL"}, {"match": null, "name": null, "type": "location", "value": "PT"}, {"match": null, "name": null, "type": "location", "value": "RO"}, {"match": null, "name": null, "type": "location", "value": "SK"}, {"match": null, "name": null, "type": "location", "value": "SI"}, {"match": null, "name": null, "type": "location", "value": "ES"}, {"match": null, "name": null, "type": "location", "value": "SE"}, {"match": null, "name": null, "type": "location", "value": "GB"}]]]}, {"id": "24427040243", "name": "Audience - Anonymous Users", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "utag_data.customer_type == 'Anonymous'"}], ["or", {"match": null, "name": null, "type": "code", "value": "utag_data.customer_type == ''"}]]]}], "listTargetingKeys": [], "visitorAttributes": [{"id": "7507670280", "datatype": "double", "name": "Luggage", "dcp_datasource_id": "7513340296"}, {"id": "7510742159", "datatype": "double", "name": "Seat", "dcp_datasource_id": "7513340296"}, {"id": "7517330711", "datatype": "string", "name": "FlightDate", "dcp_datasource_id": "7513340296"}, {"id": "7521410026", "datatype": "string", "name": "RecordLocator", "dcp_datasource_id": "7513340296"}, {"id": "8454877337", "datatype": "string", "name": "Volaris VClub Customer Type", "dcp_datasource_id": "8462524272"}, {"id": "8461735313", "datatype": "string", "name": "Volaris Days Until VClub Expiration of Membership", "dcp_datasource_id": "8462524272"}, {"id": "8466690868", "datatype": "string", "name": "Volaris VClub Registration Date", "dcp_datasource_id": "8462524272"}, {"id": "17283614216", "datatype": "string", "name": "faresandseats", "dcp_datasource_id": "17291106498"}, {"id": "24395360506", "datatype": "string", "name": "destination", "dcp_datasource_id": "24421110906"}, {"id": "24437160441", "datatype": "string", "name": "origin", "dcp_datasource_id": "24421110906"}], "visitorIdLocator": null, "dcpServiceId": "7501915816", "dcpKeyfieldLocators": [{"dcp_datasource_id": "17291106498", "is_optimizely": false, "type": "cookie", "name": "amplitude_device_id"}, {"dcp_datasource_id": "24421110906", "is_optimizely": false, "type": "uid", "name": ""}, {"dcp_datasource_id": "7505535840", "is_optimizely": true, "type": "uid", "name": ""}, {"dcp_datasource_id": "7513340296", "is_optimizely": false, "type": "cookie", "name": "a1ashgd"}, {"dcp_datasource_id": "8462524272", "is_optimizely": false, "type": "uid", "name": ""}], "integrationSettings": [], "views": [{"id": "18160291111", "category": "other", "apiName": "973095788_bf__flight_search_page_ngen", "name": "BF - Flight Search Page (NGEN)", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/flight"}, {"match": "simple", "type": "url", "value": "https://web-uat-k8s.webopsvolaris.com/flight"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return ($('#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted').is(":visible"));
}
}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
 *
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

function jsCondition() {
  return utag_data.visiting_country != 'CO';
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "18171703234", "category": "other", "apiName": "973095788_bf__confirmation_page_ngen", "name": "BF - Confirmation Page [NGEN]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/confirmation"}, {"match": "simple", "type": "url", "value": "https://web-uat-k8s.webopsvolaris.com/confirmation"}], ["or", {"type": "custom_code", "value": function () {
var domesticos= ["ACA","ACN","AGU","AJS","AZG","AZP","BBP","BBS","BHL","BJX","CEN","CJS","CJT","CLQ","CME","CNA","CPE","CTM","CUA","CUL","CUN","CUU","CVJ","CVM","CYW","CZA","CZM","DGO","ESE","GDL","GUB","GYM","HMO","HUX","ISJ","IZT","JAL","LAP","LMM","LOM","LOV","LTO","LZC","MAM","MEX","MID","MLM","MMC","MTT","MTY","MUG","MXL","MZT","NCG","NLD","NLU","NOG","NTR","OAX","PAZ","PBC","PCM","PCO","PCV","PDS","PJZ","PNO","PPE","PQM","PUH","PVR","PXM","QRO","REX","SCX","SFH","SGM","SJD","SLP","SLW","SNQ","SRL","SZT","TAM","TAP","TCN","TGZ","TIJ","TLC","TPQ","TRC","TSL","TUY","TZM","UAC","UPN","VER","VIB","VSA","XAL","XXD","XXO","ZCL","ZIH","ZLO","ZMM"];

return ( domesticos.includes(utag_data.to_airport) && domesticos.includes(utag_data.from_airport));
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "18199391328", "category": "other", "apiName": "973095788_bf__passengers__payment_ngen", "name": "BF - Passengers & Payment [NGEN]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/payment"}, {"match": "simple", "type": "url", "value": "https://web-uat-k8s.webopsvolaris.com/payment"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return $("#Passenger").is(":visible");
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [{"category": "other", "apiName": "pageview_pp_test", "locator": "#PassengerDetail", "locatorType": "css_selector", "valueType": "string"}], "activationType": "dom_changed"}, {"id": "18254190011", "category": "other", "apiName": "973095788_bf__passengers_and_payment", "name": "BF - Passengers and Payment [NGEN] (ENG)", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/payment"}, {"match": "simple", "type": "url", "value": "https://web-uat-k8s.webopsvolaris.com/payment"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
 *
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

function jsCondition() {
  return $("#mcp > a > span:nth-child(1)").text().includes("Eng") && $("#Passenger").is(":visible") && !$("#system-loader").is(":visible");
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "18262000014", "category": "other", "apiName": "973095788_bf__passengers_and_payment_ngen_esp_1", "name": "BF - Passengers and Payment [NGEN] (ESP)", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/payment"}, {"match": "simple", "type": "url", "value": "https://web-uat-k8s.webopsvolaris.com/payment"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
 *
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

function jsCondition() {
  return $("#mcp > a > span:nth-child(1)").text().includes("Esp") && $("#Passenger").is(":visible") && !$("#system-loader").is(":visible");
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "19734915242", "category": "other", "apiName": "973095788_metric__passengers__payment_ngen", "name": "Metric - Passengers & Payment [NGEN]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/payment"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return ($("#Passenger").is(":visible") && !$("#system-loader > div > div").is(":visible"));
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "19738096838", "category": "other", "apiName": "973095788_metric__fs_overview_ngen", "name": "Metric - FS Overview [NGEN]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/flight"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return ($("#Baggages").is(":visible")  && !$("#system-loader > div > div").is(":visible"));
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "19741946665", "category": "other", "apiName": "973095788_metric__flight_search_ngen", "name": "Metric - Flight Search [NGEN]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/flight"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return ($('#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted').is(":visible") && !$("#system-loader > div > div").is(":visible"));
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "19743357526", "category": "other", "apiName": "973095788_metric__seatmap_ngen", "name": "Metric - SeatMap [NGEN]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/seat"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return ($("#SeatMap").is(":visible") && !$("#system-loader > div > div").is(":visible"));
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "19747604355", "category": "other", "apiName": "973095788_metric__homepage_ngen", "name": "Metric - Homepage [NGEN]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return $("#SearchWidgetAndCarousel").is(":visible");
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "19751026771", "category": "other", "apiName": "973095788_metric__confirmation_ngen", "name": "Metric - Confirmation [NGEN]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/confirmation"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return ($("#ReservationBanner").is(":visible")  && !$("#system-loader > div > div").is(":visible"));
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "20024431975", "category": "other", "apiName": "973095788_url_targeting_for_copy_of_implementation__gdpr_impleme", "name": "URL Targeting for Implementation - GDPR Implementation", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.volaris.com/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20375803827", "category": "other", "apiName": "973095788_bf__flight_search__flights_section_esp", "name": "BF - Flight Search - Flights section (ESP)", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://web-uat-k8s.webopsvolaris.com/flight"}, {"match": "simple", "type": "url", "value": "https://www.volaris.com/flight"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return ($('#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted').is(":visible") && $("#mcp > a > span:nth-child(1)").text().includes("Esp"));
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "20377475567", "category": "other", "apiName": "973095788_bf__flight_search__flights_section_eng", "name": "BF - Flight Search - Flights section (ENG)", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://web-uat-k8s.webopsvolaris.com/flight"}, {"match": "simple", "type": "url", "value": "https://www.volaris.com/flight"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return ($('#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted').is(":visible") && !$("#system-loader > div > div").is(":visible") && $("#mcp > a > span:nth-child(1)").text().includes("Eng"));
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "20845140367", "category": "other", "apiName": "973095788_flights_santa_lucia_ing", "name": "Flights Santa Lucia ENG", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/flight"}, {"match": "simple", "type": "url", "value": "https://web-uat-k8s.webopsvolaris.com/flight"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return ($('#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted').is(":visible") && !$("#system-loader > div > div").is(":visible") && $("#mcp > a > span:nth-child(1)").text().includes("Eng"));
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "20851680115", "category": "other", "apiName": "973095788_flights_santa_lucia_espaol", "name": "Flights Santa Lucia ESP", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/flight"}, {"match": "simple", "type": "url", "value": "https://web-uat-k8s.webopsvolaris.com/flight"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return ($('#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted').is(":visible") && !$("#system-loader > div > div").is(":visible") && $("#mcp > a > span:nth-child(1)").text().includes("Esp"));
}



}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "24631980032", "category": "other", "apiName": "973095788_bf__all_logged_in_pages", "name": "BF - All Logged In Pages (Esp)", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "web-uat-k8s.webopsvolaris.com"}, {"match": "substring", "type": "url", "value": "volaris.com"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  var exists = document.cookie.indexOf('wishlist_array=');
  exists = 1;
  if (exists > 0) {
    return true;
  } else {
    return false;
  }
}
}], ["or", {"type": "custom_code", "value": function jsCondition() {
  return $("#mcp > a > span:nth-child(1)").text().includes("Esp");
}
}], ["or", {"type": "element_present", "value": "#LoggedIn"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "25122521202", "category": "other", "apiName": "973095788_bf__flight_search_page_ngen_1", "name": "BF - Flight Search Page [NGEN] - Wishlist", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.volaris.com/flight"}, {"match": "simple", "type": "url", "value": "https://web-uat-k8s.webopsvolaris.com/flight"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  return ($('#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted').is(":visible"));
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "25155420995", "category": "other", "apiName": "973095788_bf__all_logged_out_pages_esp", "name": "BF - All Logged Out Pages", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "web-uat-k8s.webopsvolaris.com"}, {"match": "substring", "type": "url", "value": "volaris.com"}], ["or", {"type": "element_present", "value": "#Login"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "25176760426", "category": "other", "apiName": "973095788_bf__all_logged_in_pages_eng", "name": "BF - All Logged In Pages (Eng)", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "web-uat-k8s.webopsvolaris.com"}, {"match": "substring", "type": "url", "value": "volaris.com"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  var exists = document.cookie.indexOf('wishlist_array=');
  exists = 1;
  if (exists > 0) {
    return true;
  } else {
    return false;
  }
}
}], ["or", {"type": "custom_code", "value": function jsCondition() {
  return $("#mcp > a > span:nth-child(1)").text().includes("Eng");
}
}], ["or", {"type": "element_present", "value": "#LoggedIn"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}], "events": [{"id": "18265465483", "viewId": "18199391328", "name": "BF - Passengers and Payment [NGEN] - Cotinue to Payment", "category": "other", "apiName": "973095788_cotinue_to_payment", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#PassengerContact > mbs-passenger-contact > div > form > div.row.cta > div > button"}}, {"id": "18404384213", "viewId": "18199391328", "name": "Option 2 Survey", "category": "other", "apiName": "973095788_option_2_survey", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "label:nth-of-type(2)"}}, {"id": "18417822731", "viewId": "18199391328", "name": "Close window", "category": "other", "apiName": "973095788_close_window", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "span"}}, {"id": "18464201848", "viewId": "18199391328", "name": "Option 3 Survey", "category": "other", "apiName": "973095788_option_3_survey", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "label:nth-of-type(3)"}}, {"id": "18472031371", "viewId": "18199391328", "name": "Option 4 Survey", "category": "other", "apiName": "973095788_option_4_survey", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "label:nth-of-type(4)"}}, {"id": "18477831311", "viewId": "18199391328", "name": "Option 1 Survey", "category": "other", "apiName": "973095788_option_1_survey", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "label:nth-of-type(1)"}}, {"id": "18482820344", "viewId": "18199391328", "name": "Submit", "category": "other", "apiName": "973095788_submit", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "button"}}, {"id": "20480376977", "viewId": null, "name": "Get_Origin_Flight", "category": "other", "apiName": "973095788_bf__homepage_ngen__get_origin_uat", "eventType": "custom", "eventFilter": null}, {"id": "21030932735", "viewId": "18171703234", "name": "button_factura", "category": "other", "apiName": "973095788_button_factura", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#factura"}}, {"id": "21530152798", "viewId": "20845140367", "name": "Click_tooltip 8pUB5P9AiZ2kdTQ14LGn2", "category": "other", "apiName": "973095788_click_tooltip_8pUB5P9AiZ2kdTQ14LGn2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#Flightlists > mbs-flight-lists > div.flightLists.ng-star-inserted > div:nth-child(6) > div > div.flightSchedule.stop-0.col-md-7 > div:nth-child(1) > img"}}, {"id": "24195290557", "viewId": "18160291111", "name": "click_btnCompartirVuelo", "category": "other", "apiName": "973095788_click_btncompartirvuelo", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#shareFlightF"}}, {"id": "24374570301", "viewId": "20375803827", "name": "Button_access Jg3Wk51Sm6nqbsC9TNUWm BkVH5JikQWjfxRgyZoj5P", "category": "other", "apiName": "973095788_button_access_Jg3Wk51Sm6nqbsC9TN_BkVH5JikQWjfxRgyZoj5P", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#login-wrap > div > div > div:nth-child(2) > div > form > div.submit > button"}}, {"id": "24387970319", "viewId": "20375803827", "name": "Button_log_1 ScECrjEiP4WH6CYFvHMMi 787hUP6dJQBbv1aZa1UYF", "category": "other", "apiName": "973095788_button_log_1_ScECrjEiP4WH6CYFvHM_787hUP6dJQBbv1aZa1UYF", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#Login > button"}}, {"id": "24391920159", "viewId": "20375803827", "name": "Close_Box NS754hu2Zt7Jzn3eg2aAt RVXNYvQrU7nv5TM73Bk5h", "category": "other", "apiName": "973095788_close_box_1_NS754hu2Zt7Jzn3eg2aA_RVXNYvQrU7nv5TM73Bk5h", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#boxFS > a > img"}}, {"id": "24425070150", "viewId": "20375803827", "name": "Button_sign_up WMhRQLFxDr1kfwR5R769N BdL7bTr7JHyQ4nk1AYTVU", "category": "other", "apiName": "973095788_button_sign_up_WMhRQLFxDr1kfwR5R_BdL7bTr7JHyQ4nk1AYTVU", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#SignUp > button"}}, {"id": "24586950040", "viewId": "18199391328", "name": "click_btnLoginPax ASe99PMZVxgJ1tELf9Cma LDqWFAB5WPLxt2pFgqGFo", "category": "other", "apiName": "973095788_click_btnloginpax_ASe99PMZVxgJ1t_LDqWFAB5WPLxt2pFgqGFo", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btnLoginPax"}}, {"id": "24783780242", "viewId": null, "name": "Seat ancillary increase", "category": "other", "apiName": "seat_increase", "eventType": "custom", "eventFilter": null}, {"id": "25218250777", "viewId": "25176760426", "name": "click_btnMiWishlist AtA18X6k22YGgGxy6Kz8n HZ8TNWfsRTppovEWUFpkm", "category": "other", "apiName": "973095788_click_btnmiwishlist_2_AtA18X6k22_HZ8TNWfsRTppovEWUFpkm", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btnMiWishlist"}}, {"id": "25233910763", "viewId": "24631980032", "name": "click_btnAbreWishlistResponsive 7M1PMJwqKZB5EY9NPGuF1", "category": "other", "apiName": "973095788_click_btnabrewishlistresponsive_7M1PMJwqKZB5EY9NPGuF1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btn-wishlist-responsive"}}, {"id": "25235961198", "viewId": "24631980032", "name": "click_btnMiWishlist 43MDzzADwHcqjvUjf9HuG", "category": "other", "apiName": "973095788_click_btnmiwishlist_VaYkDaAg5z91_43MDzzADwHcqjvUjf9HuG", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btnMiWishlist"}}, {"id": "25238420522", "viewId": "25176760426", "name": "click_btnAbreWishlistResponsive 8KG4NjM35s32UUXxNxBpn", "category": "other", "apiName": "973095788_click_btnabrewishlistresponsive__8KG4NjM35s32UUXxNxBpn", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btn-wishlist-responsive"}}, {"id": "25238430908", "viewId": "25122521202", "name": "click_addToWishlist", "category": "other", "apiName": "973095788_click_addtowishlist", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#wishlist-message > div > p > a"}}, {"id": "25239060965", "viewId": "25176760426", "name": "click_btnMiWishlist AtA18X6k22YGgGxy6Kz8n", "category": "other", "apiName": "973095788_click_btnmiwishlist_2_AtA18X6k22YGgGxy6Kz8n", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btnMiWishlist"}}, {"id": "25245240710", "viewId": "24631980032", "name": "click_btnMiWishlist", "category": "other", "apiName": "973095788_click_btnmiwishlist_VaYkDaAg5z91_6YZUGRtwknZ8YN9pE645A", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btnMiWishlist"}}, {"id": "25257400329", "viewId": "25176760426", "name": "click_btnMiWishlist", "category": "other", "apiName": "973095788_click_btnmiwishlist_2_AtA18X6k22_TP9WAhCnPi3Udshugdsot", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btnMiWishlist"}}, {"id": "25259250595", "viewId": "25176760426", "name": "click_btnAbreWishlistResponsive 8KG4NjM35s BRRd8aSUMdQo9cKzA7rjS", "category": "other", "apiName": "973095788_click_btnabrewishlistresponsive__BRRd8aSUMdQo9cKzA7rjS", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btn-wishlist-responsive"}}, {"id": "25270370113", "viewId": "24631980032", "name": "click_btnAbreWishlistResponsive", "category": "other", "apiName": "973095788_click_btnabrewishlistresponsive__W7QBZ2A9Y45RisytUZ8N5", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btn-wishlist-responsive"}}, {"id": "25294970105", "viewId": "24631980032", "name": "click_btnAbreWishlistResponsive 7M1PMJwqKZ DP1QFoNfkiAHRwpRRwJoQ", "category": "other", "apiName": "973095788_click_btnabrewishlistresponsive__DP1QFoNfkiAHRwpRRwJoQ", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btn-wishlist-responsive"}}, {"id": "25302670280", "viewId": "25176760426", "name": "click_btnMiWishlist Dqk6dZiW1x51wtkTyemrP", "category": "other", "apiName": "973095788_click_btnmiwishlist_2_AtA18X6k22_Dqk6dZiW1x51wtkTyemrP", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btnMiWishlist"}}, {"id": "25311790192", "viewId": "24631980032", "name": "click_btnAbreWishlistResponsive RhNDMLg9tcVBHqA7ocNMS", "category": "other", "apiName": "973095788_click_btnabrewishlistresponsive__RhNDMLg9tcVBHqA7ocNMS", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btn-wishlist-responsive"}}, {"id": "25333860006", "viewId": "25122521202", "name": "click_addToWishlist 3gohpfeqVMkFQytU4MLER", "category": "other", "apiName": "973095788_click_addtowishlist_3gohpfeqVMkFQytU4MLER", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#wishlist-message > div > p > a"}}], "dimensions": [{"id": "21916413141", "name": "Origin Flight Route", "apiName": "origin_flight_route", "segmentId": null}, {"id": "21964160124", "name": "Origin Hub", "apiName": "origin_hub", "segmentId": null}, {"id": "22380203197", "name": "User Device Type", "apiName": "user_device_type", "segmentId": null}], "projectJS": function(){window.optimizely = window.optimizely || [];

var PJS = window.CRO_PJS = window.CRO_PJS || function () {
  var PJS = {};
  PJS.isDev = /cro(metrics)?-debug|optimizely_local/.test(window.location.search) || localStorage && localStorage.getItem("cro-debug");

  PJS.log = PJS.isDev && console && console.info && console.info.bind(console, '[PJS]') || function () {};

  PJS.error = function (errorCode, details) {
    if (console && console.error) console.error('PJS Error:', errorCode, '\n', details);
  };

  return PJS;
}();

(function () {
  try {
    /* Local Storage is required */
    var key = 'optimizely-store-required';
    window.localStorage.setItem(key, true);
    window.localStorage.removeItem(key);
  } catch (e) {
    window.optimizely.push({
      "type": "disable"
    });
    return;
  }

  PJS.supportsIE = false;

  if (window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1) {
    /* Disable Optimizely on IE <= 10 and IE11 */
    PJS.log("IE detected; disabling Optimizely");
    window.optimizely.push({
      "type": "disable"
    });
    return;
  }

  try {
    (function () {
      /**
        Detect Async Loading
        @author Amanda Smith <amanda.smith@crometrics.com>
        Last Modified: 12/7/18
      
        Attempts to detect whether Optimizely is running async.
        Done by looking for a body element -- if Optly is sync
        and running in the head, it should render-block the 
        body from being loaded while the PJS is running.
      */
      if (!!document.querySelector("body")) {
        // we can change this to do something fancier later
        PJS.log("Nonstandard Optimizely loading detected! Check whether the snippet is running async, " + "through a tag manager, or in the body. Ideally Optimizely should be installed sync, directly in the head.");
      }
    })();
  } catch (e) {
    PJS.error("x/detect-async", e);
  }

  try {
    (function () {
      /**
       * Minimal Common Utilities
       * @author andrew.wessels@crometrics.com (7/30/2019)
       *
       * Add additional common utility functions into Optimizely's utils
      */
      var utils = PJS.utils = PJS.utils || {};
      if (PJS.isDev) utils.isDev = true;
      /**
       * @description Browser Cookie Utilities
       *
       * @method cookie.set sets a cookie with optional days
       *  @param {string} name the name of the cookie
       *  @param {string} value the value of the cookie
       *  @param {number?} optDays days the cookie will exist for, if omitted the cookie will be a "Session Cookie"
       *
       * @method cookie.get gets value of cookie
       *  @param {string} name name of cookie to get
       *  @return {string|null} string value of cookie NOT A BOOL!
       *
       * @method cookie.del removes cookie
       *  @param {string} name name of cookie to delete
       */

      utils.cookie = {
        set: function set(name, value, optDays, domain) {
          var cookie = name + '=' + value;

          if (optDays) {
            var date = new Date();
            date.setTime(date.getTime() + optDays * 24 * 60 * 60 * 1000);
            cookie += '; expires=' + date.toGMTString();
          }

          if (domain) {
            cookie += '; domain=' + domain;
          }

          document.cookie = cookie + '; path=/';
        },
        get: function get(name) {
          var nameEQ = name + '=';
          var ca = document.cookie.split(';');

          for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
          }

          return null;
        },
        del: function del(name) {
          document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/");
        }
      };
      /**
       * @description URL Parameter utilities
       *
       * @method params.parse
       *  @param {string} search the location string, eg: ?param=1&foo=bar
       *  @returns {ParamsObject} a key:value representation of the params, eg: { "param": "1", "foo": "bar" }
       *
       * @method params.buildString
       *  @param {ParamsObject} paramsObj accepts a key:value object as returned from the parse function
       *  @returns returns a formatted location string; this is the reverse of the parse function. eg: "?param=1&foo=bar"
       *
       * @method params.set
       *  @param {ParamsObject} paramsObj accepts a key:value object as returned from the parse function
       *  @param {HTMLElement} target a target object which accepts the `.search` attribute, typically an <a> tag or the window.location object (which is the default).
       */

      utils.params = {
        parse: function parse() {
          var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;
          return search.substr(1).split('&').reduce(function (out, param) {
            var split = param.split('=');
            if (split[0].length) out[split[0]] = decodeURIComponent(split[1]);
            return out;
          }, {});
        },
        buildString: function buildString(paramsObj) {
          return '?' + Object.keys(paramsObj).map(function (param) {
            return param + (paramsObj[param] ? '=' + encodeURIComponent(paramsObj[param]) : '');
          }).join('&');
        },
        set: function set(paramsObj) {
          var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location;
          target.search = utils.params.buildString(paramsObj);
        }
      };
      /**
       * Extend Optimizely's utils singleton with the additional methods above
       */

      var extend = function extend() {
        var utils = window.optimizely.get('utils'); //Add the generic PJS utils to the Optimizely utils:

        for (var fnName in PJS.utils) {
          utils[fnName] = PJS.utils[fnName];
        }
        /**
         * @method log runs console.log based on PJS.isDev status
         * @param {...args} args values passed to console.log prefixed with `[cro]`
         */


        utils.log = function () {
          var _console;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (PJS.isDev) (_console = console).info.apply(_console, ['[cro]'].concat(args));
        };
        /**
         * @method waitForjQuery waits for window.jQuery to become available
         * @return {Promise} resolves when jQuery becomes available, returns a Promise object (using Optimizely's Promise polyfill)
         */


        utils.waitForjQuery = function () {
          var jQueryPromise;
          return function () {
            //lazy load the polling since it may not always be necessary
            if (!jQueryPromise) jQueryPromise = utils.waitUntil(function () {
              return typeof window.jQuery === 'function';
            }).then(function () {
              return window.jQuery;
            });
            return jQueryPromise;
          };
        }();
      };

      if (window.optimizely.initialized) {
        extend(); //This only happens in preview mode via Optimizely UI
      } else {
        window.optimizely.push({
          'type': 'addListener',
          'filter': {
            'type': 'lifecycle',
            'name': 'initialized'
          },
          'handler': extend
        });
      }
    })();
  } catch (e) {
    PJS.error("x/min-utilities", e);
  }

  try {
    (function () {
      /** 
        [PJS] Crometrics Test Cookie
        Authors: 
          @Matthew_Gossage (matthew.gossage@crometrics.com)
          @Ahmad_Kayyali (ahmad.kayyali@crometrics.com)
      
        Track and persist the crometrics QA cookie if a given url param, or the cookie
        itself, is present.
      
        This cookie defaults to a lifetime of 15 minutes (renewed every time this module runs).
        The default for Optimizely QA links is 15 minutes, so that's what we're using here.
      */
      var COOKIE_NAME = "crometrics_test_cookie";
      var DISABLE_RE = /crometrics_test_cookie=false/;
      var ENABLE_RE = /crometrics_test_cookie=true/;
      var disable = DISABLE_RE.test(window.location.search);
      var enable = ENABLE_RE.test(window.location.search) || ENABLE_RE.test(window.document.cookie); // This will match if the cookie or enable query param are present.

      if (enable) {
        if (disable) {
          // If we've been told to disable it, then do so.
          window.document.cookie = "".concat(COOKIE_NAME, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/");
        } else {
          // Otherwise, persist (or enable) the cookie.
          var date = new Date();
          date.setTime(date.getTime() + 15 * 60 * 1000);
          window.document.cookie = "".concat(COOKIE_NAME, "=true; expires=").concat(date.toGMTString(), "; path=/; domain=.").concat(window.location.hostname.split(".").slice(-2).join("."));
          window.optimizely.push({
            type: "addListener",
            filter: {
              type: "analytics",
              name: "trackEvent"
            },
            handler: function handler(event) {
              PJS.log("Metric fired: ".concat(event.data.name, " <").concat(event.data.apiName, ">"));
            }
          });
        }
      }
    })();
  } catch (e) {
    PJS.error("x/crometrics-test-cookie", e);
  }

  try {
    (function () {
      /**
       * HotJar Triggering and Recording Tagging
       * @author matthew.gossage@crometrics.com (2/3/17)
       * @author chase.marlow@crometrics.com (12/22/17)
       * @author amanda.smith@crometrics.com (5/22/18)
       * @author andrew.wessels@crometrics.com (7/9/18)
       *
       * Adds a `campaignDecided` listener and uses it to trigger and tag hotjar recordings.
       */
      //Note: name values are not available if "Mask descriptive names in project code and third-party integrations" snippet privacy setting is enabled.
      var parseTag = function parseTag(name) {
        var availableCharacters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36;

        if (name) {
          var nameMatch = name.match(/^([a-zA-Z]+)-?([\d\.]+)/);

          if (nameMatch) {
            return "".concat(nameMatch[1].toLowerCase()).concat(nameMatch[2]);
          } else {
            return name.toLowerCase().substr(0, availableCharacters).trim().replace(/[^a-z0-9]+/g, '-');
          }
        }
      };

      var getCampaignTag = function getCampaignTag(campaign, experience, availableCharacters) {
        var campaignName = parseTag(experience.campaignName) || campaign.id || 'unknown'; //experience.name if a name is explicitly set, experience.audienceName if one is implicitly given

        var audienceName = parseTag(experience.name || experience.audienceName) || experience.id || 'unknown';

        if (campaignName.length + audienceName.length + 1 > availableCharacters) {
          //if the name is too long, trim the longer of the two values
          if (campaignName.length > audienceName.length) {
            campaignName = campaignName.substr(0, availableCharacters - audienceName.length - 1);
          } else {
            audienceName = audienceName.substr(0, availableCharacters - campaignName.length - 1);
          }
        }

        return campaignName + '-' + audienceName;
      };

      var getExperimentTag = function getExperimentTag(experiment, availableCharacters) {
        return parseTag(experiment.name, availableCharacters) || experiment.id || 'unknown';
      }; // Trigger and Tag Hotjar.


      var campaignDecided = function campaignDecided(event) {
        // Also, only track if we're not part of the holdback.
        if (event.data.decision.isCampaignHoldback === false && event.data.decision.variationId !== null) {
          var decision = event.data.decision;
          var campaign = event.data.campaign;
          var experiment = window.optimizely.get('data').experiments[decision.experimentId];

          var varTag = function (variations, variationId) {
            for (var i = 0; i < variations.length; i++) {
              if (variations[i].id === variationId) {
                return 'v' + i;
              }
            }

            return variationId;
          }(experiment.variations, decision.variationId);

          var availableCharacters = 50 - varTag.length - 1;
          var experimentTag = experiment.hasOwnProperty('campaignName') ? getCampaignTag(campaign, experiment, availableCharacters) : getExperimentTag(experiment, availableCharacters); //note: trigger_name.length must be <= 50

          var trigger_name = (experimentTag + '-' + varTag).substr(0, 50); //failsafe truncation

          ;

          (function pollforHJ() {
            if (window.hj && window.hj.q) {
              window.hj('trigger', trigger_name);
              window.hj('tagRecording', [trigger_name]);
              PJS.log('Triggered Hotjar: ' + trigger_name, event.data);
            } else setTimeout(pollforHJ, 500);
          })();
        }
      };

      window.optimizely.push({
        type: "addListener",
        filter: {
          type: "lifecycle",
          name: "campaignDecided"
        },
        // Add the campaignDecided function as a handler.
        handler: campaignDecided
      });
    })();
  } catch (e) {
    PJS.error("x/hj", e);
  }
})();
}, "plugins": [function(PluginManager) {
  
  PluginManager.registerAnalyticsTracker('10850492796', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['10850492796'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}
], "interestGroups": [], "tagGroups": []},f=__webpack_require__(8821),l="initializeOptimizelyPreview";if(f.initGlobalStore(s),a.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())u.registerFunction("getProjectId",(function(){return s.projectId})),u.registerFunction("getAccountId",(function(){return s.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadPreview())(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:s}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(106).setupPreviewGlobal(),__webpack_require__(106).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:s}),r.isSlave()||(u.registerFunction("getProjectId",(function(){return s.projectId})),c.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/973095788.js"));else if(r.shouldBootstrapDataForPreview()){u.registerFunction(l,(function(t){n(),u.unregisterFunction(l)}));var d=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:u.getFunction("getProjectId")();h=r.getProjectToken(),v=d,p=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",h).replace("__PROJECT_ID__",v).replace("__PREVIEW_LAYER_IDS__",p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),c.addScriptSync(o),__webpack_require__(106).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(u.registerFunction(l,(function(t){n(),u.unregisterFunction(l)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&n();var h,v,p;t.timeEnd("block");var g=t.now();t.setMark("optimizelyFinished",startTime=g,duration=g)}}()}catch(n){try{__webpack_require__(6708).handleError(n)}catch(t){console.log(t)}}}()})();