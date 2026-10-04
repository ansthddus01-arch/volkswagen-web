// src/data/modelsData.js

import Atlas from "../assets/Atlas_2_img.png";
import ID5 from "../assets/ID_5_img.png";
import Touareg from "../assets/Touareg_img.png";

const modelsData = [
  {
    name: "Atlas",
    image: Atlas,
    specs: [
      {
        label: "복합연비",
        value: "23 mpg",
        desc: "EPA Estimated",
      },
      {
        label: "배기량",
        value: "2.0 L",
        desc: "Turbocharged TSI",
      },
      {
        label: "최고 출력",
        value: "269 hp",
        desc: "2.0 TSI",
      },
      {
        label: "최대 토크",
        value: "273 lb-ft",
        desc: "약 370 Nm",
      },
    ],
  },

  {
    name: "ID.5",
    image: ID5,
    specs: [
      {
        label: "복합연비",
        value: "5.0 km/kWh",
        desc: "Pure Electric Drive\n (20/21인치 알로이 휠 기준)",
      },
      {
        label: "배터리 용량",
        value: "82.836 kWh",
        desc: "High-voltage Battery",
      },
      {
        label: "시스템 최고 출력",
        value: "286 PS",
        desc: "Electric Drive",
      },
      {
        label: "최대 토크",
        value: "55.6 kg·m",
        desc: "Electric Drive",
      },
    ],
  },

  {
    name: "Touareg",
    image: Touareg,
    specs: [
      {
        label: "복합연비",
        value: "10.8 km/L",
        desc: "3.0 TDI",
      },
      {
        label: "배기량",
        value: "2,967 cc",
        desc: "V6 3.0 TDI",
      },
      {
        label: "최고 출력",
        value: "286 PS",
        desc: "3,500–4,000 rpm",
      },
      {
        label: "최대 토크",
        value: "61.2 kg·m",
        desc: "1,750–3,250 rpm",
      },
    ],
  },
];

export default modelsData;