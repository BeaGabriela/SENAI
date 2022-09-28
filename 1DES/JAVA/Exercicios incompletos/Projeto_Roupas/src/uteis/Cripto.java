package uteis;

public class Cripto {
	
	public static String encripta(String senha) {
		
		char charArray[] = new char[senha.length()];
		for (int i = 0; i < charArray.length; i++) {
			charArray[i] = senha.charAt(i); 
			
			if (charArray[i] + charArray[0] < 255) {
				charArray[i] += charArray[0];
			} else {
				charArray[i] -= charArray[0];
			}
		}
		for (int i = 0; i < charArray.length; i++) {
			
			if (charArray[i] + charArray[1] < 255) {
				charArray[i] += charArray[1];
			} else {
				charArray[i] -= charArray[1];
			}
		}
		
		senha = new String(charArray);
		return senha;
	}

}