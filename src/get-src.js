import { canWebp } from './check-webp.js';

// default cdn prefix
const protocol = location.protocol === 'https:' ? 'https://' : 'http://';
const pathname = document.domain.match('alpha.xxx.xx')
  ? 'fuss.alpha.xxx.xx'
  : 'fuss10.xxx.xxx';
const cdn = protocol + pathname;

// image src to patch
const hashToPath = src => src.replace(/^(\w)(\w\w)(\w{29}(\w*))$/, '/$1/$2/$3.$4');

// image src
const getSrc = opt => {
  if (!opt || typeof opt.src !== 'string' || !opt.src.length) return '';

  const srcPrefix = typeof opt.prefix === 'string' ? opt.prefix : cdn;
  const quality = typeof opt.quality === 'number' ? `quality/${opt.quality}/` : '';
  const format = canWebp ? 'format/webp/' : '';
  const suffix = typeof opt.suffix === 'string' ? opt.suffix : '';

  const params = `${quality}${format}${suffix}`;
  const srcSuffix = params ? `?imageMogr/${params}` : '';

  return srcPrefix + hashToPath(opt.src) + srcSuffix;
};

export default getSrc;
