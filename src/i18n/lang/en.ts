// 定义内容
export default {
	router: {
		home: 'NFT',
        nft: 'NFT',
        dao: 'DAO',
		earn: 'Earn',
		pequod: 'Pequod',
		explore: 'Explore',
		create: 'Create--0000',
		},
		
		//Create Page Field Configuration
		create:{
		  createItemName: 'name',
          createItemExternalLinks: 'External links',
		  createItemDescribe: 'Description',
		  createItemBlockchain: 'Blockchain',
		  createLabelImage: 'Image, video, audio or 3D model. Supported file types: JPG, PNG, GIF, SVG, MP4, MAV. Maximum size: 100MB ',
		  createLabelName:'',
		  createLabelExternalLinks: 'You can view the project description on the detailed information page of this project',
		  createLabelDescribe: 'You can view the project description on the project details page below the project image',
		  createInfo: 'Required field',
		  createButton: 'Create',
		},
		//Treasure Seizing Activity Configuration
		treasure:{	
		  treasureActivityButton1: 'Treasure',	
		  treasureActivityButton2: 'Launch looting',
		  treasureActivityLink: 'Details',
		  treasureActivityPrice: 'Pricing',
		  treasureActivityReward: 'Reward',
		  treasureActivitySplitsNum: 'Task splitting',
		  treasureActivityDuration: 'Duration',
		  treasureActivityPeriod: 'Window period',
		  treasureActivityTicket: 'Ticket',
		  treasureActivityprogress: 'Task completion',
		  treasureActivityParticipantsNum: 'Number of participants',
		  treasureActivityRequiredNum: 'Number of people',
		  treasureActivityDistancetoEndTime: 'Distance end time',
		  treasureRecord: 'Treasure snatching record',
		  refundRecord: 'Refund record',
		},
	staticRoutes: {
		signIn: 'signIn',
		notFound: 'notFound',
		noPower: 'noPower',
	},
	user: {
		title0: 'Component size',
		title1: 'Language switching',
		title2: 'Menu search',
		title3: 'Layout configuration',
		title4: 'news',
		title5: 'Full screen on',
		title6: 'Full screen off',
		dropdownLarge: 'large',
		dropdownDefault: 'default',
		dropdownSmall: 'small',
		dropdown1: 'home page',
		dropdown2: 'Personal Center',
		dropdown3: '404',
		dropdown4: '401',
		dropdown5: 'Log out',
		dropdown6: 'Code warehouse',
		searchPlaceholder: 'Menu search: support Chinese, routing path',
		newTitle: 'notice',
		newBtn: 'All read',
		newGo: 'Go to the notification center',
		newDesc: 'No notice',
		logOutTitle: 'Tips',
		logOutMessage: 'This operation will log out. Do you want to continue?',
		logOutConfirm: 'determine',
		logOutCancel: 'cancel',
		logOutExit: 'Exiting',
	},
	tagsView: {
		refresh: 'refresh',
		close: 'close',
		closeOther: 'closeOther',
		closeAll: 'closeAll',
		fullscreen: 'fullscreen',
		closeFullscreen: 'closeFullscreen',
	},
	notFound: {
		foundTitle: 'Wrong address input, please re-enter the address~',
		foundMsg: 'You can check the web address first, and then re-enter or give us feedback.',
		foundBtn: 'Back to home page',
	},
	noAccess: {
		accessTitle: 'You are not authorized to operate~',
		accessMsg: 'Contact information: add QQ group discussion 665452019',
		accessBtn: 'Reauthorization',
	},
	layout: {
		configTitle: 'Layout configuration',
		oneTitle: 'Global Themes',
		twoTopTitle: 'top bar set up',
		twoMenuTitle: 'Menu set up',
		twoColumnsTitle: 'Columns set up',
		twoTopBar: 'Top bar background',
		twoTopBarColor: 'Top bar default font color',
		twoIsTopBarColorGradual: 'Top bar gradient',
		twoMenuBar: 'Menu background',
		twoMenuBarColor: 'Menu default font color',
		twoIsMenuBarColorGradual: 'Menu gradient',
		twoColumnsMenuBar: 'Column menu background',
		twoColumnsMenuBarColor: 'Default font color bar menu',
		twoIsColumnsMenuBarColorGradual: 'Column gradient',
		threeTitle: 'Interface settings',
		threeIsCollapse: 'Menu horizontal collapse',
		threeIsUniqueOpened: 'Menu accordion',
		threeIsFixedHeader: 'Fixed header',
		threeIsClassicSplitMenu: 'Classic layout split menu',
		threeIsLockScreen: 'Open the lock screen',
		threeLockScreenTime: 'screen locking(s/s)',
		fourTitle: 'Interface display',
		fourIsShowLogo: 'Sidebar logo',
		fourIsBreadcrumb: 'Open breadcrumb',
		fourIsBreadcrumbIcon: 'Open breadcrumb icon',
		fourIsTagsview: 'Open tagsview',
		fourIsTagsviewIcon: 'Open tagsview Icon',
		fourIsCacheTagsView: 'Enable tagsview cache',
		fourIsSortableTagsView: 'Enable tagsview drag',
		fourIsShareTagsView: 'Enable tagsview sharing',
		fourIsFooter: 'Open footer',
		fourIsGrayscale: 'Grey model',
		fourIsInvert: 'Color weak mode',
		fourIsDark: 'Dark Mode1111111',
		fourIsWartermark: 'Turn on watermark',
		fourWartermarkText: 'Watermark copy',
		fiveTitle: 'Other settings',
		fiveTagsStyle: 'Tagsview style',
		fiveAnimation: 'page animation',
		fiveColumnsAsideStyle: 'Column style',
		fiveColumnsAsideLayout: 'Column layout',
		sixTitle: 'Layout switch',
		sixDefaults: 'One',
		sixClassic: 'Two',
		sixTransverse: 'Three',
		sixColumns: 'Four',
		tipText: 'Click the button below to copy the layout configuration to `/src/stores/themeConfig.ts` It has been modified in.',
		copyText: 'replication configuration',
		resetText: 'restore default',
		copyTextSuccess: 'Copy succeeded!',
		copyTextError: 'Copy failed!',
	},
};
