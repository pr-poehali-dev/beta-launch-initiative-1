import { useState } from "react";

const questions = [
  {
    question: "Какой город стал главным культурным центром русской эмиграции в 1920-е годы?",
    options: ["Берлин", "Париж", "Прага", "Константинополь"],
    correct: 1,
    fact: "Париж принял более 100 000 русских эмигрантов и стал неофициальной столицей Русского зарубежья.",
  },
  {
    question: "Кто из русских писателей-эмигрантов получил Нобелевскую премию по литературе в 1933 году?",
    options: ["Владимир Набоков", "Марина Цветаева", "Иван Бунин", "Александр Куприн"],
    correct: 2,
    fact: "Иван Бунин стал первым русским писателем, удостоенным Нобелевской премии по литературе.",
  },
  {
    question: "Сколько примерно русских эмигрантов покинули Россию после революции 1917 года?",
    options: ["Около 500 тысяч", "Около 1 миллиона", "Около 2 миллионов", "Около 5 миллионов"],
    correct: 2,
    fact: "По различным оценкам, Россию покинули от 1,5 до 2 миллионов человек в ходе нескольких волн эмиграции.",
  },
  {
    question: "Какое русское кабаре в Париже стало символом эмигрантской ностальгии?",
    options: ["Moulin Rouge", "«Балалайка»", "«Паяцы»", "«Щелкунчик»"],
    correct: 1,
    fact: "Кабаре «Балалайка» и другие русские заведения на Монпарнасе создавали атмосферу потерянной России.",
  },
  {
    question: "Как называлась крупнейшая русская газета в эмиграции, издававшаяся в Париже?",
    options: ["«Последние новости»", ["«Русское слово»"], "«Эмигрант»", "«Зарубежная Россия»"],
    correct: 0,
    fact: "«Последние новости» под редакцией Павла Милюкова выходили с 1920 по 1940 год и были самой читаемой эмигрантской газетой.",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(false);

  const q = questions[current];

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnswered(false);
  }

  const getOptionClass = (idx: number) => {
    const base =
      "w-full text-left px-6 py-4 rounded border transition-all duration-300 text-sm lg:text-base font-medium cursor-pointer ";
    if (!answered) {
      return base + "border-neutral-700 text-neutral-300 hover:border-white hover:text-white bg-transparent";
    }
    if (idx === q.correct) {
      return base + "border-emerald-500 text-white bg-emerald-500/10";
    }
    if (idx === selected && idx !== q.correct) {
      return base + "border-red-500 text-white bg-red-500/10";
    }
    return base + "border-neutral-800 text-neutral-600 bg-transparent";
  };

  const resultLabel = () => {
    if (score === questions.length) return "Отличный результат! Вы настоящий знаток Русского зарубежья.";
    if (score >= 3) return "Хороший результат! Вы хорошо знакомы с историей эмиграции.";
    if (score >= 1) return "Неплохо! Загляните в разделы сайта, чтобы узнать больше.";
    return "Изучите наш сайт — здесь много интересного об этой эпохе.";
  };

  return (
    <section className="bg-neutral-950 px-6 py-20 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Блиц-опрос</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Проверь свои знания
        </h2>
        <p className="text-neutral-400 mb-14 text-base lg:text-lg">
          5 вопросов об истории Русского зарубежья
        </p>

        {!finished ? (
          <div>
            <div className="flex items-center gap-3 mb-8">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    i < current
                      ? "bg-white"
                      : i === current
                      ? "bg-neutral-500"
                      : "bg-neutral-800"
                  }`}
                />
              ))}
            </div>

            <p className="text-neutral-500 text-sm mb-4 uppercase tracking-widest">
              Вопрос {current + 1} из {questions.length}
            </p>

            <h3 className="text-white text-xl lg:text-2xl font-semibold mb-8 leading-snug">
              {q.question}
            </h3>

            <div className="flex flex-col gap-3 mb-8">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  className={getOptionClass(idx)}
                  onClick={() => handleSelect(idx)}
                >
                  <span className="inline-block w-6 text-neutral-500 mr-2">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {Array.isArray(opt) ? opt[0] : opt}
                </button>
              ))}
            </div>

            {answered && (
              <div className="mb-8 p-5 border border-neutral-700 rounded bg-neutral-900">
                <p className="text-neutral-400 text-sm leading-relaxed">
                  <span className="text-white font-semibold">Интересный факт: </span>
                  {q.fact}
                </p>
              </div>
            )}

            {answered && (
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-white text-neutral-900 font-semibold rounded hover:bg-neutral-200 transition-colors duration-200"
              >
                {current + 1 < questions.length ? "Следующий вопрос →" : "Узнать результат →"}
              </button>
            )}
          </div>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-2 border-white mb-8">
              <span className="text-4xl font-bold text-white">
                {score}/{questions.length}
              </span>
            </div>
            <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4">
              {resultLabel()}
            </h3>
            <p className="text-neutral-500 mb-10 text-base">
              Вы ответили верно на {score} из {questions.length} вопросов
            </p>
            <button
              onClick={handleRestart}
              className="px-8 py-3 border border-neutral-600 text-white font-medium rounded hover:border-white transition-colors duration-200"
            >
              Пройти ещё раз
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
