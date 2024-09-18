import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import testImg from "../../assets/test.png";
import purpleCircle from "../../assets/Purple_circle.png";
import blackBox from "../../assets/square-png.webp";
import { useSingleAdvertisementToken } from "../../hooks/useAdvertisement";
import { Loader } from "../shared/loader/Loader";

export function ViewModalToken({ data, show, onClose }) {
  console.log("single userrrr ", data);
  var { advertisement, isLoading } = useSingleAdvertisementToken(data._id);
  console.log("........ ", advertisement);

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Post Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading ? (
          <Loader className='modalLoader' />
        ) : (
          <div className=''>
            {advertisement?.image_link && (
              <img
                className='img-modal'
                src={advertisement?.image_link}
                alt=''
              />
            )}
            {advertisement?.animation_link && (
              <video
                className='img-modal'
                src={advertisement?.animation_link}
                controls
              />
            )}
            {advertisement?.video_link && (
              <video
                className='img-modal'
                src={advertisement?.video_link}
                controls
              />
            )}
            <div className=' mb-3'>
              <div className='d-flex gap-1 align-items-center'>
                🟣
                <div className='weight600'> Name:</div>
                <div>{advertisement?.name}</div>
              </div>
              <div className=' d-flex gap-1 align-items-center'>
                🟣
                <div className='weight600'> Ticker:</div>
                <div>{advertisement?.symbol}</div>
              </div>
              <div className=' d-flex gap-1 align-items-center'>
                🟣
                <div className='weight600'> SOL:</div>
                <div className='solana-address'>
                  {advertisement?.solanaAddress}
                </div>
              </div>
            </div>
            <div>
              <p>{advertisement?.text}</p>
            </div>
            <div className=' mb-3'>
              <div className=' d-flex gap-1 align-items-center'>
                🔀
                <div className='weight600'>Price:</div>
                <div>${advertisement?.priceUsd}</div>
              </div>
              <div className=' d-flex gap-1 align-items-center'>
                🔀
                <div className='weight600'>Volume:</div>
                <div>{advertisement?.volume}</div>
              </div>
              <div className=' d-flex gap-1 align-items-center'>
                👤
                <div className='weight600'>24h:</div>
                <div>
                  %
                  {advertisement?.["24HourChange"] == null
                    ? "null"
                    : advertisement?.["24HourChange"]}
                </div>
              </div>
              <div className=' d-flex gap-1 align-items-center'>
                ⬆<div className='weight600'>Holders:</div>
                <div>{advertisement?.holders}</div>
              </div>
              <div className=' d-flex gap-1 align-items-center'>
                💸
                <div className='weight600'>Market Cap:</div>
                <div>${advertisement?.market_cap_usd}</div>
              </div>
            </div>
            <div className='d-flex gap-1 mb-3'>
              <a
                className='link-modal'
                href={
                  advertisement?.telegramLink?.startsWith("https://")
                    ? advertisement?.telegramLink
                    : `https://${advertisement?.telegramLink}`
                }
                target='_blank'
                rel='noopener noreferrer'
              >
                Telegram
              </a>

              <div>|</div>

              <a
                className='link-modal'
                href={
                  advertisement?.twitterLink?.startsWith("https://")
                    ? advertisement?.twitterLink
                    : `https://${advertisement?.twitterLink}`
                }
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>

              <div>|</div>

              <a
                className='link-modal'
                href={
                  advertisement?.websiteLink?.startsWith("https://")
                    ? advertisement?.websiteLink
                    : `https://${advertisement?.websiteLink}`
                }
                target='_blank'
                rel='noopener noreferrer'
              >
                Website
              </a>
            </div>

            <div className=' mb-5'>
              <div className=' d-flex gap-1 align-items-center'>
                <div className='weight600'>👨‍💻 Owner:</div>
                <div>{advertisement?.freezeAuthority}</div>
              </div>
              <div className=' d-flex gap-1 align-items-center'>
                <div className='weight600'>🔖 Tax:</div>
                <div>{advertisement?.transferFee || "No Tax Token"}</div>
              </div>
              <div className=' d-flex gap-1 align-items-center'>
                <div className='weight600'>💧 LP:</div>
                <div>
                  {advertisement?.poolInfo ? "Burned 🔥" : "Not Burned ⛔️"}
                </div>
              </div>
              <div className=' d-flex gap-1 align-items-center'>
                <div className='weight600'>🕰 Age :</div>
                <div>{advertisement?.age}</div>
              </div>
              <div className=' d-flex gap-1 align-items-center'>
                <div className='weight600'>👨🏻‍⚖️ Mint Authority:</div>
                <div>{advertisement?.mintAuthority || "No Tax Token"}</div>
              </div>
            </div>
            <div>ID # {advertisement?.postIdIncremental}</div>
            <div className='mb-2 mt-5 d-flex gap-3'>
              <div>
                📈
                <a
                  className='link-modal'
                  href={advertisement?.chartURL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Chart
                </a>
              </div>
              <div>
                💳
                <a
                  className='link-modal'
                  href={advertisement?.buyURL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
