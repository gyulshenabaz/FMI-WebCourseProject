function getNearestAirportCity(iconId, inputId) {
    var icon = $(iconId);
    icon.addClass('fa-spin');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
                $(inputId).val('Пловдив');
                icon.removeClass('fa-spin');
            },
            function(error) {
                var text;

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        text = "Отказахте заявката за геолокация. Проверете настройките на браузъра си.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        text = "Информацията за местоположението е недостъпна. Опитайте отново по-късно.";
                        break;
                    case error.TIMEOUT:
                        text = "Заявката за местоположение отне твърде много време. Опитайте отново по-късно.";
                        break;
                    default:
                        text = "Възникна грешка. Опитайте отново по-късно.";
                        break;
                }
                alert(text);
            });
    }
}