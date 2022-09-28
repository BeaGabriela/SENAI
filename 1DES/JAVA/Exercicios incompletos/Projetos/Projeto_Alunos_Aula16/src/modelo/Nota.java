package modelo;



	public class Nota {

		public String componente;
		public static float[] nota = new float[3];
		public int[] vetor = new int[3];

		// construtor vazio
		public Nota() {

		}

		// contrutor completo
		public Nota(String componente, float[] nota) {
			this.componente = componente;
			this.nota = nota;
		}

		public String forString(int k) {
			return componente + "\t" + nota[k];

		}

		public float obterMedia() {
			float result = 0;
			for (int i = 0; i < nota.length; i++) {
				result+=nota[i];
				
			}
			return result/3;
		}

		public float Aluno() {
			float media = obterMedia();

			return media;

		}

	}





