import '../styles/plantItem.css';
import CareScale from './CareScale';

function PlantItem ({ name, cover, id, water, light,price}) {
    function handleClick(plantName) {
        alert(`You want to purchase 1 ${plantName}? Very good choice 🌱✨`);
    }

    return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}$</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)

}

export default PlantItem