import { createContext, useState, Dispatch, FC, ReactNode, SetStateAction } from "react";

interface LanguageContentProps {
  language: 'en' | 'fr';
  setLanguage: Dispatch<SetStateAction<'en' | 'fr'>>
}

export const LanguageContext = createContext<LanguageContentProps>({
  language: 'fr',
  setLanguage: () => { },
});

interface LanguageProviderProps {
  children: ReactNode;
  initial?: 'en' | 'fr';
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children, initial = "fr" }) => {
  const [language, setLanguage] = useState(initial);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
