import { Component } from '@angular/core';
import { Facility } from './facility';
import { Search } from './search';
import { MapsService } from "../maps/maps.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [MapsService]
})
export 
class SearchFormComponent 
{

    private huc8_layers_dir = "../../assets/huc8-boundary-layers/";

    huc8_1010002_geojson = this.huc8_layers_dir + "01010002.json";
    huc8_1010003_geojson = this.huc8_layers_dir + "01010003.json";
    huc8_1010004_geojson = this.huc8_layers_dir + "01010004.json";
    huc8_1010005_geojson = this.huc8_layers_dir + "01010005.json";
    huc8_1010006_geojson = this.huc8_layers_dir + "01010006.json";
    huc8_1010007_geojson = this.huc8_layers_dir + "01010007.json";
    huc8_1010008_geojson = this.huc8_layers_dir + "01010008.json";
    huc8_1010009_geojson = this.huc8_layers_dir + "01010009.json";
    huc8_1010010_geojson = this.huc8_layers_dir + "01010010.json";
    huc8_1010011_geojson = this.huc8_layers_dir + "01010011.json";
    huc8_1020001_geojson = this.huc8_layers_dir + "01020001.json";
    huc8_1020002_geojson = this.huc8_layers_dir + "01020002.json";
    huc8_1020003_geojson = this.huc8_layers_dir + "01020003.json";
    huc8_1020004_geojson = this.huc8_layers_dir + "01020004.json";
    huc8_1020005_geojson = this.huc8_layers_dir + "01020005.json";
    huc8_1030001_geojson = this.huc8_layers_dir + "01030001.json";
    huc8_1030002_geojson = this.huc8_layers_dir + "01030002.json";
    huc8_1030003_geojson = this.huc8_layers_dir + "01030003.json";
    huc8_1040001_geojson = this.huc8_layers_dir + "01040001.json";
    huc8_1040002_geojson = this.huc8_layers_dir + "01040002.json";
    huc8_1050001_geojson = this.huc8_layers_dir + "01050001.json";
    huc8_1050002_geojson = this.huc8_layers_dir + "01050002.json";
    huc8_1050003_geojson = this.huc8_layers_dir + "01050003.json";
    huc8_1050004_geojson = this.huc8_layers_dir + "01050004.json";
    huc8_1060001_geojson = this.huc8_layers_dir + "01060001.json";
    huc8_1060002_geojson = this.huc8_layers_dir + "01060002.json";
    huc8_1060003_geojson = this.huc8_layers_dir + "01060003.json";
    huc8_1070001_geojson = this.huc8_layers_dir + "01070001.json";
    huc8_1070002_geojson = this.huc8_layers_dir + "01070002.json";
    huc8_1070003_geojson = this.huc8_layers_dir + "01070003.json";
    huc8_1070004_geojson = this.huc8_layers_dir + "01070004.json";
    huc8_1070005_geojson = this.huc8_layers_dir + "01070005.json";
    huc8_1070006_geojson = this.huc8_layers_dir + "01070006.json";
    huc8_1080101_geojson = this.huc8_layers_dir + "01080101.json";
    huc8_1080102_geojson = this.huc8_layers_dir + "01080102.json";
    huc8_1080103_geojson = this.huc8_layers_dir + "01080103.json";
    huc8_1080104_geojson = this.huc8_layers_dir + "01080104.json";
    huc8_1080105_geojson = this.huc8_layers_dir + "01080105.json";
    huc8_1080106_geojson = this.huc8_layers_dir + "01080106.json";
    huc8_1080107_geojson = this.huc8_layers_dir + "01080107.json";
    huc8_1080201_geojson = this.huc8_layers_dir + "01080201.json";
    huc8_1080202_geojson = this.huc8_layers_dir + "01080202.json";
    huc8_1080203_geojson = this.huc8_layers_dir + "01080203.json";
    huc8_1080204_geojson = this.huc8_layers_dir + "01080204.json";
    huc8_1080205_geojson = this.huc8_layers_dir + "01080205.json";
    huc8_1080206_geojson = this.huc8_layers_dir + "01080206.json";
    huc8_1080207_geojson = this.huc8_layers_dir + "01080207.json";
    huc8_1090001_geojson = this.huc8_layers_dir + "01090001.json";
    huc8_1090002_geojson = this.huc8_layers_dir + "01090002.json";
    huc8_1090003_geojson = this.huc8_layers_dir + "01090003.json";
    huc8_1090004_geojson = this.huc8_layers_dir + "01090004.json";
    huc8_1090005_geojson = this.huc8_layers_dir + "01090005.json";
    huc8_1100001_geojson = this.huc8_layers_dir + "01100001.json";
    huc8_1100002_geojson = this.huc8_layers_dir + "01100002.json";
    huc8_1100003_geojson = this.huc8_layers_dir + "01100003.json";
    huc8_1100004_geojson = this.huc8_layers_dir + "01100004.json";
    huc8_1100005_geojson = this.huc8_layers_dir + "01100005.json";
    huc8_1100006_geojson = this.huc8_layers_dir + "01100006.json";
    huc8_2020001_geojson = this.huc8_layers_dir + "02020001.json";
    huc8_2020002_geojson = this.huc8_layers_dir + "02020002.json";
    huc8_2020003_geojson = this.huc8_layers_dir + "02020003.json";
    huc8_2020004_geojson = this.huc8_layers_dir + "02020004.json";
    huc8_2020005_geojson = this.huc8_layers_dir + "02020005.json";
    huc8_2020006_geojson = this.huc8_layers_dir + "02020006.json";
    huc8_2020007_geojson = this.huc8_layers_dir + "02020007.json";
    huc8_2020008_geojson = this.huc8_layers_dir + "02020008.json";
    huc8_2030101_geojson = this.huc8_layers_dir + "02030101.json";
    huc8_2030102_geojson = this.huc8_layers_dir + "02030102.json";
    huc8_2030103_geojson = this.huc8_layers_dir + "02030103.json";
    huc8_2030104_geojson = this.huc8_layers_dir + "02030104.json";
    huc8_2030105_geojson = this.huc8_layers_dir + "02030105.json";
    huc8_2030201_geojson = this.huc8_layers_dir + "02030201.json";
    huc8_2030202_geojson = this.huc8_layers_dir + "02030202.json";
    huc8_2030203_geojson = this.huc8_layers_dir + "02030203.json";
    huc8_2040101_geojson = this.huc8_layers_dir + "02040101.json";
    huc8_2040102_geojson = this.huc8_layers_dir + "02040102.json";
    huc8_2040103_geojson = this.huc8_layers_dir + "02040103.json";
    huc8_2040104_geojson = this.huc8_layers_dir + "02040104.json";
    huc8_2040105_geojson = this.huc8_layers_dir + "02040105.json";
    huc8_2040106_geojson = this.huc8_layers_dir + "02040106.json";
    huc8_2040201_geojson = this.huc8_layers_dir + "02040201.json";
    huc8_2040202_geojson = this.huc8_layers_dir + "02040202.json";
    huc8_2040203_geojson = this.huc8_layers_dir + "02040203.json";
    huc8_2040204_geojson = this.huc8_layers_dir + "02040204.json";
    huc8_2040205_geojson = this.huc8_layers_dir + "02040205.json";
    huc8_2040206_geojson = this.huc8_layers_dir + "02040206.json";
    huc8_2040207_geojson = this.huc8_layers_dir + "02040207.json";
    huc8_2040301_geojson = this.huc8_layers_dir + "02040301.json";
    huc8_2040302_geojson = this.huc8_layers_dir + "02040302.json";
    huc8_2040303_geojson = this.huc8_layers_dir + "02040303.json";
    huc8_2040304_geojson = this.huc8_layers_dir + "02040304.json";
    huc8_2050101_geojson = this.huc8_layers_dir + "02050101.json";
    huc8_2050102_geojson = this.huc8_layers_dir + "02050102.json";
    huc8_2050103_geojson = this.huc8_layers_dir + "02050103.json";
    huc8_2050104_geojson = this.huc8_layers_dir + "02050104.json";
    huc8_2050105_geojson = this.huc8_layers_dir + "02050105.json";
    huc8_2050106_geojson = this.huc8_layers_dir + "02050106.json";
    huc8_2050107_geojson = this.huc8_layers_dir + "02050107.json";
    huc8_2050201_geojson = this.huc8_layers_dir + "02050201.json";
    huc8_2050202_geojson = this.huc8_layers_dir + "02050202.json";
    huc8_2050203_geojson = this.huc8_layers_dir + "02050203.json";
    huc8_2050204_geojson = this.huc8_layers_dir + "02050204.json";
    huc8_2050205_geojson = this.huc8_layers_dir + "02050205.json";
    huc8_2050206_geojson = this.huc8_layers_dir + "02050206.json";
    huc8_2050301_geojson = this.huc8_layers_dir + "02050301.json";
    huc8_2050302_geojson = this.huc8_layers_dir + "02050302.json";
    huc8_2050303_geojson = this.huc8_layers_dir + "02050303.json";
    huc8_2050304_geojson = this.huc8_layers_dir + "02050304.json";
    huc8_2050305_geojson = this.huc8_layers_dir + "02050305.json";
    huc8_2050306_geojson = this.huc8_layers_dir + "02050306.json";
    huc8_2060001_geojson = this.huc8_layers_dir + "02060001.json";
    huc8_2060002_geojson = this.huc8_layers_dir + "02060002.json";
    huc8_2060003_geojson = this.huc8_layers_dir + "02060003.json";
    huc8_2060004_geojson = this.huc8_layers_dir + "02060004.json";
    huc8_2060005_geojson = this.huc8_layers_dir + "02060005.json";
    huc8_2060006_geojson = this.huc8_layers_dir + "02060006.json";
    huc8_2070001_geojson = this.huc8_layers_dir + "02070001.json";
    huc8_2070002_geojson = this.huc8_layers_dir + "02070002.json";
    huc8_2070003_geojson = this.huc8_layers_dir + "02070003.json";
    huc8_2070004_geojson = this.huc8_layers_dir + "02070004.json";
    huc8_2070005_geojson = this.huc8_layers_dir + "02070005.json";
    huc8_2070006_geojson = this.huc8_layers_dir + "02070006.json";
    huc8_2070007_geojson = this.huc8_layers_dir + "02070007.json";
    huc8_2070008_geojson = this.huc8_layers_dir + "02070008.json";
    huc8_2070009_geojson = this.huc8_layers_dir + "02070009.json";
    huc8_2070010_geojson = this.huc8_layers_dir + "02070010.json";
    huc8_2070011_geojson = this.huc8_layers_dir + "02070011.json";
    huc8_2080101_geojson = this.huc8_layers_dir + "02080101.json";
    huc8_2080102_geojson = this.huc8_layers_dir + "02080102.json";
    huc8_2080103_geojson = this.huc8_layers_dir + "02080103.json";
    huc8_2080104_geojson = this.huc8_layers_dir + "02080104.json";
    huc8_2080105_geojson = this.huc8_layers_dir + "02080105.json";
    huc8_2080106_geojson = this.huc8_layers_dir + "02080106.json";
    huc8_2080107_geojson = this.huc8_layers_dir + "02080107.json";
    huc8_2080108_geojson = this.huc8_layers_dir + "02080108.json";
    huc8_2080109_geojson = this.huc8_layers_dir + "02080109.json";
    huc8_2080110_geojson = this.huc8_layers_dir + "02080110.json";
    huc8_2080111_geojson = this.huc8_layers_dir + "02080111.json";
    huc8_2080201_geojson = this.huc8_layers_dir + "02080201.json";
    huc8_2080202_geojson = this.huc8_layers_dir + "02080202.json";
    huc8_2080203_geojson = this.huc8_layers_dir + "02080203.json";
    huc8_2080204_geojson = this.huc8_layers_dir + "02080204.json";
    huc8_2080205_geojson = this.huc8_layers_dir + "02080205.json";
    huc8_2080206_geojson = this.huc8_layers_dir + "02080206.json";
    huc8_2080207_geojson = this.huc8_layers_dir + "02080207.json";
    huc8_2080208_geojson = this.huc8_layers_dir + "02080208.json";
    huc8_3010101_geojson = this.huc8_layers_dir + "03010101.json";
    huc8_3010102_geojson = this.huc8_layers_dir + "03010102.json";
    huc8_3010103_geojson = this.huc8_layers_dir + "03010103.json";
    huc8_3010104_geojson = this.huc8_layers_dir + "03010104.json";
    huc8_3010105_geojson = this.huc8_layers_dir + "03010105.json";
    huc8_3010106_geojson = this.huc8_layers_dir + "03010106.json";
    huc8_3010107_geojson = this.huc8_layers_dir + "03010107.json";
    huc8_3010201_geojson = this.huc8_layers_dir + "03010201.json";
    huc8_3010202_geojson = this.huc8_layers_dir + "03010202.json";
    huc8_3010203_geojson = this.huc8_layers_dir + "03010203.json";
    huc8_3010204_geojson = this.huc8_layers_dir + "03010204.json";
    huc8_3010205_geojson = this.huc8_layers_dir + "03010205.json";
    huc8_3020101_geojson = this.huc8_layers_dir + "03020101.json";
    huc8_3020102_geojson = this.huc8_layers_dir + "03020102.json";
    huc8_3020103_geojson = this.huc8_layers_dir + "03020103.json";
    huc8_3020104_geojson = this.huc8_layers_dir + "03020104.json";
    huc8_3020105_geojson = this.huc8_layers_dir + "03020105.json";
    huc8_3020201_geojson = this.huc8_layers_dir + "03020201.json";
    huc8_3020202_geojson = this.huc8_layers_dir + "03020202.json";
    huc8_3020203_geojson = this.huc8_layers_dir + "03020203.json";
    huc8_3020204_geojson = this.huc8_layers_dir + "03020204.json";
    huc8_3020301_geojson = this.huc8_layers_dir + "03020301.json";
    huc8_3020302_geojson = this.huc8_layers_dir + "03020302.json";
    huc8_3030002_geojson = this.huc8_layers_dir + "03030002.json";
    huc8_3030003_geojson = this.huc8_layers_dir + "03030003.json";
    huc8_3030004_geojson = this.huc8_layers_dir + "03030004.json";
    huc8_3030005_geojson = this.huc8_layers_dir + "03030005.json";
    huc8_3030006_geojson = this.huc8_layers_dir + "03030006.json";
    huc8_3030007_geojson = this.huc8_layers_dir + "03030007.json";
    huc8_3040101_geojson = this.huc8_layers_dir + "03040101.json";
    huc8_3040102_geojson = this.huc8_layers_dir + "03040102.json";
    huc8_3040103_geojson = this.huc8_layers_dir + "03040103.json";
    huc8_3040104_geojson = this.huc8_layers_dir + "03040104.json";
    huc8_3040105_geojson = this.huc8_layers_dir + "03040105.json";
    huc8_3040201_geojson = this.huc8_layers_dir + "03040201.json";
    huc8_3040202_geojson = this.huc8_layers_dir + "03040202.json";
    huc8_3040203_geojson = this.huc8_layers_dir + "03040203.json";
    huc8_3040204_geojson = this.huc8_layers_dir + "03040204.json";
    huc8_3040205_geojson = this.huc8_layers_dir + "03040205.json";
    huc8_3040206_geojson = this.huc8_layers_dir + "03040206.json";
    huc8_3040207_geojson = this.huc8_layers_dir + "03040207.json";
    huc8_3040208_geojson = this.huc8_layers_dir + "03040208.json";
    huc8_3050101_geojson = this.huc8_layers_dir + "03050101.json";
    huc8_3050102_geojson = this.huc8_layers_dir + "03050102.json";
    huc8_3050103_geojson = this.huc8_layers_dir + "03050103.json";
    huc8_3050104_geojson = this.huc8_layers_dir + "03050104.json";
    huc8_3050105_geojson = this.huc8_layers_dir + "03050105.json";
    huc8_3050106_geojson = this.huc8_layers_dir + "03050106.json";
    huc8_3050107_geojson = this.huc8_layers_dir + "03050107.json";
    huc8_3050108_geojson = this.huc8_layers_dir + "03050108.json";
    huc8_3050109_geojson = this.huc8_layers_dir + "03050109.json";
    huc8_3050110_geojson = this.huc8_layers_dir + "03050110.json";
    huc8_3050111_geojson = this.huc8_layers_dir + "03050111.json";
    huc8_3050112_geojson = this.huc8_layers_dir + "03050112.json";
    huc8_3050201_geojson = this.huc8_layers_dir + "03050201.json";
    huc8_3050202_geojson = this.huc8_layers_dir + "03050202.json";
    huc8_3050203_geojson = this.huc8_layers_dir + "03050203.json";
    huc8_3050204_geojson = this.huc8_layers_dir + "03050204.json";
    huc8_3050205_geojson = this.huc8_layers_dir + "03050205.json";
    huc8_3050206_geojson = this.huc8_layers_dir + "03050206.json";
    huc8_3050207_geojson = this.huc8_layers_dir + "03050207.json";
    huc8_3050208_geojson = this.huc8_layers_dir + "03050208.json";
    huc8_3050209_geojson = this.huc8_layers_dir + "03050209.json";
    huc8_3050210_geojson = this.huc8_layers_dir + "03050210.json";
    huc8_3060101_geojson = this.huc8_layers_dir + "03060101.json";
    huc8_3060102_geojson = this.huc8_layers_dir + "03060102.json";
    huc8_3060103_geojson = this.huc8_layers_dir + "03060103.json";
    huc8_3060104_geojson = this.huc8_layers_dir + "03060104.json";
    huc8_3060105_geojson = this.huc8_layers_dir + "03060105.json";
    huc8_3060106_geojson = this.huc8_layers_dir + "03060106.json";
    huc8_3060107_geojson = this.huc8_layers_dir + "03060107.json";
    huc8_3060108_geojson = this.huc8_layers_dir + "03060108.json";
    huc8_3060109_geojson = this.huc8_layers_dir + "03060109.json";
    huc8_3060110_geojson = this.huc8_layers_dir + "03060110.json";
    huc8_3060201_geojson = this.huc8_layers_dir + "03060201.json";
    huc8_3060202_geojson = this.huc8_layers_dir + "03060202.json";
    huc8_3060203_geojson = this.huc8_layers_dir + "03060203.json";
    huc8_3060204_geojson = this.huc8_layers_dir + "03060204.json";
    huc8_3070101_geojson = this.huc8_layers_dir + "03070101.json";
    huc8_3070102_geojson = this.huc8_layers_dir + "03070102.json";
    huc8_3070103_geojson = this.huc8_layers_dir + "03070103.json";
    huc8_3070104_geojson = this.huc8_layers_dir + "03070104.json";
    huc8_3070105_geojson = this.huc8_layers_dir + "03070105.json";
    huc8_3070106_geojson = this.huc8_layers_dir + "03070106.json";
    huc8_3070107_geojson = this.huc8_layers_dir + "03070107.json";
    huc8_3070201_geojson = this.huc8_layers_dir + "03070201.json";
    huc8_3070202_geojson = this.huc8_layers_dir + "03070202.json";
    huc8_3070203_geojson = this.huc8_layers_dir + "03070203.json";
    huc8_3070204_geojson = this.huc8_layers_dir + "03070204.json";
    huc8_3070205_geojson = this.huc8_layers_dir + "03070205.json";
    huc8_3080101_geojson = this.huc8_layers_dir + "03080101.json";
    huc8_3080102_geojson = this.huc8_layers_dir + "03080102.json";
    huc8_3080103_geojson = this.huc8_layers_dir + "03080103.json";
    huc8_3080201_geojson = this.huc8_layers_dir + "03080201.json";
    huc8_3080202_geojson = this.huc8_layers_dir + "03080202.json";
    huc8_3080203_geojson = this.huc8_layers_dir + "03080203.json";
    huc8_3090101_geojson = this.huc8_layers_dir + "03090101.json";
    huc8_3090102_geojson = this.huc8_layers_dir + "03090102.json";
    huc8_3090103_geojson = this.huc8_layers_dir + "03090103.json";
    huc8_3090201_geojson = this.huc8_layers_dir + "03090201.json";
    huc8_3090202_geojson = this.huc8_layers_dir + "03090202.json";
    huc8_3090203_geojson = this.huc8_layers_dir + "03090203.json";
    huc8_3090204_geojson = this.huc8_layers_dir + "03090204.json";
    huc8_3090205_geojson = this.huc8_layers_dir + "03090205.json";
    huc8_3090206_geojson = this.huc8_layers_dir + "03090206.json";
    huc8_3100101_geojson = this.huc8_layers_dir + "03100101.json";
    huc8_3100102_geojson = this.huc8_layers_dir + "03100102.json";
    huc8_3100103_geojson = this.huc8_layers_dir + "03100103.json";
    huc8_3100201_geojson = this.huc8_layers_dir + "03100201.json";
    huc8_3100202_geojson = this.huc8_layers_dir + "03100202.json";
    huc8_3100203_geojson = this.huc8_layers_dir + "03100203.json";
    huc8_3100204_geojson = this.huc8_layers_dir + "03100204.json";
    huc8_3100205_geojson = this.huc8_layers_dir + "03100205.json";
    huc8_3100206_geojson = this.huc8_layers_dir + "03100206.json";
    huc8_3100207_geojson = this.huc8_layers_dir + "03100207.json";
    huc8_3100208_geojson = this.huc8_layers_dir + "03100208.json";
    huc8_3110101_geojson = this.huc8_layers_dir + "03110101.json";
    huc8_3110102_geojson = this.huc8_layers_dir + "03110102.json";
    huc8_3110103_geojson = this.huc8_layers_dir + "03110103.json";
    huc8_3110201_geojson = this.huc8_layers_dir + "03110201.json";
    huc8_3110202_geojson = this.huc8_layers_dir + "03110202.json";
    huc8_3110203_geojson = this.huc8_layers_dir + "03110203.json";
    huc8_3110204_geojson = this.huc8_layers_dir + "03110204.json";
    huc8_3110205_geojson = this.huc8_layers_dir + "03110205.json";
    huc8_3110206_geojson = this.huc8_layers_dir + "03110206.json";
    huc8_3120001_geojson = this.huc8_layers_dir + "03120001.json";
    huc8_3120002_geojson = this.huc8_layers_dir + "03120002.json";
    huc8_3120003_geojson = this.huc8_layers_dir + "03120003.json";
    huc8_3130001_geojson = this.huc8_layers_dir + "03130001.json";
    huc8_3130002_geojson = this.huc8_layers_dir + "03130002.json";
    huc8_3130003_geojson = this.huc8_layers_dir + "03130003.json";
    huc8_3130004_geojson = this.huc8_layers_dir + "03130004.json";
    huc8_3130005_geojson = this.huc8_layers_dir + "03130005.json";
    huc8_3130006_geojson = this.huc8_layers_dir + "03130006.json";
    huc8_3130007_geojson = this.huc8_layers_dir + "03130007.json";
    huc8_3130008_geojson = this.huc8_layers_dir + "03130008.json";
    huc8_3130009_geojson = this.huc8_layers_dir + "03130009.json";
    huc8_3130010_geojson = this.huc8_layers_dir + "03130010.json";
    huc8_3130011_geojson = this.huc8_layers_dir + "03130011.json";
    huc8_3130012_geojson = this.huc8_layers_dir + "03130012.json";
    huc8_3130013_geojson = this.huc8_layers_dir + "03130013.json";
    huc8_3130014_geojson = this.huc8_layers_dir + "03130014.json";
    huc8_3140101_geojson = this.huc8_layers_dir + "03140101.json";
    huc8_3140102_geojson = this.huc8_layers_dir + "03140102.json";
    huc8_3140103_geojson = this.huc8_layers_dir + "03140103.json";
    huc8_3140104_geojson = this.huc8_layers_dir + "03140104.json";
    huc8_3140105_geojson = this.huc8_layers_dir + "03140105.json";
    huc8_3140106_geojson = this.huc8_layers_dir + "03140106.json";
    huc8_3140107_geojson = this.huc8_layers_dir + "03140107.json";
    huc8_3140201_geojson = this.huc8_layers_dir + "03140201.json";
    huc8_3140202_geojson = this.huc8_layers_dir + "03140202.json";
    huc8_3140203_geojson = this.huc8_layers_dir + "03140203.json";
    huc8_3140301_geojson = this.huc8_layers_dir + "03140301.json";
    huc8_3140302_geojson = this.huc8_layers_dir + "03140302.json";
    huc8_3140303_geojson = this.huc8_layers_dir + "03140303.json";
    huc8_3140304_geojson = this.huc8_layers_dir + "03140304.json";
    huc8_3140305_geojson = this.huc8_layers_dir + "03140305.json";
    huc8_3150101_geojson = this.huc8_layers_dir + "03150101.json";
    huc8_3150102_geojson = this.huc8_layers_dir + "03150102.json";
    huc8_3150103_geojson = this.huc8_layers_dir + "03150103.json";
    huc8_3150104_geojson = this.huc8_layers_dir + "03150104.json";
    huc8_3150105_geojson = this.huc8_layers_dir + "03150105.json";
    huc8_3150106_geojson = this.huc8_layers_dir + "03150106.json";
    huc8_3150107_geojson = this.huc8_layers_dir + "03150107.json";
    huc8_3150108_geojson = this.huc8_layers_dir + "03150108.json";
    huc8_3150109_geojson = this.huc8_layers_dir + "03150109.json";
    huc8_3150110_geojson = this.huc8_layers_dir + "03150110.json";
    huc8_3150201_geojson = this.huc8_layers_dir + "03150201.json";
    huc8_3150202_geojson = this.huc8_layers_dir + "03150202.json";
    huc8_3150203_geojson = this.huc8_layers_dir + "03150203.json";
    huc8_3150204_geojson = this.huc8_layers_dir + "03150204.json";
    huc8_3160101_geojson = this.huc8_layers_dir + "03160101.json";
    huc8_3160102_geojson = this.huc8_layers_dir + "03160102.json";
    huc8_3160103_geojson = this.huc8_layers_dir + "03160103.json";
    huc8_3160104_geojson = this.huc8_layers_dir + "03160104.json";
    huc8_3160105_geojson = this.huc8_layers_dir + "03160105.json";
    huc8_3160106_geojson = this.huc8_layers_dir + "03160106.json";
    huc8_3160107_geojson = this.huc8_layers_dir + "03160107.json";
    huc8_3160108_geojson = this.huc8_layers_dir + "03160108.json";
    huc8_3160109_geojson = this.huc8_layers_dir + "03160109.json";
    huc8_3160110_geojson = this.huc8_layers_dir + "03160110.json";
    huc8_3160111_geojson = this.huc8_layers_dir + "03160111.json";
    huc8_3160112_geojson = this.huc8_layers_dir + "03160112.json";
    huc8_3160113_geojson = this.huc8_layers_dir + "03160113.json";
    huc8_3160201_geojson = this.huc8_layers_dir + "03160201.json";
    huc8_3160202_geojson = this.huc8_layers_dir + "03160202.json";
    huc8_3160203_geojson = this.huc8_layers_dir + "03160203.json";
    huc8_3160204_geojson = this.huc8_layers_dir + "03160204.json";
    huc8_3160205_geojson = this.huc8_layers_dir + "03160205.json";
    huc8_3170001_geojson = this.huc8_layers_dir + "03170001.json";
    huc8_3170002_geojson = this.huc8_layers_dir + "03170002.json";
    huc8_3170003_geojson = this.huc8_layers_dir + "03170003.json";
    huc8_3170004_geojson = this.huc8_layers_dir + "03170004.json";
    huc8_3170005_geojson = this.huc8_layers_dir + "03170005.json";
    huc8_3170006_geojson = this.huc8_layers_dir + "03170006.json";
    huc8_3170007_geojson = this.huc8_layers_dir + "03170007.json";
    huc8_3170008_geojson = this.huc8_layers_dir + "03170008.json";
    huc8_3170009_geojson = this.huc8_layers_dir + "03170009.json";
    huc8_3180001_geojson = this.huc8_layers_dir + "03180001.json";
    huc8_3180002_geojson = this.huc8_layers_dir + "03180002.json";
    huc8_3180003_geojson = this.huc8_layers_dir + "03180003.json";
    huc8_3180004_geojson = this.huc8_layers_dir + "03180004.json";
    huc8_3180005_geojson = this.huc8_layers_dir + "03180005.json";
    huc8_4010101_geojson = this.huc8_layers_dir + "04010101.json";
    huc8_4010102_geojson = this.huc8_layers_dir + "04010102.json";
    huc8_4010201_geojson = this.huc8_layers_dir + "04010201.json";
    huc8_4010202_geojson = this.huc8_layers_dir + "04010202.json";
    huc8_4010301_geojson = this.huc8_layers_dir + "04010301.json";
    huc8_4010302_geojson = this.huc8_layers_dir + "04010302.json";
    huc8_4020101_geojson = this.huc8_layers_dir + "04020101.json";
    huc8_4020102_geojson = this.huc8_layers_dir + "04020102.json";
    huc8_4020103_geojson = this.huc8_layers_dir + "04020103.json";
    huc8_4020104_geojson = this.huc8_layers_dir + "04020104.json";
    huc8_4020105_geojson = this.huc8_layers_dir + "04020105.json";
    huc8_4020201_geojson = this.huc8_layers_dir + "04020201.json";
    huc8_4020202_geojson = this.huc8_layers_dir + "04020202.json";
    huc8_4020203_geojson = this.huc8_layers_dir + "04020203.json";
    huc8_4020300_geojson = this.huc8_layers_dir + "04020300.json";
    huc8_4030101_geojson = this.huc8_layers_dir + "04030101.json";
    huc8_4030102_geojson = this.huc8_layers_dir + "04030102.json";
    huc8_4030103_geojson = this.huc8_layers_dir + "04030103.json";
    huc8_4030104_geojson = this.huc8_layers_dir + "04030104.json";
    huc8_4030105_geojson = this.huc8_layers_dir + "04030105.json";
    huc8_4030106_geojson = this.huc8_layers_dir + "04030106.json";
    huc8_4030107_geojson = this.huc8_layers_dir + "04030107.json";
    huc8_4030108_geojson = this.huc8_layers_dir + "04030108.json";
    huc8_4030109_geojson = this.huc8_layers_dir + "04030109.json";
    huc8_4030110_geojson = this.huc8_layers_dir + "04030110.json";
    huc8_4030111_geojson = this.huc8_layers_dir + "04030111.json";
    huc8_4030112_geojson = this.huc8_layers_dir + "04030112.json";
    huc8_4030201_geojson = this.huc8_layers_dir + "04030201.json";
    huc8_4030202_geojson = this.huc8_layers_dir + "04030202.json";
    huc8_4030203_geojson = this.huc8_layers_dir + "04030203.json";
    huc8_4030204_geojson = this.huc8_layers_dir + "04030204.json";
    huc8_4040001_geojson = this.huc8_layers_dir + "04040001.json";
    huc8_4040002_geojson = this.huc8_layers_dir + "04040002.json";
    huc8_4040003_geojson = this.huc8_layers_dir + "04040003.json";
    huc8_4050001_geojson = this.huc8_layers_dir + "04050001.json";
    huc8_4050002_geojson = this.huc8_layers_dir + "04050002.json";
    huc8_4050003_geojson = this.huc8_layers_dir + "04050003.json";
    huc8_4050004_geojson = this.huc8_layers_dir + "04050004.json";
    huc8_4050005_geojson = this.huc8_layers_dir + "04050005.json";
    huc8_4050006_geojson = this.huc8_layers_dir + "04050006.json";
    huc8_4050007_geojson = this.huc8_layers_dir + "04050007.json";
    huc8_4060101_geojson = this.huc8_layers_dir + "04060101.json";
    huc8_4060102_geojson = this.huc8_layers_dir + "04060102.json";
    huc8_4060103_geojson = this.huc8_layers_dir + "04060103.json";
    huc8_4060104_geojson = this.huc8_layers_dir + "04060104.json";
    huc8_4060105_geojson = this.huc8_layers_dir + "04060105.json";
    huc8_4060106_geojson = this.huc8_layers_dir + "04060106.json";
    huc8_4060107_geojson = this.huc8_layers_dir + "04060107.json";
    huc8_4060200_geojson = this.huc8_layers_dir + "04060200.json";
    huc8_4070001_geojson = this.huc8_layers_dir + "04070001.json";
    huc8_4070002_geojson = this.huc8_layers_dir + "04070002.json";
    huc8_4070003_geojson = this.huc8_layers_dir + "04070003.json";
    huc8_4070004_geojson = this.huc8_layers_dir + "04070004.json";
    huc8_4070005_geojson = this.huc8_layers_dir + "04070005.json";
    huc8_4070006_geojson = this.huc8_layers_dir + "04070006.json";
    huc8_4070007_geojson = this.huc8_layers_dir + "04070007.json";
    huc8_4080101_geojson = this.huc8_layers_dir + "04080101.json";
    huc8_4080102_geojson = this.huc8_layers_dir + "04080102.json";
    huc8_4080103_geojson = this.huc8_layers_dir + "04080103.json";
    huc8_4080104_geojson = this.huc8_layers_dir + "04080104.json";
    huc8_4080201_geojson = this.huc8_layers_dir + "04080201.json";
    huc8_4080202_geojson = this.huc8_layers_dir + "04080202.json";
    huc8_4080203_geojson = this.huc8_layers_dir + "04080203.json";
    huc8_4080204_geojson = this.huc8_layers_dir + "04080204.json";
    huc8_4080205_geojson = this.huc8_layers_dir + "04080205.json";
    huc8_4080206_geojson = this.huc8_layers_dir + "04080206.json";
    huc8_4080300_geojson = this.huc8_layers_dir + "04080300.json";
    huc8_4090001_geojson = this.huc8_layers_dir + "04090001.json";
    huc8_4090002_geojson = this.huc8_layers_dir + "04090002.json";
    huc8_4090003_geojson = this.huc8_layers_dir + "04090003.json";
    huc8_4090004_geojson = this.huc8_layers_dir + "04090004.json";
    huc8_4090005_geojson = this.huc8_layers_dir + "04090005.json";
    huc8_4100001_geojson = this.huc8_layers_dir + "04100001.json";
    huc8_4100002_geojson = this.huc8_layers_dir + "04100002.json";
    huc8_4100003_geojson = this.huc8_layers_dir + "04100003.json";
    huc8_4100004_geojson = this.huc8_layers_dir + "04100004.json";
    huc8_4100005_geojson = this.huc8_layers_dir + "04100005.json";
    huc8_4100006_geojson = this.huc8_layers_dir + "04100006.json";
    huc8_4100007_geojson = this.huc8_layers_dir + "04100007.json";
    huc8_4100008_geojson = this.huc8_layers_dir + "04100008.json";
    huc8_4100009_geojson = this.huc8_layers_dir + "04100009.json";
    huc8_4100010_geojson = this.huc8_layers_dir + "04100010.json";
    huc8_4100011_geojson = this.huc8_layers_dir + "04100011.json";
    huc8_4100012_geojson = this.huc8_layers_dir + "04100012.json";
    huc8_4110001_geojson = this.huc8_layers_dir + "04110001.json";
    huc8_4110002_geojson = this.huc8_layers_dir + "04110002.json";
    huc8_4110003_geojson = this.huc8_layers_dir + "04110003.json";
    huc8_4110004_geojson = this.huc8_layers_dir + "04110004.json";
    huc8_4120101_geojson = this.huc8_layers_dir + "04120101.json";
    huc8_4120102_geojson = this.huc8_layers_dir + "04120102.json";
    huc8_4120103_geojson = this.huc8_layers_dir + "04120103.json";
    huc8_4120104_geojson = this.huc8_layers_dir + "04120104.json";
    huc8_4120200_geojson = this.huc8_layers_dir + "04120200.json";
    huc8_4130001_geojson = this.huc8_layers_dir + "04130001.json";
    huc8_4130002_geojson = this.huc8_layers_dir + "04130002.json";
    huc8_4130003_geojson = this.huc8_layers_dir + "04130003.json";
    huc8_4140101_geojson = this.huc8_layers_dir + "04140101.json";
    huc8_4140102_geojson = this.huc8_layers_dir + "04140102.json";
    huc8_4140201_geojson = this.huc8_layers_dir + "04140201.json";
    huc8_4140202_geojson = this.huc8_layers_dir + "04140202.json";
    huc8_4140203_geojson = this.huc8_layers_dir + "04140203.json";
    huc8_4150101_geojson = this.huc8_layers_dir + "04150101.json";
    huc8_4150102_geojson = this.huc8_layers_dir + "04150102.json";
    huc8_4150200_geojson = this.huc8_layers_dir + "04150200.json";
    huc8_4150302_geojson = this.huc8_layers_dir + "04150302.json";
    huc8_4150303_geojson = this.huc8_layers_dir + "04150303.json";
    huc8_4150304_geojson = this.huc8_layers_dir + "04150304.json";
    huc8_4150305_geojson = this.huc8_layers_dir + "04150305.json";
    huc8_4150306_geojson = this.huc8_layers_dir + "04150306.json";
    huc8_4150307_geojson = this.huc8_layers_dir + "04150307.json";
    huc8_4150308_geojson = this.huc8_layers_dir + "04150308.json";
    huc8_4150309_geojson = this.huc8_layers_dir + "04150309.json";
    huc8_4150310_geojson = this.huc8_layers_dir + "04150310.json";
    huc8_4150401_geojson = this.huc8_layers_dir + "04150401.json";
    huc8_4150402_geojson = this.huc8_layers_dir + "04150402.json";
    huc8_4150403_geojson = this.huc8_layers_dir + "04150403.json";
    huc8_4150404_geojson = this.huc8_layers_dir + "04150404.json";
    huc8_4150405_geojson = this.huc8_layers_dir + "04150405.json";
    huc8_4150406_geojson = this.huc8_layers_dir + "04150406.json";
    huc8_4150407_geojson = this.huc8_layers_dir + "04150407.json";
    huc8_4150408_geojson = this.huc8_layers_dir + "04150408.json";
    huc8_4150409_geojson = this.huc8_layers_dir + "04150409.json";
    huc8_4150500_geojson = this.huc8_layers_dir + "04150500.json";
    huc8_4150600_geojson = this.huc8_layers_dir + "04150600.json";
    huc8_5010001_geojson = this.huc8_layers_dir + "05010001.json";
    huc8_5010002_geojson = this.huc8_layers_dir + "05010002.json";
    huc8_5010003_geojson = this.huc8_layers_dir + "05010003.json";
    huc8_5010004_geojson = this.huc8_layers_dir + "05010004.json";
    huc8_5010005_geojson = this.huc8_layers_dir + "05010005.json";
    huc8_5010006_geojson = this.huc8_layers_dir + "05010006.json";
    huc8_5010007_geojson = this.huc8_layers_dir + "05010007.json";
    huc8_5010008_geojson = this.huc8_layers_dir + "05010008.json";
    huc8_5010009_geojson = this.huc8_layers_dir + "05010009.json";
    huc8_5020001_geojson = this.huc8_layers_dir + "05020001.json";
    huc8_5020002_geojson = this.huc8_layers_dir + "05020002.json";
    huc8_5020003_geojson = this.huc8_layers_dir + "05020003.json";
    huc8_5020004_geojson = this.huc8_layers_dir + "05020004.json";
    huc8_5020005_geojson = this.huc8_layers_dir + "05020005.json";
    huc8_5020006_geojson = this.huc8_layers_dir + "05020006.json";
    huc8_5030101_geojson = this.huc8_layers_dir + "05030101.json";
    huc8_5030102_geojson = this.huc8_layers_dir + "05030102.json";
    huc8_5030103_geojson = this.huc8_layers_dir + "05030103.json";
    huc8_5030104_geojson = this.huc8_layers_dir + "05030104.json";
    huc8_5030105_geojson = this.huc8_layers_dir + "05030105.json";
    huc8_5030106_geojson = this.huc8_layers_dir + "05030106.json";
    huc8_5030201_geojson = this.huc8_layers_dir + "05030201.json";
    huc8_5030202_geojson = this.huc8_layers_dir + "05030202.json";
    huc8_5030203_geojson = this.huc8_layers_dir + "05030203.json";
    huc8_5030204_geojson = this.huc8_layers_dir + "05030204.json";
    huc8_5040001_geojson = this.huc8_layers_dir + "05040001.json";
    huc8_5040002_geojson = this.huc8_layers_dir + "05040002.json";
    huc8_5040003_geojson = this.huc8_layers_dir + "05040003.json";
    huc8_5040004_geojson = this.huc8_layers_dir + "05040004.json";
    huc8_5040005_geojson = this.huc8_layers_dir + "05040005.json";
    huc8_5040006_geojson = this.huc8_layers_dir + "05040006.json";
    huc8_5050001_geojson = this.huc8_layers_dir + "05050001.json";
    huc8_5050002_geojson = this.huc8_layers_dir + "05050002.json";
    huc8_5050003_geojson = this.huc8_layers_dir + "05050003.json";
    huc8_5050004_geojson = this.huc8_layers_dir + "05050004.json";
    huc8_5050005_geojson = this.huc8_layers_dir + "05050005.json";
    huc8_5050006_geojson = this.huc8_layers_dir + "05050006.json";
    huc8_5050007_geojson = this.huc8_layers_dir + "05050007.json";
    huc8_5050008_geojson = this.huc8_layers_dir + "05050008.json";
    huc8_5050009_geojson = this.huc8_layers_dir + "05050009.json";
    huc8_5060001_geojson = this.huc8_layers_dir + "05060001.json";
    huc8_5060002_geojson = this.huc8_layers_dir + "05060002.json";
    huc8_5060003_geojson = this.huc8_layers_dir + "05060003.json";
    huc8_5070101_geojson = this.huc8_layers_dir + "05070101.json";
    huc8_5070102_geojson = this.huc8_layers_dir + "05070102.json";
    huc8_5070201_geojson = this.huc8_layers_dir + "05070201.json";
    huc8_5070202_geojson = this.huc8_layers_dir + "05070202.json";
    huc8_5070203_geojson = this.huc8_layers_dir + "05070203.json";
    huc8_5070204_geojson = this.huc8_layers_dir + "05070204.json";
    huc8_5080001_geojson = this.huc8_layers_dir + "05080001.json";
    huc8_5080002_geojson = this.huc8_layers_dir + "05080002.json";
    huc8_5080003_geojson = this.huc8_layers_dir + "05080003.json";
    huc8_5090101_geojson = this.huc8_layers_dir + "05090101.json";
    huc8_5090102_geojson = this.huc8_layers_dir + "05090102.json";
    huc8_5090103_geojson = this.huc8_layers_dir + "05090103.json";
    huc8_5090104_geojson = this.huc8_layers_dir + "05090104.json";
    huc8_5090201_geojson = this.huc8_layers_dir + "05090201.json";
    huc8_5090202_geojson = this.huc8_layers_dir + "05090202.json";
    huc8_5090203_geojson = this.huc8_layers_dir + "05090203.json";
    huc8_5100101_geojson = this.huc8_layers_dir + "05100101.json";
    huc8_5100102_geojson = this.huc8_layers_dir + "05100102.json";
    huc8_5100201_geojson = this.huc8_layers_dir + "05100201.json";
    huc8_5100202_geojson = this.huc8_layers_dir + "05100202.json";
    huc8_5100203_geojson = this.huc8_layers_dir + "05100203.json";
    huc8_5100204_geojson = this.huc8_layers_dir + "05100204.json";
    huc8_5100205_geojson = this.huc8_layers_dir + "05100205.json";
    huc8_5110001_geojson = this.huc8_layers_dir + "05110001.json";
    huc8_5110002_geojson = this.huc8_layers_dir + "05110002.json";
    huc8_5110003_geojson = this.huc8_layers_dir + "05110003.json";
    huc8_5110004_geojson = this.huc8_layers_dir + "05110004.json";
    huc8_5110005_geojson = this.huc8_layers_dir + "05110005.json";
    huc8_5110006_geojson = this.huc8_layers_dir + "05110006.json";
    huc8_5120101_geojson = this.huc8_layers_dir + "05120101.json";
    huc8_5120102_geojson = this.huc8_layers_dir + "05120102.json";
    huc8_5120103_geojson = this.huc8_layers_dir + "05120103.json";
    huc8_5120104_geojson = this.huc8_layers_dir + "05120104.json";
    huc8_5120105_geojson = this.huc8_layers_dir + "05120105.json";
    huc8_5120106_geojson = this.huc8_layers_dir + "05120106.json";
    huc8_5120107_geojson = this.huc8_layers_dir + "05120107.json";
    huc8_5120108_geojson = this.huc8_layers_dir + "05120108.json";
    huc8_5120109_geojson = this.huc8_layers_dir + "05120109.json";
    huc8_5120110_geojson = this.huc8_layers_dir + "05120110.json";
    huc8_5120111_geojson = this.huc8_layers_dir + "05120111.json";
    huc8_5120112_geojson = this.huc8_layers_dir + "05120112.json";
    huc8_5120113_geojson = this.huc8_layers_dir + "05120113.json";
    huc8_5120114_geojson = this.huc8_layers_dir + "05120114.json";
    huc8_5120115_geojson = this.huc8_layers_dir + "05120115.json";
    huc8_5120201_geojson = this.huc8_layers_dir + "05120201.json";
    huc8_5120202_geojson = this.huc8_layers_dir + "05120202.json";
    huc8_5120203_geojson = this.huc8_layers_dir + "05120203.json";
    huc8_5120204_geojson = this.huc8_layers_dir + "05120204.json";
    huc8_5120205_geojson = this.huc8_layers_dir + "05120205.json";
    huc8_5120206_geojson = this.huc8_layers_dir + "05120206.json";
    huc8_5120207_geojson = this.huc8_layers_dir + "05120207.json";
    huc8_5120208_geojson = this.huc8_layers_dir + "05120208.json";
    huc8_5120209_geojson = this.huc8_layers_dir + "05120209.json";
    huc8_5130101_geojson = this.huc8_layers_dir + "05130101.json";
    huc8_5130102_geojson = this.huc8_layers_dir + "05130102.json";
    huc8_5130103_geojson = this.huc8_layers_dir + "05130103.json";
    huc8_5130104_geojson = this.huc8_layers_dir + "05130104.json";
    huc8_5130105_geojson = this.huc8_layers_dir + "05130105.json";
    huc8_5130106_geojson = this.huc8_layers_dir + "05130106.json";
    huc8_5130107_geojson = this.huc8_layers_dir + "05130107.json";
    huc8_5130108_geojson = this.huc8_layers_dir + "05130108.json";
    huc8_5130201_geojson = this.huc8_layers_dir + "05130201.json";
    huc8_5130202_geojson = this.huc8_layers_dir + "05130202.json";
    huc8_5130203_geojson = this.huc8_layers_dir + "05130203.json";
    huc8_5130204_geojson = this.huc8_layers_dir + "05130204.json";
    huc8_5130205_geojson = this.huc8_layers_dir + "05130205.json";
    huc8_5130206_geojson = this.huc8_layers_dir + "05130206.json";
    huc8_5140101_geojson = this.huc8_layers_dir + "05140101.json";
    huc8_5140102_geojson = this.huc8_layers_dir + "05140102.json";
    huc8_5140103_geojson = this.huc8_layers_dir + "05140103.json";
    huc8_5140104_geojson = this.huc8_layers_dir + "05140104.json";
    huc8_5140201_geojson = this.huc8_layers_dir + "05140201.json";
    huc8_5140202_geojson = this.huc8_layers_dir + "05140202.json";
    huc8_5140203_geojson = this.huc8_layers_dir + "05140203.json";
    huc8_5140204_geojson = this.huc8_layers_dir + "05140204.json";
    huc8_5140205_geojson = this.huc8_layers_dir + "05140205.json";
    huc8_5140206_geojson = this.huc8_layers_dir + "05140206.json";
    huc8_6010101_geojson = this.huc8_layers_dir + "06010101.json";
    huc8_6010102_geojson = this.huc8_layers_dir + "06010102.json";
    huc8_6010103_geojson = this.huc8_layers_dir + "06010103.json";
    huc8_6010104_geojson = this.huc8_layers_dir + "06010104.json";
    huc8_6010105_geojson = this.huc8_layers_dir + "06010105.json";
    huc8_6010106_geojson = this.huc8_layers_dir + "06010106.json";
    huc8_6010107_geojson = this.huc8_layers_dir + "06010107.json";
    huc8_6010108_geojson = this.huc8_layers_dir + "06010108.json";
    huc8_6010201_geojson = this.huc8_layers_dir + "06010201.json";
    huc8_6010202_geojson = this.huc8_layers_dir + "06010202.json";
    huc8_6010203_geojson = this.huc8_layers_dir + "06010203.json";
    huc8_6010204_geojson = this.huc8_layers_dir + "06010204.json";
    huc8_6010205_geojson = this.huc8_layers_dir + "06010205.json";
    huc8_6010206_geojson = this.huc8_layers_dir + "06010206.json";
    huc8_6010207_geojson = this.huc8_layers_dir + "06010207.json";
    huc8_6010208_geojson = this.huc8_layers_dir + "06010208.json";
    huc8_6020001_geojson = this.huc8_layers_dir + "06020001.json";
    huc8_6020002_geojson = this.huc8_layers_dir + "06020002.json";
    huc8_6020003_geojson = this.huc8_layers_dir + "06020003.json";
    huc8_6020004_geojson = this.huc8_layers_dir + "06020004.json";
    huc8_6030001_geojson = this.huc8_layers_dir + "06030001.json";
    huc8_6030002_geojson = this.huc8_layers_dir + "06030002.json";
    huc8_6030003_geojson = this.huc8_layers_dir + "06030003.json";
    huc8_6030004_geojson = this.huc8_layers_dir + "06030004.json";
    huc8_6030005_geojson = this.huc8_layers_dir + "06030005.json";
    huc8_6030006_geojson = this.huc8_layers_dir + "06030006.json";
    huc8_6040001_geojson = this.huc8_layers_dir + "06040001.json";
    huc8_6040002_geojson = this.huc8_layers_dir + "06040002.json";
    huc8_6040003_geojson = this.huc8_layers_dir + "06040003.json";
    huc8_6040004_geojson = this.huc8_layers_dir + "06040004.json";
    huc8_6040005_geojson = this.huc8_layers_dir + "06040005.json";
    huc8_6040006_geojson = this.huc8_layers_dir + "06040006.json";
    huc8_7010101_geojson = this.huc8_layers_dir + "07010101.json";
    huc8_7010102_geojson = this.huc8_layers_dir + "07010102.json";
    huc8_7010103_geojson = this.huc8_layers_dir + "07010103.json";
    huc8_7010104_geojson = this.huc8_layers_dir + "07010104.json";
    huc8_7010105_geojson = this.huc8_layers_dir + "07010105.json";
    huc8_7010106_geojson = this.huc8_layers_dir + "07010106.json";
    huc8_7010107_geojson = this.huc8_layers_dir + "07010107.json";
    huc8_7010108_geojson = this.huc8_layers_dir + "07010108.json";
    huc8_7010201_geojson = this.huc8_layers_dir + "07010201.json";
    huc8_7010202_geojson = this.huc8_layers_dir + "07010202.json";
    huc8_7010203_geojson = this.huc8_layers_dir + "07010203.json";
    huc8_7010204_geojson = this.huc8_layers_dir + "07010204.json";
    huc8_7010205_geojson = this.huc8_layers_dir + "07010205.json";
    huc8_7010206_geojson = this.huc8_layers_dir + "07010206.json";
    huc8_7010207_geojson = this.huc8_layers_dir + "07010207.json";
    huc8_7020001_geojson = this.huc8_layers_dir + "07020001.json";
    huc8_7020002_geojson = this.huc8_layers_dir + "07020002.json";
    huc8_7020003_geojson = this.huc8_layers_dir + "07020003.json";
    huc8_7020004_geojson = this.huc8_layers_dir + "07020004.json";
    huc8_7020005_geojson = this.huc8_layers_dir + "07020005.json";
    huc8_7020006_geojson = this.huc8_layers_dir + "07020006.json";
    huc8_7020007_geojson = this.huc8_layers_dir + "07020007.json";
    huc8_7020008_geojson = this.huc8_layers_dir + "07020008.json";
    huc8_7020009_geojson = this.huc8_layers_dir + "07020009.json";
    huc8_7020010_geojson = this.huc8_layers_dir + "07020010.json";
    huc8_7020011_geojson = this.huc8_layers_dir + "07020011.json";
    huc8_7020012_geojson = this.huc8_layers_dir + "07020012.json";
    huc8_7030001_geojson = this.huc8_layers_dir + "07030001.json";
    huc8_7030002_geojson = this.huc8_layers_dir + "07030002.json";
    huc8_7030003_geojson = this.huc8_layers_dir + "07030003.json";
    huc8_7030004_geojson = this.huc8_layers_dir + "07030004.json";
    huc8_7030005_geojson = this.huc8_layers_dir + "07030005.json";
    huc8_7040001_geojson = this.huc8_layers_dir + "07040001.json";
    huc8_7040002_geojson = this.huc8_layers_dir + "07040002.json";
    huc8_7040003_geojson = this.huc8_layers_dir + "07040003.json";
    huc8_7040004_geojson = this.huc8_layers_dir + "07040004.json";
    huc8_7040005_geojson = this.huc8_layers_dir + "07040005.json";
    huc8_7040006_geojson = this.huc8_layers_dir + "07040006.json";
    huc8_7040007_geojson = this.huc8_layers_dir + "07040007.json";
    huc8_7040008_geojson = this.huc8_layers_dir + "07040008.json";
    huc8_7050001_geojson = this.huc8_layers_dir + "07050001.json";
    huc8_7050002_geojson = this.huc8_layers_dir + "07050002.json";
    huc8_7050003_geojson = this.huc8_layers_dir + "07050003.json";
    huc8_7050004_geojson = this.huc8_layers_dir + "07050004.json";
    huc8_7050005_geojson = this.huc8_layers_dir + "07050005.json";
    huc8_7050006_geojson = this.huc8_layers_dir + "07050006.json";
    huc8_7050007_geojson = this.huc8_layers_dir + "07050007.json";
    huc8_7060001_geojson = this.huc8_layers_dir + "07060001.json";
    huc8_7060002_geojson = this.huc8_layers_dir + "07060002.json";
    huc8_7060003_geojson = this.huc8_layers_dir + "07060003.json";
    huc8_7060004_geojson = this.huc8_layers_dir + "07060004.json";
    huc8_7060005_geojson = this.huc8_layers_dir + "07060005.json";
    huc8_7060006_geojson = this.huc8_layers_dir + "07060006.json";
    huc8_7070001_geojson = this.huc8_layers_dir + "07070001.json";
    huc8_7070002_geojson = this.huc8_layers_dir + "07070002.json";
    huc8_7070003_geojson = this.huc8_layers_dir + "07070003.json";
    huc8_7070004_geojson = this.huc8_layers_dir + "07070004.json";
    huc8_7070005_geojson = this.huc8_layers_dir + "07070005.json";
    huc8_7070006_geojson = this.huc8_layers_dir + "07070006.json";
    huc8_7080101_geojson = this.huc8_layers_dir + "07080101.json";
    huc8_7080102_geojson = this.huc8_layers_dir + "07080102.json";
    huc8_7080103_geojson = this.huc8_layers_dir + "07080103.json";
    huc8_7080104_geojson = this.huc8_layers_dir + "07080104.json";
    huc8_7080105_geojson = this.huc8_layers_dir + "07080105.json";
    huc8_7080106_geojson = this.huc8_layers_dir + "07080106.json";
    huc8_7080107_geojson = this.huc8_layers_dir + "07080107.json";
    huc8_7080201_geojson = this.huc8_layers_dir + "07080201.json";
    huc8_7080202_geojson = this.huc8_layers_dir + "07080202.json";
    huc8_7080203_geojson = this.huc8_layers_dir + "07080203.json";
    huc8_7080204_geojson = this.huc8_layers_dir + "07080204.json";
    huc8_7080205_geojson = this.huc8_layers_dir + "07080205.json";
    huc8_7080206_geojson = this.huc8_layers_dir + "07080206.json";
    huc8_7080207_geojson = this.huc8_layers_dir + "07080207.json";
    huc8_7080208_geojson = this.huc8_layers_dir + "07080208.json";
    huc8_7080209_geojson = this.huc8_layers_dir + "07080209.json";
    huc8_7090001_geojson = this.huc8_layers_dir + "07090001.json";
    huc8_7090002_geojson = this.huc8_layers_dir + "07090002.json";
    huc8_7090003_geojson = this.huc8_layers_dir + "07090003.json";
    huc8_7090004_geojson = this.huc8_layers_dir + "07090004.json";
    huc8_7090005_geojson = this.huc8_layers_dir + "07090005.json";
    huc8_7090006_geojson = this.huc8_layers_dir + "07090006.json";
    huc8_7090007_geojson = this.huc8_layers_dir + "07090007.json";
    huc8_7100001_geojson = this.huc8_layers_dir + "07100001.json";
    huc8_7100002_geojson = this.huc8_layers_dir + "07100002.json";
    huc8_7100003_geojson = this.huc8_layers_dir + "07100003.json";
    huc8_7100004_geojson = this.huc8_layers_dir + "07100004.json";
    huc8_7100005_geojson = this.huc8_layers_dir + "07100005.json";
    huc8_7100006_geojson = this.huc8_layers_dir + "07100006.json";
    huc8_7100007_geojson = this.huc8_layers_dir + "07100007.json";
    huc8_7100008_geojson = this.huc8_layers_dir + "07100008.json";
    huc8_7100009_geojson = this.huc8_layers_dir + "07100009.json";
    huc8_7110001_geojson = this.huc8_layers_dir + "07110001.json";
    huc8_7110002_geojson = this.huc8_layers_dir + "07110002.json";
    huc8_7110003_geojson = this.huc8_layers_dir + "07110003.json";
    huc8_7110004_geojson = this.huc8_layers_dir + "07110004.json";
    huc8_7110005_geojson = this.huc8_layers_dir + "07110005.json";
    huc8_7110006_geojson = this.huc8_layers_dir + "07110006.json";
    huc8_7110007_geojson = this.huc8_layers_dir + "07110007.json";
    huc8_7110008_geojson = this.huc8_layers_dir + "07110008.json";
    huc8_7110009_geojson = this.huc8_layers_dir + "07110009.json";
    huc8_7120001_geojson = this.huc8_layers_dir + "07120001.json";
    huc8_7120002_geojson = this.huc8_layers_dir + "07120002.json";
    huc8_7120003_geojson = this.huc8_layers_dir + "07120003.json";
    huc8_7120004_geojson = this.huc8_layers_dir + "07120004.json";
    huc8_7120005_geojson = this.huc8_layers_dir + "07120005.json";
    huc8_7120006_geojson = this.huc8_layers_dir + "07120006.json";
    huc8_7120007_geojson = this.huc8_layers_dir + "07120007.json";
    huc8_7130001_geojson = this.huc8_layers_dir + "07130001.json";
    huc8_7130002_geojson = this.huc8_layers_dir + "07130002.json";
    huc8_7130003_geojson = this.huc8_layers_dir + "07130003.json";
    huc8_7130004_geojson = this.huc8_layers_dir + "07130004.json";
    huc8_7130005_geojson = this.huc8_layers_dir + "07130005.json";
    huc8_7130006_geojson = this.huc8_layers_dir + "07130006.json";
    huc8_7130007_geojson = this.huc8_layers_dir + "07130007.json";
    huc8_7130008_geojson = this.huc8_layers_dir + "07130008.json";
    huc8_7130009_geojson = this.huc8_layers_dir + "07130009.json";
    huc8_7130010_geojson = this.huc8_layers_dir + "07130010.json";
    huc8_7130011_geojson = this.huc8_layers_dir + "07130011.json";
    huc8_7130012_geojson = this.huc8_layers_dir + "07130012.json";
    huc8_7140101_geojson = this.huc8_layers_dir + "07140101.json";
    huc8_7140102_geojson = this.huc8_layers_dir + "07140102.json";
    huc8_7140103_geojson = this.huc8_layers_dir + "07140103.json";
    huc8_7140104_geojson = this.huc8_layers_dir + "07140104.json";
    huc8_7140105_geojson = this.huc8_layers_dir + "07140105.json";
    huc8_7140106_geojson = this.huc8_layers_dir + "07140106.json";
    huc8_7140107_geojson = this.huc8_layers_dir + "07140107.json";
    huc8_7140108_geojson = this.huc8_layers_dir + "07140108.json";
    huc8_7140201_geojson = this.huc8_layers_dir + "07140201.json";
    huc8_7140202_geojson = this.huc8_layers_dir + "07140202.json";
    huc8_7140203_geojson = this.huc8_layers_dir + "07140203.json";
    huc8_7140204_geojson = this.huc8_layers_dir + "07140204.json";
    huc8_8010100_geojson = this.huc8_layers_dir + "08010100.json";
    huc8_8010201_geojson = this.huc8_layers_dir + "08010201.json";
    huc8_8010202_geojson = this.huc8_layers_dir + "08010202.json";
    huc8_8010203_geojson = this.huc8_layers_dir + "08010203.json";
    huc8_8010204_geojson = this.huc8_layers_dir + "08010204.json";
    huc8_8010205_geojson = this.huc8_layers_dir + "08010205.json";
    huc8_8010206_geojson = this.huc8_layers_dir + "08010206.json";
    huc8_8010207_geojson = this.huc8_layers_dir + "08010207.json";
    huc8_8010208_geojson = this.huc8_layers_dir + "08010208.json";
    huc8_8010209_geojson = this.huc8_layers_dir + "08010209.json";
    huc8_8010210_geojson = this.huc8_layers_dir + "08010210.json";
    huc8_8010211_geojson = this.huc8_layers_dir + "08010211.json";
    huc8_8020100_geojson = this.huc8_layers_dir + "08020100.json";
    huc8_8020201_geojson = this.huc8_layers_dir + "08020201.json";
    huc8_8020202_geojson = this.huc8_layers_dir + "08020202.json";
    huc8_8020203_geojson = this.huc8_layers_dir + "08020203.json";
    huc8_8020204_geojson = this.huc8_layers_dir + "08020204.json";
    huc8_8020205_geojson = this.huc8_layers_dir + "08020205.json";
    huc8_8020301_geojson = this.huc8_layers_dir + "08020301.json";
    huc8_8020302_geojson = this.huc8_layers_dir + "08020302.json";
    huc8_8020303_geojson = this.huc8_layers_dir + "08020303.json";
    huc8_8020304_geojson = this.huc8_layers_dir + "08020304.json";
    huc8_8020401_geojson = this.huc8_layers_dir + "08020401.json";
    huc8_8020402_geojson = this.huc8_layers_dir + "08020402.json";
    huc8_8030100_geojson = this.huc8_layers_dir + "08030100.json";
    huc8_8030201_geojson = this.huc8_layers_dir + "08030201.json";
    huc8_8030202_geojson = this.huc8_layers_dir + "08030202.json";
    huc8_8030203_geojson = this.huc8_layers_dir + "08030203.json";
    huc8_8030204_geojson = this.huc8_layers_dir + "08030204.json";
    huc8_8030205_geojson = this.huc8_layers_dir + "08030205.json";
    huc8_8030206_geojson = this.huc8_layers_dir + "08030206.json";
    huc8_8030207_geojson = this.huc8_layers_dir + "08030207.json";
    huc8_8030208_geojson = this.huc8_layers_dir + "08030208.json";
    huc8_8030209_geojson = this.huc8_layers_dir + "08030209.json";
    huc8_8040101_geojson = this.huc8_layers_dir + "08040101.json";
    huc8_8040102_geojson = this.huc8_layers_dir + "08040102.json";
    huc8_8040103_geojson = this.huc8_layers_dir + "08040103.json";
    huc8_8040201_geojson = this.huc8_layers_dir + "08040201.json";
    huc8_8040202_geojson = this.huc8_layers_dir + "08040202.json";
    huc8_8040203_geojson = this.huc8_layers_dir + "08040203.json";
    huc8_8040204_geojson = this.huc8_layers_dir + "08040204.json";
    huc8_8040205_geojson = this.huc8_layers_dir + "08040205.json";
    huc8_8040206_geojson = this.huc8_layers_dir + "08040206.json";
    huc8_8040207_geojson = this.huc8_layers_dir + "08040207.json";
    huc8_8040301_geojson = this.huc8_layers_dir + "08040301.json";
    huc8_8040302_geojson = this.huc8_layers_dir + "08040302.json";
    huc8_8040303_geojson = this.huc8_layers_dir + "08040303.json";
    huc8_8040304_geojson = this.huc8_layers_dir + "08040304.json";
    huc8_8040305_geojson = this.huc8_layers_dir + "08040305.json";
    huc8_8040306_geojson = this.huc8_layers_dir + "08040306.json";
    huc8_8050001_geojson = this.huc8_layers_dir + "08050001.json";
    huc8_8050002_geojson = this.huc8_layers_dir + "08050002.json";
    huc8_8050003_geojson = this.huc8_layers_dir + "08050003.json";
    huc8_8060100_geojson = this.huc8_layers_dir + "08060100.json";
    huc8_8060201_geojson = this.huc8_layers_dir + "08060201.json";
    huc8_8060202_geojson = this.huc8_layers_dir + "08060202.json";
    huc8_8060203_geojson = this.huc8_layers_dir + "08060203.json";
    huc8_8060204_geojson = this.huc8_layers_dir + "08060204.json";
    huc8_8060205_geojson = this.huc8_layers_dir + "08060205.json";
    huc8_8060206_geojson = this.huc8_layers_dir + "08060206.json";
    huc8_8070100_geojson = this.huc8_layers_dir + "08070100.json";
    huc8_8070201_geojson = this.huc8_layers_dir + "08070201.json";
    huc8_8070202_geojson = this.huc8_layers_dir + "08070202.json";
    huc8_8070203_geojson = this.huc8_layers_dir + "08070203.json";
    huc8_8070204_geojson = this.huc8_layers_dir + "08070204.json";
    huc8_8070205_geojson = this.huc8_layers_dir + "08070205.json";
    huc8_8070300_geojson = this.huc8_layers_dir + "08070300.json";
    huc8_8080101_geojson = this.huc8_layers_dir + "08080101.json";
    huc8_8080102_geojson = this.huc8_layers_dir + "08080102.json";
    huc8_8080103_geojson = this.huc8_layers_dir + "08080103.json";
    huc8_8080201_geojson = this.huc8_layers_dir + "08080201.json";
    huc8_8080202_geojson = this.huc8_layers_dir + "08080202.json";
    huc8_8080203_geojson = this.huc8_layers_dir + "08080203.json";
    huc8_8080204_geojson = this.huc8_layers_dir + "08080204.json";
    huc8_8080205_geojson = this.huc8_layers_dir + "08080205.json";
    huc8_8080206_geojson = this.huc8_layers_dir + "08080206.json";
    huc8_8090100_geojson = this.huc8_layers_dir + "08090100.json";
    huc8_8090201_geojson = this.huc8_layers_dir + "08090201.json";
    huc8_8090202_geojson = this.huc8_layers_dir + "08090202.json";
    huc8_8090203_geojson = this.huc8_layers_dir + "08090203.json";
    huc8_8090301_geojson = this.huc8_layers_dir + "08090301.json";
    huc8_8090302_geojson = this.huc8_layers_dir + "08090302.json";
    huc8_9010002_geojson = this.huc8_layers_dir + "09010002.json";
    huc8_9010003_geojson = this.huc8_layers_dir + "09010003.json";
    huc8_9010004_geojson = this.huc8_layers_dir + "09010004.json";
    huc8_9010005_geojson = this.huc8_layers_dir + "09010005.json";
    huc8_9010006_geojson = this.huc8_layers_dir + "09010006.json";
    huc8_9010007_geojson = this.huc8_layers_dir + "09010007.json";
    huc8_9010008_geojson = this.huc8_layers_dir + "09010008.json";
    huc8_9010009_geojson = this.huc8_layers_dir + "09010009.json";
    huc8_9020101_geojson = this.huc8_layers_dir + "09020101.json";
    huc8_9020102_geojson = this.huc8_layers_dir + "09020102.json";
    huc8_9020103_geojson = this.huc8_layers_dir + "09020103.json";
    huc8_9020104_geojson = this.huc8_layers_dir + "09020104.json";
    huc8_9020105_geojson = this.huc8_layers_dir + "09020105.json";
    huc8_9020106_geojson = this.huc8_layers_dir + "09020106.json";
    huc8_9020107_geojson = this.huc8_layers_dir + "09020107.json";
    huc8_9020108_geojson = this.huc8_layers_dir + "09020108.json";
    huc8_9020109_geojson = this.huc8_layers_dir + "09020109.json";
    huc8_9020201_geojson = this.huc8_layers_dir + "09020201.json";
    huc8_9020202_geojson = this.huc8_layers_dir + "09020202.json";
    huc8_9020203_geojson = this.huc8_layers_dir + "09020203.json";
    huc8_9020204_geojson = this.huc8_layers_dir + "09020204.json";
    huc8_9020205_geojson = this.huc8_layers_dir + "09020205.json";
    huc8_9020301_geojson = this.huc8_layers_dir + "09020301.json";
    huc8_9020302_geojson = this.huc8_layers_dir + "09020302.json";
    huc8_9020303_geojson = this.huc8_layers_dir + "09020303.json";
    huc8_9020304_geojson = this.huc8_layers_dir + "09020304.json";
    huc8_9020305_geojson = this.huc8_layers_dir + "09020305.json";
    huc8_9020306_geojson = this.huc8_layers_dir + "09020306.json";
    huc8_9020307_geojson = this.huc8_layers_dir + "09020307.json";
    huc8_9020308_geojson = this.huc8_layers_dir + "09020308.json";
    huc8_9020309_geojson = this.huc8_layers_dir + "09020309.json";
    huc8_9020310_geojson = this.huc8_layers_dir + "09020310.json";
    huc8_9020311_geojson = this.huc8_layers_dir + "09020311.json";
    huc8_9020312_geojson = this.huc8_layers_dir + "09020312.json";
    huc8_9020314_geojson = this.huc8_layers_dir + "09020314.json";
    huc8_9020315_geojson = this.huc8_layers_dir + "09020315.json";
    huc8_9020316_geojson = this.huc8_layers_dir + "09020316.json";
    huc8_9020318_geojson = this.huc8_layers_dir + "09020318.json";
    huc8_9020319_geojson = this.huc8_layers_dir + "09020319.json";
    huc8_9030001_geojson = this.huc8_layers_dir + "09030001.json";
    huc8_9030002_geojson = this.huc8_layers_dir + "09030002.json";
    huc8_9030003_geojson = this.huc8_layers_dir + "09030003.json";
    huc8_9030005_geojson = this.huc8_layers_dir + "09030005.json";
    huc8_9030006_geojson = this.huc8_layers_dir + "09030006.json";
    huc8_9030007_geojson = this.huc8_layers_dir + "09030007.json";
    huc8_9030008_geojson = this.huc8_layers_dir + "09030008.json";
    huc8_9030009_geojson = this.huc8_layers_dir + "09030009.json";
    huc8_9030010_geojson = this.huc8_layers_dir + "09030010.json";
    huc8_9030011_geojson = this.huc8_layers_dir + "09030011.json";
    huc8_9040001_geojson = this.huc8_layers_dir + "09040001.json";
    huc8_9040002_geojson = this.huc8_layers_dir + "09040002.json";
    huc8_9040003_geojson = this.huc8_layers_dir + "09040003.json";
    huc8_9040004_geojson = this.huc8_layers_dir + "09040004.json";
    huc8_10020001_geojson = this.huc8_layers_dir + "10020001.json";
    huc8_10020002_geojson = this.huc8_layers_dir + "10020002.json";
    huc8_10020003_geojson = this.huc8_layers_dir + "10020003.json";
    huc8_10020004_geojson = this.huc8_layers_dir + "10020004.json";
    huc8_10020005_geojson = this.huc8_layers_dir + "10020005.json";
    huc8_10020006_geojson = this.huc8_layers_dir + "10020006.json";
    huc8_10020007_geojson = this.huc8_layers_dir + "10020007.json";
    huc8_10020008_geojson = this.huc8_layers_dir + "10020008.json";
    huc8_10030101_geojson = this.huc8_layers_dir + "10030101.json";
    huc8_10030102_geojson = this.huc8_layers_dir + "10030102.json";
    huc8_10030103_geojson = this.huc8_layers_dir + "10030103.json";
    huc8_10030104_geojson = this.huc8_layers_dir + "10030104.json";
    huc8_10030105_geojson = this.huc8_layers_dir + "10030105.json";
    huc8_10030201_geojson = this.huc8_layers_dir + "10030201.json";
    huc8_10030202_geojson = this.huc8_layers_dir + "10030202.json";
    huc8_10030203_geojson = this.huc8_layers_dir + "10030203.json";
    huc8_10030204_geojson = this.huc8_layers_dir + "10030204.json";
    huc8_10030205_geojson = this.huc8_layers_dir + "10030205.json";
    huc8_10040101_geojson = this.huc8_layers_dir + "10040101.json";
    huc8_10040102_geojson = this.huc8_layers_dir + "10040102.json";
    huc8_10040103_geojson = this.huc8_layers_dir + "10040103.json";
    huc8_10040104_geojson = this.huc8_layers_dir + "10040104.json";
    huc8_10040105_geojson = this.huc8_layers_dir + "10040105.json";
    huc8_10040106_geojson = this.huc8_layers_dir + "10040106.json";
    huc8_10040201_geojson = this.huc8_layers_dir + "10040201.json";
    huc8_10040202_geojson = this.huc8_layers_dir + "10040202.json";
    huc8_10040203_geojson = this.huc8_layers_dir + "10040203.json";
    huc8_10040204_geojson = this.huc8_layers_dir + "10040204.json";
    huc8_10040205_geojson = this.huc8_layers_dir + "10040205.json";
    huc8_10050001_geojson = this.huc8_layers_dir + "10050001.json";
    huc8_10050002_geojson = this.huc8_layers_dir + "10050002.json";
    huc8_10050003_geojson = this.huc8_layers_dir + "10050003.json";
    huc8_10050004_geojson = this.huc8_layers_dir + "10050004.json";
    huc8_10050005_geojson = this.huc8_layers_dir + "10050005.json";
    huc8_10050006_geojson = this.huc8_layers_dir + "10050006.json";
    huc8_10050007_geojson = this.huc8_layers_dir + "10050007.json";
    huc8_10050008_geojson = this.huc8_layers_dir + "10050008.json";
    huc8_10050009_geojson = this.huc8_layers_dir + "10050009.json";
    huc8_10050010_geojson = this.huc8_layers_dir + "10050010.json";
    huc8_10050011_geojson = this.huc8_layers_dir + "10050011.json";
    huc8_10050012_geojson = this.huc8_layers_dir + "10050012.json";
    huc8_10050013_geojson = this.huc8_layers_dir + "10050013.json";
    huc8_10050014_geojson = this.huc8_layers_dir + "10050014.json";
    huc8_10050015_geojson = this.huc8_layers_dir + "10050015.json";
    huc8_10050016_geojson = this.huc8_layers_dir + "10050016.json";
    huc8_10060001_geojson = this.huc8_layers_dir + "10060001.json";
    huc8_10060002_geojson = this.huc8_layers_dir + "10060002.json";
    huc8_10060003_geojson = this.huc8_layers_dir + "10060003.json";
    huc8_10060004_geojson = this.huc8_layers_dir + "10060004.json";
    huc8_10060005_geojson = this.huc8_layers_dir + "10060005.json";
    huc8_10060006_geojson = this.huc8_layers_dir + "10060006.json";
    huc8_10060007_geojson = this.huc8_layers_dir + "10060007.json";
    huc8_10070001_geojson = this.huc8_layers_dir + "10070001.json";
    huc8_10070002_geojson = this.huc8_layers_dir + "10070002.json";
    huc8_10070003_geojson = this.huc8_layers_dir + "10070003.json";
    huc8_10070004_geojson = this.huc8_layers_dir + "10070004.json";
    huc8_10070005_geojson = this.huc8_layers_dir + "10070005.json";
    huc8_10070006_geojson = this.huc8_layers_dir + "10070006.json";
    huc8_10070007_geojson = this.huc8_layers_dir + "10070007.json";
    huc8_10070008_geojson = this.huc8_layers_dir + "10070008.json";
    huc8_10080001_geojson = this.huc8_layers_dir + "10080001.json";
    huc8_10080002_geojson = this.huc8_layers_dir + "10080002.json";
    huc8_10080003_geojson = this.huc8_layers_dir + "10080003.json";
    huc8_10080004_geojson = this.huc8_layers_dir + "10080004.json";
    huc8_10080005_geojson = this.huc8_layers_dir + "10080005.json";
    huc8_10080006_geojson = this.huc8_layers_dir + "10080006.json";
    huc8_10080007_geojson = this.huc8_layers_dir + "10080007.json";
    huc8_10080008_geojson = this.huc8_layers_dir + "10080008.json";
    huc8_10080009_geojson = this.huc8_layers_dir + "10080009.json";
    huc8_10080010_geojson = this.huc8_layers_dir + "10080010.json";
    huc8_10080011_geojson = this.huc8_layers_dir + "10080011.json";
    huc8_10080012_geojson = this.huc8_layers_dir + "10080012.json";
    huc8_10080013_geojson = this.huc8_layers_dir + "10080013.json";
    huc8_10080014_geojson = this.huc8_layers_dir + "10080014.json";
    huc8_10080015_geojson = this.huc8_layers_dir + "10080015.json";
    huc8_10080016_geojson = this.huc8_layers_dir + "10080016.json";
    huc8_10090101_geojson = this.huc8_layers_dir + "10090101.json";
    huc8_10090102_geojson = this.huc8_layers_dir + "10090102.json";
    huc8_10090201_geojson = this.huc8_layers_dir + "10090201.json";
    huc8_10090202_geojson = this.huc8_layers_dir + "10090202.json";
    huc8_10090203_geojson = this.huc8_layers_dir + "10090203.json";
    huc8_10090204_geojson = this.huc8_layers_dir + "10090204.json";
    huc8_10090205_geojson = this.huc8_layers_dir + "10090205.json";
    huc8_10090206_geojson = this.huc8_layers_dir + "10090206.json";
    huc8_10090207_geojson = this.huc8_layers_dir + "10090207.json";
    huc8_10090208_geojson = this.huc8_layers_dir + "10090208.json";
    huc8_10090209_geojson = this.huc8_layers_dir + "10090209.json";
    huc8_10090210_geojson = this.huc8_layers_dir + "10090210.json";
    huc8_10100001_geojson = this.huc8_layers_dir + "10100001.json";
    huc8_10100002_geojson = this.huc8_layers_dir + "10100002.json";
    huc8_10100003_geojson = this.huc8_layers_dir + "10100003.json";
    huc8_10100004_geojson = this.huc8_layers_dir + "10100004.json";
    huc8_10100005_geojson = this.huc8_layers_dir + "10100005.json";
    huc8_10110101_geojson = this.huc8_layers_dir + "10110101.json";
    huc8_10110102_geojson = this.huc8_layers_dir + "10110102.json";
    huc8_10110201_geojson = this.huc8_layers_dir + "10110201.json";
    huc8_10110202_geojson = this.huc8_layers_dir + "10110202.json";
    huc8_10110203_geojson = this.huc8_layers_dir + "10110203.json";
    huc8_10110204_geojson = this.huc8_layers_dir + "10110204.json";
    huc8_10110205_geojson = this.huc8_layers_dir + "10110205.json";
    huc8_10120101_geojson = this.huc8_layers_dir + "10120101.json";
    huc8_10120102_geojson = this.huc8_layers_dir + "10120102.json";
    huc8_10120103_geojson = this.huc8_layers_dir + "10120103.json";
    huc8_10120104_geojson = this.huc8_layers_dir + "10120104.json";
    huc8_10120105_geojson = this.huc8_layers_dir + "10120105.json";
    huc8_10120106_geojson = this.huc8_layers_dir + "10120106.json";
    huc8_10120107_geojson = this.huc8_layers_dir + "10120107.json";
    huc8_10120108_geojson = this.huc8_layers_dir + "10120108.json";
    huc8_10120109_geojson = this.huc8_layers_dir + "10120109.json";
    huc8_10120110_geojson = this.huc8_layers_dir + "10120110.json";
    huc8_10120111_geojson = this.huc8_layers_dir + "10120111.json";
    huc8_10120112_geojson = this.huc8_layers_dir + "10120112.json";
    huc8_10120113_geojson = this.huc8_layers_dir + "10120113.json";
    huc8_10120201_geojson = this.huc8_layers_dir + "10120201.json";
    huc8_10120202_geojson = this.huc8_layers_dir + "10120202.json";
    huc8_10120203_geojson = this.huc8_layers_dir + "10120203.json";
    huc8_10130101_geojson = this.huc8_layers_dir + "10130101.json";
    huc8_10130102_geojson = this.huc8_layers_dir + "10130102.json";
    huc8_10130103_geojson = this.huc8_layers_dir + "10130103.json";
    huc8_10130104_geojson = this.huc8_layers_dir + "10130104.json";
    huc8_10130105_geojson = this.huc8_layers_dir + "10130105.json";
    huc8_10130106_geojson = this.huc8_layers_dir + "10130106.json";
    huc8_10130201_geojson = this.huc8_layers_dir + "10130201.json";
    huc8_10130202_geojson = this.huc8_layers_dir + "10130202.json";
    huc8_10130203_geojson = this.huc8_layers_dir + "10130203.json";
    huc8_10130204_geojson = this.huc8_layers_dir + "10130204.json";
    huc8_10130205_geojson = this.huc8_layers_dir + "10130205.json";
    huc8_10130206_geojson = this.huc8_layers_dir + "10130206.json";
    huc8_10130301_geojson = this.huc8_layers_dir + "10130301.json";
    huc8_10130302_geojson = this.huc8_layers_dir + "10130302.json";
    huc8_10130303_geojson = this.huc8_layers_dir + "10130303.json";
    huc8_10130304_geojson = this.huc8_layers_dir + "10130304.json";
    huc8_10130305_geojson = this.huc8_layers_dir + "10130305.json";
    huc8_10130306_geojson = this.huc8_layers_dir + "10130306.json";
    huc8_10140101_geojson = this.huc8_layers_dir + "10140101.json";
    huc8_10140102_geojson = this.huc8_layers_dir + "10140102.json";
    huc8_10140103_geojson = this.huc8_layers_dir + "10140103.json";
    huc8_10140104_geojson = this.huc8_layers_dir + "10140104.json";
    huc8_10140105_geojson = this.huc8_layers_dir + "10140105.json";
    huc8_10140201_geojson = this.huc8_layers_dir + "10140201.json";
    huc8_10140202_geojson = this.huc8_layers_dir + "10140202.json";
    huc8_10140203_geojson = this.huc8_layers_dir + "10140203.json";
    huc8_10140204_geojson = this.huc8_layers_dir + "10140204.json";
    huc8_10150001_geojson = this.huc8_layers_dir + "10150001.json";
    huc8_10150002_geojson = this.huc8_layers_dir + "10150002.json";
    huc8_10150003_geojson = this.huc8_layers_dir + "10150003.json";
    huc8_10150004_geojson = this.huc8_layers_dir + "10150004.json";
    huc8_10150005_geojson = this.huc8_layers_dir + "10150005.json";
    huc8_10150006_geojson = this.huc8_layers_dir + "10150006.json";
    huc8_10150007_geojson = this.huc8_layers_dir + "10150007.json";
    huc8_10160001_geojson = this.huc8_layers_dir + "10160001.json";
    huc8_10160002_geojson = this.huc8_layers_dir + "10160002.json";
    huc8_10160003_geojson = this.huc8_layers_dir + "10160003.json";
    huc8_10160004_geojson = this.huc8_layers_dir + "10160004.json";
    huc8_10160005_geojson = this.huc8_layers_dir + "10160005.json";
    huc8_10160006_geojson = this.huc8_layers_dir + "10160006.json";
    huc8_10160007_geojson = this.huc8_layers_dir + "10160007.json";
    huc8_10160008_geojson = this.huc8_layers_dir + "10160008.json";
    huc8_10160009_geojson = this.huc8_layers_dir + "10160009.json";
    huc8_10160011_geojson = this.huc8_layers_dir + "10160011.json";
    huc8_10170101_geojson = this.huc8_layers_dir + "10170101.json";
    huc8_10170102_geojson = this.huc8_layers_dir + "10170102.json";
    huc8_10170103_geojson = this.huc8_layers_dir + "10170103.json";
    huc8_10170201_geojson = this.huc8_layers_dir + "10170201.json";
    huc8_10170202_geojson = this.huc8_layers_dir + "10170202.json";
    huc8_10170203_geojson = this.huc8_layers_dir + "10170203.json";
    huc8_10170204_geojson = this.huc8_layers_dir + "10170204.json";
    huc8_10180001_geojson = this.huc8_layers_dir + "10180001.json";
    huc8_10180002_geojson = this.huc8_layers_dir + "10180002.json";
    huc8_10180003_geojson = this.huc8_layers_dir + "10180003.json";
    huc8_10180004_geojson = this.huc8_layers_dir + "10180004.json";
    huc8_10180005_geojson = this.huc8_layers_dir + "10180005.json";
    huc8_10180006_geojson = this.huc8_layers_dir + "10180006.json";
    huc8_10180007_geojson = this.huc8_layers_dir + "10180007.json";
    huc8_10180008_geojson = this.huc8_layers_dir + "10180008.json";
    huc8_10180009_geojson = this.huc8_layers_dir + "10180009.json";
    huc8_10180010_geojson = this.huc8_layers_dir + "10180010.json";
    huc8_10180011_geojson = this.huc8_layers_dir + "10180011.json";
    huc8_10180012_geojson = this.huc8_layers_dir + "10180012.json";
    huc8_10180013_geojson = this.huc8_layers_dir + "10180013.json";
    huc8_10180014_geojson = this.huc8_layers_dir + "10180014.json";
    huc8_10190001_geojson = this.huc8_layers_dir + "10190001.json";
    huc8_10190002_geojson = this.huc8_layers_dir + "10190002.json";
    huc8_10190003_geojson = this.huc8_layers_dir + "10190003.json";
    huc8_10190004_geojson = this.huc8_layers_dir + "10190004.json";
    huc8_10190005_geojson = this.huc8_layers_dir + "10190005.json";
    huc8_10190006_geojson = this.huc8_layers_dir + "10190006.json";
    huc8_10190007_geojson = this.huc8_layers_dir + "10190007.json";
    huc8_10190008_geojson = this.huc8_layers_dir + "10190008.json";
    huc8_10190009_geojson = this.huc8_layers_dir + "10190009.json";
    huc8_10190010_geojson = this.huc8_layers_dir + "10190010.json";
    huc8_10190011_geojson = this.huc8_layers_dir + "10190011.json";
    huc8_10190012_geojson = this.huc8_layers_dir + "10190012.json";
    huc8_10190013_geojson = this.huc8_layers_dir + "10190013.json";
    huc8_10190014_geojson = this.huc8_layers_dir + "10190014.json";
    huc8_10190015_geojson = this.huc8_layers_dir + "10190015.json";
    huc8_10190016_geojson = this.huc8_layers_dir + "10190016.json";
    huc8_10190017_geojson = this.huc8_layers_dir + "10190017.json";
    huc8_10190018_geojson = this.huc8_layers_dir + "10190018.json";
    huc8_10200101_geojson = this.huc8_layers_dir + "10200101.json";
    huc8_10200102_geojson = this.huc8_layers_dir + "10200102.json";
    huc8_10200103_geojson = this.huc8_layers_dir + "10200103.json";
    huc8_10200201_geojson = this.huc8_layers_dir + "10200201.json";
    huc8_10200202_geojson = this.huc8_layers_dir + "10200202.json";
    huc8_10200203_geojson = this.huc8_layers_dir + "10200203.json";
    huc8_10210001_geojson = this.huc8_layers_dir + "10210001.json";
    huc8_10210002_geojson = this.huc8_layers_dir + "10210002.json";
    huc8_10210003_geojson = this.huc8_layers_dir + "10210003.json";
    huc8_10210004_geojson = this.huc8_layers_dir + "10210004.json";
    huc8_10210005_geojson = this.huc8_layers_dir + "10210005.json";
    huc8_10210006_geojson = this.huc8_layers_dir + "10210006.json";
    huc8_10210007_geojson = this.huc8_layers_dir + "10210007.json";
    huc8_10210008_geojson = this.huc8_layers_dir + "10210008.json";
    huc8_10210009_geojson = this.huc8_layers_dir + "10210009.json";
    huc8_10210010_geojson = this.huc8_layers_dir + "10210010.json";
    huc8_10220001_geojson = this.huc8_layers_dir + "10220001.json";
    huc8_10220002_geojson = this.huc8_layers_dir + "10220002.json";
    huc8_10220003_geojson = this.huc8_layers_dir + "10220003.json";
    huc8_10220004_geojson = this.huc8_layers_dir + "10220004.json";
    huc8_10230001_geojson = this.huc8_layers_dir + "10230001.json";
    huc8_10230002_geojson = this.huc8_layers_dir + "10230002.json";
    huc8_10230003_geojson = this.huc8_layers_dir + "10230003.json";
    huc8_10230004_geojson = this.huc8_layers_dir + "10230004.json";
    huc8_10230005_geojson = this.huc8_layers_dir + "10230005.json";
    huc8_10230006_geojson = this.huc8_layers_dir + "10230006.json";
    huc8_10230007_geojson = this.huc8_layers_dir + "10230007.json";
    huc8_10240001_geojson = this.huc8_layers_dir + "10240001.json";
    huc8_10240002_geojson = this.huc8_layers_dir + "10240002.json";
    huc8_10240003_geojson = this.huc8_layers_dir + "10240003.json";
    huc8_10240004_geojson = this.huc8_layers_dir + "10240004.json";
    huc8_10240005_geojson = this.huc8_layers_dir + "10240005.json";
    huc8_10240006_geojson = this.huc8_layers_dir + "10240006.json";
    huc8_10240007_geojson = this.huc8_layers_dir + "10240007.json";
    huc8_10240008_geojson = this.huc8_layers_dir + "10240008.json";
    huc8_10240009_geojson = this.huc8_layers_dir + "10240009.json";
    huc8_10240010_geojson = this.huc8_layers_dir + "10240010.json";
    huc8_10240011_geojson = this.huc8_layers_dir + "10240011.json";
    huc8_10240012_geojson = this.huc8_layers_dir + "10240012.json";
    huc8_10240013_geojson = this.huc8_layers_dir + "10240013.json";
    huc8_10250001_geojson = this.huc8_layers_dir + "10250001.json";
    huc8_10250002_geojson = this.huc8_layers_dir + "10250002.json";
    huc8_10250003_geojson = this.huc8_layers_dir + "10250003.json";
    huc8_10250004_geojson = this.huc8_layers_dir + "10250004.json";
    huc8_10250005_geojson = this.huc8_layers_dir + "10250005.json";
    huc8_10250006_geojson = this.huc8_layers_dir + "10250006.json";
    huc8_10250007_geojson = this.huc8_layers_dir + "10250007.json";
    huc8_10250008_geojson = this.huc8_layers_dir + "10250008.json";
    huc8_10250009_geojson = this.huc8_layers_dir + "10250009.json";
    huc8_10250010_geojson = this.huc8_layers_dir + "10250010.json";
    huc8_10250011_geojson = this.huc8_layers_dir + "10250011.json";
    huc8_10250012_geojson = this.huc8_layers_dir + "10250012.json";
    huc8_10250013_geojson = this.huc8_layers_dir + "10250013.json";
    huc8_10250014_geojson = this.huc8_layers_dir + "10250014.json";
    huc8_10250015_geojson = this.huc8_layers_dir + "10250015.json";
    huc8_10250016_geojson = this.huc8_layers_dir + "10250016.json";
    huc8_10250017_geojson = this.huc8_layers_dir + "10250017.json";
    huc8_10260001_geojson = this.huc8_layers_dir + "10260001.json";
    huc8_10260002_geojson = this.huc8_layers_dir + "10260002.json";
    huc8_10260003_geojson = this.huc8_layers_dir + "10260003.json";
    huc8_10260004_geojson = this.huc8_layers_dir + "10260004.json";
    huc8_10260005_geojson = this.huc8_layers_dir + "10260005.json";
    huc8_10260006_geojson = this.huc8_layers_dir + "10260006.json";
    huc8_10260007_geojson = this.huc8_layers_dir + "10260007.json";
    huc8_10260008_geojson = this.huc8_layers_dir + "10260008.json";
    huc8_10260009_geojson = this.huc8_layers_dir + "10260009.json";
    huc8_10260010_geojson = this.huc8_layers_dir + "10260010.json";
    huc8_10260011_geojson = this.huc8_layers_dir + "10260011.json";
    huc8_10260012_geojson = this.huc8_layers_dir + "10260012.json";
    huc8_10260013_geojson = this.huc8_layers_dir + "10260013.json";
    huc8_10260014_geojson = this.huc8_layers_dir + "10260014.json";
    huc8_10260015_geojson = this.huc8_layers_dir + "10260015.json";
    huc8_10270101_geojson = this.huc8_layers_dir + "10270101.json";
    huc8_10270102_geojson = this.huc8_layers_dir + "10270102.json";
    huc8_10270103_geojson = this.huc8_layers_dir + "10270103.json";
    huc8_10270104_geojson = this.huc8_layers_dir + "10270104.json";
    huc8_10270201_geojson = this.huc8_layers_dir + "10270201.json";
    huc8_10270202_geojson = this.huc8_layers_dir + "10270202.json";
    huc8_10270203_geojson = this.huc8_layers_dir + "10270203.json";
    huc8_10270204_geojson = this.huc8_layers_dir + "10270204.json";
    huc8_10270205_geojson = this.huc8_layers_dir + "10270205.json";
    huc8_10270206_geojson = this.huc8_layers_dir + "10270206.json";
    huc8_10270207_geojson = this.huc8_layers_dir + "10270207.json";
    huc8_10280101_geojson = this.huc8_layers_dir + "10280101.json";
    huc8_10280102_geojson = this.huc8_layers_dir + "10280102.json";
    huc8_10280103_geojson = this.huc8_layers_dir + "10280103.json";
    huc8_10280201_geojson = this.huc8_layers_dir + "10280201.json";
    huc8_10280202_geojson = this.huc8_layers_dir + "10280202.json";
    huc8_10280203_geojson = this.huc8_layers_dir + "10280203.json";
    huc8_10290101_geojson = this.huc8_layers_dir + "10290101.json";
    huc8_10290102_geojson = this.huc8_layers_dir + "10290102.json";
    huc8_10290103_geojson = this.huc8_layers_dir + "10290103.json";
    huc8_10290104_geojson = this.huc8_layers_dir + "10290104.json";
    huc8_10290105_geojson = this.huc8_layers_dir + "10290105.json";
    huc8_10290106_geojson = this.huc8_layers_dir + "10290106.json";
    huc8_10290107_geojson = this.huc8_layers_dir + "10290107.json";
    huc8_10290108_geojson = this.huc8_layers_dir + "10290108.json";
    huc8_10290109_geojson = this.huc8_layers_dir + "10290109.json";
    huc8_10290110_geojson = this.huc8_layers_dir + "10290110.json";
    huc8_10290111_geojson = this.huc8_layers_dir + "10290111.json";
    huc8_10290201_geojson = this.huc8_layers_dir + "10290201.json";
    huc8_10290202_geojson = this.huc8_layers_dir + "10290202.json";
    huc8_10290203_geojson = this.huc8_layers_dir + "10290203.json";
    huc8_10300101_geojson = this.huc8_layers_dir + "10300101.json";
    huc8_10300102_geojson = this.huc8_layers_dir + "10300102.json";
    huc8_10300103_geojson = this.huc8_layers_dir + "10300103.json";
    huc8_10300104_geojson = this.huc8_layers_dir + "10300104.json";
    huc8_10300200_geojson = this.huc8_layers_dir + "10300200.json";
    huc8_11010001_geojson = this.huc8_layers_dir + "11010001.json";
    huc8_11010002_geojson = this.huc8_layers_dir + "11010002.json";
    huc8_11010003_geojson = this.huc8_layers_dir + "11010003.json";
    huc8_11010004_geojson = this.huc8_layers_dir + "11010004.json";
    huc8_11010005_geojson = this.huc8_layers_dir + "11010005.json";
    huc8_11010006_geojson = this.huc8_layers_dir + "11010006.json";
    huc8_11010007_geojson = this.huc8_layers_dir + "11010007.json";
    huc8_11010008_geojson = this.huc8_layers_dir + "11010008.json";
    huc8_11010009_geojson = this.huc8_layers_dir + "11010009.json";
    huc8_11010010_geojson = this.huc8_layers_dir + "11010010.json";
    huc8_11010011_geojson = this.huc8_layers_dir + "11010011.json";
    huc8_11010012_geojson = this.huc8_layers_dir + "11010012.json";
    huc8_11010013_geojson = this.huc8_layers_dir + "11010013.json";
    huc8_11010014_geojson = this.huc8_layers_dir + "11010014.json";
    huc8_11020001_geojson = this.huc8_layers_dir + "11020001.json";
    huc8_11020002_geojson = this.huc8_layers_dir + "11020002.json";
    huc8_11020003_geojson = this.huc8_layers_dir + "11020003.json";
    huc8_11020004_geojson = this.huc8_layers_dir + "11020004.json";
    huc8_11020005_geojson = this.huc8_layers_dir + "11020005.json";
    huc8_11020006_geojson = this.huc8_layers_dir + "11020006.json";
    huc8_11020007_geojson = this.huc8_layers_dir + "11020007.json";
    huc8_11020008_geojson = this.huc8_layers_dir + "11020008.json";
    huc8_11020009_geojson = this.huc8_layers_dir + "11020009.json";
    huc8_11020010_geojson = this.huc8_layers_dir + "11020010.json";
    huc8_11020011_geojson = this.huc8_layers_dir + "11020011.json";
    huc8_11020012_geojson = this.huc8_layers_dir + "11020012.json";
    huc8_11020013_geojson = this.huc8_layers_dir + "11020013.json";
    huc8_11030001_geojson = this.huc8_layers_dir + "11030001.json";
    huc8_11030002_geojson = this.huc8_layers_dir + "11030002.json";
    huc8_11030003_geojson = this.huc8_layers_dir + "11030003.json";
    huc8_11030004_geojson = this.huc8_layers_dir + "11030004.json";
    huc8_11030005_geojson = this.huc8_layers_dir + "11030005.json";
    huc8_11030006_geojson = this.huc8_layers_dir + "11030006.json";
    huc8_11030007_geojson = this.huc8_layers_dir + "11030007.json";
    huc8_11030008_geojson = this.huc8_layers_dir + "11030008.json";
    huc8_11030009_geojson = this.huc8_layers_dir + "11030009.json";
    huc8_11030010_geojson = this.huc8_layers_dir + "11030010.json";
    huc8_11030011_geojson = this.huc8_layers_dir + "11030011.json";
    huc8_11030012_geojson = this.huc8_layers_dir + "11030012.json";
    huc8_11030013_geojson = this.huc8_layers_dir + "11030013.json";
    huc8_11030014_geojson = this.huc8_layers_dir + "11030014.json";
    huc8_11030015_geojson = this.huc8_layers_dir + "11030015.json";
    huc8_11030016_geojson = this.huc8_layers_dir + "11030016.json";
    huc8_11030017_geojson = this.huc8_layers_dir + "11030017.json";
    huc8_11030018_geojson = this.huc8_layers_dir + "11030018.json";
    huc8_11040001_geojson = this.huc8_layers_dir + "11040001.json";
    huc8_11040002_geojson = this.huc8_layers_dir + "11040002.json";
    huc8_11040003_geojson = this.huc8_layers_dir + "11040003.json";
    huc8_11040004_geojson = this.huc8_layers_dir + "11040004.json";
    huc8_11040005_geojson = this.huc8_layers_dir + "11040005.json";
    huc8_11040006_geojson = this.huc8_layers_dir + "11040006.json";
    huc8_11040007_geojson = this.huc8_layers_dir + "11040007.json";
    huc8_11040008_geojson = this.huc8_layers_dir + "11040008.json";
    huc8_11050001_geojson = this.huc8_layers_dir + "11050001.json";
    huc8_11050002_geojson = this.huc8_layers_dir + "11050002.json";
    huc8_11050003_geojson = this.huc8_layers_dir + "11050003.json";
    huc8_11060001_geojson = this.huc8_layers_dir + "11060001.json";
    huc8_11060002_geojson = this.huc8_layers_dir + "11060002.json";
    huc8_11060003_geojson = this.huc8_layers_dir + "11060003.json";
    huc8_11060004_geojson = this.huc8_layers_dir + "11060004.json";
    huc8_11060005_geojson = this.huc8_layers_dir + "11060005.json";
    huc8_11060006_geojson = this.huc8_layers_dir + "11060006.json";
    huc8_11070101_geojson = this.huc8_layers_dir + "11070101.json";
    huc8_11070102_geojson = this.huc8_layers_dir + "11070102.json";
    huc8_11070103_geojson = this.huc8_layers_dir + "11070103.json";
    huc8_11070104_geojson = this.huc8_layers_dir + "11070104.json";
    huc8_11070105_geojson = this.huc8_layers_dir + "11070105.json";
    huc8_11070106_geojson = this.huc8_layers_dir + "11070106.json";
    huc8_11070107_geojson = this.huc8_layers_dir + "11070107.json";
    huc8_11070201_geojson = this.huc8_layers_dir + "11070201.json";
    huc8_11070202_geojson = this.huc8_layers_dir + "11070202.json";
    huc8_11070203_geojson = this.huc8_layers_dir + "11070203.json";
    huc8_11070204_geojson = this.huc8_layers_dir + "11070204.json";
    huc8_11070205_geojson = this.huc8_layers_dir + "11070205.json";
    huc8_11070206_geojson = this.huc8_layers_dir + "11070206.json";
    huc8_11070207_geojson = this.huc8_layers_dir + "11070207.json";
    huc8_11070208_geojson = this.huc8_layers_dir + "11070208.json";
    huc8_11070209_geojson = this.huc8_layers_dir + "11070209.json";
    huc8_11080001_geojson = this.huc8_layers_dir + "11080001.json";
    huc8_11080002_geojson = this.huc8_layers_dir + "11080002.json";
    huc8_11080003_geojson = this.huc8_layers_dir + "11080003.json";
    huc8_11080004_geojson = this.huc8_layers_dir + "11080004.json";
    huc8_11080005_geojson = this.huc8_layers_dir + "11080005.json";
    huc8_11080006_geojson = this.huc8_layers_dir + "11080006.json";
    huc8_11080007_geojson = this.huc8_layers_dir + "11080007.json";
    huc8_11080008_geojson = this.huc8_layers_dir + "11080008.json";
    huc8_11090101_geojson = this.huc8_layers_dir + "11090101.json";
    huc8_11090102_geojson = this.huc8_layers_dir + "11090102.json";
    huc8_11090103_geojson = this.huc8_layers_dir + "11090103.json";
    huc8_11090104_geojson = this.huc8_layers_dir + "11090104.json";
    huc8_11090105_geojson = this.huc8_layers_dir + "11090105.json";
    huc8_11090106_geojson = this.huc8_layers_dir + "11090106.json";
    huc8_11090201_geojson = this.huc8_layers_dir + "11090201.json";
    huc8_11090202_geojson = this.huc8_layers_dir + "11090202.json";
    huc8_11090203_geojson = this.huc8_layers_dir + "11090203.json";
    huc8_11090204_geojson = this.huc8_layers_dir + "11090204.json";
    huc8_11100101_geojson = this.huc8_layers_dir + "11100101.json";
    huc8_11100102_geojson = this.huc8_layers_dir + "11100102.json";
    huc8_11100103_geojson = this.huc8_layers_dir + "11100103.json";
    huc8_11100104_geojson = this.huc8_layers_dir + "11100104.json";
    huc8_11100201_geojson = this.huc8_layers_dir + "11100201.json";
    huc8_11100202_geojson = this.huc8_layers_dir + "11100202.json";
    huc8_11100203_geojson = this.huc8_layers_dir + "11100203.json";
    huc8_11100301_geojson = this.huc8_layers_dir + "11100301.json";
    huc8_11100302_geojson = this.huc8_layers_dir + "11100302.json";
    huc8_11100303_geojson = this.huc8_layers_dir + "11100303.json";
    huc8_11110101_geojson = this.huc8_layers_dir + "11110101.json";
    huc8_11110102_geojson = this.huc8_layers_dir + "11110102.json";
    huc8_11110103_geojson = this.huc8_layers_dir + "11110103.json";
    huc8_11110104_geojson = this.huc8_layers_dir + "11110104.json";
    huc8_11110105_geojson = this.huc8_layers_dir + "11110105.json";
    huc8_11110201_geojson = this.huc8_layers_dir + "11110201.json";
    huc8_11110202_geojson = this.huc8_layers_dir + "11110202.json";
    huc8_11110203_geojson = this.huc8_layers_dir + "11110203.json";
    huc8_11110204_geojson = this.huc8_layers_dir + "11110204.json";
    huc8_11110205_geojson = this.huc8_layers_dir + "11110205.json";
    huc8_11110206_geojson = this.huc8_layers_dir + "11110206.json";
    huc8_11110207_geojson = this.huc8_layers_dir + "11110207.json";
    huc8_11120101_geojson = this.huc8_layers_dir + "11120101.json";
    huc8_11120102_geojson = this.huc8_layers_dir + "11120102.json";
    huc8_11120103_geojson = this.huc8_layers_dir + "11120103.json";
    huc8_11120104_geojson = this.huc8_layers_dir + "11120104.json";
    huc8_11120105_geojson = this.huc8_layers_dir + "11120105.json";
    huc8_11120201_geojson = this.huc8_layers_dir + "11120201.json";
    huc8_11120202_geojson = this.huc8_layers_dir + "11120202.json";
    huc8_11120301_geojson = this.huc8_layers_dir + "11120301.json";
    huc8_11120302_geojson = this.huc8_layers_dir + "11120302.json";
    huc8_11120303_geojson = this.huc8_layers_dir + "11120303.json";
    huc8_11120304_geojson = this.huc8_layers_dir + "11120304.json";
    huc8_11130101_geojson = this.huc8_layers_dir + "11130101.json";
    huc8_11130102_geojson = this.huc8_layers_dir + "11130102.json";
    huc8_11130103_geojson = this.huc8_layers_dir + "11130103.json";
    huc8_11130104_geojson = this.huc8_layers_dir + "11130104.json";
    huc8_11130105_geojson = this.huc8_layers_dir + "11130105.json";
    huc8_11130201_geojson = this.huc8_layers_dir + "11130201.json";
    huc8_11130202_geojson = this.huc8_layers_dir + "11130202.json";
    huc8_11130203_geojson = this.huc8_layers_dir + "11130203.json";
    huc8_11130204_geojson = this.huc8_layers_dir + "11130204.json";
    huc8_11130205_geojson = this.huc8_layers_dir + "11130205.json";
    huc8_11130206_geojson = this.huc8_layers_dir + "11130206.json";
    huc8_11130207_geojson = this.huc8_layers_dir + "11130207.json";
    huc8_11130208_geojson = this.huc8_layers_dir + "11130208.json";
    huc8_11130209_geojson = this.huc8_layers_dir + "11130209.json";
    huc8_11130210_geojson = this.huc8_layers_dir + "11130210.json";
    huc8_11130301_geojson = this.huc8_layers_dir + "11130301.json";
    huc8_11130302_geojson = this.huc8_layers_dir + "11130302.json";
    huc8_11130303_geojson = this.huc8_layers_dir + "11130303.json";
    huc8_11130304_geojson = this.huc8_layers_dir + "11130304.json";
    huc8_11140101_geojson = this.huc8_layers_dir + "11140101.json";
    huc8_11140102_geojson = this.huc8_layers_dir + "11140102.json";
    huc8_11140103_geojson = this.huc8_layers_dir + "11140103.json";
    huc8_11140104_geojson = this.huc8_layers_dir + "11140104.json";
    huc8_11140105_geojson = this.huc8_layers_dir + "11140105.json";
    huc8_11140106_geojson = this.huc8_layers_dir + "11140106.json";
    huc8_11140107_geojson = this.huc8_layers_dir + "11140107.json";
    huc8_11140108_geojson = this.huc8_layers_dir + "11140108.json";
    huc8_11140109_geojson = this.huc8_layers_dir + "11140109.json";
    huc8_11140201_geojson = this.huc8_layers_dir + "11140201.json";
    huc8_11140202_geojson = this.huc8_layers_dir + "11140202.json";
    huc8_11140203_geojson = this.huc8_layers_dir + "11140203.json";
    huc8_11140204_geojson = this.huc8_layers_dir + "11140204.json";
    huc8_11140205_geojson = this.huc8_layers_dir + "11140205.json";
    huc8_11140206_geojson = this.huc8_layers_dir + "11140206.json";
    huc8_11140207_geojson = this.huc8_layers_dir + "11140207.json";
    huc8_11140208_geojson = this.huc8_layers_dir + "11140208.json";
    huc8_11140209_geojson = this.huc8_layers_dir + "11140209.json";
    huc8_11140301_geojson = this.huc8_layers_dir + "11140301.json";
    huc8_11140302_geojson = this.huc8_layers_dir + "11140302.json";
    huc8_11140303_geojson = this.huc8_layers_dir + "11140303.json";
    huc8_11140304_geojson = this.huc8_layers_dir + "11140304.json";
    huc8_11140305_geojson = this.huc8_layers_dir + "11140305.json";
    huc8_11140306_geojson = this.huc8_layers_dir + "11140306.json";
    huc8_11140307_geojson = this.huc8_layers_dir + "11140307.json";
    huc8_12010001_geojson = this.huc8_layers_dir + "12010001.json";
    huc8_12010002_geojson = this.huc8_layers_dir + "12010002.json";
    huc8_12010003_geojson = this.huc8_layers_dir + "12010003.json";
    huc8_12010004_geojson = this.huc8_layers_dir + "12010004.json";
    huc8_12010005_geojson = this.huc8_layers_dir + "12010005.json";
    huc8_12020001_geojson = this.huc8_layers_dir + "12020001.json";
    huc8_12020002_geojson = this.huc8_layers_dir + "12020002.json";
    huc8_12020003_geojson = this.huc8_layers_dir + "12020003.json";
    huc8_12020004_geojson = this.huc8_layers_dir + "12020004.json";
    huc8_12020005_geojson = this.huc8_layers_dir + "12020005.json";
    huc8_12020006_geojson = this.huc8_layers_dir + "12020006.json";
    huc8_12020007_geojson = this.huc8_layers_dir + "12020007.json";
    huc8_12030101_geojson = this.huc8_layers_dir + "12030101.json";
    huc8_12030102_geojson = this.huc8_layers_dir + "12030102.json";
    huc8_12030103_geojson = this.huc8_layers_dir + "12030103.json";
    huc8_12030104_geojson = this.huc8_layers_dir + "12030104.json";
    huc8_12030105_geojson = this.huc8_layers_dir + "12030105.json";
    huc8_12030106_geojson = this.huc8_layers_dir + "12030106.json";
    huc8_12030107_geojson = this.huc8_layers_dir + "12030107.json";
    huc8_12030108_geojson = this.huc8_layers_dir + "12030108.json";
    huc8_12030109_geojson = this.huc8_layers_dir + "12030109.json";
    huc8_12030201_geojson = this.huc8_layers_dir + "12030201.json";
    huc8_12030202_geojson = this.huc8_layers_dir + "12030202.json";
    huc8_12030203_geojson = this.huc8_layers_dir + "12030203.json";
    huc8_12040101_geojson = this.huc8_layers_dir + "12040101.json";
    huc8_12040102_geojson = this.huc8_layers_dir + "12040102.json";
    huc8_12040103_geojson = this.huc8_layers_dir + "12040103.json";
    huc8_12040104_geojson = this.huc8_layers_dir + "12040104.json";
    huc8_12040201_geojson = this.huc8_layers_dir + "12040201.json";
    huc8_12040202_geojson = this.huc8_layers_dir + "12040202.json";
    huc8_12040203_geojson = this.huc8_layers_dir + "12040203.json";
    huc8_12040204_geojson = this.huc8_layers_dir + "12040204.json";
    huc8_12040205_geojson = this.huc8_layers_dir + "12040205.json";
    huc8_12050001_geojson = this.huc8_layers_dir + "12050001.json";
    huc8_12050002_geojson = this.huc8_layers_dir + "12050002.json";
    huc8_12050003_geojson = this.huc8_layers_dir + "12050003.json";
    huc8_12050004_geojson = this.huc8_layers_dir + "12050004.json";
    huc8_12050005_geojson = this.huc8_layers_dir + "12050005.json";
    huc8_12050006_geojson = this.huc8_layers_dir + "12050006.json";
    huc8_12050007_geojson = this.huc8_layers_dir + "12050007.json";
    huc8_12060101_geojson = this.huc8_layers_dir + "12060101.json";
    huc8_12060102_geojson = this.huc8_layers_dir + "12060102.json";
    huc8_12060103_geojson = this.huc8_layers_dir + "12060103.json";
    huc8_12060104_geojson = this.huc8_layers_dir + "12060104.json";
    huc8_12060105_geojson = this.huc8_layers_dir + "12060105.json";
    huc8_12060201_geojson = this.huc8_layers_dir + "12060201.json";
    huc8_12060202_geojson = this.huc8_layers_dir + "12060202.json";
    huc8_12060203_geojson = this.huc8_layers_dir + "12060203.json";
    huc8_12060204_geojson = this.huc8_layers_dir + "12060204.json";
    huc8_12070101_geojson = this.huc8_layers_dir + "12070101.json";
    huc8_12070102_geojson = this.huc8_layers_dir + "12070102.json";
    huc8_12070103_geojson = this.huc8_layers_dir + "12070103.json";
    huc8_12070104_geojson = this.huc8_layers_dir + "12070104.json";
    huc8_12070201_geojson = this.huc8_layers_dir + "12070201.json";
    huc8_12070202_geojson = this.huc8_layers_dir + "12070202.json";
    huc8_12070203_geojson = this.huc8_layers_dir + "12070203.json";
    huc8_12070204_geojson = this.huc8_layers_dir + "12070204.json";
    huc8_12070205_geojson = this.huc8_layers_dir + "12070205.json";
    huc8_12080001_geojson = this.huc8_layers_dir + "12080001.json";
    huc8_12080002_geojson = this.huc8_layers_dir + "12080002.json";
    huc8_12080003_geojson = this.huc8_layers_dir + "12080003.json";
    huc8_12080004_geojson = this.huc8_layers_dir + "12080004.json";
    huc8_12080005_geojson = this.huc8_layers_dir + "12080005.json";
    huc8_12080006_geojson = this.huc8_layers_dir + "12080006.json";
    huc8_12080007_geojson = this.huc8_layers_dir + "12080007.json";
    huc8_12080008_geojson = this.huc8_layers_dir + "12080008.json";
    huc8_12090101_geojson = this.huc8_layers_dir + "12090101.json";
    huc8_12090102_geojson = this.huc8_layers_dir + "12090102.json";
    huc8_12090103_geojson = this.huc8_layers_dir + "12090103.json";
    huc8_12090104_geojson = this.huc8_layers_dir + "12090104.json";
    huc8_12090105_geojson = this.huc8_layers_dir + "12090105.json";
    huc8_12090106_geojson = this.huc8_layers_dir + "12090106.json";
    huc8_12090107_geojson = this.huc8_layers_dir + "12090107.json";
    huc8_12090108_geojson = this.huc8_layers_dir + "12090108.json";
    huc8_12090109_geojson = this.huc8_layers_dir + "12090109.json";
    huc8_12090110_geojson = this.huc8_layers_dir + "12090110.json";
    huc8_12090201_geojson = this.huc8_layers_dir + "12090201.json";
    huc8_12090202_geojson = this.huc8_layers_dir + "12090202.json";
    huc8_12090203_geojson = this.huc8_layers_dir + "12090203.json";
    huc8_12090204_geojson = this.huc8_layers_dir + "12090204.json";
    huc8_12090205_geojson = this.huc8_layers_dir + "12090205.json";
    huc8_12090206_geojson = this.huc8_layers_dir + "12090206.json";
    huc8_12090301_geojson = this.huc8_layers_dir + "12090301.json";
    huc8_12090302_geojson = this.huc8_layers_dir + "12090302.json";
    huc8_12090401_geojson = this.huc8_layers_dir + "12090401.json";
    huc8_12090402_geojson = this.huc8_layers_dir + "12090402.json";
    huc8_12100101_geojson = this.huc8_layers_dir + "12100101.json";
    huc8_12100102_geojson = this.huc8_layers_dir + "12100102.json";
    huc8_12100201_geojson = this.huc8_layers_dir + "12100201.json";
    huc8_12100202_geojson = this.huc8_layers_dir + "12100202.json";
    huc8_12100203_geojson = this.huc8_layers_dir + "12100203.json";
    huc8_12100204_geojson = this.huc8_layers_dir + "12100204.json";
    huc8_12100301_geojson = this.huc8_layers_dir + "12100301.json";
    huc8_12100302_geojson = this.huc8_layers_dir + "12100302.json";
    huc8_12100303_geojson = this.huc8_layers_dir + "12100303.json";
    huc8_12100304_geojson = this.huc8_layers_dir + "12100304.json";
    huc8_12100401_geojson = this.huc8_layers_dir + "12100401.json";
    huc8_12100402_geojson = this.huc8_layers_dir + "12100402.json";
    huc8_12100403_geojson = this.huc8_layers_dir + "12100403.json";
    huc8_12100404_geojson = this.huc8_layers_dir + "12100404.json";
    huc8_12100405_geojson = this.huc8_layers_dir + "12100405.json";
    huc8_12100406_geojson = this.huc8_layers_dir + "12100406.json";
    huc8_12100407_geojson = this.huc8_layers_dir + "12100407.json";
    huc8_12110101_geojson = this.huc8_layers_dir + "12110101.json";
    huc8_12110102_geojson = this.huc8_layers_dir + "12110102.json";
    huc8_12110103_geojson = this.huc8_layers_dir + "12110103.json";
    huc8_12110104_geojson = this.huc8_layers_dir + "12110104.json";
    huc8_12110105_geojson = this.huc8_layers_dir + "12110105.json";
    huc8_12110106_geojson = this.huc8_layers_dir + "12110106.json";
    huc8_12110107_geojson = this.huc8_layers_dir + "12110107.json";
    huc8_12110108_geojson = this.huc8_layers_dir + "12110108.json";
    huc8_12110109_geojson = this.huc8_layers_dir + "12110109.json";
    huc8_12110110_geojson = this.huc8_layers_dir + "12110110.json";
    huc8_12110111_geojson = this.huc8_layers_dir + "12110111.json";
    huc8_12110201_geojson = this.huc8_layers_dir + "12110201.json";
    huc8_12110202_geojson = this.huc8_layers_dir + "12110202.json";
    huc8_12110203_geojson = this.huc8_layers_dir + "12110203.json";
    huc8_12110204_geojson = this.huc8_layers_dir + "12110204.json";
    huc8_12110205_geojson = this.huc8_layers_dir + "12110205.json";
    huc8_12110206_geojson = this.huc8_layers_dir + "12110206.json";
    huc8_12110207_geojson = this.huc8_layers_dir + "12110207.json";
    huc8_12110208_geojson = this.huc8_layers_dir + "12110208.json";
    huc8_13010001_geojson = this.huc8_layers_dir + "13010001.json";
    huc8_13010002_geojson = this.huc8_layers_dir + "13010002.json";
    huc8_13010003_geojson = this.huc8_layers_dir + "13010003.json";
    huc8_13010004_geojson = this.huc8_layers_dir + "13010004.json";
    huc8_13010005_geojson = this.huc8_layers_dir + "13010005.json";
    huc8_13020101_geojson = this.huc8_layers_dir + "13020101.json";
    huc8_13020102_geojson = this.huc8_layers_dir + "13020102.json";
    huc8_13020201_geojson = this.huc8_layers_dir + "13020201.json";
    huc8_13020202_geojson = this.huc8_layers_dir + "13020202.json";
    huc8_13020203_geojson = this.huc8_layers_dir + "13020203.json";
    huc8_13020204_geojson = this.huc8_layers_dir + "13020204.json";
    huc8_13020205_geojson = this.huc8_layers_dir + "13020205.json";
    huc8_13020206_geojson = this.huc8_layers_dir + "13020206.json";
    huc8_13020207_geojson = this.huc8_layers_dir + "13020207.json";
    huc8_13020208_geojson = this.huc8_layers_dir + "13020208.json";
    huc8_13020209_geojson = this.huc8_layers_dir + "13020209.json";
    huc8_13020210_geojson = this.huc8_layers_dir + "13020210.json";
    huc8_13020211_geojson = this.huc8_layers_dir + "13020211.json";
    huc8_13030101_geojson = this.huc8_layers_dir + "13030101.json";
    huc8_13030102_geojson = this.huc8_layers_dir + "13030102.json";
    huc8_13030103_geojson = this.huc8_layers_dir + "13030103.json";
    huc8_13030201_geojson = this.huc8_layers_dir + "13030201.json";
    huc8_13030202_geojson = this.huc8_layers_dir + "13030202.json";
    huc8_13040100_geojson = this.huc8_layers_dir + "13040100.json";
    huc8_13040201_geojson = this.huc8_layers_dir + "13040201.json";
    huc8_13040202_geojson = this.huc8_layers_dir + "13040202.json";
    huc8_13040203_geojson = this.huc8_layers_dir + "13040203.json";
    huc8_13040204_geojson = this.huc8_layers_dir + "13040204.json";
    huc8_13040205_geojson = this.huc8_layers_dir + "13040205.json";
    huc8_13040206_geojson = this.huc8_layers_dir + "13040206.json";
    huc8_13040207_geojson = this.huc8_layers_dir + "13040207.json";
    huc8_13040208_geojson = this.huc8_layers_dir + "13040208.json";
    huc8_13040209_geojson = this.huc8_layers_dir + "13040209.json";
    huc8_13040210_geojson = this.huc8_layers_dir + "13040210.json";
    huc8_13040211_geojson = this.huc8_layers_dir + "13040211.json";
    huc8_13040212_geojson = this.huc8_layers_dir + "13040212.json";
    huc8_13040301_geojson = this.huc8_layers_dir + "13040301.json";
    huc8_13040302_geojson = this.huc8_layers_dir + "13040302.json";
    huc8_13040303_geojson = this.huc8_layers_dir + "13040303.json";
    huc8_13050001_geojson = this.huc8_layers_dir + "13050001.json";
    huc8_13050002_geojson = this.huc8_layers_dir + "13050002.json";
    huc8_13050003_geojson = this.huc8_layers_dir + "13050003.json";
    huc8_13050004_geojson = this.huc8_layers_dir + "13050004.json";
    huc8_13060001_geojson = this.huc8_layers_dir + "13060001.json";
    huc8_13060002_geojson = this.huc8_layers_dir + "13060002.json";
    huc8_13060003_geojson = this.huc8_layers_dir + "13060003.json";
    huc8_13060004_geojson = this.huc8_layers_dir + "13060004.json";
    huc8_13060005_geojson = this.huc8_layers_dir + "13060005.json";
    huc8_13060006_geojson = this.huc8_layers_dir + "13060006.json";
    huc8_13060007_geojson = this.huc8_layers_dir + "13060007.json";
    huc8_13060008_geojson = this.huc8_layers_dir + "13060008.json";
    huc8_13060009_geojson = this.huc8_layers_dir + "13060009.json";
    huc8_13060010_geojson = this.huc8_layers_dir + "13060010.json";
    huc8_13060011_geojson = this.huc8_layers_dir + "13060011.json";
    huc8_13070001_geojson = this.huc8_layers_dir + "13070001.json";
    huc8_13070002_geojson = this.huc8_layers_dir + "13070002.json";
    huc8_13070003_geojson = this.huc8_layers_dir + "13070003.json";
    huc8_13070004_geojson = this.huc8_layers_dir + "13070004.json";
    huc8_13070005_geojson = this.huc8_layers_dir + "13070005.json";
    huc8_13070006_geojson = this.huc8_layers_dir + "13070006.json";
    huc8_13070007_geojson = this.huc8_layers_dir + "13070007.json";
    huc8_13070008_geojson = this.huc8_layers_dir + "13070008.json";
    huc8_13070009_geojson = this.huc8_layers_dir + "13070009.json";
    huc8_13070010_geojson = this.huc8_layers_dir + "13070010.json";
    huc8_13070011_geojson = this.huc8_layers_dir + "13070011.json";
    huc8_13070012_geojson = this.huc8_layers_dir + "13070012.json";
    huc8_13080001_geojson = this.huc8_layers_dir + "13080001.json";
    huc8_13080002_geojson = this.huc8_layers_dir + "13080002.json";
    huc8_13080003_geojson = this.huc8_layers_dir + "13080003.json";
    huc8_13090001_geojson = this.huc8_layers_dir + "13090001.json";
    huc8_13090002_geojson = this.huc8_layers_dir + "13090002.json";
    huc8_14010001_geojson = this.huc8_layers_dir + "14010001.json";
    huc8_14010002_geojson = this.huc8_layers_dir + "14010002.json";
    huc8_14010003_geojson = this.huc8_layers_dir + "14010003.json";
    huc8_14010004_geojson = this.huc8_layers_dir + "14010004.json";
    huc8_14010005_geojson = this.huc8_layers_dir + "14010005.json";
    huc8_14020001_geojson = this.huc8_layers_dir + "14020001.json";
    huc8_14020002_geojson = this.huc8_layers_dir + "14020002.json";
    huc8_14020003_geojson = this.huc8_layers_dir + "14020003.json";
    huc8_14020004_geojson = this.huc8_layers_dir + "14020004.json";
    huc8_14020005_geojson = this.huc8_layers_dir + "14020005.json";
    huc8_14020006_geojson = this.huc8_layers_dir + "14020006.json";
    huc8_14030001_geojson = this.huc8_layers_dir + "14030001.json";
    huc8_14030002_geojson = this.huc8_layers_dir + "14030002.json";
    huc8_14030003_geojson = this.huc8_layers_dir + "14030003.json";
    huc8_14030004_geojson = this.huc8_layers_dir + "14030004.json";
    huc8_14030005_geojson = this.huc8_layers_dir + "14030005.json";
    huc8_14040101_geojson = this.huc8_layers_dir + "14040101.json";
    huc8_14040102_geojson = this.huc8_layers_dir + "14040102.json";
    huc8_14040103_geojson = this.huc8_layers_dir + "14040103.json";
    huc8_14040104_geojson = this.huc8_layers_dir + "14040104.json";
    huc8_14040105_geojson = this.huc8_layers_dir + "14040105.json";
    huc8_14040106_geojson = this.huc8_layers_dir + "14040106.json";
    huc8_14040107_geojson = this.huc8_layers_dir + "14040107.json";
    huc8_14040108_geojson = this.huc8_layers_dir + "14040108.json";
    huc8_14040109_geojson = this.huc8_layers_dir + "14040109.json";
    huc8_14040200_geojson = this.huc8_layers_dir + "14040200.json";
    huc8_14050001_geojson = this.huc8_layers_dir + "14050001.json";
    huc8_14050002_geojson = this.huc8_layers_dir + "14050002.json";
    huc8_14050003_geojson = this.huc8_layers_dir + "14050003.json";
    huc8_14050004_geojson = this.huc8_layers_dir + "14050004.json";
    huc8_14050005_geojson = this.huc8_layers_dir + "14050005.json";
    huc8_14050006_geojson = this.huc8_layers_dir + "14050006.json";
    huc8_14050007_geojson = this.huc8_layers_dir + "14050007.json";
    huc8_14060003_geojson = this.huc8_layers_dir + "14060003.json";
    huc8_14060004_geojson = this.huc8_layers_dir + "14060004.json";
    huc8_14060005_geojson = this.huc8_layers_dir + "14060005.json";
    huc8_14060006_geojson = this.huc8_layers_dir + "14060006.json";
    huc8_14060007_geojson = this.huc8_layers_dir + "14060007.json";
    huc8_14060008_geojson = this.huc8_layers_dir + "14060008.json";
    huc8_14060009_geojson = this.huc8_layers_dir + "14060009.json";
    huc8_14060010_geojson = this.huc8_layers_dir + "14060010.json";
    huc8_14070001_geojson = this.huc8_layers_dir + "14070001.json";
    huc8_14070002_geojson = this.huc8_layers_dir + "14070002.json";
    huc8_14070003_geojson = this.huc8_layers_dir + "14070003.json";
    huc8_14070004_geojson = this.huc8_layers_dir + "14070004.json";
    huc8_14070005_geojson = this.huc8_layers_dir + "14070005.json";
    huc8_14070006_geojson = this.huc8_layers_dir + "14070006.json";
    huc8_14070007_geojson = this.huc8_layers_dir + "14070007.json";
    huc8_14080101_geojson = this.huc8_layers_dir + "14080101.json";
    huc8_14080102_geojson = this.huc8_layers_dir + "14080102.json";
    huc8_14080103_geojson = this.huc8_layers_dir + "14080103.json";
    huc8_14080104_geojson = this.huc8_layers_dir + "14080104.json";
    huc8_14080105_geojson = this.huc8_layers_dir + "14080105.json";
    huc8_14080106_geojson = this.huc8_layers_dir + "14080106.json";
    huc8_14080107_geojson = this.huc8_layers_dir + "14080107.json";
    huc8_14080201_geojson = this.huc8_layers_dir + "14080201.json";
    huc8_14080202_geojson = this.huc8_layers_dir + "14080202.json";
    huc8_14080203_geojson = this.huc8_layers_dir + "14080203.json";
    huc8_14080204_geojson = this.huc8_layers_dir + "14080204.json";
    huc8_14080205_geojson = this.huc8_layers_dir + "14080205.json";
    huc8_15010001_geojson = this.huc8_layers_dir + "15010001.json";
    huc8_15010002_geojson = this.huc8_layers_dir + "15010002.json";
    huc8_15010003_geojson = this.huc8_layers_dir + "15010003.json";
    huc8_15010004_geojson = this.huc8_layers_dir + "15010004.json";
    huc8_15010005_geojson = this.huc8_layers_dir + "15010005.json";
    huc8_15010006_geojson = this.huc8_layers_dir + "15010006.json";
    huc8_15010007_geojson = this.huc8_layers_dir + "15010007.json";
    huc8_15010008_geojson = this.huc8_layers_dir + "15010008.json";
    huc8_15010009_geojson = this.huc8_layers_dir + "15010009.json";
    huc8_15010010_geojson = this.huc8_layers_dir + "15010010.json";
    huc8_15010011_geojson = this.huc8_layers_dir + "15010011.json";
    huc8_15010012_geojson = this.huc8_layers_dir + "15010012.json";
    huc8_15010013_geojson = this.huc8_layers_dir + "15010013.json";
    huc8_15010014_geojson = this.huc8_layers_dir + "15010014.json";
    huc8_15010015_geojson = this.huc8_layers_dir + "15010015.json";
    huc8_15020001_geojson = this.huc8_layers_dir + "15020001.json";
    huc8_15020002_geojson = this.huc8_layers_dir + "15020002.json";
    huc8_15020003_geojson = this.huc8_layers_dir + "15020003.json";
    huc8_15020004_geojson = this.huc8_layers_dir + "15020004.json";
    huc8_15020005_geojson = this.huc8_layers_dir + "15020005.json";
    huc8_15020006_geojson = this.huc8_layers_dir + "15020006.json";
    huc8_15020007_geojson = this.huc8_layers_dir + "15020007.json";
    huc8_15020008_geojson = this.huc8_layers_dir + "15020008.json";
    huc8_15020009_geojson = this.huc8_layers_dir + "15020009.json";
    huc8_15020010_geojson = this.huc8_layers_dir + "15020010.json";
    huc8_15020011_geojson = this.huc8_layers_dir + "15020011.json";
    huc8_15020012_geojson = this.huc8_layers_dir + "15020012.json";
    huc8_15020013_geojson = this.huc8_layers_dir + "15020013.json";
    huc8_15020014_geojson = this.huc8_layers_dir + "15020014.json";
    huc8_15020015_geojson = this.huc8_layers_dir + "15020015.json";
    huc8_15020016_geojson = this.huc8_layers_dir + "15020016.json";
    huc8_15020017_geojson = this.huc8_layers_dir + "15020017.json";
    huc8_15020018_geojson = this.huc8_layers_dir + "15020018.json";
    huc8_15030101_geojson = this.huc8_layers_dir + "15030101.json";
    huc8_15030102_geojson = this.huc8_layers_dir + "15030102.json";
    huc8_15030103_geojson = this.huc8_layers_dir + "15030103.json";
    huc8_15030104_geojson = this.huc8_layers_dir + "15030104.json";
    huc8_15030105_geojson = this.huc8_layers_dir + "15030105.json";
    huc8_15030106_geojson = this.huc8_layers_dir + "15030106.json";
    huc8_15030107_geojson = this.huc8_layers_dir + "15030107.json";
    huc8_15030108_geojson = this.huc8_layers_dir + "15030108.json";
    huc8_15030201_geojson = this.huc8_layers_dir + "15030201.json";
    huc8_15030202_geojson = this.huc8_layers_dir + "15030202.json";
    huc8_15030203_geojson = this.huc8_layers_dir + "15030203.json";
    huc8_15030204_geojson = this.huc8_layers_dir + "15030204.json";
    huc8_15040001_geojson = this.huc8_layers_dir + "15040001.json";
    huc8_15040002_geojson = this.huc8_layers_dir + "15040002.json";
    huc8_15040003_geojson = this.huc8_layers_dir + "15040003.json";
    huc8_15040004_geojson = this.huc8_layers_dir + "15040004.json";
    huc8_15040005_geojson = this.huc8_layers_dir + "15040005.json";
    huc8_15040006_geojson = this.huc8_layers_dir + "15040006.json";
    huc8_15040007_geojson = this.huc8_layers_dir + "15040007.json";
    huc8_15050100_geojson = this.huc8_layers_dir + "15050100.json";
    huc8_15050201_geojson = this.huc8_layers_dir + "15050201.json";
    huc8_15050202_geojson = this.huc8_layers_dir + "15050202.json";
    huc8_15050203_geojson = this.huc8_layers_dir + "15050203.json";
    huc8_15050301_geojson = this.huc8_layers_dir + "15050301.json";
    huc8_15050302_geojson = this.huc8_layers_dir + "15050302.json";
    huc8_15050303_geojson = this.huc8_layers_dir + "15050303.json";
    huc8_15050304_geojson = this.huc8_layers_dir + "15050304.json";
    huc8_15050305_geojson = this.huc8_layers_dir + "15050305.json";
    huc8_15050306_geojson = this.huc8_layers_dir + "15050306.json";
    huc8_15060101_geojson = this.huc8_layers_dir + "15060101.json";
    huc8_15060102_geojson = this.huc8_layers_dir + "15060102.json";
    huc8_15060103_geojson = this.huc8_layers_dir + "15060103.json";
    huc8_15060104_geojson = this.huc8_layers_dir + "15060104.json";
    huc8_15060105_geojson = this.huc8_layers_dir + "15060105.json";
    huc8_15060106_geojson = this.huc8_layers_dir + "15060106.json";
    huc8_15060201_geojson = this.huc8_layers_dir + "15060201.json";
    huc8_15060202_geojson = this.huc8_layers_dir + "15060202.json";
    huc8_15060203_geojson = this.huc8_layers_dir + "15060203.json";
    huc8_15070101_geojson = this.huc8_layers_dir + "15070101.json";
    huc8_15070102_geojson = this.huc8_layers_dir + "15070102.json";
    huc8_15070103_geojson = this.huc8_layers_dir + "15070103.json";
    huc8_15070104_geojson = this.huc8_layers_dir + "15070104.json";
    huc8_15070201_geojson = this.huc8_layers_dir + "15070201.json";
    huc8_15070202_geojson = this.huc8_layers_dir + "15070202.json";
    huc8_15070203_geojson = this.huc8_layers_dir + "15070203.json";
    huc8_15080101_geojson = this.huc8_layers_dir + "15080101.json";
    huc8_15080102_geojson = this.huc8_layers_dir + "15080102.json";
    huc8_15080103_geojson = this.huc8_layers_dir + "15080103.json";
    huc8_15080200_geojson = this.huc8_layers_dir + "15080200.json";
    huc8_15080301_geojson = this.huc8_layers_dir + "15080301.json";
    huc8_15080302_geojson = this.huc8_layers_dir + "15080302.json";
    huc8_15080303_geojson = this.huc8_layers_dir + "15080303.json";
    huc8_16010101_geojson = this.huc8_layers_dir + "16010101.json";
    huc8_16010102_geojson = this.huc8_layers_dir + "16010102.json";
    huc8_16010201_geojson = this.huc8_layers_dir + "16010201.json";
    huc8_16010202_geojson = this.huc8_layers_dir + "16010202.json";
    huc8_16010203_geojson = this.huc8_layers_dir + "16010203.json";
    huc8_16010204_geojson = this.huc8_layers_dir + "16010204.json";
    huc8_16020101_geojson = this.huc8_layers_dir + "16020101.json";
    huc8_16020102_geojson = this.huc8_layers_dir + "16020102.json";
    huc8_16020201_geojson = this.huc8_layers_dir + "16020201.json";
    huc8_16020202_geojson = this.huc8_layers_dir + "16020202.json";
    huc8_16020203_geojson = this.huc8_layers_dir + "16020203.json";
    huc8_16020204_geojson = this.huc8_layers_dir + "16020204.json";
    huc8_16020301_geojson = this.huc8_layers_dir + "16020301.json";
    huc8_16020302_geojson = this.huc8_layers_dir + "16020302.json";
    huc8_16020303_geojson = this.huc8_layers_dir + "16020303.json";
    huc8_16020304_geojson = this.huc8_layers_dir + "16020304.json";
    huc8_16020305_geojson = this.huc8_layers_dir + "16020305.json";
    huc8_16020306_geojson = this.huc8_layers_dir + "16020306.json";
    huc8_16020307_geojson = this.huc8_layers_dir + "16020307.json";
    huc8_16020308_geojson = this.huc8_layers_dir + "16020308.json";
    huc8_16020309_geojson = this.huc8_layers_dir + "16020309.json";
    huc8_16020310_geojson = this.huc8_layers_dir + "16020310.json";
    huc8_16030001_geojson = this.huc8_layers_dir + "16030001.json";
    huc8_16030002_geojson = this.huc8_layers_dir + "16030002.json";
    huc8_16030003_geojson = this.huc8_layers_dir + "16030003.json";
    huc8_16030004_geojson = this.huc8_layers_dir + "16030004.json";
    huc8_16030005_geojson = this.huc8_layers_dir + "16030005.json";
    huc8_16030006_geojson = this.huc8_layers_dir + "16030006.json";
    huc8_16030007_geojson = this.huc8_layers_dir + "16030007.json";
    huc8_16030008_geojson = this.huc8_layers_dir + "16030008.json";
    huc8_16030009_geojson = this.huc8_layers_dir + "16030009.json";
    huc8_16040101_geojson = this.huc8_layers_dir + "16040101.json";
    huc8_16040102_geojson = this.huc8_layers_dir + "16040102.json";
    huc8_16040103_geojson = this.huc8_layers_dir + "16040103.json";
    huc8_16040104_geojson = this.huc8_layers_dir + "16040104.json";
    huc8_16040105_geojson = this.huc8_layers_dir + "16040105.json";
    huc8_16040106_geojson = this.huc8_layers_dir + "16040106.json";
    huc8_16040107_geojson = this.huc8_layers_dir + "16040107.json";
    huc8_16040108_geojson = this.huc8_layers_dir + "16040108.json";
    huc8_16040109_geojson = this.huc8_layers_dir + "16040109.json";
    huc8_16040201_geojson = this.huc8_layers_dir + "16040201.json";
    huc8_16040202_geojson = this.huc8_layers_dir + "16040202.json";
    huc8_16040203_geojson = this.huc8_layers_dir + "16040203.json";
    huc8_16040204_geojson = this.huc8_layers_dir + "16040204.json";
    huc8_16040205_geojson = this.huc8_layers_dir + "16040205.json";
    huc8_16050101_geojson = this.huc8_layers_dir + "16050101.json";
    huc8_16050102_geojson = this.huc8_layers_dir + "16050102.json";
    huc8_16050103_geojson = this.huc8_layers_dir + "16050103.json";
    huc8_16050104_geojson = this.huc8_layers_dir + "16050104.json";
    huc8_16050201_geojson = this.huc8_layers_dir + "16050201.json";
    huc8_16050202_geojson = this.huc8_layers_dir + "16050202.json";
    huc8_16050203_geojson = this.huc8_layers_dir + "16050203.json";
    huc8_16050301_geojson = this.huc8_layers_dir + "16050301.json";
    huc8_16050302_geojson = this.huc8_layers_dir + "16050302.json";
    huc8_16050303_geojson = this.huc8_layers_dir + "16050303.json";
    huc8_16050304_geojson = this.huc8_layers_dir + "16050304.json";
    huc8_16060001_geojson = this.huc8_layers_dir + "16060001.json";
    huc8_16060002_geojson = this.huc8_layers_dir + "16060002.json";
    huc8_16060003_geojson = this.huc8_layers_dir + "16060003.json";
    huc8_16060004_geojson = this.huc8_layers_dir + "16060004.json";
    huc8_16060005_geojson = this.huc8_layers_dir + "16060005.json";
    huc8_16060006_geojson = this.huc8_layers_dir + "16060006.json";
    huc8_16060007_geojson = this.huc8_layers_dir + "16060007.json";
    huc8_16060008_geojson = this.huc8_layers_dir + "16060008.json";
    huc8_16060009_geojson = this.huc8_layers_dir + "16060009.json";
    huc8_16060010_geojson = this.huc8_layers_dir + "16060010.json";
    huc8_16060011_geojson = this.huc8_layers_dir + "16060011.json";
    huc8_16060012_geojson = this.huc8_layers_dir + "16060012.json";
    huc8_16060013_geojson = this.huc8_layers_dir + "16060013.json";
    huc8_16060014_geojson = this.huc8_layers_dir + "16060014.json";
    huc8_16060015_geojson = this.huc8_layers_dir + "16060015.json";
    huc8_17010101_geojson = this.huc8_layers_dir + "17010101.json";
    huc8_17010102_geojson = this.huc8_layers_dir + "17010102.json";
    huc8_17010103_geojson = this.huc8_layers_dir + "17010103.json";
    huc8_17010104_geojson = this.huc8_layers_dir + "17010104.json";
    huc8_17010105_geojson = this.huc8_layers_dir + "17010105.json";
    huc8_17010106_geojson = this.huc8_layers_dir + "17010106.json";
    huc8_17010107_geojson = this.huc8_layers_dir + "17010107.json";
    huc8_17010108_geojson = this.huc8_layers_dir + "17010108.json";
    huc8_17010109_geojson = this.huc8_layers_dir + "17010109.json";
    huc8_17010110_geojson = this.huc8_layers_dir + "17010110.json";
    huc8_17010201_geojson = this.huc8_layers_dir + "17010201.json";
    huc8_17010202_geojson = this.huc8_layers_dir + "17010202.json";
    huc8_17010203_geojson = this.huc8_layers_dir + "17010203.json";
    huc8_17010204_geojson = this.huc8_layers_dir + "17010204.json";
    huc8_17010205_geojson = this.huc8_layers_dir + "17010205.json";
    huc8_17010206_geojson = this.huc8_layers_dir + "17010206.json";
    huc8_17010207_geojson = this.huc8_layers_dir + "17010207.json";
    huc8_17010208_geojson = this.huc8_layers_dir + "17010208.json";
    huc8_17010209_geojson = this.huc8_layers_dir + "17010209.json";
    huc8_17010210_geojson = this.huc8_layers_dir + "17010210.json";
    huc8_17010211_geojson = this.huc8_layers_dir + "17010211.json";
    huc8_17010212_geojson = this.huc8_layers_dir + "17010212.json";
    huc8_17010213_geojson = this.huc8_layers_dir + "17010213.json";
    huc8_17010214_geojson = this.huc8_layers_dir + "17010214.json";
    huc8_17010215_geojson = this.huc8_layers_dir + "17010215.json";
    huc8_17010216_geojson = this.huc8_layers_dir + "17010216.json";
    huc8_17010301_geojson = this.huc8_layers_dir + "17010301.json";
    huc8_17010302_geojson = this.huc8_layers_dir + "17010302.json";
    huc8_17010303_geojson = this.huc8_layers_dir + "17010303.json";
    huc8_17010304_geojson = this.huc8_layers_dir + "17010304.json";
    huc8_17010305_geojson = this.huc8_layers_dir + "17010305.json";
    huc8_17010306_geojson = this.huc8_layers_dir + "17010306.json";
    huc8_17010307_geojson = this.huc8_layers_dir + "17010307.json";
    huc8_17010308_geojson = this.huc8_layers_dir + "17010308.json";
    huc8_17020001_geojson = this.huc8_layers_dir + "17020001.json";
    huc8_17020002_geojson = this.huc8_layers_dir + "17020002.json";
    huc8_17020003_geojson = this.huc8_layers_dir + "17020003.json";
    huc8_17020004_geojson = this.huc8_layers_dir + "17020004.json";
    huc8_17020005_geojson = this.huc8_layers_dir + "17020005.json";
    huc8_17020006_geojson = this.huc8_layers_dir + "17020006.json";
    huc8_17020007_geojson = this.huc8_layers_dir + "17020007.json";
    huc8_17020008_geojson = this.huc8_layers_dir + "17020008.json";
    huc8_17020009_geojson = this.huc8_layers_dir + "17020009.json";
    huc8_17020010_geojson = this.huc8_layers_dir + "17020010.json";
    huc8_17020011_geojson = this.huc8_layers_dir + "17020011.json";
    huc8_17020012_geojson = this.huc8_layers_dir + "17020012.json";
    huc8_17020013_geojson = this.huc8_layers_dir + "17020013.json";
    huc8_17020014_geojson = this.huc8_layers_dir + "17020014.json";
    huc8_17020015_geojson = this.huc8_layers_dir + "17020015.json";
    huc8_17020016_geojson = this.huc8_layers_dir + "17020016.json";
    huc8_17020017_geojson = this.huc8_layers_dir + "17020017.json";
    huc8_17020018_geojson = this.huc8_layers_dir + "17020018.json";
    huc8_17020019_geojson = this.huc8_layers_dir + "17020019.json";
    huc8_17020020_geojson = this.huc8_layers_dir + "17020020.json";
    huc8_17020021_geojson = this.huc8_layers_dir + "17020021.json";
    huc8_17030001_geojson = this.huc8_layers_dir + "17030001.json";
    huc8_17030002_geojson = this.huc8_layers_dir + "17030002.json";
    huc8_17030003_geojson = this.huc8_layers_dir + "17030003.json";
    huc8_17040101_geojson = this.huc8_layers_dir + "17040101.json";
    huc8_17040102_geojson = this.huc8_layers_dir + "17040102.json";
    huc8_17040103_geojson = this.huc8_layers_dir + "17040103.json";
    huc8_17040104_geojson = this.huc8_layers_dir + "17040104.json";
    huc8_17040105_geojson = this.huc8_layers_dir + "17040105.json";
    huc8_17040201_geojson = this.huc8_layers_dir + "17040201.json";
    huc8_17040202_geojson = this.huc8_layers_dir + "17040202.json";
    huc8_17040203_geojson = this.huc8_layers_dir + "17040203.json";
    huc8_17040204_geojson = this.huc8_layers_dir + "17040204.json";
    huc8_17040205_geojson = this.huc8_layers_dir + "17040205.json";
    huc8_17040206_geojson = this.huc8_layers_dir + "17040206.json";
    huc8_17040207_geojson = this.huc8_layers_dir + "17040207.json";
    huc8_17040208_geojson = this.huc8_layers_dir + "17040208.json";
    huc8_17040209_geojson = this.huc8_layers_dir + "17040209.json";
    huc8_17040210_geojson = this.huc8_layers_dir + "17040210.json";
    huc8_17040211_geojson = this.huc8_layers_dir + "17040211.json";
    huc8_17040212_geojson = this.huc8_layers_dir + "17040212.json";
    huc8_17040213_geojson = this.huc8_layers_dir + "17040213.json";
    huc8_17040214_geojson = this.huc8_layers_dir + "17040214.json";
    huc8_17040215_geojson = this.huc8_layers_dir + "17040215.json";
    huc8_17040216_geojson = this.huc8_layers_dir + "17040216.json";
    huc8_17040217_geojson = this.huc8_layers_dir + "17040217.json";
    huc8_17040218_geojson = this.huc8_layers_dir + "17040218.json";
    huc8_17040219_geojson = this.huc8_layers_dir + "17040219.json";
    huc8_17040220_geojson = this.huc8_layers_dir + "17040220.json";
    huc8_17040221_geojson = this.huc8_layers_dir + "17040221.json";
    huc8_17050101_geojson = this.huc8_layers_dir + "17050101.json";
    huc8_17050102_geojson = this.huc8_layers_dir + "17050102.json";
    huc8_17050103_geojson = this.huc8_layers_dir + "17050103.json";
    huc8_17050104_geojson = this.huc8_layers_dir + "17050104.json";
    huc8_17050105_geojson = this.huc8_layers_dir + "17050105.json";
    huc8_17050106_geojson = this.huc8_layers_dir + "17050106.json";
    huc8_17050107_geojson = this.huc8_layers_dir + "17050107.json";
    huc8_17050108_geojson = this.huc8_layers_dir + "17050108.json";
    huc8_17050109_geojson = this.huc8_layers_dir + "17050109.json";
    huc8_17050110_geojson = this.huc8_layers_dir + "17050110.json";
    huc8_17050111_geojson = this.huc8_layers_dir + "17050111.json";
    huc8_17050112_geojson = this.huc8_layers_dir + "17050112.json";
    huc8_17050113_geojson = this.huc8_layers_dir + "17050113.json";
    huc8_17050114_geojson = this.huc8_layers_dir + "17050114.json";
    huc8_17050115_geojson = this.huc8_layers_dir + "17050115.json";
    huc8_17050116_geojson = this.huc8_layers_dir + "17050116.json";
    huc8_17050117_geojson = this.huc8_layers_dir + "17050117.json";
    huc8_17050118_geojson = this.huc8_layers_dir + "17050118.json";
    huc8_17050119_geojson = this.huc8_layers_dir + "17050119.json";
    huc8_17050120_geojson = this.huc8_layers_dir + "17050120.json";
    huc8_17050121_geojson = this.huc8_layers_dir + "17050121.json";
    huc8_17050122_geojson = this.huc8_layers_dir + "17050122.json";
    huc8_17050123_geojson = this.huc8_layers_dir + "17050123.json";
    huc8_17050124_geojson = this.huc8_layers_dir + "17050124.json";
    huc8_17050201_geojson = this.huc8_layers_dir + "17050201.json";
    huc8_17050202_geojson = this.huc8_layers_dir + "17050202.json";
    huc8_17050203_geojson = this.huc8_layers_dir + "17050203.json";
    huc8_17060101_geojson = this.huc8_layers_dir + "17060101.json";
    huc8_17060102_geojson = this.huc8_layers_dir + "17060102.json";
    huc8_17060103_geojson = this.huc8_layers_dir + "17060103.json";
    huc8_17060104_geojson = this.huc8_layers_dir + "17060104.json";
    huc8_17060105_geojson = this.huc8_layers_dir + "17060105.json";
    huc8_17060106_geojson = this.huc8_layers_dir + "17060106.json";
    huc8_17060107_geojson = this.huc8_layers_dir + "17060107.json";
    huc8_17060108_geojson = this.huc8_layers_dir + "17060108.json";
    huc8_17060109_geojson = this.huc8_layers_dir + "17060109.json";
    huc8_17060110_geojson = this.huc8_layers_dir + "17060110.json";
    huc8_17060201_geojson = this.huc8_layers_dir + "17060201.json";
    huc8_17060202_geojson = this.huc8_layers_dir + "17060202.json";
    huc8_17060203_geojson = this.huc8_layers_dir + "17060203.json";
    huc8_17060204_geojson = this.huc8_layers_dir + "17060204.json";
    huc8_17060205_geojson = this.huc8_layers_dir + "17060205.json";
    huc8_17060206_geojson = this.huc8_layers_dir + "17060206.json";
    huc8_17060207_geojson = this.huc8_layers_dir + "17060207.json";
    huc8_17060208_geojson = this.huc8_layers_dir + "17060208.json";
    huc8_17060209_geojson = this.huc8_layers_dir + "17060209.json";
    huc8_17060210_geojson = this.huc8_layers_dir + "17060210.json";
    huc8_17060301_geojson = this.huc8_layers_dir + "17060301.json";
    huc8_17060302_geojson = this.huc8_layers_dir + "17060302.json";
    huc8_17060303_geojson = this.huc8_layers_dir + "17060303.json";
    huc8_17060304_geojson = this.huc8_layers_dir + "17060304.json";
    huc8_17060305_geojson = this.huc8_layers_dir + "17060305.json";
    huc8_17060306_geojson = this.huc8_layers_dir + "17060306.json";
    huc8_17060307_geojson = this.huc8_layers_dir + "17060307.json";
    huc8_17060308_geojson = this.huc8_layers_dir + "17060308.json";
    huc8_17070101_geojson = this.huc8_layers_dir + "17070101.json";
    huc8_17070102_geojson = this.huc8_layers_dir + "17070102.json";
    huc8_17070103_geojson = this.huc8_layers_dir + "17070103.json";
    huc8_17070104_geojson = this.huc8_layers_dir + "17070104.json";
    huc8_17070105_geojson = this.huc8_layers_dir + "17070105.json";
    huc8_17070106_geojson = this.huc8_layers_dir + "17070106.json";
    huc8_17070201_geojson = this.huc8_layers_dir + "17070201.json";
    huc8_17070202_geojson = this.huc8_layers_dir + "17070202.json";
    huc8_17070203_geojson = this.huc8_layers_dir + "17070203.json";
    huc8_17070204_geojson = this.huc8_layers_dir + "17070204.json";
    huc8_17070301_geojson = this.huc8_layers_dir + "17070301.json";
    huc8_17070302_geojson = this.huc8_layers_dir + "17070302.json";
    huc8_17070303_geojson = this.huc8_layers_dir + "17070303.json";
    huc8_17070304_geojson = this.huc8_layers_dir + "17070304.json";
    huc8_17070305_geojson = this.huc8_layers_dir + "17070305.json";
    huc8_17070306_geojson = this.huc8_layers_dir + "17070306.json";
    huc8_17070307_geojson = this.huc8_layers_dir + "17070307.json";
    huc8_17080001_geojson = this.huc8_layers_dir + "17080001.json";
    huc8_17080002_geojson = this.huc8_layers_dir + "17080002.json";
    huc8_17080003_geojson = this.huc8_layers_dir + "17080003.json";
    huc8_17080004_geojson = this.huc8_layers_dir + "17080004.json";
    huc8_17080005_geojson = this.huc8_layers_dir + "17080005.json";
    huc8_17080006_geojson = this.huc8_layers_dir + "17080006.json";
    huc8_17090001_geojson = this.huc8_layers_dir + "17090001.json";
    huc8_17090002_geojson = this.huc8_layers_dir + "17090002.json";
    huc8_17090003_geojson = this.huc8_layers_dir + "17090003.json";
    huc8_17090004_geojson = this.huc8_layers_dir + "17090004.json";
    huc8_17090005_geojson = this.huc8_layers_dir + "17090005.json";
    huc8_17090006_geojson = this.huc8_layers_dir + "17090006.json";
    huc8_17090007_geojson = this.huc8_layers_dir + "17090007.json";
    huc8_17090008_geojson = this.huc8_layers_dir + "17090008.json";
    huc8_17090009_geojson = this.huc8_layers_dir + "17090009.json";
    huc8_17090010_geojson = this.huc8_layers_dir + "17090010.json";
    huc8_17090011_geojson = this.huc8_layers_dir + "17090011.json";
    huc8_17090012_geojson = this.huc8_layers_dir + "17090012.json";
    huc8_17100101_geojson = this.huc8_layers_dir + "17100101.json";
    huc8_17100102_geojson = this.huc8_layers_dir + "17100102.json";
    huc8_17100103_geojson = this.huc8_layers_dir + "17100103.json";
    huc8_17100104_geojson = this.huc8_layers_dir + "17100104.json";
    huc8_17100105_geojson = this.huc8_layers_dir + "17100105.json";
    huc8_17100106_geojson = this.huc8_layers_dir + "17100106.json";
    huc8_17100201_geojson = this.huc8_layers_dir + "17100201.json";
    huc8_17100202_geojson = this.huc8_layers_dir + "17100202.json";
    huc8_17100203_geojson = this.huc8_layers_dir + "17100203.json";
    huc8_17100204_geojson = this.huc8_layers_dir + "17100204.json";
    huc8_17100205_geojson = this.huc8_layers_dir + "17100205.json";
    huc8_17100206_geojson = this.huc8_layers_dir + "17100206.json";
    huc8_17100207_geojson = this.huc8_layers_dir + "17100207.json";
    huc8_17100301_geojson = this.huc8_layers_dir + "17100301.json";
    huc8_17100302_geojson = this.huc8_layers_dir + "17100302.json";
    huc8_17100303_geojson = this.huc8_layers_dir + "17100303.json";
    huc8_17100304_geojson = this.huc8_layers_dir + "17100304.json";
    huc8_17100305_geojson = this.huc8_layers_dir + "17100305.json";
    huc8_17100306_geojson = this.huc8_layers_dir + "17100306.json";
    huc8_17100307_geojson = this.huc8_layers_dir + "17100307.json";
    huc8_17100308_geojson = this.huc8_layers_dir + "17100308.json";
    huc8_17100309_geojson = this.huc8_layers_dir + "17100309.json";
    huc8_17100310_geojson = this.huc8_layers_dir + "17100310.json";
    huc8_17100311_geojson = this.huc8_layers_dir + "17100311.json";
    huc8_17100312_geojson = this.huc8_layers_dir + "17100312.json";
    huc8_17110001_geojson = this.huc8_layers_dir + "17110001.json";
    huc8_17110002_geojson = this.huc8_layers_dir + "17110002.json";
    huc8_17110003_geojson = this.huc8_layers_dir + "17110003.json";
    huc8_17110004_geojson = this.huc8_layers_dir + "17110004.json";
    huc8_17110005_geojson = this.huc8_layers_dir + "17110005.json";
    huc8_17110006_geojson = this.huc8_layers_dir + "17110006.json";
    huc8_17110007_geojson = this.huc8_layers_dir + "17110007.json";
    huc8_17110008_geojson = this.huc8_layers_dir + "17110008.json";
    huc8_17110009_geojson = this.huc8_layers_dir + "17110009.json";
    huc8_17110010_geojson = this.huc8_layers_dir + "17110010.json";
    huc8_17110011_geojson = this.huc8_layers_dir + "17110011.json";
    huc8_17110012_geojson = this.huc8_layers_dir + "17110012.json";
    huc8_17110013_geojson = this.huc8_layers_dir + "17110013.json";
    huc8_17110014_geojson = this.huc8_layers_dir + "17110014.json";
    huc8_17110015_geojson = this.huc8_layers_dir + "17110015.json";
    huc8_17110016_geojson = this.huc8_layers_dir + "17110016.json";
    huc8_17110017_geojson = this.huc8_layers_dir + "17110017.json";
    huc8_17110018_geojson = this.huc8_layers_dir + "17110018.json";
    huc8_17110019_geojson = this.huc8_layers_dir + "17110019.json";
    huc8_17110020_geojson = this.huc8_layers_dir + "17110020.json";
    huc8_17110021_geojson = this.huc8_layers_dir + "17110021.json";
    huc8_17120001_geojson = this.huc8_layers_dir + "17120001.json";
    huc8_17120002_geojson = this.huc8_layers_dir + "17120002.json";
    huc8_17120003_geojson = this.huc8_layers_dir + "17120003.json";
    huc8_17120004_geojson = this.huc8_layers_dir + "17120004.json";
    huc8_17120005_geojson = this.huc8_layers_dir + "17120005.json";
    huc8_17120006_geojson = this.huc8_layers_dir + "17120006.json";
    huc8_17120007_geojson = this.huc8_layers_dir + "17120007.json";
    huc8_17120008_geojson = this.huc8_layers_dir + "17120008.json";
    huc8_17120009_geojson = this.huc8_layers_dir + "17120009.json";
    huc8_18010101_geojson = this.huc8_layers_dir + "18010101.json";
    huc8_18010102_geojson = this.huc8_layers_dir + "18010102.json";
    huc8_18010103_geojson = this.huc8_layers_dir + "18010103.json";
    huc8_18010104_geojson = this.huc8_layers_dir + "18010104.json";
    huc8_18010105_geojson = this.huc8_layers_dir + "18010105.json";
    huc8_18010106_geojson = this.huc8_layers_dir + "18010106.json";
    huc8_18010107_geojson = this.huc8_layers_dir + "18010107.json";
    huc8_18010108_geojson = this.huc8_layers_dir + "18010108.json";
    huc8_18010109_geojson = this.huc8_layers_dir + "18010109.json";
    huc8_18010110_geojson = this.huc8_layers_dir + "18010110.json";
    huc8_18010201_geojson = this.huc8_layers_dir + "18010201.json";
    huc8_18010202_geojson = this.huc8_layers_dir + "18010202.json";
    huc8_18010203_geojson = this.huc8_layers_dir + "18010203.json";
    huc8_18010204_geojson = this.huc8_layers_dir + "18010204.json";
    huc8_18010205_geojson = this.huc8_layers_dir + "18010205.json";
    huc8_18010206_geojson = this.huc8_layers_dir + "18010206.json";
    huc8_18010207_geojson = this.huc8_layers_dir + "18010207.json";
    huc8_18010208_geojson = this.huc8_layers_dir + "18010208.json";
    huc8_18010209_geojson = this.huc8_layers_dir + "18010209.json";
    huc8_18010210_geojson = this.huc8_layers_dir + "18010210.json";
    huc8_18010211_geojson = this.huc8_layers_dir + "18010211.json";
    huc8_18010212_geojson = this.huc8_layers_dir + "18010212.json";
    huc8_18020001_geojson = this.huc8_layers_dir + "18020001.json";
    huc8_18020002_geojson = this.huc8_layers_dir + "18020002.json";
    huc8_18020003_geojson = this.huc8_layers_dir + "18020003.json";
    huc8_18020004_geojson = this.huc8_layers_dir + "18020004.json";
    huc8_18020005_geojson = this.huc8_layers_dir + "18020005.json";
    huc8_18020104_geojson = this.huc8_layers_dir + "18020104.json";
    huc8_18020111_geojson = this.huc8_layers_dir + "18020111.json";
    huc8_18020115_geojson = this.huc8_layers_dir + "18020115.json";
    huc8_18020116_geojson = this.huc8_layers_dir + "18020116.json";
    huc8_18020121_geojson = this.huc8_layers_dir + "18020121.json";
    huc8_18020122_geojson = this.huc8_layers_dir + "18020122.json";
    huc8_18020123_geojson = this.huc8_layers_dir + "18020123.json";
    huc8_18020125_geojson = this.huc8_layers_dir + "18020125.json";
    huc8_18020126_geojson = this.huc8_layers_dir + "18020126.json";
    huc8_18020128_geojson = this.huc8_layers_dir + "18020128.json";
    huc8_18020129_geojson = this.huc8_layers_dir + "18020129.json";
    huc8_18020151_geojson = this.huc8_layers_dir + "18020151.json";
    huc8_18020152_geojson = this.huc8_layers_dir + "18020152.json";
    huc8_18020153_geojson = this.huc8_layers_dir + "18020153.json";
    huc8_18020154_geojson = this.huc8_layers_dir + "18020154.json";
    huc8_18020155_geojson = this.huc8_layers_dir + "18020155.json";
    huc8_18020156_geojson = this.huc8_layers_dir + "18020156.json";
    huc8_18020157_geojson = this.huc8_layers_dir + "18020157.json";
    huc8_18020158_geojson = this.huc8_layers_dir + "18020158.json";
    huc8_18020159_geojson = this.huc8_layers_dir + "18020159.json";
    huc8_18020161_geojson = this.huc8_layers_dir + "18020161.json";
    huc8_18020162_geojson = this.huc8_layers_dir + "18020162.json";
    huc8_18020163_geojson = this.huc8_layers_dir + "18020163.json";
    huc8_18030001_geojson = this.huc8_layers_dir + "18030001.json";
    huc8_18030002_geojson = this.huc8_layers_dir + "18030002.json";
    huc8_18030003_geojson = this.huc8_layers_dir + "18030003.json";
    huc8_18030004_geojson = this.huc8_layers_dir + "18030004.json";
    huc8_18030005_geojson = this.huc8_layers_dir + "18030005.json";
    huc8_18030006_geojson = this.huc8_layers_dir + "18030006.json";
    huc8_18030007_geojson = this.huc8_layers_dir + "18030007.json";
    huc8_18030009_geojson = this.huc8_layers_dir + "18030009.json";
    huc8_18030010_geojson = this.huc8_layers_dir + "18030010.json";
    huc8_18030012_geojson = this.huc8_layers_dir + "18030012.json";
    huc8_18040001_geojson = this.huc8_layers_dir + "18040001.json";
    huc8_18040002_geojson = this.huc8_layers_dir + "18040002.json";
    huc8_18040003_geojson = this.huc8_layers_dir + "18040003.json";
    huc8_18040006_geojson = this.huc8_layers_dir + "18040006.json";
    huc8_18040007_geojson = this.huc8_layers_dir + "18040007.json";
    huc8_18040008_geojson = this.huc8_layers_dir + "18040008.json";
    huc8_18040009_geojson = this.huc8_layers_dir + "18040009.json";
    huc8_18040010_geojson = this.huc8_layers_dir + "18040010.json";
    huc8_18040011_geojson = this.huc8_layers_dir + "18040011.json";
    huc8_18040012_geojson = this.huc8_layers_dir + "18040012.json";
    huc8_18040013_geojson = this.huc8_layers_dir + "18040013.json";
    huc8_18040014_geojson = this.huc8_layers_dir + "18040014.json";
    huc8_18040051_geojson = this.huc8_layers_dir + "18040051.json";
    huc8_18050001_geojson = this.huc8_layers_dir + "18050001.json";
    huc8_18050002_geojson = this.huc8_layers_dir + "18050002.json";
    huc8_18050003_geojson = this.huc8_layers_dir + "18050003.json";
    huc8_18050004_geojson = this.huc8_layers_dir + "18050004.json";
    huc8_18050005_geojson = this.huc8_layers_dir + "18050005.json";
    huc8_18050006_geojson = this.huc8_layers_dir + "18050006.json";
    huc8_18060002_geojson = this.huc8_layers_dir + "18060002.json";
    huc8_18060003_geojson = this.huc8_layers_dir + "18060003.json";
    huc8_18060004_geojson = this.huc8_layers_dir + "18060004.json";
    huc8_18060006_geojson = this.huc8_layers_dir + "18060006.json";
    huc8_18060007_geojson = this.huc8_layers_dir + "18060007.json";
    huc8_18060009_geojson = this.huc8_layers_dir + "18060009.json";
    huc8_18060010_geojson = this.huc8_layers_dir + "18060010.json";
    huc8_18060013_geojson = this.huc8_layers_dir + "18060013.json";
    huc8_18070101_geojson = this.huc8_layers_dir + "18070101.json";
    huc8_18070102_geojson = this.huc8_layers_dir + "18070102.json";
    huc8_18070103_geojson = this.huc8_layers_dir + "18070103.json";
    huc8_18070104_geojson = this.huc8_layers_dir + "18070104.json";
    huc8_18070105_geojson = this.huc8_layers_dir + "18070105.json";
    huc8_18070106_geojson = this.huc8_layers_dir + "18070106.json";
    huc8_18070201_geojson = this.huc8_layers_dir + "18070201.json";
    huc8_18070202_geojson = this.huc8_layers_dir + "18070202.json";
    huc8_18070204_geojson = this.huc8_layers_dir + "18070204.json";
    huc8_18070301_geojson = this.huc8_layers_dir + "18070301.json";
    huc8_18070302_geojson = this.huc8_layers_dir + "18070302.json";
    huc8_18070303_geojson = this.huc8_layers_dir + "18070303.json";
    huc8_18070304_geojson = this.huc8_layers_dir + "18070304.json";
    huc8_18070305_geojson = this.huc8_layers_dir + "18070305.json";
    huc8_18080001_geojson = this.huc8_layers_dir + "18080001.json";
    huc8_18080002_geojson = this.huc8_layers_dir + "18080002.json";
    huc8_18080003_geojson = this.huc8_layers_dir + "18080003.json";
    huc8_18090101_geojson = this.huc8_layers_dir + "18090101.json";
    huc8_18090102_geojson = this.huc8_layers_dir + "18090102.json";
    huc8_18090103_geojson = this.huc8_layers_dir + "18090103.json";
    huc8_18090201_geojson = this.huc8_layers_dir + "18090201.json";
    huc8_18090202_geojson = this.huc8_layers_dir + "18090202.json";
    huc8_18090203_geojson = this.huc8_layers_dir + "18090203.json";
    huc8_18090204_geojson = this.huc8_layers_dir + "18090204.json";
    huc8_18090205_geojson = this.huc8_layers_dir + "18090205.json";
    huc8_18090206_geojson = this.huc8_layers_dir + "18090206.json";
    huc8_18090207_geojson = this.huc8_layers_dir + "18090207.json";
    huc8_18090208_geojson = this.huc8_layers_dir + "18090208.json";
    huc8_18100100_geojson = this.huc8_layers_dir + "18100100.json";
    huc8_18100201_geojson = this.huc8_layers_dir + "18100201.json";
    huc8_18100202_geojson = this.huc8_layers_dir + "18100202.json";
    huc8_18100203_geojson = this.huc8_layers_dir + "18100203.json";
    huc8_18100204_geojson = this.huc8_layers_dir + "18100204.json";
    huc8_19010102_geojson = this.huc8_layers_dir + "19010102.json";
    huc8_19010103_geojson = this.huc8_layers_dir + "19010103.json";
    huc8_19010104_geojson = this.huc8_layers_dir + "19010104.json";
    huc8_19010105_geojson = this.huc8_layers_dir + "19010105.json";
    huc8_19010106_geojson = this.huc8_layers_dir + "19010106.json";
    huc8_19010107_geojson = this.huc8_layers_dir + "19010107.json";
    huc8_19010204_geojson = this.huc8_layers_dir + "19010204.json";
    huc8_19010205_geojson = this.huc8_layers_dir + "19010205.json";
    huc8_19010206_geojson = this.huc8_layers_dir + "19010206.json";
    huc8_19010207_geojson = this.huc8_layers_dir + "19010207.json";
    huc8_19010208_geojson = this.huc8_layers_dir + "19010208.json";
    huc8_19010209_geojson = this.huc8_layers_dir + "19010209.json";
    huc8_19010210_geojson = this.huc8_layers_dir + "19010210.json";
    huc8_19010212_geojson = this.huc8_layers_dir + "19010212.json";
    huc8_19010301_geojson = this.huc8_layers_dir + "19010301.json";
    huc8_19010302_geojson = this.huc8_layers_dir + "19010302.json";
    huc8_19010303_geojson = this.huc8_layers_dir + "19010303.json";
    huc8_19010304_geojson = this.huc8_layers_dir + "19010304.json";
    huc8_19010402_geojson = this.huc8_layers_dir + "19010402.json";
    huc8_19010403_geojson = this.huc8_layers_dir + "19010403.json";
    huc8_19010404_geojson = this.huc8_layers_dir + "19010404.json";
    huc8_19010405_geojson = this.huc8_layers_dir + "19010405.json";
    huc8_19010406_geojson = this.huc8_layers_dir + "19010406.json";
    huc8_19020101_geojson = this.huc8_layers_dir + "19020101.json";
    huc8_19020102_geojson = this.huc8_layers_dir + "19020102.json";
    huc8_19020103_geojson = this.huc8_layers_dir + "19020103.json";
    huc8_19020104_geojson = this.huc8_layers_dir + "19020104.json";
    huc8_19020201_geojson = this.huc8_layers_dir + "19020201.json";
    huc8_19020202_geojson = this.huc8_layers_dir + "19020202.json";
    huc8_19020203_geojson = this.huc8_layers_dir + "19020203.json";
    huc8_19020301_geojson = this.huc8_layers_dir + "19020301.json";
    huc8_19020302_geojson = this.huc8_layers_dir + "19020302.json";
    huc8_19020401_geojson = this.huc8_layers_dir + "19020401.json";
    huc8_19020402_geojson = this.huc8_layers_dir + "19020402.json";
    huc8_19020501_geojson = this.huc8_layers_dir + "19020501.json";
    huc8_19020502_geojson = this.huc8_layers_dir + "19020502.json";
    huc8_19020503_geojson = this.huc8_layers_dir + "19020503.json";
    huc8_19020504_geojson = this.huc8_layers_dir + "19020504.json";
    huc8_19020505_geojson = this.huc8_layers_dir + "19020505.json";
    huc8_19020601_geojson = this.huc8_layers_dir + "19020601.json";
    huc8_19020701_geojson = this.huc8_layers_dir + "19020701.json";
    huc8_19020702_geojson = this.huc8_layers_dir + "19020702.json";
    huc8_19020800_geojson = this.huc8_layers_dir + "19020800.json";
    huc8_19030102_geojson = this.huc8_layers_dir + "19030102.json";
    huc8_19030103_geojson = this.huc8_layers_dir + "19030103.json";
    huc8_19030104_geojson = this.huc8_layers_dir + "19030104.json";
    huc8_19030201_geojson = this.huc8_layers_dir + "19030201.json";
    huc8_19030202_geojson = this.huc8_layers_dir + "19030202.json";
    huc8_19030203_geojson = this.huc8_layers_dir + "19030203.json";
    huc8_19030204_geojson = this.huc8_layers_dir + "19030204.json";
    huc8_19030205_geojson = this.huc8_layers_dir + "19030205.json";
    huc8_19030206_geojson = this.huc8_layers_dir + "19030206.json";
    huc8_19030301_geojson = this.huc8_layers_dir + "19030301.json";
    huc8_19030302_geojson = this.huc8_layers_dir + "19030302.json";
    huc8_19030303_geojson = this.huc8_layers_dir + "19030303.json";
    huc8_19030305_geojson = this.huc8_layers_dir + "19030305.json";
    huc8_19030306_geojson = this.huc8_layers_dir + "19030306.json";
    huc8_19030401_geojson = this.huc8_layers_dir + "19030401.json";
    huc8_19030403_geojson = this.huc8_layers_dir + "19030403.json";
    huc8_19030405_geojson = this.huc8_layers_dir + "19030405.json";
    huc8_19030407_geojson = this.huc8_layers_dir + "19030407.json";
    huc8_19030501_geojson = this.huc8_layers_dir + "19030501.json";
    huc8_19030502_geojson = this.huc8_layers_dir + "19030502.json";
    huc8_19030503_geojson = this.huc8_layers_dir + "19030503.json";
    huc8_19050101_geojson = this.huc8_layers_dir + "19050101.json";
    huc8_19050102_geojson = this.huc8_layers_dir + "19050102.json";
    huc8_19050103_geojson = this.huc8_layers_dir + "19050103.json";
    huc8_19050104_geojson = this.huc8_layers_dir + "19050104.json";
    huc8_19050105_geojson = this.huc8_layers_dir + "19050105.json";
    huc8_19050201_geojson = this.huc8_layers_dir + "19050201.json";
    huc8_19050203_geojson = this.huc8_layers_dir + "19050203.json";
    huc8_19050301_geojson = this.huc8_layers_dir + "19050301.json";
    huc8_19050302_geojson = this.huc8_layers_dir + "19050302.json";
    huc8_19050303_geojson = this.huc8_layers_dir + "19050303.json";
    huc8_19050304_geojson = this.huc8_layers_dir + "19050304.json";
    huc8_19050401_geojson = this.huc8_layers_dir + "19050401.json";
    huc8_19050402_geojson = this.huc8_layers_dir + "19050402.json";
    huc8_19050403_geojson = this.huc8_layers_dir + "19050403.json";
    huc8_19050404_geojson = this.huc8_layers_dir + "19050404.json";
    huc8_19050405_geojson = this.huc8_layers_dir + "19050405.json";
    huc8_19050500_geojson = this.huc8_layers_dir + "19050500.json";
    huc8_19060101_geojson = this.huc8_layers_dir + "19060101.json";
    huc8_19060102_geojson = this.huc8_layers_dir + "19060102.json";
    huc8_19060103_geojson = this.huc8_layers_dir + "19060103.json";
    huc8_19060201_geojson = this.huc8_layers_dir + "19060201.json";
    huc8_19060202_geojson = this.huc8_layers_dir + "19060202.json";
    huc8_19060203_geojson = this.huc8_layers_dir + "19060203.json";
    huc8_19060204_geojson = this.huc8_layers_dir + "19060204.json";
    huc8_19060205_geojson = this.huc8_layers_dir + "19060205.json";
    huc8_19060206_geojson = this.huc8_layers_dir + "19060206.json";
    huc8_19060301_geojson = this.huc8_layers_dir + "19060301.json";
    huc8_19060302_geojson = this.huc8_layers_dir + "19060302.json";
    huc8_19060303_geojson = this.huc8_layers_dir + "19060303.json";
    huc8_19060304_geojson = this.huc8_layers_dir + "19060304.json";
    huc8_19060401_geojson = this.huc8_layers_dir + "19060401.json";
    huc8_19060402_geojson = this.huc8_layers_dir + "19060402.json";
    huc8_19060403_geojson = this.huc8_layers_dir + "19060403.json";
    huc8_19060501_geojson = this.huc8_layers_dir + "19060501.json";
    huc8_19060502_geojson = this.huc8_layers_dir + "19060502.json";
    huc8_19060504_geojson = this.huc8_layers_dir + "19060504.json";
    huc8_19060505_geojson = this.huc8_layers_dir + "19060505.json";
    huc8_19060506_geojson = this.huc8_layers_dir + "19060506.json";
    huc8_19070101_geojson = this.huc8_layers_dir + "19070101.json";
    huc8_19070102_geojson = this.huc8_layers_dir + "19070102.json";
    huc8_19070103_geojson = this.huc8_layers_dir + "19070103.json";
    huc8_19070104_geojson = this.huc8_layers_dir + "19070104.json";
    huc8_19070402_geojson = this.huc8_layers_dir + "19070402.json";
    huc8_19070403_geojson = this.huc8_layers_dir + "19070403.json";
    huc8_19070502_geojson = this.huc8_layers_dir + "19070502.json";
    huc8_19070503_geojson = this.huc8_layers_dir + "19070503.json";
    huc8_19070505_geojson = this.huc8_layers_dir + "19070505.json";
    huc8_19070506_geojson = this.huc8_layers_dir + "19070506.json";
    huc8_19080103_geojson = this.huc8_layers_dir + "19080103.json";
    huc8_19080104_geojson = this.huc8_layers_dir + "19080104.json";
    huc8_19080105_geojson = this.huc8_layers_dir + "19080105.json";
    huc8_19080106_geojson = this.huc8_layers_dir + "19080106.json";
    huc8_19080107_geojson = this.huc8_layers_dir + "19080107.json";
    huc8_19080108_geojson = this.huc8_layers_dir + "19080108.json";
    huc8_19080201_geojson = this.huc8_layers_dir + "19080201.json";
    huc8_19080202_geojson = this.huc8_layers_dir + "19080202.json";
    huc8_19080203_geojson = this.huc8_layers_dir + "19080203.json";
    huc8_19080204_geojson = this.huc8_layers_dir + "19080204.json";
    huc8_19080301_geojson = this.huc8_layers_dir + "19080301.json";
    huc8_19080302_geojson = this.huc8_layers_dir + "19080302.json";
    huc8_19080303_geojson = this.huc8_layers_dir + "19080303.json";
    huc8_19080304_geojson = this.huc8_layers_dir + "19080304.json";
    huc8_19080305_geojson = this.huc8_layers_dir + "19080305.json";
    huc8_19080306_geojson = this.huc8_layers_dir + "19080306.json";
    huc8_19080307_geojson = this.huc8_layers_dir + "19080307.json";
    huc8_19080308_geojson = this.huc8_layers_dir + "19080308.json";
    huc8_19080309_geojson = this.huc8_layers_dir + "19080309.json";
    huc8_19080310_geojson = this.huc8_layers_dir + "19080310.json";
    huc8_19080311_geojson = this.huc8_layers_dir + "19080311.json";
    huc8_19080401_geojson = this.huc8_layers_dir + "19080401.json";
    huc8_19080402_geojson = this.huc8_layers_dir + "19080402.json";
    huc8_19080403_geojson = this.huc8_layers_dir + "19080403.json";
    huc8_19080404_geojson = this.huc8_layers_dir + "19080404.json";
    huc8_19090101_geojson = this.huc8_layers_dir + "19090101.json";
    huc8_19090102_geojson = this.huc8_layers_dir + "19090102.json";
    huc8_19090103_geojson = this.huc8_layers_dir + "19090103.json";
    huc8_19090104_geojson = this.huc8_layers_dir + "19090104.json";
    huc8_19090105_geojson = this.huc8_layers_dir + "19090105.json";
    huc8_19090106_geojson = this.huc8_layers_dir + "19090106.json";
    huc8_19090107_geojson = this.huc8_layers_dir + "19090107.json";
    huc8_19090108_geojson = this.huc8_layers_dir + "19090108.json";
    huc8_19090109_geojson = this.huc8_layers_dir + "19090109.json";
    huc8_19090201_geojson = this.huc8_layers_dir + "19090201.json";
    huc8_19090202_geojson = this.huc8_layers_dir + "19090202.json";
    huc8_19090203_geojson = this.huc8_layers_dir + "19090203.json";
    huc8_19090204_geojson = this.huc8_layers_dir + "19090204.json";
    huc8_19090205_geojson = this.huc8_layers_dir + "19090205.json";
    huc8_19090301_geojson = this.huc8_layers_dir + "19090301.json";
    huc8_19090302_geojson = this.huc8_layers_dir + "19090302.json";
    huc8_19090303_geojson = this.huc8_layers_dir + "19090303.json";
    huc8_19090304_geojson = this.huc8_layers_dir + "19090304.json";
    huc8_19090305_geojson = this.huc8_layers_dir + "19090305.json";
    huc8_20010000_geojson = this.huc8_layers_dir + "20010000.json";
    huc8_20020000_geojson = this.huc8_layers_dir + "20020000.json";
    huc8_20030000_geojson = this.huc8_layers_dir + "20030000.json";
    huc8_20040000_geojson = this.huc8_layers_dir + "20040000.json";
    huc8_20050000_geojson = this.huc8_layers_dir + "20050000.json";
    huc8_20060000_geojson = this.huc8_layers_dir + "20060000.json";
    huc8_20070000_geojson = this.huc8_layers_dir + "20070000.json";
    huc8_20080000_geojson = this.huc8_layers_dir + "20080000.json";
    huc8_21010002_geojson = this.huc8_layers_dir + "21010002.json";
    huc8_21010003_geojson = this.huc8_layers_dir + "21010003.json";
    huc8_21010004_geojson = this.huc8_layers_dir + "21010004.json";
    huc8_21010005_geojson = this.huc8_layers_dir + "21010005.json";
    huc8_21010006_geojson = this.huc8_layers_dir + "21010006.json";
    huc8_21020001_geojson = this.huc8_layers_dir + "21020001.json";
    huc8_21020002_geojson = this.huc8_layers_dir + "21020002.json";
    huc8_22010000_geojson = this.huc8_layers_dir + "22010000.json";
    huc8_22020000_geojson = this.huc8_layers_dir + "22020000.json";
    huc8_22030000_geojson = this.huc8_layers_dir + "22030000.json";

    huc8_show = {
    1010002: false,
    1010003: false,
    1010004: false,
    1010005: false,
    1010006: false,
    1010007: false,
    1010008: false,
    1010009: false,
    1010010: false,
    1010011: false,
    1020001: false,
    1020002: false,
    1020003: false,
    1020004: false,
    1020005: false,
    1030001: false,
    1030002: false,
    1030003: false,
    1040001: false,
    1040002: false,
    1050001: false,
    1050002: false,
    1050003: false,
    1050004: false,
    1060001: false,
    1060002: false,
    1060003: false,
    1070001: false,
    1070002: false,
    1070003: false,
    1070004: false,
    1070005: false,
    1070006: false,
    1080101: false,
    1080102: false,
    1080103: false,
    1080104: false,
    1080105: false,
    1080106: false,
    1080107: false,
    1080201: false,
    1080202: false,
    1080203: false,
    1080204: false,
    1080205: false,
    1080206: false,
    1080207: false,
    1090001: false,
    1090002: false,
    1090003: false,
    1090004: false,
    1090005: false,
    1100001: false,
    1100002: false,
    1100003: false,
    1100004: false,
    1100005: false,
    1100006: false,
    2020001: false,
    2020002: false,
    2020003: false,
    2020004: false,
    2020005: false,
    2020006: false,
    2020007: false,
    2020008: false,
    2030101: false,
    2030102: false,
    2030103: false,
    2030104: false,
    2030105: false,
    2030201: false,
    2030202: false,
    2030203: false,
    2040101: false,
    2040102: false,
    2040103: false,
    2040104: false,
    2040105: false,
    2040106: false,
    2040201: false,
    2040202: false,
    2040203: false,
    2040204: false,
    2040205: false,
    2040206: false,
    2040207: false,
    2040301: false,
    2040302: false,
    2040303: false,
    2040304: false,
    2050101: false,
    2050102: false,
    2050103: false,
    2050104: false,
    2050105: false,
    2050106: false,
    2050107: false,
    2050201: false,
    2050202: false,
    2050203: false,
    2050204: false,
    2050205: false,
    2050206: false,
    2050301: false,
    2050302: false,
    2050303: false,
    2050304: false,
    2050305: false,
    2050306: false,
    2060001: false,
    2060002: false,
    2060003: false,
    2060004: false,
    2060005: false,
    2060006: false,
    2070001: false,
    2070002: false,
    2070003: false,
    2070004: false,
    2070005: false,
    2070006: false,
    2070007: false,
    2070008: false,
    2070009: false,
    2070010: false,
    2070011: false,
    2080101: false,
    2080102: false,
    2080103: false,
    2080104: false,
    2080105: false,
    2080106: false,
    2080107: false,
    2080108: false,
    2080109: false,
    2080110: false,
    2080111: false,
    2080201: false,
    2080202: false,
    2080203: false,
    2080204: false,
    2080205: false,
    2080206: false,
    2080207: false,
    2080208: false,
    3010101: false,
    3010102: false,
    3010103: false,
    3010104: false,
    3010105: false,
    3010106: false,
    3010107: false,
    3010201: false,
    3010202: false,
    3010203: false,
    3010204: false,
    3010205: false,
    3020101: false,
    3020102: false,
    3020103: false,
    3020104: false,
    3020105: false,
    3020201: false,
    3020202: false,
    3020203: false,
    3020204: false,
    3020301: false,
    3020302: false,
    3030002: false,
    3030003: false,
    3030004: false,
    3030005: false,
    3030006: false,
    3030007: false,
    3040101: false,
    3040102: false,
    3040103: false,
    3040104: false,
    3040105: false,
    3040201: false,
    3040202: false,
    3040203: false,
    3040204: false,
    3040205: false,
    3040206: false,
    3040207: false,
    3040208: false,
    3050101: false,
    3050102: false,
    3050103: false,
    3050104: false,
    3050105: false,
    3050106: false,
    3050107: false,
    3050108: false,
    3050109: false,
    3050110: false,
    3050111: false,
    3050112: false,
    3050201: false,
    3050202: false,
    3050203: false,
    3050204: false,
    3050205: false,
    3050206: false,
    3050207: false,
    3050208: false,
    3050209: false,
    3050210: false,
    3060101: false,
    3060102: false,
    3060103: false,
    3060104: false,
    3060105: false,
    3060106: false,
    3060107: false,
    3060108: false,
    3060109: false,
    3060110: false,
    3060201: false,
    3060202: false,
    3060203: false,
    3060204: false,
    3070101: false,
    3070102: false,
    3070103: false,
    3070104: false,
    3070105: false,
    3070106: false,
    3070107: false,
    3070201: false,
    3070202: false,
    3070203: false,
    3070204: false,
    3070205: false,
    3080101: false,
    3080102: false,
    3080103: false,
    3080201: false,
    3080202: false,
    3080203: false,
    3090101: false,
    3090102: false,
    3090103: false,
    3090201: false,
    3090202: false,
    3090203: false,
    3090204: false,
    3090205: false,
    3090206: false,
    3100101: false,
    3100102: false,
    3100103: false,
    3100201: false,
    3100202: false,
    3100203: false,
    3100204: false,
    3100205: false,
    3100206: false,
    3100207: false,
    3100208: false,
    3110101: false,
    3110102: false,
    3110103: false,
    3110201: false,
    3110202: false,
    3110203: false,
    3110204: false,
    3110205: false,
    3110206: false,
    3120001: false,
    3120002: false,
    3120003: false,
    3130001: false,
    3130002: false,
    3130003: false,
    3130004: false,
    3130005: false,
    3130006: false,
    3130007: false,
    3130008: false,
    3130009: false,
    3130010: false,
    3130011: false,
    3130012: false,
    3130013: false,
    3130014: false,
    3140101: false,
    3140102: false,
    3140103: false,
    3140104: false,
    3140105: false,
    3140106: false,
    3140107: false,
    3140201: false,
    3140202: false,
    3140203: false,
    3140301: false,
    3140302: false,
    3140303: false,
    3140304: false,
    3140305: false,
    3150101: false,
    3150102: false,
    3150103: false,
    3150104: false,
    3150105: false,
    3150106: false,
    3150107: false,
    3150108: false,
    3150109: false,
    3150110: false,
    3150201: false,
    3150202: false,
    3150203: false,
    3150204: false,
    3160101: false,
    3160102: false,
    3160103: false,
    3160104: false,
    3160105: false,
    3160106: false,
    3160107: false,
    3160108: false,
    3160109: false,
    3160110: false,
    3160111: false,
    3160112: false,
    3160113: false,
    3160201: false,
    3160202: false,
    3160203: false,
    3160204: false,
    3160205: false,
    3170001: false,
    3170002: false,
    3170003: false,
    3170004: false,
    3170005: false,
    3170006: false,
    3170007: false,
    3170008: false,
    3170009: false,
    3180001: false,
    3180002: false,
    3180003: false,
    3180004: false,
    3180005: false,
    4010101: false,
    4010102: false,
    4010201: false,
    4010202: false,
    4010301: false,
    4010302: false,
    4020101: false,
    4020102: false,
    4020103: false,
    4020104: false,
    4020105: false,
    4020201: false,
    4020202: false,
    4020203: false,
    4020300: false,
    4030101: false,
    4030102: false,
    4030103: false,
    4030104: false,
    4030105: false,
    4030106: false,
    4030107: false,
    4030108: false,
    4030109: false,
    4030110: false,
    4030111: false,
    4030112: false,
    4030201: false,
    4030202: false,
    4030203: false,
    4030204: false,
    4040001: false,
    4040002: false,
    4040003: false,
    4050001: false,
    4050002: false,
    4050003: false,
    4050004: false,
    4050005: false,
    4050006: false,
    4050007: false,
    4060101: false,
    4060102: false,
    4060103: false,
    4060104: false,
    4060105: false,
    4060106: false,
    4060107: false,
    4060200: false,
    4070001: false,
    4070002: false,
    4070003: false,
    4070004: false,
    4070005: false,
    4070006: false,
    4070007: false,
    4080101: false,
    4080102: false,
    4080103: false,
    4080104: false,
    4080201: false,
    4080202: false,
    4080203: false,
    4080204: false,
    4080205: false,
    4080206: false,
    4080300: false,
    4090001: false,
    4090002: false,
    4090003: false,
    4090004: false,
    4090005: false,
    4100001: false,
    4100002: false,
    4100003: false,
    4100004: false,
    4100005: false,
    4100006: false,
    4100007: false,
    4100008: false,
    4100009: false,
    4100010: false,
    4100011: false,
    4100012: false,
    4110001: false,
    4110002: false,
    4110003: false,
    4110004: false,
    4120101: false,
    4120102: false,
    4120103: false,
    4120104: false,
    4120200: false,
    4130001: false,
    4130002: false,
    4130003: false,
    4140101: false,
    4140102: false,
    4140201: false,
    4140202: false,
    4140203: false,
    4150101: false,
    4150102: false,
    4150200: false,
    4150302: false,
    4150303: false,
    4150304: false,
    4150305: false,
    4150306: false,
    4150307: false,
    4150308: false,
    4150309: false,
    4150310: false,
    4150401: false,
    4150402: false,
    4150403: false,
    4150404: false,
    4150405: false,
    4150406: false,
    4150407: false,
    4150408: false,
    4150409: false,
    4150500: false,
    4150600: false,
    5010001: false,
    5010002: false,
    5010003: false,
    5010004: false,
    5010005: false,
    5010006: false,
    5010007: false,
    5010008: false,
    5010009: false,
    5020001: false,
    5020002: false,
    5020003: false,
    5020004: false,
    5020005: false,
    5020006: false,
    5030101: false,
    5030102: false,
    5030103: false,
    5030104: false,
    5030105: false,
    5030106: false,
    5030201: false,
    5030202: false,
    5030203: false,
    5030204: false,
    5040001: false,
    5040002: false,
    5040003: false,
    5040004: false,
    5040005: false,
    5040006: false,
    5050001: false,
    5050002: false,
    5050003: false,
    5050004: false,
    5050005: false,
    5050006: false,
    5050007: false,
    5050008: false,
    5050009: false,
    5060001: false,
    5060002: false,
    5060003: false,
    5070101: false,
    5070102: false,
    5070201: false,
    5070202: false,
    5070203: false,
    5070204: false,
    5080001: false,
    5080002: false,
    5080003: false,
    5090101: false,
    5090102: false,
    5090103: false,
    5090104: false,
    5090201: false,
    5090202: false,
    5090203: false,
    5100101: false,
    5100102: false,
    5100201: false,
    5100202: false,
    5100203: false,
    5100204: false,
    5100205: false,
    5110001: false,
    5110002: false,
    5110003: false,
    5110004: false,
    5110005: false,
    5110006: false,
    5120101: false,
    5120102: false,
    5120103: false,
    5120104: false,
    5120105: false,
    5120106: false,
    5120107: false,
    5120108: false,
    5120109: false,
    5120110: false,
    5120111: false,
    5120112: false,
    5120113: false,
    5120114: false,
    5120115: false,
    5120201: false,
    5120202: false,
    5120203: false,
    5120204: false,
    5120205: false,
    5120206: false,
    5120207: false,
    5120208: false,
    5120209: false,
    5130101: false,
    5130102: false,
    5130103: false,
    5130104: false,
    5130105: false,
    5130106: false,
    5130107: false,
    5130108: false,
    5130201: false,
    5130202: false,
    5130203: false,
    5130204: false,
    5130205: false,
    5130206: false,
    5140101: false,
    5140102: false,
    5140103: false,
    5140104: false,
    5140201: false,
    5140202: false,
    5140203: false,
    5140204: false,
    5140205: false,
    5140206: false,
    6010101: false,
    6010102: false,
    6010103: false,
    6010104: false,
    6010105: false,
    6010106: false,
    6010107: false,
    6010108: false,
    6010201: false,
    6010202: false,
    6010203: false,
    6010204: false,
    6010205: false,
    6010206: false,
    6010207: false,
    6010208: false,
    6020001: false,
    6020002: false,
    6020003: false,
    6020004: false,
    6030001: false,
    6030002: false,
    6030003: false,
    6030004: false,
    6030005: false,
    6030006: false,
    6040001: false,
    6040002: false,
    6040003: false,
    6040004: false,
    6040005: false,
    6040006: false,
    7010101: false,
    7010102: false,
    7010103: false,
    7010104: false,
    7010105: false,
    7010106: false,
    7010107: false,
    7010108: false,
    7010201: false,
    7010202: false,
    7010203: false,
    7010204: false,
    7010205: false,
    7010206: false,
    7010207: false,
    7020001: false,
    7020002: false,
    7020003: false,
    7020004: false,
    7020005: false,
    7020006: false,
    7020007: false,
    7020008: false,
    7020009: false,
    7020010: false,
    7020011: false,
    7020012: false,
    7030001: false,
    7030002: false,
    7030003: false,
    7030004: false,
    7030005: false,
    7040001: false,
    7040002: false,
    7040003: false,
    7040004: false,
    7040005: false,
    7040006: false,
    7040007: false,
    7040008: false,
    7050001: false,
    7050002: false,
    7050003: false,
    7050004: false,
    7050005: false,
    7050006: false,
    7050007: false,
    7060001: false,
    7060002: false,
    7060003: false,
    7060004: false,
    7060005: false,
    7060006: false,
    7070001: false,
    7070002: false,
    7070003: false,
    7070004: false,
    7070005: false,
    7070006: false,
    7080101: false,
    7080102: false,
    7080103: false,
    7080104: false,
    7080105: false,
    7080106: false,
    7080107: false,
    7080201: false,
    7080202: false,
    7080203: false,
    7080204: false,
    7080205: false,
    7080206: false,
    7080207: false,
    7080208: false,
    7080209: false,
    7090001: false,
    7090002: false,
    7090003: false,
    7090004: false,
    7090005: false,
    7090006: false,
    7090007: false,
    7100001: false,
    7100002: false,
    7100003: false,
    7100004: false,
    7100005: false,
    7100006: false,
    7100007: false,
    7100008: false,
    7100009: false,
    7110001: false,
    7110002: false,
    7110003: false,
    7110004: false,
    7110005: false,
    7110006: false,
    7110007: false,
    7110008: false,
    7110009: false,
    7120001: false,
    7120002: false,
    7120003: false,
    7120004: false,
    7120005: false,
    7120006: false,
    7120007: false,
    7130001: false,
    7130002: false,
    7130003: false,
    7130004: false,
    7130005: false,
    7130006: false,
    7130007: false,
    7130008: false,
    7130009: false,
    7130010: false,
    7130011: false,
    7130012: false,
    7140101: false,
    7140102: false,
    7140103: false,
    7140104: false,
    7140105: false,
    7140106: false,
    7140107: false,
    7140108: false,
    7140201: false,
    7140202: false,
    7140203: false,
    7140204: false,
    8010100: false,
    8010201: false,
    8010202: false,
    8010203: false,
    8010204: false,
    8010205: false,
    8010206: false,
    8010207: false,
    8010208: false,
    8010209: false,
    8010210: false,
    8010211: false,
    8020100: false,
    8020201: false,
    8020202: false,
    8020203: false,
    8020204: false,
    8020205: false,
    8020301: false,
    8020302: false,
    8020303: false,
    8020304: false,
    8020401: false,
    8020402: false,
    8030100: false,
    8030201: false,
    8030202: false,
    8030203: false,
    8030204: false,
    8030205: false,
    8030206: false,
    8030207: false,
    8030208: false,
    8030209: false,
    8040101: false,
    8040102: false,
    8040103: false,
    8040201: false,
    8040202: false,
    8040203: false,
    8040204: false,
    8040205: false,
    8040206: false,
    8040207: false,
    8040301: false,
    8040302: false,
    8040303: false,
    8040304: false,
    8040305: false,
    8040306: false,
    8050001: false,
    8050002: false,
    8050003: false,
    8060100: false,
    8060201: false,
    8060202: false,
    8060203: false,
    8060204: false,
    8060205: false,
    8060206: false,
    8070100: false,
    8070201: false,
    8070202: false,
    8070203: false,
    8070204: false,
    8070205: false,
    8070300: false,
    8080101: false,
    8080102: false,
    8080103: false,
    8080201: false,
    8080202: false,
    8080203: false,
    8080204: false,
    8080205: false,
    8080206: false,
    8090100: false,
    8090201: false,
    8090202: false,
    8090203: false,
    8090301: false,
    8090302: false,
    9010002: false,
    9010003: false,
    9010004: false,
    9010005: false,
    9010006: false,
    9010007: false,
    9010008: false,
    9010009: false,
    9020101: false,
    9020102: false,
    9020103: false,
    9020104: false,
    9020105: false,
    9020106: false,
    9020107: false,
    9020108: false,
    9020109: false,
    9020201: false,
    9020202: false,
    9020203: false,
    9020204: false,
    9020205: false,
    9020301: false,
    9020302: false,
    9020303: false,
    9020304: false,
    9020305: false,
    9020306: false,
    9020307: false,
    9020308: false,
    9020309: false,
    9020310: false,
    9020311: false,
    9020312: false,
    9020314: false,
    9020315: false,
    9020316: false,
    9020318: false,
    9020319: false,
    9030001: false,
    9030002: false,
    9030003: false,
    9030005: false,
    9030006: false,
    9030007: false,
    9030008: false,
    9030009: false,
    9030010: false,
    9030011: false,
    9040001: false,
    9040002: false,
    9040003: false,
    9040004: false,
    10020001: false,
    10020002: false,
    10020003: false,
    10020004: false,
    10020005: false,
    10020006: false,
    10020007: false,
    10020008: false,
    10030101: false,
    10030102: false,
    10030103: false,
    10030104: false,
    10030105: false,
    10030201: false,
    10030202: false,
    10030203: false,
    10030204: false,
    10030205: false,
    10040101: false,
    10040102: false,
    10040103: false,
    10040104: false,
    10040105: false,
    10040106: false,
    10040201: false,
    10040202: false,
    10040203: false,
    10040204: false,
    10040205: false,
    10050001: false,
    10050002: false,
    10050003: false,
    10050004: false,
    10050005: false,
    10050006: false,
    10050007: false,
    10050008: false,
    10050009: false,
    10050010: false,
    10050011: false,
    10050012: false,
    10050013: false,
    10050014: false,
    10050015: false,
    10050016: false,
    10060001: false,
    10060002: false,
    10060003: false,
    10060004: false,
    10060005: false,
    10060006: false,
    10060007: false,
    10070001: false,
    10070002: false,
    10070003: false,
    10070004: false,
    10070005: false,
    10070006: false,
    10070007: false,
    10070008: false,
    10080001: false,
    10080002: false,
    10080003: false,
    10080004: false,
    10080005: false,
    10080006: false,
    10080007: false,
    10080008: false,
    10080009: false,
    10080010: false,
    10080011: false,
    10080012: false,
    10080013: false,
    10080014: false,
    10080015: false,
    10080016: false,
    10090101: false,
    10090102: false,
    10090201: false,
    10090202: false,
    10090203: false,
    10090204: false,
    10090205: false,
    10090206: false,
    10090207: false,
    10090208: false,
    10090209: false,
    10090210: false,
    10100001: false,
    10100002: false,
    10100003: false,
    10100004: false,
    10100005: false,
    10110101: false,
    10110102: false,
    10110201: false,
    10110202: false,
    10110203: false,
    10110204: false,
    10110205: false,
    10120101: false,
    10120102: false,
    10120103: false,
    10120104: false,
    10120105: false,
    10120106: false,
    10120107: false,
    10120108: false,
    10120109: false,
    10120110: false,
    10120111: false,
    10120112: false,
    10120113: false,
    10120201: false,
    10120202: false,
    10120203: false,
    10130101: false,
    10130102: false,
    10130103: false,
    10130104: false,
    10130105: false,
    10130106: false,
    10130201: false,
    10130202: false,
    10130203: false,
    10130204: false,
    10130205: false,
    10130206: false,
    10130301: false,
    10130302: false,
    10130303: false,
    10130304: false,
    10130305: false,
    10130306: false,
    10140101: false,
    10140102: false,
    10140103: false,
    10140104: false,
    10140105: false,
    10140201: false,
    10140202: false,
    10140203: false,
    10140204: false,
    10150001: false,
    10150002: false,
    10150003: false,
    10150004: false,
    10150005: false,
    10150006: false,
    10150007: false,
    10160001: false,
    10160002: false,
    10160003: false,
    10160004: false,
    10160005: false,
    10160006: false,
    10160007: false,
    10160008: false,
    10160009: false,
    10160011: false,
    10170101: false,
    10170102: false,
    10170103: false,
    10170201: false,
    10170202: false,
    10170203: false,
    10170204: false,
    10180001: false,
    10180002: false,
    10180003: false,
    10180004: false,
    10180005: false,
    10180006: false,
    10180007: false,
    10180008: false,
    10180009: false,
    10180010: false,
    10180011: false,
    10180012: false,
    10180013: false,
    10180014: false,
    10190001: false,
    10190002: false,
    10190003: false,
    10190004: false,
    10190005: false,
    10190006: false,
    10190007: false,
    10190008: false,
    10190009: false,
    10190010: false,
    10190011: false,
    10190012: false,
    10190013: false,
    10190014: false,
    10190015: false,
    10190016: false,
    10190017: false,
    10190018: false,
    10200101: false,
    10200102: false,
    10200103: false,
    10200201: false,
    10200202: false,
    10200203: false,
    10210001: false,
    10210002: false,
    10210003: false,
    10210004: false,
    10210005: false,
    10210006: false,
    10210007: false,
    10210008: false,
    10210009: false,
    10210010: false,
    10220001: false,
    10220002: false,
    10220003: false,
    10220004: false,
    10230001: false,
    10230002: false,
    10230003: false,
    10230004: false,
    10230005: false,
    10230006: false,
    10230007: false,
    10240001: false,
    10240002: false,
    10240003: false,
    10240004: false,
    10240005: false,
    10240006: false,
    10240007: false,
    10240008: false,
    10240009: false,
    10240010: false,
    10240011: false,
    10240012: false,
    10240013: false,
    10250001: false,
    10250002: false,
    10250003: false,
    10250004: false,
    10250005: false,
    10250006: false,
    10250007: false,
    10250008: false,
    10250009: false,
    10250010: false,
    10250011: false,
    10250012: false,
    10250013: false,
    10250014: false,
    10250015: false,
    10250016: false,
    10250017: false,
    10260001: false,
    10260002: false,
    10260003: false,
    10260004: false,
    10260005: false,
    10260006: false,
    10260007: false,
    10260008: false,
    10260009: false,
    10260010: false,
    10260011: false,
    10260012: false,
    10260013: false,
    10260014: false,
    10260015: false,
    10270101: false,
    10270102: false,
    10270103: false,
    10270104: false,
    10270201: false,
    10270202: false,
    10270203: false,
    10270204: false,
    10270205: false,
    10270206: false,
    10270207: false,
    10280101: false,
    10280102: false,
    10280103: false,
    10280201: false,
    10280202: false,
    10280203: false,
    10290101: false,
    10290102: false,
    10290103: false,
    10290104: false,
    10290105: false,
    10290106: false,
    10290107: false,
    10290108: false,
    10290109: false,
    10290110: false,
    10290111: false,
    10290201: false,
    10290202: false,
    10290203: false,
    10300101: false,
    10300102: false,
    10300103: false,
    10300104: false,
    10300200: false,
    11010001: false,
    11010002: false,
    11010003: false,
    11010004: false,
    11010005: false,
    11010006: false,
    11010007: false,
    11010008: false,
    11010009: false,
    11010010: false,
    11010011: false,
    11010012: false,
    11010013: false,
    11010014: false,
    11020001: false,
    11020002: false,
    11020003: false,
    11020004: false,
    11020005: false,
    11020006: false,
    11020007: false,
    11020008: false,
    11020009: false,
    11020010: false,
    11020011: false,
    11020012: false,
    11020013: false,
    11030001: false,
    11030002: false,
    11030003: false,
    11030004: false,
    11030005: false,
    11030006: false,
    11030007: false,
    11030008: false,
    11030009: false,
    11030010: false,
    11030011: false,
    11030012: false,
    11030013: false,
    11030014: false,
    11030015: false,
    11030016: false,
    11030017: false,
    11030018: false,
    11040001: false,
    11040002: false,
    11040003: false,
    11040004: false,
    11040005: false,
    11040006: false,
    11040007: false,
    11040008: false,
    11050001: false,
    11050002: false,
    11050003: false,
    11060001: false,
    11060002: false,
    11060003: false,
    11060004: false,
    11060005: false,
    11060006: false,
    11070101: false,
    11070102: false,
    11070103: false,
    11070104: false,
    11070105: false,
    11070106: false,
    11070107: false,
    11070201: false,
    11070202: false,
    11070203: false,
    11070204: false,
    11070205: false,
    11070206: false,
    11070207: false,
    11070208: false,
    11070209: false,
    11080001: false,
    11080002: false,
    11080003: false,
    11080004: false,
    11080005: false,
    11080006: false,
    11080007: false,
    11080008: false,
    11090101: false,
    11090102: false,
    11090103: false,
    11090104: false,
    11090105: false,
    11090106: false,
    11090201: false,
    11090202: false,
    11090203: false,
    11090204: false,
    11100101: false,
    11100102: false,
    11100103: false,
    11100104: false,
    11100201: false,
    11100202: false,
    11100203: false,
    11100301: false,
    11100302: false,
    11100303: false,
    11110101: false,
    11110102: false,
    11110103: false,
    11110104: false,
    11110105: false,
    11110201: false,
    11110202: false,
    11110203: false,
    11110204: false,
    11110205: false,
    11110206: false,
    11110207: false,
    11120101: false,
    11120102: false,
    11120103: false,
    11120104: false,
    11120105: false,
    11120201: false,
    11120202: false,
    11120301: false,
    11120302: false,
    11120303: false,
    11120304: false,
    11130101: false,
    11130102: false,
    11130103: false,
    11130104: false,
    11130105: false,
    11130201: false,
    11130202: false,
    11130203: false,
    11130204: false,
    11130205: false,
    11130206: false,
    11130207: false,
    11130208: false,
    11130209: false,
    11130210: false,
    11130301: false,
    11130302: false,
    11130303: false,
    11130304: false,
    11140101: false,
    11140102: false,
    11140103: false,
    11140104: false,
    11140105: false,
    11140106: false,
    11140107: false,
    11140108: false,
    11140109: false,
    11140201: false,
    11140202: false,
    11140203: false,
    11140204: false,
    11140205: false,
    11140206: false,
    11140207: false,
    11140208: false,
    11140209: false,
    11140301: false,
    11140302: false,
    11140303: false,
    11140304: false,
    11140305: false,
    11140306: false,
    11140307: false,
    12010001: false,
    12010002: false,
    12010003: false,
    12010004: false,
    12010005: false,
    12020001: false,
    12020002: false,
    12020003: false,
    12020004: false,
    12020005: false,
    12020006: false,
    12020007: false,
    12030101: false,
    12030102: false,
    12030103: false,
    12030104: false,
    12030105: false,
    12030106: false,
    12030107: false,
    12030108: false,
    12030109: false,
    12030201: false,
    12030202: false,
    12030203: false,
    12040101: false,
    12040102: false,
    12040103: false,
    12040104: false,
    12040201: false,
    12040202: false,
    12040203: false,
    12040204: false,
    12040205: false,
    12050001: false,
    12050002: false,
    12050003: false,
    12050004: false,
    12050005: false,
    12050006: false,
    12050007: false,
    12060101: false,
    12060102: false,
    12060103: false,
    12060104: false,
    12060105: false,
    12060201: false,
    12060202: false,
    12060203: false,
    12060204: false,
    12070101: false,
    12070102: false,
    12070103: false,
    12070104: false,
    12070201: false,
    12070202: false,
    12070203: false,
    12070204: false,
    12070205: false,
    12080001: false,
    12080002: false,
    12080003: false,
    12080004: false,
    12080005: false,
    12080006: false,
    12080007: false,
    12080008: false,
    12090101: false,
    12090102: false,
    12090103: false,
    12090104: false,
    12090105: false,
    12090106: false,
    12090107: false,
    12090108: false,
    12090109: false,
    12090110: false,
    12090201: false,
    12090202: false,
    12090203: false,
    12090204: false,
    12090205: false,
    12090206: false,
    12090301: false,
    12090302: false,
    12090401: false,
    12090402: false,
    12100101: false,
    12100102: false,
    12100201: false,
    12100202: false,
    12100203: false,
    12100204: false,
    12100301: false,
    12100302: false,
    12100303: false,
    12100304: false,
    12100401: false,
    12100402: false,
    12100403: false,
    12100404: false,
    12100405: false,
    12100406: false,
    12100407: false,
    12110101: false,
    12110102: false,
    12110103: false,
    12110104: false,
    12110105: false,
    12110106: false,
    12110107: false,
    12110108: false,
    12110109: false,
    12110110: false,
    12110111: false,
    12110201: false,
    12110202: false,
    12110203: false,
    12110204: false,
    12110205: false,
    12110206: false,
    12110207: false,
    12110208: false,
    13010001: false,
    13010002: false,
    13010003: false,
    13010004: false,
    13010005: false,
    13020101: false,
    13020102: false,
    13020201: false,
    13020202: false,
    13020203: false,
    13020204: false,
    13020205: false,
    13020206: false,
    13020207: false,
    13020208: false,
    13020209: false,
    13020210: false,
    13020211: false,
    13030101: false,
    13030102: false,
    13030103: false,
    13030201: false,
    13030202: false,
    13040100: false,
    13040201: false,
    13040202: false,
    13040203: false,
    13040204: false,
    13040205: false,
    13040206: false,
    13040207: false,
    13040208: false,
    13040209: false,
    13040210: false,
    13040211: false,
    13040212: false,
    13040301: false,
    13040302: false,
    13040303: false,
    13050001: false,
    13050002: false,
    13050003: false,
    13050004: false,
    13060001: false,
    13060002: false,
    13060003: false,
    13060004: false,
    13060005: false,
    13060006: false,
    13060007: false,
    13060008: false,
    13060009: false,
    13060010: false,
    13060011: false,
    13070001: false,
    13070002: false,
    13070003: false,
    13070004: false,
    13070005: false,
    13070006: false,
    13070007: false,
    13070008: false,
    13070009: false,
    13070010: false,
    13070011: false,
    13070012: false,
    13080001: false,
    13080002: false,
    13080003: false,
    13090001: false,
    13090002: false,
    14010001: false,
    14010002: false,
    14010003: false,
    14010004: false,
    14010005: false,
    14020001: false,
    14020002: false,
    14020003: false,
    14020004: false,
    14020005: false,
    14020006: false,
    14030001: false,
    14030002: false,
    14030003: false,
    14030004: false,
    14030005: false,
    14040101: false,
    14040102: false,
    14040103: false,
    14040104: false,
    14040105: false,
    14040106: false,
    14040107: false,
    14040108: false,
    14040109: false,
    14040200: false,
    14050001: false,
    14050002: false,
    14050003: false,
    14050004: false,
    14050005: false,
    14050006: false,
    14050007: false,
    14060003: false,
    14060004: false,
    14060005: false,
    14060006: false,
    14060007: false,
    14060008: false,
    14060009: false,
    14060010: false,
    14070001: false,
    14070002: false,
    14070003: false,
    14070004: false,
    14070005: false,
    14070006: false,
    14070007: false,
    14080101: false,
    14080102: false,
    14080103: false,
    14080104: false,
    14080105: false,
    14080106: false,
    14080107: false,
    14080201: false,
    14080202: false,
    14080203: false,
    14080204: false,
    14080205: false,
    15010001: false,
    15010002: false,
    15010003: false,
    15010004: false,
    15010005: false,
    15010006: false,
    15010007: false,
    15010008: false,
    15010009: false,
    15010010: false,
    15010011: false,
    15010012: false,
    15010013: false,
    15010014: false,
    15010015: false,
    15020001: false,
    15020002: false,
    15020003: false,
    15020004: false,
    15020005: false,
    15020006: false,
    15020007: false,
    15020008: false,
    15020009: false,
    15020010: false,
    15020011: false,
    15020012: false,
    15020013: false,
    15020014: false,
    15020015: false,
    15020016: false,
    15020017: false,
    15020018: false,
    15030101: false,
    15030102: false,
    15030103: false,
    15030104: false,
    15030105: false,
    15030106: false,
    15030107: false,
    15030108: false,
    15030201: false,
    15030202: false,
    15030203: false,
    15030204: false,
    15040001: false,
    15040002: false,
    15040003: false,
    15040004: false,
    15040005: false,
    15040006: false,
    15040007: false,
    15050100: false,
    15050201: false,
    15050202: false,
    15050203: false,
    15050301: false,
    15050302: false,
    15050303: false,
    15050304: false,
    15050305: false,
    15050306: false,
    15060101: false,
    15060102: false,
    15060103: false,
    15060104: false,
    15060105: false,
    15060106: false,
    15060201: false,
    15060202: false,
    15060203: false,
    15070101: false,
    15070102: false,
    15070103: false,
    15070104: false,
    15070201: false,
    15070202: false,
    15070203: false,
    15080101: false,
    15080102: false,
    15080103: false,
    15080200: false,
    15080301: false,
    15080302: false,
    15080303: false,
    16010101: false,
    16010102: false,
    16010201: false,
    16010202: false,
    16010203: false,
    16010204: false,
    16020101: false,
    16020102: false,
    16020201: false,
    16020202: false,
    16020203: false,
    16020204: false,
    16020301: false,
    16020302: false,
    16020303: false,
    16020304: false,
    16020305: false,
    16020306: false,
    16020307: false,
    16020308: false,
    16020309: false,
    16020310: false,
    16030001: false,
    16030002: false,
    16030003: false,
    16030004: false,
    16030005: false,
    16030006: false,
    16030007: false,
    16030008: false,
    16030009: false,
    16040101: false,
    16040102: false,
    16040103: false,
    16040104: false,
    16040105: false,
    16040106: false,
    16040107: false,
    16040108: false,
    16040109: false,
    16040201: false,
    16040202: false,
    16040203: false,
    16040204: false,
    16040205: false,
    16050101: false,
    16050102: false,
    16050103: false,
    16050104: false,
    16050201: false,
    16050202: false,
    16050203: false,
    16050301: false,
    16050302: false,
    16050303: false,
    16050304: false,
    16060001: false,
    16060002: false,
    16060003: false,
    16060004: false,
    16060005: false,
    16060006: false,
    16060007: false,
    16060008: false,
    16060009: false,
    16060010: false,
    16060011: false,
    16060012: false,
    16060013: false,
    16060014: false,
    16060015: false,
    17010101: false,
    17010102: false,
    17010103: false,
    17010104: false,
    17010105: false,
    17010106: false,
    17010107: false,
    17010108: false,
    17010109: false,
    17010110: false,
    17010201: false,
    17010202: false,
    17010203: false,
    17010204: false,
    17010205: false,
    17010206: false,
    17010207: false,
    17010208: false,
    17010209: false,
    17010210: false,
    17010211: false,
    17010212: false,
    17010213: false,
    17010214: false,
    17010215: false,
    17010216: false,
    17010301: false,
    17010302: false,
    17010303: false,
    17010304: false,
    17010305: false,
    17010306: false,
    17010307: false,
    17010308: false,
    17020001: false,
    17020002: false,
    17020003: false,
    17020004: false,
    17020005: false,
    17020006: false,
    17020007: false,
    17020008: false,
    17020009: false,
    17020010: false,
    17020011: false,
    17020012: false,
    17020013: false,
    17020014: false,
    17020015: false,
    17020016: false,
    17020017: false,
    17020018: false,
    17020019: false,
    17020020: false,
    17020021: false,
    17030001: false,
    17030002: false,
    17030003: false,
    17040101: false,
    17040102: false,
    17040103: false,
    17040104: false,
    17040105: false,
    17040201: false,
    17040202: false,
    17040203: false,
    17040204: false,
    17040205: false,
    17040206: false,
    17040207: false,
    17040208: false,
    17040209: false,
    17040210: false,
    17040211: false,
    17040212: false,
    17040213: false,
    17040214: false,
    17040215: false,
    17040216: false,
    17040217: false,
    17040218: false,
    17040219: false,
    17040220: false,
    17040221: false,
    17050101: false,
    17050102: false,
    17050103: false,
    17050104: false,
    17050105: false,
    17050106: false,
    17050107: false,
    17050108: false,
    17050109: false,
    17050110: false,
    17050111: false,
    17050112: false,
    17050113: false,
    17050114: false,
    17050115: false,
    17050116: false,
    17050117: false,
    17050118: false,
    17050119: false,
    17050120: false,
    17050121: false,
    17050122: false,
    17050123: false,
    17050124: false,
    17050201: false,
    17050202: false,
    17050203: false,
    17060101: false,
    17060102: false,
    17060103: false,
    17060104: false,
    17060105: false,
    17060106: false,
    17060107: false,
    17060108: false,
    17060109: false,
    17060110: false,
    17060201: false,
    17060202: false,
    17060203: false,
    17060204: false,
    17060205: false,
    17060206: false,
    17060207: false,
    17060208: false,
    17060209: false,
    17060210: false,
    17060301: false,
    17060302: false,
    17060303: false,
    17060304: false,
    17060305: false,
    17060306: false,
    17060307: false,
    17060308: false,
    17070101: false,
    17070102: false,
    17070103: false,
    17070104: false,
    17070105: false,
    17070106: false,
    17070201: false,
    17070202: false,
    17070203: false,
    17070204: false,
    17070301: false,
    17070302: false,
    17070303: false,
    17070304: false,
    17070305: false,
    17070306: false,
    17070307: false,
    17080001: false,
    17080002: false,
    17080003: false,
    17080004: false,
    17080005: false,
    17080006: false,
    17090001: false,
    17090002: false,
    17090003: false,
    17090004: false,
    17090005: false,
    17090006: false,
    17090007: false,
    17090008: false,
    17090009: false,
    17090010: false,
    17090011: false,
    17090012: false,
    17100101: false,
    17100102: false,
    17100103: false,
    17100104: false,
    17100105: false,
    17100106: false,
    17100201: false,
    17100202: false,
    17100203: false,
    17100204: false,
    17100205: false,
    17100206: false,
    17100207: false,
    17100301: false,
    17100302: false,
    17100303: false,
    17100304: false,
    17100305: false,
    17100306: false,
    17100307: false,
    17100308: false,
    17100309: false,
    17100310: false,
    17100311: false,
    17100312: false,
    17110001: false,
    17110002: false,
    17110003: false,
    17110004: false,
    17110005: false,
    17110006: false,
    17110007: false,
    17110008: false,
    17110009: false,
    17110010: false,
    17110011: false,
    17110012: false,
    17110013: false,
    17110014: false,
    17110015: false,
    17110016: false,
    17110017: false,
    17110018: false,
    17110019: false,
    17110020: false,
    17110021: false,
    17120001: false,
    17120002: false,
    17120003: false,
    17120004: false,
    17120005: false,
    17120006: false,
    17120007: false,
    17120008: false,
    17120009: false,
    18010101: false,
    18010102: false,
    18010103: false,
    18010104: false,
    18010105: false,
    18010106: false,
    18010107: false,
    18010108: false,
    18010109: false,
    18010110: false,
    18010201: false,
    18010202: false,
    18010203: false,
    18010204: false,
    18010205: false,
    18010206: false,
    18010207: false,
    18010208: false,
    18010209: false,
    18010210: false,
    18010211: false,
    18010212: false,
    18020001: false,
    18020002: false,
    18020003: false,
    18020004: false,
    18020005: false,
    18020104: false,
    18020111: false,
    18020115: false,
    18020116: false,
    18020121: false,
    18020122: false,
    18020123: false,
    18020125: false,
    18020126: false,
    18020128: false,
    18020129: false,
    18020151: false,
    18020152: false,
    18020153: false,
    18020154: false,
    18020155: false,
    18020156: false,
    18020157: false,
    18020158: false,
    18020159: false,
    18020161: false,
    18020162: false,
    18020163: false,
    18030001: false,
    18030002: false,
    18030003: false,
    18030004: false,
    18030005: false,
    18030006: false,
    18030007: false,
    18030009: false,
    18030010: false,
    18030012: false,
    18040001: false,
    18040002: false,
    18040003: false,
    18040006: false,
    18040007: false,
    18040008: false,
    18040009: false,
    18040010: false,
    18040011: false,
    18040012: false,
    18040013: false,
    18040014: false,
    18040051: false,
    18050001: false,
    18050002: false,
    18050003: false,
    18050004: false,
    18050005: false,
    18050006: false,
    18060002: false,
    18060003: false,
    18060004: false,
    18060006: false,
    18060007: false,
    18060009: false,
    18060010: false,
    18060013: false,
    18070101: false,
    18070102: false,
    18070103: false,
    18070104: false,
    18070105: false,
    18070106: false,
    18070201: false,
    18070202: false,
    18070204: false,
    18070301: false,
    18070302: false,
    18070303: false,
    18070304: false,
    18070305: false,
    18080001: false,
    18080002: false,
    18080003: false,
    18090101: false,
    18090102: false,
    18090103: false,
    18090201: false,
    18090202: false,
    18090203: false,
    18090204: false,
    18090205: false,
    18090206: false,
    18090207: false,
    18090208: false,
    18100100: false,
    18100201: false,
    18100202: false,
    18100203: false,
    18100204: false,
    19010102: false,
    19010103: false,
    19010104: false,
    19010105: false,
    19010106: false,
    19010107: false,
    19010204: false,
    19010205: false,
    19010206: false,
    19010207: false,
    19010208: false,
    19010209: false,
    19010210: false,
    19010212: false,
    19010301: false,
    19010302: false,
    19010303: false,
    19010304: false,
    19010402: false,
    19010403: false,
    19010404: false,
    19010405: false,
    19010406: false,
    19020101: false,
    19020102: false,
    19020103: false,
    19020104: false,
    19020201: false,
    19020202: false,
    19020203: false,
    19020301: false,
    19020302: false,
    19020401: false,
    19020402: false,
    19020501: false,
    19020502: false,
    19020503: false,
    19020504: false,
    19020505: false,
    19020601: false,
    19020701: false,
    19020702: false,
    19020800: false,
    19030102: false,
    19030103: false,
    19030104: false,
    19030201: false,
    19030202: false,
    19030203: false,
    19030204: false,
    19030205: false,
    19030206: false,
    19030301: false,
    19030302: false,
    19030303: false,
    19030305: false,
    19030306: false,
    19030401: false,
    19030403: false,
    19030405: false,
    19030407: false,
    19030501: false,
    19030502: false,
    19030503: false,
    19050101: false,
    19050102: false,
    19050103: false,
    19050104: false,
    19050105: false,
    19050201: false,
    19050203: false,
    19050301: false,
    19050302: false,
    19050303: false,
    19050304: false,
    19050401: false,
    19050402: false,
    19050403: false,
    19050404: false,
    19050405: false,
    19050500: false,
    19060101: false,
    19060102: false,
    19060103: false,
    19060201: false,
    19060202: false,
    19060203: false,
    19060204: false,
    19060205: false,
    19060206: false,
    19060301: false,
    19060302: false,
    19060303: false,
    19060304: false,
    19060401: false,
    19060402: false,
    19060403: false,
    19060501: false,
    19060502: false,
    19060504: false,
    19060505: false,
    19060506: false,
    19070101: false,
    19070102: false,
    19070103: false,
    19070104: false,
    19070402: false,
    19070403: false,
    19070502: false,
    19070503: false,
    19070505: false,
    19070506: false,
    19080103: false,
    19080104: false,
    19080105: false,
    19080106: false,
    19080107: false,
    19080108: false,
    19080201: false,
    19080202: false,
    19080203: false,
    19080204: false,
    19080301: false,
    19080302: false,
    19080303: false,
    19080304: false,
    19080305: false,
    19080306: false,
    19080307: false,
    19080308: false,
    19080309: false,
    19080310: false,
    19080311: false,
    19080401: false,
    19080402: false,
    19080403: false,
    19080404: false,
    19090101: false,
    19090102: false,
    19090103: false,
    19090104: false,
    19090105: false,
    19090106: false,
    19090107: false,
    19090108: false,
    19090109: false,
    19090201: false,
    19090202: false,
    19090203: false,
    19090204: false,
    19090205: false,
    19090301: false,
    19090302: false,
    19090303: false,
    19090304: false,
    19090305: false,
    20010000: false,
    20020000: false,
    20030000: false,
    20040000: false,
    20050000: false,
    20060000: false,
    20070000: false,
    20080000: false,
    21010002: false,
    21010003: false,
    21010004: false,
    21010005: false,
    21010006: false,
    21020001: false,
    21020002: false,
    22010000: false,
    22020000: false,
    22030000: false
}


    huc_name_map = {
        1010002: "Allagash",
        1010003: "Fish",
        1010004: "Aroostook",
        1010005: "Meduxnekeag",
        1010006: "Headwaters Saint John River",
        1010007: "Big Black River-Saint John River",
        1010008: "St. Francis River-Saint John River",
        1010009: "Little River-Saint John River",
        1010010: "Becaguimec Stream-Saint John River",
        1010011: "Keswick River-Saint John River",
        1020001: "West Branch Penobscot",
        1020002: "East Branch Penobscot",
        1020003: "Mattawamkeag",
        1020004: "Piscataquis",
        1020005: "Lower Penobscot",
        1030001: "Upper Kennebec",
        1030002: "Dead",
        1030003: "Lower Kennebec",
        1040001: "Upper Androscoggin",
        1040002: "Lower Androscoggin",
        1050001: "St. Croix",
        1050002: "Maine Coastal",
        1050003: "St. George-Sheepscot",
        1050004: "Passamaquoddy Bay-Bay of Fundy",
        1060001: "Presumpscot",
        1060002: "Saco",
        1060003: "Piscataqua-Salmon Falls",
        1070001: "Pemigewasset",
        1070002: "Winnipesaukee River",
        1070003: "Contoocook",
        1070004: "Nashua",
        1070005: "Concord",
        1070006: "Merrimack River",
        1080101: "Upper Connecticut",
        1080102: "Passumpsic",
        1080103: "Waits",
        1080104: "Upper Connecticut-Mascoma",
        1080105: "White",
        1080106: "Black-Ottauquechee",
        1080107: "West",
        1080201: "Middle Connecticut",
        1080202: "Miller",
        1080203: "Deerfield",
        1080204: "Chicopee",
        1080205: "Lower Connecticut",
        1080206: "Westfield",
        1080207: "Farmington",
        1090001: "Charles",
        1090002: "Cape Cod",
        1090003: "Blackstone",
        1090004: "Narragansett",
        1090005: "Pawcatuck-Wood",
        1100001: "Quinebaug",
        1100002: "Shetucket",
        1100003: "Thames",
        1100004: "Quinnipiac",
        1100005: "Housatonic",
        1100006: "Saugatuck",
        2020001: "Upper Hudson",
        2020002: "Sacandaga",
        2020003: "Hudson-Hoosic",
        2020004: "Mohawk",
        2020005: "Schoharie",
        2020006: "Middle Hudson",
        2020007: "Rondout",
        2020008: "Hudson-Wappinger",
        2030101: "Lower Hudson",
        2030102: "Bronx",
        2030103: "Hackensack-Passaic",
        2030104: "Sandy Hook-Staten Island",
        2030105: "Raritan",
        2030201: "Northern Long Island",
        2030202: "Southern Long Island",
        2030203: "Long Island Sound",
        2040101: "Upper Delaware",
        2040102: "East Branch Delaware",
        2040103: "Lackawaxen",
        2040104: "Middle Delaware-Mongaup-Brodhead",
        2040105: "Middle Delaware-Musconetcong",
        2040106: "Lehigh",
        2040201: "Crosswicks-Neshaminy",
        2040202: "Lower Delaware",
        2040203: "Schuylkill",
        2040204: "Delaware Bay",
        2040205: "Brandywine-Christina",
        2040206: "Cohansey-Maurice",
        2040207: "Broadkill-Smyrna",
        2040301: "Mullica-Toms",
        2040302: "Great Egg Harbor",
        2040303: "Chincoteague",
        2040304: "Eastern Lower Delmarva",
        2050101: "Upper Susquehanna",
        2050102: "Chenango",
        2050103: "Owego-Wappasening",
        2050104: "Tioga",
        2050105: "Chemung",
        2050106: "Upper Susquehanna-Tunkhannock",
        2050107: "Upper Susquehanna-Lackawanna",
        2050201: "Upper West Branch Susquehanna",
        2050202: "Sinnemahoning",
        2050203: "Middle West Branch Susquehanna",
        2050204: "Bald Eagle",
        2050205: "Pine",
        2050206: "Lower West Branch Susquehanna",
        2050301: "Lower Susquehanna-Penns",
        2050302: "Upper Juniata",
        2050303: "Raystown",
        2050304: "Lower Juniata",
        2050305: "Lower Susquehanna-Swatara",
        2050306: "Lower Susquehanna",
        2060001: "Upper Chesapeake Bay",
        2060002: "Chester-Sassafras",
        2060003: "Gunpowder-Patapsco",
        2060004: "Severn",
        2060005: "Choptank",
        2060006: "Patuxent",
        2070001: "South Branch Potomac",
        2070002: "North Branch Potomac",
        2070003: "Cacapon-Town",
        2070004: "Conococheague-Opequon",
        2070005: "South Fork Shenandoah",
        2070006: "North Fork Shenandoah",
        2070007: "Shenandoah",
        2070008: "Middle Potomac-Catoctin",
        2070009: "Monocacy",
        2070010: "Middle Potomac-Anacostia-Occoquan",
        2070011: "Lower Potomac",
        2080101: "Lower Chesapeake Bay",
        2080102: "Great Wicomico-Piankatank",
        2080103: "Rapidan-Upper Rappahannock",
        2080104: "Lower Rappahannock",
        2080105: "Mattaponi",
        2080106: "Pamunkey",
        2080107: "York",
        2080108: "Lynnhaven-Poquoson",
        2080109: "Nanticoke",
        2080110: "Tangier",
        2080111: "Pokomoke-Western Lower Delmarva",
        2080201: "Upper James",
        2080202: "Maury",
        2080203: "Middle James-Buffalo",
        2080204: "Rivanna",
        2080205: "Middle James-Willis",
        2080206: "Lower James",
        2080207: "Appomattox",
        2080208: "Hampton Roads",
        3010101: "Upper Roanoke",
        3010102: "Middle Roanoke",
        3010103: "Upper Dan",
        3010104: "Lower Dan",
        3010105: "Banister",
        3010106: "Roanoke Rapids",
        3010107: "Lower Roanoke",
        3010201: "Nottoway",
        3010202: "Blackwater",
        3010203: "Chowan",
        3010204: "Meherrin",
        3010205: "Albemarle",
        3020101: "Upper Tar",
        3020102: "Fishing",
        3020103: "Lower Tar",
        3020104: "Pamlico",
        3020105: "Pamlico Sound",
        3020201: "Upper Neuse",
        3020202: "Middle Neuse",
        3020203: "Contentnea",
        3020204: "Lower Neuse",
        3020301: "White Oak River",
        3020302: "New River",
        3030002: "Haw",
        3030003: "Deep",
        3030004: "Upper Cape Fear",
        3030005: "Lower Cape Fear",
        3030006: "Black",
        3030007: "Northeast Cape Fear",
        3040101: "Upper Yadkin",
        3040102: "South Yadkin",
        3040103: "Lower Yadkin",
        3040104: "Upper Pee Dee",
        3040105: "Rocky",
        3040201: "Lower Pee Dee",
        3040202: "Lynches",
        3040203: "Lumber",
        3040204: "Little Pee Dee",
        3040205: "Black",
        3040206: "Waccamaw",
        3040207: "Carolina Coastal-Sampit",
        3040208: "Coastal Carolina",
        3050101: "Upper Catawba",
        3050102: "South Fork Catawba",
        3050103: "Lower Catawba",
        3050104: "Wateree",
        3050105: "Upper Broad",
        3050106: "Lower Broad",
        3050107: "Tyger",
        3050108: "Enoree",
        3050109: "Saluda",
        3050110: "Congaree",
        3050111: "Lake Marion",
        3050112: "Santee",
        3050201: "Cooper",
        3050202: "South Carolina Coastal",
        3050203: "North Fork Edisto",
        3050204: "South Fork Edisto",
        3050205: "Four Hole Swamp",
        3050206: "Edisto River",
        3050207: "Salkehatchie",
        3050208: "Broad-St. Helena",
        3050209: "Bulls Bay",
        3050210: "St. Helena Island",
        3060101: "Seneca",
        3060102: "Tugaloo",
        3060103: "Upper Savannah",
        3060104: "Broad",
        3060105: "Little",
        3060106: "Middle Savannah",
        3060107: "Stevens",
        3060108: "Brier",
        3060109: "Lower Savannah",
        3060110: "Calibogue Sound-Wright River",
        3060201: "Upper Ogeechee",
        3060202: "Lower Ogeechee",
        3060203: "Canoochee",
        3060204: "Ogeechee Coastal",
        3070101: "Upper Oconee",
        3070102: "Lower Oconee",
        3070103: "Upper Ocmulgee",
        3070104: "Lower Ocmulgee",
        3070105: "Little Ocmulgee",
        3070106: "Altamaha",
        3070107: "Ohoopee",
        3070201: "Satilla",
        3070202: "Little Satilla",
        3070203: "Cumberland-St. Simons",
        3070204: "St. Marys",
        3070205: "Nassau",
        3080101: "Upper St. Johns",
        3080102: "Oklawaha",
        3080103: "Lower St. Johns",
        3080201: "Daytona-St. Augustine",
        3080202: "Cape Canaveral",
        3080203: "Vero Beach",
        3090101: "Kissimmee",
        3090102: "Northern Okeechobee Inflow",
        3090103: "Western Okeechobee Inflow",
        3090201: "Lake Okeechobee",
        3090202: "Everglades",
        3090203: "Florida Bay-Florida Keys",
        3090204: "Big Cypress Swamp",
        3090205: "Caloosahatchee",
        3090206: "Florida Southeast Coast",
        3100101: "Peace",
        3100102: "Myakka",
        3100103: "Charlotte Harbor",
        3100201: "Sarasota Bay",
        3100202: "Manatee",
        3100203: "Little Manatee",
        3100204: "Alafia",
        3100205: "Hillsborough",
        3100206: "Tampa Bay",
        3100207: "Crystal-Pithlachascotee",
        3100208: "Withlacoochee",
        3110101: "Waccasassa",
        3110102: "Econfina-Steinhatchee",
        3110103: "Aucilla",
        3110201: "Upper Suwannee",
        3110202: "Alapaha",
        3110203: "Withlacoochee",
        3110204: "Little",
        3110205: "Lower Suwannee",
        3110206: "Santa Fe",
        3120001: "Apalachee Bay-St. Marks",
        3120002: "Upper Ochlockonee",
        3120003: "Lower Ochlockonee",
        3130001: "Upper Chattahoochee",
        3130002: "Middle Chattahoochee-Lake Harding",
        3130003: "Middle Chattahoochee-Walter F",
        3130004: "Lower Chattahoochee",
        3130005: "Upper Flint",
        3130006: "Middle Flint",
        3130007: "Kinchafoonee-Muckalee",
        3130008: "Lower Flint",
        3130009: "Ichawaynochaway",
        3130010: "Spring",
        3130011: "Apalachicola",
        3130012: "Chipola",
        3130013: "New",
        3130014: "Apalachicola Bay",
        3140101: "St. Andrew-St. Joseph Bays",
        3140102: "Choctawhatchee Bay",
        3140103: "Yellow",
        3140104: "Blackwater",
        3140105: "Pensacola Bay",
        3140106: "Perdido",
        3140107: "Perdido Bay",
        3140201: "Upper Choctawhatchee",
        3140202: "Pea",
        3140203: "Lower Choctawhatchee",
        3140301: "Upper Conecuh",
        3140302: "Patsaliga",
        3140303: "Sepulga",
        3140304: "Lower Conecuh",
        3140305: "Escambia",
        3150101: "Conasauga",
        3150102: "Coosawattee",
        3150103: "Oostanaula",
        3150104: "Etowah",
        3150105: "Upper Coosa",
        3150106: "Middle Coosa",
        3150107: "Lower Coosa",
        3150108: "Upper Tallapoosa",
        3150109: "Middle Tallapoosa",
        3150110: "Lower Tallapoosa",
        3150201: "Upper Alabama",
        3150202: "Cahaba",
        3150203: "Middle Alabama",
        3150204: "Lower Alabama",
        3160101: "Upper Tombigbee",
        3160102: "Town",
        3160103: "Buttahatchee",
        3160104: "Tibbee",
        3160105: "Luxapallila",
        3160106: "Middle Tombigbee-Lubbub",
        3160107: "Sipsey",
        3160108: "Noxubee",
        3160109: "Mulberry",
        3160110: "Sipsey Fork",
        3160111: "Locust",
        3160112: "Upper Black Warrior",
        3160113: "Lower Black Warrior",
        3160201: "Middle Tombigbee-Chickasaw",
        3160202: "Sucarnoochee",
        3160203: "Lower Tombigbee",
        3160204: "Mobile-Tensaw",
        3160205: "Mobile Bay",
        3170001: "Chunky-Okatibbee",
        3170002: "Upper Chickasawhay",
        3170003: "Lower Chickasawhay",
        3170004: "Upper Leaf",
        3170005: "Lower Leaf",
        3170006: "Pascagoula",
        3170007: "Black",
        3170008: "Escatawpa",
        3170009: "Mississippi Coastal",
        3180001: "Upper Pearl",
        3180002: "Middle Pearl-Strong",
        3180003: "Middle Pearl-Silver",
        3180004: "Lower Pearl",
        3180005: "Bogue Chitto",
        4010101: "Baptism-Brule",
        4010102: "Beaver-Lester",
        4010201: "St. Louis",
        4010202: "Cloquet",
        4010301: "Beartrap-Nemadji",
        4010302: "Bad-Montreal",
        4020101: "Black-Presque Isle",
        4020102: "Ontonagon",
        4020103: "Keweenaw Peninsula",
        4020104: "Sturgeon",
        4020105: "Dead-Kelsey",
        4020201: "Betsy-Chocolay",
        4020202: "Tahquamenon",
        4020203: "Waiska",
        4020300: "Lake Superior",
        4030101: "Manitowoc-Sheboygan",
        4030102: "Door-Kewaunee",
        4030103: "Duck-Pensaukee",
        4030104: "Oconto",
        4030105: "Peshtigo",
        4030106: "Brule",
        4030107: "Michigamme",
        4030108: "Menominee",
        4030109: "Cedar-Ford",
        4030110: "Escanaba",
        4030111: "Tacoosh-Whitefish",
        4030112: "Fishdam-Sturgeon",
        4030201: "Upper Fox",
        4030202: "Wolf",
        4030203: "Lake Winnebago",
        4030204: "Lower Fox",
        4040001: "Little Calumet-Galien",
        4040002: "Pike-Root",
        4040003: "Milwaukee",
        4050001: "St. Joseph",
        4050002: "Black-Macatawa",
        4050003: "Kalamazoo",
        4050004: "Upper Grand",
        4050005: "Maple",
        4050006: "Lower Grand",
        4050007: "Thornapple",
        4060101: "Pere Marquette-White",
        4060102: "Muskegon",
        4060103: "Manistee",
        4060104: "Betsie-Platte",
        4060105: "Boardman-Charlevoix",
        4060106: "Manistique",
        4060107: "Brevoort-Millecoquins",
        4060200: "Lake Michigan",
        4070001: "St. Marys",
        4070002: "Carp-Pine",
        4070003: "Lone Lake-Ocqueoc",
        4070004: "Cheboygan",
        4070005: "Black",
        4070006: "Thunder Bay",
        4070007: "Au Sable",
        4080101: "Au Gres-Rifle",
        4080102: "Kawkawlin-Pine",
        4080103: "Pigeon-Wiscoggin",
        4080104: "Birch-Willow",
        4080201: "Tittabawassee",
        4080202: "Pine",
        4080203: "Shiawassee",
        4080204: "Flint",
        4080205: "Cass",
        4080206: "Saginaw",
        4080300: "Lake Huron",
        4090001: "St. Clair",
        4090002: "Lake St. Clair",
        4090003: "Clinton",
        4090004: "Detroit",
        4090005: "Huron",
        4100001: "Ottawa-Stony",
        4100002: "Raisin",
        4100003: "St. Joseph",
        4100004: "St. Marys",
        4100005: "Upper Maumee",
        4100006: "Tiffin",
        4100007: "Auglaize",
        4100008: "Blanchard",
        4100009: "Lower Maumee",
        4100010: "Cedar-Portage",
        4100011: "Sandusky",
        4100012: "Huron-Vermilion",
        4110001: "Black-Rocky",
        4110002: "Cuyahoga",
        4110003: "Ashtabula-Chagrin",
        4110004: "Grand",
        4120101: "Chautauqua-Conneaut",
        4120102: "Cattaraugus",
        4120103: "Buffalo-Eighteenmile",
        4120104: "Niagara",
        4120200: "Lake Erie",
        4130001: "Oak Orchard-Twelvemile",
        4130002: "Upper Genesee",
        4130003: "Lower Genesee",
        4140101: "Irondequoit-Ninemile",
        4140102: "Salmon-Sandy",
        4140201: "Seneca",
        4140202: "Oneida",
        4140203: "Oswego",
        4150101: "Black",
        4150102: "Chaumont-Perch",
        4150200: "Lake Ontario",
        4150302: "Oswegatchie",
        4150303: "Indian",
        4150304: "Grass",
        4150305: "Raquette",
        4150306: "St. Regis",
        4150307: "Salmon",
        4150308: "Chateaugay-English",
        4150309: "Headwaters St. Lawrence River",
        4150310: "Raisin River-St. Lawrence River",
        4150401: "Mettawee River",
        4150402: "Otter Creek",
        4150403: "Winooski River",
        4150404: "Ausable River",
        4150405: "Lamoille River",
        4150406: "Saranac River",
        4150407: "Missiquoi River",
        4150408: "Lake Champlain",
        4150409: "Richelieu River",
        4150500: "St. Francois River",
        4150600: "Chaudiere River",
        5010001: "Upper Allegheny",
        5010002: "Conewango",
        5010003: "Middle Allegheny-Tionesta",
        5010004: "French",
        5010005: "Clarion",
        5010006: "Middle Allegheny-Redbank",
        5010007: "Conemaugh",
        5010008: "Kiskiminetas",
        5010009: "Lower Allegheny",
        5020001: "Tygart Valley",
        5020002: "West Fork",
        5020003: "Upper Monongahela",
        5020004: "Cheat",
        5020005: "Lower Monongahela",
        5020006: "Youghiogheny",
        5030101: "Upper Ohio",
        5030102: "Shenango",
        5030103: "Mahoning",
        5030104: "Beaver",
        5030105: "Connoquenessing",
        5030106: "Upper Ohio-Wheeling",
        5030201: "Little Muskingum-Middle Island",
        5030202: "Upper Ohio-Shade",
        5030203: "Little Kanawha",
        5030204: "Hocking",
        5040001: "Tuscarawas",
        5040002: "Mohican",
        5040003: "Walhonding",
        5040004: "Muskingum",
        5040005: "Wills",
        5040006: "Licking",
        5050001: "Upper New",
        5050002: "Middle New",
        5050003: "Greenbrier",
        5050004: "Lower New",
        5050005: "Gauley",
        5050006: "Upper Kanawha",
        5050007: "Elk",
        5050008: "Lower Kanawha",
        5050009: "Coal",
        5060001: "Upper Scioto",
        5060002: "Lower Scioto",
        5060003: "Paint",
        5070101: "Upper Guyandotte",
        5070102: "Lower Guyandotte",
        5070201: "Tug",
        5070202: "Upper Levisa",
        5070203: "Lower Levisa",
        5070204: "Big Sandy",
        5080001: "Upper Great Miami, Indiana, Ohio",
        5080002: "Lower Great Miami, Indiana, Ohio",
        5080003: "Whitewater",
        5090101: "Raccoon-Symmes",
        5090102: "Twelvepole",
        5090103: "Little Scioto-Tygarts",
        5090104: "Little Sandy",
        5090201: "Ohio Brush-Whiteoak",
        5090202: "Little Miami",
        5090203: "Middle Ohio-Laughery",
        5100101: "Licking",
        5100102: "South Fork Licking",
        5100201: "North Fork Kentucky",
        5100202: "Middle Fork Kentucky",
        5100203: "South Fork Kentucky",
        5100204: "Upper Kentucky",
        5100205: "Lower Kentucky",
        5110001: "Upper Green",
        5110002: "Barren",
        5110003: "Middle Green",
        5110004: "Rough",
        5110005: "Lower Green",
        5110006: "Pond",
        5120101: "Upper Wabash",
        5120102: "Salamonie",
        5120103: "Mississinewa",
        5120104: "Eel",
        5120105: "Middle Wabash-Deer",
        5120106: "Tippecanoe",
        5120107: "Wildcat",
        5120108: "Middle Wabash-Little Vermilion",
        5120109: "Vermilion",
        5120110: "Sugar",
        5120111: "Middle Wabash-Busseron",
        5120112: "Embarras",
        5120113: "Lower Wabash",
        5120114: "Little Wabash",
        5120115: "Skillet",
        5120201: "Upper White",
        5120202: "Lower White",
        5120203: "Eel",
        5120204: "Driftwood",
        5120205: "Flatrock-Haw",
        5120206: "Upper East Fork White",
        5120207: "Muscatatuck",
        5120208: "Lower East Fork White",
        5120209: "Patoka",
        5130101: "Upper Cumberland",
        5130102: "Rockcastle",
        5130103: "Upper Cumberland-Lake Cumberland",
        5130104: "South Fork Cumberland",
        5130105: "Obey",
        5130106: "Upper Cumberland-Cordell Hull Reservoir",
        5130107: "Collins",
        5130108: "Caney",
        5130201: "Lower Cumberland-Old Hickory Lake",
        5130202: "Lower Cumberland-Sycamore",
        5130203: "Stones",
        5130204: "Harpeth",
        5130205: "Lower Cumberland",
        5130206: "Red",
        5140101: "Silver-Little Kentucky",
        5140102: "Salt",
        5140103: "Rolling Fork",
        5140104: "Blue-Sinking",
        5140201: "Lower Ohio-Little Pigeon",
        5140202: "Highland-Pigeon",
        5140203: "Lower Ohio-Bay",
        5140204: "Saline",
        5140205: "Tradewater",
        5140206: "Lower Ohio",
        6010101: "North Fork Holston",
        6010102: "South Fork Holston",
        6010103: "Watauga, North Carolina, Tennessee",
        6010104: "Holston",
        6010105: "Upper French Broad",
        6010106: "Pigeon",
        6010107: "Lower French Broad",
        6010108: "Nolichucky",
        6010201: "Watts Bar Lake",
        6010202: "Upper Little Tennessee",
        6010203: "Tuckasegee",
        6010204: "Lower Little Tennessee",
        6010205: "Upper Clinch, Tennessee, Virginia",
        6010206: "Powell",
        6010207: "Lower Clinch",
        6010208: "Emory",
        6020001: "Middle Tennessee-Chickamauga",
        6020002: "Hiwassee",
        6020003: "Ocoee",
        6020004: "Sequatchie",
        6030001: "Guntersville Lake",
        6030002: "Wheeler Lake",
        6030003: "Upper Elk",
        6030004: "Lower Elk",
        6030005: "Pickwick Lake",
        6030006: "Bear",
        6040001: "Lower Tennessee-Beech",
        6040002: "Upper Duck",
        6040003: "Lower Duck",
        6040004: "Buffalo",
        6040005: "Kentucky Lake",
        6040006: "Lower Tennessee",
        7010101: "Mississippi Headwaters",
        7010102: "Leech Lake",
        7010103: "Prairie-Willow",
        7010104: "Elk-Nokasippi",
        7010105: "Pine",
        7010106: "Crow Wing",
        7010107: "Redeye",
        7010108: "Long Prairie",
        7010201: "Platte-Spunk",
        7010202: "Sauk",
        7010203: "Clearwater-Elk",
        7010204: "Crow",
        7010205: "South Fork Crow",
        7010206: "Twin Cities",
        7010207: "Rum",
        7020001: "Upper Minnesota",
        7020002: "Pomme De Terre",
        7020003: "Lac Qui Parle",
        7020004: "Hawk-Yellow Medicine",
        7020005: "Chippewa",
        7020006: "Redwood",
        7020007: "Middle Minnesota",
        7020008: "Cottonwood",
        7020009: "Blue Earth",
        7020010: "Watonwan",
        7020011: "Le Sueur",
        7020012: "Lower Minnesota",
        7030001: "Upper St. Croix",
        7030002: "Namekagon",
        7030003: "Kettle",
        7030004: "Snake",
        7030005: "Lower St. Croix",
        7040001: "Rush-Vermillion",
        7040002: "Cannon",
        7040003: "Buffalo-Whitewater",
        7040004: "Zumbro",
        7040005: "Trempealeau",
        7040006: "La Crosse-Pine",
        7040007: "Black",
        7040008: "Root",
        7050001: "Upper Chippewa",
        7050002: "Flambeau",
        7050003: "South Fork Flambeau",
        7050004: "Jump",
        7050005: "Lower Chippewa",
        7050006: "Eau Claire",
        7050007: "Red Cedar",
        7060001: "Coon-Yellow",
        7060002: "Upper Iowa",
        7060003: "Grant-Little Maquoketa",
        7060004: "Turkey",
        7060005: "Apple-Plum",
        7060006: "Maquoketa",
        7070001: "Upper Wisconsin",
        7070002: "Lake Dubay",
        7070003: "Castle Rock",
        7070004: "Baraboo",
        7070005: "Lower Wisconsin",
        7070006: "Kickapoo",
        7080101: "Copperas-Duck",
        7080102: "Upper Wapsipinicon",
        7080103: "Lower Wapsipinicon",
        7080104: "Flint-Henderson",
        7080105: "South Skunk",
        7080106: "North Skunk",
        7080107: "Skunk",
        7080201: "Upper Cedar",
        7080202: "Shell Rock",
        7080203: "Winnebago",
        7080204: "West Fork Cedar",
        7080205: "Middle Cedar",
        7080206: "Lower Cedar",
        7080207: "Upper Iowa",
        7080208: "Middle Iowa",
        7080209: "Lower Iowa",
        7090001: "Upper Rock",
        7090002: "Middle Rock",
        7090003: "Pecatonica",
        7090004: "Sugar",
        7090005: "Lower Rock",
        7090006: "Kishwaukee",
        7090007: "Green",
        7100001: "Des Moines Headwaters",
        7100002: "Upper Des Moines",
        7100003: "East Fork Des Moines",
        7100004: "Middle Des Moines",
        7100005: "Boone",
        7100006: "North Raccoon",
        7100007: "South Raccoon",
        7100008: "Lake Red Rock",
        7100009: "Lower Des Moines",
        7110001: "Bear-Wyaconda",
        7110002: "North Fabius",
        7110003: "South Fabius",
        7110004: "The Sny",
        7110005: "North Fork Salt",
        7110006: "South Fork Salt",
        7110007: "Salt",
        7110008: "Cuivre",
        7110009: "Peruque-Piasa",
        7120001: "Kankakee",
        7120002: "Iroquois",
        7120003: "Chicago",
        7120004: "Des Plaines",
        7120005: "Upper Illinois",
        7120006: "Upper Fox",
        7120007: "Lower Fox",
        7130001: "Lower Illinois-Senachwine Lake",
        7130002: "Vermilion",
        7130003: "Lower Illinois-Lake Chautauqua",
        7130004: "Mackinaw",
        7130005: "Spoon",
        7130006: "Upper Sangamon",
        7130007: "South Fork Sangamon",
        7130008: "Lower Sangamon",
        7130009: "Salt",
        7130010: "La Moine",
        7130011: "Lower Illinois",
        7130012: "Macoupin",
        7140101: "Cahokia-Joachim",
        7140102: "Meramec",
        7140103: "Bourbeuse",
        7140104: "Big",
        7140105: "Upper Mississippi-Cape Girardeau",
        7140106: "Big Muddy",
        7140107: "Whitewater",
        7140108: "Cache",
        7140201: "Upper Kaskaskia",
        7140202: "Middle Kaskaskia",
        7140203: "Shoal",
        7140204: "Lower Kaskaskia",
        8010100: "Lower Mississippi-Memphis",
        8010201: "Bayou De Chien-Mayfield",
        8010202: "Obion",
        8010203: "South Fork Obion",
        8010204: "North Fork Forked Deer",
        8010205: "South Fork Forked Deer",
        8010206: "Forked Deer",
        8010207: "Upper Hatchie",
        8010208: "Lower Hatchie",
        8010209: "Loosahatchie",
        8010210: "Wolf",
        8010211: "Horn Lake-Nonconnah",
        8020100: "Lower Mississippi-Helena",
        8020201: "New Madrid-St. Johns",
        8020202: "Upper St. Francis",
        8020203: "Lower St. Francis",
        8020204: "Little River Ditches",
        8020205: "L'Anguille",
        8020301: "Lower White-Bayou Des Arc",
        8020302: "Cache",
        8020303: "Lower White",
        8020304: "Big",
        8020401: "Lower Arkansas",
        8020402: "Bayou Meto",
        8030100: "Lower Mississippi-Greenville",
        8030201: "Little Tallahatchie",
        8030202: "Tallahatchie",
        8030203: "Yocona",
        8030204: "Coldwater",
        8030205: "Yalobusha",
        8030206: "Upper Yazoo",
        8030207: "Big Sunflower",
        8030208: "Lower Yazoo",
        8030209: "Deer-Steele",
        8040101: "Ouachita Headwaters",
        8040102: "Upper Ouachita",
        8040103: "Little Missouri",
        8040201: "Lower Ouachita-Smackover",
        8040202: "Lower Ouachita-Bayou De Loutre",
        8040203: "Upper Saline",
        8040204: "Lower Saline",
        8040205: "Bayou Bartholomew",
        8040206: "Bayou D'Arbonne",
        8040207: "Lower Ouachita",
        8040301: "Lower Red",
        8040302: "Castor",
        8040303: "Dugdemona",
        8040304: "Little",
        8040305: "Black",
        8040306: "Bayou Cocodrie",
        8050001: "Boeuf",
        8050002: "Bayou Macon",
        8050003: "Tensas",
        8060100: "Lower Mississippi-Natchez",
        8060201: "Upper Big Black",
        8060202: "Lower Big Black",
        8060203: "Bayou Pierre",
        8060204: "Coles Creek",
        8060205: "Homochitto",
        8060206: "Buffalo",
        8070100: "Lower Mississippi-Baton Rouge",
        8070201: "Bayou Sara-Thompson",
        8070202: "Amite",
        8070203: "Tickfaw",
        8070204: "Lake Maurepas",
        8070205: "Tangipahoa",
        8070300: "Lower Grand",
        8080101: "Atchafalaya",
        8080102: "Bayou Teche",
        8080103: "Vermilion",
        8080201: "Mermentau Headwaters",
        8080202: "Mermentau",
        8080203: "Upper Calcasieu",
        8080204: "Whisky Chitto",
        8080205: "West Fork Calcasieu",
        8080206: "Lower Calcasieu",
        8090100: "Lower Mississippi-New Orleans",
        8090201: "Liberty Bayou-Tchefuncta",
        8090202: "Lake Pontchartrain",
        8090203: "Eastern Louisiana Coastal",
        8090301: "East Central Louisiana Coastal",
        8090302: "West Central Louisiana Coastal",
        9010002: "Des Lacs",
        9010003: "Lower Souris",
        9010004: "Willow",
        9010005: "Deep",
        9010006: "Long Creek",
        9010007: "Headwaters Souris River",
        9010008: "Moose Mountain Creek-Souris River",
        9010009: "Upper Moose Mountain Creek",
        9020101: "Bois De Sioux",
        9020102: "Mustinka",
        9020103: "Otter Tail",
        9020104: "Upper Red",
        9020105: "Western Wild Rice",
        9020106: "Buffalo",
        9020107: "Elm-Marsh",
        9020108: "Eastern Wild Rice",
        9020109: "Goose",
        9020201: "Devils Lake",
        9020202: "Upper Sheyenne",
        9020203: "Middle Sheyenne",
        9020204: "Lower Sheyenne",
        9020205: "Maple",
        9020301: "Sandhill-Wilson",
        9020302: "Red Lakes",
        9020303: "Red Lake",
        9020304: "Thief",
        9020305: "Clearwater",
        9020306: "Grand Marais-Red",
        9020307: "Turtle",
        9020308: "Forest",
        9020309: "Snake",
        9020310: "Park",
        9020311: "Middle Red",
        9020312: "Two Rivers",
        9020314: "Roseau",
        9020315: "Upper Pembina River",
        9020316: "Lower Pembina River",
        9020318: "Rat River-Tourond Creek",
        9020319: "La Salle River",
        9030001: "Rainy Headwaters",
        9030002: "Vermilion",
        9030003: "Rainy Lake",
        9030005: "Little Fork",
        9030006: "Big Fork",
        9030007: "Rapid",
        9030008: "Lower Rainy",
        9030009: "Lake of the Woods",
        9030010: "Big Turtle River-Rainy Lake",
        9030011: "Shoal Lake",
        9040001: "St. Marys",
        9040002: "Belly",
        9040003: "Upper Oldman River",
        9040004: "Oldman River-Willow Creek",
        10020001: "Red Rock",
        10020002: "Beaverhead",
        10020003: "Ruby",
        10020004: "Big Hole",
        10020005: "Jefferson",
        10020006: "Boulder",
        10020007: "Madison",
        10020008: "Gallatin",
        10030101: "Upper Missouri",
        10030102: "Upper Missouri-Dearborn",
        10030103: "Smith",
        10030104: "Sun",
        10030105: "Belt",
        10030201: "Two Medicine",
        10030202: "Cut Bank",
        10030203: "Marias",
        10030204: "Willow",
        10030205: "Teton",
        10040101: "Bullwhacker-Dog",
        10040102: "Arrow",
        10040103: "Judith",
        10040104: "Fort Peck Reservoir",
        10040105: "Big Dry",
        10040106: "Little Dry",
        10040201: "Upper Musselshell",
        10040202: "Middle Musselshell",
        10040203: "Flatwillow",
        10040204: "Box Elder",
        10040205: "Lower Musselshell",
        10050001: "Milk Headwaters",
        10050002: "Upper Milk",
        10050003: "Wild Horse Lake",
        10050004: "Middle Milk",
        10050005: "Big Sandy",
        10050006: "Sage",
        10050007: "Lodge",
        10050008: "Battle",
        10050009: "Peoples",
        10050010: "Cottonwood",
        10050011: "Whitewater",
        10050012: "Lower Milk",
        10050013: "Frenchman",
        10050014: "Beaver",
        10050015: "Rock",
        10050016: "Porcupine",
        10060001: "Prairie Elk-Wolf",
        10060002: "Redwater",
        10060003: "Poplar",
        10060004: "West Fork Poplar",
        10060005: "Charlie-Little Muddy",
        10060006: "Big Muddy",
        10060007: "Brush Lake Closed Basin",
        10070001: "Yellowstone Headwaters",
        10070002: "Upper Yellowstone",
        10070003: "Shields",
        10070004: "Upper Yellowstone-Lake Basin",
        10070005: "Stillwater",
        10070006: "Clarks Fork Yellowstone",
        10070007: "Upper Yellowstone-Pompeys Pillar",
        10070008: "Pryor",
        10080001: "Upper Wind",
        10080002: "Little Wind",
        10080003: "Popo Agie",
        10080004: "Muskrat",
        10080005: "Lower Wind",
        10080006: "Badwater",
        10080007: "Upper Bighorn",
        10080008: "Nowood",
        10080009: "Greybull",
        10080010: "Big Horn Lake",
        10080011: "Dry",
        10080012: "North Fork Shoshone",
        10080013: "South Fork Shoshone",
        10080014: "Shoshone",
        10080015: "Lower Bighorn",
        10080016: "Little Bighorn",
        10090101: "Upper Tongue",
        10090102: "Lower Tongue",
        10090201: "Middle Fork Powder",
        10090202: "Upper Powder",
        10090203: "South Fork Powder",
        10090204: "Salt",
        10090205: "Crazy Woman",
        10090206: "Clear",
        10090207: "Middle Powder",
        10090208: "Little Powder",
        10090209: "Lower Powder",
        10090210: "Mizpah",
        10100001: "Lower Yellowstone-Sunday",
        10100002: "Big Porcupine",
        10100003: "Rosebud",
        10100004: "Lower Yellowstone",
        10100005: "O'Fallon",
        10110101: "Lake Sakakawea",
        10110102: "Little Muddy",
        10110201: "Upper Little Missouri",
        10110202: "Boxelder",
        10110203: "Middle Little Missouri",
        10110204: "Beaver",
        10110205: "Lower Little Missouri",
        10120101: "Antelope",
        10120102: "Dry Fork Cheyenne",
        10120103: "Upper Cheyenne",
        10120104: "Lance",
        10120105: "Lightning",
        10120106: "Angostura Reservoir",
        10120107: "Beaver",
        10120108: "Hat",
        10120109: "Middle Cheyenne-Spring",
        10120110: "Rapid",
        10120111: "Middle Cheyenne-Elk",
        10120112: "Lower Cheyenne",
        10120113: "Cherry",
        10120201: "Upper Belle Fourche",
        10120202: "Lower Belle Fourche",
        10120203: "Redwater",
        10130101: "Painted Woods-Square Butte",
        10130102: "Upper Lake Oahe",
        10130103: "Apple Creek",
        10130104: "Beaver",
        10130105: "Lower Lake Oahe",
        10130106: "West Missouri Coteau",
        10130201: "Knife",
        10130202: "Upper Heart",
        10130203: "Lower Heart",
        10130204: "Upper Cannonball",
        10130205: "Cedar",
        10130206: "Lower Cannonball",
        10130301: "North Fork Grand",
        10130302: "South Fork Grand",
        10130303: "Grand",
        10130304: "South Fork Moreau",
        10130305: "Upper Moreau",
        10130306: "Lower Moreau",
        10140101: "Fort Randall Reservoir",
        10140102: "Bad",
        10140103: "Medicine Knoll",
        10140104: "Medicine",
        10140105: "Crow",
        10140201: "Upper White",
        10140202: "Middle White",
        10140203: "Little White",
        10140204: "Lower White",
        10150001: "Ponca",
        10150002: "Niobrara Headwaters",
        10150003: "Upper Niobrara",
        10150004: "Middle Niobrara",
        10150005: "Snake",
        10150006: "Keya Paha",
        10150007: "Lower Niobrara",
        10160001: "James Headwaters",
        10160002: "Pipestem",
        10160003: "Upper James",
        10160004: "Elm",
        10160005: "Mud",
        10160006: "Middle James",
        10160007: "North Fork Snake",
        10160008: "Snake",
        10160009: "Turtle",
        10160011: "Lower James",
        10170101: "Lewis and Clark Lake",
        10170102: "Vermillion",
        10170103: "Lake Thompson",
        10170201: "Upper Big Sioux",
        10170202: "Middle Big Sioux",
        10170203: "Lower Big Sioux",
        10170204: "Rock",
        10180001: "North Platte Headwaters",
        10180002: "Upper North Platte",
        10180003: "Pathfinder-Seminoe Reservoirs",
        10180004: "Medicine Bow",
        10180005: "Little Medicine Bow",
        10180006: "Sweetwater",
        10180007: "Middle North Platte-Casper",
        10180008: "Glendo Reservoir",
        10180009: "Middle North Platte-Scotts Bluff",
        10180010: "Upper Laramie",
        10180011: "Lower Laramie",
        10180012: "Horse",
        10180013: "Pumpkin",
        10180014: "Lower North Platte",
        10190001: "South Platte Headwaters",
        10190002: "Upper South Platte",
        10190003: "Middle South Platte-Cherry Creek",
        10190004: "Clear",
        10190005: "St. Vrain",
        10190006: "Big Thompson",
        10190007: "Cache La Poudre",
        10190008: "Lone Tree-Owl",
        10190009: "Crow",
        10190010: "Kiowa",
        10190011: "Bijou",
        10190012: "Middle South Platte-Sterling",
        10190013: "Beaver",
        10190014: "Pawnee",
        10190015: "Upper Lodgepole",
        10190016: "Lower Lodgepole",
        10190017: "Sidney Draw",
        10190018: "Lower South Platte",
        10200101: "Middle Platte-Buffalo",
        10200102: "Wood",
        10200103: "Middle Platte-Prairie",
        10200201: "Lower Platte-Shell",
        10200202: "Lower Platte",
        10200203: "Salt",
        10210001: "Upper Middle Loup",
        10210002: "Dismal",
        10210003: "Lower Middle Loup",
        10210004: "South Loup",
        10210005: "Mud",
        10210006: "Upper North Loup",
        10210007: "Lower North Loup",
        10210008: "Calamus",
        10210009: "Loup",
        10210010: "Cedar",
        10220001: "Upper Elkhorn",
        10220002: "North Fork Elkhorn",
        10220003: "Lower Elkhorn",
        10220004: "Logan",
        10230001: "Blackbird-Soldier",
        10230002: "Floyd",
        10230003: "Little Sioux",
        10230004: "Monona-Harrison Ditch",
        10230005: "Maple",
        10230006: "Big Papillion-Mosquito",
        10230007: "Boyer",
        10240001: "Keg-Weeping Water",
        10240002: "West Nishnabotna",
        10240003: "East Nishnabotna",
        10240004: "Nishnabotna",
        10240005: "Tarkio-Wolf",
        10240006: "Little Nemaha",
        10240007: "South Fork Big Nemaha",
        10240008: "Big Nemaha",
        10240009: "West Nodaway",
        10240010: "Nodaway",
        10240011: "Independence-Sugar",
        10240012: "Platte",
        10240013: "One Hundred and Two",
        10250001: "Arikaree",
        10250002: "North Fork Republican",
        10250003: "South Fork Republican",
        10250004: "Upper Republican",
        10250005: "Frenchman",
        10250006: "Stinking Water",
        10250007: "Red Willow",
        10250008: "Medicine",
        10250009: "Harlan County Reservoir",
        10250010: "Upper Sappa",
        10250011: "Lower Sappa",
        10250012: "South Fork Beaver",
        10250013: "Little Beaver",
        10250014: "Beaver",
        10250015: "Prairie Dog",
        10250016: "Middle Republican",
        10250017: "Lower Republican",
        10260001: "Smoky Hill Headwaters",
        10260002: "North Fork Smoky Hill",
        10260003: "Upper Smoky Hill",
        10260004: "Ladder",
        10260005: "Hackberry",
        10260006: "Middle Smoky Hill",
        10260007: "Big",
        10260008: "Lower Smoky Hill",
        10260009: "Upper Saline",
        10260010: "Lower Saline",
        10260011: "Upper North Fork Solomon",
        10260012: "Lower North Fork Solomon",
        10260013: "Upper South Fork Solomon",
        10260014: "Lower South Fork Solomon",
        10260015: "Solomon",
        10270101: "Upper Kansas",
        10270102: "Middle Kansas",
        10270103: "Delaware",
        10270104: "Lower Kansas, Kansas",
        10270201: "Upper Big Blue",
        10270202: "Middle Big Blue",
        10270203: "West Fork Big Blue",
        10270204: "Turkey",
        10270205: "Lower Big Blue",
        10270206: "Upper Little Blue",
        10270207: "Lower Little Blue",
        10280101: "Upper Grand",
        10280102: "Thompson",
        10280103: "Lower Grand",
        10280201: "Upper Chariton",
        10280202: "Lower Chariton",
        10280203: "Little Chariton",
        10290101: "Upper Marais Des Cygnes",
        10290102: "Lower Marais Des Cygnes",
        10290103: "Little Osage",
        10290104: "Marmaton",
        10290105: "Harry S. Truman Reservoir",
        10290106: "Sac",
        10290107: "Pomme De Terre",
        10290108: "South Grand",
        10290109: "Lake of the Ozarks",
        10290110: "Niangua",
        10290111: "Lower Osage",
        10290201: "Upper Gasconade",
        10290202: "Big Piney",
        10290203: "Lower Gasconade",
        10300101: "Lower Missouri-Crooked",
        10300102: "Lower Missouri-Moreau",
        10300103: "Lamine",
        10300104: "Blackwater",
        10300200: "Lower Missouri",
        11010001: "Beaver Reservoir",
        11010002: "James",
        11010003: "Bull Shoals Lake",
        11010004: "Middle White",
        11010005: "Buffalo",
        11010006: "North Fork White",
        11010007: "Upper Black",
        11010008: "Current",
        11010009: "Lower Black",
        11010010: "Spring",
        11010011: "Eleven Point",
        11010012: "Strawberry",
        11010013: "Upper White-Village",
        11010014: "Little Red",
        11020001: "Arkansas Headwaters",
        11020002: "Upper Arkansas",
        11020003: "Fountain",
        11020004: "Chico",
        11020005: "Upper Arkansas-Lake Meredith",
        11020006: "Huerfano",
        11020007: "Apishapa",
        11020008: "Horse",
        11020009: "Upper Arkansas-John Martin Reservoir",
        11020010: "Purgatoire",
        11020011: "Big Sandy",
        11020012: "Rush",
        11020013: "Two Butte",
        11030001: "Middle Arkansas-Lake McKinney",
        11030002: "Whitewoman",
        11030003: "Arkansas-Dodge City",
        11030004: "Coon-Pickerel",
        11030005: "Pawnee",
        11030006: "Buckner",
        11030007: "Upper Walnut Creek",
        11030008: "Lower Walnut Creek",
        11030009: "Rattlesnake",
        11030010: "Gar-Peace",
        11030011: "Cow",
        11030012: "Little Arkansas",
        11030013: "Middle Arkansas-Slate",
        11030014: "North Fork Ninnescah",
        11030015: "South Fork Ninnescah",
        11030016: "Ninnescah",
        11030017: "Upper Walnut River",
        11030018: "Lower Walnut River",
        11040001: "Cimarron Headwaters",
        11040002: "Upper Cimarron",
        11040003: "North Fork Cimarron",
        11040004: "Sand Arroyo",
        11040005: "Bear",
        11040006: "Upper Cimarron-Liberal",
        11040007: "Crooked",
        11040008: "Upper Cimarron-Bluff",
        11050001: "Lower Cimarron-Eagle Chief",
        11050002: "Lower Cimarron-Skeleton",
        11050003: "Lower Cimarron",
        11060001: "Kaw Lake",
        11060002: "Upper Salt Fork Arkansas",
        11060003: "Medicine Lodge",
        11060004: "Lower Salt Fork Arkansas",
        11060005: "Chikaskia",
        11060006: "Black Bear-Red Rock",
        11070101: "Upper Verdigris",
        11070102: "Fall",
        11070103: "Middle Verdigris",
        11070104: "Elk",
        11070105: "Lower Verdigris",
        11070106: "Caney",
        11070107: "Bird",
        11070201: "Neosho Headwaters",
        11070202: "Upper Cottonwood",
        11070203: "Lower Cottonwood",
        11070204: "Upper Neosho",
        11070205: "Middle Neosho",
        11070206: "Lake O' The Cherokees",
        11070207: "Spring",
        11070208: "Elk",
        11070209: "Lower Neosho",
        11080001: "Canadian Headwaters",
        11080002: "Cimarron",
        11080003: "Upper Canadian",
        11080004: "Mora",
        11080005: "Conchas",
        11080006: "Upper Canadian-Ute Reservoir",
        11080007: "Ute",
        11080008: "Revuelto",
        11090101: "Middle Canadian-Trujillo",
        11090102: "Punta de Agua",
        11090103: "Rita Blanca",
        11090104: "Carrizo",
        11090105: "Lake Meredith",
        11090106: "Middle Canadian-Spring",
        11090201: "Lower Canadian-Deer",
        11090202: "Lower Canadian-Walnut",
        11090203: "Little",
        11090204: "Lower Canadian",
        11100101: "Upper Beaver",
        11100102: "Middle Beaver",
        11100103: "Coldwater",
        11100104: "Palo Duro",
        11100201: "Lower Beaver",
        11100202: "Upper Wolf",
        11100203: "Lower Wolf",
        11100301: "Middle North Canadian",
        11100302: "Lower North Canadian",
        11100303: "Deep Fork",
        11110101: "Polecat-Snake",
        11110102: "Dirty-Greenleaf",
        11110103: "Illinois",
        11110104: "Robert S. Kerr Reservoir",
        11110105: "Poteau",
        11110201: "Frog-Mulberry",
        11110202: "Dardanelle Reservoir",
        11110203: "Lake Conway-Point Remove",
        11110204: "Petit Jean",
        11110205: "Cadron",
        11110206: "Fourche La Fave",
        11110207: "Lower Arkansas-Maumelle",
        11120101: "Tierra Blanca",
        11120102: "Palo Duro",
        11120103: "Upper Prairie Dog Town Fork Red",
        11120104: "Tule",
        11120105: "Lower Prairie Dog Town Fork Red",
        11120201: "Upper Salt Fork Red",
        11120202: "Lower Salt Fork Red",
        11120301: "Upper North Fork Red",
        11120302: "Middle North Fork Red",
        11120303: "Lower North Fork Red",
        11120304: "Elm Fork Red",
        11130101: "Groesbeck-Sandy",
        11130102: "Blue-China",
        11130103: "North Pease",
        11130104: "Middle Pease",
        11130105: "Pease",
        11130201: "Farmers-Mud",
        11130202: "Cache",
        11130203: "West Cache",
        11130204: "North Wichita",
        11130205: "South Wichita",
        11130206: "Wichita",
        11130207: "Southern Beaver",
        11130208: "Northern Beaver",
        11130209: "Little Wichita",
        11130210: "Lake Texoma",
        11130301: "Washita Headwaters",
        11130302: "Upper Washita",
        11130303: "Middle Washita",
        11130304: "Lower Washita",
        11140101: "Bois D'arc-Island",
        11140102: "Blue",
        11140103: "Muddy Boggy",
        11140104: "Clear Boggy",
        11140105: "Kiamichi",
        11140106: "Pecan-Waterhole",
        11140107: "Upper Little",
        11140108: "Mountain Fork",
        11140109: "Lower Little Arkansas, Oklahoma",
        11140201: "McKinney-Posten Bayous",
        11140202: "Middle Red-Coushatta",
        11140203: "Loggy Bayou",
        11140204: "Red Chute",
        11140205: "Bodcau Bayou",
        11140206: "Bayou Pierre",
        11140207: "Lower Red-Lake Iatt",
        11140208: "Saline Bayou",
        11140209: "Black Lake Bayou",
        11140301: "Sulphur Headwaters",
        11140302: "Lower Sulpher",
        11140303: "White Oak Bayou",
        11140304: "Cross Bayou",
        11140305: "Lake O'the Pines",
        11140306: "Caddo Lake",
        11140307: "Little Cypress",
        12010001: "Upper Sabine",
        12010002: "Middle Sabine",
        12010003: "Lake Fork",
        12010004: "Toledo Bend Reservoir",
        12010005: "Lower Sabine",
        12020001: "Upper Neches",
        12020002: "Middle Neches",
        12020003: "Lower Neches",
        12020004: "Upper Angelina",
        12020005: "Lower Angelina",
        12020006: "Village",
        12020007: "Pine Island Bayou",
        12030101: "Upper West Fork Trinity",
        12030102: "Lower West Fork Trinity",
        12030103: "Elm Fork Trinity",
        12030104: "Denton",
        12030105: "Upper Trinity",
        12030106: "East Fork Trinity",
        12030107: "Cedar",
        12030108: "Richland",
        12030109: "Chambers",
        12030201: "Lower Trinity-Tehuacana",
        12030202: "Lower Trinity-Kickapoo",
        12030203: "Lower Trinity",
        12040101: "West Fork San Jacinto",
        12040102: "Spring",
        12040103: "East Fork San Jacinto",
        12040104: "Buffalo-San Jacinto",
        12040201: "Sabine Lake",
        12040202: "East Galveston Bay",
        12040203: "North Galveston Bay",
        12040204: "West Galveston Bay",
        12040205: "Austin-Oyster",
        12050001: "Yellow House Draw",
        12050002: "Blackwater Draw",
        12050003: "North Fork Double Mountain Fork Brazos",
        12050004: "Double Mountain Fork Brazos",
        12050005: "Running Water Draw",
        12050006: "White",
        12050007: "Salt Fork Brazos",
        12060101: "Middle Brazos-Millers",
        12060102: "Upper Clear Fork Brazos",
        12060103: "Paint",
        12060104: "Lower Clear Fork Brazos",
        12060105: "Hubbard",
        12060201: "Middle Brazos-Palo Pinto",
        12060202: "Middle Brazos-Lake Whitney",
        12060203: "Bosque",
        12060204: "North Bosque",
        12070101: "Lower Brazos-Little Brazos",
        12070102: "Yegua",
        12070103: "Navasota",
        12070104: "Lower Brazos",
        12070201: "Leon",
        12070202: "Cowhouse",
        12070203: "Lampasas",
        12070204: "Little",
        12070205: "San Gabriel",
        12080001: "Lost Draw",
        12080002: "Colorado Headwaters",
        12080003: "Monument-Seminole Draws",
        12080004: "Mustang Draw",
        12080005: "Johnson Draw",
        12080006: "Sulphur Springs Draw",
        12080007: "Beals",
        12080008: "Upper Colorado",
        12090101: "Middle Colorado-Elm",
        12090102: "South Concho",
        12090103: "Middle Concho",
        12090104: "North Concho",
        12090105: "Concho",
        12090106: "Middle Colorado",
        12090107: "Pecan Bayou",
        12090108: "Jim Ned",
        12090109: "San Saba",
        12090110: "Brady",
        12090201: "Buchanan-Lyndon B. Johnson Lakes",
        12090202: "North Llano",
        12090203: "South Llano",
        12090204: "Llano",
        12090205: "Austin-Travis Lakes",
        12090206: "Pedernales",
        12090301: "Lower Colorado-Cummins",
        12090302: "Lower Colorado",
        12090401: "San Bernard",
        12090402: "East Matagorda Bay",
        12100101: "Lavaca",
        12100102: "Navidad",
        12100201: "Upper Guadalupe",
        12100202: "Middle Guadalupe",
        12100203: "San Marcos",
        12100204: "Lower Guadalupe",
        12100301: "Upper San Antonio",
        12100302: "Medina",
        12100303: "Lower San Antonio",
        12100304: "Cibolo",
        12100401: "East Matagorda Bay",
        12100402: "West Matagorda Bay",
        12100403: "East San Antonio Bay",
        12100404: "West San Antonio Bay",
        12100405: "Aransas Bay",
        12100406: "Mission",
        12100407: "Aransas",
        12110101: "Nueces Headwaters",
        12110102: "West Nueces",
        12110103: "Upper Nueces",
        12110104: "Turkey",
        12110105: "Middle Nueces",
        12110106: "Upper Frio",
        12110107: "Hondo",
        12110108: "Lower Frio",
        12110109: "San Miguel",
        12110110: "Atascosa",
        12110111: "Lower Nueces",
        12110201: "North Corpus Christi Bay",
        12110202: "South Corpus Christi Bay",
        12110203: "North Laguna Madre",
        12110204: "San Fernando",
        12110205: "Baffin Bay",
        12110206: "Palo Blanco",
        12110207: "Central Laguna Madre",
        12110208: "South Laguna Madre",
        13010001: "Rio Grande Headwaters",
        13010002: "Alamosa-Trinchera",
        13010003: "San Luis",
        13010004: "Saguache",
        13010005: "Conejos",
        13020101: "Upper Rio Grande",
        13020102: "Rio Chama",
        13020201: "Rio Grande-Santa Fe",
        13020202: "Jemez",
        13020203: "Rio Grande-Albuquerque",
        13020204: "Rio Puerco",
        13020205: "Arroyo Chico",
        13020206: "North Plains",
        13020207: "Rio San Jose",
        13020208: "Plains of San Agustin",
        13020209: "Rio Salado",
        13020210: "Jornada Del Muerto",
        13020211: "Elephant Butte Reservoir",
        13030101: "Caballo",
        13030102: "El Paso-Las Cruces",
        13030103: "Jornada Draw",
        13030201: "Playas Lake",
        13030202: "Mimbres",
        13040100: "Rio Grande-Fort Quitman",
        13040201: "Cibolo-Red Light",
        13040202: "Alamito",
        13040203: "Black Hills-Fresno",
        13040204: "Terlingua",
        13040205: "Big Bend",
        13040206: "Maravillas",
        13040207: "Santiago Draw",
        13040208: "Reagan-Sanderson",
        13040209: "San Francisco",
        13040210: "Lozier Canyon",
        13040211: "Big Canyon",
        13040212: "Amistad Reservoir",
        13040301: "Upper Devils",
        13040302: "Lower Devils",
        13040303: "Dry Devils",
        13050001: "Western Estancia",
        13050002: "Eastern Estancia",
        13050003: "Tularosa Valley",
        13050004: "Salt Basin",
        13060001: "Pecos Headwaters",
        13060002: "Pintada Arroyo",
        13060003: "Upper Pecos",
        13060004: "Taiban",
        13060005: "Arroyo Del Macho",
        13060006: "Gallo Arroyo",
        13060007: "Upper Pecos-Long Arroyo",
        13060008: "Rio Hondo",
        13060009: "Rio Felix",
        13060010: "Rio Penasco",
        13060011: "Upper Pecos-Black",
        13070001: "Lower Pecos-Red Bluff Reservoir",
        13070002: "Delaware",
        13070003: "Toyah",
        13070004: "Salt Draw",
        13070005: "Barrilla Draw",
        13070006: "Coyanosa-Hackberry Draws",
        13070007: "Landreth-Monument Draws",
        13070008: "Pecos",
        13070009: "Tunas",
        13070010: "Independence",
        13070011: "Howard Draw",
        13070012: "Lower Pecos",
        13080001: "Elm-Sycamore",
        13080002: "San Ambrosia-Santa Isabel",
        13080003: "International Falcon Reservoir",
        13090001: "Los Olmos",
        13090002: "Lower Rio Grande",
        14010001: "Colorado Headwaters",
        14010002: "Blue",
        14010003: "Eagle",
        14010004: "Roaring Fork",
        14010005: "Colorado Headwaters-Plateau",
        14020001: "East-Taylor",
        14020002: "Upper Gunnison",
        14020003: "Tomichi",
        14020004: "North Fork Gunnison",
        14020005: "Lower Gunnison",
        14020006: "Uncompahgre",
        14030001: "Westwater Canyon",
        14030002: "Upper Dolores",
        14030003: "San Miguel",
        14030004: "Lower Dolores",
        14030005: "Upper Colorado-Kane Springs",
        14040101: "Upper Green",
        14040102: "New Fork",
        14040103: "Upper Green-Slate",
        14040104: "Big Sandy",
        14040105: "Bitter",
        14040106: "Upper Green-Flaming Gorge Reservoir",
        14040107: "Blacks Fork",
        14040108: "Muddy",
        14040109: "Vermilion",
        14040200: "Great Divide Closed Basin",
        14050001: "Upper Yampa",
        14050002: "Lower Yampa",
        14050003: "Little Snake",
        14050004: "Muddy",
        14050005: "Upper White",
        14050006: "Piceance-Yellow",
        14050007: "Lower White",
        14060003: "Duchesne",
        14060004: "Strawberry",
        14060005: "Lower Green-Desolation Canyon",
        14060006: "Willow",
        14060007: "Price",
        14060008: "Lower Green",
        14060009: "San Rafael",
        14060010: "Lower Green-Diamond",
        14070001: "Upper Lake Powell",
        14070002: "Muddy",
        14070003: "Fremont",
        14070004: "Dirty Devil",
        14070005: "Escalante",
        14070006: "Lower Lake Powell",
        14070007: "Paria",
        14080101: "Upper San Juan",
        14080102: "Piedra",
        14080103: "Blanco Canyon",
        14080104: "Animas",
        14080105: "Middle San Juan",
        14080106: "Chaco",
        14080107: "Mancos",
        14080201: "Lower San Juan-Four Corners",
        14080202: "McElmo",
        14080203: "Montezuma",
        14080204: "Chinle",
        14080205: "Lower San Juan",
        15010001: "Lower Colorado-Marble Canyon",
        15010002: "Grand Canyon",
        15010003: "Kanab",
        15010004: "Havasu Canyon",
        15010005: "Lake Mead",
        15010006: "Grand Wash",
        15010007: "Red Lake",
        15010008: "Upper Virgin",
        15010009: "Fort Pearce Wash",
        15010010: "Lower Virgin",
        15010011: "White",
        15010012: "Muddy",
        15010013: "Meadow Valley Wash",
        15010014: "Detrital Wash",
        15010015: "Las Vegas Wash",
        15020001: "Little Colorado Headwaters",
        15020002: "Upper Little Colorado",
        15020003: "Carrizo Wash",
        15020004: "Zuni",
        15020005: "Silver",
        15020006: "Upper Puerco",
        15020007: "Lower Puerco",
        15020008: "Middle Little Colorado",
        15020009: "Leroux Wash",
        15020010: "Chevelon Canyon",
        15020011: "Cottonwood Wash",
        15020012: "Corn-Oraibi",
        15020013: "Polacca Wash",
        15020014: "Jadito Wash",
        15020015: "Canyon Diablo",
        15020016: "Lower Little Colorado",
        15020017: "Dinnebito Wash",
        15020018: "Moenkopi Wash",
        15030101: "Havasu-Mohave Lakes",
        15030102: "Piute Wash",
        15030103: "Sacramento Wash",
        15030104: "Imperial Reservoir",
        15030105: "Bouse Wash",
        15030106: "Tyson Wash",
        15030107: "Lower Colorado",
        15030108: "Yuma Desert",
        15030201: "Big Sandy",
        15030202: "Burro",
        15030203: "Santa Maria",
        15030204: "Bill Williams",
        15040001: "Upper Gila",
        15040002: "Upper Gila-Mangas",
        15040003: "Animas Valley",
        15040004: "San Francisco",
        15040005: "Upper Gila-San Carlos Reservoir",
        15040006: "San Simon",
        15040007: "San Carlos",
        15050100: "Middle Gila",
        15050201: "Willcox Playa",
        15050202: "Upper San Pedro",
        15050203: "Lower San Pedro",
        15050301: "Upper Santa Cruz",
        15050302: "Rillito",
        15050303: "Lower Santa Cruz",
        15050304: "Brawley Wash",
        15050305: "Aguirre Valley",
        15050306: "Santa Rosa Wash",
        15060101: "Black",
        15060102: "White",
        15060103: "Upper Salt",
        15060104: "Carrizo",
        15060105: "Tonto",
        15060106: "Lower Salt",
        15060201: "Big Chino-Williamson Valley",
        15060202: "Upper Verde",
        15060203: "Lower Verde",
        15070101: "Lower Gila-Painted Rock Reservoir",
        15070102: "Aqua Fria",
        15070103: "Hassayampa",
        15070104: "Centennial Wash",
        15070201: "Lower Gila",
        15070202: "Tenmile Wash",
        15070203: "San Cristobal Wash",
        15080101: "San Simon Wash",
        15080102: "Rio Sonoyta",
        15080103: "Tule Desert",
        15080200: "Rio De La Concepcion",
        15080301: "Whitewater Draw",
        15080302: "San Bernardino Valley",
        15080303: "Cloverdale",
        16010101: "Upper Bear",
        16010102: "Central Bear",
        16010201: "Bear Lake",
        16010202: "Middle Bear",
        16010203: "Little Bear-Logan",
        16010204: "Lower Bear-Malad",
        16020101: "Upper Weber",
        16020102: "Lower Weber",
        16020201: "Utah Lake",
        16020202: "Spanish Fork",
        16020203: "Provo",
        16020204: "Jordan",
        16020301: "Hamlin-Snake Valleys",
        16020302: "Pine Valley",
        16020303: "Tule Valley",
        16020304: "Rush-Tooele Valleys",
        16020305: "Skull Valley",
        16020306: "Southern Great Salt Lake Desert",
        16020307: "Pilot-Thousand Springs, Nevada, Utah",
        16020308: "Northern Great Salt Lake Desert",
        16020309: "Curlew Valley",
        16020310: "Great Salt Lake",
        16030001: "Upper Sevier",
        16030002: "East Fork Sevier",
        16030003: "Middle Sevier",
        16030004: "San Pitch",
        16030005: "Lower Sevier",
        16030006: "Escalante Desert",
        16030007: "Beaver Bottoms-Upper Beaver",
        16030008: "Lower Beaver",
        16030009: "Sevier Lake",
        16040101: "Upper Humboldt",
        16040102: "North Fork Humboldt",
        16040103: "South Fork Humboldt",
        16040104: "Pine",
        16040105: "Middle Humboldt",
        16040106: "Rock",
        16040107: "Reese",
        16040108: "Lower Humboldt",
        16040109: "Little Humboldt",
        16040201: "Upper Quinn",
        16040202: "Lower Quinn",
        16040203: "Smoke Creek Desert",
        16040204: "Massacre Lake",
        16040205: "Thousand-Virgin",
        16050101: "Lake Tahoe",
        16050102: "Truckee",
        16050103: "Pyramid-Winnemucca Lakes",
        16050104: "Granite Springs Valley",
        16050201: "Upper Carson",
        16050202: "Middle Carson",
        16050203: "Carson Desert",
        16050301: "East Walker",
        16050302: "West Walker",
        16050303: "Walker",
        16050304: "Walker Lake",
        16060001: "Dixie Valley",
        16060002: "Gabbs Valley",
        16060003: "Southern Big Smoky Valley",
        16060004: "Northern Big Smoky Valley",
        16060005: "Diamond-Monitor Valleys",
        16060006: "Little Smoky-Newark Valleys",
        16060007: "Long-Ruby Valleys",
        16060008: "Spring-Steptoe Valleys",
        16060009: "Dry Lake Valley",
        16060010: "Fish Lake-Soda Spring Valleys",
        16060011: "Ralston-Stone Cabin Valleys",
        16060012: "Hot Creek-Railroad Valleys",
        16060013: "Cactus-Sarcobatus Flats",
        16060014: "Sand Spring-Tikaboo Valleys",
        16060015: "Ivanpah-Pahrump Valleys",
        17010101: "Middle Kootenai",
        17010102: "Fisher",
        17010103: "Yaak",
        17010104: "Lower Kootenai",
        17010105: "Moyie",
        17010106: "Elk",
        17010107: "Headwaters Kootenai River",
        17010108: "Upper Kootenai River",
        17010109: "Duncan River",
        17010110: "Slocan River",
        17010201: "Upper Clark Fork",
        17010202: "Flint-Rock",
        17010203: "Blackfoot",
        17010204: "Middle Clark Fork",
        17010205: "Bitterroot",
        17010206: "North Fork Flathead",
        17010207: "Middle Fork Flathead",
        17010208: "Flathead Lake",
        17010209: "South Fork Flathead",
        17010210: "Stillwater",
        17010211: "Swan",
        17010212: "Lower Flathead",
        17010213: "Lower Clark Fork",
        17010214: "Pend Oreille Lake",
        17010215: "Priest",
        17010216: "Pend Oreille",
        17010301: "Upper Coeur d'Alene",
        17010302: "South Fork Coeur d'Alene",
        17010303: "Coeur d'Alene Lake",
        17010304: "St. Joe",
        17010305: "Upper Spokane",
        17010306: "Hangman",
        17010307: "Lower Spokane",
        17010308: "Little Spokane",
        17020001: "Franklin D. Roosevelt Lake",
        17020002: "Kettle",
        17020003: "Colville",
        17020004: "Sanpoil",
        17020005: "Chief Joseph",
        17020006: "Okanogan",
        17020007: "Similkameen",
        17020008: "Methow",
        17020009: "Lake Chelan",
        17020010: "Upper Columbia-Entiat",
        17020011: "Wenatchee",
        17020012: "Moses Coulee",
        17020013: "Upper Crab",
        17020014: "Banks Lake",
        17020015: "Lower Crab",
        17020016: "Upper Columbia-Priest Rapids",
        17020017: "Headwaters Columbia River",
        17020018: "Canoe River-McNaughton Lake",
        17020019: "McNaughton Lake-Columbia River",
        17020020: "Goldstream River-Columbia River",
        17020021: "Upper Arrow Lake-Columbia River",
        17030001: "Upper Yakima",
        17030002: "Naches",
        17030003: "Lower Yakima",
        17040101: "Snake Headwaters",
        17040102: "Gros Ventre",
        17040103: "Greys-Hobock",
        17040104: "Palisades",
        17040105: "Salt",
        17040201: "Idaho Falls",
        17040202: "Upper Henrys",
        17040203: "Lower Henrys",
        17040204: "Teton",
        17040205: "Willow",
        17040206: "American Falls",
        17040207: "Blackfoot",
        17040208: "Portneuf",
        17040209: "Lake Walcott",
        17040210: "Raft",
        17040211: "Goose",
        17040212: "Upper Snake-Rock",
        17040213: "Salmon Falls",
        17040214: "Beaver-Camas",
        17040215: "Medicine Lodge",
        17040216: "Birch",
        17040217: "Little Lost",
        17040218: "Big Lost",
        17040219: "Big Wood",
        17040220: "Camas",
        17040221: "Little Wood",
        17050101: "C.J. Strike Reservoir",
        17050102: "Bruneau",
        17050103: "Middle Snake-Succor",
        17050104: "Upper Owyhee",
        17050105: "South Fork Owyhee",
        17050106: "East Little Owyhee",
        17050107: "Middle Owyhee",
        17050108: "Jordan",
        17050109: "Crooked-Rattlesnake",
        17050110: "Lower Owyhee",
        17050111: "North and Middle Forks Boise",
        17050112: "Boise-Mores",
        17050113: "South Fork Boise",
        17050114: "Lower Boise",
        17050115: "Middle Snake-Payette",
        17050116: "Upper Malheur",
        17050117: "Lower Malheur",
        17050118: "Bully",
        17050119: "Willow",
        17050120: "South Fork Payette",
        17050121: "Middle Fork Payette",
        17050122: "Payette",
        17050123: "North Fork Payette",
        17050124: "Weiser",
        17050201: "Brownlee Reservoir",
        17050202: "Burnt",
        17050203: "Powder",
        17060101: "Hells Canyon",
        17060102: "Imnaha",
        17060103: "Lower Snake-Asotin",
        17060104: "Upper Grande Ronde",
        17060105: "Wallowa",
        17060106: "Lower Grande Ronde",
        17060107: "Lower Snake-Tucannon",
        17060108: "Palouse",
        17060109: "Rock",
        17060110: "Lower Snake",
        17060201: "Upper Salmon",
        17060202: "Pahsimeroi",
        17060203: "Middle Salmon-Panther",
        17060204: "Lemhi",
        17060205: "Upper Middle Fork Salmon",
        17060206: "Lower Middle Fork Salmon",
        17060207: "Middle Salmon-Chamberlain",
        17060208: "South Fork Salmon",
        17060209: "Lower Salmon",
        17060210: "Little Salmon",
        17060301: "Upper Selway",
        17060302: "Lower Selway",
        17060303: "Lochsa",
        17060304: "Middle Fork Clearwater",
        17060305: "South Fork Clearwater",
        17060306: "Clearwater",
        17060307: "Upper North Fork Clearwater",
        17060308: "Lower North Fork Clearwater",
        17070101: "Middle Columbia-Lake Wallula",
        17070102: "Walla Walla",
        17070103: "Umatilla",
        17070104: "Willow",
        17070105: "Middle Columbia-Hood",
        17070106: "Klickitat",
        17070201: "Upper John Day",
        17070202: "North Fork John Day",
        17070203: "Middle Fork John Day",
        17070204: "Lower John Day",
        17070301: "Upper Deschutes",
        17070302: "Little Deschutes",
        17070303: "Beaver-South Fork",
        17070304: "Upper Crooked",
        17070305: "Lower Crooked",
        17070306: "Lower Deschutes",
        17070307: "Trout",
        17080001: "Lower Columbia-Sandy",
        17080002: "Lewis",
        17080003: "Lower Columbia-Clatskanie",
        17080004: "Upper Cowlitz",
        17080005: "Lower Cowlitz",
        17080006: "Lower Columbia",
        17090001: "Middle Fork Willamette",
        17090002: "Coast Fork Willamette",
        17090003: "Upper Willamette",
        17090004: "Mckenzie",
        17090005: "North Santiam",
        17090006: "South Santiam",
        17090007: "Middle Willamette",
        17090008: "Yamhill",
        17090009: "Molalla-Pudding",
        17090010: "Tualatin",
        17090011: "Clackamas",
        17090012: "Lower Willamette",
        17100101: "Hoh-Quillayute",
        17100102: "Queets-Quinault",
        17100103: "Upper Chehalis",
        17100104: "Lower Chehalis",
        17100105: "Grays Harbor",
        17100106: "Willapa Bay",
        17100201: "Necanicum",
        17100202: "Nehalem",
        17100203: "Wilson-Trusk-Nestuccu",
        17100204: "Siletz-Yaquina",
        17100205: "Alsea",
        17100206: "Siuslaw",
        17100207: "Siltcoos",
        17100301: "North Umpqua",
        17100302: "South Umpqua",
        17100303: "Umpqua",
        17100304: "Coos",
        17100305: "Coquille",
        17100306: "Sixes",
        17100307: "Upper Rogue",
        17100308: "Middle Rogue",
        17100309: "Applegate",
        17100310: "Lower Rogue",
        17100311: "Illinois",
        17100312: "Chetco",
        17110001: "Sumas River",
        17110002: "Strait of Georgia",
        17110003: "San Juan Islands",
        17110004: "Nooksack",
        17110005: "Upper Skagit",
        17110006: "Sauk",
        17110007: "Lower Skagit",
        17110008: "Stillaguamish",
        17110009: "Skykomish",
        17110010: "Snoqualmie",
        17110011: "Snohomish",
        17110012: "Lake Washington",
        17110013: "Duwamish",
        17110014: "Puyallup",
        17110015: "Nisqually",
        17110016: "Deschutes",
        17110017: "Skokomish",
        17110018: "Hood Canal",
        17110019: "Puget Sound",
        17110020: "Dungeness-Elwha",
        17110021: "Crescent-Hoko",
        17120001: "Harney-Malheur Lakes",
        17120002: "Silvies",
        17120003: "Donner und Blitzen",
        17120004: "Silver",
        17120005: "Summer Lake",
        17120006: "Lake Abert",
        17120007: "Warner Lakes",
        17120008: "Guano",
        17120009: "Alvord Lake",
        18010101: "Smith",
        18010102: "Mad-Redwood",
        18010103: "Upper Eel",
        18010104: "Middle Fork Eel",
        18010105: "Lower Eel",
        18010106: "South Fork Eel",
        18010107: "Mattole",
        18010108: "Big-Navarro-Garcia",
        18010109: "Gualala-Salmon",
        18010110: "Russian",
        18010201: "Williamson",
        18010202: "Sprague",
        18010203: "Upper Klamath Lake",
        18010204: "Lost",
        18010205: "Butte",
        18010206: "Upper Klamath",
        18010207: "Shasta",
        18010208: "Scott",
        18010209: "Lower Klamath",
        18010210: "Salmon",
        18010211: "Trinity",
        18010212: "South Fork Trinity",
        18020001: "Goose Lake",
        18020002: "Upper Pit",
        18020003: "Lower Pit",
        18020004: "McCloud",
        18020005: "Sacramento Headwaters",
        18020104: "Sacramento-Stone Corral",
        18020111: "Lower American",
        18020115: "Upper Stony",
        18020116: "Upper Cache",
        18020121: "North Fork Feather",
        18020122: "East Branch North Fork Feather",
        18020123: "Middle Fork Feather",
        18020125: "Upper Yuba",
        18020126: "Upper Bear",
        18020128: "North Fork American",
        18020129: "South Fork American",
        18020151: "Cow Creek",
        18020152: "Cottonwood Creek",
        18020153: "Battle Creek",
        18020154: "Clear Creek-Sacramento River",
        18020155: "Paynes Creek-Sacramento River",
        18020156: "Thomes Creek-Sacramento River",
        18020157: "Big Chico Creek-Sacramento River",
        18020158: "Butte Creek",
        18020159: "Honcut Headwaters-Lower Feather",
        18020161: "Upper Coon-Upper Auburn",
        18020162: "Upper Putah",
        18020163: "Lower Sacramento",
        18030001: "Upper Kern",
        18030002: "South Fork Kern",
        18030003: "Middle Kern-Upper Tehachapi-Grapevine",
        18030004: "Upper Poso",
        18030005: "Upper Deer-Upper White",
        18030006: "Upper Tule",
        18030007: "Upper Kaweah",
        18030009: "Upper Dry",
        18030010: "Upper King",
        18030012: "Tulare Lake Bed",
        18040001: "Middle San Joaquin-Lower Chowchilla",
        18040002: "Lower San Joaquin River",
        18040003: "San Joaquin Delta",
        18040006: "Upper San Joaquin",
        18040007: "Fresno River",
        18040008: "Upper Merced",
        18040009: "Upper Tuolumne",
        18040010: "Upper Stanislaus",
        18040011: "Upper Calaveras California",
        18040012: "Upper Mokelumne",
        18040013: "Upper Cosumnes",
        18040014: "Panoche-San Luis Reservoir",
        18040051: "Rock Creek-French Camp Slough",
        18050001: "Suisun Bay",
        18050002: "San Pablo Bay",
        18050003: "Coyote",
        18050004: "San Francisco Bay",
        18050005: "Tomales-Drake Bays",
        18050006: "San Francisco Coastal South",
        18060002: "Pajaro",
        18060003: "Carrizo Plain",
        18060004: "Estrella",
        18060006: "Central Coastal",
        18060007: "Cuyama",
        18060009: "San Antonio",
        18060010: "Santa Ynez",
        18060013: "Santa Barbara Coastal",
        18070101: "Ventura",
        18070102: "Santa Clara",
        18070103: "Calleguas",
        18070104: "Santa Monica Bay",
        18070105: "Los Angeles",
        18070106: "San Gabriel",
        18070201: "Seal Beach",
        18070202: "San Jacinto",
        18070204: "Newport Bay",
        18070301: "Aliso-San Onofre",
        18070302: "Santa Margarita",
        18070303: "San Luis Rey-Escondido",
        18070304: "San Diego",
        18070305: "Cottonwood-Tijuana",
        18080001: "Surprise Valley",
        18080002: "Madeline Plains",
        18080003: "Honey-Eagle Lakes",
        18090101: "Mono Lake",
        18090102: "Crowley Lake",
        18090103: "Owens Lake",
        18090201: "Eureka-Saline Valleys",
        18090202: "Upper Amargosa",
        18090203: "Death Valley-Lower Amargosa",
        18090204: "Panamint Valley",
        18090205: "Indian Wells-Searles Valleys",
        18090206: "Antelope-Fremont Valleys",
        18090207: "Coyote-Cuddeback Lakes",
        18090208: "Mojave",
        18100100: "Southern Mojave",
        18100201: "Whitewater River",
        18100202: "Carrizo Creek",
        18100203: "San Felipe Creek",
        18100204: "Salton Sea",
        19010102: "Ketchikan",
        19010103: "Prince of Wales",
        19010104: "Bradfield Canal",
        19010105: "Burroughs Bay",
        19010106: "Headwaters Portland Canal",
        19010107: "Outlet Portland Canal",
        19010204: "Admiralty Island",
        19010205: "Lower Iskut",
        19010206: "Holkham Bay",
        19010207: "Stikine River",
        19010208: "Thomas Bay",
        19010209: "Etolin-Zarembo-Wrangell Islands",
        19010210: "Kuiu-Kupreanof-Mitkof Islands",
        19010212: "Baranof Island",
        19010301: "Lynn Canal",
        19010302: "Glacier Bay",
        19010303: "Chilkat-Skagway Rivers",
        19010304: "Taku River",
        19010402: "Bering Glacier",
        19010403: "Tatshenshini River",
        19010404: "Alsek River",
        19010405: "Yakutat Bay-Gulf of Alaska",
        19010406: "Palma Bay",
        19020101: "Upper Copper River",
        19020102: "Middle Copper River",
        19020103: "Chitina River",
        19020104: "Lower Copper River",
        19020201: "Eastern Prince William Sound",
        19020202: "Resurrection River-Frontal Resurrection Bay",
        19020203: "Prince William Sound",
        19020301: "Lower Kenai Peninsula",
        19020302: "Upper Kenai Peninsula",
        19020401: "Anchorage",
        19020402: "Matanuska",
        19020501: "Upper Susitna River",
        19020502: "Chulitna River",
        19020503: "Talkeetna River",
        19020504: "Yentna River",
        19020505: "Lower Susitna River",
        19020601: "Redoubt-Trading Bays",
        19020701: "Kodiak-Afognak Islands",
        19020702: "Shelikof Strait",
        19020800: "Cook Inlet",
        19030102: "Fox Islands",
        19030103: "Western Aleutian Islands",
        19030104: "Pribilof Islands",
        19030201: "Port Heiden",
        19030202: "Ugashik Bay",
        19030203: "Egegik Bay",
        19030204: "Naknek",
        19030205: "Lake Clark",
        19030206: "Lake Iliamna",
        19030301: "Upper Nushagak River",
        19030302: "Mulchatna River",
        19030303: "Lower Nushagak River",
        19030305: "Togiak",
        19030306: "Nushagak Bay",
        19030401: "North Fork Kuskokwim River",
        19030403: "Takotna River",
        19030405: "Stony River",
        19030407: "South Fork Kuskokwim River",
        19030501: "Aniak",
        19030502: "Kuskokwim Delta",
        19030503: "Nunavak-St.Matthew Islands",
        19050101: "St. Lawrence Island",
        19050102: "Unalakleet",
        19050103: "Norton Bay",
        19050104: "Nome",
        19050105: "Imuruk Basin",
        19050201: "Shishmaref",
        19050203: "Buckland River",
        19050301: "Selawik Lake",
        19050302: "Upper Kobuk River",
        19050303: "Middle Kobuk River",
        19050304: "Lower Kobuk River",
        19050401: "Upper Noatak River",
        19050402: "Middle Noatak River",
        19050403: "Lower Noatak River",
        19050404: "Wulik-Kivalina Rivers",
        19050405: "Lisburne Peninsula",
        19050500: "Kotzebue Sound",
        19060101: "Kukpowruk River",
        19060102: "Kokolik River",
        19060103: "Utukok River",
        19060201: "Kuk River",
        19060202: "Northwest Coast",
        19060203: "Meade River",
        19060204: "Ikpikpuk River",
        19060205: "Harrison Bay",
        19060206: "Admiralty Bay-Dease Inlet",
        19060301: "Upper Colville River",
        19060302: "Killik River",
        19060303: "Chandler-Anaktuvuk Rivers",
        19060304: "Lower Colville River",
        19060401: "Kuparuk River",
        19060402: "Sagavanirktok River",
        19060403: "Mikkelson Bay",
        19060501: "Canning River",
        19060502: "Camden Bay",
        19060504: "Kongakut River-Beaufort Lagoon",
        19060505: "Firth River",
        19060506: "Babbage River",
        19070101: "Atlin Lake",
        19070102: "Bennett Lake",
        19070103: "Tagish Lake",
        19070104: "Takhini River",
        19070402: "White River",
        19070403: "Ladue River-White River",
        19070502: "Fortymile River",
        19070503: "Sixtymile River-Yukon River",
        19070505: "Tatonduk River-Yukon River",
        19070506: "Charley River-Yukon River",
        19080103: "Old Crow River",
        19080104: "Coleen River",
        19080105: "Sheenjek River",
        19080106: "Black River",
        19080107: "Grass River",
        19080108: "Porcupine Flats-Porcupine River",
        19080201: "Middle Fork-North Fork Chandalar Rivers",
        19080202: "East Fork Chandalar River",
        19080203: "Christian River",
        19080204: "Lower Chandalar River",
        19080301: "Nebesna-Chisana Rivers",
        19080302: "Tok-Tanana River",
        19080303: "Healy Lake-Tanana River",
        19080304: "Delta River",
        19080305: "Salcha River",
        19080306: "Chena River",
        19080307: "Tanana Flats-Tanana River",
        19080308: "Nenana River",
        19080309: "Tolovana River",
        19080310: "Kantishna River",
        19080311: "Lower Tanana River",
        19080401: "Birch Creek",
        19080402: "Beaver Creek",
        19080403: "Yukon Flats-Yukon River",
        19080404: "Ramparts-Yukon River",
        19090101: "Upper Koyukuk River",
        19090102: "South Fork Koyukuk River",
        19090103: "Alatna River",
        19090104: "Kanuti River",
        19090105: "Allakaket-Koyukuk River",
        19090106: "Huslia River",
        19090107: "Dulbi River",
        19090108: "Koyukuk Flats-Koyukuk River",
        19090109: "Kateel River-Koyukuk River",
        19090201: "Tozitna River",
        19090202: "Nowitna River",
        19090203: "Melozitna River",
        19090204: "Klatsuta River-Yukon River",
        19090205: "Galena-Yukon River",
        19090301: "Anvik River-Yukon River",
        19090302: "Upper Innoko River",
        19090303: "Lower Innoko River",
        19090304: "Chuilnuk River-Yukon River",
        19090305: "Yukon Delta",
        20010000: "Hawaii",
        20020000: "Maui",
        20030000: "Kahoolawe",
        20040000: "Lanai",
        20050000: "Molokai",
        20060000: "Oahu",
        20070000: "Kauai",
        20080000: "Niihau",
        21010002: "Cibuco-Guajataca",
        21010003: "Culebrinas-Guanajibo",
        21010004: "Southern Puerto Rico",
        21010005: "Eastern Puerto Rico",
        21010006: "Puerto Rican Islands",
        21020001: "St. John-St. Thomas",
        21020002: "St. Croix",
        22010000: "Guam",
        22020000: "Saipan",
        22030000: "American Samoa"
    }

    lat: number = 39.8;
    lng: number = -98.5;
    zoom: number = 5;

    huc8_geojson: Object = null;
    huc_codes = [];

    facility_geojson: Object = null;
    search_filters = {
        primaryName: 'Facility Name', 
        stateName: 'State',
        cityName: 'City',
        hucCode: 'HUC8 Name',
        facAddr: 'Address',
        fipsCode: 'FIPS Code'
    };

    generations: number = 0;
    emissions: number = 0;
    water_withdrawal: number = 0;
    water_consumption: number = 0;
    participating_facilities: number = 0;

    search_matches = ['EXACT', 'BEGINNING', 'ENDING', 'CONTAINING'];
    search_years = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
    public submitted: boolean;

    search = new Search('primaryName', '', 'CONTAINING', 2017, 2018);
    infowinLat: number = null;
    infowinLng: number = null;
    infowinMsg: string[] = ['', '', '', '', '', '', '', '', ''];
    infowinIsOpen: boolean = false;

    constructor(private mapsService: MapsService)
    { 
        this.submitted = false;
    }

    // HUC8 are stored in db as 8-digit code so we translate the 
    // HUC NAME from search value to the corresponding huc code(s)
    // multiple subbasins could share the same name: Ex. Salt
    huc_name_to_code(huc_name)
    {
        let huc_codes_from_names = [];

        Object.keys(this.huc_name_map)
        .filter(key => this.huc_name_map[key] === huc_name)
        .map(huc_code =>
        {
            if (huc_code.length === 7)
                huc_code = "0" + huc_code;
            else huc_code;
            return huc_code;
        }).forEach(code => huc_codes_from_names.push(code));
        return huc_codes_from_names;
    }

    // Some HUC8 codes start with leading 0 although
    // Typescript does not allow numbers to start with 0
    // so I just trim it with this
    huc_code_no_octal(huc_code)
    {
        if (huc_code.charAt(0) === '0')
            huc_code = huc_code.substr(1);
        return huc_code;
    }

    // Definitely need to refactor some of this code out into 
    // separate functions. Harder than it looks though...
    onSubmit(search: Search)
    {
        let all_facilities = [];

        this.init_data();

        this.clear_huc_map();
        this.submitted = true; 
        this.infowinIsOpen = false;

        if (search.filter === 'hucCode')
        {
            let huc_codes_from_name = this.huc_name_to_code(search.value);
            huc_codes_from_name.forEach(code => 
            {
                search.value = code;
                this.mapsService.get_facility_json(search)
                .subscribe(
                    (data: any) =>
                    {
                        if (data.facilityData !== '[]')
                        {
                            if (JSON.parse(data.eweData).generation !== null)
                                this.generations += Number(JSON.parse(data.eweData).generation);
                            if (JSON.parse(data.eweData).emission !== null)
                                this.emissions += Number(JSON.parse(data.eweData).emission);
                            if (JSON.parse(data.eweData).consumption !== null)
                                this.water_consumption += Number(JSON.parse(data.eweData).consumption);
                            if (JSON.parse(data.eweData).withdrawal !== null)
                                this.water_withdrawal += Number(JSON.parse(data.eweData).withdrawal);
                            if (JSON.parse(data.eweData).participating_facilities !== null)
                                this.participating_facilities += Number(JSON.parse(data.eweData).participatingFacilities);

                            all_facilities = all_facilities.concat(JSON.parse(data.facilityData));
                            this.facility_geojson = this.mapsService.format_geojson(all_facilities);
                            this.huc_codes.push(this.mapsService.get_huc_code(JSON.parse(data.facilityData)))
                        }
                    },
                    error => console.error(error),
                    () => this.huc_codes.forEach(
                        huc_code =>
                        {
                            if (huc_code)
                                this.huc8_show[this.huc_code_no_octal(huc_code)] = true;
                        })
                );
          });
        }
        // when search filter is anything other than HUC
        else
        {
            this.mapsService.get_facility_json(search)
            .subscribe(
                (data: any) =>
                {
                    if (JSON.parse(data.eweData).generation !== null)
                        this.generations += Number(JSON.parse(data.eweData).generation);
                    if (JSON.parse(data.eweData).emission !== null)
                        this.emissions += Number(JSON.parse(data.eweData).emission);
                    if (JSON.parse(data.eweData).consumption !== null)
                        this.water_consumption += Number(JSON.parse(data.eweData).consumption);
                    if (JSON.parse(data.eweData).withdrawal !== null)
                        this.water_withdrawal += Number(JSON.parse(data.eweData).withdrawal);
                    if (JSON.parse(data.eweData).participating_facilities !== null)
                        this.participating_facilities += Number(JSON.parse(data.eweData).participatingFacilities);

                    this.facility_geojson = this.mapsService.format_geojson(JSON.parse(data.facilityData));
                    this.huc_codes = this.mapsService.get_huc_codes(JSON.parse(data.facilityData));
                },
                error => console.error(error),
                () => this.huc_codes.forEach(huc_code =>
                {
                    if (huc_code)
                        this.huc8_show[this.huc_code_no_octal(huc_code)] = true;
                })
            );
        }
    }

    init_data()
    {
        this.generations = 0;
        this.emissions = 0;
        this.water_consumption = 0;
        this.water_withdrawal = 0;
        this.participating_facilities = 0;
        this.facility_geojson = null;
    }

    clear_huc_map()
    {
        if (this.huc_codes.length > 0)
        {
            this.huc_codes.forEach(huc_code =>
            {
                if (huc_code)
                    this.huc8_show[this.huc_code_no_octal(huc_code)] = false;
            })
        }
        this.huc_codes = [];
    }

    get diagnostic()
    {
        return JSON.stringify(this.facility_geojson);
    }


    facility_click_handler(event)
    {
        this.clear_infoWindow();
        this.infowinLat = event.latLng.lat();
        this.infowinLng = event.latLng.lng();
        this.infowinMsg[0] = event.feature.getProperty('primary_name');
        this.infowinMsg[1] = event.feature.getProperty('address') + ",";
        this.infowinMsg[2] = event.feature.getProperty('city') + ",";
        this.infowinMsg[3] = event.feature.getProperty('state');
        this.infowinMsg[4] = event.feature.getProperty('postal_code');
        this.infowinMsg[5] = "HUC8 Code: "   + event.feature.getProperty('huc_code');
        this.infowinMsg[6] = "FIPS Code: "   + event.feature.getProperty('fips_code');
        this.infowinMsg[7] = "NAICS Code: "  + event.feature.getProperty('naics_code');
        this.infowinMsg[8] = "Registry ID: " + event.feature.getProperty('registry_id');
        this.infowinIsOpen = true;
    }

    facility_style(feature)
    {
        return {
            clickable: true,
            visible: true,
            icon: "../../assets/powerplant.png",
            title: feature.getProperty('primary_name')
        };
    }

    huc_click_handler(event)
    {
        this.clear_infoWindow();
        this.infowinLat = event.latLng.lat();
        this.infowinLng = event.latLng.lng();
        this.infowinMsg[0] = event.feature.getProperty('Name');
        this.infowinMsg[5] = "HUC8: " + event.feature.getProperty('HUC8');  
        this.infowinMsg[6] = event.feature.getProperty('States');  
        this.infowinMsg[7] = "Area (Acres): " + event.feature.getProperty('AreaAcres');  
        this.infowinMsg[8] = "Area (Sq kM): " + event.feature.getProperty('AreaSqKm');  
        this.infowinIsOpen = true;
    }

    huc8_style(feature)
    {
        return {
            clickable: true,
            visible: true,
            fillOpacity: 0.1,
            strokeOpacity: 0.3,
            strokeWeight: 2,
            title: feature.getProperty('Name')
        };
    }

    clear_infoWindow()
    {
        this.infowinIsOpen = false;
        this.infowinMsg[0] = '';
        this.infowinMsg[1] = '';  
        this.infowinMsg[2] = '';  
        this.infowinMsg[3] = '';  
        this.infowinMsg[4] = '';  
        this.infowinMsg[5] = '';  
        this.infowinMsg[6] = '';  
        this.infowinMsg[7] = '';  
        this.infowinMsg[8] = '';  
    }

}
