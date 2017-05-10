<?php

 {
    if(isset($_GET['keyword']))
    {
      $keyword = $_GET['keyword'];
      $keyword = str_replace(" ","+",$keyword);
      $distance = 10000000000;
      if(isset($_GET['Longitude'])&&isset($_GET['Latitude']))
      {
        $latitude  = $_GET['Latitude'];
        $longitude = $_GET['Longitude'];
        
      }
      else
      {
        $latitude  = 34;
        $longitude = -118;
      }
      $url = "https://graph.facebook.com/v2.8/search?q=".$keyword;
      $url_user = $url.'&type=user&fields=id,name,picture.width(700).height(700)&limit=10&access_token=EAAC6vcfHGaEBAOZAZAXsoZBdHMJe7SU6s2qpKV2QmpZCTZAH9r1e2drz59ItUclvXpsDk9ySwgIhJAx3dS51qIWzypZA7C9Tq7vhFutdofJfS6JzGYZALQOFJUULq7B4ZAOBI0MJn49PpXPvjn8OoznPSmidZCRq3l2IlMOFxc55ZBygZDZD';
      $url_page = $url.'&type=page&fields=id,name,picture.width(700).height(700)&limit=10&access_token=EAAC6vcfHGaEBAOZAZAXsoZBdHMJe7SU6s2qpKV2QmpZCTZAH9r1e2drz59ItUclvXpsDk9ySwgIhJAx3dS51qIWzypZA7C9Tq7vhFutdofJfS6JzGYZALQOFJUULq7B4ZAOBI0MJn49PpXPvjn8OoznPSmidZCRq3l2IlMOFxc55ZBygZDZD';
      $url_event= $url.'&type=event&fields=id,name,picture.width(700).height(700)&limit=10&access_token=EAAC6vcfHGaEBAOZAZAXsoZBdHMJe7SU6s2qpKV2QmpZCTZAH9r1e2drz59ItUclvXpsDk9ySwgIhJAx3dS51qIWzypZA7C9Tq7vhFutdofJfS6JzGYZALQOFJUULq7B4ZAOBI0MJn49PpXPvjn8OoznPSmidZCRq3l2IlMOFxc55ZBygZDZD';
      $url_place= $url.'&type=place&fields=id,name,picture.width(700).height(700)&limit=10&center='.$latitude.','.$longitude.'&access_token=EAAC6vcfHGaEBAOZAZAXsoZBdHMJe7SU6s2qpKV2QmpZCTZAH9r1e2drz59ItUclvXpsDk9ySwgIhJAx3dS51qIWzypZA7C9Tq7vhFutdofJfS6JzGYZALQOFJUULq7B4ZAOBI0MJn49PpXPvjn8OoznPSmidZCRq3l2IlMOFxc55ZBygZDZD';
      $url_group= $url.'&type=group&fields=id,name,picture.width(700).height(700)&limit=10&access_token=EAAC6vcfHGaEBAOZAZAXsoZBdHMJe7SU6s2qpKV2QmpZCTZAH9r1e2drz59ItUclvXpsDk9ySwgIhJAx3dS51qIWzypZA7C9Tq7vhFutdofJfS6JzGYZALQOFJUULq7B4ZAOBI0MJn49PpXPvjn8OoznPSmidZCRq3l2IlMOFxc55ZBygZDZD';

      $fbinfo_json_user  = file_get_contents($url_user);
      $fbinfo_json_page  = file_get_contents($url_page);
      $fbinfo_json_event = file_get_contents($url_event);
      $fbinfo_json_place = file_get_contents($url_place);
      $fbinfo_json_group = file_get_contents($url_group);

      $jsonarray=new stdClass();
      $jsonarray->user  = json_decode($fbinfo_json_user);
      $jsonarray->page  = json_decode($fbinfo_json_page);
      $jsonarray->event = json_decode($fbinfo_json_event);
      $jsonarray->place = json_decode($fbinfo_json_place);
      $jsonarray->group = json_decode($fbinfo_json_group);

      $fbinfo_json = json_encode($jsonarray);
      echo($fbinfo_json);
    }
 }



?>
