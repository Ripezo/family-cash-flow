import { IFamily } from "@/models/FamilyModel";
import { useEffect, useState } from "react";

export default function useFamily() {

  const [myFamilies, setMyFamilies] = useState<IFamily[]>([]);

  useEffect(() => {
    getFamilies();
  }, []);
  
  const getFamilies = async () => {
    try {
      const response = await fetch(`/api/family`);
      
      if (response.ok) {
        const data: IFamily[] = await response.json();

        console.log('data:', data);
        
        // Actualizar el estado con los datos obtenidos
        setMyFamilies(data);
      } else {
        console.error('Error al obtener datos:', response);
        setMyFamilies([]);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      setMyFamilies([]);
    }
  };

  return { myFamilies }
}