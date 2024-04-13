function calc(lastscore, level) {
  oku1 = 0; man2 = 0; num2 = 0;
  oku = lastscore;
  man = lastscore;
  num = lastscore;
  if (oku.includes('億')) {
    oku1 = oku.substr(0, oku.indexOf('億'));
    oku1 = oku1 * 100000000;
    num1 = num.substr(num.indexOf('億') + 1)
    num2 = num1 * 1;
    lastscore = oku1 + man2 + num2;
  }

  if (man.includes('万')) {
    man1 = man;
    if (man.includes('億')) {
    man1 = man.substr(man.indexOf('億') + 1)
    }
    man2 = man1.substr(0, man1.indexOf('万'));
    man2 = man2 * 10000;
    num1 = num.substr(num.indexOf('万') + 1)
    num2 = num1 * 1;
    lastscore = oku1 + man2 + num2;
  }

  switch (level) {
    case '100':
    level = 1.54;
      break;
    case '99':
    level = 1.539;
      break;
    case '98':
    level = 1.538;
      break;
    case '97':
    level = 1.537;
      break;
    case '96':
    level = 1.536;
      break;
    case '95':
    level = 1.535;
      break;
    case '94':
    level = 1.534;
      break;
    case '93':
    level = 1.533;
      break;
    case '92':
    level = 1.532;
      break;
    case '91':
    level = 1.531;
      break;
    case '90':
    level = 1.53;
      break;
    case '89':
    level = 1.529;
      break;
    case '88':
    level = 1.528;
      break;
    case '87':
    level = 1.527;
      break;
    case '86':
    level = 1.526;
      break;
    case '85':
    level = 1.525;
      break;
    case '84':
    level = 1.524;
      break;
    case '83':
    level = 1.523;
      break;
    case '82':
    level = 1.522;
      break;
    case '81':
    level = 1.521;
      break;
    case '80':
    level = 1.52;
      break;
    case '79':
    level = 1.519;
      break;
    case '78':
    level = 1.518;
      break;
    case '77':
    level = 1.517;
      break;
    case '76':
    level = 1.516;
      break;
    case '75':
    level = 1.515;
      break;
    case '74':
    level = 1.514;
      break;
    case '73':
    level = 1.513;
      break;
    case '72':
    level = 1.512;
      break;
    case '71':
    level = 1.511;
      break;
    case '70':
    level = 1.51;
      break;
    case '69':
    level = 1.509;
      break;
    case '68':
    level = 1.508;
      break;
    case '67':
    level = 1.507;
      break;
    case '66':
    level = 1.506;
      break;
    case '65':
    level = 1.505;
      break;
    case '64':
    level = 1.504;
      break;
    case '63':
    level = 1.503;
      break;
    case '62':
    level = 1.502;
      break;
    case '61':
    level = 1.501;
      break;
    case '60':
    level = 1.5;
      break;
    case '59':
    level = 1.499;
      break;
    case '58':
    level = 1.498;
      break;
    case '57':
    level = 1.497;
      break;
    case '56':
    level = 1.496;
      break;
    case '55':
    level = 1.495;
      break;
    case '54':
    level = 1.494;
      break;
    case '53':
    level = 1.493;
      break;
    case '52':
    level = 1.492;
      break;
    case '51':
    level = 1.491;
      break;
    case '50':
    level = 1.49;
      break;
    default:
    level = 0;
  }
    let fastscore_value =  Math.ceil(lastscore / level);
    let level100_value = Math.ceil(fastscore_value / 1.15);
    fastscore_value = Number(fastscore_value).toLocaleString();
    level100_value = Number(level100_value).toLocaleString();
    document.getElementById('fastscore').value = fastscore_value;
    document.getElementById('level100').value = level100_value;
}
