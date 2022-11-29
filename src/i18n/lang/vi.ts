// 定义内容
export default {
		router: {
			home: 'NFT',
			nft: 'NFT',
			dao: 'DAO',
			earn: 'Earn',
			pequod: 'Pequod',
			explore: 'Explore',
			create: 'Create',
		},
		//create页面 字段配置
		create:{
			createItemName:'Tên',
			createItemExternalLinks:'Liên kết ngoài',			
			createItemDescription:'Mô tả',			
			createItemBlockchain:'Blockchain',			
			createLabelImage:'Hình ảnh, video, âm thanh hoặc mô hình 3D. Các loại tệp được hỗ trợ: JPG, PNG, GIF, SVG, MP4, MAV. Kích thước tối đa: 100MB',			
			createLabelName:'',			
			createLabelExternalLinks:'Sẽ có trên trang chi tiết của dự án này, có thể xem mô tả của dự án',			
			createLabelDescribe:'Trên trang chi tiết dự án bên dưới hình ảnh dự án, bạn có thể xem mô tả dự án',		
			createInfo:'Trường bắt buộc',	
			createButton: 'tạo'
			},
			
			//Cấu hình hoạt động đoạt bảo
			treasure:{	
			treasureActivityButton1: "Đoạt bảo",
			treasureActivityButton2: "Khởi xướng đoạt bảo",
			treasureActivityLink:'Chi tiết',
			treasureActivityPrice:'Giá cả',
			treasureActivityReward:'Phần thưởng',
			treasureActivitySplitsNum:'Phân chia nhiệm vụ',
			treasureActivityDuration:'Thời lượng',
			treasureActivityPeriod:'Thời kỳ cửa sổ',
			treasureActivityTicket:'Vé vào cửa',
			treasureActivityprogress:'Độ hoàn thành nhiệm vụ',
			treasureActivityParticipantsNum:'Số người tham gia',
			treasureActivityRequiredNum:'Số người',
			treasureActivityDistancetoEndTime:'Khoảng cách kết thúc thời gian',
			treasureRecord: "Kỷ lục đoạt bảo",
			refundRecord:'Hồ sơ hoàn tiền',
			
			},

	staticRoutes: {
		signIn: '登入',
		notFound: '找不到此頁面',
		noPower: '沒有許可權',
	},
	user: {
		title0: '組件大小',
		title1: '語言切換',
		title2: '選單蒐索',
		title3: '佈局配寘',
		title4: '消息',
		title5: '開全屏',
		title6: '關全屏',
		dropdownLarge: '大型',
		dropdownDefault: '默認',
		dropdownSmall: '小型',
		dropdown1: '首頁',
		dropdown2: '個人中心',
		dropdown3: '404',
		dropdown4: '401',
		dropdown5: '登出',
		dropdown6: '程式碼倉庫',
		searchPlaceholder: '選單蒐索：支援中文、路由路徑',
		newTitle: '通知',
		newBtn: '全部已讀',
		newGo: '前往通知中心',
		newDesc: '暫無通知',
		logOutTitle: '提示',
		logOutMessage: '此操作將登出，是否繼續？',
		logOutConfirm: '確定',
		logOutCancel: '取消',
		logOutExit: '退出中',
	},
	tagsView: {
		refresh: '重繪',
		close: '關閉',
		closeOther: '關閉其它',
		closeAll: '全部關閉',
		fullscreen: '當前頁全屏',
		closeFullscreen: '關閉全屏',
	},
	notFound: {
		foundTitle: '地址輸入錯誤，請重新輸入地址~',
		foundMsg: '您可以先檢查網址，然後重新輸入或給我們迴響問題。',
		foundBtn: '返回首頁',
	},
	noAccess: {
		accessTitle: '您未被授權，沒有操作許可權~',
		accessMsg: '聯繫方式：加QQ群探討665452019',
		accessBtn: '重新授權',
	},
	layout: {
		configTitle: '佈局配寘',
		oneTitle: '全域主題',
		twoTopTitle: '頂欄設定',
		twoMenuTitle: '選單設定',
		twoColumnsTitle: '分欄設定',
		twoTopBar: '頂欄背景',
		twoTopBarColor: '頂欄默認字體顏色',
		twoIsTopBarColorGradual: '頂欄背景漸變',
		twoMenuBar: '選單背景',
		twoMenuBarColor: '選單默認字體顏色',
		twoIsMenuBarColorGradual: '選單背景漸變',
		twoColumnsMenuBar: '分欄選單背景',
		twoColumnsMenuBarColor: '分欄選單默認字體顏色',
		twoIsColumnsMenuBarColorGradual: '分欄選單背景漸變',
		threeTitle: '介面設定',
		threeIsCollapse: '選單水准折疊',
		threeIsUniqueOpened: '選單手風琴',
		threeIsFixedHeader: '固定 Header',
		threeIsClassicSplitMenu: '經典佈局分割選單',
		threeIsLockScreen: '開啟鎖屏',
		threeLockScreenTime: '自動鎖屏(s/秒)',
		fourTitle: '介面顯示',
		fourIsShowLogo: '側邊欄 Logo',
		fourIsBreadcrumb: '開啟 Breadcrumb',
		fourIsBreadcrumbIcon: '開啟 Breadcrumb 圖標',
		fourIsTagsview: '開啟 Tagsview',
		fourIsTagsviewIcon: '開啟 Tagsview 圖標',
		fourIsCacheTagsView: '開啟 TagsView 緩存',
		fourIsSortableTagsView: '開啟 TagsView 拖拽',
		fourIsShareTagsView: '開啟 TagsView 共用',
		fourIsFooter: '開啟 Footer',
		fourIsGrayscale: '灰色模式',
		fourIsInvert: '色弱模式',
		fourIsDark: '深色模式',
		fourIsWartermark: '開啟浮水印',
		fourWartermarkText: '浮水印文案',
		fiveTitle: '其它設定',
		fiveTagsStyle: 'Tagsview 風格',
		fiveAnimation: '主頁面切換動畫',
		fiveColumnsAsideStyle: '分欄高亮風格',
		fiveColumnsAsideLayout: '分欄佈局風格',
		sixTitle: '佈局切換',
		sixDefaults: '默認',
		sixClassic: '經典',
		sixTransverse: '橫向',
		sixColumns: '分欄',
		tipText: '點擊下方按鈕，複製佈局配寘去`src/stores/themeConfig.ts`中修改。',
		copyText: '一鍵複製配寘',
		resetText: '一鍵恢復默認',
		copyTextSuccess: '複製成功！',
		copyTextError: '複製失敗！',
	},
};
