import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaTag } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";


const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects : []
          };
          setBook(newBook);
          // Fetch related books by first subject if available
          if (subjects && subjects.length > 0) {
            fetch(`https://openlibrary.org/subjects/${encodeURIComponent(subjects[0].toLowerCase().replace(/ /g, '_'))}.json?limit=10`)
              .then(res => res.json())
              .then(rel => {
                setRelatedBooks(rel.works || []);
              });
          } else {
            setRelatedBooks([]);
          }
        } else {
          setBook(null);
          setRelatedBooks([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setRelatedBooks([]);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className="book-details-modern">
      <div className="container-modern">
        <button 
          type='button' 
          className='back-btn-modern' 
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft className="back-icon" />
          <span>Go Back</span>
        </button>

        <div className='book-details-layout'>
          <div className='book-cover-section'>
            <div className='book-cover-wrapper'>
              <img 
                src={book?.cover_img} 
                alt="Book cover" 
                className="book-cover-image"
              />
            </div>
          </div>
          
          <div className='book-info-section'>
            <div className='book-header'>
              <h1 className='book-title'>{book?.title}</h1>
            </div>
            <div className='book-description-card'>
              <h3 className='section-title'>Description</h3>
              <p className='book-description'>{book?.description}</p>
            </div>
            <div className='book-metadata'>
              <div className='metadata-item'>
                <div className='metadata-header'>
                  <FaMapMarkerAlt className='metadata-icon' />
                  <span className='metadata-label'>Subject Places</span>
                </div>
                <p className='metadata-value'>{book?.subject_places}</p>
              </div>
              <div className='metadata-item'>
                <div className='metadata-header'>
                  <FaClock className='metadata-icon' />
                  <span className='metadata-label'>Subject Times</span>
                </div>
                <p className='metadata-value'>{book?.subject_times}</p>
              </div>
              <div className='metadata-item'>
                <div className='metadata-header'>
                  <FaTag className='metadata-icon' />
                  <span className='metadata-label'>Subjects</span>
                </div>
                <p className='metadata-value'>{book?.subjects && book.subjects.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Section */}
        <div style={{marginTop: '3rem'}}>
          <h2 style={{fontWeight:700, fontSize:'1.5rem', marginBottom:'1.5rem'}}>Recommended / More Like This</h2>
          {relatedBooks.length > 0 ? (
            <div className="booklist-content grid">
              {relatedBooks.map((item, idx) => (
                <div key={item.key || idx} className="booklist-item">
                  <a href={`/book/${item.key.replace('/works/', '')}`} style={{textDecoration:'none', color:'inherit'}}>
                    <img src={item.cover_id ? `https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg` : coverImg} alt={item.title} style={{width:'120px',height:'180px',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}} />
                    <div style={{marginTop:'0.5rem',fontWeight:600}}>{item.title}</div>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div>No recommendations found.</div>
          )}
        </div>
      </div>

      <style jsx>{`
        .book-details-modern {
          min-height: 100vh;
          background-color: #f8fafc;
          padding: 2rem 0;
        }

        .container-modern {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .back-btn-modern {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          padding: 0.875rem 1.5rem;
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          color: #475569;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .back-btn-modern:hover {
          background-color: #f1f5f9;
          border-color: #cbd5e1;
          transform: translateX(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .back-icon {
          font-size: 0.875rem;
        }

        .book-details-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          animation: fadeInUp 0.6s ease-out;
        }

        @media (min-width: 768px) {
          .book-details-layout {
            grid-template-columns: 300px 1fr;
            gap: 4rem;
          }
        }

        @media (min-width: 1024px) {
          .book-details-layout {
            grid-template-columns: 350px 1fr;
            gap: 5rem;
          }
        }

        .book-cover-section {
          display: flex;
          justify-content: center;
        }

        .book-cover-wrapper {
          width: 100%;
          max-width: 300px;
          background-color: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
        }

        @media (min-width: 768px) {
          .book-cover-wrapper {
            position: sticky;
            top: 2rem;
          }
        }

        .book-cover-image {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .book-info-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .book-header {
          background-color: white;
          padding: 2rem;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
        }

        .book-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .book-title {
            font-size: 2.5rem;
          }
        }

        .book-description-card {
          background-color: white;
          padding: 2rem;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #334155;
          margin: 0 0 1rem 0;
        }

        .book-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #64748b;
          margin: 0;
        }

        .book-metadata {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .metadata-item {
          background-color: white;
          padding: 1.5rem;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
        }

        .metadata-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .metadata-icon {
          font-size: 1rem;
          color: #6366f1;
        }

        .metadata-label {
          font-weight: 600;
          color: #334155;
          font-size: 0.875rem;
        }

        .metadata-value {
          font-size: 1.5rem;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .book-details-layout {
            animation: none;
          }
          
          .back-btn-modern {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BookDetails;