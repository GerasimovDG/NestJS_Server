import { Injectable } from '@nestjs/common';
import { Film } from './film.interface';
import { environment } from '../environment/environment';

@Injectable()
export class FilmService {
  private films: Film[] = [
    {
      id: 1,
      img:  `${environment.apiUrl}/public/badboys.jpg`,
      name: 'Плохие парни навсегда',
      genres: ['боевик', 'комедия', 'триллер', 'криминал'],
      producers: ['Билал Фалла', 'Адиль Эль Арби'],
      actors: [ 'Уилл Смит', 'Мартин Лоуренс', 'Ванесса Энн Хадженс', 'Александр Людвиг', 'Паола Нуньес', 'Майкл Бэй', 'Кейт дель Кастильо',
        'Джо Пантольяно', 'Чарльз Мелтон', 'Джейкоб Скипио',
      ],
      description: 'Детективы Майк Лоури и Маркус Бёрнетт снова в деле! Правда, их отстраняют от всех операций, ' +
        'но разве отчаянных друзей когда-нибудь что-либо останавливало? Ведь на этот раз на Майка открывает охоту некто из его прошлой жизни. ' +
        'Так что парням придется отжечь по полной!',
      rating: 7.076,
    },
    {
      id: 2,
      img: `${environment.apiUrl}/public/lighthouse.jpg`,
      name: 'Маяк',
      genres: ['ужасы', 'фэнтези', 'драма'],
      producers: ['Роберт Эггерс'],
      actors: [ 'Роберт Паттинсон', 'Уиллем Дефо', 'Валерия Караман'],
      description: '1890-е годы, где-то неподалёку от побережья Новой Англии. Молодой человек Эфраим Уинслоу приезжает на отдалённый остров ' +
        'работать новым помощником смотрителя маяка, хромоногого и бородатого любителя выпить Томаса Уэйка. Тот обращается с подчинённым как с ' +
        'личным рабом и запрещает ему подниматься на сам маяк и управлять светом. Эфраима не отпускает собственное прошлое, так поначалу отказывавшийся ' +
        'от алкоголя парень всё чаще прикладывается к бутылке, и вскоре на каменистом острове — то ли ему мерещится, то ли в самом деле — начинает происходить ' +
        'всякая чертовщина.',
      rating: 7.341,
    },
    {
      id: 3,
      img: `${environment.apiUrl}/public/Gisaengchung.jpg`,
      name: 'Паразиты',
      genres: ['драма'],
      producers: ['Пон Джун-хо'],
      actors: [ 'Сон Кан-хо', 'Ли Сон-гюн', 'Чо Ё-джон', 'Чхве У-щик', 'Пак Со-дам', 'Чан Хе-джин', 'Чон Джи-со',
        'Чон Хён-джун', 'Ли Джон-ын', 'Пак Со-джун',
      ],
      description: 'Обычное корейское семейство жизнь не балует. Приходится жить в сыром грязном полуподвале, воровать интернет у соседей и перебиваться случайными' +
        ' подработками. Однажды друг сына семейства, уезжая на стажировку за границу, предлагает тому заменить его и поработать репетитором у старшеклассницы в ' +
        'богатой семье Пак. Подделав диплом о высшем образовании, парень отправляется в шикарный дизайнерский особняк и производит на хозяйку дома хорошее ' +
        'впечатление. Тут же ему в голову приходит необычный план по трудоустройству сестры.',
      rating: 8.1,
    },
    {
      id: 4,
      img: `${environment.apiUrl}/public/Richard Jewell.jpg`,
      name: 'Дело Ричарда Джуэлла',
      genres: ['драма'],
      producers: ['Клинт Иствуд'],
      actors: [ 'Сэм Рокуэлл' , 'Оливия Уайлд' , 'Джон Хэмм' , 'Кэти Бейтс' , 'Нина Арианда'],
      description: 'История Ричарда Джуэлла, который работал охранником на Олимпийских играх 1996 года в Атланте и, заметив рюкзак с бомбой, ' +
        'сумел вовремя эвакуировать людей. Однако всеобщая благодарность длилась недолго: через несколько дней Джуэлл сам превратился в главного подозреваемого' +
        ' и жертву уничижительной травли со стороны СМИ.',
      rating: 7.736,
    },
    {
      id: 5,
      img: `${environment.apiUrl}/public/frozen2.jpg`,
      name: 'Холодное сердце 2',
      genres: ['мультфильм', 'комедия', 'приключения', 'мизюкл'],
      producers: ['Дженнифер Ли', 'Крис Бак'],
      actors: [ 'Джонатан Грофф', 'Кристен Белл', 'Эван Рэйчел Вуд', 'Стерлинг К. Браун', 'Джош Гад',
        'Джейсон Риттер', 'Марта Плимптон', 'Идина Мензел', 'Альфред Молина',
      ],
      description: 'Анна, Эльза, Кристоф, его верный олень Свен и никогда не унывающий снеговик Олаф должны будут покинуть уютное королевство Эренделл ' +
        'и отправиться ещё дальше на север, в путешествие, которое приведет их к истокам древних легенд и поможет раскрыть тайны, касающиеся прошлого их родной ' +
        'страны.',
      rating: 7.2,
    },
    {
      id: 6,
      img: `${environment.apiUrl}/public/Holop.jpg`,
      name: 'Холоп',
      genres: ['комедия'],
      producers: ['Клим Шипенко'],
      actors: [ 'Милош Бикович', 'Александра Бортич', 'Александр Самойленко', 'Иван Охлобыстин', 'Мария Миронова', 'Олег Комаров',
        'Ольга Дибцева', 'Кирилл Нагиев', 'Сергей Соцердотский', 'Софья Зайка',
      ],
      description: 'Эгоистичный мажор Гриша в один не очень прекрасный день после аварии приходит в себя… в 1860 году в барской усадьбе. ' +
        'Теперь он — обычный холоп без связей и связи: о смартфонах здесь не слышали, а все вокруг него — крепостные. Грише предстоит пройти непростой путь, ' +
        'чтобы из наглого сынка богатых родителей превратиться в человека, который умеет ценить простые вещи, умеет дружить, ну и, конечно, любить.',
      rating: 7.094,
    },
    {
      id: 7,
      img: `${environment.apiUrl}/public/Knives Out.jpg`,
      name: 'Достать ножи',
      genres: ['детектив', 'комедия', 'драма', 'криминал'],
      producers: ['Райан Джонсон'],
      actors: [ 'Дэниэл Крэйг', 'Ана де Армас', 'Крис Эванс', 'Джейми Ли Кёртис', 'Майкл Шеннон', 'Дон Джонсон', 'Тони Коллетт',
        'Лакит Стэнфилд', 'Кристофер Пламмер', 'Кэтрин Лэнгфорд',
      ],
      description: 'Когда сразу после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества ' +
        'находят мёртвым, за расследование берётся обаятельный и дотошный частный детектив Бенуа Блан. Ему предстоит распутать тугую сеть уловок и корыстной лжи,' +
        ' которой его опутывают члены неблагополучной семьи Харлана и преданный ему персонал.',
      rating: 7.829,
    },
  ];

  findAll(): Film[] {
    return this.films;
  }
}
