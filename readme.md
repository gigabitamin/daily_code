
============================================
다크모드시 
7번 위클리 페이지의


<!-- $(function(){
    let $weeklyItem = $('#weekly_item div.weekly-box');

    $('#weekly_ul li').addClass('selectedItem1'); 
    $('#weekly_ul li:firstchild').addClass('selectedItem2'); 
    $('#weekly_ul li').on('click', function(){
        let index = $(this).index();
        $('#weekly_ul li').removeClass('selectedItem2');
        $(this).addClass('selectedItem2');
        $weeklyItem.css('display', 'none');
	$weeklyItem.eq(index).css('display', 'block');

    });
}); -->


클릭한 항목만 색상 바꾸는 기능 색상 문제로 보이지 않음
호버링 시 그레이 색상 주는 기능만 새로 추가


===========================================

4-4 section 마우스 호버링 이벤트 오류 수정


================================================
todo - 다크모드 전환시 on of 변환되는 버튼 이미지 기능 만들기

수업 실습예제 파일 tabMenu css js 참조
<!-- addClass removeClass  -->

<!-- ul li {
	list-style:none;
	padding:0;
	height:30px;
	line-height:30px;
	overflow:hidden;
	margin-top:0px;
}

.selectedItem img {margin-top:-30px;}


$(function(){
    let $tabContent = $('#tabContent div');
    $('#tab li:first-child').addClass('selectedItem');
    $('#tab li').on('click', function(){ 
        let index = $(this).index();
        $('#tab li').removeClass('selectedItem');
        $(this).addClass('selectedItem');
        $tabContent.css('display', 'none')
        $tabContent.eq(index).css('display', 'block')
    });

}); -->

==============================================

