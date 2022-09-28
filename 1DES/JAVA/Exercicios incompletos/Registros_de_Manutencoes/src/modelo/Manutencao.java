package modelo;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Objects;

public class Manutencao {
	private int id;
	private Date data;
	private String equipamento;
	private double custoHora;
	private double tempoGasto;
	SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	private final Locale Brasil = new Locale("pt", "br");
	private DecimalFormat df = new DecimalFormat("#.00");

	public Manutencao(int id) {
		this.id = id;
	}

	public Manutencao(int id, String data, String equipamento, double custoHora, double tempoGasto) {
		this.id = id;
		try {
			this.data = sdf.parse(data);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		this.equipamento = equipamento;
		this.custoHora = custoHora;
		this.tempoGasto = tempoGasto;
	}

	public Manutencao(String manu) {
		this.id = Integer.parseInt(manu.split(";")[0]);
		try {
			this.data = sdf.parse(manu.split(";")[1]);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		this.equipamento = manu.split(";")[2];
		this.custoHora = Double.parseDouble(manu.split(";")[3]);
		;
		this.tempoGasto = Double.parseDouble(manu.split(";")[4]);
		;

	}

	public int hashcode() {
		return Objects.hash(id);
	}

	public String getId1(String s) {
		return String.format("%d",id);
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getEquipamento() {
		return equipamento;
	}

	public void setEquipamento(String equipamento) {
		this.equipamento = equipamento;
	}

	public double getCustoHora() {

		return custoHora;
	}

	public void setCustoHora(double custoHora) {
		this.custoHora = custoHora;
	}

	public double getTempoGasto() {
		return tempoGasto;
	}

	public void setTempoGasto(double tempoGasto) {
		this.tempoGasto = tempoGasto;
	}

	public String getData(String string) {
		return sdf.format(data);
	}

	public String getCustoHora(String string) {
		// TODO Auto-generated method stub
		return df.format(custoHora);
	}

	public String getTempoGasto(String string) {
		// TODO Auto-generated method stub
		return df.format(tempoGasto);
	}

	public String getId(String string) {
		// TODO Auto-generated method stub
		return String.format("%d", id);
	}

	@Override
	public String toString() {
		return id + "\t" + data + ", equipamento=" + equipamento + "\t" + custoHora + "\t" + tempoGasto;
	}

	public String toCSV() {
		return id + "\t" + data + "\t" + equipamento + "\t" + custoHora + "\t" + tempoGasto;
	}

}
