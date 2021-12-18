export class SearchResult {
	count: number;
	start: number;
	pageSize: number;
	suggestedQuery: SuggestedQuery;
	searchResultItemList: SearchResultItem[];
	searchResultFilterList: SearchResultFilter[];
	paginator: Paginator;
	sorter: Sorter;
}

export class SuggestedQuery {
	query: string;
	link: string;
}

export class SearchResultItem {
	id: string;
	searchResultItemList: SearchResultItem[];
	searchResultItemFieldList: SearchResultItemField[];
}

export class SearchResultItemField {
	value: Object;
	key: string;
}

export class Object {
}

export class SearchResultFilter {
	name: string;
	type: SearchResultFilterType;
	cancel: string;
	label: string;
	min: number;
	max: number;
	searchResultFilterItemList: SearchResultFilterItem[];
}

export class SearchResultFilterType {
	TEXT: string;
	NUMBER: string;
}

export class SearchResultFilterItem {
	name: string;
	value: string;
	count: number;
	from: number;
	link: string;
	cancel: string;
	to: number;
	recommendationId: string;
	rank: number;
	searchResultFilterItemList: SearchResultFilterItem[];
}

export class Paginator {
	first: Page;
	last: Page;
	previous: Page;
	pageList: Page[];
	next: Page;
}

export class Page {
	link: string;
	start: number;
	selected: boolean;
}

export class Sorter {
	sortList: Sort[];
	cancel: string;
}

export class Sort {
	field: string;
	link: string;
	selected: boolean;
	caption: string;
	direction: SortDirection;
}

export class SortDirection {
	ASC: string;
	DESC: string;
}

export class Client {
	name: string;
	id: string;
	lastModified: string;
	clientKey: string;
	clientShopList: ClientShop[];
}

export class ClientShop {
	name: string;
	id: string;
	active: boolean;
}

export class ServerInfo {
	timeZone: number;
	currentTime: string;
}

export class Shop {
	name: string;
	id: string;
	address: string;
	active: boolean;
	language: Language;
	live: boolean;
	lastModified: string;
	apiKey: string;
	apiSecret: string;
	apiToken: string;
	whiteIPList: string[];
	locationItem: LocationItem;
	visitSimulation: VisitSimulation;
	stopWords: string;
	autocompKeypressCount: number;
	autocompWordCount: number;
	autocompItemCount: number;
	autocompSrc: string;
	autocompCss: string;
	feedUrl: string;
	solrItemUrl: string;
	solrUserUrl: string;
	solrEventUrl: string;
	solrRecommendationUrl: string;
	serviceUrl: string;
	feedUsername: string;
	feedPassword: string;
	magentoAPIUrl: string;
	magentoAPIKey: string;
	magentoAPISecret: string;
	shopifyAPIUrl: string;
	shopifyAPIKey: string;
	shopifyAPISecret: string;
	feedFieldList: FeedField[];
	feedFieldSetRuleList: FeedFieldSetRule[];
	sortItemSetRuleList: SortItemSetRule[];
	autocompleteRuleList: AutocompleteRule[];
	synonymsRuleList: SynonymsRule[];
	searchTemplateRuleList: SearchTemplateRule[];
	promotionRuleList: PromotionRule[];
	sponceredItemRuleList: SponceredItemRule[];
	queryActionRuleList: QueryActionRule[];
	contentTemplateList: ContentTemplate[];
	shopEventList: ShopEvent[];
	dayPartList: DayPart[];
	virtualCategoryList: VirtualCategory[];
	locationList: Location[];
	audienceSegmentList: AudienceSegment[];
	contextList: Context[];
	scenarioList: Scenario[];
	visitSimulationList: VisitSimulation[];
	segmenterCampainList: SegmenterCampain[];
	textWidgetList: TextWidget[];
	visualWidgetList: VisualWidget[];
	password: string;
}

export class Language {
	name: string;
	id: string;
	iso: string;
}

export class LocationItem {
	id: string;
	timeZone: string;
	country: string;
	locale: string;
	ipFrom: number;
	ipTo: number;
	area: string;
	city: string;
	areaCombined: string;
	latitude: string;
	longitude: string;
	weahercondition: string;
	lastWeaherconditionUpdate: string;
}

export class VisitSimulation {
	name: string;
	id: string;
	date: string;
	description: string;
	devicetype: Devicetype;
	audienceGroup: AudienceSegment;
	locationItem: LocationItem;
}

export class Devicetype {
	name: string;
	id: string;
	type: DevicetypeType;
}

export class DevicetypeType {
	DESKTOP: string;
	TEBLET: string;
	MOBILE: string;
}

export class AudienceSegment {
	name: string;
	id: string;
	type: AudienceSegmentType;
	active: boolean;
	userFilter: string;
	itemFilter: string;
	recommendedItemsFilter: string;
	interestedInVirtualCategory: VirtualCategory;
	orderedVirtualCategory: VirtualCategory;
	orderedVirtualCategoryFrom: number;
	orderedVirtualCategoryTill: number;
	orderedVirtualCategoryInLastNDays: number;
	orderedVirtualCategoryMinAmount: number;
	notOrderedInVirtualCategory: VirtualCategory;
	params: string;
}

export class AudienceSegmentType {
	STATIC: string;
	DYNAMIC: string;
}

export class VirtualCategory {
	name: string;
	id: string;
	active: boolean;
	description: string;
	params: string;
}

export class FeedField {
	name: string;
	id: string;
	type: FeedFieldType;
	facet: boolean;
	singleSelect: boolean;
	lable: string;
	facetLimit: number;
	facetMincount: number;
	hierarchieDelimiter: string;
	facetCaption: string;
	facetBucketList: FacetBucket[];
	facetCustomSort: string;
	valueLables: string;
	facetSortType: FeedFieldFacetSortType;
}

export class FeedFieldType {
	TEXT: string;
	NUMBER: string;
}

export class FacetBucket {
	name: string;
	id: string;
	from: number;
	to: number;
}

export class FeedFieldFacetSortType {
	VALUE_ASC: string;
	VALUE_DESC: string;
	FREQUENCY_ASC: string;
	FREQUENCY_DESC: string;
	CUSTOM: string;
}

export class FeedFieldSetRule {
	name: string;
	context: Context;
	id: string;
	active: boolean;
	virtualCategory: VirtualCategory;
	audienceSegment: AudienceSegment;
	feedFieldList: FeedField[];
}

export class Context {
	name: string;
	location: Location;
	id: string;
	active: boolean;
	devicetype: Devicetype;
	dayPart: DayPart;
	shopEvent: ShopEvent;
	weathercondition: Weathercondition;
}

export class Location {
	name: string;
	id: string;
	active: boolean;
	description: string;
	locationDistinctIdsList: string[];
}

export class DayPart {
	name: string;
	id: string;
	active: boolean;
	description: string;
	startHour: number;
	endHour: number;
	startMinute: number;
	endMinut: number;
	mon: boolean;
	tue: boolean;
	wed: boolean;
	thu: boolean;
	fri: boolean;
	sat: boolean;
	sun: boolean;
}

export class ShopEvent {
	name: string;
	id: string;
	active: boolean;
	description: string;
	startdate: string;
	enddate: string;
}

export class Weathercondition {
	id: string;
	condition: WeatherconditionCondition;
}

export class WeatherconditionCondition {
	name: string;
	THUNDERSTROM: string;
	DRIZZLE: string;
	RAIN: string;
	SNOW: string;
	CLEAR: string;
	CLOUDS: string;
}

export class SortItemSetRule {
	name: string;
	context: Context;
	id: string;
	active: boolean;
	virtualCategory: VirtualCategory;
	audienceSegment: AudienceSegment;
	sortItemList: SortItem[];
}

export class SortItem {
	id: string;
	fieldName: string;
	lable: string;
	sortType: SortItemSortType;
}

export class SortItemSortType {
	ASC: string;
	DESC: string;
}

export class AutocompleteRule {
	name: string;
	context: Context;
	id: string;
	virtualCategory: VirtualCategory;
	audienceSegment: AudienceSegment;
	keypressCount: number;
	wordCount: number;
	itemCount: number;
	src: string;
	css: string;
	inputElemetId: string;
}

export class SynonymsRule {
	name: string;
	context: Context;
	id: string;
	active: boolean;
	virtualCategory: VirtualCategory;
	audienceSegment: AudienceSegment;
	wordList: string[];
	meaning: string;
}

export class SearchTemplateRule {
	name: string;
	context: Context;
	id: string;
	active: boolean;
	text: string;
	virtualCategory: VirtualCategory;
	audienceSegment: AudienceSegment;
	css: string;
	templatpagepattern: string;
	outputElemetId: string;
}

export class PromotionRule {
	name: string;
	context: Context;
	id: string;
	virtualCategory: VirtualCategory;
	audienceSegment: AudienceSegment;
	wordList: string[];
	boost: PromotionRuleBoost;
	promotedVirtualCategory: VirtualCategory;
}

export class PromotionRuleBoost {
	boost: number;
	SLIGHT: string;
	MODRATE: string;
	HEIGH: string;
	HIGHEST: string;
}

export class SponceredItemRule {
	name: string;
	context: Context;
	id: string;
	active: boolean;
	virtualCategory: VirtualCategory;
	audienceSegment: AudienceSegment;
	wordList: string[];
}

export class QueryActionRule {
	name: string;
	context: Context;
	id: string;
	active: boolean;
	virtualCategory: VirtualCategory;
	audienceSegment: AudienceSegment;
	wordList: string[];
	navigateTarget: string;
}

export class ContentTemplate {
	name: string;
	id: string;
	active: boolean;
	text: string;
	css: string;
	templatpagepattern: string;
	outputElemetId: string;
	segment: Context;
	urlpattern: string;
}

export class Scenario {
	name: string;
	id: string;
	audienceSegment: AudienceSegment;
	promotionRule: PromotionRule;
	desc: string;
}

export class SegmenterCampain {
	id: string;
	text: string;
	audienceSegment: AudienceSegment;
	itemCount: number;
	segmenterDesignId: string;
	colCount: number;
	advance: boolean;
	segmenterCampainDesignElementList: SegmenterCampainDesignElement[];
}

export class SegmenterCampainDesignElement {
	name: string;
	id: string;
	elementId: string;
	segmenterCampainDesignElementPropertyList: SegmenterCampainDesignElementProperty[];
}

export class SegmenterCampainDesignElementProperty {
	name: string;
	value: string;
	id: string;
	propertyType: SegmenterCampainDesignElementPropertyPropertyType;
}

export class SegmenterCampainDesignElementPropertyPropertyType {
	FONT_SIZE: string;
	FONT_FAMILY: string;
	COLOR: string;
	TEXT: string;
	NUMBER: string;
}

export class TextWidget {
	id: string;
	text: string;
}

export class VisualWidget {
	id: string;
	text: string;
}

export class SegmenterDesign {
	id: string;
	text: string;
	itemCount: number;
	colCount: number;
	image: string;
	segmenterDesignElementList: SegmenterDesignElement[];
}

export class SegmenterDesignElement {
	name: string;
	segmenterDesignElementPropertyList: SegmenterDesignElementProperty[];
	elementId: string;
}

export class SegmenterDesignElementProperty {
	name: string;
	value: string;
	propertyType: SegmenterDesignElementPropertyPropertyType;
}

export class SegmenterDesignElementPropertyPropertyType {
	FONT_SIZE: string;
	FONT_FAMILY: string;
	COLOR: string;
	TEXT: string;
	NUMBER: string;
}

export class LocationDistinct {
	id: string;
	country: string;
	area: string;
	city: string;
	areaCombined: string;
}

export class ShopInfo {
	id: string;
	lastModified: string;
	shopId: string;
	lastIndexed: string;
	lastIndexedBy: string;
	populerItemList: PopulerItem[];
	queryEventList: QueryEvent[];
	itemsLastUpdated: string;
	recommendationsCount: number;
	ctr: number;
}

export class PopulerItem {
	id: string;
	image: string;
	title: string;
	url: string;
	price: number;
}

export class QueryEvent {
	count: number;
	date: string;
}

export class User {
	id: string;
	active: boolean;
	version: number;
	clientId: string;
	email: string;
	firstname: string;
	lastname: string;
	totp: string;
	totpValidTill: string;
	password: string;
}

export class ApiUser {
	name: string;
}

export class LoginRequest {
	email: string;
	password: string;
}

export class LoginResponse {
	token: string;
}

export class Profile {
	id: string;
	active: boolean;
	version: number;
	clientId: string;
	email: string;
	firstname: string;
	lastname: string;
	roleList: Role[];
	password: string;
}

export class Role {
	ADMIN: string;
	INDEXSER: string;
	PUSHER: string;
}

export class ForgotPasswordRequest {
	email: string;
}

export class ResetPasswordRequest {
	totp: string;
	newPassword: string;
}

export class ForgotPasswordResponse {
	totp: string;
}

export class ResetPasswordResponse {
	token: string;
}

export class CreateShopVersionRequest {
	shopId: string;
	desc: string;
	title: string;
}

export class GoLiveRequest {
	shopId: string;
	desc: string;
	title: string;
}

export class TextWidgetTemplate {
  // tslint:disable-next-line:indent
	id: string;
	text: string;
}

export class VisualWidgetTemplate {
	id: string;
	text: string;
}

export class Event {
  name: string;
  id: string;
}

export class Item {
  id: string;
}

