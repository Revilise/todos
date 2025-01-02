/**
 * Хук для определения классов по БЭМ
 * @param baseClass - основной класс блока
 */
export const useCN = (baseClass?: string) => {
  return {
    /**
     * Конструктор класса для компонента по БЭМ
     * @param element - название дочернего элемента
     * @param mods - объект модификаторов
     * @param utils - утилитарные классы
     */
    getCN: (element: string, mods: object = {}, utils: string[] = []) => {
      const elementClass = element ? `${baseClass}__${element}` : baseClass;
      const utilsClasses = utils.join(" ");

      const modsClasses = Object.entries(mods).map(([key, value]) => {
        return value && `${ element ? elementClass : baseClass}--${key}`
      }).filter(Boolean).join(' ');

      return [elementClass, modsClasses, utilsClasses].filter(Boolean).join(' ').trim();
    }
  }
}

export const startWithUpperCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const jsonFetcher = async <T>(url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }

  return await res.json() as T;
}

export const setGlobalCssVar = (name: string, value: string) => {
  const root = document?.querySelector("body");
  root?.style?.setProperty(name, value);
}
