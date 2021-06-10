import React, { useState } from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

const WeatherModal = () => {
    const [showModal, setShowModal] = useState();

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '2289c7dd3de72dc4ee08143fd8a85cf7',
    lat: '44.9308',
    lon: '2.44482',
    lang: 'fr',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <>
    <button
        className="bg-blue-400 text-white active:bg-pink-600 font-normal uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
    >
    <FontAwesomeIcon className="text-white" icon={faCloudSunRain} />
    </button>
    {showModal ? (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
               
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        <ReactWeather
isLoading={isLoading}
errorMessage={errorMessage}
data={data}
lang="fr"
locationLabel="Aurillac"
unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
showForecast
/>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            <button
                                className="text-blue-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none "
                                type="button"
                                style={{ transition: "all .15s ease" }}
                                onClick={() => setShowModal(false)}
                            >
                                Fermer
                            </button>
                                
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null}
</>
  );
};

export default WeatherModal;
