'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "570708a75d6f9220483dc9a10e480b96",
"assets/AssetManifest.json": "21c33a10eb5ed7550a57c3cc9c6bfcc7",
"assets/assets/fonts/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/fonts/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/images/9y.png": "e051685f99173f1126b2debdd76c07e3",
"assets/assets/images/abdo.jpg": "9b92cf78ec30485520e2816777c71cb5",
"assets/assets/images/cardimages/colors.png": "a590c68af9058913a0b646f922a2f3eb",
"assets/assets/images/cardimages/download.jpeg": "ee783021ddfc0136a1b1cea21f8a56a8",
"assets/assets/images/cardimages/familymembers.jpg": "34a2d29cdbd270f79dd95dddf3b26f2c",
"assets/assets/images/cardimages/familymembers_icon.png": "d7858e7f976265fc9d8de470742a8e05",
"assets/assets/images/cardimages/familymembers_image.png": "643880d8f6c0f0fe64064a4c3f13aead",
"assets/assets/images/cardimages/icons8-colors-58.png": "16762bddc87eebf21fbe5569b78f7701",
"assets/assets/images/cardimages/icons8-defend-family-64.png": "cb68fda570f17ffaeba59162f5e2e1ce",
"assets/assets/images/cardimages/icons8-dictionary-48.png": "d1863d0d4948cf57aa78066aa5c0a295",
"assets/assets/images/cardimages/icons8-numbers-64.png": "770c7d3da2150b7d97e41a898d0cbb32",
"assets/assets/images/cardimages/icons8-you-(plural)-48.png": "17dada8bae2d515ec45f918cdf60db51",
"assets/assets/images/cardimages/miso.png": "81eb32f4e174719f84b95e1f8cc49abd",
"assets/assets/images/cardimages/numbers.png": "9fb21f9b02ed719570b3251ea1c006b2",
"assets/assets/images/cardimages/pexels-cottonbro-studio-4709285.jpg": "e75ca240d169e4ac8fde7708e7ecd524",
"assets/assets/images/cardimages/pexels-cottonbro-studio-4709286.jpg": "ccc886f39afe8764efa6113005fd7ee2",
"assets/assets/images/cardimages/pexels-cottonbro-studio-4709289.jpg": "9e385ab6e4dc44b8a28376bc63b04268",
"assets/assets/images/cardimages/pexels-olia-danilevich-4974920.jpg": "966253b8236985bacd85eaf8bae65be4",
"assets/assets/images/cardimages/pronouns.png": "cdca3baba270c35a81fc701201fe7903",
"assets/assets/images/cardimages/result.jpg": "84129c81fbda37971558b556ad382268",
"assets/assets/images/cardimages/result.png": "0aede7427c47d47652ee99ca8b73f75d",
"assets/assets/images/cardimages/words.png": "bbaa2233fc007566eadc25fcdf01b618",
"assets/assets/images/colors/color_black.png": "1d6ede6b96163c0de60018184a8f36da",
"assets/assets/images/colors/color_blue.png": "83f472fbdd0546f66f69c1fc9fa17898",
"assets/assets/images/colors/color_brown.png": "12e6b20f554f4f8c851ec47a365bf017",
"assets/assets/images/colors/color_dusty_yellow.png": "5b679e0183b88702b6528eb4da68cce8",
"assets/assets/images/colors/color_gray.png": "f50d1356a99bd6382b84527f3578c7a5",
"assets/assets/images/colors/color_green.png": "de033fee5288447f79091cd9b569604b",
"assets/assets/images/colors/color_orange.png": "b81930d1a3977602551bb20434dae816",
"assets/assets/images/colors/color_purple.png": "f5028c492e80e2bb066f2a79142d4558",
"assets/assets/images/colors/color_red.png": "dbcd4214d77182318965f6a86769b607",
"assets/assets/images/colors/color_white.png": "602d1b2c68eddf209d684b5c2c545391",
"assets/assets/images/colors/yellow.png": "b957cc2bdb10dff1d6067259db6d3bab",
"assets/assets/images/family_members/cousin.png": "ab527f5f0b6922e0542b9b43ad4d94fe",
"assets/assets/images/family_members/family_daughter.png": "cdd7fb9db2a675d46d06f89a86d0be0b",
"assets/assets/images/family_members/family_father.png": "c78f781ad62a3686c9be867167312c68",
"assets/assets/images/family_members/family_grandfather.png": "0121efe2ebcb97765637f7726ef16a7a",
"assets/assets/images/family_members/family_grandmother.png": "0fd3c11927b039403f33e98d072b39ac",
"assets/assets/images/family_members/family_mother.png": "6a8e31be689fb3a91661cdd5ec861b2e",
"assets/assets/images/family_members/family_older_brother.png": "469d30da1934a787aa84396760cfa687",
"assets/assets/images/family_members/family_older_sister.png": "a6a16e02a8dfe42bb3fd456f080bda41",
"assets/assets/images/family_members/family_son.png": "c59fcf64b6232ab64df4cc903245c42e",
"assets/assets/images/family_members/family_younger_brother.png": "06c833cc7f1be021c6ed16f383645197",
"assets/assets/images/family_members/family_younger_sister.png": "e78d81331555152baacde9b3e8e11b72",
"assets/assets/images/family_members/latante.png": "11554715566eed89a05336086ad5f55a",
"assets/assets/images/family_members/oncle.png": "a5cafa121d83f0a71b115cd67d61dcf2",
"assets/assets/images/family_members/tante.png": "8f578713b43cdff06281f28dafdd6dc4",
"assets/assets/images/icons/facebook.png": "c34e50e019769b8191094a3978ef9609",
"assets/assets/images/icons/icons8-facebook-384.png": "9a5d842aa94be9143f7ac67a988ed3c9",
"assets/assets/images/icons/icons8-instagram-512.png": "5198f7ec59add48fab1bcc9518654c4a",
"assets/assets/images/icons/icons8-tik-tok-500.png": "06098901adf4fa88d82ae5c4b4921bb2",
"assets/assets/images/icons/icons8-whatsapp-384.png": "d32508d39041c90960d00e464ba85198",
"assets/assets/images/icons/instagram.png": "e9b15b731eafbfc16355b811c81af450",
"assets/assets/images/icons/whatsapp.png": "536ef96c91b2a356ead50f5915f67fd6",
"assets/assets/images/numbers/0.png": "a08974df8d212874502991fdf5f7e04e",
"assets/assets/images/numbers/1.png": "35cdac522db59e52e4ba33c5e9ebf6c5",
"assets/assets/images/numbers/10.png": "be19fada27847541967fab4b0f56a6e5",
"assets/assets/images/numbers/11.png": "21b9c0643fbf210c184dabd7b9125ebd",
"assets/assets/images/numbers/12.png": "fdb2c4a36f7359e4bbf0f6db9b472c0e",
"assets/assets/images/numbers/13.png": "4e6f31e38b2562205ee300f548a28425",
"assets/assets/images/numbers/14.png": "ffd22c733b6e8c07a4e2469b0d3fbb96",
"assets/assets/images/numbers/15.png": "44b03b0fcce0a95f0d9b6be03f4e6729",
"assets/assets/images/numbers/16.png": "b1f2a895a4b9ed299eb92948c04a0b45",
"assets/assets/images/numbers/17.png": "f6db074acd76f4e2e4616fabe862255e",
"assets/assets/images/numbers/18.png": "e7824c3e86649acf69d0e51a9a735bd0",
"assets/assets/images/numbers/19.png": "98465420962687903c3c5b27490eea30",
"assets/assets/images/numbers/2.png": "d01af7a8f36fe1c5ecf97d3a76e26eba",
"assets/assets/images/numbers/20.png": "9a372e933084f3f65ce882a23ce08a09",
"assets/assets/images/numbers/21.png": "7e74298b7610e6f5ca82201762f765f2",
"assets/assets/images/numbers/22.png": "e8f6e45511407d6ef7c25145f1dcfcc3",
"assets/assets/images/numbers/23.png": "f0ab0b7a0b7efe3f2ff37d5d0120d9f9",
"assets/assets/images/numbers/24.png": "14199b47c4f2499fc4bf4c17a61b520c",
"assets/assets/images/numbers/25.png": "6b9c5069cefc25d5d2228a8f58c9a4db",
"assets/assets/images/numbers/26.png": "2083fe9e0f7e00c734f8786004fe172c",
"assets/assets/images/numbers/27.png": "d0be545b8f3aab2338b5be4e31dc2416",
"assets/assets/images/numbers/28.png": "98f2ef18bb86364b3373a52ef5bfabae",
"assets/assets/images/numbers/29.png": "aa6ab909dcf1b6f902d7a3a99789dcef",
"assets/assets/images/numbers/3.png": "dee2b2e7d8d5a028ccc02ca56d5559a6",
"assets/assets/images/numbers/30.png": "b3540f46bbb6ded79fd4e80779e2875a",
"assets/assets/images/numbers/31.png": "28fe60d23db5fab5b0586094d5cb8e26",
"assets/assets/images/numbers/32.png": "8e1eb7d3ac46ddc1f2490d47e1c43def",
"assets/assets/images/numbers/33.png": "f042749d4efa1ac6b6d99035a72636fa",
"assets/assets/images/numbers/34.png": "c0d18d54d6a7bb20d0636a58a84f5728",
"assets/assets/images/numbers/35.png": "fd4c7a69ab84ae3699bdcb59f3a924ff",
"assets/assets/images/numbers/36.png": "b5dc0144538f1a02606d9b340762752b",
"assets/assets/images/numbers/37.png": "8ae7ef77b50075a8c4b46ae10f47ca9e",
"assets/assets/images/numbers/38.png": "0d1cbcd7fdd32ec201192d82903cc159",
"assets/assets/images/numbers/39.png": "548b1d82262ad8887335c7dd36efd556",
"assets/assets/images/numbers/4.png": "a66d22cb7f6440602e174c90ccbed6c4",
"assets/assets/images/numbers/40.png": "bd0a54db7f775db13bf452e2a65654aa",
"assets/assets/images/numbers/41.png": "c18bec34e1c50fd475986f9b36045b32",
"assets/assets/images/numbers/42.png": "aa4d80c54d220bcaccbf527b10a23f66",
"assets/assets/images/numbers/43.png": "983a698c244b2219ac4fe4d809564145",
"assets/assets/images/numbers/44.png": "bc97515c86bf0b188839ec5a0f7dc1f6",
"assets/assets/images/numbers/45.png": "6453fe02f9feaf566b5c1cdaa74905c2",
"assets/assets/images/numbers/46.png": "10500dc328c064ce5f8161c1fc2d2768",
"assets/assets/images/numbers/47.png": "5be3e0f00cca8556a30460f78fe9b4f3",
"assets/assets/images/numbers/48.png": "34165e06de48dc4ff7850d10c9c08b67",
"assets/assets/images/numbers/49.png": "246373dca0d022663954ae856248d7a8",
"assets/assets/images/numbers/5.png": "d10b82a191980c710454288d07f2e094",
"assets/assets/images/numbers/50.png": "38632e0fe37408b7122fea41f567d8fc",
"assets/assets/images/numbers/51.png": "e24b845f506eb1b24bdaa30c4768defa",
"assets/assets/images/numbers/52.png": "66fe205f030475a6c0b29b0d2103a74d",
"assets/assets/images/numbers/6.png": "65ed82a862482a67e07498c7fba21c9c",
"assets/assets/images/numbers/7.png": "d5407395a55fdd8098304e49b7f0de6f",
"assets/assets/images/numbers/8.png": "775e8e3ccd25d1e8e24352bf9daf4431",
"assets/assets/images/numbers/9.png": "200066bb905d793bf3d4b427ce0b8472",
"assets/assets/sounds/colors/black.wav": "469e4200c8daa07f72ecc63aedd3f016",
"assets/assets/sounds/colors/brown.wav": "ed39be916c031be4f293ff886d0ab7be",
"assets/assets/sounds/colors/color_black.mp3": "8def3c9edf19ac4e32311958a8264e58",
"assets/assets/sounds/colors/color_blue.mp3": "5aa37e17d6e57d9e285b8dc67b943a60",
"assets/assets/sounds/colors/color_brown.mp3": "c000ec644833e4fd9e997ce26a5c111f",
"assets/assets/sounds/colors/color_gray.mp3": "dabcd087c04303b85364e09ce09a2d6d",
"assets/assets/sounds/colors/color_green.mp3": "65e10afbcbd78cf63de82bc2dcc090d5",
"assets/assets/sounds/colors/color_orange.mp3": "474f62a726e7529231a658434036e082",
"assets/assets/sounds/colors/color_purple.mp3": "9ba07d813c14dc4d3d173b0d7725b25a",
"assets/assets/sounds/colors/color_red.mp3": "05ee8dfa240e7458be41892dfff30ad4",
"assets/assets/sounds/colors/color_white.mp3": "66b514ba7c8cc2eb641878b54e90015f",
"assets/assets/sounds/colors/dusty%2520yellow.wav": "54007ffa4cc9cd4db9d182bb0304adfc",
"assets/assets/sounds/colors/gray.wav": "207c4d6a080b24560c0d074a1640431d",
"assets/assets/sounds/colors/green.wav": "d39079b11836fc6ffd350321722c914d",
"assets/assets/sounds/colors/red.wav": "dc8ea9bb28ca6d91ec890634f728463a",
"assets/assets/sounds/colors/white.wav": "143836b949d231e9babdec31a72049ea",
"assets/assets/sounds/colors/yellow.mp3": "d2fb4f9a2a61297ccbbd8be93909674c",
"assets/assets/sounds/colors/yellow.wav": "c3754c73dc38da7e865ce815afce1dd6",
"assets/assets/sounds/family_members/2lbent.mp3": "09bc34d2dcdc33e26c029030630f4a68",
"assets/assets/sounds/family_members/al2bn.mp3": "261d1e12fc586bac234233e8980a0916",
"assets/assets/sounds/family_members/brother.mp3": "34f227ab437aa5a20daca94c57a53820",
"assets/assets/sounds/family_members/daughter.wav": "cc276be872a8fa6c313a425f380a45e6",
"assets/assets/sounds/family_members/father.wav": "4824ebf7a0565171769b7d89cda46276",
"assets/assets/sounds/family_members/feather.mp3": "c6db99d6655bf3b52436b110d5a1fd79",
"assets/assets/sounds/family_members/grand%2520father.wav": "bbcd644a881de70c8666dbf9ece85a2e",
"assets/assets/sounds/family_members/grand%2520mother.wav": "85cb8363371f0bc66583b5734298c3ea",
"assets/assets/sounds/family_members/grandfather.mp3": "7bc44a55e3deae416aa910a1c51239d9",
"assets/assets/sounds/family_members/grandmother.mp3": "53ec3d89a7fc9458532df79f5ab52f41",
"assets/assets/sounds/family_members/mother.mp3": "1c362d7167f0a136199e07033677bb82",
"assets/assets/sounds/family_members/mother.wav": "bcaac16d0600423182428d7053e24492",
"assets/assets/sounds/family_members/older%2520bother.wav": "589ca6a44cb4887fe624373fa1c5af1a",
"assets/assets/sounds/family_members/older%2520sister.wav": "293f108c8e03943b5495be5ee8639e96",
"assets/assets/sounds/family_members/oncle.mp3": "0369ccef949222c513d8c458ecc90128",
"assets/assets/sounds/family_members/sister.mp3": "81dd9a8ca9d15a988b334f3914751438",
"assets/assets/sounds/family_members/son.wav": "562a7135782bd5dbe07c4151044ec284",
"assets/assets/sounds/family_members/tante.mp3": "ae844886891a113ae45410a2d99fefab",
"assets/assets/sounds/family_members/younger%2520brohter.wav": "5a58963a5b4648736e812ce882c2cabd",
"assets/assets/sounds/family_members/younger%2520sister.wav": "97f5644e4ad5e1fe49de671786a056b0",
"assets/assets/sounds/numbers/number_eighteen_sound.mp3": "1ca5dbd50883409a9de0c7e49cc077e8",
"assets/assets/sounds/numbers/number_eight_sound.mp3": "6fa3f997402a699a7c6633cd8ed997d8",
"assets/assets/sounds/numbers/number_eleven_sound.mp3": "9d58a601455e3d1db938242bc1855b59",
"assets/assets/sounds/numbers/number_fifteen_sound.mp3": "7630835e0cb1c90e564d0a6ce4b03c67",
"assets/assets/sounds/numbers/number_fifty_sound.mp3": "513ca8f4452c6467a541668b54fb4136",
"assets/assets/sounds/numbers/number_five_sound.mp3": "7cc2392c7c9a13b1ccea985fac3a6db6",
"assets/assets/sounds/numbers/number_fortyeight_sound.mp3": "d7299906c5605b67eb16acd8112be3d0",
"assets/assets/sounds/numbers/number_fortyfive_sound.mp3": "cffed685f52297113f65bd0aa9fe531b",
"assets/assets/sounds/numbers/number_fortyfour_sound.mp3": "b0b39d97e64a210cef9fc2ed0f26a56d",
"assets/assets/sounds/numbers/number_fortynine_sound.mp3": "45a344b1e7643f46fbb70573df3e7d4c",
"assets/assets/sounds/numbers/number_fortyone_sound.mp3": "726cf2c26b9c49b51ae81a9876817692",
"assets/assets/sounds/numbers/number_fortyseven_sound.mp3": "e8dfba36a016c1bd3df684005d2e359c",
"assets/assets/sounds/numbers/number_fortysix_sound.mp3": "becd77e4e2e4b332da5e267992bdb5ab",
"assets/assets/sounds/numbers/number_fortythree_sound.mp3": "ba252175f795786b486796db65c356e9",
"assets/assets/sounds/numbers/number_fortytwo_sound.mp3": "5cb2e684e2aa203675ce3cff288c4d99",
"assets/assets/sounds/numbers/number_forty_sound.mp3": "38acd8ce7f6556788e1c51bd3386bfe2",
"assets/assets/sounds/numbers/number_fourteen_sound.mp3": "fd14308b11cf7e81e9dd45cd7d410c77",
"assets/assets/sounds/numbers/number_four_sound.mp3": "60c3c658b76e38283a5237585e0d2a87",
"assets/assets/sounds/numbers/number_nineteen_sound.mp3": "ea305adfeed2222e982fa32479f1c198",
"assets/assets/sounds/numbers/number_nine_sound.mp3": "c53ea866fd998158888cdc4bbd478a45",
"assets/assets/sounds/numbers/number_one_sound.mp3": "34d3f9e7f2ac5245da21debb5c98ef13",
"assets/assets/sounds/numbers/number_seventeen_sound.mp3": "f39d7b6cc9edd0a910ef8d181c4db5c0",
"assets/assets/sounds/numbers/number_seven_sound.mp3": "7941e29379fdc06d0eafb8f4aabcc45c",
"assets/assets/sounds/numbers/number_sixteen_sound.mp3": "87bc772071dfc49e1aaec33a2476621f",
"assets/assets/sounds/numbers/number_six_sound.mp3": "f5608e7a380c0b2141bae248a3d07c44",
"assets/assets/sounds/numbers/number_ten_sound.mp3": "180ba3bbded3b82d027b9e8e406812c4",
"assets/assets/sounds/numbers/number_thirteen_sound.mp3": "6d5c9f536d4d4752e9e6ab08ee4579c0",
"assets/assets/sounds/numbers/number_thirtyeight_sound.mp3": "73136b26e55ef0a1ea6bffd49896d53f",
"assets/assets/sounds/numbers/number_thirtyfive_sound.mp3": "d5e1696dd4feb82185d35ee6dba3d0ab",
"assets/assets/sounds/numbers/number_thirtyfour_sound.mp3": "aa107eb70dd7289091bc2d711ccd92f2",
"assets/assets/sounds/numbers/number_thirtynine_sound.mp3": "2549f1cd76e4cf832bf47f8885c5eba9",
"assets/assets/sounds/numbers/number_thirtyone_sound.mp3": "6e687cd876ae92471e40e25341f81435",
"assets/assets/sounds/numbers/number_thirtyseven_sound.mp3": "11d39acc4299048dce4a54a639a2d4d2",
"assets/assets/sounds/numbers/number_thirtysix_sound.mp3": "b16e65a78318deb4cff42b9a656d0bee",
"assets/assets/sounds/numbers/number_thirtythree_sound.mp3": "1239ddbdb9a7432f4ac0de8b1953409f",
"assets/assets/sounds/numbers/number_thirtytwo_sound.mp3": "bc1176eb98dc3b33dc186cf039046891",
"assets/assets/sounds/numbers/number_thirty_sound.mp3": "c4536c17533e54257ff53cdf6c155e26",
"assets/assets/sounds/numbers/number_three_sound.mp3": "21b597f2505f75f0218dec7e897000fd",
"assets/assets/sounds/numbers/number_twelve_sound.mp3": "c523defe4304f1e9488e50ea79bff08b",
"assets/assets/sounds/numbers/number_twentyeight_sound.mp3": "0bd4370e581351c25ac2868f08cb17ab",
"assets/assets/sounds/numbers/number_twentyfive_sound.mp3": "f5f56abc32088b6d63307fcf2eb4bdcc",
"assets/assets/sounds/numbers/number_twentyfour_sound.mp3": "723f32a66700177f96f303dc9ca22e20",
"assets/assets/sounds/numbers/number_twentynine_sound.mp3": "ce12e387f8ed3dcf5b7ff5903a985ef9",
"assets/assets/sounds/numbers/number_twentyone_sound.mp3": "5f2c913d20473e1e553bd7e96b18a06a",
"assets/assets/sounds/numbers/number_twentyseven_sound.mp3": "0351a04ef047ab2646fa7ae4937c8496",
"assets/assets/sounds/numbers/number_twentysix_sound.mp3": "fb05c7c23c726f820ca48f19fed5ba7a",
"assets/assets/sounds/numbers/number_twentythree_sound.mp3": "ad976ab4d51027604402369269b36ff9",
"assets/assets/sounds/numbers/number_twentytwo_sound.mp3": "3d9ef7ef990c50b2124a4bbd34b5de31",
"assets/assets/sounds/numbers/number_twenty_sound.mp3": "dc5e178315fb9422983f86ceeef8f3fb",
"assets/assets/sounds/numbers/number_two_sound.mp3": "32748dff3f9a8d4b8dc5d72ac57a6d10",
"assets/assets/sounds/numbers/number_zero_sound.mp3": "f1e2e03c6d745f6a886280bc1c4a51dd",
"assets/assets/sounds/pronouns/Elle.mp3": "3686b6964ee7c1b1a411b5e75e551d4e",
"assets/assets/sounds/pronouns/Elles.mp3": "9c180f93f4405da12ff58f9cf3a49885",
"assets/assets/sounds/pronouns/Il.mp3": "d97d06d4a67ac82cac9413dfecda005c",
"assets/assets/sounds/pronouns/Ils.mp3": "38cd064a4b246b291ec2eff7c8f1518d",
"assets/assets/sounds/pronouns/Je.mp3": "188a5d67ad2d2f42ae5cd90d7e0857c5",
"assets/assets/sounds/pronouns/Nous.mp3": "1981c9b2dc9a80a2679449ff11a9834c",
"assets/assets/sounds/pronouns/Tu.mp3": "fba8aab517c11f07f0b460c88da73c72",
"assets/assets/sounds/pronouns/Vous.mp3": "45c3ed0f4adc9478160550dd3827cc0f",
"assets/assets/sounds/self/ans.mp3": "aab9f5c1dd2c7a1bf54d506ea3003c4e",
"assets/assets/sounds/self/ans2.mp3": "e9a911cb9eeedd007789c6f3b743e34e",
"assets/assets/sounds/self/ans3.mp3": "f0269aa1070b04b7b8ad7d8b062aadf5",
"assets/assets/sounds/self/ans4.mp3": "d7971a6c32e8a5517e8beb2f2637e0b4",
"assets/assets/sounds/self/ans5.mp3": "d850bd6dbc0f31db3edf911d4adf9516",
"assets/assets/sounds/self/ans6.mp3": "95cc3610b5140d7a6a59315e49c417ae",
"assets/assets/sounds/self/ans7.mp3": "ea7696f55e2ecb8f93dce7f0ee3ecf63",
"assets/assets/sounds/self/ans8.mp3": "1ff5493213dc6aa1445bf40d7263411c",
"assets/assets/sounds/self/appelle.mp3": "b0943b5b3e4732da14653ca563978bd2",
"assets/assets/sounds/self/deuxsour.mp3": "58cc97d3fd0af69315aaa6621934f89d",
"assets/assets/sounds/self/est.mp3": "e8854d8c3072441580f20ad8ad65d9fe",
"assets/assets/sounds/self/sour.mp3": "784cf52957549a2cf0b6ffa29a5d174a",
"assets/assets/sounds/self/suis.mp3": "7eeac9377a015c8233528f0530b677e7",
"assets/assets/sounds/self/troissour.mp3": "88f7f15fe5578944481668a7336095e6",
"assets/assets/sounds/self/troissour2.mp3": "268d5042195e418186f6220dda949401",
"assets/assets/sounds/words/abientot.mp3": "2f1e531cac6290ab1af06e55f2baae72",
"assets/assets/sounds/words/aime.mp3": "3dd2312e4d11da595d76821b9f8e8ff5",
"assets/assets/sounds/words/Aurevoir.mp3": "38721f478c0bf81697eb0ec709a9abb5",
"assets/assets/sounds/words/Bonjour.mp3": "ba93714c797fd3bd3017d087f43718a1",
"assets/assets/sounds/words/Bonsoir.mp3": "296f4b5a5c4ab8eb6d636b122f4f16fd",
"assets/assets/sounds/words/Combiencacoute.mp3": "173f4cd3a9d0503ee86d571d1e4c470b",
"assets/assets/sounds/words/Commentcava.mp3": "e25bf479229c5b4113f52e81f436c63e",
"assets/assets/sounds/words/Felicitations.mp3": "ca6a41ffe4e77b257d4018c83e31b8dc",
"assets/assets/sounds/words/Je-ne-comprends-pas.mp3": "ad8995addf070ecdf6a66fefcc4c9ff0",
"assets/assets/sounds/words/Je-suis-perdu.mp3": "eff52c72e6f6b345543942e34dd58ac3",
"assets/assets/sounds/words/Je-t-aime.mp3": "d928573055002ae73889133dd443d5f5",
"assets/assets/sounds/words/Merci.mp3": "eef5ff25b77b74ef14b638568b111f85",
"assets/assets/sounds/words/Mercibeaucoup.mp3": "c31b936c3da295cbd92332a81c15db93",
"assets/assets/sounds/words/Non.mp3": "4537d6a0dae58b3c52a266bcb0a918b5",
"assets/assets/sounds/words/Oui.mp3": "a91782bbeef827d5e39cc69b3c54fe55",
"assets/assets/sounds/words/Pardon.mp3": "dcf3b1cdb195c1e96325576f73163388",
"assets/assets/sounds/words/Parlez-vous-anglais.mp3": "29f51b24031baf6627f69576b3d1e674",
"assets/assets/sounds/words/Salut.mp3": "2039afb6f0d08d4027023d0596d95c32",
"assets/FontManifest.json": "e1ff99745835c089cea1f16b35c2e96f",
"assets/fonts/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/fonts/MaterialIcons-Regular.otf": "3ede0bf414d905c0741f8118d0899eb1",
"assets/fonts/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/fonts/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/fonts/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/images/9y.png": "e051685f99173f1126b2debdd76c07e3",
"assets/images/abdo.jpg": "9b92cf78ec30485520e2816777c71cb5",
"assets/images/cardimages/colors.png": "a590c68af9058913a0b646f922a2f3eb",
"assets/images/cardimages/download.jpeg": "ee783021ddfc0136a1b1cea21f8a56a8",
"assets/images/cardimages/familymembers.jpg": "34a2d29cdbd270f79dd95dddf3b26f2c",
"assets/images/cardimages/familymembers_icon.png": "d7858e7f976265fc9d8de470742a8e05",
"assets/images/cardimages/familymembers_image.png": "643880d8f6c0f0fe64064a4c3f13aead",
"assets/images/cardimages/icons8-colors-58.png": "16762bddc87eebf21fbe5569b78f7701",
"assets/images/cardimages/icons8-defend-family-64.png": "cb68fda570f17ffaeba59162f5e2e1ce",
"assets/images/cardimages/icons8-dictionary-48.png": "d1863d0d4948cf57aa78066aa5c0a295",
"assets/images/cardimages/icons8-numbers-64.png": "770c7d3da2150b7d97e41a898d0cbb32",
"assets/images/cardimages/icons8-you-(plural)-48.png": "17dada8bae2d515ec45f918cdf60db51",
"assets/images/cardimages/miso.png": "81eb32f4e174719f84b95e1f8cc49abd",
"assets/images/cardimages/numbers.png": "9fb21f9b02ed719570b3251ea1c006b2",
"assets/images/cardimages/pexels-cottonbro-studio-4709285.jpg": "e75ca240d169e4ac8fde7708e7ecd524",
"assets/images/cardimages/pexels-cottonbro-studio-4709286.jpg": "ccc886f39afe8764efa6113005fd7ee2",
"assets/images/cardimages/pexels-cottonbro-studio-4709289.jpg": "9e385ab6e4dc44b8a28376bc63b04268",
"assets/images/cardimages/pexels-olia-danilevich-4974920.jpg": "966253b8236985bacd85eaf8bae65be4",
"assets/images/cardimages/pronouns.png": "cdca3baba270c35a81fc701201fe7903",
"assets/images/cardimages/result.jpg": "84129c81fbda37971558b556ad382268",
"assets/images/cardimages/result.png": "0aede7427c47d47652ee99ca8b73f75d",
"assets/images/cardimages/words.png": "bbaa2233fc007566eadc25fcdf01b618",
"assets/images/colors/color_black.png": "1d6ede6b96163c0de60018184a8f36da",
"assets/images/colors/color_blue.png": "83f472fbdd0546f66f69c1fc9fa17898",
"assets/images/colors/color_brown.png": "12e6b20f554f4f8c851ec47a365bf017",
"assets/images/colors/color_dusty_yellow.png": "5b679e0183b88702b6528eb4da68cce8",
"assets/images/colors/color_gray.png": "f50d1356a99bd6382b84527f3578c7a5",
"assets/images/colors/color_green.png": "de033fee5288447f79091cd9b569604b",
"assets/images/colors/color_orange.png": "b81930d1a3977602551bb20434dae816",
"assets/images/colors/color_purple.png": "f5028c492e80e2bb066f2a79142d4558",
"assets/images/colors/color_red.png": "dbcd4214d77182318965f6a86769b607",
"assets/images/colors/color_white.png": "602d1b2c68eddf209d684b5c2c545391",
"assets/images/colors/yellow.png": "b957cc2bdb10dff1d6067259db6d3bab",
"assets/images/family_members/cousin.png": "ab527f5f0b6922e0542b9b43ad4d94fe",
"assets/images/family_members/family_daughter.png": "cdd7fb9db2a675d46d06f89a86d0be0b",
"assets/images/family_members/family_father.png": "c78f781ad62a3686c9be867167312c68",
"assets/images/family_members/family_grandfather.png": "0121efe2ebcb97765637f7726ef16a7a",
"assets/images/family_members/family_grandmother.png": "0fd3c11927b039403f33e98d072b39ac",
"assets/images/family_members/family_mother.png": "6a8e31be689fb3a91661cdd5ec861b2e",
"assets/images/family_members/family_older_brother.png": "469d30da1934a787aa84396760cfa687",
"assets/images/family_members/family_older_sister.png": "a6a16e02a8dfe42bb3fd456f080bda41",
"assets/images/family_members/family_son.png": "c59fcf64b6232ab64df4cc903245c42e",
"assets/images/family_members/family_younger_brother.png": "06c833cc7f1be021c6ed16f383645197",
"assets/images/family_members/family_younger_sister.png": "e78d81331555152baacde9b3e8e11b72",
"assets/images/family_members/latante.png": "11554715566eed89a05336086ad5f55a",
"assets/images/family_members/oncle.png": "a5cafa121d83f0a71b115cd67d61dcf2",
"assets/images/family_members/tante.png": "8f578713b43cdff06281f28dafdd6dc4",
"assets/images/icons/facebook.png": "c34e50e019769b8191094a3978ef9609",
"assets/images/icons/icons8-facebook-384.png": "9a5d842aa94be9143f7ac67a988ed3c9",
"assets/images/icons/icons8-instagram-512.png": "5198f7ec59add48fab1bcc9518654c4a",
"assets/images/icons/icons8-tik-tok-500.png": "06098901adf4fa88d82ae5c4b4921bb2",
"assets/images/icons/icons8-whatsapp-384.png": "d32508d39041c90960d00e464ba85198",
"assets/images/icons/instagram.png": "e9b15b731eafbfc16355b811c81af450",
"assets/images/icons/whatsapp.png": "536ef96c91b2a356ead50f5915f67fd6",
"assets/images/numbers/0.png": "a08974df8d212874502991fdf5f7e04e",
"assets/images/numbers/1.png": "35cdac522db59e52e4ba33c5e9ebf6c5",
"assets/images/numbers/10.png": "be19fada27847541967fab4b0f56a6e5",
"assets/images/numbers/11.png": "21b9c0643fbf210c184dabd7b9125ebd",
"assets/images/numbers/12.png": "fdb2c4a36f7359e4bbf0f6db9b472c0e",
"assets/images/numbers/13.png": "4e6f31e38b2562205ee300f548a28425",
"assets/images/numbers/14.png": "ffd22c733b6e8c07a4e2469b0d3fbb96",
"assets/images/numbers/15.png": "44b03b0fcce0a95f0d9b6be03f4e6729",
"assets/images/numbers/16.png": "b1f2a895a4b9ed299eb92948c04a0b45",
"assets/images/numbers/17.png": "f6db074acd76f4e2e4616fabe862255e",
"assets/images/numbers/18.png": "e7824c3e86649acf69d0e51a9a735bd0",
"assets/images/numbers/19.png": "98465420962687903c3c5b27490eea30",
"assets/images/numbers/2.png": "d01af7a8f36fe1c5ecf97d3a76e26eba",
"assets/images/numbers/20.png": "9a372e933084f3f65ce882a23ce08a09",
"assets/images/numbers/21.png": "7e74298b7610e6f5ca82201762f765f2",
"assets/images/numbers/22.png": "e8f6e45511407d6ef7c25145f1dcfcc3",
"assets/images/numbers/23.png": "f0ab0b7a0b7efe3f2ff37d5d0120d9f9",
"assets/images/numbers/24.png": "14199b47c4f2499fc4bf4c17a61b520c",
"assets/images/numbers/25.png": "6b9c5069cefc25d5d2228a8f58c9a4db",
"assets/images/numbers/26.png": "2083fe9e0f7e00c734f8786004fe172c",
"assets/images/numbers/27.png": "d0be545b8f3aab2338b5be4e31dc2416",
"assets/images/numbers/28.png": "98f2ef18bb86364b3373a52ef5bfabae",
"assets/images/numbers/29.png": "aa6ab909dcf1b6f902d7a3a99789dcef",
"assets/images/numbers/3.png": "dee2b2e7d8d5a028ccc02ca56d5559a6",
"assets/images/numbers/30.png": "b3540f46bbb6ded79fd4e80779e2875a",
"assets/images/numbers/31.png": "28fe60d23db5fab5b0586094d5cb8e26",
"assets/images/numbers/32.png": "8e1eb7d3ac46ddc1f2490d47e1c43def",
"assets/images/numbers/33.png": "f042749d4efa1ac6b6d99035a72636fa",
"assets/images/numbers/34.png": "c0d18d54d6a7bb20d0636a58a84f5728",
"assets/images/numbers/35.png": "fd4c7a69ab84ae3699bdcb59f3a924ff",
"assets/images/numbers/36.png": "b5dc0144538f1a02606d9b340762752b",
"assets/images/numbers/37.png": "8ae7ef77b50075a8c4b46ae10f47ca9e",
"assets/images/numbers/38.png": "0d1cbcd7fdd32ec201192d82903cc159",
"assets/images/numbers/39.png": "548b1d82262ad8887335c7dd36efd556",
"assets/images/numbers/4.png": "a66d22cb7f6440602e174c90ccbed6c4",
"assets/images/numbers/40.png": "bd0a54db7f775db13bf452e2a65654aa",
"assets/images/numbers/41.png": "c18bec34e1c50fd475986f9b36045b32",
"assets/images/numbers/42.png": "aa4d80c54d220bcaccbf527b10a23f66",
"assets/images/numbers/43.png": "983a698c244b2219ac4fe4d809564145",
"assets/images/numbers/44.png": "bc97515c86bf0b188839ec5a0f7dc1f6",
"assets/images/numbers/45.png": "6453fe02f9feaf566b5c1cdaa74905c2",
"assets/images/numbers/46.png": "10500dc328c064ce5f8161c1fc2d2768",
"assets/images/numbers/47.png": "5be3e0f00cca8556a30460f78fe9b4f3",
"assets/images/numbers/48.png": "34165e06de48dc4ff7850d10c9c08b67",
"assets/images/numbers/49.png": "246373dca0d022663954ae856248d7a8",
"assets/images/numbers/5.png": "d10b82a191980c710454288d07f2e094",
"assets/images/numbers/50.png": "38632e0fe37408b7122fea41f567d8fc",
"assets/images/numbers/51.png": "e24b845f506eb1b24bdaa30c4768defa",
"assets/images/numbers/52.png": "66fe205f030475a6c0b29b0d2103a74d",
"assets/images/numbers/6.png": "65ed82a862482a67e07498c7fba21c9c",
"assets/images/numbers/7.png": "d5407395a55fdd8098304e49b7f0de6f",
"assets/images/numbers/8.png": "775e8e3ccd25d1e8e24352bf9daf4431",
"assets/images/numbers/9.png": "200066bb905d793bf3d4b427ce0b8472",
"assets/NOTICES": "bab788dec1790a55bafa59a585cbb2a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/sounds/colors/black.wav": "469e4200c8daa07f72ecc63aedd3f016",
"assets/sounds/colors/brown.wav": "ed39be916c031be4f293ff886d0ab7be",
"assets/sounds/colors/color_black.mp3": "8def3c9edf19ac4e32311958a8264e58",
"assets/sounds/colors/color_blue.mp3": "5aa37e17d6e57d9e285b8dc67b943a60",
"assets/sounds/colors/color_brown.mp3": "c000ec644833e4fd9e997ce26a5c111f",
"assets/sounds/colors/color_gray.mp3": "dabcd087c04303b85364e09ce09a2d6d",
"assets/sounds/colors/color_green.mp3": "65e10afbcbd78cf63de82bc2dcc090d5",
"assets/sounds/colors/color_orange.mp3": "474f62a726e7529231a658434036e082",
"assets/sounds/colors/color_purple.mp3": "9ba07d813c14dc4d3d173b0d7725b25a",
"assets/sounds/colors/color_red.mp3": "05ee8dfa240e7458be41892dfff30ad4",
"assets/sounds/colors/color_white.mp3": "66b514ba7c8cc2eb641878b54e90015f",
"assets/sounds/colors/dusty%20yellow.wav": "54007ffa4cc9cd4db9d182bb0304adfc",
"assets/sounds/colors/gray.wav": "207c4d6a080b24560c0d074a1640431d",
"assets/sounds/colors/green.wav": "d39079b11836fc6ffd350321722c914d",
"assets/sounds/colors/red.wav": "dc8ea9bb28ca6d91ec890634f728463a",
"assets/sounds/colors/white.wav": "143836b949d231e9babdec31a72049ea",
"assets/sounds/colors/yellow.mp3": "d2fb4f9a2a61297ccbbd8be93909674c",
"assets/sounds/colors/yellow.wav": "c3754c73dc38da7e865ce815afce1dd6",
"assets/sounds/family_members/2lbent.mp3": "09bc34d2dcdc33e26c029030630f4a68",
"assets/sounds/family_members/al2bn.mp3": "261d1e12fc586bac234233e8980a0916",
"assets/sounds/family_members/brother.mp3": "34f227ab437aa5a20daca94c57a53820",
"assets/sounds/family_members/daughter.wav": "cc276be872a8fa6c313a425f380a45e6",
"assets/sounds/family_members/father.wav": "4824ebf7a0565171769b7d89cda46276",
"assets/sounds/family_members/feather.mp3": "c6db99d6655bf3b52436b110d5a1fd79",
"assets/sounds/family_members/grand%20father.wav": "bbcd644a881de70c8666dbf9ece85a2e",
"assets/sounds/family_members/grand%20mother.wav": "85cb8363371f0bc66583b5734298c3ea",
"assets/sounds/family_members/grandfather.mp3": "7bc44a55e3deae416aa910a1c51239d9",
"assets/sounds/family_members/grandmother.mp3": "53ec3d89a7fc9458532df79f5ab52f41",
"assets/sounds/family_members/mother.mp3": "1c362d7167f0a136199e07033677bb82",
"assets/sounds/family_members/mother.wav": "bcaac16d0600423182428d7053e24492",
"assets/sounds/family_members/older%20bother.wav": "589ca6a44cb4887fe624373fa1c5af1a",
"assets/sounds/family_members/older%20sister.wav": "293f108c8e03943b5495be5ee8639e96",
"assets/sounds/family_members/oncle.mp3": "0369ccef949222c513d8c458ecc90128",
"assets/sounds/family_members/sister.mp3": "81dd9a8ca9d15a988b334f3914751438",
"assets/sounds/family_members/son.wav": "562a7135782bd5dbe07c4151044ec284",
"assets/sounds/family_members/tante.mp3": "ae844886891a113ae45410a2d99fefab",
"assets/sounds/family_members/younger%20brohter.wav": "5a58963a5b4648736e812ce882c2cabd",
"assets/sounds/family_members/younger%20sister.wav": "97f5644e4ad5e1fe49de671786a056b0",
"assets/sounds/numbers/number_eighteen_sound.mp3": "1ca5dbd50883409a9de0c7e49cc077e8",
"assets/sounds/numbers/number_eight_sound.mp3": "6fa3f997402a699a7c6633cd8ed997d8",
"assets/sounds/numbers/number_eleven_sound.mp3": "9d58a601455e3d1db938242bc1855b59",
"assets/sounds/numbers/number_fifteen_sound.mp3": "7630835e0cb1c90e564d0a6ce4b03c67",
"assets/sounds/numbers/number_fifty_sound.mp3": "513ca8f4452c6467a541668b54fb4136",
"assets/sounds/numbers/number_five_sound.mp3": "7cc2392c7c9a13b1ccea985fac3a6db6",
"assets/sounds/numbers/number_fortyeight_sound.mp3": "d7299906c5605b67eb16acd8112be3d0",
"assets/sounds/numbers/number_fortyfive_sound.mp3": "cffed685f52297113f65bd0aa9fe531b",
"assets/sounds/numbers/number_fortyfour_sound.mp3": "b0b39d97e64a210cef9fc2ed0f26a56d",
"assets/sounds/numbers/number_fortynine_sound.mp3": "45a344b1e7643f46fbb70573df3e7d4c",
"assets/sounds/numbers/number_fortyone_sound.mp3": "726cf2c26b9c49b51ae81a9876817692",
"assets/sounds/numbers/number_fortyseven_sound.mp3": "e8dfba36a016c1bd3df684005d2e359c",
"assets/sounds/numbers/number_fortysix_sound.mp3": "becd77e4e2e4b332da5e267992bdb5ab",
"assets/sounds/numbers/number_fortythree_sound.mp3": "ba252175f795786b486796db65c356e9",
"assets/sounds/numbers/number_fortytwo_sound.mp3": "5cb2e684e2aa203675ce3cff288c4d99",
"assets/sounds/numbers/number_forty_sound.mp3": "38acd8ce7f6556788e1c51bd3386bfe2",
"assets/sounds/numbers/number_fourteen_sound.mp3": "fd14308b11cf7e81e9dd45cd7d410c77",
"assets/sounds/numbers/number_four_sound.mp3": "60c3c658b76e38283a5237585e0d2a87",
"assets/sounds/numbers/number_nineteen_sound.mp3": "ea305adfeed2222e982fa32479f1c198",
"assets/sounds/numbers/number_nine_sound.mp3": "c53ea866fd998158888cdc4bbd478a45",
"assets/sounds/numbers/number_one_sound.mp3": "34d3f9e7f2ac5245da21debb5c98ef13",
"assets/sounds/numbers/number_seventeen_sound.mp3": "f39d7b6cc9edd0a910ef8d181c4db5c0",
"assets/sounds/numbers/number_seven_sound.mp3": "7941e29379fdc06d0eafb8f4aabcc45c",
"assets/sounds/numbers/number_sixteen_sound.mp3": "87bc772071dfc49e1aaec33a2476621f",
"assets/sounds/numbers/number_six_sound.mp3": "f5608e7a380c0b2141bae248a3d07c44",
"assets/sounds/numbers/number_ten_sound.mp3": "180ba3bbded3b82d027b9e8e406812c4",
"assets/sounds/numbers/number_thirteen_sound.mp3": "6d5c9f536d4d4752e9e6ab08ee4579c0",
"assets/sounds/numbers/number_thirtyeight_sound.mp3": "73136b26e55ef0a1ea6bffd49896d53f",
"assets/sounds/numbers/number_thirtyfive_sound.mp3": "d5e1696dd4feb82185d35ee6dba3d0ab",
"assets/sounds/numbers/number_thirtyfour_sound.mp3": "aa107eb70dd7289091bc2d711ccd92f2",
"assets/sounds/numbers/number_thirtynine_sound.mp3": "2549f1cd76e4cf832bf47f8885c5eba9",
"assets/sounds/numbers/number_thirtyone_sound.mp3": "6e687cd876ae92471e40e25341f81435",
"assets/sounds/numbers/number_thirtyseven_sound.mp3": "11d39acc4299048dce4a54a639a2d4d2",
"assets/sounds/numbers/number_thirtysix_sound.mp3": "b16e65a78318deb4cff42b9a656d0bee",
"assets/sounds/numbers/number_thirtythree_sound.mp3": "1239ddbdb9a7432f4ac0de8b1953409f",
"assets/sounds/numbers/number_thirtytwo_sound.mp3": "bc1176eb98dc3b33dc186cf039046891",
"assets/sounds/numbers/number_thirty_sound.mp3": "c4536c17533e54257ff53cdf6c155e26",
"assets/sounds/numbers/number_three_sound.mp3": "21b597f2505f75f0218dec7e897000fd",
"assets/sounds/numbers/number_twelve_sound.mp3": "c523defe4304f1e9488e50ea79bff08b",
"assets/sounds/numbers/number_twentyeight_sound.mp3": "0bd4370e581351c25ac2868f08cb17ab",
"assets/sounds/numbers/number_twentyfive_sound.mp3": "f5f56abc32088b6d63307fcf2eb4bdcc",
"assets/sounds/numbers/number_twentyfour_sound.mp3": "723f32a66700177f96f303dc9ca22e20",
"assets/sounds/numbers/number_twentynine_sound.mp3": "ce12e387f8ed3dcf5b7ff5903a985ef9",
"assets/sounds/numbers/number_twentyone_sound.mp3": "5f2c913d20473e1e553bd7e96b18a06a",
"assets/sounds/numbers/number_twentyseven_sound.mp3": "0351a04ef047ab2646fa7ae4937c8496",
"assets/sounds/numbers/number_twentysix_sound.mp3": "fb05c7c23c726f820ca48f19fed5ba7a",
"assets/sounds/numbers/number_twentythree_sound.mp3": "ad976ab4d51027604402369269b36ff9",
"assets/sounds/numbers/number_twentytwo_sound.mp3": "3d9ef7ef990c50b2124a4bbd34b5de31",
"assets/sounds/numbers/number_twenty_sound.mp3": "dc5e178315fb9422983f86ceeef8f3fb",
"assets/sounds/numbers/number_two_sound.mp3": "32748dff3f9a8d4b8dc5d72ac57a6d10",
"assets/sounds/numbers/number_zero_sound.mp3": "f1e2e03c6d745f6a886280bc1c4a51dd",
"assets/sounds/phrases/are_you_coming.wav": "76ea62bb3a7c4d31fe9967ed0173d045",
"assets/sounds/phrases/dont_forget_to_subscribe.wav": "d4afea5f480ecaaa412e8513bbdcdf4a",
"assets/sounds/phrases/how_are_you_feeling.wav": "d98c5a2d4bd6f8a277568af4d66a416b",
"assets/sounds/phrases/i_love_anime.wav": "dd0e15ebddf0073cb7109d13853034b2",
"assets/sounds/phrases/i_love_programming.wav": "fbf5dd008efe3e02f5b6430d543aa810",
"assets/sounds/phrases/programming_is_easy.wav": "822eefdd72a7effa3902bf91e4f2dfb5",
"assets/sounds/phrases/what_is_your_name.wav": "1defe186c04028cf5c07b9131c3325b7",
"assets/sounds/phrases/where_are_you_going.wav": "1b91340a3ae40a9a07de5560427fe643",
"assets/sounds/phrases/yes_im_coming.wav": "c64f75bd2f64109cdfc4670161a9c7b2",
"assets/sounds/pronouns/Elle.mp3": "3686b6964ee7c1b1a411b5e75e551d4e",
"assets/sounds/pronouns/Elles.mp3": "9c180f93f4405da12ff58f9cf3a49885",
"assets/sounds/pronouns/Il.mp3": "d97d06d4a67ac82cac9413dfecda005c",
"assets/sounds/pronouns/Ils.mp3": "38cd064a4b246b291ec2eff7c8f1518d",
"assets/sounds/pronouns/Je.mp3": "188a5d67ad2d2f42ae5cd90d7e0857c5",
"assets/sounds/pronouns/Nous.mp3": "1981c9b2dc9a80a2679449ff11a9834c",
"assets/sounds/pronouns/Tu.mp3": "fba8aab517c11f07f0b460c88da73c72",
"assets/sounds/pronouns/Vous.mp3": "45c3ed0f4adc9478160550dd3827cc0f",
"assets/sounds/self/ans.mp3": "aab9f5c1dd2c7a1bf54d506ea3003c4e",
"assets/sounds/self/ans2.mp3": "e9a911cb9eeedd007789c6f3b743e34e",
"assets/sounds/self/ans3.mp3": "f0269aa1070b04b7b8ad7d8b062aadf5",
"assets/sounds/self/ans4.mp3": "d7971a6c32e8a5517e8beb2f2637e0b4",
"assets/sounds/self/ans5.mp3": "d850bd6dbc0f31db3edf911d4adf9516",
"assets/sounds/self/ans6.mp3": "95cc3610b5140d7a6a59315e49c417ae",
"assets/sounds/self/ans7.mp3": "ea7696f55e2ecb8f93dce7f0ee3ecf63",
"assets/sounds/self/ans8.mp3": "1ff5493213dc6aa1445bf40d7263411c",
"assets/sounds/self/appelle.mp3": "b0943b5b3e4732da14653ca563978bd2",
"assets/sounds/self/deuxsour.mp3": "58cc97d3fd0af69315aaa6621934f89d",
"assets/sounds/self/est.mp3": "e8854d8c3072441580f20ad8ad65d9fe",
"assets/sounds/self/sour.mp3": "784cf52957549a2cf0b6ffa29a5d174a",
"assets/sounds/self/suis.mp3": "7eeac9377a015c8233528f0530b677e7",
"assets/sounds/self/troissour.mp3": "88f7f15fe5578944481668a7336095e6",
"assets/sounds/self/troissour2.mp3": "268d5042195e418186f6220dda949401",
"assets/sounds/words/abientot.mp3": "2f1e531cac6290ab1af06e55f2baae72",
"assets/sounds/words/aime.mp3": "3dd2312e4d11da595d76821b9f8e8ff5",
"assets/sounds/words/Aurevoir.mp3": "38721f478c0bf81697eb0ec709a9abb5",
"assets/sounds/words/Bonjour.mp3": "ba93714c797fd3bd3017d087f43718a1",
"assets/sounds/words/Bonsoir.mp3": "296f4b5a5c4ab8eb6d636b122f4f16fd",
"assets/sounds/words/Combiencacoute.mp3": "173f4cd3a9d0503ee86d571d1e4c470b",
"assets/sounds/words/Commentcava.mp3": "e25bf479229c5b4113f52e81f436c63e",
"assets/sounds/words/Felicitations.mp3": "ca6a41ffe4e77b257d4018c83e31b8dc",
"assets/sounds/words/Je-ne-comprends-pas.mp3": "ad8995addf070ecdf6a66fefcc4c9ff0",
"assets/sounds/words/Je-suis-perdu.mp3": "eff52c72e6f6b345543942e34dd58ac3",
"assets/sounds/words/Je-t-aime.mp3": "d928573055002ae73889133dd443d5f5",
"assets/sounds/words/Merci.mp3": "eef5ff25b77b74ef14b638568b111f85",
"assets/sounds/words/Mercibeaucoup.mp3": "c31b936c3da295cbd92332a81c15db93",
"assets/sounds/words/Non.mp3": "4537d6a0dae58b3c52a266bcb0a918b5",
"assets/sounds/words/Oui.mp3": "a91782bbeef827d5e39cc69b3c54fe55",
"assets/sounds/words/Pardon.mp3": "dcf3b1cdb195c1e96325576f73163388",
"assets/sounds/words/Parlez-vous-anglais.mp3": "29f51b24031baf6627f69576b3d1e674",
"assets/sounds/words/Salut.mp3": "2039afb6f0d08d4027023d0596d95c32",
"canvaskit/canvaskit.js": "effe3b0c443dacbe5b7cb69d8604f3bb",
"canvaskit/canvaskit.wasm": "3343bfdc8efd5be600f8e153d27b4348",
"canvaskit/chromium/canvaskit.js": "b01d102efb807410c94c6623eaaa2888",
"canvaskit/chromium/canvaskit.wasm": "b63604f306c16d60d1ae3a2ec3c1ebbf",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "36f4a028c8b114534abc96dc6a8f7331",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "43e3e6a8c6937b0758a275ef422c7c94",
"/": "43e3e6a8c6937b0758a275ef422c7c94",
"main.dart.js": "2228fb4fdc050c9c310d950e7e58a977",
"manifest.json": "83d533e5ab22a8928a684b90a19bb48d",
"version.json": "5b01ccd219748939ae0bb85bb44a32f7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
