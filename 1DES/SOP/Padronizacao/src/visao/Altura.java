package visao;
//padronização de entrada;
import java.util.Scanner;

public class Altura {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.println("Digite sua altura: ");
		float Altura = input.nextFloat();
		if (Altura >=3) {
			Altura = Altura / 100;
			
		}
		
		System.out.printf("Você possui %.2f metros de altura: ",Altura);

	}

}
