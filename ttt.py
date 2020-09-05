import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt


# t = [["move",1154,89,1598155755313,"pointermove"],["move",1156,89,1598155755316,"pointermove"],["move",1161,89,1598155755324,"pointermove"],["move",1165,89,1598155755335,"pointermove"],["move",1195,102,1598155755720,"pointermove"],["move",1195,103,1598155756657,"pointermove"],["move",1194,104,1598155756662,"pointermove"],["move",1194,106,1598155756671,"pointermove"],["move",1194,108,1598155756679,"pointermove"],["move",1193,110,1598155756687,"pointermove"],["move",1193,111,1598155756702,"pointermove"],["move",1193,112,1598155756711,"pointermove"],["move",1192,113,1598155756727,"pointermove"],["move",1192,115,1598155756735,"pointermove"],["move",1191,116,1598155756741,"pointermove"],["move",1191,118,1598155756749,"pointermove"],["move",1190,119,1598155756756,"pointermove"],["move",1190,120,1598155756764,"pointermove"],["move",1189,120,1598155756789,"pointermove"],["move",1189,121,1598155756889,"pointermove"],["move",1189,123,1598155756896,"pointermove"],["move",1188,126,1598155756904,"pointermove"],["move",1187,130,1598155756912,"pointermove"],["move",1187,131,1598155756920,"pointermove"],["move",1186,134,1598155756929,"pointermove"],["move",1186,137,1598155756937,"pointermove"],["move",1185,141,1598155756945,"pointermove"],["move",1184,142,1598155756953,"pointermove"],["move",1184,145,1598155756959,"pointermove"],["move",1183,147,1598155756967,"pointermove"],["move",1183,149,1598155756975,"pointermove"],["move",1182,151,1598155756983,"pointermove"],["move",1182,152,1598155756991,"pointermove"],["move",1181,154,1598155756999,"pointermove"],["move",1179,157,1598155757007,"pointermove"],["move",1177,159,1598155757015,"pointermove"],["move",1172,163,1598155757023,"pointermove"],["move",1169,165,1598155757029,"pointermove"],["move",1165,166,1598155757037,"pointermove"],["move",1162,167,1598155757045,"pointermove"],["move",1161,167,1598155757061,"pointermove"],["move",1161,168,1598155757177,"pointermove"],["move",1161,169,1598155757185,"pointermove"],["move",1160,170,1598155757193,"pointermove"],["move",1159,171,1598155757201,"pointermove"],["move",1159,172,1598155757209,"pointermove"],["move",1159,173,1598155757233,"pointermove"],["move",1159,172,1598155757357,"pointermove"],["move",1159,171,1598155757381,"pointermove"],["move",1159,170,1598155757395,"pointermove"],["move",1160,167,1598155757583,"pointermove"],["move",1161,165,1598155757590,"pointermove"],["move",1161,163,1598155757598,"pointermove"],["move",1162,161,1598155757607,"pointermove"],["move",1162,160,1598155757614,"pointermove"],["move",1162,159,1598155757620,"pointermove"],["scroll",1162,161,1598155757679,None],["scroll",1162,164,1598155757682,None],["scroll",1162,170,1598155757697,None],["scroll",1162,178,1598155757702,None],["scroll",1162,186,1598155757719,None],["scroll",1162,199,1598155757734,None],["scroll",1162,211,1598155757756,None],["scroll",1162,224,1598155757770,None],["scroll",1162,240,1598155757788,None],["scroll",1162,256,1598155757801,None],["move",1162,158,1598155757809,"pointermove"],["move",1164,156,1598155757817,"pointermove"],["scroll",1164,188,1598155757817,None],["move",1166,150,1598155757824,"pointermove"],["move",1169,145,1598155757832,"pointermove"],["scroll",1169,175,1598155757833,None],["move",1171,142,1598155757838,"pointermove"],["move",1175,137,1598155757846,"pointermove"],["move",1177,131,1598155757862,"pointermove"],["scroll",1177,159,1598155757862,None],["scroll",1177,169,1598155757867,None],["move",1178,128,1598155757883,"pointermove"],["scroll",1178,146,1598155757883,None],["move",1178,126,1598155757907,"pointermove"],["scroll",1178,138,1598155757907,None],["scroll",1178,140,1598155757916,None],["scroll",1178,138,1598155757933,None],["scroll",1178,139,1598155757966,None],["scroll",1178,142,1598155757984,None],["move",1178,127,1598155757994,"pointermove"],["scroll",1178,135,1598155758000,None],["scroll",1178,145,1598155758017,None],["scroll",1178,154,1598155758035,None],["scroll",1178,168,1598155758050,None],["scroll",1178,183,1598155758067,None],["scroll",1178,200,1598155758084,None],["scroll",1178,217,1598155758100,None],["move",1179,125,1598155758113,"pointermove"],["scroll",1179,161,1598155758117,None],["move",1181,122,1598155758120,"pointermove"],["move",1184,119,1598155758129,"pointermove"],["scroll",1184,153,1598155758134,None],["move",1187,117,1598155758137,"pointermove"],["move",1188,117,1598155758143,"pointermove"],["scroll",1188,147,1598155758150,None],["move",1188,116,1598155758153,"pointermove"],["scroll",1188,142,1598155758167,None],["move",1190,116,1598155758183,"pointermove"],["scroll",1190,134,1598155758183,None],["move",1192,116,1598155758191,"pointermove"],["move",1200,117,1598155758199,"pointermove"],["scroll",1200,129,1598155758201,None],["move",1211,117,1598155758207,"pointermove"],["move",1234,121,1598155758213,"pointermove"],["scroll",1234,127,1598155758217,None],["move",1254,125,1598155758221,"pointermove"],["move",1264,128,1598155758229,"pointermove"],["scroll",1264,130,1598155758234,None],["move",1281,135,1598155758237,"pointermove"],["move",1294,141,1598155758245,"pointermove"],["move",1296,142,1598155758253,"pointermove"],["move",1300,145,1598155758261,"pointermove"],["move",1302,146,1598155758268,"pointermove"],["move",1302,147,1598155758277,"pointermove"],["move",1303,147,1598155758315,"pointermove"],["move",1304,145,1598155758323,"pointermove"],["move",1306,143,1598155758331,"pointermove"],["move",1310,139,1598155758338,"pointermove"],["move",1313,134,1598155758347,"pointermove"],["move",1317,129,1598155758354,"pointermove"],["move",1321,121,1598155758361,"pointermove"],["move",1324,116,1598155758368,"pointermove"],["move",1325,114,1598155758376,"pointermove"],["move",1327,111,1598155758384,"pointermove"],["move",1328,108,1598155758393,"pointermove"],["move",1330,105,1598155758400,"pointermove"],["move",1331,104,1598155758409,"pointermove"],["move",1333,102,1598155758417,"pointermove"],["move",1334,100,1598155758425,"pointermove"],["move",1335,99,1598155758432,"pointermove"],["move",1336,99,1598155758509,"pointermove"],["move",1336,98,1598155758540,"pointermove"],["down",1336,98,1598155758581,"pointerdown"],["focus",1598155758598],["up",1336,98,1598155758664,"pointerup"],["move",1336,100,1598155758743,"pointermove"],["move",1336,101,1598155758751,"pointermove"],["move",1336,104,1598155758759,"pointermove"],["move",1336,107,1598155758767,"pointermove"],["move",1336,109,1598155758775,"pointermove"],["move",1336,118,1598155758782,"pointermove"],["move",1327,159,1598155759194,"pointermove"],["move",1329,157,1598155759195,"pointermove"],["move",1331,155,1598155759204,"pointermove"],["move",1333,153,1598155759211,"pointermove"],["move",1334,152,1598155759219,"pointermove"],["move",1337,149,1598155759227,"pointermove"],["move",1340,146,1598155759235,"pointermove"],["move",1344,142,1598155759246,"pointermove"],["move",1348,139,1598155759249,"pointermove"],["move",1350,135,1598155759257,"pointermove"],["move",1353,132,1598155759265,"pointermove"],["move",1357,130,1598155759273,"pointermove"],["move",1359,128,1598155759281,"pointermove"],["move",1359,127,1598155759289,"pointermove"],["move",1360,126,1598155759297,"pointermove"],["move",1361,125,1598155759305,"pointermove"],["move",1362,124,1598155759313,"pointermove"],["move",1363,122,1598155759319,"pointermove"],["move",1364,121,1598155759335,"pointermove"],["move",1364,120,1598155759367,"pointermove"],["move",1365,119,1598155759375,"pointermove"],["move",1367,118,1598155759383,"pointermove"],["move",1368,117,1598155759391,"pointermove"],["move",1369,116,1598155759397,"pointermove"],["move",1370,116,1598155759405,"pointermove"],["move",1371,116,1598155759413,"pointermove"],["move",1371,115,1598155759420,"pointermove"],["move",1371,114,1598155759437,"pointermove"],["move",1372,114,1598155759444,"pointermove"],["move",1373,113,1598155759452,"pointermove"],["move",1375,112,1598155759458,"pointermove"],["move",1376,111,1598155759466,"pointermove"],["move",1378,110,1598155759474,"pointermove"],["move",1379,109,1598155759482,"pointermove"],["move",1380,108,1598155759490,"pointermove"],["move",1381,108,1598155759506,"pointermove"],["move",1381,107,1598155759522,"pointermove"],["move",1381,106,1598155759601,"pointermove"],["move",1382,106,1598155759609,"pointermove"],["move",1383,105,1598155759616,"pointermove"],["move",1384,104,1598155759631,"pointermove"],["move",1385,104,1598155759647,"pointermove"],["move",1385,103,1598155759655,"pointermove"],["down",1385,103,1598155760259,"pointerdown"],["up",1385,103,1598155760371,"pointerup"],["move",1385,102,1598155760503,"pointermove"],["move",1385,101,1598155760519,"pointermove"],["move",1385,100,1598155760527,"pointermove"],["move",1385,99,1598155760534,"pointermove"],["move",1385,98,1598155760543,"pointermove"],["move",1384,98,1598155760551,"pointermove"],["move",1384,97,1598155760567,"pointermove"],["move",1383,97,1598155761665,"pointermove"],["move",1383,98,1598155761719,"pointermove"],["move",1382,99,1598155761727,"pointermove"],["move",1380,101,1598155761736,"pointermove"],["move",1378,102,1598155761742,"pointermove"],["move",1377,104,1598155761748,"pointermove"],["move",1376,105,1598155761756,"pointermove"],["move",1375,107,1598155761765,"pointermove"],["move",1373,109,1598155761773,"pointermove"],["move",1373,110,1598155761780,"pointermove"],["move",1372,112,1598155761789,"pointermove"],["move",1371,113,1598155761797,"pointermove"],["move",1371,115,1598155761805,"pointermove"],["move",1370,117,1598155761814,"pointermove"],["move",1368,120,1598155761821,"pointermove"],["move",1367,123,1598155761827,"pointermove"],["move",1364,126,1598155761834,"pointermove"],["move",1363,129,1598155761842,"pointermove"],["move",1362,134,1598155761850,"pointermove"],["move",1360,138,1598155761858,"pointermove"],["move",1360,140,1598155761866,"pointermove"],["move",1359,142,1598155761874,"pointermove"],["move",1359,144,1598155761882,"pointermove"],["move",1358,146,1598155761890,"pointermove"],["move",1358,147,1598155761896,"pointermove"],["move",1358,148,1598155761904,"pointermove"],["move",1358,149,1598155761912,"pointermove"],["move",1358,150,1598155761920,"pointermove"],["move",1358,151,1598155761928,"pointermove"],["move",1359,152,1598155761936,"pointermove"],["move",1361,153,1598155761944,"pointermove"],["move",1363,154,1598155761954,"pointermove"],["move",1364,154,1598155761961,"pointermove"],["move",1365,154,1598155761967,"pointermove"],["move",1367,154,1598155761974,"pointermove"],["move",1368,154,1598155761983,"pointermove"],["move",1370,153,1598155761991,"pointermove"],["move",1374,152,1598155761999,"pointermove"],["move",1382,151,1598155762007,"pointermove"],["move",1390,150,1598155762015,"pointermove"],["move",1400,150,1598155762022,"pointermove"],["move",1411,150,1598155762032,"pointermove"],["move",1420,150,1598155762039,"pointermove"],["move",1431,150,1598155762045,"pointermove"],["move",1447,150,1598155762053,"pointermove"],["move",1459,150,1598155762060,"pointermove"],["move",1484,150,1598155762068,"pointermove"],["move",1501,150,1598155762077,"pointermove"],["move",1513,150,1598155762085,"pointermove"],["move",1526,150,1598155762093,"pointermove"],["move",1535,151,1598155762101,"pointermove"],["move",1540,151,1598155762109,"pointermove"],["move",1541,152,1598155762114,"pointermove"],["move",1541,153,1598155762333,"pointermove"],["move",1541,154,1598155762349,"pointermove"],["move",1541,155,1598155762357,"pointermove"],["move",1542,156,1598155762364,"pointermove"],["move",1542,157,1598155762389,"pointermove"],["move",1543,157,1598155762405,"pointermove"],["move",1544,157,1598155762419,"pointermove"],["move",1545,158,1598155762427,"pointermove"],["move",1546,158,1598155762451,"pointermove"],["down",1546,158,1598155762587,"pointerdown"],["focus",1598155762592],["up",1546,158,1598155762668,"pointerup"]]


# t = [["move",92,4,1598162638932,"pointermove"],["move",92,8,1598162638947,"pointermove"],["move",92,27,1598162638963,"pointermove"],["move",92,40,1598162638980,"pointermove"],["move",92,58,1598162638997,"pointermove"],["move",92,71,1598162639013,"pointermove"],["move",91,84,1598162639030,"pointermove"],["move",91,97,1598162639046,"pointermove"],["move",89,116,1598162639063,"pointermove"],["move",89,140,1598162639080,"pointermove"],["move",88,156,1598162639096,"pointermove"],["move",85,170,1598162639113,"pointermove"],["move",84,183,1598162639130,"pointermove"],["move",84,194,1598162639146,"pointermove"],["move",83,214,1598162639163,"pointermove"],["move",83,238,1598162639180,"pointermove"],["move",83,251,1598162639196,"pointermove"],["move",83,259,1598162639213,"pointermove"],["move",83,271,1598162639229,"pointermove"],["move",83,279,1598162639246,"pointermove"],["move",83,285,1598162639262,"pointermove"],["move",83,291,1598162639279,"pointermove"],["move",83,298,1598162639296,"pointermove"],["move",83,306,1598162639312,"pointermove"],["move",84,315,1598162639329,"pointermove"],["move",85,321,1598162639346,"pointermove"],["move",86,326,1598162639362,"pointermove"],["move",87,331,1598162639379,"pointermove"],["move",87,335,1598162639396,"pointermove"],["move",88,338,1598162639412,"pointermove"],["move",89,339,1598162639429,"pointermove"],["move",90,342,1598162639446,"pointermove"],["move",92,345,1598162639462,"pointermove"],["move",94,348,1598162639479,"pointermove"],["move",97,350,1598162639496,"pointermove"],["move",102,351,1598162639512,"pointermove"],["move",108,351,1598162639529,"pointermove"],["move",119,351,1598162639546,"pointermove"],["move",132,351,1598162639562,"pointermove"],["move",161,349,1598162639579,"pointermove"],["move",216,349,1598162639596,"pointermove"],["move",276,353,1598162639612,"pointermove"],["move",324,357,1598162639629,"pointermove"],["move",372,359,1598162639646,"pointermove"],["move",398,361,1598162639662,"pointermove"],["move",432,361,1598162639679,"pointermove"],["move",481,361,1598162639696,"pointermove"],["move",508,361,1598162639712,"pointermove"],["move",532,361,1598162639729,"pointermove"],["move",552,358,1598162639745,"pointermove"],["move",570,358,1598162639762,"pointermove"],["move",606,357,1598162639779,"pointermove"],["move",645,355,1598162639796,"pointermove"],["move",676,353,1598162639812,"pointermove"],["move",700,350,1598162639829,"pointermove"],["move",720,348,1598162639846,"pointermove"],["move",761,344,1598162639862,"pointermove"],["move",788,343,1598162639879,"pointermove"],["move",831,335,1598162639896,"pointermove"],["move",881,328,1598162639912,"pointermove"],["move",899,326,1598162639929,"pointermove"],["move",912,325,1598162639946,"pointermove"],["move",917,324,1598162639962,"pointermove"],["move",922,323,1598162639979,"pointermove"],["move",927,321,1598162639995,"pointermove"],["move",932,319,1598162640012,"pointermove"],["move",935,317,1598162640029,"pointermove"],["move",939,316,1598162640045,"pointermove"],["move",944,314,1598162640062,"pointermove"],["move",952,312,1598162640079,"pointermove"],["move",959,309,1598162640095,"pointermove"],["move",966,308,1598162640112,"pointermove"],["move",971,306,1598162640129,"pointermove"],["move",979,303,1598162640145,"pointermove"],["move",984,299,1598162640162,"pointermove"],["move",987,297,1598162640179,"pointermove"],["move",988,297,1598162640195,"pointermove"],["move",989,296,1598162640220,"pointermove"],["move",990,295,1598162640229,"pointermove"],["move",991,294,1598162640245,"pointermove"],["move",992,294,1598162640318,"pointermove"],["move",992,293,1598162640333,"pointermove"],["move",993,293,1598162640355,"pointermove"],["move",995,293,1598162640363,"pointermove"],["move",998,292,1598162640379,"pointermove"],["move",1015,288,1598162640395,"pointermove"],["move",1023,288,1598162640412,"pointermove"],["move",1026,288,1598162640429,"pointermove"],["move",1028,288,1598162640445,"pointermove"],["move",1031,287,1598162640462,"pointermove"],["move",1038,285,1598162640478,"pointermove"],["move",1046,284,1598162640495,"pointermove"],["move",1056,282,1598162640512,"pointermove"],["move",1060,282,1598162640529,"pointermove"],["move",1063,281,1598162640545,"pointermove"],["move",1066,281,1598162640562,"pointermove"],["move",1071,279,1598162640579,"pointermove"],["move",1078,276,1598162640595,"pointermove"],["move",1083,274,1598162640612,"pointermove"],["move",1089,273,1598162640628,"pointermove"],["move",1097,271,1598162640645,"pointermove"],["move",1108,268,1598162640662,"pointermove"],["move",1122,267,1598162640678,"pointermove"],["move",1141,264,1598162640695,"pointermove"],["move",1152,261,1598162640712,"pointermove"],["move",1159,260,1598162640728,"pointermove"],["move",1167,258,1598162640745,"pointermove"],["move",1175,255,1598162640762,"pointermove"],["move",1182,253,1598162640778,"pointermove"],["move",1187,251,1598162640795,"pointermove"],["move",1190,251,1598162640812,"pointermove"],["move",1193,249,1598162640828,"pointermove"],["move",1197,247,1598162640845,"pointermove"],["move",1201,246,1598162640862,"pointermove"],["move",1210,244,1598162640878,"pointermove"],["move",1217,243,1598162640895,"pointermove"],["move",1223,243,1598162640912,"pointermove"],["move",1229,243,1598162640928,"pointermove"],["move",1237,243,1598162640945,"pointermove"],["move",1248,243,1598162640962,"pointermove"],["move",1257,243,1598162640978,"pointermove"],["move",1265,243,1598162640995,"pointermove"],["move",1269,243,1598162641012,"pointermove"],["move",1273,243,1598162641028,"pointermove"],["move",1280,244,1598162641045,"pointermove"],["move",1294,244,1598162641062,"pointermove"],["move",1303,245,1598162641078,"pointermove"],["move",1311,246,1598162641095,"pointermove"],["move",1317,250,1598162641112,"pointermove"],["move",1320,252,1598162641128,"pointermove"],["move",1324,254,1598162641145,"pointermove"],["move",1326,256,1598162641162,"pointermove"],["move",1327,257,1598162641178,"pointermove"],["move",1328,259,1598162641228,"pointermove"],["move",1329,262,1598162641245,"pointermove"],["move",1331,264,1598162641262,"pointermove"],["move",1331,265,1598162641278,"pointermove"],["move",1333,269,1598162641295,"pointermove"],["move",1333,274,1598162641312,"pointermove"],["move",1334,280,1598162641328,"pointermove"],["move",1335,287,1598162641345,"pointermove"],["move",1335,298,1598162641361,"pointermove"],["move",1335,303,1598162641378,"pointermove"],["move",1335,306,1598162641395,"pointermove"],["move",1335,308,1598162641412,"pointermove"],["move",1334,310,1598162641428,"pointermove"],["move",1333,312,1598162641445,"pointermove"],["move",1332,314,1598162641461,"pointermove"],["move",1331,316,1598162641478,"pointermove"],["move",1331,318,1598162641495,"pointermove"],["move",1331,320,1598162641511,"pointermove"],["move",1330,323,1598162641528,"pointermove"],["move",1330,327,1598162641545,"pointermove"],["move",1330,331,1598162641561,"pointermove"],["move",1330,335,1598162641578,"pointermove"],["move",1330,338,1598162641595,"pointermove"],["move",1329,344,1598162641611,"pointermove"],["move",1328,347,1598162641628,"pointermove"],["move",1328,351,1598162641645,"pointermove"],["move",1327,355,1598162641661,"pointermove"],["move",1326,359,1598162641678,"pointermove"],["move",1325,363,1598162641695,"pointermove"],["move",1324,371,1598162641711,"pointermove"],["move",1323,376,1598162641728,"pointermove"],["move",1323,381,1598162641745,"pointermove"],["move",1323,384,1598162641761,"pointermove"],["move",1323,387,1598162641778,"pointermove"],["move",1323,389,1598162641795,"pointermove"],["move",1323,391,1598162641811,"pointermove"],["move",1323,397,1598162641828,"pointermove"],["move",1323,398,1598162641845,"pointermove"],["move",1323,399,1598162641861,"pointermove"],["move",1323,400,1598162641929,"pointermove"],["move",1324,400,1598162641953,"pointermove"],["move",1325,400,1598162641967,"pointermove"],["move",1326,400,1598162641978,"pointermove"],["move",1327,400,1598162641999,"pointermove"],["move",1328,399,1598162642031,"pointermove"],["move",1329,398,1598162642045,"pointermove"],["move",1332,396,1598162642061,"pointermove"],["move",1334,395,1598162642078,"pointermove"],["move",1337,394,1598162642095,"pointermove"],["move",1343,393,1598162642111,"pointermove"],["move",1353,393,1598162642128,"pointermove"],["move",1359,393,1598162642144,"pointermove"],["move",1364,394,1598162642161,"pointermove"],["move",1368,394,1598162642178,"pointermove"],["move",1373,395,1598162642194,"pointermove"],["move",1378,395,1598162642211,"pointermove"],["move",1381,396,1598162642228,"pointermove"],["move",1382,396,1598162642278,"pointermove"],["move",1386,395,1598162642294,"pointermove"],["move",1391,394,1598162642311,"pointermove"],["move",1396,393,1598162642328,"pointermove"],["move",1398,393,1598162642344,"pointermove"],["move",1399,393,1598162642365,"pointermove"],["move",1401,392,1598162642378,"pointermove"],["move",1406,391,1598162642394,"pointermove"],["move",1412,391,1598162642411,"pointermove"],["move",1415,391,1598162642428,"pointermove"],["move",1416,391,1598162642444,"pointermove"],["move",1417,390,1598162642475,"pointermove"],["move",1419,389,1598162642481,"pointermove"],["move",1422,388,1598162642494,"pointermove"],["move",1426,386,1598162642511,"pointermove"],["move",1429,385,1598162642528,"pointermove"],["move",1430,385,1598162642544,"pointermove"],["move",1432,384,1598162642561,"pointermove"],["move",1437,384,1598162642578,"pointermove"],["move",1442,384,1598162642594,"pointermove"],["move",1444,384,1598162642611,"pointermove"],["move",1446,384,1598162642628,"pointermove"],["move",1447,383,1598162642694,"pointermove"],["move",1448,382,1598162642699,"pointermove"],["move",1451,380,1598162642719,"pointermove"],["move",1455,377,1598162642736,"pointermove"],["move",1457,377,1598162642752,"pointermove"],["move",1459,377,1598162642769,"pointermove"],["move",1460,376,1598162642785,"pointermove"],["move",1461,376,1598162642817,"pointermove"],["move",1462,376,1598162642833,"pointermove"],["move",1463,376,1598162642841,"pointermove"],["move",1464,376,1598162642855,"pointermove"],["move",1465,376,1598162642869,"pointermove"],["move",1467,376,1598162642919,"pointermove"],["move",1476,376,1598162642935,"pointermove"],["move",1484,377,1598162642952,"pointermove"],["move",1495,379,1598162642969,"pointermove"],["move",1503,379,1598162642985,"pointermove"],["move",1507,379,1598162643002,"pointermove"],["move",1508,379,1598162643019,"pointermove"],["move",1509,379,1598162643035,"pointermove"],["move",1510,379,1598162643270,"pointermove"],["move",1511,379,1598162643307,"pointermove"],["move",1512,378,1598162643323,"pointermove"],["move",1513,378,1598162643347,"pointermove"],["move",1514,378,1598162643363,"pointermove"],["move",1515,378,1598162643369,"pointermove"],["move",1517,377,1598162643385,"pointermove"],["move",1519,377,1598162643402,"pointermove"],["move",1521,377,1598162643418,"pointermove"],["move",1522,377,1598162643435,"pointermove"],["move",1524,377,1598162643452,"pointermove"],["move",1525,377,1598162643502,"pointermove"],["move",1525,376,1598162643533,"pointermove"],["move",1524,376,1598162643900,"pointermove"],["move",1523,376,1598162643907,"pointermove"],["move",1523,377,1598162643918,"pointermove"],["move",1521,378,1598162643935,"pointermove"],["move",1520,378,1598162643952,"pointermove"],["move",1519,379,1598162643968,"pointermove"],["move",1517,380,1598162643985,"pointermove"],["move",1515,382,1598162644002,"pointermove"],["move",1514,382,1598162644018,"pointermove"],["move",1513,383,1598162644035,"pointermove"],["move",1510,385,1598162644052,"pointermove"],["move",1506,388,1598162644068,"pointermove"],["move",1502,390,1598162644085,"pointermove"],["move",1500,391,1598162644102,"pointermove"],["move",1500,392,1598162644118,"pointermove"],["move",1497,395,1598162644168,"pointermove"],["move",1491,399,1598162644185,"pointermove"],["move",1484,403,1598162644201,"pointermove"],["move",1479,405,1598162644218,"pointermove"],["move",1476,406,1598162644235,"pointermove"],["move",1475,406,1598162644251,"pointermove"],["move",1473,408,1598162644268,"pointermove"],["move",1471,409,1598162644285,"pointermove"],["move",1468,410,1598162644301,"pointermove"],["move",1466,411,1598162644318,"pointermove"],["move",1465,411,1598162644335,"pointermove"],["move",1464,411,1598162644406,"pointermove"],["down",1464,411,1598162645203,"pointerdown"],["focus",1598162645207],["up",1464,411,1598162645301,"pointerup"],["blur",1598162652242],["move",1465,412,1598162654179,"pointermove"],["move",1466,414,1598162654187,"pointermove"],["move",1468,416,1598162654195,"pointermove"],["move",1469,418,1598162654203,"pointermove"],["move",1471,420,1598162654211,"pointermove"],["move",1473,423,1598162654219,"pointermove"],["move",1476,426,1598162654227,"pointermove"],["move",1479,430,1598162654235,"pointermove"],["move",1483,432,1598162654243,"pointermove"],["move",1486,434,1598162654249,"pointermove"],["move",1489,437,1598162654257,"pointermove"],["move",1493,439,1598162654265,"pointermove"],["move",1496,442,1598162654273,"pointermove"],["move",1498,443,1598162654281,"pointermove"],["move",1500,445,1598162654289,"pointermove"],["move",1502,446,1598162654297,"pointermove"],["move",1503,447,1598162654305,"pointermove"],["move",1504,448,1598162654313,"pointermove"],["move",1506,449,1598162654321,"pointermove"],["move",1508,449,1598162654327,"pointermove"],["move",1510,450,1598162654335,"pointermove"],["move",1513,451,1598162654343,"pointermove"],["move",1516,451,1598162654351,"pointermove"],["move",1519,452,1598162654359,"pointermove"],["move",1521,452,1598162654367,"pointermove"],["move",1522,453,1598162654375,"pointermove"],["move",1523,454,1598162654383,"pointermove"],["move",1524,454,1598162654391,"pointermove"],["move",1525,454,1598162654397,"pointermove"],["move",1526,455,1598162654405,"pointermove"],["move",1527,456,1598162654413,"pointermove"],["move",1529,457,1598162654421,"pointermove"],["move",1530,458,1598162654429,"pointermove"],["move",1532,459,1598162654437,"pointermove"],["move",1534,459,1598162654445,"pointermove"],["move",1536,460,1598162654453,"pointermove"],["move",1538,460,1598162654461,"pointermove"],["move",1539,461,1598162654469,"pointermove"],["move",1540,461,1598162654475,"pointermove"],["move",1541,461,1598162654483,"pointermove"],["move",1542,462,1598162654491,"pointermove"],["move",1543,463,1598162654499,"pointermove"],["move",1544,463,1598162654507,"pointermove"],["move",1545,464,1598162654523,"pointermove"],["move",1546,464,1598162654539,"pointermove"],["move",1546,465,1598162654545,"pointermove"],["move",1547,465,1598162654553,"pointermove"],["move",1548,466,1598162654561,"pointermove"],["move",1550,467,1598162654569,"pointermove"],["move",1554,468,1598162654577,"pointermove"],["move",1557,470,1598162654585,"pointermove"],["move",1562,471,1598162654593,"pointermove"],["move",1565,472,1598162654601,"pointermove"],["move",1568,473,1598162654609,"pointermove"],["move",1570,474,1598162654617,"pointermove"],["move",1571,474,1598162654623,"pointermove"],["move",1571,475,1598162654795,"pointermove"],["move",1571,476,1598162654849,"pointermove"],["move",1570,476,1598162654865,"pointermove"],["move",1570,477,1598162654905,"pointermove"],["move",1570,478,1598162655207,"pointermove"],["focus",1598162655606],["focus",1598162655606],["down",1570,478,1598162655608,"pointerdown"],["focus",1598162655609],["up",1570,478,1598162655700,"pointerup"]]

t = [["move",1227,382,1598164759052,"pointermove"],["move",1252,394,1598164759057,"pointermove"],["move",1265,398,1598164759074,"pointermove"],["move",1278,405,1598164759093,"pointermove"],["move",1280,407,1598164759107,"pointermove"],["move",1281,408,1598164759124,"pointermove"],["move",1281,409,1598164759140,"pointermove"],["move",1282,409,1598164759157,"pointermove"],["move",1282,410,1598164759174,"pointermove"],["move",1284,411,1598164759191,"pointermove"],["move",1300,413,1598164759234,"pointermove"],["move",1319,414,1598164759240,"pointermove"],["move",1330,416,1598164759257,"pointermove"],["move",1333,417,1598164759274,"pointermove"],["move",1336,419,1598164759290,"pointermove"],["move",1340,420,1598164759308,"pointermove"],["move",1343,420,1598164759325,"pointermove"],["move",1343,421,1598164759341,"pointermove"],["move",1344,421,1598164759358,"pointermove"],["down",1344,421,1598164759390,"pointerdown"],["focus",1598164759398],["up",1344,421,1598164759464,"pointerup"],["move",1344,422,1598164759730,"pointermove"],["move",1345,423,1598164762730,"pointermove"],["move",1351,432,1598164762735,"pointermove"],["move",1361,445,1598164762748,"pointermove"],["move",1379,456,1598164762765,"pointermove"],["move",1419,469,1598164762781,"pointermove"],["move",1445,478,1598164762798,"pointermove"],["move",1468,486,1598164762814,"pointermove"],["move",1482,491,1598164762831,"pointermove"],["move",1509,498,1598164762848,"pointermove"],["move",1551,508,1598164762865,"pointermove"],["move",1595,518,1598164762880,"pointermove"],["move",1615,522,1598164762896,"pointermove"],["move",1621,523,1598164762913,"pointermove"],["move",1621,521,1598164763080,"pointermove"],["move",1616,515,1598164763096,"pointermove"],["move",1603,504,1598164763113,"pointermove"],["move",1596,498,1598164763129,"pointermove"],["move",1593,494,1598164763146,"pointermove"],["move",1592,491,1598164763163,"pointermove"],["move",1591,488,1598164763180,"pointermove"],["move",1590,486,1598164763196,"pointermove"],["move",1589,486,1598164763213,"pointermove"],["move",1587,485,1598164763266,"pointermove"],["move",1585,484,1598164763281,"pointermove"],["move",1580,483,1598164763296,"pointermove"],["move",1579,483,1598164763313,"pointermove"],["move",1579,482,1598164763363,"pointermove"],["down",1579,482,1598164763387,"pointerdown"],["focus",1598164763391],["up",1579,482,1598164763498,"pointerup"]]
x = []
y = []
z = []
for i in t:
    if len(i) == 5:
        x.append(i[1])
        y.append(i[2])
        z.append([i[1], i[2]])
# np.random.seed(1000)
# y = np.random.standard_normal(10)
# print("y = %s"% y)
# x = range(len(y))
# # print("x=%s"% x)
# plt.plot(y)
# plt.show()


plt.plot(x, y) 
plt.savefig('bbb.png')