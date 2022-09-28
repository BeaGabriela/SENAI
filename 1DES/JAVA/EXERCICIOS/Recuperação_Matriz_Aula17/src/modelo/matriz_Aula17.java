package modelo;

import java.util.Random;
import java.util.Scanner;


public class matriz_Aula17 {
	static Scanner scan = new Scanner(System.in);
	static Random rand = new Random();

	public static void main(String[] args) {
		int menu = 0;
		while (menu != 9) {
			System.out.println("\n-----------------");
			System.out.print("Digite sua opção: \n\n1.Exercicio 1\n2.Exercicio 2\n3.Exercicio 3\n4.Exercicio 4"
					+ "\n5.Exercicio 5\n6.Exercicio 6.\n7.Exercicio 7\n8.Exercicio 8\n9.Sair");
			menu = scan.nextInt();
			switch (menu) {
			case 1:
				Matriz25();
				break;
			case 2:
				Matriz25_X();
				break;
			case 3:
				matriz3();
				break;
			case 4:
				matrizDiagonal();
				break;
			case 5:
				exerc5();
				break;
			case 6:
				exerci6();
				break;
			case 7:
				exer7();
				break;
			case 8:
				exerci8();
				break;
			case 9:
				System.out.println("Adeus!");
				break;
			default:
				System.out.println("Opção incorreta. Tente novamente.");
				break;
			}

		}

	}

	// 1 Leia uma matriz 5 x 5, imprima a matriz e retorne a localização
	// (linha e a coluna) do maior valor.
	public static void Matriz25() {
		System.out.println();
		System.out.println("\\\\ MATRIZ [5][5] //");
		int[][] Matriz = new int[5][5];
		int qtd = 5;
		int maiorValor = 0;
		int linha = 0, coluna = 0;
		Random rand = new Random();
		System.out.println("\t");

		for (int i = 0; i < qtd; i++) {
			for (int j = 0; j < qtd; j++) {
				Matriz[i][j] = rand.nextInt(100);
			}
		}

		for (int i = 0; i < qtd; i++) {
			for (int j = 0; j < qtd; j++) {
				System.out.print(" " + Matriz[i][j] + "\t");
				if (maiorValor < Matriz[i][j]) {
					maiorValor = Matriz[i][j];
					linha = i;
					coluna = j;
				}

			}
			System.out.println("");

		}
		System.out.println("O maior valor é: " + maiorValor);
		System.out.println("E esta na posição:  linha: " + linha + " coluna: " + coluna);

	}

	// 2 Leia uma matriz 5 x 5. Leia tambem um valor X.
	// O programa devera fazer uma busca desse valor na matriz e, ao final, escrever
	// a localização (linha e coluna)
	// ou uma mensagem de "nao encontrado".
	public static void Matriz25_X() {
		Random rand = new Random();

		int[][] matriz = new int[5][5];
		int qtd = 5;
		int linha = 0;
		int coluna = 0;
		System.out.println("\t");
		for (int i = 0; i < qtd; i++) {
			for (int j = 0; j < qtd; j++) {
				matriz[i][j] = rand.nextInt(100);
			}
		}
		System.out.println("Digite um valor qualquer para que possa buscar na matriz: ");
		int aleatorio = scan.nextInt();
		int localizar = 0;
		for (int i = 0; i < qtd; i++) {
			for (int j = 0; j < qtd; j++) {
				System.out.print("    " + matriz[i][j] + "\t");
				if (matriz[i][j] == aleatorio) {
					localizar = matriz[i][j];
					linha = i;
					coluna = j;
				}
			}
			System.out.println(" ");
		}
		System.out.println(" ");
		if (localizar != aleatorio) {
			System.out.println("Não achei!");
		} else {
			System.out.print("Achei, na coluna " + coluna + " na linha " + linha);

		}
	}

	// 3 Leia uma matriz de 3 x 3 elementos. Calcule e imprima a sua transposta.

	public static void matriz3() {
		System.out.println();
		System.out.println("\\\\ MATRIZ [3][3] //");
		int[][] Matriz = new int[3][3];

		int qtd = 3;
		Random rand = new Random();
		System.out.println("");

		for (int i = 0; i < qtd; i++) {
			for (int j = 0; j < qtd; j++) {
				Matriz[i][j] = rand.nextInt(100);
			}
		}

		for (int i = 0; i < qtd; i++) {
			System.out.println();
			for (int j = 0; j < qtd; j++) {
				System.out.print("   " + Matriz[i][j] + "\t");

			}
		}
		System.out.println("");
		System.out.println("Matriz Transposta: ");

		for (int i = 0; i < qtd; i++) {
			System.out.println();
			for (int j = 0; j < qtd; j++) {

				System.out.print(Matriz[j][i] + " ");

			}

		}

	}

	// 4 Leia uma matriz de 3 x 3 elementos. Calcule a soma dos elementos que estao
	// acima da diagonal principal.
	public static void matrizDiagonal() {
		System.out.println();
		System.out.println("\\\\ MATRIZ [3][3] //");
		int[][] Matriz = new int[3][3];
		int qtd = 3;
		Random rand = new Random();
		System.out.println("\t");

		for (int i = 0; i < qtd; i++) {
			for (int j = 0; j < qtd; j++) {
				Matriz[i][j] = rand.nextInt(100);
			}
		}

		for (int i = 0; i < qtd; i++) {
			System.out.println();
			for (int j = 0; j < qtd; j++) {
				System.out.print("   " + Matriz[i][j] + "\t");
			}
		}
		System.out.println();
		int matriz = Matriz[0][1] + Matriz[1][2];
		System.out.println("A soma dos elementos que estao acima da diagonal principal é: ");
		System.out.println(matriz);

	}

	// 5 Leia uma matriz de 3 x 3 elementos. Calcule a soma dos elementos que estao
	// abaixo da diagonal principal.
	public static void exerc5() {
		System.out.println();
		System.out.println("\\\\ MATRIZ [3][3] //");
		int[][] Matriz = new int[3][3];
		int qtd = 3;
		Random rand = new Random();
		System.out.println("");

		for (int i = 0; i < qtd; i++) {
			for (int j = 0; j < qtd; j++) {
				Matriz[i][j] = rand.nextInt(100);
			}
		}

		for (int i = 0; i < qtd; i++) {
			System.out.println();
			for (int j = 0; j < qtd; j++) {
				System.out.print("  " + Matriz[i][j] + "\t");
			}
		}
		System.out.println();
		int matriz = Matriz[1][0] + Matriz[2][1];
		System.out.println("A soma dos elementos que estao abaixo da diagonal principal é: ");
		System.out.println(matriz);
	}

	// 6 Faça um programa para gerar automaticamente numeros entre 0 e 99 de uma
	// cartela de bingo. Sabendo que cada cartela devera conter 5 linhas de 5
	// numeros
	// gere estes dados de modo a nao ter números repetidos dentro das cartelas. O
	// programa deve exibir na tela a cartela gerada.
	public static void exerci6() {
		System.out.println("Bingo [5][5]");
		int[][] Matriz = new int[5][5];
		int[] vetor = new int[25];
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				Matriz[i][j] = rand.nextInt(100);
			}

		}
		for (int i = 0; i < vetor.length; i++) {
			vetor[i] = Matriz[i / 5][i % 5];

		}

		boolean repetido = false;
		for (int i = 0; i < vetor.length; i++) {
			do {
				for (int j = 0; j < vetor.length; j++) {
					repetido = false;
					if (vetor[i] == vetor[j] && i != j) {
						int value = new Random().nextInt(100);
						for (int vetor1 = 0; vetor1 < vetor.length; vetor1++) {
							if (value == vetor[vetor1]) {
								value = new Random().nextInt(100);
							}
							vetor[i] = value;
						}
						repetido = true;
					}
				}
			} while (repetido);
		}
		int k = 0;
		for (int j = 0; j < 5; j++) {
			for (int j2 = 0; j2 < 5; j2++) {
				Matriz[j][j2] = vetor[k];
				k++;
			}
		}
		
		for (int j2 = 0; j2 < 5; j2++) {
			for (int l = 0; l < 5; l++) {
				System.out.print(Matriz[j2][l] + "\t");
			}
			System.out.println();
		}
	}

	

	// 7 Leia uma matriz 10 x 3 com as notas de 10 alunos em 3 provas. Em seguida,
	// escreva o número de alunos cuja pior nota foi na prova 1
	// , o número de alunos cuja pior nota foi na prova 2, e o numero de alunos cuja
	// pior nota foi na prova 3.
	// Em caso de empate das piores notas de um aluno,
	// o criterio de desempate é arbitrário, mas o aluno deve ser contabilizado
	// apenas uma vez.
	public static void exer7() {
		System.out.println();
		System.out.println("\\\\ MATRIZ [10][3] //");
		int[][] Matriz = new int[10][3];
		Random rand = new Random();
		int a = 0;
		int b = 0;
		int c = 0;
		System.out.println("10 Alunos com 3 notas:");

		for (int i = 0; i < 10; i++) {
			for (int j = 0; j < 3; j++) {
				Matriz[i][j] = rand.nextInt(100);
			}
		}
		System.out.println("Nota 1\t Nota 2\t Nota 3");
		for (int i = 0; i < 10; i++) {
			for (int j = 0; j < 3; j++) {
				System.out.print(Matriz[i][j] + "\t");

			}
			System.out.println();
		}
		for (int linha = 0; linha < 10; linha++) {
			int n1 = Matriz[linha][0];
			int n2 = Matriz[linha][1];
			int n3 = Matriz[linha][2];
			if (n1 < n2) {
				if (n1 < n3) {
					a++;
				} else {
					c++;
				}

			} else {
				if (n2 < n3) {
					b++;

				} else {
					c++;
				}
			}

		}
		System.out.println("Os alunos que reprovaram na primera prova foram: " + a);
		System.out.println("Os alunos que reprovaram na segunda prova foram: " + b);
		System.out.println("Os alunos que reprovaram na terceira prova foram: " + c);

	}

//8 8 Faça um programa que leia duas matrizes 2 x 2 com valores reais. Ofereça ao usuário um menu de opçoes:
	// (a) somar as duas matrizes.
	// (b) subtrair a primeira matriz da segunda.
	// (c) adicionar uma constante as duas matrizes.
	// (d) imprimir as matrizes.
	public static void exerci8() {

		System.out.println();
		System.out.println("\\\\ MATRIZ [2][2] //");
		int[][] Matriz = new int[2][2];
		int[][] Matriz2 = new int[2][2];
		System.out.println("\t");
		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 2; j++) {
				Matriz[i][j] = rand.nextInt(100);
				Matriz2[i][j] = rand.nextInt(100);

			}
		}
		System.out.println("Primeira Matriz: ");
		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 2; j++) {
				System.out.println(Matriz[i][j]);
				System.out.println();

			}
		}
		System.out.println("Segunda Matriz: ");
		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 2; j++) {
				System.out.println(Matriz2[i][j]);
				System.out.println();

			}
		}

		System.out.println("Soma das Matrizes: ");
		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 2; j++) {
				System.out.print((Matriz[i][j] + Matriz2[i][j]) + "\t");

			}
		}

		System.out.println("Subtração das Matrizes: ");
		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 2; j++) {
				System.out.print((Matriz[i][j] - Matriz2[i][j]) + "\t");

			}
		}
		System.out.println("Constante das Matrizes: ");
		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 2; j++) {
				Matriz[1][1] = 10;
				System.out.print((Matriz[i][j]) + "\t");

			}
		}
		System.out.println("Constante das Matrizes: ");
		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 2; j++) {
				Matriz2[1][1] = 10;
				System.out.print((Matriz2[i][j]) + "\t");

			}
		}

	}
}
