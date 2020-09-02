$(function () {


	$('.banner-section__slider').slick({
		dots: true,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrows-left.svg" alt=""></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrows-right.svg" alt=""></button>',
	});

	$('.tab').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs__content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs__content--active');
	});

	$('.product-item__favorite').on('click', function () {
		$(this).toggleClass('product-item__favorite--active');
	});

	$('.product__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="product__slider-btn product__slider-btnprev"><img src="images/arrows-black-left.svg" alt=""></button>',
		nextArrow: '<button class="product__slider-btn product__slider-btnnext"><img src="images/arrows-black-right.svg" alt=""></button>',
	});

	$('.filter-style').styler();

	$('.filter__item-drop, .filter-extra').on('click', function () {
		$(this).toggleClass('filter__item-drop--active');
		$(this).next().slideToggle();
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		grid: true,
		min: 100000,
		max: 500000,
	});

	$('.catalog__filter-btngrid').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
		$('.product__wrapper').removeClass('product__wrapper--list');
	});

	$('.catalog__filter-btnline').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
		$('.product__wrapper').addClass('product__wrapper--list');
	});

});