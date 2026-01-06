import React from "react";

interface StyleContextType {
  isDark: boolean;
  changeTheme?: () => void;
}

const StyleContext = React.createContext<StyleContextType | undefined>(undefined);

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
