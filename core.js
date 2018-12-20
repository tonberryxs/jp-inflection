const conjugate = (base, pos) => {
    var Adjective, Form, Godan, IAdjective, Ichidan, InflectionPattern, Kuru, SuruDerivative, SuruOnly, Verb

    Form = (function () {
        function Form(inflected, furigana) {
            this.inflected = inflected;
            this.furigana = furigana;
        }

        return Form;

    })();

    Verb = (function () {
        function Verb() { }

        return Verb;

    })();

    Adjective = (function () {
        function Adjective() { }

        return Adjective;

    })();

    IAdjective = (function () {
        function IAdjective(base) {
            this.base = base;
            this.part_of_speech = new Adjective;
        }

        IAdjective.prototype.jisho = function () {
            return new Form(this.base);
        };

        IAdjective.prototype.katta = function () {
            return new Form(this.stem() + 'かった');
        };

        IAdjective.prototype.kunai = function () {
            return new Form(this.stem() + 'くない');
        };

        IAdjective.prototype.kunakatta = function () {
            return new Form(this.stem() + 'くなかった');
        };

        IAdjective.prototype.stem = function () {
            return this.base.replace(/い$/, '');
        };

        return IAdjective;

    })();

    Kuru = (function () {
        function Kuru(base) {
            this.base = base;
            this.part_of_speech = new Verb;
        }

        Kuru.prototype.jisho = function () {
            return new Form(this.base, 'く');
        };

        Kuru.prototype.nai = function () {
            return new Form(this.mizenkei() + 'ない', 'こ');
        };

        Kuru.prototype.masu = function () {
            return new Form(this.renyokei() + 'ます', 'き');
        };

        Kuru.prototype.masen = function () {
            return new Form(this.renyokei() + 'ません', 'き');
        };

        Kuru.prototype.ta = function () {
            return new Form(this.takei() + 'た', 'き');
        };

        Kuru.prototype.nakatta = function () {
            return new Form(this.mizenkei() + 'なかった', 'こ');
        };

        Kuru.prototype.mashita = function () {
            return new Form(this.renyokei() + 'ました', 'き');
        };

        Kuru.prototype.masendeshita = function () {
            return new Form(this.renyokei() + 'ませんでした', 'き');
        };

        Kuru.prototype.te = function () {
            return new Form(this.takei() + 'て', 'き');
        };

        Kuru.prototype.nakute = function () {
            return new Form(this.mizenkei() + 'なくて', 'こ');
        };

        Kuru.prototype.potential = function () {
            return new Form(this.mizenkei() + 'られる', 'こ');
        };

        Kuru.prototype.potential_negative = function () {
            return new Form(this.mizenkei() + 'られない', 'こ');
        };

        Kuru.prototype.passive = function () {
            return new Form(this.mizenkei() + 'られる', 'こ');
        };

        Kuru.prototype.passive_negative = function () {
            return new Form(this.mizenkei() + 'られない', 'こ');
        };

        Kuru.prototype.causative = function () {
            return new Form(this.mizenkei() + 'させる', 'こ');
        };

        Kuru.prototype.causative_negative = function () {
            return new Form(this.mizenkei() + 'させない', 'こ');
        };

        Kuru.prototype.causative_passive = function () {
            return new Form(this.mizenkei() + 'させられる', 'こ');
        };

        Kuru.prototype.causative_passive_negative = function () {
            return new Form(this.mizenkei() + 'させられない', 'こ');
        };

        Kuru.prototype.imperative = function () {
            return new Form(this.meireikei() + 'い', 'こ');
        };

        Kuru.prototype.imperative_negative = function () {
            return new Form(this.base + 'な', 'く');
        };

        Kuru.prototype.renyokei = function () {
            return this.base.replace(/る$/, '');
        };

        Kuru.prototype.mizenkei = function () {
            return this.base.replace(/る$/, '');
        };

        Kuru.prototype.meireikei = function () {
            return this.base.replace(/る$/, '');
        };

        Kuru.prototype.takei = function () {
            return this.base.replace(/る$/, '');
        };

        return Kuru;

    })();

    SuruOnly = (function () {
        function SuruOnly(base) {
            this.base = base;
            this.part_of_speech = new Verb;
        }

        SuruOnly.prototype.jisho = function () {
            return new Form(this.base + 'る', 'す');
        };

        SuruOnly.prototype.nai = function () {
            return new Form(this.base + 'ない', 'し');
        };

        SuruOnly.prototype.masu = function () {
            return new Form(this.base + 'ます', 'し');
        };

        SuruOnly.prototype.masen = function () {
            return new Form(this.base + 'ません', 'し');
        };

        SuruOnly.prototype.ta = function () {
            return new Form(this.base + 'た', 'し');
        };

        SuruOnly.prototype.nakatta = function () {
            return new Form(this.base + 'なかった', 'し');
        };

        SuruOnly.prototype.mashita = function () {
            return new Form(this.base + 'ました', 'し');
        };

        SuruOnly.prototype.masendeshita = function () {
            return new Form(this.base + 'ませんでした', 'し');
        };

        SuruOnly.prototype.te = function () {
            return new Form(this.base + 'て', 'し');
        };

        SuruOnly.prototype.nakute = function () {
            return new Form(this.base + 'なくて', 'し');
        };

        SuruOnly.prototype.potential = function () {
            return new Form('できる');
        };

        SuruOnly.prototype.potential_negative = function () {
            return new Form('できない');
        };

        SuruOnly.prototype.passive = function () {
            return new Form(this.base + 'れる', 'さ');
        };

        SuruOnly.prototype.passive_negative = function () {
            return new Form(this.base + 'れない', 'さ');
        };

        SuruOnly.prototype.causative = function () {
            return new Form(this.base + 'せる', 'さ');
        };

        SuruOnly.prototype.causative_negative = function () {
            return new Form(this.base + 'せない', 'さ');
        };

        SuruOnly.prototype.causative_passive = function () {
            return new Form(this.base + 'せられる', 'さ');
        };

        SuruOnly.prototype.causative_passive_negative = function () {
            return new Form(this.base + 'せられない', 'さ');
        };

        SuruOnly.prototype.imperative = function () {
            return new Form(this.base + 'ろ', 'し');
        };

        SuruOnly.prototype.imperative_negative = function () {
            return new Form(this.base + 'るな', 'す');
        };

        SuruOnly.prototype.renyokei = function () {
            return 'し';
        };

        SuruOnly.prototype.mizenkei = function () {
            return 'し';
        };

        SuruOnly.prototype.meireikei = function () {
            return 'し';
        };

        SuruOnly.prototype.takei = function () {
            return 'し';
        };

        return SuruOnly;

    })();

    SuruDerivative = (function () {
        function SuruDerivative(base, prefix) {
            this.base = base;
            this.prefix = prefix;
            this.part_of_speech = new Verb;
        }

        SuruDerivative.prototype.jisho = function () {
            return new Form(this.base + 'する');
        };

        SuruDerivative.prototype.nai = function () {
            return new Form(this.base + 'しない');
        };

        SuruDerivative.prototype.masu = function () {
            return new Form(this.base + 'します');
        };

        SuruDerivative.prototype.masen = function () {
            return new Form(this.base + 'しません');
        };

        SuruDerivative.prototype.ta = function () {
            return new Form(this.base + 'した');
        };

        SuruDerivative.prototype.nakatta = function () {
            return new Form(this.base + 'しなかった');
        };

        SuruDerivative.prototype.mashita = function () {
            return new Form(this.base + 'しました');
        };

        SuruDerivative.prototype.masendeshita = function () {
            return new Form(this.base + 'しませんでした');
        };

        SuruDerivative.prototype.te = function () {
            return new Form(this.base + 'して');
        };

        SuruDerivative.prototype.nakute = function () {
            return new Form(this.base + 'しなくて');
        };

        SuruDerivative.prototype.potential = function () {
            return new Form(this.prefix + 'できる');
        };

        SuruDerivative.prototype.potential_negative = function () {
            return new Form(this.prefix + 'できない');
        };

        SuruDerivative.prototype.passive = function () {
            return new Form(this.base + 'される');
        };

        SuruDerivative.prototype.passive_negative = function () {
            return new Form(this.base + 'されない');
        };

        SuruDerivative.prototype.causative = function () {
            return new Form(this.base + 'させる');
        };

        SuruDerivative.prototype.causative_negative = function () {
            return new Form(this.base + 'させない');
        };

        SuruDerivative.prototype.causative_passive = function () {
            return new Form(this.base + 'させられる');
        };

        SuruDerivative.prototype.causative_passive_negative = function () {
            return new Form(this.base + 'させられない');
        };

        SuruDerivative.prototype.imperative = function () {
            return new Form(this.base + 'しろ');
        };

        SuruDerivative.prototype.imperative_negative = function () {
            return new Form(this.base + 'するな');
        };

        SuruDerivative.prototype.renyokei = function () {
            return 'し';
        };

        SuruDerivative.prototype.mizenkei = function () {
            return 'し';
        };

        SuruDerivative.prototype.meireikei = function () {
            return 'し';
        };

        SuruDerivative.prototype.takei = function () {
            return 'し';
        };

        return SuruDerivative;

    })();

    Ichidan = (function () {
        function Ichidan(base) {
            this.base = base;
            this.part_of_speech = new Verb;
        }
        Ichidan.prototype.jisho = function () {
            return new Form(this.base);
        };
        Ichidan.prototype.nai = function () {
            return new Form(this.mizenkei() + 'ない');
        };

        Ichidan.prototype.masu = function () {
            return new Form(this.renyokei() + 'ます');
        };

        Ichidan.prototype.masen = function () {
            return new Form(this.renyokei() + 'ません');
        };

        Ichidan.prototype.ta = function () {
            return new Form(this.takei() + 'た');
        };

        Ichidan.prototype.nakatta = function () {
            return new Form(this.mizenkei() + 'なかった');
        };

        Ichidan.prototype.mashita = function () {
            return new Form(this.renyokei() + 'ました');
        };

        Ichidan.prototype.masendeshita = function () {
            return new Form(this.renyokei() + 'ませんでした');
        };

        Ichidan.prototype.te = function () {
            return new Form(this.takei() + 'て');
        };

        Ichidan.prototype.nakute = function () {
            return new Form(this.mizenkei() + 'なくて');
        };

        Ichidan.prototype.potential = function () {
            return new Form(this.mizenkei() + 'られる');
        };

        Ichidan.prototype.potential_negative = function () {
            return new Form(this.mizenkei() + 'られない');
        };

        Ichidan.prototype.passive = function () {
            return new Form(this.mizenkei() + 'られる');
        };

        Ichidan.prototype.passive_negative = function () {
            return new Form(this.mizenkei() + 'られない');
        };

        Ichidan.prototype.causative = function () {
            return new Form(this.mizenkei() + 'させる');
        };

        Ichidan.prototype.causative_negative = function () {
            return new Form(this.mizenkei() + 'させない');
        };

        Ichidan.prototype.causative_passive = function () {
            return new Form(this.mizenkei() + 'させられる');
        };

        Ichidan.prototype.causative_passive_negative = function () {
            return new Form(this.mizenkei() + 'させられない');
        };

        Ichidan.prototype.imperative = function () {
            return new Form(this.meireikei() + 'ろ');
        };

        Ichidan.prototype.imperative_negative = function () {
            return new Form(this.base + 'な');
        };

        Ichidan.prototype.renyokei = function () {
            return this.base.replace(/る$/, '');
        };

        Ichidan.prototype.mizenkei = function () {
            return this.base.replace(/る$/, '');
        };

        Ichidan.prototype.meireikei = function () {
            return this.base.replace(/る$/, '');
        };

        Ichidan.prototype.takei = function () {
            return this.base.replace(/る$/, '');
        };
        // console.log(Ichidan.prototype.takei());
        return Ichidan;

    })();

    Godan = (function () {
        function Godan(base, type) {
            this.base = base;
            this.type = type;
            this.part_of_speech = new Verb;
            this.v5_patterns = {
                'u;': ['い', 'わ', 'え', 'っ'],
                'k;': ['き', 'か', 'け', 'い'],
                'k-s': ['き', 'か', 'け', 'っ'],
                'g;': ['ぎ', 'が', 'げ', 'い'],
                'm;': ['み', 'ま', 'め', 'ん'],
                'n;': ['に', 'な', 'ね', 'ん'],
                'r;': ['り', 'ら', 'れ', 'っ'],
                'b;': ['び', 'ば', 'べ', 'ん'],
                's;': ['し', 'さ', 'せ', 'し'],
                't;': ['ち', 'た', 'て', 'っ'],
                'z;': ['じ', 'ざ', 'ぜ', 'い']
            };
        }

        Godan.prototype.jisho = function () {
            return new Form(this.base);
        };

        Godan.prototype.nai = function () {
            return new Form(this.mizenkei() + 'ない');
        };

        Godan.prototype.masu = function () {
            return new Form(this.renyokei() + 'ます');
        };

        Godan.prototype.masen = function () {
            return new Form(this.renyokei() + 'ません');
        };

        Godan.prototype.ta = function () {
            var _ref;
            if ((_ref = this.type) === 'g' || _ref === 'm' || _ref === 'n' || _ref === 'b') {
                return new Form(this.takei() + 'だ');
            } else {
                return new Form(this.takei() + 'た');
            }
        };

        Godan.prototype.nakatta = function () {
            return new Form(this.mizenkei() + 'なかった');
        };

        Godan.prototype.mashita = function () {
            return new Form(this.renyokei() + 'ました');
        };

        Godan.prototype.masendeshita = function () {
            return new Form(this.renyokei() + 'ませんでした');
        };

        Godan.prototype.te = function () {
            var _ref;
            if ((_ref = this.type) === 'g' || _ref === 'm' || _ref === 'n' || _ref === 'b') {
                return new Form(this.takei() + 'で');
            } else {
                return new Form(this.takei() + 'て');
            }
        };

        Godan.prototype.nakute = function () {
            return new Form(this.mizenkei() + 'なくて');
        };

        Godan.prototype.potential = function () {
            return new Form(this.meireikei() + 'る');
        };

        Godan.prototype.potential_negative = function () {
            return new Form(this.meireikei() + 'ない');
        };

        Godan.prototype.passive = function () {
            return new Form(this.mizenkei() + 'れる');
        };

        Godan.prototype.passive_negative = function () {
            return new Form(this.mizenkei() + 'れない');
        };

        Godan.prototype.causative = function () {
            return new Form(this.mizenkei() + 'せる');
        };

        Godan.prototype.causative_negative = function () {
            return new Form(this.mizenkei() + 'せない');
        };

        Godan.prototype.causative_passive = function () {
            return new Form(this.mizenkei() + 'せられる');
        };

        Godan.prototype.causative_passive_negative = function () {
            return new Form(this.mizenkei() + 'せられない');
        };

        Godan.prototype.imperative = function () {
            return new Form(this.meireikei());
        };

        Godan.prototype.imperative_negative = function () {
            return new Form(this.base + 'な');
        };

        Godan.prototype.renyokei = function () {
            return this.base.replace(/.$/, this.v5_patterns[this.type][0]);
        };

        Godan.prototype.mizenkei = function () {
            return this.base.replace(/.$/, this.v5_patterns[this.type][1]);
        };

        Godan.prototype.meireikei = function () {
            return this.base.replace(/.$/, this.v5_patterns[this.type][2]);
        };

        Godan.prototype.takei = function () {
            return this.base.replace(/.$/, this.v5_patterns[this.type][3]);
        };

        return Godan;

    })();

    InflectionPattern = (function () {
        function InflectionPattern() { }

        InflectionPattern.determine = function (base, pos) {
            // console.log('qqqqq', base, pos, pos.match(/^v5(.*)$/))
            var klass, pattern;
            if ('&v1;' === pos) {
                pattern = new Ichidan(base);
            } else if (klass = pos.match(/^&v5(.*)$/)) {
                pattern = new Godan(base, klass[1]);
            } else if ('&vk;' === pos) {
                pattern = new Kuru(base);
            } else if ('&vs-i;' === pos && ('する' === base || '為る' === base)) {
                pattern = new SuruOnly(base.replace(/る$/, ''));
            } else if ('&vs-i;' === pos) {
                pattern = new SuruDerivative(base.replace(/する$/, ''), base.replace(/する$/, ''), '');
            } else if ('&adj-i;' === pos) {
                pattern = new IAdjective(base);
            }
            return pattern;
        };
        return InflectionPattern;
    })();
    // console.log(process.argv, '555', base, pos, InflectionPattern.determine('およぐ', 'v5g'));
    const verb = InflectionPattern.determine(base, pos);
    console.log(verb.__proto__, base, pos)

    if (pos === ('&v1;' || '&vk;' || '&vs-i;') || pos.match(/^&v5(.*)$/)) {
        return ({
            jisho: verb['jisho']().inflected,
            nai: verb['nai']().inflected,
            masu: verb['masu']().inflected,
            masen: verb['masen']().inflected,
            ta: verb['ta']().inflected,
            nakatta: verb['nakatta']().inflected,
            mashita: verb['mashita']().inflected,
            masendeshita: verb['masendeshita']().inflected,
            te: verb['te']().inflected,
            nakute: verb['nakute']().inflected,
            potential: verb['potential']().inflected,
            potential_negative: verb['potential_negative']().inflected,
            passive: verb['passive']().inflected,
            passive_negative: verb['passive_negative']().inflected,
            causative: verb['causative']().inflected,
            causative_negative: verb['causative_negative']().inflected,
            causative_passive: verb['causative_passive']().inflected,
            causative_passive_negative: verb['causative_passive_negative']().inflected,
            imperative: verb['imperative']().inflected,
            imperative_negative: verb['imperative_negative']().inflected,
            renyokei: verb['renyokei'](),
            mizenkei: verb['mizenkei'](),
            meireikei: verb['meireikei'](),
            takei: verb['takei']()
        })
    } else if (pos === '&adj-i;') {
        return ({
            jisho: verb['jisho']().inflected,
            katta: verb['katta']().inflected,
            kunai: verb['kunai']().inflected,
            kunakatta: verb['kunakatta']().inflected,
            stem: verb['stem']().inflected
        })
    }

};

// console.log('AAA', process.argv[2], process.argv[3]);
// const jp = conjugate(process.argv[2], process.argv[3]);
// console.log('FFF', jp);

module.exports = conjugate;