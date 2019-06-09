export const getters = {
  romanDistrict: () =>
    ({
      '熱田区': 'atsuta',
      '北区': 'kita',
      '昭和区': 'showa',
      '千種区': 'chikusa',
      '天白区': 'tenpaku',
      '中区': 'naka',
      '中川区': 'nakagawa',
      '中村区': 'nakamura',
      '西区': 'nishi',
      '東区': 'higashi',
      '瑞穂': 'mizuho',
      '緑区': 'midori',
      '港区': 'minato',
      '南区': 'minami',
      '名東区': 'meito',
      '守山区': 'moriyama',
    }),

    makeURL:(_, getters) =>
      district => {
      
        const code = district.charCodeAt(0)

        return ((code >= 0x4e00 && code <= 0x9fcf)
        || (code >= 0x3400 && code <= 0x4dbf)
        || (code >= 0x20000 && code <= 0x2a6df)
        || (code >= 0xf900 && code <= 0xfadf)
        || (code >= 0x2f800 && code <= 0x2fa1f))
          ? getters.romanDistrict[district]
          : district
      },
}