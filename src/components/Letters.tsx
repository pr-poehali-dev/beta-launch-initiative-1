import { useState } from "react";
import Icon from "@/components/ui/icon";

const documents = [
  {
    type: "Письмо",
    label: "Личное письмо",
    from: "Елена Волкова",
    to: "сестре Наташе в Москву",
    date: "14 марта 1921 г.",
    city: "Константинополь",
    text: `Наташенька, милая,

пишу тебе уже третий месяц из Константинополя, хотя не знаю, дойдёт ли это письмо. Мы живём в лагере на Галлиполи — холодно, сыро, кормят раз в день. Андрей устроился грузчиком в порту, я шью на продажу. Дети держатся.

Всё думаю — вернуться ли? Слышала, что в Москве голод, что расстреливают офицеров. Здесь хоть живы. Но это не жизнь, Наташа, это ожидание. Чего — сами не знаем.

Целую тебя крепко. Молюсь за вас каждый день.

Твоя Лена`,
    note: "Письма из лагерей беженцев почти не доходили до адресатов в советской России — их перехватывала цензура.",
  },
  {
    type: "Документ",
    label: "Нансеновский паспорт",
    from: "Лига Наций",
    to: "Михаил Сергеевич Орлов",
    date: "7 сентября 1924 г.",
    city: "Париж",
    text: `УДОСТОВЕРЕНИЕ ЛИЧНОСТИ
Лига Наций. Arrangement of 5 July 1922.

Настоящее удостоверение выдано нижепоименованному лицу,
лишённому национального статуса.

Фамилия: ОРЛОВЪ
Имя: Михаилъ Сергѣевичъ
Дата рождения: 12 апреля 1889 г., г. Санктъ-Петербургъ
Подданство: бывший подданный Российской Империи

Срок действия: один год, с правом продления.
Настоящий документ является единственным удостоверением
личности владельца и признаётся правительствами,
присоединившимися к Женевскому соглашению.

Особые отметки: разрешён въезд во Францию, Германию,
Чехословакию, Королевство СХС.

Место выдачи: Париж         Подпись: [неразборчиво]`,
    note: "Нансеновский паспорт получили около 450 000 русских эмигрантов. Без него они были бесправны — не могли работать официально, открыть счёт в банке или пересечь границу.",
  },
  {
    type: "Дневник",
    label: "Дневниковая запись",
    from: "Борис Никольский",
    to: null,
    date: "3 января 1926 г.",
    city: "Берлин",
    text: `3 января. Берлин.

Встретили Рождество скромно — Нина сделала пирог из того, что было, Петя нарядил маленькую ёлку из бумаги. Пели «Тихую ночь» — по-русски, разумеется.

Сегодня снова ходил в «Русский дом» на Кайзер-Аллее. Там был доклад Милюкова о положении дел в СССР. Зал полон. Все спрашивают одно: когда конец большевикам? Никто не знает.

Читал вечером Пушкина. Как странно — здесь, в немецкой квартире, под звуки чужой улицы, русские стихи звучат острее, чем когда-либо на родине. Точно потерял что-то и только теперь понял цену.

Завтра опять искать работу. Говорят, на заводе Сименса берут техников.`,
    note: "Эмигрантские дневники — важнейший источник по истории повседневной жизни Русского зарубежья. Большинство из них были опубликованы лишь в конце XX века.",
  },
  {
    type: "Письмо",
    label: "Письмо писателя",
    from: "Иван Бунин",
    to: "Марку Алданову",
    date: "22 ноября 1933 г.",
    city: "Стокгольм",
    text: `Дорогой Марк Александрович,

только что вернулся с церемонии. Всё прошло торжественно и, признаться, несколько утомительно — столько речей, столько фраков.

Премию принял с чувством, которое трудно описать. Это не моя победа — это победа всех нас, всего того, что мы сохраняем здесь, вдали. Русская литература жива. Пусть знают об этом.

Деньги, как вы понимаете, разойдутся быстро — уже несколько десятков писем от нуждающихся, и всем надо помочь. Вера говорит, что я слишком мягок. Может быть.

Обнимаю вас.
И. Бунин`,
    note: "После получения Нобелевской премии Бунин раздал значительную часть денег нуждающимся эмигрантам. По некоторым свидетельствам, он раздал около 120 000 франков из 715 000.",
  },
  {
    type: "Объявление",
    label: "Объявление в газете",
    from: 'Редакция газеты "Последние новости"',
    to: null,
    date: "15 апреля 1927 г.",
    city: "Париж",
    text: `ОБЪЯВЛЕНІЯ

ИЩУ РАБОТУ. Инженер-механик, окончил Петербургский политехнический 
институт (1913), опыт работы на Путиловском заводе. Владею французским, 
немецким. Рекомендации имеются. Обращаться: rue de la Roquette, 47, 
спросить Константина Ивановича.

— — —

ДАЮ УРОКИ русского языка и литературы, подготовка к экзаменам. 
Опытная учительница, 15 лет стажа. Недорого. 
Тел.: Gobelins 34-19.

— — —

СДАЁТСЯ комната в русской семье, тихий район, рядом церковь, 
для одинокого приличного господина. Без излишеств.
Справляться: avenue de Versailles, 112.

— — —

РУССКИЙ РЕСТОРАНЪ «САМОВАРЪ»
Настоящая русская кухня. Борщ, пироги, котлеты по-киевски.
Живая музыка по пятницам и субботам. 
14, rue Fontaine, Montmartre.`,
    note: "Объявления в эмигрантских газетах — зеркало повседневной жизни диаспоры: инженеры искали работу чернорабочими, учителя давали уроки за гроши, семьи сдавали комнаты.",
  },
];

export default function Letters() {
  const [active, setActive] = useState(0);

  const doc = documents[active];

  return (
    <section className="bg-stone-50 px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Архив</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Документы и письма
        </h2>
        <p className="text-neutral-500 mb-12 text-base lg:text-lg max-w-2xl">
          Личные письма, дневники, официальные бумаги — голоса людей, оказавшихся между двумя мирами.
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tabs */}
          <div className="flex flex-row lg:flex-col gap-2 lg:w-56 overflow-x-auto lg:overflow-visible">
            {documents.map((d, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 text-left px-4 py-3 rounded-lg border transition-all duration-200 ${
                  active === i
                    ? "bg-neutral-900 border-neutral-900 text-white"
                    : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400"
                }`}
              >
                <p className={`text-xs uppercase tracking-widest mb-1 ${active === i ? "text-neutral-400" : "text-neutral-400"}`}>{d.type}</p>
                <p className={`text-sm font-medium leading-tight ${active === i ? "text-white" : "text-neutral-700"}`}>{d.label}</p>
              </button>
            ))}
          </div>

          {/* Document */}
          <div className="flex-1">
            <div className="bg-stone-100 border border-stone-200 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="bg-white border-b border-stone-200 px-6 py-4 flex flex-wrap items-center gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <Icon name="User" size={13} />
                      {doc.from}
                    </span>
                    {doc.to && (
                      <span className="flex items-center gap-1.5">
                        <Icon name="ArrowRight" size={13} />
                        {doc.to}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Icon name="MapPin" size={13} />
                      {doc.city}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="Calendar" size={13} />
                      {doc.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="px-6 lg:px-10 py-8">
                <pre className="font-serif text-neutral-700 text-sm lg:text-base leading-relaxed whitespace-pre-wrap break-words" style={{ fontFamily: "'Georgia', serif" }}>
                  {doc.text}
                </pre>
              </div>

              {/* Note */}
              <div className="px-6 lg:px-10 py-5 bg-stone-200/60 border-t border-stone-200">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={15} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                  <p className="text-neutral-500 text-xs leading-relaxed italic">{doc.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
