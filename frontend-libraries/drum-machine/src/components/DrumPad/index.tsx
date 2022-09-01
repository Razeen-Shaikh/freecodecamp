import { bankOne, bankTwo } from '../../assets/json-data/data';

const DrumPad = () => {

	const drum_pads1 = bankOne.map(drum_pad => {
		return (
			<div id={drum_pad.id} className="drum__pad"></div>
		)
	})

	const drum_pads2 = bankTwo.map(drum_pad => {
		return (
			<div id={drum_pad.id} className="drum__pad"></div>
		)
	})

	return (
		<>
			{drum_pads1}
			{drum_pads2}
		</>
	)
}

export default DrumPad
