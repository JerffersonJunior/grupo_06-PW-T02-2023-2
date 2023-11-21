import React, { createContext, useState, useContext, useEffect } from 'react';

const CategoryContext = createContext();

export function useCategory(){
    return useContext(CategoryContext)
}

export const CategoryProvider = ({ children }) => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(() => {
        const savedCategoria = localStorage.getItem("categoriaSelecionada")
        return savedCategoria || ""
    });
    
    useEffect(() => {
        localStorage.setItem('categoriaSelecionada', categoriaSelecionada)
    },  [categoriaSelecionada])

  return (
    <CategoryContext.Provider value={{ categoriaSelecionada, setCategoriaSelecionada }}>
      {children}
    </CategoryContext.Provider>
  );
};