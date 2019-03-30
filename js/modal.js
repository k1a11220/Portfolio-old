$(document).ready(function(){

  // MODAL
  var modalText = {
    ink: {
      title: '2018 INK 콘서트',
      tag: '(전)대한민국청소년기자단',
      detail: '인천에서 열렸던 2018 INK 콘서트에 프레스로 등록하여 취재한 경험이 있습니다. 현재는 경기도 청소년 기자단에서 활동하고 있습니다.',
    },
    mirrOS: {
      title: 'mirr.OS',
      tag: 'Glancr 공동개발 Iot 운영체제',
      detail: '독일의 개발팀 Glancr와 공동 개발한 iot 운영체제입니다. 한국에서 원활한 사용이 가능하게끔 한글 지원 및 사용자 친화적 UI, AI 비서, 스타일러스 캘린더 기능 등이 추가되었습니다.',
      link:'https://glancr.de/'
    },
    ToDo: {
      title: 'ToDo 페이지',
      tag: '바닐라 JS를 이용한 일정관리 페이지',
      detail: '바닐라 JS를 이용한 제 첫번째 ToDO 페이지 입니다.',
    },
    BR: {
      title: 'Project-BR',
      tag: '첫 번째 총기 프로젝트',
      detail: '처음으로 진행해본 총기관련 프로젝트 입니다. 여러가지 총기들을 분석하여 총기별 장점들을 통합하기 위한 목적으로개발하였으나 개발 도중 설계 데이터가 삭제되어 중단된 프로젝트입니다.3D 프린팅을 통한 목업제작 및 레이저 각인 테스트 단계까지는 진행해보았습니다.',
    },
    STUDIO: {
      title: 'STUDIO',
      tag: '사회적기업 창업팀',
      detail: 'STUDIO는 특정한 사회 문제를 해결하는 것을 목적으로 사회적 기업을 설립하기 위해 만든 팀 입니다. 최근 3차 산업혁명의 연장선인 4차 산업혁명은 마치 이미 예정된 일처럼 여겨지고 있는데, 4차 산업혁명이라는 새로운 흐름에 적응하지 못할 사람들을 위해 우리는 우리의 작은 힘을 보태기로 했습니다. 그렇게 우리는 상품을 판매하는 것에서 그치지 않고 그 수익을 바탕으로 세상의 균형을 바로잡기 위한 팀, STUDIO를 설립하게 되었습니다.',
      link:'https://k1a11220.github.io/STUDIO-Homepage-2/#'
    },
    mirrOne: {
      title: 'mirr One',
      tag: 'Iot 허브용 스마트미러',
      detail: 'STUDIO의 첫 번째 제품 프로젝트, mirr.OS를 이용하여 일분일초가 아까운 현대인들을 위해 일정관리를 도와줍니다. 또한 단가 역시 파격적으로 줄여 소비자들의 접근성을 높였습니다.',
      link:'https://k1a11220.github.io/STUDIO-Homepage-2/#'
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('media/" + id  +"-" + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})
